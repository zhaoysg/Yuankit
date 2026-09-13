"""Real Vue + Chromium contract tests. No network, React, or fake Vue implementation.
Install: python -m pip install -r tests/browser/requirements.txt
         python -m playwright install chromium
Run: npm run build && python tests/browser/run.py
CHROMIUM_PATH may select a system browser. Pages use set_content, so local URL
policies are respected and no development server or internet connection is needed.
"""
from __future__ import annotations
import json
import os
import shutil
import sys
import time
import traceback
from datetime import datetime, timezone
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
ROOT = Path(__file__).resolve().parents[2]
REPORTS = ROOT / 'reports'
SHOTS = REPORTS / 'screenshots'
SHOTS.mkdir(parents=True, exist_ok=True)
VUE = (ROOT / 'vendor/vue-3.5.13.global.prod.js').read_text()
LIB = (ROOT / 'packages/vue/dist/yuankit.global.js').read_text()
CSS = (ROOT / 'packages/vue/dist/style.css').read_text()
PREVIEW = (ROOT / 'preview.html').read_text()
CASES = []
def case(name):
    def register(fn):
        CASES.append((name, fn))
        return fn
    return register

def mount(page, setup):
    page.set_content('<html lang="zh-CN"><head><meta charset="utf-8"><style>' + CSS + '</style></head><body style="margin:32px"><div id="fixture"></div></body></html>')
    page.add_script_tag(content=VUE)
    page.add_script_tag(content=LIB)
    page.evaluate('''(source) => {
      window.events = []; window.state = {};
      const factory = new Function('Vue', 'UI', source);
      window.app = Vue.createApp({setup() { return factory(Vue, YuanKit); }});
      window.app.mount('#fixture');
    }''', "const {h,ref,nextTick}=Vue; const {YkConfigProvider:P,...C}=UI; " + setup)
    page.wait_for_timeout(30)

def doc(page, route='overview'):
    page.set_content(PREVIEW)
    page.evaluate('(r)=>{location.hash=r}', route)
    page.wait_for_timeout(60)

@case('Button: default type, keyboard activation, loading and disabled guard')
def button(p):
    mount(p, "return ()=>h(P,{},()=>[h(C.YkButton,{onClick:()=>events.push('ok')},()=> '保存'),h(C.YkButton,{disabled:true,onClick:()=>events.push('bad')},()=> '禁用'),h(C.YkButton,{loading:true,onClick:()=>events.push('bad')},()=> '加载')]);")
    expect(p.get_by_role('button',name='保存')).to_have_attribute('type','button')
    p.get_by_role('button',name='保存').focus();p.keyboard.press('Enter');p.keyboard.press('Space')
    expect(p.get_by_role('button',name='禁用')).to_be_disabled()
    expect(p.get_by_role('button',name='加载')).to_have_attribute('aria-busy','true')
    assert p.evaluate('events') == ['ok','ok']

@case('Input: controlled v-model, clear and focus return')
def input_model(p):
    mount(p,"const value=ref('first');state.value=value;return ()=>h(P,{},()=>h(C.YkInput,{label:'标题',clearable:true,modelValue:value.value,'onUpdate:modelValue':v=>value.value=v}));")
    p.get_by_label('标题',exact=True).fill('second');assert p.evaluate('state.value.value')=='second'
    p.get_by_role('button',name='清空 标题').click()
    expect(p.get_by_label('标题',exact=True)).to_have_value('');expect(p.get_by_label('标题',exact=True)).to_be_focused()

@case('Input: native attributes and composed description/error IDs')
def input_aria(p):
    mount(p,"return ()=>h(P,{},()=>[h('span',{id:'external'},'外部说明'),h(C.YkInput,{label:'邮箱',type:'email',name:'email',required:true,description:'收件地址',error:'不能为空','aria-describedby':'external',autocomplete:'email'})]);")
    field=p.get_by_label('邮箱',exact=False);expect(field).to_have_attribute('aria-invalid','true');expect(field).to_have_attribute('name','email')
    ids=field.get_attribute('aria-describedby').split();assert len(ids)==3
    assert all(p.locator('[id="'+i+'"]').count()==1 for i in ids)

@case('Input: IME composition is not emitted before compositionend')
def input_ime(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkInput,{label:'中文','onUpdate:modelValue':v=>events.push(v)}));")
    p.get_by_label('中文').evaluate("el=>{el.dispatchEvent(new CompositionEvent('compositionstart',{bubbles:true}));el.value='中';el.dispatchEvent(new InputEvent('input',{bubbles:true,isComposing:true}));}")
    assert p.evaluate('events')==[]
    p.get_by_label('中文').evaluate("el=>{el.value='中文';el.dispatchEvent(new CompositionEvent('compositionend',{bubbles:true,data:'中文'}));}")
    assert p.evaluate('events')==['中文']

@case('Input: readonly default value cannot be edited or cleared')
def input_readonly(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkInput,{label:'只读',defaultValue:'locked',readonly:true,clearable:true}));")
    expect(p.get_by_label('只读')).to_have_value('locked');expect(p.get_by_label('只读')).not_to_be_editable()
    assert p.get_by_role('button').count()==0

@case('Textarea: native maxlength and count update')
def textarea(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkTextarea,{label:'介绍',maxlength:5,showCount:true,'onUpdate:modelValue':v=>events.push(v)}));")
    p.get_by_label('介绍').fill('12345678');expect(p.get_by_label('介绍')).to_have_value('12345')
    assert '5' in p.locator('body').inner_text();assert p.evaluate('events.at(-1)')=='12345'

@case('Checkbox: native form value, Space and indeterminate')
def checkbox(p):
    mount(p,"return ()=>h(P,{},()=>h('form',{},[h(C.YkCheckbox,{label:'接受',name:'terms',value:'yes',description:'须阅读','aria-describedby':'extra'}),h('span',{id:'extra'},'额外'),h(C.YkCheckbox,{label:'部分',indeterminate:true})]));")
    p.get_by_label('接受',exact=False).focus();p.keyboard.press('Space')
    expect(p.get_by_label('接受',exact=False)).to_be_checked()
    assert p.evaluate("new FormData(document.querySelector('form')).get('terms')")=='yes'
    assert p.get_by_label('部分').evaluate('e=>e.indeterminate')
    assert 'extra' in p.get_by_label('接受',exact=False).get_attribute('aria-describedby')

@case('Switch: keyboard and form serialization')
def switch(p):
    mount(p,"return ()=>h(P,{},()=>h('form',{},h(C.YkSwitch,{label:'启用',name:'enabled',value:'yes','onUpdate:modelValue':v=>events.push(v)}))); ")
    x=p.get_by_role('switch',name='启用');x.focus();p.keyboard.press('Space');expect(x).to_be_checked()
    assert p.evaluate('events')==[True];assert p.evaluate("new FormData(document.querySelector('form')).get('enabled')")=='yes'

@case('RadioGroup: arrow navigation skips disabled options')
def radio(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkRadioGroup,{label:'角色',defaultValue:'a',options:[{value:'a',label:'访客'},{value:'b',label:'禁用',disabled:true},{value:'c',label:'编辑'}],'onUpdate:modelValue':v=>events.push(v)}));")
    p.get_by_role('radio',name='访客').focus();p.keyboard.press('ArrowRight')
    expect(p.get_by_role('radio',name='编辑')).to_be_checked();assert p.evaluate('events')==['c']

@case('Select: controlled option selection and disabled option')
def select(p):
    mount(p,"const value=ref('a');state.value=value;return ()=>h(P,{},()=>h(C.YkSelect,{label:'分类',modelValue:value.value,'onUpdate:modelValue':v=>value.value=v,options:[{value:'a',label:'文档'},{value:'b',label:'文章'},{value:'c',label:'受限',disabled:true}]}));")
    p.get_by_label('分类').select_option('b');assert p.evaluate('state.value.value')=='b'
    expect(p.get_by_role('option',name='受限')).to_be_disabled()

@case('Dialog: title, Escape, focus restoration and scroll unlock')
def dialog(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkDialog,{title:'编辑空间',description:'修改信息'},{trigger:({open})=>h(C.YkButton,{onClick:open},()=> '打开弹窗'),default:()=>h(C.YkInput,{label:'名称'})}));")
    trigger=p.get_by_role('button',name='打开弹窗');trigger.click();expect(p.get_by_role('dialog',name='编辑空间')).to_be_visible()
    assert p.evaluate("document.body.style.overflow")=='hidden'
    assert p.evaluate("document.querySelector('dialog').contains(document.activeElement)")
    p.keyboard.press('Escape');expect(p.get_by_role('dialog')).not_to_be_visible();expect(trigger).to_be_focused()
    assert p.evaluate('document.body.style.overflow')==''

@case('Dialog: controlled close veto keeps dialog open')
def dialog_veto(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkDialog,{title:'保持打开',open:true,'onUpdate:open':v=>events.push(v)}));")
    p.keyboard.press('Escape');expect(p.get_by_role('dialog')).to_be_visible();assert p.evaluate('events')==[False]

@case('Dialog: backdrop pointer hit-testing closes only outside')
def dialog_backdrop(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkDialog,{title:'测试背景',defaultValue:true},()=>h('p',{},'内部内容')));")
    p.get_by_text('内部内容').click();expect(p.get_by_role('dialog')).to_be_visible()
    p.mouse.click(4,4);expect(p.get_by_role('dialog')).not_to_be_visible()

@case('Dialog: nested scroll locks and unmount cleanup')
def dialog_nested(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkDialog,{title:'外层',defaultValue:true},()=>h(C.YkDialog,{title:'内层'},{trigger:({open})=>h(C.YkButton,{onClick:open},()=> '打开内层')})));")
    p.get_by_role('button',name='打开内层').click();assert p.locator('dialog[open]').count()==2
    p.keyboard.press('Escape');p.wait_for_timeout(50);assert p.locator('dialog[open]').count()==1
    assert p.evaluate('document.body.style.overflow')=='hidden'
    p.evaluate('app.unmount()');assert p.evaluate('document.body.style.overflow')==''

@case('Tabs: automatic keyboard activation, disabled skip and ARIA linkage')
def tabs(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkTabs,{items:[{value:'a',label:'甲',content:'第一'},{value:'b',label:'乙',disabled:true},{value:'c',label:'丙',content:'第三'}]}));")
    p.get_by_role('tab',name='甲').focus();p.keyboard.press('ArrowRight');expect(p.get_by_role('tab',name='丙')).to_have_attribute('aria-selected','true')
    expect(p.get_by_role('tabpanel',name='丙')).to_be_visible();p.keyboard.press('Home');expect(p.get_by_role('tab',name='甲')).to_be_focused()
    assert p.locator('[role=tab][tabindex="0"]').count()==1

@case('Tabs: manual activation preserves content until Enter')
def tabs_manual(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkTabs,{activation:'manual',items:[{value:'a',label:'甲'},{value:'b',label:'乙'}]}));")
    p.get_by_role('tab',name='甲').focus();p.keyboard.press('ArrowRight');expect(p.get_by_role('tab',name='甲')).to_have_attribute('aria-selected','true')
    p.keyboard.press('Enter');expect(p.get_by_role('tab',name='乙')).to_have_attribute('aria-selected','true')

@case('Tooltip: focus, describedby, Escape and dark portal inheritance')
def tooltip(p):
    mount(p,"return ()=>h(P,{mode:'dark'},()=>h(C.YkTooltip,{text:'这里有说明',delay:0},{default:({attrs})=>h(C.YkButton,attrs,()=> '提示按钮')}));")
    btn=p.get_by_role('button',name='提示按钮');btn.focus();tip=p.get_by_role('tooltip');expect(tip).to_be_visible()
    expect(tip).to_have_attribute('data-yk-mode','dark');assert btn.get_attribute('aria-describedby')==tip.get_attribute('id')
    p.keyboard.press('Escape');expect(tip).not_to_be_visible()

@case('Tooltip: hover keeps bubble visible and works in modal top layer')
def tooltip_modal(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkDialog,{title:'提示容器',defaultValue:true},()=>h(C.YkTooltip,{text:'弹窗内提示',delay:0},{default:({attrs})=>h(C.YkButton,attrs,()=> '悬停')})));")
    p.get_by_role('button',name='悬停').hover();tip=p.get_by_role('tooltip');expect(tip).to_be_visible()
    assert tip.evaluate("e=>!!e.closest('dialog[open]')")
    tip.hover();p.wait_for_timeout(160);expect(tip).to_be_visible()

@case('Alert: semantic role, dismiss and emitted event')
def alert(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkAlert,{tone:'danger',dismissible:true,title:'错误',onDismiss:()=>events.push('dismiss')},()=> '请重试'));")
    expect(p.get_by_role('alert')).to_be_visible();p.get_by_role('button').click();expect(p.get_by_role('alert')).not_to_be_visible()
    assert p.evaluate('events')==['dismiss']

@case('Avatar: accessible fallback after image failure')
def avatar(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkAvatar,{name:'元件团队',src:'data:image/png;base64,broken'}));")
    expect(p.get_by_role('img',name='元件团队')).to_be_visible();p.wait_for_timeout(80)
    assert '元件' in p.locator('body').inner_text()

@case('Progress: clamped and indeterminate ARIA')
def progress(p):
    mount(p,"return ()=>h(P,{},()=>[h(C.YkProgress,{label:'超限',value:200}),h(C.YkProgress,{label:'加载'}),h(C.YkProgress,{label:'错误最大值',value:50,max:0})]);")
    expect(p.get_by_role('progressbar',name='超限')).to_have_attribute('aria-valuenow','100')
    assert p.get_by_role('progressbar',name='加载').get_attribute('aria-valuenow') is None
    expect(p.get_by_role('progressbar',name='错误最大值')).to_have_attribute('aria-valuemax','100')

@case('Card, Badge and Separator: slots and structural semantics')
def basic(p):
    mount(p,"return ()=>h(P,{},()=>h(C.YkCard,{as:'article',title:'卡片',description:'说明'},{default:()=>[h(C.YkBadge,{tone:'success',dot:true},()=> '正常'),h(C.YkSeparator,{orientation:'vertical',decorative:false}),h(C.YkSeparator,{decorative:true})],footer:()=> '底部'}));")
    assert p.locator('article').count()==1;expect(p.get_by_role('heading',name='卡片')).to_be_visible()
    expect(p.get_by_role('separator')).to_have_attribute('aria-orientation','vertical');assert '底部' in p.locator('body').inner_text()

@case('ConfigProvider: nested config, token and component prop precedence')
def provider(p):
    mount(p,"return ()=>h(P,{mode:'dark',size:'lg',tokens:{primary:'#224488'}},()=>h(P,{skin:'precise',size:'sm'},()=>[h(C.YkButton,()=> '继承'),h(C.YkButton,{size:'md'},()=> '覆盖')]));")
    expect(p.get_by_role('button',name='继承')).to_have_class(__import__('re').compile('yk-size--sm'))
    expect(p.get_by_role('button',name='覆盖')).to_have_class(__import__('re').compile('yk-size--md'))
    assert p.get_by_role('button',name='继承').evaluate("e=>getComputedStyle(e).getPropertyValue('--yk-primary').trim()")=='#224488'

@case('Workbench: all registered component pages and API/spec routes render')
def workbench_pages(p):
    doc(p)
    registry=json.loads((ROOT/'registry/components.json').read_text())
    for c in registry:
        if c['status']=='draft':continue
        p.evaluate('(r)=>{location.hash=r}', 'components/'+c['id']);p.wait_for_timeout(35)
        expect(p.locator('h1')).to_contain_text(c['name'])
        p.get_by_role('tab',name='参数接口',exact=True).click();expect(p.locator('.api-table')).to_be_visible()
        p.get_by_role('tab',name='设计与交互规范',exact=True).click();expect(p.get_by_role('heading',name='交互与键盘规则')).to_be_visible()

@case('Workbench: theme switching, override and valid JSON export')
def workbench_theme(p):
    doc(p,'themes')
    p.get_by_label('视觉风格',exact=True).select_option('precise');p.get_by_label('亮暗模式',exact=True).select_option('dark')
    p.get_by_label('组件密度',exact=True).select_option('compact')
    expect(p.locator('.app-shell')).to_have_attribute('data-yk-mode','dark')
    expect(p.locator('.app-shell')).to_have_attribute('data-yk-skin','precise')
    p.get_by_label('品牌色',exact=True).fill('#196844')
    with p.expect_download() as info:p.get_by_role('button',name='导出主题 JSON').click()
    download=info.value;data=json.loads(Path(download.path()).read_text())
    assert data['tokens']['primary']=='#196844' and data['mode']=='dark' and data['density']=='compact'
    p.screenshot(path=str(SHOTS/'theme-dark.png'),full_page=True)

@case('Workbench: pattern form validation and non-server save feedback')
def workbench_patterns(p):
    doc(p,'patterns');p.get_by_label('工作邮箱',exact=False).fill('invalid');p.get_by_role('button',name='保存设置').click()
    expect(p.get_by_text('请输入有效的邮箱地址')).to_be_visible()
    p.get_by_label('工作邮箱',exact=False).fill('team@example.com');p.get_by_role('button',name='保存设置').click()
    expect(p.get_by_text('演示设置已在本页更新；未写入服务端。')).to_be_visible()
    p.screenshot(path=str(SHOTS/'patterns.png'),full_page=True)

@case('Workbench: desktop screenshot, search and skip link')
def workbench_desktop(p):
    p.set_viewport_size({'width':1440,'height':1000});doc(p)
    p.screenshot(path=str(SHOTS/'overview.png'),full_page=True)
    p.get_by_label('搜索组件',exact=True).fill('Tooltip');expect(p.locator('.component-index .component-tile')).to_have_count(1)
    p.locator('.skip-link').focus();p.keyboard.press('Enter');expect(p.locator('main')).to_be_focused()
    assert p.evaluate('location.hash')=='#overview'

@case('Workbench: mobile menu, keyboard hiding and no horizontal page overflow')
def workbench_mobile(p):
    p.set_viewport_size({'width':390,'height':844});doc(p)
    assert p.evaluate('document.documentElement.scrollWidth<=innerWidth')
    expect(p.locator('.sidebar')).not_to_be_visible()
    p.get_by_role('button',name='目录',exact=True).click();expect(p.locator('.sidebar')).to_be_visible()
    p.get_by_role('link',name='输入框 Input',exact=True).click();expect(p.locator('h1')).to_contain_text('YkInput')
    expect(p.locator('.sidebar')).not_to_be_visible();assert p.evaluate('document.documentElement.scrollWidth<=innerWidth')
    p.screenshot(path=str(SHOTS/'mobile-input.png'),full_page=True)

@case('Reduced motion respects OS preference and explicit configuration')
def reduced_motion(p):
    p.emulate_media(reduced_motion='reduce')
    mount(p,"return ()=>h(P,{motion:false},()=>h(C.YkButton,{loading:true},()=> '加载'));")
    duration=p.get_by_role('button').evaluate('e=>getComputedStyle(e).transitionDuration')
    assert all(float(v.strip().removesuffix('s'))<=0.001 for v in duration.split(','))


def main():
    results=[]
    with sync_playwright() as playwright:
        executable=os.getenv('CHROMIUM_PATH') or shutil.which('chromium') or None
        args={'headless':True}
        if executable: args['executable_path']=executable
        if os.name!='nt' and getattr(os,'geteuid',lambda:1)()==0:args['args']=['--no-sandbox']
        browser=playwright.chromium.launch(**args)
        browser_version=browser.version
        for name,fn in CASES:
            context=browser.new_context(viewport={'width':1280,'height':900},accept_downloads=True)
            page=context.new_page();page.set_default_timeout(2000)
            errors=[];page.on('pageerror',lambda err:errors.append(str(err)))
            start=time.perf_counter()
            try:
                fn(page)
                assert not errors, 'Browser JavaScript errors: '+str(errors)
                result={'name':name,'status':'passed'}
                print('PASS',name,flush=True)
            except Exception as error:
                result={'name':name,'status':'failed','error':str(error),'trace':traceback.format_exc()}
                page.screenshot(path=str(SHOTS/f'failure-{len(results)+1}.png'),full_page=True)
                print('FAIL',name,':',str(error)[:250],flush=True)
            result['durationMs']=round((time.perf_counter()-start)*1000)
            results.append(result);context.close()
        browser.close()
    report={'timestamp':datetime.now(timezone.utc).isoformat(),'vue':'3.5.13','browser':'Chromium '+browser_version,'mode':'real compiled Vue render functions; in-memory HTML with no network','passed':sum(r['status']=='passed' for r in results),'failed':sum(r['status']=='failed' for r in results),'total':len(results),'tests':results,'notCovered':['Safari/Firefox','Screen-reader or full WCAG audit','Pixel matching to upstream websites','Real Vue SFC consumer type-check/build','npm registry publishing or GitHub remote CI']}
    (REPORTS/'browser-results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    print(f"\n{report['passed']}/{report['total']} passed; {report['failed']} failed")
    return 1 if report['failed'] else 0
if __name__=='__main__':sys.exit(main())
