import { defineComponent,h,useId,mergeProps } from 'vue';
import { useYuanConfig,useMessages } from '../../config/context.js';
import { useControllable,describedBy } from '../../shared/control.js';
import { icon } from '../../shared/icons.js';
export const YkSelect=defineComponent({
 name:'YkSelect',inheritAttrs:false,
 props:{modelValue:String,defaultValue:String,id:String,label:String,description:String,error:String,placeholder:String,size:String,options:{type:Array,default:()=>[]},disabled:Boolean,required:Boolean,clearable:Boolean},
 emits:['update:modelValue','change'],
 setup(props,{attrs,emit}){
  const model=useControllable(props,emit),uid=useId(),config=useYuanConfig(),t=useMessages();
  return ()=>{const id=props.id||`yk-select-${uid}`;return h('div',{class:['yk-field',{'yk-field--error':!!props.error,'yk-field--disabled':props.disabled}]},[
   props.label?h('label',{for:id,class:'yk-field__label'},props.label):null,
   h('div',{class:['yk-select-wrap',`yk-size--${props.size||config.value.size}`]},[
    h('select',mergeProps(attrs,{id,class:'yk-select',value:model.value.value,disabled:props.disabled,required:props.required,'aria-invalid':props.error?'true':undefined,'aria-describedby':describedBy(attrs,props.description?`${id}-description`:null,props.error?`${id}-error`:null),onChange:e=>{model.set(e.target.value);emit('change',e.target.value);}}),[
     h('option',{value:'',disabled:!props.clearable},props.placeholder||t.value.choose),
     ...props.options.map(o=>h('option',{key:o.value,value:o.value,disabled:o.disabled},o.label))
    ]),h('span',{class:'yk-select__arrow'},icon('chevron',16))
   ]),
   props.description?h('p',{id:`${id}-description`,class:'yk-field__description'},props.description):null,
   props.error?h('p',{id:`${id}-error`,class:'yk-field__error'},props.error):null
  ]);};
 }
});
