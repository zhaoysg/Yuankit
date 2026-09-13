import {defineComponent,h,ref,reactive,computed,watch,onMounted,useId} from 'vue';
import {YkAsset,assets,fieldDefinitions,sharedKeys,getAsset,resolveSettings,validateSettings,validateDesignSystem,createPreset,parsePreset,toVueSFC} from '../../../packages/vue/src/studio/index.js';
import {YkButton,YkSelect,YkInput,YkSwitch,YkBadge,YkAlert,YkDialog} from '../../../packages/vue/src/index.js';
import sources from './sources.generated.js';
import gallery from './presets.generated.js';
import componentRegistry from './registry.generated.js';
const STORAGE='yuankit.studio.presets.v1';
const groups=['AI 界面','基础组件','页面区块','页面模板','动效方案','配置容器'];
const inspectorTabs=['内容','尺寸与布局','字体','外观','行为','动效'];
const clone=v=>JSON.parse(JSON.stringify(v));
const builtin=[{id:'soft',name:'柔和',data:{radius:16,primary:'#6750d8',surface:'#ffffff',text:'#252532',mode:'light',shadow:0}},
 {id:'precise',name:'利落',data:{radius:4,primary:'#255b4c',surface:'#ffffff',text:'#252532',mode:'light',shadow:0}},
 {id:'capsule',name:'胶囊',data:{radius:60,primary:'#252532',foreground:'#ffffff',effect:'lift',shadow:8}},
 {id:'gradient',name:'渐变',data:{gradient:true,primary:'#6750d8',foreground:'#ffffff',gradientEnd:'#c250a6',radius:18,variant:'primary'}},
 {id:'glow',name:'光晕',data:{effect:'glow',shadow:16,primary:'#6750d8',foreground:'#ffffff',radius:16}}];
export const Studio=defineComponent({name:'YuanKitStudio',props:{initialAsset:{type:String,default:'button'}},setup(p){
 const selected=ref(assets.some(a=>a.id===p.initialAsset)?p.initialAsset:'button'),search=ref(''),category=ref('全部'),tab=ref('preview'),scope=ref('instance'),inspectorTab=ref('尺寸与布局'),viewport=ref('fit'),compare=ref(false),message=ref(''),lastAction=ref('点击预览中的组件，可以在这里看到真实事件。'),saved=ref([]),presetName=ref('我的设计方案'),importRef=ref(null),saving=ref(false),codeDialog=ref(false),uid=useId();
 const galleryScope=ref('current');
 const instances=reactive({}),system=reactive({global:{},components:{}}),undoStack=ref([]),redoStack=ref([]);
 watch(()=>p.initialAsset,id=>{if(assets.some(a=>a.id===id))selected.value=id;});
 const descriptor=computed(()=>getAsset(selected.value));
 const own=computed(()=>instances[selected.value]??{});
 const resolved=computed(()=>resolveSettings(selected.value,own.value,system));
 const envelope=computed(()=>createPreset(selected.value,own.value,system));
 const available=computed(()=>assets.filter(a=>(category.value==='全部'||a.group===category.value)&&`${a.title} ${a.name} ${a.id}`.toLowerCase().includes(search.value.toLowerCase())));
 const fields=computed(()=>descriptor.value.fields.map(k=>fieldDefinitions[k]).filter(f=>scope.value!=='global'||sharedKeys.includes(f.key)));
 const scopedValues=computed(()=>scope.value==='global'?system.global:scope.value==='component'?system.components[selected.value]??{}:own.value);
 const presetOptions=computed(()=>saved.value.filter(s=>s.preset.asset===selected.value));
 function snapshot(){return clone({selected:selected.value,instances,system});}
 function restore(s){selected.value=s.selected;Object.keys(instances).forEach(k=>delete instances[k]);Object.assign(instances,s.instances);system.global=clone(s.system.global);system.components=clone(s.system.components);}
 function mark(){undoStack.value.push(snapshot());if(undoStack.value.length>70)undoStack.value.shift();redoStack.value=[];}
 function undo(){if(!undoStack.value.length)return;redoStack.value.push(snapshot());restore(undoStack.value.pop());}
 function redo(){if(!redoStack.value.length)return;undoStack.value.push(snapshot());restore(redoStack.value.pop());}
 function set(key,value){try{const field=fieldDefinitions[key];if(!field)return;if(scope.value==='global'&&!sharedKeys.includes(key))throw Error('此参数不能设为全局');const patch={[key]:value};scope.value==='global'?validateDesignSystem({global:patch}):validateSettings(selected.value,patch);mark();if(scope.value==='global')system.global[key]=clone(value);else if(scope.value==='component')system.components[selected.value]={...(system.components[selected.value]??{}),...patch};else instances[selected.value]={...own.value,...patch};message.value='';}catch(e){message.value=e.message;}}
 function setGlobal(key,value){try{if(!sharedKeys.includes(key))throw Error('此参数不能设为全局');validateDesignSystem({global:{[key]:value}});mark();system.global[key]=clone(value);message.value='';}catch(e){message.value=e.message;}}
 function clearKey(key){mark();if(scope.value==='global')delete system.global[key];else if(scope.value==='component')delete (system.components[selected.value]??{})[key];else delete (instances[selected.value]??{})[key];}
 function reset(){mark();if(scope.value==='global')system.global={};else if(scope.value==='component')delete system.components[selected.value];else delete instances[selected.value];message.value='已重置当前层级，恢复继承。';}
 function applyBuiltin(b){mark();const allowed=descriptor.value.fields;instances[selected.value]={...own.value,...Object.fromEntries(Object.entries(b.data).filter(([k])=>allowed.includes(k)))};scope.value='instance';message.value='预设已应用到当前实例，其他组件不受影响。';}
 const persist=()=>{try{localStorage.setItem(STORAGE,JSON.stringify(saved.value));message.value='已保存到此浏览器；跨设备请导出 JSON。';}catch{message.value='此环境不允许本地存储；方案仍保留在当前会话，请导出 JSON。';}};
 onMounted(()=>{try{const raw=localStorage.getItem(STORAGE);if(!raw)return;if(raw.length>2097152)throw Error('本地方案过大');const entries=JSON.parse(raw);if(!Array.isArray(entries)||entries.length>50)throw Error('本地方案列表损坏');saved.value=entries.map((e)=>{if(typeof e.id!=='string'||typeof e.name!=='string'||e.name.length>80)throw Error('方案名称损坏');return {id:e.id,name:e.name,preset:parsePreset(e.preset)};});}catch{message.value='未载入旧方案：浏览器存储不可用或配置版本不兼容。原数据未覆盖。';}});
 function save(){const name=presetName.value.trim();if(!name){message.value='请填写方案名称。';return;}if(name.length>80){message.value='方案名称最多 80 字。';return;}if(saved.value.length>=50){message.value='本地最多保存 50 个方案，请先导出或删除旧方案。';return;}saved.value.push({id:String(Date.now())+'-'+Math.random().toString(36).slice(2,8),name,preset:clone(envelope.value)});persist();saving.value=false;}
 function load(id){const item=saved.value.find(e=>e.id===id);if(!item)return;applyPreset(item.preset);message.value='已载入方案及其中的全局/同类配置。';}
 function remove(id){saved.value=saved.value.filter(s=>s.id!==id);persist();}
 function applyPreset(preset){const x=parsePreset(preset);mark();selected.value=x.asset;instances[x.asset]=clone(x.settings);system.global=clone(x.designSystem.global);system.components=clone(x.designSystem.components);category.value='全部';search.value='';scope.value='instance';}
 async function importFile(e){try{const file=e.target.files?.[0];if(!file)return;if(file.size>262144)throw Error('单个配置最多 256KB');applyPreset(parsePreset(await file.text()));message.value='配置导入成功。未知字段、脚本和任意 CSS 不会被执行。';}catch(err){message.value='导入失败：'+err.message;}finally{e.target.value='';}}
 function download(text,name,type){const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 async function copyCode(){try{await navigator.clipboard.writeText(toVueSFC(envelope.value));message.value='已复制 Vue 调用代码。';}catch{codeDialog.value=true;message.value='浏览器未允许自动复制，可以选中代码或导出 .vue 文件。';}}
 function origin(key){return Object.hasOwn(own.value,key)?'实例覆盖':Object.hasOwn(system.components[selected.value]??{},key)?'同类覆盖':Object.hasOwn(system.global,key)?'全局配置':'默认';}
 // Editing a lower scope must display that scope's value, not bounce back to an instance override.
 const htmlValue=f=>{const s=scope.value==='instance'?resolved.value:resolveSettings(selected.value,{},scope.value==='component'?system:{global:system.global});return s[f.key]??f.default;};
 function field(f){const id='inspector-'+uid+'-'+f.key,value=htmlValue(f),common={id,'aria-label':f.label};
 const hasOverride=Object.hasOwn(scopedValues.value,f.key);
 const header=h('div',{class:'inspector-field__label'},[h('label',{for:id},f.label),h('span',{title:'当前生效值来源'},origin(f.key)),hasOverride?h('button',{type:'button',class:'reset-field','aria-label':'重置 '+f.label,onClick:()=>clearKey(f.key)},'↺'):null]);
 let input;
 if(f.type==='range')input=h('div',{class:'inspector-range'},[h('input',{...common,type:'range',min:f.min,max:f.max,step:f.step,value,onInput:e=>set(f.key,Number(e.target.value))}),h('div',{class:'inspector-number'},[h('input',{type:'number','aria-label':f.label+' 数值',min:f.min,max:f.max,step:f.step,value,onChange:e=>set(f.key,Number(e.target.value))}),h('span',{},f.unit)])]);
 else if(f.type==='color')input=h('div',{class:'inspector-color'},[h('input',{...common,type:'color',value,onInput:e=>set(f.key,e.target.value)}),h('input',{type:'text','aria-label':f.label+' 色值',value,maxLength:7,onChange:e=>set(f.key,e.target.value)}),h('span',{class:'color-chip',style:{background:value}})]);
 else if(f.type==='select')input=h('select',{...common,value,onChange:e=>set(f.key,e.target.value)},f.options.map(o=>h('option',{value:o.value},o.label)));
 else if(f.type==='boolean')input=h('input',{...common,type:'checkbox',role:'switch',checked:value,onChange:e=>set(f.key,e.target.checked)});
 else if(f.type==='items')input=h('div',{class:'inspector-items'},[...value.map((item,i)=>h('div',{class:'inspector-item-editor',key:item.value},[
 h('div',{class:'inspector-item'},[h('input',{id:id+'-'+i,'aria-label':'项目 '+(i+1)+' 名称',value:item.label,maxLength:80,onInput:e=>{const next=clone(value);next[i].label=e.target.value;set(f.key,next);}}),h('button',{type:'button','aria-label':'删除项目 '+(i+1),disabled:value.length<=1,onClick:()=>set(f.key,value.filter((_,j)=>i!==j))},'−')]),
 h('details',{},[h('summary',{},'内容与状态'),h('textarea',{'aria-label':'项目 '+(i+1)+' 内容',rows:2,maxLength:500,value:item.content||'',onInput:e=>{const next=clone(value);next[i].content=e.target.value;set(f.key,next);}}),h('label',{},[h('input',{type:'checkbox','aria-label':'项目 '+(i+1)+' 禁用',checked:!!item.disabled,onChange:e=>{const next=clone(value);next[i].disabled=e.target.checked;set(f.key,next);}}),'禁用此项'])])
 ])),h('button',{type:'button',class:'text-button',disabled:value.length>=12,onClick:()=>{let n=value.length+1;while(value.some(i=>i.value==='item-'+n))n++;set(f.key,[...value,{value:'item-'+n,label:'新项目',content:''}]);}},'+ 添加项目'),h('small',{},'内容随资产解释：文字、数值或来源 URL。页面事件与业务接口仍需由项目接入。')]);
 else input=f.key==='description'||f.key==='label'&&descriptor.value.group!=='基础组件'?h('textarea',{...common,value,rows:2,maxLength:f.maxLength,onInput:e=>set(f.key,e.target.value)}):h('input',{...common,type:'text',value,maxLength:f.maxLength,onInput:e=>set(f.key,e.target.value)});
 return h('div',{class:['inspector-field',{'inspector-field--switch':f.type==='boolean'}],key:f.key},[header,input]);
 }
 function parameterPanel(){const visible=fields.value.filter(f=>f.group===inspectorTab.value);return h('aside',{class:'studio-inspector','aria-label':'参数编辑器'},[
 h('div',{class:'inspector-title'},[h('div',{},[h('strong',{},'属性'),h('span',{},descriptor.value.title)]),h('span',{class:'inspector-count'},visible.length+' 项')]),
 h('div',{class:'inspector-scope'},[h('label',{for:'studio-scope'},'作用范围'),h('select',{id:'studio-scope','aria-label':'调整范围',value:scope.value,onChange:e=>scope.value=e.target.value},[{value:'instance',label:'当前实例'},{value:'component',label:'同类默认'},{value:'global',label:'项目全局'}].map(o=>h('option',{value:o.value},o.label)))]),
 h('div',{class:'inspector-tabs',role:'tablist','aria-label':'参数分类'},inspectorTabs.map(g=>{const count=fields.value.filter(f=>f.group===g).length;return h('button',{type:'button',role:'tab','aria-selected':inspectorTab.value===g,class:{'is-active':inspectorTab.value===g},disabled:count===0,onClick:()=>inspectorTab.value=g},[g,h('small',{},count)]);})),
 h('div',{class:'inspector-panel'},visible.length?visible.map(field):[h('div',{class:'inspector-empty'},'当前资产没有这一类参数。')]),
 h('div',{class:'inspector-footer'},[h(YkButton,{variant:'outline',size:'sm',block:true,onClick:reset},()=> '重置当前层级'),h('p',{class:'inspector-help'},scope.value==='instance'?'只覆盖当前预览实例。':scope.value==='component'?'作为此类资产的默认值。':'成为整个项目共享的设计变量。')])
 ]);}
 function assetSidebar(){return h('aside',{class:'studio-assets','aria-label':'资产目录'},[
  h('div',{class:'studio-assets__head'},[h('strong',{},'资产库'),h('span',{},assets.length)]),
  h('input',{class:'studio-assets__search',type:'search','aria-label':'搜索设计资产',placeholder:'搜索组件 / 区块 / 页面',value:search.value,onInput:e=>search.value=e.target.value}),
  h('nav',{class:'studio-assets__groups','aria-label':'资产分类'},['全部',...groups].map(g=>
    h('button',{type:'button',class:{'is-active':category.value===g},'aria-pressed':category.value===g,onClick:()=>category.value=g},[
      h('span',{},g),h('small',{},g==='全部'?assets.length:assets.filter(a=>a.group===g).length)
    ])
  )),
  h('div',{class:'studio-assets__list'},[
    ...available.value.map(a=>h('button',{type:'button','data-asset-id':a.id,class:['studio-asset-row',{'is-active':selected.value===a.id}],onClick:()=>{selected.value=a.id;message.value='';inspectorTab.value=a.fields.some(k=>fieldDefinitions[k]?.group==='尺寸与布局')?'尺寸与布局':'内容';},'aria-pressed':selected.value===a.id,key:a.id},[
      h('span',{class:'studio-asset-row__icon'},a.group==='AI 界面'?'✦':a.group==='页面模板'?'▧':a.group==='页面区块'?'▤':a.group==='动效方案'?'◌':'◈'),
      h('span',{},[h('strong',{},a.title),h('small',{},a.name)])
    ])),
    !available.value.length?h('p',{class:'studio-assets__empty'},'没有匹配资产'):null
  ])
 ]);}
 function quickTheme(){const currentRadius=system.global.radius??14,currentPrimary=system.global.primary??'#6750d8',currentDensity=system.global.density??'comfortable';return h('div',{class:'studio-quick-theme','aria-label':'项目快速主题'},[
   h('div',{class:'studio-quick-theme__title'},[h('strong',{},'项目主题'),h('span',{},'全局变量')]),
   h('label',{},['品牌色',h('input',{type:'color','aria-label':'项目品牌色',value:currentPrimary,onInput:e=>setGlobal('primary',e.target.value)})]),
   h('label',{class:'quick-range'},['圆角',h('input',{type:'range','aria-label':'项目圆角',min:0,max:32,step:1,value:currentRadius,onInput:e=>setGlobal('radius',Number(e.target.value))}),h('span',{},currentRadius+'px')]),
   h('label',{},['密度',h('select',{'aria-label':'项目信息密度',value:currentDensity,onChange:e=>setGlobal('density',e.target.value)},[h('option',{value:'comfortable'},'舒适'),h('option',{value:'compact'},'紧凑')])]),
   h('button',{type:'button',class:'text-button',onClick:()=>{mark();system.global={};}},'清除全局')
 ]);}
 function stage(){return h('div',{class:'studio-preview-section'},[
 h('div',{class:'studio-viewport-bar'},[h('div',{class:'studio-devices'},[['fit','自适应'],['768','平板'],['390','手机']].map(([v,label])=>h('button',{type:'button',class:{'is-active':viewport.value===v},'aria-pressed':viewport.value===v,onClick:()=>viewport.value=v},label))),h('button',{type:'button',class:'text-button','aria-pressed':compare.value,onClick:()=>compare.value=!compare.value},compare.value?'关闭对照':'查看同类默认')]),
 h('div',{class:['studio-stage',{'studio-stage--dark':resolved.value.mode==='dark'}]},[h('span',{class:'studio-stage__label'},descriptor.value.group+' / '+descriptor.value.name),h('div',{class:'studio-device',style:{width:viewport.value==='fit'?'100%':viewport.value+'px',maxWidth:'100%'}},[h(YkAsset,{asset:selected.value,settings:own.value,designSystem:system,key:selected.value,onAction:e=>lastAction.value=JSON.stringify(e,null,2)}),h('div',{class:'studio-stage__caption'},'LIVE VUE · 悬停、点击或使用键盘体验')])]),
 compare.value?h('div',{class:'studio-comparison'},[h('p',{},'同类默认（不带当前实例覆盖）'),h(YkAsset,{asset:selected.value,designSystem:system,key:'compare-'+selected.value,onAction:e=>lastAction.value='对照实例：'+JSON.stringify(e)})]):null,
 h('div',{class:'studio-event','aria-live':'polite'},[h('span',{},'事件'),h('code',{},lastAction.value)]),
 h('div',{class:'studio-footnotes'},[h('strong',{},'实际边界'),h('p',{},descriptor.value.limitations),h('p',{},'颜色可自由调整；低对比度、过小尺寸可能影响可用性。发布前需检查键盘、触控、对比度与减少动效。')])
 ]);}
 function codePanel(){return h('div',{class:'studio-code'},[h('div',{class:'studio-code__header'},[h('span',{},'AssetExample.vue · 安装本地组件包后可使用'),h(YkButton,{size:'sm',variant:'outline',onClick:copyCode},()=> '复制代码')]),h('pre',{},h('code',{},toVueSFC(envelope.value))),h('p',{},'YkAsset 使用真实组件和此配置。action 事件需要接入你的路由或业务操作；展示文案不等于接口已实现。')]);}
 function sourcesPanel(){return h('div',{class:'studio-sources'},[h('h2',{},'从参考到自己的资产'),h('p',{},'本轮读取站点入口并整理类别；没有抓取整站，也没有把第三方截图、视频或商业源码打包为自己的资产。'),h('div',{class:'studio-source-card'},[h('strong',{},'当前实现位置'),h('code',{},descriptor.value.source),h('strong',{},'可编辑参数定义'),h('code',{},'registry/inspector.json → fields + assets'),h('strong',{},'保存的配置'),h('code',{},'presets/*.json / 浏览器本地方案')]),...sources.map(s=>h('article',{class:'studio-source-card',key:s.id},[h('a',{href:s.url,target:'_blank',rel:'noopener noreferrer'},s.name+' ↗'),h('span',{},s.category+' · 已核对入口'),h('p',{},s.notes)]))]);}

 function applyGallery(entry){const x=parsePreset(entry.preset);mark();selected.value=x.asset;instances[x.asset]=clone(x.settings);category.value='全部';search.value='';scope.value='instance';tab.value='preview';message.value='已应用「'+entry.title+'」到当前实例；项目和同类默认保持不变。';}
 function galleryPanel(){const list=gallery.filter(g=>galleryScope.value==='all'||g.asset===selected.value);return h('section',{class:'studio-gallery','aria-label':'样式预设库'},[
 h('header',{class:'studio-gallery__header'},[h('div',{},[h('span',{class:'eyebrow'},'CURATED / PRESETS'),h('h3',{},'一个组件，不止一种样子。'),h('p',{},gallery.length+' 套可修改的参数方案。应用后仍可继续调节，不复制组件源码。')]),h('select',{'aria-label':'样式库筛选',value:galleryScope.value,onChange:e=>galleryScope.value=e.target.value},[h('option',{value:'current'},'当前资产'),h('option',{value:'all'},'全部样式')])]),
 h('div',{class:'studio-gallery__grid'},list.map(entry=>h('article',{class:'studio-gallery__card',key:entry.id,'data-preset-id':entry.id},[
 h('div',{class:'studio-gallery__preview',inert:'','aria-hidden':'true'},h(YkAsset,{asset:entry.asset,settings:{...entry.preset.settings,...(getAsset(entry.asset).fields.includes('width')?{width:360}:{})},designSystem:entry.preset.designSystem})),
 h('div',{class:'studio-gallery__meta'},[h('div',{},[h('strong',{},entry.title),h('small',{},getAsset(entry.asset).name)]),h('button',{type:'button','aria-label':'应用 '+entry.title,onClick:()=>applyGallery(entry)},'应用 ↗')])
 ]))),!list.length?h('div',{class:'studio-gallery__empty'},[h('h3',{},'这类资产暂未预置样式'),h('p',{},'仍可以在画布调整参数并保存为自己的方案。'),h('button',{type:'button',onClick:()=>galleryScope.value='all'},'浏览全部 '+gallery.length+' 套')]):null
 ]);}
 function apiPanel(){const c=componentRegistry.find(c=>c.id===selected.value);return h('section',{class:'studio-api'},[
 h('span',{class:'eyebrow'},'CONTRACT / USAGE'),h('h3',{},descriptor.value.name),h('p',{},descriptor.value.limitations),
 h('h4',{},'源码与维护位置'),h('code',{},descriptor.value.source),h('p',{},'可视化参数：registry/inspector.json；样式预设：registry/presets.json。'),
 c?h('div',{},[h('h4',{},'组件 Props'),h('div',{class:'studio-api__table'},h('table',{},[h('thead',{},h('tr',{},['名称','类型 / 默认值','说明'].map(x=>h('th',{},x)))),h('tbody',{},c.props.map(prop=>h('tr',{},[h('td',{},h('code',{},prop.name)),h('td',{},[h('code',{},prop.type),h('small',{},'默认：'+String(prop.default??'—'))]),h('td',{},prop.description)])))])),h('h4',{},'事件与插槽'),h('pre',{},JSON.stringify({events:c.events,slots:c.slots},null,2)),h('p',{},'导出的 YkAsset 使用工作台参数；直接使用 '+descriptor.value.name+' 时以此 Props 与对应 .d.ts 为准。')]):h('p',{},'此条目是区块、模板或动效组合。通过 Vue 页签导出可重现的调用，直接组合的插槽与事件见源码同目录的类型声明。'),
 h('h4',{},'当前可调参数'),h('div',{class:'studio-api__chips'},descriptor.value.fields.map(key=>h('span',{},fieldDefinitions[key].label+' · '+key)))
 ]);}

 return ()=>h('div',{class:'studio-page'},[
 h('div',{class:'studio-heading'},[h('div',{},[h('div',{class:'eyebrow'},'YUANKIT STUDIO / 0.5'),h('h1',{},'从一个组件，到完整创作界面。'),h('p',{},'组件、页面、AI 界面与动效共用一套设计语言。挑选样式，调整参数，带入你的项目。')]),h(YkBadge,{tone:'primary'},()=>assets.length+' 个可调资产')]),
 h('div',{class:'studio-top-actions'},[h(YkButton,{variant:'outline',size:'sm',disabled:!undoStack.value.length,onClick:undo},()=> '撤销'),h(YkButton,{variant:'outline',size:'sm',disabled:!redoStack.value.length,onClick:redo},()=> '重做'),h('span',{class:'studio-action-spacer'}),h(YkButton,{variant:'outline',size:'sm',onClick:()=>{selected.value='ai-chat-page';category.value='全部';search.value='';tab.value='preview';}},()=> '✦ AI 界面'),h(YkButton,{variant:'outline',size:'sm',onClick:()=>importRef.value?.click()},()=> '导入配置'),h(YkButton,{variant:'outline',size:'sm',onClick:()=>download(JSON.stringify(envelope.value,null,2),'yuankit-'+selected.value+'.json','application/json')},()=> '导出 JSON'),h(YkButton,{variant:'outline',size:'sm',onClick:()=>download(toVueSFC(envelope.value),'AssetExample.vue','text/plain')},()=> '导出 Vue'),h(YkButton,{size:'sm',onClick:()=>saving.value=true},()=> '保存为方案'),h('input',{ref:importRef,type:'file',accept:'.json,application/json',style:{display:'none'},'aria-label':'导入方案文件',onChange:importFile})]),
 message.value?h('div',{class:'studio-message',role:'status'},[message.value,h('button',{type:'button','aria-label':'关闭工作台提示',onClick:()=>message.value=''},'×')]):null,
 quickTheme(),
 h('div',{class:'studio-workspace'},[
 assetSidebar(),
 h('section',{class:'studio-canvas-column'},[h('div',{class:'studio-selected-title'},[h('div',{},[h('span',{class:'studio-selected-kicker'},descriptor.value.group),h('h2',{},descriptor.value.title),h('code',{},descriptor.value.name)]),h('span',{class:'studio-live-pill'},'● LIVE')]),
 h('div',{class:'studio-presets'},[h('span',{},'快速风格'),...builtin.filter(b=>b.id!=='gradient'||descriptor.value.fields.includes('gradient')).filter(b=>b.id!=='glow'||descriptor.value.fields.includes('effect')).map(b=>h('button',{type:'button',onClick:()=>applyBuiltin(b),key:b.id},b.name)),h('button',{type:'button',class:'text-button',onClick:()=>{mark();delete instances[selected.value];scope.value='instance';}},'恢复实例默认')]),
 h('div',{class:'studio-tabs',role:'group','aria-label':'工作台视图'},[['preview','画布'],['gallery','样式库'],['api','接口'],['code','Vue'],['json','JSON'],['sources','来源']].map(([v,label])=>h('button',{type:'button','aria-pressed':tab.value===v,class:{'is-active':tab.value===v},onClick:()=>tab.value=v},label))),
 tab.value==='preview'?stage():tab.value==='gallery'?galleryPanel():tab.value==='api'?apiPanel():tab.value==='code'?codePanel():tab.value==='json'?h('div',{class:'studio-code'},[h('p',{},'包含当前实例和全局/同类默认，可作为项目设计配置保存。'),h('pre',{},JSON.stringify(envelope.value,null,2))]):sourcesPanel(),
 h('section',{class:'studio-saved'},[h('div',{class:'studio-saved__header'},[h('h3',{},'已保存方案'),h('span',{},descriptor.value.title+' / '+presetOptions.value.length)]),...presetOptions.value.map(s=>h('div',{class:'studio-saved-item',key:s.id},[h('button',{type:'button',onClick:()=>load(s.id)},s.name),h('button',{type:'button','aria-label':'删除方案 '+s.name,onClick:()=>remove(s.id)},'删除')])),!presetOptions.value.length?h('p',{},'把当前效果保存成自己的预设，下次直接调用。'):null])
 ]),parameterPanel()
 ]),
 h(YkDialog,{title:'保存为我的方案',description:'保存在此浏览器。导出 JSON 后可带到其他设备。',open:saving.value,'onUpdate:open':v=>saving.value=v},{default:()=>h(YkInput,{label:'方案名称',modelValue:presetName.value,'onUpdate:modelValue':v=>presetName.value=v,maxlength:80}),footer:()=>h(YkButton,{onClick:save},()=> '确认保存')}),
 h(YkDialog,{title:'Vue 调用代码',size:'lg',open:codeDialog.value,'onUpdate:open':v=>codeDialog.value=v},{default:()=>h('pre',{class:'studio-copy-code'},toVueSFC(envelope.value))})
 ]);
}});
