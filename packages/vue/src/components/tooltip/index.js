import { defineComponent,h,ref,useId,onBeforeUnmount,nextTick,Teleport,mergeProps } from 'vue';
import { useYuanConfig } from '../../config/context.js';
import { themeAttrs } from '../../config/theme.js';
export const YkTooltip=defineComponent({
 name:'YkTooltip',inheritAttrs:false,props:{text:{type:String,required:true},delay:{type:Number,default:300}},
 setup(props,{slots,attrs}){
  const uid=useId(),shown=ref(false),anchor=ref(null),bubble=ref(null),position=ref({left:'0px',top:'0px'}),config=useYuanConfig();
  const target=ref('body');let timer,hideTimer,hovered=false,focused=false,observer,disposed=false;
  const place=()=>{if(!shown.value||!anchor.value||!bubble.value)return;const a=anchor.value.getBoundingClientRect(),b=bubble.value.getBoundingClientRect();position.value={left:`${Math.max(8,Math.min(innerWidth-b.width-8,a.left+(a.width-b.width)/2))}px`,top:`${a.top-b.height-9>=8?a.top-b.height-9:Math.min(innerHeight-b.height-8,a.bottom+9)}px`};};
  const hide=()=>{clearTimeout(timer);clearTimeout(hideTimer);observer?.disconnect();shown.value=false;window.removeEventListener('scroll',place,true);window.removeEventListener('resize',place);window.removeEventListener('keydown',escape);};
  const escape=e=>{if(e.key==='Escape')hide();};
  const open=()=>{clearTimeout(hideTimer);clearTimeout(timer);timer=setTimeout(async()=>{target.value=anchor.value?.closest('dialog[open]')||'body';shown.value=true;await nextTick();if(disposed||!shown.value)return;place();observer?.disconnect();if(typeof ResizeObserver!=='undefined'){observer=new ResizeObserver(place);if(anchor.value)observer.observe(anchor.value);if(bubble.value)observer.observe(bubble.value);}window.addEventListener('scroll',place,true);window.addEventListener('resize',place);window.addEventListener('keydown',escape);},props.delay);};
  const maybeHide=()=>{clearTimeout(timer);hideTimer=setTimeout(()=>{if(!hovered&&!focused)hide();},100);};
  onBeforeUnmount(()=>{disposed=true;clearTimeout(timer);clearTimeout(hideTimer);hide();});
  return ()=>h('span',{class:'yk-tooltip-anchor',ref:anchor,onMouseenter:()=>{hovered=true;open();},onMouseleave:()=>{hovered=false;maybeHide();},onFocusin:()=>{focused=true;open();},onFocusout:()=>{focused=false;maybeHide();}},[
   slots.default?.({attrs:{'aria-describedby':shown.value?`yk-tooltip-${uid}`:undefined}}),
   shown.value?h(Teleport,{to:target.value},h('div',mergeProps(themeAttrs(config.value),attrs,{ref:bubble,id:`yk-tooltip-${uid}`,role:'tooltip',class:'yk-tooltip',style:position.value,onMouseenter:()=>{hovered=true;clearTimeout(hideTimer);},onMouseleave:()=>{hovered=false;maybeHide();}}),props.text)):null
  ]);
 }
});
