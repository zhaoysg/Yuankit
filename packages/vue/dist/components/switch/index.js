import { defineComponent,h,useId,mergeProps } from 'vue';
import { useControllable, describedBy } from '../../shared/control.js';
export const YkSwitch=defineComponent({
 name:'YkSwitch',inheritAttrs:false,
 props:{modelValue:{type:Boolean,default:undefined},defaultValue:Boolean,disabled:Boolean,label:String,description:String,id:String,name:String,value:{type:String,default:'on'}},
 emits:['update:modelValue','change'],
 setup(props,{slots,attrs,emit}){
  const model=useControllable(props,emit,'modelValue',false),uid=useId();
  return ()=>{const id=props.id||`yk-switch-${uid}`;return h('label',{for:id,class:['yk-switch',{'yk-switch--disabled':props.disabled}]},[
   h('span',{class:'yk-switch__control'},[
    h('input',mergeProps(attrs,{type:'checkbox',role:'switch',id,name:props.name,value:props.value,checked:model.value.value,disabled:props.disabled,'aria-describedby':describedBy(attrs,props.description?`${id}-description`:null),onChange:e=>{model.set(e.target.checked);emit('change',e.target.checked);}})),
    h('span',{class:'yk-switch__track','aria-hidden':'true'},h('span',{class:'yk-switch__thumb'}))
   ]),
   h('span',{class:'yk-switch__copy'},[slots.default?.()||props.label,props.description?h('small',{id:`${id}-description`},props.description):null])
  ]);};
 }
});
