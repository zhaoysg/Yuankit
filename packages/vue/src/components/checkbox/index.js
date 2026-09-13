import { defineComponent,h,ref,useId,watchEffect,mergeProps } from 'vue';
import { useControllable, describedBy } from '../../shared/control.js';
export const YkCheckbox=defineComponent({
 name:'YkCheckbox',inheritAttrs:false,
 props:{modelValue:{type:Boolean,default:undefined},defaultValue:Boolean,indeterminate:Boolean,disabled:Boolean,required:Boolean,label:String,description:String,id:String,name:String,value:{type:String,default:'on'}},
 emits:['update:modelValue','change'],
 setup(props,{slots,attrs,emit}){
  const model=useControllable(props,emit,'modelValue',false),input=ref(null),uid=useId();
  watchEffect(()=>{if(input.value)input.value.indeterminate=props.indeterminate;});
  return ()=>{const id=props.id||`yk-check-${uid}`;return h('label',{class:['yk-check',{'yk-check--disabled':props.disabled}],for:id},[
   h('input',mergeProps(attrs,{ref:input,type:'checkbox',id,name:props.name,value:props.value,checked:model.value.value,disabled:props.disabled,required:props.required,'aria-describedby':describedBy(attrs,props.description?`${id}-description`:null),onChange:e=>{model.set(e.target.checked);emit('change',e.target.checked);}})),
   h('span',{class:'yk-check__copy'},[slots.default?.()||props.label,props.description?h('small',{id:`${id}-description`},props.description):null])
  ]);};
 }
});
