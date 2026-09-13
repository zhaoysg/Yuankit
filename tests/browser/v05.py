"""v0.5 behavior and safety regression. Local fixtures, not live model or upload tests."""
from __future__ import annotations
import json, os, shutil, sys, time, traceback
from datetime import datetime, timezone
from pathlib import Path
from playwright.sync_api import sync_playwright, expect
from studio import ROOT, SHOTS, REPORTS, mount, doc, choose, control, range_value, active, css
CASES=[]
def case(name):
 def wrap(fn): CASES.append((name,fn)); return fn
 return wrap

@case('Combobox: external selection synchronizes; keyboard skips disabled; Esc closes')
def combo(p):
 mount(p,"const v=ref('a');state.v=v;return ()=>h(P,{},()=>h(C.YkCombobox,{label:'资源',modelValue:v.value,'onUpdate:modelValue':x=>v.value=x,options:[{value:'a',label:'Alpha'},{value:'b',label:'Beta',disabled:true},{value:'c',label:'Gamma'}]}));")
 box=p.get_by_role('combobox');expect(box).to_have_value('Alpha');p.evaluate("state.v.value='c'");expect(box).to_have_value('Gamma')
 box.fill('');box.press('ArrowDown');box.press('Enter');assert p.evaluate('state.v.value')!='b';box.click();box.press('Escape');expect(p.get_by_role('listbox')).not_to_be_visible()

@case('Combobox: disabled instance cannot select or change value')
def combo_disabled(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkCombobox,{disabled:true,label:'禁用资源',options:[{value:'a',label:'Alpha'}],'onUpdate:modelValue':x=>events.push(x)}));")
 expect(p.get_by_role('combobox')).to_be_disabled();assert p.evaluate('events')==[]

@case('Popover: two instances isolate outside clicks and return focus on Escape')
def popover(p):
 mount(p,"return ()=>h(P,{},()=>['甲','乙'].map(n=>h(C.YkPopover,{label:n},{trigger:({toggle,attrs})=>h('button',{...attrs,onClick:toggle},'打开'+n),default:()=>h('button',{},'内容'+n)})));")
 a=p.get_by_role('button',name='打开甲');b=p.get_by_role('button',name='打开乙');a.click();expect(p.get_by_role('dialog',name='甲')).to_be_visible();b.click();expect(p.get_by_role('dialog',name='甲')).not_to_be_visible();expect(p.get_by_role('dialog',name='乙')).to_be_visible();p.keyboard.press('Escape');expect(b).to_be_focused()

@case('Calendar: leap-year keyboard selection and month-change clamp')
def calendar(p):
 mount(p,"const v=ref('2024-02-28');state.v=v;return ()=>h(P,{},()=>h(C.YkCalendar,{modelValue:v.value,'onUpdate:modelValue':x=>v.value=x}));")
 day=p.get_by_role('button',name='2024-02-28',exact=True);day.focus();day.press('ArrowRight');expect(p.get_by_role('button',name='2024-02-29',exact=True)).to_be_focused();p.keyboard.press('Enter');assert p.evaluate('state.v.value')=='2024-02-29';p.keyboard.press('PageDown');expect(p.get_by_role('button',name='2024-03-29',exact=True)).to_be_focused()

@case('Calendar: inclusive minimum/maximum restrict clicks and navigation')
def calendar_limits(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkCalendar,{defaultValue:'2026-09-12',min:'2026-09-12',max:'2026-09-14'}));")
 expect(p.get_by_role('button',name='2026-09-11',exact=True)).to_be_disabled();expect(p.get_by_role('button',name='2026-09-15',exact=True)).to_be_disabled();expect(p.get_by_role('button',name='上个月')).to_be_disabled();expect(p.get_by_role('button',name='下个月')).to_be_disabled()

@case('Native date field: controlled ISO input and FormData binding')
def date_input(p):
 mount(p,"const v=ref('2026-09-12');state.v=v;return ()=>h(P,{},()=>h('form',{},h(C.YkDatePicker,{label:'交付日期',name:'due',modelValue:v.value,'onUpdate:modelValue':x=>v.value=x})));")
 p.get_by_label('交付日期',exact=True).fill('2026-09-25');assert p.evaluate('state.v.value')=='2026-09-25';assert p.evaluate("new FormData(document.querySelector('form')).get('due')")=='2026-09-25'

@case('File selection: accepted types, rejection, no uploads and remove')
def uploads(p):
 requests=[];p.on('request',lambda r:requests.append(r.url))
 mount(p,"const files=ref([]);state.files=files;return ()=>h(P,{},()=>h(C.YkFileUpload,{label:'资料',accept:'.txt',maxSize:200,maxFiles:2,modelValue:files.value,'onUpdate:modelValue':v=>files.value=v,onReject:r=>events.push(r.map(x=>x.reason))}));")
 p.locator('input[type=file]').set_input_files([{'name':'ok.txt','mimeType':'text/plain','buffer':b'hello'},{'name':'no.exe','mimeType':'application/octet-stream','buffer':b'hello'}]);assert p.evaluate('state.files.value.length')==1;expect(p.get_by_role('alert')).to_contain_text('不支持');p.get_by_role('button',name='移除 ok.txt').click();assert p.evaluate('state.files.value.length')==0;assert not requests

@case('Tree: keyboard expand, skip disabled and select leaf')
def tree(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkTree,{items:[{value:'root',label:'目录',children:[{value:'a',label:'禁用',disabled:true},{value:'b',label:'目标'}]}],'onUpdate:modelValue':v=>events.push(v)}));")
 root=p.get_by_role('treeitem',name='目录');root.focus();root.press('ArrowRight');expect(root).to_have_attribute('aria-expanded','true');root.press('ArrowDown');expect(p.get_by_role('treeitem',name='目标')).to_be_focused();p.keyboard.press('Enter');assert p.evaluate('events')==['b'];p.keyboard.press('ArrowLeft');expect(root).to_be_focused()

@case('Carousel: manual boundaries and loop behavior, no autoplay')
def carousel(p):
 mount(p,"const loop=ref(false);state.loop=loop;return ()=>h(P,{},()=>h(C.YkCarousel,{loop:loop.value,items:[{label:'第一',content:'内容一'},{label:'第二',content:'内容二'}],'onUpdate:modelValue':v=>events.push(v)}));")
 expect(p.get_by_role('button',name='上一张')).to_be_disabled();p.get_by_role('button',name='下一张').click();expect(p.get_by_role('heading',name='第二')).to_be_visible();expect(p.get_by_role('button',name='下一张')).to_be_disabled();p.evaluate('state.loop.value=true');p.get_by_role('button',name='下一张').click();expect(p.get_by_role('heading',name='第一')).to_be_visible()

@case('Toast: timer pauses while pointer OR keyboard focus remains inside')
def toast(p):
 mount(p,"const o=ref(true);state.o=o;return ()=>h(P,{},()=>[h(C.YkToast,{open:o.value,duration:700,title:'保存成功','onUpdate:open':v=>o.value=v}),h('button',{},'外部')]);")
 button=p.get_by_role('button',name='关闭轻提示');button.focus();button.hover();p.mouse.move(1,1);p.wait_for_timeout(760);expect(p.get_by_role('status')).to_be_visible();p.get_by_role('button',name='外部').focus();p.wait_for_timeout(760);assert p.evaluate('state.o.value') is False

@case('Command: search, disabled skip, select event and focus restoration')
def command(p):
 mount(p,"const o=ref(false);return ()=>h(P,{},()=>[h('button',{onClick:()=>o.value=true},'命令'),h(C.YkCommand,{open:o.value,'onUpdate:open':v=>o.value=v,items:[{value:'a',label:'打开资源',disabled:true},{value:'b',label:'打开样式'}],onSelect:i=>events.push(i.value)})]);")
 trigger=p.get_by_role('button',name='命令',exact=True);trigger.click();box=p.get_by_role('combobox');box.fill('样式');box.press('Enter');assert p.evaluate('events')==['b'];expect(p.get_by_role('dialog')).not_to_be_visible();expect(trigger).to_be_focused()

@case('Sidebar: collapse and navigation are actual stateful controls')
def sidebar(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkSidebar,{items:[{value:'a',label:'首页'},{value:'b',label:'资料'}],'onUpdate:modelValue':v=>events.push(v)}));")
 p.get_by_role('button',name='资料',exact=True).click();assert p.evaluate('events')==['b'];p.locator('.yk-sidebar').get_by_role('button').first.click();assert 'is-collapsed' in p.locator('.yk-sidebar').get_attribute('class')

@case('Chart: finite negative data, line switch and readable table')
def chart(p):
 mount(p,"const kind=ref('bar');state.kind=kind;return ()=>h(P,{},()=>h(C.YkChart,{data:[{label:'A',value:-10},{label:'B',value:20},{label:'无效',value:NaN}],kind:kind.value}));")
 expect(p.locator('.yk-chart svg rect')).to_have_count(2);expect(p.locator('.yk-chart tbody tr')).to_have_count(2);expect(p.locator('.yk-chart table')).to_contain_text('-10');p.evaluate("state.kind.value='line'");expect(p.locator('.yk-chart polyline')).to_have_count(1)

@case('Tags: IME guard, Enter add, duplicate rejection and Backspace remove')
def tags(p):
 mount(p,"const v=ref([]);state.v=v;return ()=>h(P,{},()=>h(C.YkTagsInput,{modelValue:v.value,'onUpdate:modelValue':x=>v.value=x}));")
 box=p.get_by_label('标签',exact=True);box.fill('中文');box.dispatch_event('compositionstart');box.press('Enter');assert p.evaluate('state.v.value.length')==0;box.dispatch_event('compositionend');box.press('Enter');assert p.evaluate('state.v.value')==['中文'];box.fill('中文');box.press('Enter');expect(p.get_by_role('status')).to_contain_text('已经存在');box.fill('');box.press('Backspace');assert p.evaluate('state.v.value')==[]

@case('AI message: escaped markup, feedback toggle, clipboard failure and retry')
def message(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkAIMessage,{content:'<img src=x onerror=window.attacked=true>',status:'error',onFeedback:v=>events.push(v),onCopy:v=>events.push(v),onRetry:()=>events.push('retry')}));")
 expect(p.locator('.yk-ai-message img')).to_have_count(0);assert p.evaluate('window.attacked') is None;p.get_by_role('button',name='有帮助').click();expect(p.get_by_role('button',name='有帮助')).to_have_attribute('aria-pressed','true');p.get_by_role('button',name='有帮助').click();expect(p.get_by_role('button',name='有帮助')).to_have_attribute('aria-pressed','false');p.get_by_role('button',name='复制消息').click();expect(p.locator('.yk-ai-message__actions [role=status]')).to_be_visible();p.get_by_role('button',name='重试',exact=True).click();assert p.evaluate('events.at(-1)')=='retry'

@case('AI prompt: Enter and IME composition, Shift+Enter, busy stop')
def prompt(p):
 mount(p,"const v=ref(''),busy=ref(false);state.v=v;state.busy=busy;return ()=>h(P,{},()=>h(C.YkAIPromptInput,{modelValue:v.value,busy:busy.value,'onUpdate:modelValue':x=>v.value=x,onSubmit:x=>events.push(x.text),onStop:()=>events.push('stop')}));")
 box=p.get_by_role('textbox',name='消息内容');box.fill('需求');box.dispatch_event('compositionstart');box.press('Enter');assert p.evaluate('events.length')==0;box.dispatch_event('compositionend');box.press('Shift+Enter');assert p.evaluate('events.length')==0;box.press('Enter');assert p.evaluate('events')==['需求'];p.evaluate('state.busy.value=true');expect(box).to_have_attribute('readonly','');p.get_by_role('button',name='停止生成').click();assert p.evaluate('events.at(-1)')=='stop'

@case('AI prompt: attachment local selection, submit metadata and exposed clear')
def ai_files(p):
 mount(p,"const v=ref(''),comp=ref(null);state.comp=comp;return ()=>h(P,{},()=>h(C.YkAIPromptInput,{ref:comp,modelValue:v.value,'onUpdate:modelValue':x=>v.value=x,onSubmit:x=>events.push({count:x.files.length,text:x.text})}));")
 p.get_by_label('选择 AI 附件',exact=True).set_input_files({'name':'note.txt','mimeType':'text/plain','buffer':b'private'});p.get_by_role('button',name='发送 ↑').click();assert p.evaluate('events')==[{'count':1,'text':''}];p.evaluate('state.comp.value.clearAttachments()');expect(p.locator('.yk-ai-attachments')).not_to_be_visible();expect(p.get_by_role('button',name='发送 ↑')).to_be_disabled()

@case('AI prompt: modifier Enter mode and disabled send')
def prompt_modifier(p):
 mount(p,"const d=ref(false);state.d=d;return ()=>h(P,{},()=>h(C.YkAIPromptInput,{modelValue:'测试',sendKey:'modifier-enter',disabled:d.value,onSubmit:()=>events.push('send')}));")
 box=p.get_by_role('textbox');box.press('Enter');assert p.evaluate('events.length')==0;box.press('Control+Enter');assert p.evaluate('events')==['send'];p.evaluate('state.d.value=true');expect(p.get_by_role('button',name='发送 ↑')).to_be_disabled()

@case('AI conversation: follow new data, respect reading position and return latest')
def scroll(p):
 mount(p,"const messages=ref(Array.from({length:24},(_,i)=>({id:String(i),role:'assistant',content:'一段较长的回复 '.repeat(15)})));state.messages=messages;return ()=>h(P,{},()=>h(C.YkAIConversation,{messages:messages.value,height:220}));")
 view=p.get_by_role('log');p.wait_for_timeout(120);assert view.evaluate('e=>e.scrollTop>100');view.evaluate('e=>{e.scrollTop=0;e.dispatchEvent(new Event("scroll"));}');p.evaluate("state.messages.value.push({id:'new',role:'assistant',content:'新增消息'})");p.wait_for_timeout(100);assert view.evaluate('e=>e.scrollTop')==0;p.get_by_role('button',name='↓ 回到最新').click();assert view.evaluate('e=>e.scrollHeight-e.scrollTop-e.clientHeight')<48

@case('AI tool: approval emits once, state controlled by app and text escaped')
def tool(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkAIToolCall,{name:'safe.tool',status:'approval',defaultOpen:true,input:'<script>window.attacked=true</script>',onApprove:()=>events.push('approve')}));")
 expect(p.locator('.yk-ai-tool pre').first).to_contain_text('<script>');p.get_by_role('button',name='确认执行').click();expect(p.get_by_role('button',name='确认执行')).to_be_disabled();assert p.evaluate('events')==['approve'];assert p.evaluate('window.attacked') is None;expect(p.locator('.yk-ai-tool')).to_have_attribute('data-status','approval')

@case('AI sources: unsafe URLs never become active anchors')
def sources(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkAISources,{items:[{id:'1',title:'安全',url:'https://vuejs.org/'},{id:'2',title:'脚本',url:'javascript:alert(1)'},{id:'3',title:'本地',url:'file:///etc/passwd'},{id:'4',title:'凭据',url:'https://a:b@example.org/'}]}));")
 expect(p.locator('.yk-ai-sources a')).to_have_count(1);expect(p.locator('.yk-ai-sources a')).to_have_attribute('rel','noopener noreferrer');expect(p.get_by_text('链接不可用',exact=True)).to_have_count(3)

@case('AI artifact: literal code, safe .txt export and summary tab')
def artifact(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkAIArtifact,{title:'../../sample.html',content:'<script>window.attacked=true</script>',summary:'这是说明'}));")
 expect(p.locator('.yk-ai-artifact iframe')).to_have_count(0);assert p.evaluate('window.attacked') is None
 with p.expect_download() as d:p.get_by_role('button',name='导出文本',exact=True).click()
 assert d.value.suggested_filename.endswith('.txt');assert '/' not in d.value.suggested_filename;assert '<script>' in Path(d.value.path()).read_text();p.get_by_role('button',name='说明',exact=True).click();expect(p.get_by_text('这是说明',exact=True)).to_be_visible()

@case('AI usage: bounded progress, over-limit signal, no token computation')
def usage(p):
 mount(p,"return ()=>h(P,{},()=>h(C.YkAIUsage,{used:1500,limit:1000}));")
 expect(p.locator('progress')).to_have_attribute('value','1000');expect(p.locator('.yk-ai-usage')).to_contain_text('超过');expect(p.locator('.yk-ai-usage')).to_contain_text('1,500')

@case('AI knowledge panel: local search and selection, safe link filtering')
def knowledge(p):
 mount(p,"const ids=ref([]);state.ids=ids;return ()=>h(P,{},()=>h(C.YkAIKnowledgePanel,{items:[{id:'a',title:'Vue规范',url:'https://vuejs.org/'},{id:'b',title:'产品指南',url:'javascript:alert(1)'}],selected:ids.value,'onUpdate:selected':v=>ids.value=v}));")
 p.get_by_role('checkbox',name='Vue规范').check();assert p.evaluate('state.ids.value')==['a'];p.get_by_role('searchbox').fill('产品');expect(p.locator('.yk-ai-knowledge article')).to_have_count(1);expect(p.locator('.yk-ai-knowledge a')).to_have_count(0)

@case('AI chat page: real local flow, stop, explicit demo boundary and no network')
def chat(p):
 doc(p,'ai-chat-page');requests=[];p.on('request',lambda r:requests.append(r.url));area=active(p);area.get_by_role('button',name='整理页面结构',exact=False).click();box=area.get_by_role('textbox',name='消息内容');expect(box).to_have_value('整理页面结构');box.fill('生成一个导航方案');box.press('Enter');expect(area.get_by_role('button',name='停止生成')).to_be_visible();p.wait_for_timeout(120);area.get_by_role('button',name='停止生成').click();expect(area).to_contain_text('演示已停止');expect(area).to_contain_text('无模型请求');assert requests==[];expect(p.locator('.studio-event')).to_contain_text('stop')

@case('AI chat page: forced error then retry and history switching')
def retry(p):
 doc(p,'ai-chat-page');area=active(p);box=area.get_by_role('textbox',name='消息内容');box.fill('检查规范');box.press('Enter');area.get_by_role('button',name='模拟失败').click();expect(area.get_by_role('button',name='重试',exact=True)).to_be_visible();area.get_by_role('button',name='重试',exact=True).click();expect(area.get_by_role('button',name='停止生成')).to_be_visible();area.get_by_role('button',name='停止生成').click();area.get_by_role('button',name='设计规范 · 示例',exact=True).click();expect(area).to_contain_text('如何维护同一套主题');area.get_by_role('button',name='+ 新建对话',exact=True).click();expect(area.locator('.yk-ai-message')).to_have_count(0)

@case('Studio: curated gallery 48 real presets render and apply without changing global')
def gallery(p):
 doc(p);p.get_by_role('button',name='样式库',exact=True).click();expect(p.locator('.studio-gallery__card')).to_have_count(10);p.get_by_label('样式库筛选',exact=True).select_option('all');expect(p.locator('.studio-gallery__card')).to_have_count(48)
 p.get_by_role('button',name='应用 胶囊主按钮',exact=True).click();expect(active(p)).to_have_attribute('data-asset','button');assert css(p,'.studio-stage .yk-button','borderRadius')=='60px';expect(p.get_by_label('项目圆角',exact=True)).to_have_value('14')

@case('Studio: AI inspector edits actual bubble radius and avatar visibility')
def inspector_ai(p):
 doc(p,'ai-message');range_value(p,'圆角',24);assert css(p,'.studio-stage .yk-ai-message__body','borderRadius')=='24px';control(p,'显示头像').uncheck();expect(active(p).locator('.yk-ai-message__avatar')).to_have_count(0);p.get_by_role('button',name='接口',exact=True).click();expect(p.locator('.studio-api')).to_contain_text('YkAIMessage');expect(p.locator('.studio-api table')).to_contain_text('content')

@case('Studio: v0.4 JSON migrates and exports as v0.5 preserving styles')
def migration(p):
 doc(p);old={'schemaVersion':1,'libraryVersion':'0.4.0','asset':'button','settings':{'radius':21},'designSystem':{'global':{},'components':{}}};p.get_by_label('导入方案文件').set_input_files({'name':'old.json','mimeType':'application/json','buffer':json.dumps(old).encode()});assert css(p,'.studio-stage .yk-button','borderRadius')=='21px'
 with p.expect_download() as d:p.get_by_role('button',name='导出 JSON',exact=True).click()
 data=json.loads(Path(d.value.path()).read_text());assert data['libraryVersion']=='0.5.0';assert data['settings']['radius']==21

@case('Studio: editable item content changes actual citation link')
def item_content(p):
 doc(p,'ai-sources');p.locator('.inspector-tabs').get_by_role('tab',name='内容',exact=False).click();p.locator('.inspector-item-editor details').first.locator('summary').click();p.get_by_label('项目 1 内容',exact=True).fill('https://example.org/docs');expect(active(p).locator('a').first).to_have_attribute('href','https://example.org/docs')

@case('Motion: replay callback does not use detached event.currentTarget')
def replay(p):
 doc(p,'motion-fade');active(p).get_by_role('button').first.click();p.wait_for_timeout(120);active(p).get_by_role('button').first.click();p.wait_for_timeout(120)

@case('AI desktop and mobile layouts: real screenshots and no horizontal overflow')
def shots(p):
 p.set_viewport_size({'width':1760,'height':1180});doc(p,'ai-chat-page');p.evaluate('scrollTo(0,170)');p.screenshot(path=str(SHOTS/'v05-ai-chat.png'))
 choose(p,'ai-workspace');p.locator('.studio-workspace').scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'v05-ai-workspace.png'))
 choose(p,'button');p.get_by_role('button',name='样式库',exact=True).click();p.locator('.studio-workspace').scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'v05-preset-gallery.png'))
 p.set_viewport_size({'width':390,'height':844});p.get_by_role('button',name='画布',exact=True).click();choose(p,'ai-chat-page');assert p.evaluate('document.documentElement.scrollWidth<=innerWidth');active(p).scroll_into_view_if_needed();p.screenshot(path=str(SHOTS/'v05-mobile-ai.png'))

@case('Reduced motion: streaming cursor respects operating system preference')
def reduced(p):
 p.emulate_media(reduced_motion='reduce');mount(p,"return ()=>h(P,{},()=>h(C.YkAIStreamingText,{content:'测试文本',streaming:true}));")
 el=p.locator('.yk-ai-streaming__cursor');expect(el).to_be_visible();assert el.evaluate('e=>getComputedStyle(e).animationName')=='none'

def main():
 results=[];SHOTS.mkdir(exist_ok=True,parents=True)
 with sync_playwright() as pw:
  b=pw.chromium.launch(headless=True,executable_path=os.getenv('CHROMIUM_PATH') or shutil.which('chromium'),args=['--no-sandbox'] if os.geteuid()==0 else []);version=b.version
  for name,fn in CASES:
   if os.getenv('V05_FILTER') and os.environ['V05_FILTER'].lower() not in name.lower():continue
   ctx=b.new_context(viewport={'width':1760,'height':1120},accept_downloads=True);p=ctx.new_page();p.set_default_timeout(2200);errors=[];p.on('pageerror',lambda e:errors.append(str(e)));start=time.perf_counter()
   print('RUN',name,flush=True)
   try:fn(p);assert not errors,str(errors);r={'name':name,'status':'passed'};print('PASS',name,flush=True)
   except Exception as e:r={'name':name,'status':'failed','error':str(e),'trace':traceback.format_exc(),'pageErrors':errors};print('FAIL',name,str(e)[:500],flush=True);p.screenshot(path=str(SHOTS/f'v05-failure-{len(results)+1}.png'))
   r['durationMs']=round((time.perf_counter()-start)*1000);results.append(r);ctx.close()
  b.close()
 result={'version':'0.5.0','date':datetime.now(timezone.utc).isoformat(),'browser':'Chromium '+version,'vue':'3.5.13','total':len(results),'passed':sum(r['status']=='passed' for r in results),'failed':sum(r['status']=='failed' for r in results),'tests':results}
 target='v05-browser-results.json' if not os.getenv('V05_FILTER') else 'v05-filtered-results.json';(REPORTS/target).write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print(f"{result['passed']}/{result['total']} passed",flush=True);return bool(result['failed'])
if __name__=='__main__':sys.exit(main())
