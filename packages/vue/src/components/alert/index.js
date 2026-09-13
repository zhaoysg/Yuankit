import { defineComponent,h,ref,mergeProps } from 'vue';
import { useMessages } from '../../config/context.js';
import { icon } from '../../shared/icons.js';
export const YkAlert=defineComponent({name:'YkAlert',inheritAttrs:false,props:{tone:{type:String,default:'primary'},title:String,dismissible:Boolean},emits:['dismiss'],setup(props,{slots,attrs,emit}){const visible=ref(true),t=useMessages();return ()=>visible.value?h('div',mergeProps(attrs,{role:props.tone==='danger'?'alert':'status',class:['yk-alert',`yk-tone--${props.tone}`]}),[
 h('span',{class:'yk-alert__icon'},icon(props.tone==='success'?'check':'info')),
 h('div',{class:'yk-alert__copy'},[props.title?h('strong',{},props.title):null,slots.default?h('div',{},slots.default()):null]),
 props.dismissible?h('button',{type:'button',class:'yk-icon-button','aria-label':t.value.close,onClick:()=>{visible.value=false;emit('dismiss');}},icon('close',16)):null
 ]):null;}});
