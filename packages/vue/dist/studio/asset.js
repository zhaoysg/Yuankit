import {YkV05Asset,v05AssetIds} from './v05-asset.js';
import {defineComponent,h,computed,ref,watch,mergeProps} from 'vue';
import * as UI from '../index.js';
import {YkNavbar,YkHero,YkCta,YkFooter,YkAnnouncement,YkFeatureGrid,YkStats,YkLogoCloud,YkPricing,YkFaq,YkTestimonials,YkNewsletter,YkContact,YkSteps,YkBentoGrid} from '../blocks/index.js';
import {YkStatusPage,YkPageTemplate} from '../templates/index.js';
import {resolveSettings,settingsToTheme,cssProperties,getAsset} from './config.js';
export const YkAsset=defineComponent({name:'YkAsset',inheritAttrs:false,props:{asset:{type:String,required:true},settings:{type:Object,default:()=>({})},designSystem:{type:Object,default:()=>({})}},emits:['action'],setup(p,{attrs,emit}){
 const resolved=computed(()=>resolveSettings(p.asset,p.settings,p.designSystem)),text=ref(''),value=ref(0),checked=ref(false),selected=ref(''),opened=ref([]),page=ref(1);
 watch(()=>resolved.value.value,v=>text.value=v??'',{immediate:true});watch(()=>resolved.value.valueNumber,v=>value.value=v??0,{immediate:true});watch(()=>resolved.value.checked,v=>checked.value=v??false,{immediate:true});watch(()=>p.asset,()=>{selected.value='';opened.value=[];page.value=1;});
 const fire=(action,v)=>emit('action',{asset:p.asset,action,value:v});
 const action=e=>emit('action',{asset:p.asset,...e});
 function render(s){const cls={class:'yk-crafted','data-yk-effect':s.loading||s.disabled?'none':s.effect||'none',style:{...cssProperties(s),...(s.gradient?{background:p.asset==='button'?`linear-gradient(${s.gradientAngle}deg,${s.primary},${s.gradientEnd})`:`linear-gradient(${s.gradientAngle}deg,${s.surface},color-mix(in srgb,${s.gradientEnd} 16%,${s.surface}))`}:{})}};
 const model={modelValue:text.value,'onUpdate:modelValue':v=>{text.value=v;fire('update',v);}};const bool={modelValue:checked.value,'onUpdate:modelValue':v=>{checked.value=v;fire('update',v);}};
 const sampleItems=s.items??[];const options=sampleItems.map(i=>({...i,disabled:s.disabled||i.disabled}));
 if(v05AssetIds.includes(p.asset))return h(YkV05Asset,{asset:p.asset,settings:s,onAction:action});
 switch(p.asset){
 case 'button':return h(UI.YkButton,{...cls,variant:s.variant,disabled:s.disabled,loading:s.loading,block:true,onClick:()=>fire('click')},()=>s.label);
 case 'input':return h(UI.YkInput,{...model,label:s.label,placeholder:s.placeholder,error:s.error,disabled:s.disabled,readonly:s.readonly,clearable:s.clearable});
 case 'textarea':return h(UI.YkTextarea,{...model,label:s.label,rows:s.rows,disabled:s.disabled,readonly:s.readonly});
 case 'checkbox':return h(UI.YkCheckbox,{...bool,label:s.label,description:s.description,disabled:s.disabled});
 case 'switch':return h(UI.YkSwitch,{...bool,label:s.label,description:s.description,disabled:s.disabled});
 case 'radio-group':return h(UI.YkRadioGroup,{label:s.label,options,modelValue:selected.value||options[0]?.value,disabled:s.disabled,'onUpdate:modelValue':v=>{selected.value=v;fire('update',v);}});
 case 'select':return h(UI.YkSelect,{label:s.label,options,modelValue:selected.value||options[0]?.value,disabled:s.disabled,'onUpdate:modelValue':v=>{selected.value=v;fire('update',v);}});
 case 'dialog':return h(UI.YkDialog,{title:s.label,description:s.description,style:{width:`min(${s.width}px,calc(100vw - 32px))`,fontSize:s.fontSize+'px',borderWidth:s.borderWidth+'px'}},{trigger:({open})=>h(UI.YkButton,{onClick:open},()=> '打开对话框'),default:()=>h(UI.YkInput,{label:'方案名称',defaultValue:'我的定制方案'}),footer:({close})=>h(UI.YkButton,{onClick:()=>{fire('primary');close();}},()=>s.actionLabel)});
 case 'tabs':return h(UI.YkTabs,{items:sampleItems,label:'可配置选项卡',variant:s.tabsVariant,modelValue:selected.value,'onUpdate:modelValue':v=>{selected.value=v;fire('update',v);}});
 case 'tooltip':return h(UI.YkTooltip,{text:s.description,delay:s.delay,style:{fontSize:s.fontSize+'px',borderRadius:s.radius+'px'}},{default:({attrs:a})=>h(UI.YkButton,{...a,variant:'outline'},()=>s.label)});
 case 'badge':return h(UI.YkBadge,{tone:s.tone,dot:s.dot},()=>s.label);
 case 'card':return h(UI.YkCard,{...cls,title:s.label,description:s.description,variant:s.cardVariant},{default:()=>h('div',{class:'yk-asset__sample'},[h(UI.YkProgress,{value:72,label:'设计进度'}),h(UI.YkButton,{onClick:()=>fire('primary')},()=> '查看方案')])});
 case 'alert':return h(UI.YkAlert,{title:s.label,tone:s.tone},()=>s.description);
 case 'avatar':return h(UI.YkAvatar,{name:s.label});
 case 'separator':return h(UI.YkSeparator,{decorative:true});
 case 'progress':return h(UI.YkProgress,{label:s.label,value:s.indeterminate?undefined:s.valueNumber});
 case 'slider':return h(UI.YkSlider,{label:s.label,modelValue:value.value,disabled:s.disabled,'onUpdate:modelValue':v=>{value.value=v;fire('update',v);}});
 case 'accordion':return h(UI.YkAccordion,{items:sampleItems,multiple:s.multiple,modelValue:opened.value,'onUpdate:modelValue':v=>{opened.value=v;fire('update',v);}});
 case 'breadcrumb':return h(UI.YkBreadcrumb,{items:sampleItems,separator:s.separator,onNavigate:e=>fire('navigate',e.item.value)});
 case 'pagination':return h(UI.YkPagination,{total:s.total,pageSize:s.pageSize,modelValue:page.value,disabled:s.disabled,'onUpdate:modelValue':v=>{page.value=v;fire('update',v);}});
 case 'skeleton':return h(UI.YkSkeleton,{lines:s.lines,avatar:s.avatar,animated:s.animated});
 case 'empty-state':return h(UI.YkEmptyState,{title:s.label,description:s.description,actionLabel:s.actionLabel,onAction:()=>fire('primary')});
 case 'spinner':return h(UI.YkSpinner,{label:s.label,size:s.variant==='secondary'?'sm':'md'});
 case 'toggle':return h(UI.YkToggle,{pressed:checked.value,disabled:s.disabled,'onUpdate:pressed':v=>{checked.value=v;fire('update',v);}},()=>s.label);
 case 'button-group':return h(UI.YkButtonGroup,{attached:true},()=>[h(UI.YkButton,{variant:'outline',onClick:()=>fire('left')},()=> '上一步'),h(UI.YkButton,{onClick:()=>fire('primary')},()=>s.actionLabel),h(UI.YkButton,{variant:'outline',onClick:()=>fire('right')},()=> '更多')]);
 case 'table':return h(UI.YkTable,{caption:s.label,striped:s.checked,columns:[{key:'name',label:'名称'},{key:'status',label:'状态'},{key:'owner',label:'负责人'}],rows:[{id:1,name:'Design System',status:'进行中',owner:'Ava'},{id:2,name:'Landing Page',status:'已完成',owner:'Noah'},{id:3,name:'Motion Kit',status:'待复核',owner:'Mia'}]});
 case 'popover':return h(UI.YkPopover,{}, {trigger:({toggle,attrs})=>h(UI.YkButton,{...attrs,variant:'outline',onClick:toggle},()=>s.label),default:()=>h('div',{},[h('strong',{},'轻量信息'),h('p',{},s.description),h(UI.YkButton,{size:'sm',onClick:()=>fire('primary')},()=>s.actionLabel)])});
 case 'drawer':return h('div',{},[h(UI.YkDrawer,{open:checked.value,title:s.label,'onUpdate:open':v=>checked.value=v},{default:()=>h('div',{class:'demo-stack'},[h('p',{},s.description),h(UI.YkInput,{label:'备注',placeholder:'在这里完成辅助任务'})]),footer:()=>h(UI.YkButton,{onClick:()=>{checked.value=false;fire('primary')}},()=>s.actionLabel)}),h(UI.YkButton,{onClick:()=>checked.value=true},()=> '打开抽屉')]);
 case 'dropdown-menu':return h(UI.YkDropdownMenu,{items:options,onSelect:i=>fire('select',i.value)},{trigger:({toggle})=>h(UI.YkButton,{variant:'outline',onClick:toggle},()=>s.label)});
 case 'combobox':return h(UI.YkCombobox,{disabled:s.disabled,label:s.label,placeholder:s.placeholder,options,modelValue:selected.value,'onUpdate:modelValue':v=>{selected.value=v;fire('update',v)}});
 case 'scroll-area':return h(UI.YkScrollArea,{height:Math.max(120,Math.min(360,s.minHeight||220))},()=>Array.from({length:8},(_,i)=>h('p',{style:{padding:'10px 0',margin:0,borderBottom:'1px solid var(--yk-border)'}},`第 ${i+1} 条可滚动内容 · ${s.description}`)));
 case 'stepper':return h(UI.YkStepper,{items:sampleItems,current:2});
 case 'config-provider':return h(UI.YkCard,{title:'一套配置，统一表现'},()=>h('div',{class:'yk-asset__sample'},[h(UI.YkInput,{label:'配置继承',defaultValue:'修改右侧参数看看'}),h(UI.YkButton,{onClick:()=>fire('primary')},()=> '同一主题的按钮')]));
 case 'navbar':return h(YkNavbar,{...cls,brand:s.brand,items:sampleItems,actionLabel:s.actionLabel,onAction:action});
 case 'hero':return h(YkHero,{...cls,label:s.label,description:s.description,eyebrow:s.eyebrow,actionLabel:s.actionLabel,secondaryLabel:s.secondaryLabel,layout:s.layout,onAction:action});
 case 'cta':return h(YkCta,{...cls,label:s.label,description:s.description,actionLabel:s.actionLabel,secondaryLabel:s.secondaryLabel,layout:s.layout,onAction:action});
 case 'footer':return h(YkFooter,{...cls,brand:s.brand,footerNote:s.footerNote,items:sampleItems,onAction:action});
 case 'announcement':return h(YkAnnouncement,{...cls,label:s.label,actionLabel:s.actionLabel,dismissible:s.dismissible,onAction:action});
 case 'feature-grid':return h(YkFeatureGrid,{...cls,label:s.label,description:s.description,items:sampleItems,onAction:action});
 case 'stats':return h(YkStats,{...cls,label:s.label,description:s.description,items:sampleItems,onAction:action});
 case 'logo-cloud':return h(YkLogoCloud,{...cls,label:s.label,items:sampleItems,onAction:action});
 case 'pricing':return h(YkPricing,{...cls,label:s.label,description:s.description,items:sampleItems,actionLabel:s.actionLabel,onAction:action});
 case 'faq':return h(YkFaq,{...cls,label:s.label,description:s.description,items:sampleItems,onAction:action});
 case 'testimonials':return h(YkTestimonials,{...cls,label:s.label,description:s.description,items:sampleItems,onAction:action});
 case 'newsletter':return h(YkNewsletter,{...cls,label:s.label,description:s.description,actionLabel:s.actionLabel,onAction:action});
 case 'contact':return h(YkContact,{...cls,label:s.label,description:s.description,actionLabel:s.actionLabel,onAction:action});
 case 'steps':return h(YkSteps,{...cls,label:s.label,description:s.description,items:sampleItems,onAction:action});
 case 'bento-grid':return h(YkBentoGrid,{...cls,label:s.label,description:s.description,items:sampleItems,onAction:action});
 case 'login-page':case 'register-page':case 'dashboard-page':case 'article-page':case 'settings-page':case 'onboarding-page':case 'success-page':case 'pricing-page':return h(YkPageTemplate,{...cls,kind:p.asset.replace('-page','').replace('register','register').replace('dashboard','dashboard'),label:s.label,description:s.description,actionLabel:s.actionLabel,secondaryLabel:s.secondaryLabel,items:sampleItems,onAction:action});
 case 'landing-page':return h('div',{class:'yk-landing-page'},[
   h(YkAnnouncement,{label:'从组件到页面，一套资产体系',actionLabel:'查看规范',dismissible:false,onAction:action}),
   h(YkNavbar,{brand:'YuanKit',items:sampleItems,actionLabel:'开始设计',onAction:action}),
   h(YkHero,{...cls,label:s.label,description:s.description,eyebrow:s.eyebrow,actionLabel:s.actionLabel,secondaryLabel:s.secondaryLabel,layout:s.layout,onAction:action}),
   h('section',{class:'yk-landing-features'},['组件能力','页面区块','设计规范'].map((t,i)=>h('article',{class:'yk-landing-feature'},[h('strong',{},t),h('p',{},['所有参数有明确来源、范围和默认值。','导航、首屏、CTA、页脚可以独立调用，也可以组合验证。','主题、动效、尺寸与可访问性规则统一管理。'][i])]))),
   h(YkCta,{label:'调好一套，后续项目直接复用',description:'保存为方案，导出配置或 Vue 调用代码。',actionLabel:'保存方案',secondaryLabel:'查看代码',layout:'split',onAction:action}),
   h(YkFooter,{brand:'YuanKit',footerNote:'Owned Vue components + reusable page assets.',items:sampleItems,onAction:action})
 ]);
 case 'motion-fade':case 'motion-slide':case 'motion-scale':case 'motion-glow':case 'motion-shimmer':case 'motion-pulse':case 'motion-reveal':case 'motion-stagger':case 'motion-spring':case 'motion-float':case 'motion-bounce':case 'motion-rotate':case 'motion-blur':case 'motion-gradient':case 'motion-parallax':case 'motion-marquee':{const recipe=p.asset.replace('motion-','');return h('div',{...cls,class:['yk-motion-demo','yk-crafted'], 'data-motion-recipe':recipe},[h('span',{class:'yk-motion-demo__eyebrow'},'MOTION RECIPE'),h('strong',{},s.label),h('p',{},'在组件上复用同一套时长、缓动、延迟与强度参数。'),h('div',{class:'yk-motion-demo__particles'},[h('i'),h('i'),h('i')]),h(UI.YkButton,{variant:'outline',onClick:e=>{const el=e.currentTarget.closest('.yk-motion-demo');if(el){el.classList.remove('is-replay');void el.offsetWidth;el.classList.add('is-replay');}fire('replay');}},()=> '重播动效')]);}
 default:if(getAsset(p.asset).group==='页面模板')return h(YkStatusPage,{...cls,status:s.status,label:s.label,description:s.description,eyebrow:s.eyebrow,actionLabel:s.actionLabel,secondaryLabel:s.secondaryLabel,layout:s.layout,onAction:action});throw new TypeError('Asset renderer missing: '+p.asset);
 }
 }
 return ()=>{const s=resolved.value;return h(UI.YkConfigProvider,mergeProps(attrs,{...settingsToTheme(s),class:'yk-asset','data-asset':p.asset,style:{...cssProperties(s),width:s.width+'px',maxWidth:'100%',opacity:s.opacity??1,backdropFilter:s.blur?`blur(${s.blur}px)`:undefined}}),()=>render(s));};
}});
