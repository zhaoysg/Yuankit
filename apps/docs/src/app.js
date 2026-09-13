import {YkAsset,assets as designAssets} from '../../../packages/vue/src/studio/index.js';
import { createApp,h,ref,reactive,computed,onMounted,onBeforeUnmount,nextTick } from 'vue';
import * as UI from '../../../packages/vue/src/index.js';
import { icon } from '../../../packages/vue/src/shared/icons.js';
import { foregroundFor } from '../../../packages/tokens/src/index.js';
import registry from './registry.generated.js';
import { useDemos,examples } from './demos.js';
import { SettingsPanel } from '../../../blocks/settings-panel/index.js';
import { ContentCard } from '../../../blocks/content-card/index.js';
import { Studio } from './studio.js';
const {YkConfigProvider,YkButton,YkInput,YkSelect,YkSwitch,YkBadge,YkCard,YkAvatar,YkProgress,YkTabs,YkAlert,YkDialog}=UI;
const row=children=>h('div',{class:'demo-row'},children);
const stack=children=>h('div',{class:'demo-stack'},children);
const pair=(label,value)=>h('div',{class:'definition-row'},[h('span',{},label),h('code',{},value)]);
const configPaths=[
 ['品牌色、语义色、圆角、尺寸','packages/tokens/src/tokens.json'],
 ['默认尺寸、语言、主题行为','packages/vue/src/config/defaults.js'],
 ['单个组件结构、交互逻辑','packages/vue/src/components/<name>/index.js'],
 ['单个组件视觉和状态','packages/vue/src/components/<name>/style.css'],
 ['属性、事件的类型声明','packages/vue/src/components/<name>/index.d.ts'],
 ['组件清单、API、演示登记','registry/components.json'],
 ['来源、规则与范围取舍','references/components/<name>.md'],
 ['可复用页面或表单方案','blocks/<pattern-name>/'],
 ['组件演示与代码示例','apps/docs/src/demos.js']
];
function mix(a,b,weight){const p=[1,3,5].map(i=>Math.round(parseInt(a.slice(i,i+2),16)*(1-weight)+parseInt(b.slice(i,i+2),16)*weight));return '#'+p.map(x=>x.toString(16).padStart(2,'0')).join('');}
const App={
 setup(){
  const route=ref(location.hash.slice(1)||'studio'),search=ref(''),menu=ref(false),notice=ref(''),activeView=ref('preview'),contentOpen=ref(false);
  const state=reactive({skin:'soft',mode:'light',density:'comfortable',size:'md',motion:true,primary:'',radius:0});
  const notify=text=>{notice.value=text;};
  const onHash=()=>{route.value=location.hash.slice(1)||'studio';menu.value=false;activeView.value='preview';notice.value='';nextTick(()=>document.querySelector('main')?.focus({preventScroll:true}));window.scrollTo(0,0);};
  onMounted(()=>window.addEventListener('hashchange',onHash));onBeforeUnmount(()=>window.removeEventListener('hashchange',onHash));
  const go=id=>{location.hash=id;};
  const config=computed(()=>({skin:state.skin,mode:state.mode,density:state.density,size:state.size,motion:state.motion,tokens:{...(state.primary?{'primary':state.primary,'primary-hover':state.primary,'on-primary':foregroundFor(state.primary),'primary-soft':mix(state.primary,state.mode==='dark'?'#14161d':'#ffffff',.9)}:{}),...(state.radius?{'radius-control':state.radius+'px','radius-panel':Math.min(state.radius+8,32)+'px'}:{})}}));
  const filtered=computed(()=>registry.filter(x=>x.status!=='draft'&&`${x.title} ${x.name} ${x.summary}`.toLowerCase().includes(search.value.toLowerCase())));
  const current=computed(()=>registry.find(x=>`components/${x.id}`===route.value));
  const demos=useDemos(notify);
  const copy=async text=>{try{await navigator.clipboard.writeText(text);notify('已复制。');}catch{notify('浏览器未允许自动复制，请直接选中代码复制。');}};
  const downloadTheme=()=>{const blob=new Blob([JSON.stringify(config.value,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='yuankit.theme.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('已导出当前主题配置。');};
  const navItem=(id,title,sub,ic='grid')=>h('a',{href:`#${id}`,class:['nav-link',{'is-active':route.value===id}],'aria-current':route.value===id?'page':undefined},[icon(ic,16),h('span',{},title),sub?h('small',{},sub):null]);
  const heading=(k,title,description)=>h('div',{class:'page-heading'},[h('div',{class:'eyebrow'},k),h('h1',{},title),h('p',{},description)]);
  const code=(content,title='Vue / 使用示例')=>h('div',{class:'code-panel'},[h('div',{class:'code-header'},[h('span',{},title),h('button',{type:'button',onClick:()=>copy(content)},'复制')]),h('pre',{},h('code',{},content))]);
  const overview=()=>[
   h('section',{class:'hero'},[
    h('div',{class:'hero-copy'},[h('div',{class:'eyebrow'},[h('span',{class:'live-dot'}),'OWN YOUR DESIGN SYSTEM']),h('h1',{},['把设计，',h('br'),h('span',{},'变成自己的组件。')]),h('p',{},'一套属于你的 Vue 组件、设计规范与方案资产。\n统一外观，也把交互和使用规则留在代码里。'),row([h(YkButton,{size:'lg',onClick:()=>go('components/button')},{default:()=> '浏览组件',trailing:()=>icon('arrow')}),h(YkButton,{size:'lg',variant:'outline',onClick:()=>go('guides')},()=> '从这里开始')]),h('div',{class:'hero-tags'},['Vue 3 原生','源码可维护','零 React 依赖'].map(x=>h('span',{},['✓ ',x])))]),
    h('div',{class:'hero-preview'},[h('div',{class:'floating-tag'},'Live components · 可交互'),h(YkCard,{class:'hero-sample',variant:'elevated'}, {header:()=>h('div',{class:'demo-between'},[row([h(YkAvatar,{name:'元件'}),h('div',{},[h('strong',{},'你的设计工作空间'),h('div',{class:'tiny muted'},'一套接口，统一体验')])]),h(YkBadge,{tone:'success',dot:true},()=> '就绪')]),default:()=>stack([h(YkInput,{label:'项目名称',defaultValue:'YuanKit Design System',clearable:true}),h(YkProgress,{label:'设计资产进度 · 示例',value:72}),h('div',{class:'demo-between'},[h(YkSwitch,{label:'团队协作',defaultValue:true}),h(YkButton,{size:'sm',onClick:()=>go('patterns')},()=> '查看方案 →')])])})])
   ]),
   h('section',{class:'stats-strip'},[[String(designAssets.filter(a=>a.group==='基础组件').length),'基础组件'],['2','视觉风格'],['4','规范维度'],['Vue 3','实际运行']].map(([v,l])=>h('div',{},[h('strong',{},v),h('span',{},l)]))),
   h('section',{class:'section-block'},[h('div',{class:'section-title'},[h('div',{},[h('h2',{},'设计要统一，积累要有位置。'),h('p',{},'从参考到自己的实现，每一层都有清晰的边界。')]),h(YkBadge,{variant:'outline'},()=> '规范 · 结构 · 交互 · 视觉')]),h('div',{class:'principle-grid'},[
    ['01','设计变量','品牌色、间距和圆角集中配置，不在每个页面重新写一遍。','themes'],
    ['02','组件契约','每个组件附带参数、事件、插槽、状态和使用边界。','components/button'],
    ['03','方案资产','验证过的表单和内容块留在 blocks，供下个项目直接复用。','patterns']
   ].map(([n,title,desc,link])=>h('a',{class:'principle-card',href:`#${link}`},[h('span',{class:'principle-number'},n),h('h3',{},title),h('p',{},desc),h('span',{class:'principle-arrow'},'↗')])))]),
   h('section',{class:'section-block'},[h('div',{class:'section-title'},[h('div',{},[h('h2',{},'组件索引'),h('p',{},'选择一个组件，查看真实演示与完整规格。')]),h('span',{class:'tiny muted'},`${filtered.value.length} 项 · 包含配置容器`)]),h('div',{class:'component-index'},filtered.value.map(c=>h('a',{href:`#components/${c.id}`,class:'component-tile'},[h('span',{},c.title),h('code',{},c.name),h('b',{},'↗')]))),!filtered.value.length?h('p',{class:'empty-search'},'没有匹配的组件，请修改搜索词。'):null])
  ];
  const api=(c)=>stack([h('div',{class:'table-scroll'},h('table',{class:'api-table'},[h('thead',{},h('tr',{},['参数','类型','默认值','说明'].map(x=>h('th',{scope:'col'},x)))),h('tbody',{},c.props.map(p=>h('tr',{},[h('td',{},h('code',{},p.name)),h('td',{},h('code',{},p.type)),h('td',{},p.default),h('td',{},p.description)])))])),h('h3',{},'插槽与事件'),pair('Slots',c.slots.join(' / ')||'无'),pair('Events',c.events.map(x=>`${x.name} → ${x.payload}`).join(' / ')||'无')]);
  const spec=(c)=>stack([h('h3',{},'视觉规则'),h('p',{class:'muted'},c.visual),h('h3',{},'组件结构'),h('pre',{class:'structure-box'},c.structure),h('h3',{},'交互与键盘规则'),...c.rules.map(x=>h('p',{class:'rule-line'},['✓ ',x])),h('h3',{},'范围边界'),...c.limitations.map(x=>h('p',{class:'rule-line muted'},['— ',x])),h('h3',{},'文件位置'),pair('实现',c.source),pair('样式',c.style),pair('类型',c.types),pair('规格',c.spec),h('p',{class:'tiny muted'},'参考文档不等于全量复刻。reviewed 为已读取依据，reference 为后续复核入口。'),...c.references.map(r=>h('a',{href:r.url,target:'_blank',rel:'noopener noreferrer',class:'reference-link'},`${r.name} · ${r.verification} ↗`))]);
  const componentPage=c=>[
   heading(`${c.category.toUpperCase()} / ${c.name}`,`${c.title} ${c.name}`,c.summary),
   row([h(YkBadge,{tone:'primary'},()=> 'v0.5.0 beta'),h(YkBadge,()=> 'Vue 原生实现'),h(YkBadge,{tone:'success'},()=> '参数 · 插槽 · 事件')]),
   h('div',{class:'component-main'},h(YkTabs,{modelValue:activeView.value,'onUpdate:modelValue':v=>activeView.value=v,label:'组件详情',variant:'line',items:[{value:'preview',label:'交互演示'},{value:'api',label:'参数接口'},{value:'spec',label:'设计与交互规范'}]}, {
    preview:()=>[h('div',{class:'preview-toolbar'},[h('span',{},`${state.skin} / ${state.mode} / ${state.density}`),h(YkButton,{size:'sm',variant:'ghost',onClick:()=>go('studio/'+c.id)},()=> '滑块调样式 ↗')]),h('div',{class:'demo-stage'},demos[c.id]?demos[c.id]():h(YkAsset,{asset:c.id})),code(examples[c.id]||`<${c.name} />`),h(YkAlert,{tone:'primary'},()=> '这里展示的就是源码构建出的 Vue 组件，不是独立编写的静态仿真页面。')],
    api:()=>api(c),spec:()=>spec(c)
   })),
   h('div',{class:'bottom-path'},[h('span',{},'源码位置'),h('code',{},c.source)])
  ];
  const themes=()=>[
   heading('DESIGN TOKENS','主题工坊','先调参数，再看组件。满意的主题可以导出，放回自己的项目中。'),
   h('div',{class:'theme-workspace'},[
    h(YkCard,{title:'外观参数',description:'所有改动立即应用到整个工作台。'},{default:()=>stack([
     h(YkSelect,{label:'视觉风格',modelValue:state.skin,'onUpdate:modelValue':v=>state.skin=v,options:[{value:'soft',label:'Soft · 柔和'},{value:'precise',label:'Precise · 精确'}]}),
     h(YkSelect,{label:'亮暗模式',modelValue:state.mode,'onUpdate:modelValue':v=>state.mode=v,options:[{value:'light',label:'浅色'},{value:'dark',label:'深色'}]}),
     h(YkSelect,{label:'组件密度',modelValue:state.density,'onUpdate:modelValue':v=>state.density=v,options:[{value:'comfortable',label:'舒适'},{value:'compact',label:'紧凑'}]}),
     h('label',{class:'color-control'},[h('span',{},'品牌色'),h('input',{type:'color','aria-label':'品牌色',value:state.primary||(state.mode==='dark'?'#a99afb':'#5b45d6'),onInput:e=>state.primary=e.target.value})]),
     h('label',{class:'range-control'},[h('span',{},`圆角覆盖：${state.radius?`${state.radius}px`:'使用风格预设'}`),h('input',{type:'range','aria-label':'圆角覆盖',min:0,max:24,step:1,value:state.radius,onInput:e=>state.radius=Number(e.target.value)})]),
     h(YkSwitch,{label:'允许动效',modelValue:state.motion,'onUpdate:modelValue':v=>state.motion=v}),
     row([h(YkButton,{onClick:downloadTheme},()=> '导出主题 JSON'),h(YkButton,{variant:'outline',onClick:()=>Object.assign(state,{skin:'soft',mode:'light',density:'comfortable',size:'md',motion:true,primary:'',radius:0})},()=> '重置')])
    ])}),
    h('div',{class:'theme-preview-stack'},[h(YkCard,{title:'实时预览',description:'修改左边的参数，查看同一组组件如何变化。'},{default:()=>stack([row([h(YkButton,()=> '主要操作'),h(YkButton,{variant:'secondary'},()=> '次要操作'),h(YkButton,{variant:'outline'},()=> '描边')]),h(YkInput,{label:'输入框预览',defaultValue:'同一套 Vue 组件'}),row([h(YkBadge,{tone:'success',dot:true},()=> '已完成'),h(YkBadge,{tone:'warning',dot:true},()=> '待复核'),h(YkBadge,{tone:'danger',dot:true},()=> '有异常')]),h(YkProgress,{label:'主题预览',value:64})])}),code(JSON.stringify(config.value,null,2),'yuankit.theme.json'),h('p',{class:'tiny muted'},'主题导出不自动写回源文件。将 JSON 传给 ConfigProvider；永久默认值在 tokens.json 中维护。')])
   ])
  ];
  const guides=()=>[
   heading('CONTRIBUTING & GOVERNANCE','从哪里改，如何继续加。','这是项目的维护规则，不只是一个组件展示页面。'),
   h(YkAlert,{tone:'primary',title:'先区分组件与业务方案'},()=> '无业务含义的基础控件进入 packages/vue；组合多个组件、包含业务校验的方案进入 blocks。'),
   h('div',{class:'section-block'},[h('h2',{},'配置修改地图'),h('div',{class:'table-scroll'},h('table',{class:'api-table'},[h('thead',{},h('tr',{},[h('th',{},'要调整的内容'),h('th',{},'修改位置')])),h('tbody',{},configPaths.map(([a,b])=>h('tr',{},[h('td',{},a),h('td',{},h('code',{},b))])))]))]),
   h('div',{class:'section-block'},[h('h2',{},'新增组件的标准路径'),h('div',{class:'workflow'},['建立来源规格','统一 API 与变量','实现 Vue 组件','补充演示与测试','审核后升级版本'].map((s,i)=>h('div',{},[h('span',{},`0${i+1}`),h('strong',{},s)]))),code('npm run new:component -- empty-state\n# 生成草稿：不自动当作正式组件发布\nnpm run build\nnpm test\npython tests/browser/run.py','开发命令'),h('p',{class:'muted'},'脚手架生成目录、类型、规格和登记草稿。补齐交互与测试后，再添加公共导出及演示。详见 docs/ADDING_COMPONENT.md。')]),
   h('div',{class:'section-block'},[h('h2',{},'配置优先级'),h('pre',{class:'structure-box'},'库级默认值 → 外层 ConfigProvider → 内层 ConfigProvider → 单组件 Props\n视觉预设变量 → Provider tokens → 调用项目明确的局部 CSS 覆盖'),h('p',{class:'muted'},'结构与行为变化要改组件；品牌变化先改 Token。不要在业务页面复制一套库内 CSS。')]),
   h('div',{class:'section-block'},[h('h2',{},'接入其他 Vue 项目'),code(`npm install ./zhaoysg-yuankit-vue-0.5.0.tgz\n# 当前提供本地包；尚未发布到 npm。`,'安装本地构建包'),code(`<script setup>\nimport { YkConfigProvider, YkButton } from '@zhaoysg/yuankit-vue'\nimport '@zhaoysg/yuankit-vue/style.css'\n</script>\n\n<template>\n  <YkConfigProvider skin="soft" mode="light">\n    <YkButton>开始使用</YkButton>\n  </YkConfigProvider>\n</template>`,'App.vue')]),
   h(YkAlert,{tone:'warning',title:'首版边界'},()=> '已实现的组件有明确规格，不代表 Ant Design 与 HeroUI 的全量组件都已蒸馏。已有基础表格、日期、文件选择和单选树；复杂数据表、范围日历、真实上传服务与富文本仍不在本版。')
  ];
  const patterns=()=>[
   heading('REUSABLE PATTERNS','把好方案，留在这里。','组件是积木，方案是验证过的组合。两者分开维护，也能一起复用。'),
   h('div',{class:'pattern-grid'},[h('div',{},[h(SettingsPanel,{onSave:()=>notify('方案触发了 save 事件；数据仍只存在当前演示页。')}),h('div',{class:'bottom-path'},h('code',{},'blocks/settings-panel/index.js'))]),h('div',{class:'demo-stack'},[h(ContentCard,{onOpen:()=>contentOpen.value=true}),h(YkCard,{title:'下一个好方案',description:'例如发布表单、筛选栏、内容列表。'},{default:()=>h('p',{class:'muted'},'保存实际实现、适用场景、所用组件、输入输出和验收案例，而不只是一张图片。'),footer:()=>h(YkButton,{variant:'outline',onClick:()=>go('guides')},()=> '查看维护规范')}),h('div',{class:'bottom-path'},h('code',{},'blocks/content-card/index.js'))])]),
   h(YkDialog,{title:'方案资产的维护方式',description:'此内容由 ContentCard 的 open 事件打开。',open:contentOpen.value,'onUpdate:open':v=>contentOpen.value=v},{default:()=>h('p',{},'将通用交互留在组件库，将业务字段、校验与数据请求留在方案或业务项目里。一个好的方案应包含可运行代码、适用条件和测试，而不是复制整页。')})
  ];
  return ()=>h(YkConfigProvider,{...config.value,class:'app-shell'},()=>[
   h('a',{class:'skip-link',href:'#main-content',onClick:e=>{e.preventDefault();document.getElementById('main-content')?.focus();}},'跳到主要内容'),
   h('header',{class:'topbar'},[
    h('a',{class:'brand',href:'#overview','aria-label':'YuanKit 首页'},[h('span',{class:'brand-symbol'},[h('i'),h('i'),h('i')]),h('strong',{},'YuanKit'),h('span',{class:'brand-caption'},'元件库')]),
    h('nav',{class:'header-center','aria-label':'主工作区'},[h('a',{href:'#studio'},'工作台'),h('span',{class:'header-dot'},'/'),h('a',{href:'#overview'},'组件'),h('span',{class:'header-dot'},'/'),h('a',{href:'#guides'},'规范')]),
    h('div',{class:'header-actions'},[h(YkBadge,{variant:'outline'},()=> 'v0.5.0 beta'),h(YkButton,{variant:'ghost',iconOnly:true,'aria-label':state.mode==='light'?'切换深色模式':'切换浅色模式',onClick:()=>state.mode=state.mode==='light'?'dark':'light'},()=>icon(state.mode==='light'?'moon':'sun')),h(YkButton,{class:'mobile-menu',variant:'outline',size:'sm','aria-expanded':menu.value,'aria-controls':'sidebar',onClick:()=>menu.value=!menu.value},()=>menu.value?'收起目录':'目录')])
   ]),
   h('aside',{id:'sidebar',class:['sidebar',{'is-open':menu.value}]},[
    h('div',{class:'sidebar-search'},h(YkInput,{label:'搜索组件',placeholder:'名称 / 关键词',modelValue:search.value,'onUpdate:modelValue':v=>search.value=v,clearable:true,size:'sm'},{leading:()=>icon('search',15)})),
    h('nav',{'aria-label':'组件库目录'},[h('div',{class:'nav-section-label'},'工作台'),navItem('overview','总览',null,'grid'),navItem('studio','可视化工坊','NEW','sun'),navItem('themes','主题工坊',null,'sun'),navItem('guides','开发规范',null,'code'),navItem('patterns','方案资产','2','grid'),...['基础','表单','展示','反馈','导航','AI 界面'].flatMap(group=>{const items=filtered.value.filter(x=>x.category===group);return items.length?[h('div',{class:'nav-section-label'},group),...items.map(c=>h('a',{href:`#components/${c.id}`,class:['component-nav',{'is-active':route.value===`components/${c.id}`}],'aria-current':route.value===`components/${c.id}`?'page':undefined},[h('span',{},c.title),h('small',{},c.name.replace('Yk',''))]))]:[];})]),
    h('div',{class:'sidebar-bottom'},[h('span',{class:'live-dot'}),h('span',{},'源码 · 规范 · 可复用')])
   ]),
   h('main',{id:'main-content',tabindex:-1,class:'main-content'},[
    notice.value?h('div',{class:'notice-bar',role:'status'},[h('span',{},notice.value),h('button',{type:'button','aria-label':'关闭提示',onClick:()=>notice.value=''},'×')]):null,
    route.value.startsWith('studio')?h(Studio,{initialAsset:route.value.split('/')[1]||'button'}):route.value==='overview'?overview():current.value?componentPage(current.value):route.value==='themes'?themes():route.value==='guides'?guides():route.value==='patterns'?patterns():[heading('NOT FOUND','没有这个页面','请从左侧目录选择组件或工作台页面。'),h(YkButton,{onClick:()=>go('overview')},()=> '返回总览')],
    h('footer',{class:'page-footer'},[h('span',{},'YuanKit · 让设计成为可复用的资产'),h('span',{},'独立实现 · 非官方复刻 · 0.5.0')])
   ])
  ]);
 }
};
window.YuanKit=UI;
window.__yuankitApp=createApp(App);
window.__yuankitApp.mount('#app');
