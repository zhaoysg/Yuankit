import { defineComponent,h,useId,mergeProps } from 'vue';
import { useControllable } from '../../shared/control.js';
export const YkRadioGroup=defineComponent({
 name:'YkRadioGroup',inheritAttrs:false,
 props:{modelValue:String,defaultValue:String,label:{type:String,required:true},name:String,options:{type:Array,default:()=>[]},disabled:Boolean,required:Boolean,orientation:{type:String,default:'horizontal'}},
 emits:['update:modelValue','change'],
 setup(props,{attrs,emit}){
  const model=useControllable(props,emit),uid=useId();
  return ()=>h('fieldset',mergeProps(attrs,{class:['yk-radio-group',`yk-radio-group--${props.orientation}`],disabled:props.disabled}),[
   h('legend',{class:'yk-field__label'},props.label),
   ...props.options.map(option=>h('label',{class:'yk-radio',key:option.value},[
    h('input',{type:'radio',name:props.name||`yk-radio-${uid}`,value:option.value,checked:model.value.value===option.value,disabled:props.disabled||option.disabled,required:props.required,onChange:()=>{model.set(option.value);emit('change',option.value);}}),
    h('span',{},option.label)
   ]))
  ]);
 }
});
