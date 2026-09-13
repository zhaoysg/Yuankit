import { defineComponent,h,ref,useId,computed,mergeProps } from 'vue';
import { useYuanConfig,useMessages } from '../../config/context.js';
import { useControllable,describedBy } from '../../shared/control.js';
import { icon } from '../../shared/icons.js';
export const YkInput=defineComponent({
 name:'YkInput',inheritAttrs:false,
 props:{modelValue:String,defaultValue:String,id:String,label:String,description:String,error:String,size:String,disabled:Boolean,readonly:Boolean,required:Boolean,clearable:Boolean,type:{type:String,default:'text'}},
 emits:['update:modelValue','change','clear'],
 setup(props,{slots,attrs,emit,expose}) {
  const config=useYuanConfig(),t=useMessages(),uid=useId(),input=ref(null),composing=ref(false);
  const id=computed(()=>props.id||`yk-input-${uid}`),model=useControllable(props,emit);
  const update=e=>{if(!composing.value&&!props.disabled&&!props.readonly)model.set(e.target.value);};
  expose({focus:()=>input.value?.focus(),blur:()=>input.value?.blur()});
  return ()=>h('div',{class:['yk-field',{'yk-field--error':!!props.error,'yk-field--disabled':props.disabled}]},[
   props.label?h('label',{class:'yk-field__label',for:id.value},[props.label,props.required?h('span',{'aria-hidden':'true',class:'yk-required'},' *'):null]):null,
   h('div',{class:['yk-input-wrap',`yk-size--${props.size||config.value.size}`]},[
    slots.leading?h('span',{class:'yk-field__adornment'},slots.leading()):null,
    h('input',mergeProps(attrs,{
     ref:input,id:id.value,class:'yk-input',type:props.type,value:model.value.value,disabled:props.disabled,readonly:props.readonly,required:props.required,
     'aria-invalid':props.error?'true':undefined,'aria-describedby':describedBy(attrs,props.description?`${id.value}-description`:null,props.error?`${id.value}-error`:null),
     onInput:update,onCompositionstart:()=>{composing.value=true;},onCompositionend:e=>{composing.value=false;update(e);},onChange:e=>emit('change',e.target.value)
    })),
    props.clearable&&model.value.value&&!props.disabled&&!props.readonly?h('button',{type:'button',class:'yk-icon-button','aria-label':`${t.value.clear}${props.label?' '+props.label:''}`,onClick:()=>{model.set('');emit('clear');input.value?.focus();}},icon('close',14)):null,
    slots.trailing?h('span',{class:'yk-field__adornment'},slots.trailing()):null
   ]),
   props.description?h('p',{id:`${id.value}-description`,class:'yk-field__description'},props.description):null,
   props.error?h('p',{id:`${id.value}-error`,class:'yk-field__error'},props.error):null
  ]);
 }
});
