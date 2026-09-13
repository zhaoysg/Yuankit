import { defineComponent, h, computed, mergeProps } from 'vue';
import { useYuanConfig, useMessages } from '../../config/context.js';
export const YkButton=defineComponent({
 name:'YkButton',inheritAttrs:false,
 props:{variant:{type:String,default:'primary'},size:String,disabled:Boolean,loading:Boolean,block:Boolean,iconOnly:Boolean,type:{type:String,default:'button'}},
 emits:['click'],
 setup(props,{slots,attrs,emit}) {
  const config=useYuanConfig(), t=useMessages(); const size=computed(()=>props.size||config.value.size);
  return ()=>h('button',mergeProps(attrs,{
   class:['yk-button',`yk-button--${props.variant}`,`yk-size--${size.value}`,{'yk-button--block':props.block,'yk-button--icon':props.iconOnly}],
   type:props.type,disabled:props.disabled||props.loading,'aria-busy':props.loading||undefined,'data-loading':props.loading||undefined,
   onClick:e=>{if(!props.disabled&&!props.loading)emit('click',e);}
  }),[
   props.loading?h('span',{class:'yk-spinner','aria-hidden':'true'}):slots.leading?.(),
   h('span',{class:'yk-button__label'},slots.default?.()), slots.trailing?.(),
   props.loading?h('span',{class:'yk-sr-only'},t.value.loading):null
  ]);
 }
});
