import { defineComponent,h,ref,useId,computed,mergeProps } from 'vue';
import { useYuanConfig } from '../../config/context.js';
import { useControllable,describedBy } from '../../shared/control.js';
export const YkTextarea=defineComponent({
 name:'YkTextarea',inheritAttrs:false,
 props:{modelValue:String,defaultValue:String,id:String,label:String,description:String,error:String,disabled:Boolean,readonly:Boolean,required:Boolean,rows:{type:Number,default:4},maxlength:Number,showCount:Boolean},
 emits:['update:modelValue','change'],
 setup(props,{attrs,emit,expose}){
  const uid=useId(),el=ref(null),composing=ref(false),model=useControllable(props,emit),id=computed(()=>props.id||`yk-textarea-${uid}`);
  const update=e=>{if(!composing.value&&!props.disabled&&!props.readonly)model.set(e.target.value);};
  expose({focus:()=>el.value?.focus()});
  return ()=>h('div',{class:['yk-field',{'yk-field--error':!!props.error,'yk-field--disabled':props.disabled}]},[
   props.label?h('label',{for:id.value,class:'yk-field__label'},props.label):null,
   h('textarea',mergeProps(attrs,{ref:el,id:id.value,class:'yk-textarea',value:model.value.value,rows:props.rows,maxlength:props.maxlength,disabled:props.disabled,readonly:props.readonly,required:props.required,
    'aria-invalid':props.error?'true':undefined,'aria-describedby':describedBy(attrs,props.description?`${id.value}-description`:null,props.error?`${id.value}-error`:null),
    onInput:update,onCompositionstart:()=>{composing.value=true;},onCompositionend:e=>{composing.value=false;update(e);},onChange:e=>emit('change',e.target.value)
   })),
   props.showCount?h('span',{class:'yk-field__count'},`${model.value.value.length}${props.maxlength?` / ${props.maxlength}`:''}`):null,
   props.description?h('p',{id:`${id.value}-description`,class:'yk-field__description'},props.description):null,
   props.error?h('p',{id:`${id.value}-error`,class:'yk-field__error'},props.error):null
  ]);
 }
});
