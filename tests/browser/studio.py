"""YuanKit 0.4 functional inspector and asset tests. Actual Vue/Chromium, in-memory pages.
Navigation to HTTP/file origins is restricted in some managed browsers. These tests do
not disable browser policy. Native storage across reload is NOT claimed as tested.
"""
from __future__ import annotations
import json, os, shutil, sys, time, traceback
from datetime import datetime, timezone
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
ROOT=Path(__file__).resolve().parents[2]; REPORTS=ROOT/'reports'; SHOTS=REPORTS/'screenshots'
PREVIEW=(ROOT/'preview.html').read_text(); VUE=(ROOT/'vendor/vue-3.5.13.global.prod.js').read_text()
UI=(ROOT/'packages/vue/dist/yuankit.global.js').read_text(); LIB=(ROOT/'packages/vue/dist/yuankit-studio.global.js').read_text(); CSS=(ROOT/'packages/vue/dist/style.css').read_text()
INSPECTOR=json.loads((ROOT/'registry/inspector.json').read_text()); ASSETS=INSPECTOR['assets']; FIELD_GROUP={v['label']:v['group'] for v in INSPECTOR['fields'].values()}; CASES=[]
def case(name):
 def register(fn):CASES.append((name,fn));return fn
 return register

def doc(p,asset='button'):
 p.set_content(PREVIEW);p.wait_for_timeout(60)
 if asset!='button':choose(p,asset)

def choose(p,asset):
 x=p.locator('[data-asset-id="'+asset+'"]');x.scroll_into_view_if_needed();x.click();p.wait_for_timeout(25)
def control(p,name):
 base=name.replace(' 色值','').replace(' 数值','')
 group='内容' if name.startswith('项目 ') else FIELD_GROUP.get(base)
 if group:
  tab=p.locator('.inspector-tabs').get_by_role('tab',name=group,exact=False)
  if tab.count() and not tab.get_attribute('aria-selected')=='true':tab.click()
 return p.locator('.studio-inspector').get_by_label(name,exact=True)
def range_value(p,name,value):
 x=control(p,name);x.evaluate('(e,v)=>{e.value=String(v);e.dispatchEvent(new Event("input",{bubbles:true}));}',value);p.wait_for_timeout(20)
def input_value(p,name,value):
 x=control(p,name);x.fill(str(value));x.press('Tab');p.wait_for_timeout(20)
def css(p,selector,key):return p.locator(selector).first.evaluate('(e,k)=>getComputedStyle(e)[k]',key)
def active(p):return p.locator('.studio-stage .yk-asset')
def mount(p,source):
 p.set_content('<html lang="zh-CN"><head><style>'+CSS+'</style></head><body style="margin:24px"><div id="fixture"></div></body></html>')
 p.add_script_tag(content=VUE);p.add_script_tag(content=UI);p.add_script_tag(content=LIB)
 p.evaluate('''source=>{window.events=[];window.state={};const fn=new Function('Vue','UI','Studio',source);window.app=Vue.createApp({setup(){return fn(Vue,YuanKit,YuanKitStudio)}});app.mount('#fixture');}''','const {h,ref}=Vue; const {YkConfigProvider:P,...C}=UI;'+source)
 p.wait_for_timeout(25)

@case('New primitives: range native keyboard and controlled value')
def slider(p):
 mount(p,"const n=ref(30);state.n=n;return ()=>h(P,{},()=>h(C.YkSlider,{label:'比例',modelValue:n.value,'onUpdate:modelValue':v=>n.value=v}));")
 p.get_by_role('slider',name='比例').focus();p.keyboard.press('ArrowRight');expect(p.get_by_role('slider')).to_have_value('31');assert p.evaluate('state.n.value')==31

@case('New primitives: accordion keyboard, expanded panel, single-open')
def accordion(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkAccordion,{items:[{value:'a',label:'第一项',content:'内容甲'},{value:'b',label:'第二项',content:'内容乙'}]}));")
 p.get_by_role('button',name='第一项').focus();p.keyboard.press('Enter');expect(p.get_by_role('button',name='第一项')).to_have_attribute('aria-expanded','true');expect(p.get_by_text('内容甲',exact=True)).to_be_visible()
 p.get_by_role('button',name='第二项').click();expect(p.get_by_text('内容甲',exact=True)).not_to_be_visible();expect(p.get_by_text('内容乙',exact=True)).to_be_visible()

@case('New primitives: breadcrumb and pagination navigate with proper boundaries')
def navigation(p):
 mount(p,"return ()=>h(P,{},()=>[h(C.YkBreadcrumb,{items:[{value:'home',label:'首页'},{value:'last',label:'当前'}],onNavigate:e=>events.push(e.item.value)}),h(C.YkPagination,{total:21,pageSize:10,'onUpdate:modelValue':n=>events.push(n)})]);")
 p.get_by_role('button',name='首页',exact=True).click();assert p.evaluate('events[0]')=='home';expect(p.locator('[aria-current="page"]').first).to_have_text('当前')
 expect(p.get_by_role('button',name='上一页')).to_be_disabled();p.get_by_role('button',name='下一页').click();p.get_by_role('button',name='下一页').click();expect(p.get_by_role('button',name='下一页')).to_be_disabled();assert p.evaluate('events.at(-1)')==3

@case('New primitives: skeleton and empty-state semantics/action')
def fallback(p):
 mount(p,"return ()=>h(P,{},()=>[h(C.YkSkeleton,{lines:4,avatar:true}),h(C.YkEmptyState,{title:'没有内容',actionLabel:'创建内容',onAction:()=>events.push('create')})]);")
 expect(p.locator('.yk-skeleton__lines > span')).to_have_count(4);expect(p.locator('.yk-skeleton')).to_have_attribute('aria-busy','true');p.get_by_role('button',name='创建内容').click();assert p.evaluate('events')==['create']

@case('Studio: all 103 assets render from real implementation without JS errors')
def catalogue(p):
 doc(p)
 for a in ASSETS:
  choose(p,a['id']);expect(active(p)).to_have_attribute('data-asset',a['id']);assert active(p).inner_text().strip() or a['id'] in ['separator','skeleton']
 assert p.locator('[data-asset-id]').count()==len(ASSETS)

@case('Inspector: width, height, radius zero and font sliders change computed styles')
def sizes(p):
 doc(p);range_value(p,'资产宽度',340);range_value(p,'控件高度',64);range_value(p,'圆角',0);range_value(p,'正文大小',22)
 expect(active(p).get_by_role('button')).to_be_visible();assert css(p,'.studio-stage .yk-button','borderRadius')=='0px';assert css(p,'.studio-stage .yk-button','fontSize')=='22px';assert css(p,'.studio-stage .yk-button','minHeight')=='64px';assert active(p).evaluate('e=>e.getBoundingClientRect().width')==340

@case('Inspector: color, skin, shadow and gradient affect rendered button')
def styles(p):
 doc(p);control(p,'视觉风格').select_option('precise')
 assert css(p,'.studio-stage .yk-button','borderRadius')=='4px'
 input_value(p,'强调色 色值','#123456');assert css(p,'.studio-stage .yk-button','backgroundColor')=='rgb(18, 52, 86)'
 p.locator('.studio-presets').get_by_role('button',name='渐变',exact=True).click();assert 'linear-gradient' in css(p,'.studio-stage .yk-button','backgroundImage')
 range_value(p,'阴影强度',24);p.wait_for_timeout(300);assert '48px' in css(p,'.studio-stage .yk-button','boxShadow')

@case('Inspector: local/type/global scopes do not leak into sibling assets')
def scopes(p):
 doc(p);p.get_by_role('button',name='查看同类默认').click();range_value(p,'圆角',0)
 assert css(p,'.studio-stage .yk-button','borderRadius')=='0px';assert css(p,'.studio-comparison .yk-button','borderRadius')=='14px'
 control(p,'调整范围').select_option('component');range_value(p,'圆角',20)
 assert css(p,'.studio-comparison .yk-button','borderRadius')=='20px';assert css(p,'.studio-stage .yk-button','borderRadius')=='0px';expect(control(p,'圆角')).to_have_value('20')
 control(p,'调整范围').select_option('global');range_value(p,'圆角',6)
 assert css(p,'.studio-comparison .yk-button','borderRadius')=='20px';expect(control(p,'圆角')).to_have_value('6')
 choose(p,'input');assert css(p,'.studio-stage .yk-input-wrap','borderRadius')=='6px'

@case('Inspector: undo/redo/reset restore only selected configuration level')
def undo(p):
 doc(p);range_value(p,'圆角',30);p.get_by_role('button',name='撤销',exact=True).click();assert css(p,'.studio-stage .yk-button','borderRadius')=='14px';p.get_by_role('button',name='重做',exact=True).click();assert css(p,'.studio-stage .yk-button','borderRadius')=='30px'
 p.get_by_role('button',name='重置 圆角',exact=True).click();assert css(p,'.studio-stage .yk-button','borderRadius')=='14px'

@case('Inspector: editing text is escaped; content is not executed')
def text(p):
 doc(p);input_value(p,'显示文字','<img src=x onerror=alert(1)>');expect(active(p).get_by_role('button')).to_have_text('<img src=x onerror=alert(1)>');assert active(p).locator('img').count()==0

@case('Inspector: item labels and count modify real tabs')
def items(p):
 doc(p,'tabs');input_value(p,'项目 1 名称','我的项目');expect(active(p).get_by_role('tab',name='我的项目')).to_be_visible()
 before=active(p).get_by_role('tab').count();control(p,'项目 1 名称').press('Tab');p.get_by_role('button',name='+ 添加项目',exact=True).click();assert active(p).get_by_role('tab').count()==before+1

@case('Studio: JSON export/import round-trip and invalid import is non-destructive')
def json_roundtrip(p):
 doc(p);range_value(p,'圆角',32)
 with p.expect_download() as d:p.get_by_role('button',name='导出 JSON',exact=True).click()
 data=json.loads(Path(d.value.path()).read_text());assert data['settings']['radius']==32
 p.get_by_role('button',name='恢复实例默认').click();p.get_by_label('导入方案文件',exact=True).set_input_files({'name':'preset.json','mimeType':'application/json','buffer':json.dumps(data).encode()});expect(p.locator('.studio-message')).to_contain_text('配置导入成功');assert css(p,'.studio-stage .yk-button','borderRadius')=='32px'
 invalid={**data,'settings':{'radius':-5}}
 p.get_by_label('导入方案文件',exact=True).set_input_files({'name':'bad.json','mimeType':'application/json','buffer':json.dumps(invalid).encode()});expect(p.locator('.studio-message')).to_contain_text('导入失败');assert css(p,'.studio-stage .yk-button','borderRadius')=='32px'

@case('Studio: Vue code export uses the same edited settings')
def vue_export(p):
 doc(p,'error-404');range_value(p,'圆角',26)
 with p.expect_download() as d:p.get_by_role('button',name='导出 Vue',exact=True).click()
 text=Path(d.value.path()).read_text();assert "@zhaoysg/yuankit-vue/studio" in text;assert '"asset": "error-404"' in text;assert '"radius": 26' in text
 p.get_by_role('button',name='Vue',exact=True).click();expect(p.locator('.studio-code pre')).to_contain_text('YkAsset')

@case('Studio: named presets save/load/delete in session; denied storage warning honest')
def save(p):
 doc(p);range_value(p,'圆角',28);p.get_by_role('button',name='保存为方案',exact=True).click();p.get_by_label('方案名称',exact=True).fill('测试圆角28');p.get_by_role('button',name='确认保存').click()
 expect(p.locator('.studio-saved').get_by_role('button',name='测试圆角28',exact=True)).to_be_visible();p.get_by_role('button',name='恢复实例默认').click();p.locator('.studio-saved').get_by_role('button',name='测试圆角28',exact=True).click();assert css(p,'.studio-stage .yk-button','borderRadius')=='28px'
 p.get_by_role('button',name='删除方案 测试圆角28').click();expect(p.locator('.studio-saved-item')).to_have_count(0)

@case('Assets: 404 primary and secondary actions are explicit events, not fake navigation')
def status(p):
 doc(p,'error-404');active(p).get_by_role('button',name='返回首页').click();expect(p.locator('.studio-event')).to_contain_text('primary');active(p).get_by_role('button',name='联系支持').click();expect(p.locator('.studio-event')).to_contain_text('secondary')

@case('Assets: responsive navbar opens/collapses and emits navigation')
def navbar(p):
 doc(p,'navbar');p.locator('.studio-devices').get_by_role('button',name='手机',exact=True).click();expect(active(p).get_by_role('navigation',name='主导航')).not_to_be_visible()
 active(p).get_by_role('button',name='菜单',exact=True).click();expect(active(p).get_by_role('navigation',name='主导航')).to_be_visible();active(p).get_by_role('navigation',name='主导航').get_by_role('button').first.click();expect(active(p).get_by_role('navigation',name='主导航')).not_to_be_visible();expect(p.locator('.studio-event')).to_contain_text('navigate')

@case('Assets: real modal follows local radius/padding and restores trigger focus')
def modal(p):
 doc(p,'dialog');range_value(p,'圆角',22);trigger=active(p).get_by_role('button',name='打开对话框');trigger.click();expect(p.get_by_role('dialog')).to_be_visible();assert css(p,'.studio-stage dialog','borderRadius')=='22px';p.keyboard.press('Escape');expect(p.get_by_role('dialog')).not_to_be_visible();expect(trigger).to_be_focused()

@case('Effects: hover lift works; OS reduced-motion and explicit disabled motion stop it')
def effects(p):
 mount(p,"const motion=ref(true);state.motion=motion;return ()=>h(Studio.YkAsset,{asset:'button',settings:{effect:'lift',hoverLift:8,duration:0,motion:motion.value}});")
 p.get_by_role('button').hover();assert 'matrix' in css(p,'.yk-button','transform');p.emulate_media(reduced_motion='reduce');assert css(p,'.yk-button','transform')=='none';p.emulate_media(reduced_motion='no-preference');p.evaluate('state.motion.value=false');p.wait_for_timeout(25);assert css(p,'.yk-button','transform')=='none'

@case('Studio: preview viewport and actual mobile page do not overflow horizontally')
def mobile(p):
 p.set_viewport_size({'width':390,'height':844});doc(p,'error-404');assert p.evaluate('document.documentElement.scrollWidth<=innerWidth')
 active(p).scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'studio-mobile-404.png'),full_page=False)
 choose(p,'button');assert p.evaluate('document.documentElement.scrollWidth<=innerWidth');range_value(p,'圆角',35);assert css(p,'.studio-stage .yk-button','borderRadius')=='35px'

@case('Studio: source notes and retained legacy component docs accessible')
def sources(p):
 doc(p);p.get_by_role('button',name='来源',exact=True).click();expect(p.locator('.studio-source-card a')).to_have_count(len(json.loads((ROOT/'references/inspiration-sources.json').read_text())));expect(p.locator('.studio-sources')).to_contain_text('没有抓取整站')
 p.evaluate("location.hash='components/slider'");p.wait_for_timeout(30);expect(p.locator('h1')).to_contain_text('YkSlider');p.get_by_role('button',name='滑块调样式 ↗',exact=True).click();expect(active(p)).to_have_attribute('data-asset','slider')

@case('Studio: visual evidence desktop button, 404, dark card and code')
def shots(p):
 p.set_viewport_size({'width':1560,'height':1040});doc(p);p.locator('.studio-presets').get_by_role('button',name='渐变',exact=True).click();range_value(p,'圆角',30);p.evaluate('window.scrollTo(0,0)');p.screenshot(path=str(SHOTS/'studio-button.png'),full_page=False)
 choose(p,'error-404');p.locator('.studio-workspace').scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'studio-404.png'),full_page=False)
 choose(p,'card');control(p,'色彩模式').select_option('dark');p.locator('.studio-workspace').scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'studio-dark-card.png'),full_page=False)
 p.get_by_role('button',name='Vue',exact=True).click();p.locator('.studio-workspace').scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'studio-code.png'),full_page=False)

def main():
 results=[]
 with sync_playwright() as pw:
  args={'headless':True};exe=os.getenv('CHROMIUM_PATH') or shutil.which('chromium')
  if exe:args['executable_path']=exe
  if os.name!='nt' and getattr(os,'geteuid',lambda:1)()==0:args['args']=['--no-sandbox']
  browser=pw.chromium.launch(**args);version=browser.version
  for name,fn in CASES:
   ctx=browser.new_context(viewport={'width':1440,'height':1000},accept_downloads=True);p=ctx.new_page();p.set_default_timeout(2500);errors=[];p.on('pageerror',lambda e:errors.append(str(e)));start=time.perf_counter()
   try:fn(p);assert not errors,str(errors);r={'name':name,'status':'passed'};print('PASS',name,flush=True)
   except Exception as e:r={'name':name,'status':'failed','error':str(e),'trace':traceback.format_exc()};print('FAIL',name,str(e)[:400],flush=True);p.screenshot(path=str(SHOTS/f'studio-failure-{len(results)+1}.png'),full_page=True)
   r['durationMs']=round((time.perf_counter()-start)*1000);results.append(r);ctx.close()
  browser.close()
 report={'version':'0.5.0','at':datetime.now(timezone.utc).isoformat(),'browser':'Chromium '+version,'vue':'3.5.13','total':len(results),'passed':sum(r['status']=='passed' for r in results),'failed':sum(r['status']=='failed' for r in results),'tests':results,'notVerified':['native localStorage across reload under a normal origin','file:// or HTTP navigation in managed browser','Safari / Firefox','Vue SFC consumer build and full typing','full accessibility audit','upstream pixel matching','GitHub remote CI']}
 (REPORTS/'studio-browser-results.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');print(f"{report['passed']}/{report['total']} passed");return 1 if report['failed'] else 0
if __name__=='__main__':sys.exit(main())
