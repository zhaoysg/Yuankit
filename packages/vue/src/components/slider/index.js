import { defineComponent,h,computed,ref,useId,mergeProps } from 'vue';
export const YkSlider=defineComponent({name:'YkSlider',inheritAttrs:false,
 props:{modelValue:Number,defaultValue:{type:Number,default:50},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},label:{type:String,required:true},disabled:Boolean,name:String,unit:{type:String,default:''}},emits:['update:modelValue','change'],
 setup(p,{attrs,emit}){const id=useId(),local=ref(p.defaultValue);const bounds=computed(()=>{const min=Number.isFinite(p.min)?p.min:0;return {min,max:Number.isFinite(p.max)&&p.max>min?p.max:min+1,step:Number.isFinite(p.step)&&p.step>0?p.step:1};});const value=computed(()=>Math.max(bounds.value.min,Math.min(bounds.value.max,Number.isFinite(p.modelValue??local.value)?p.modelValue??local.value:bounds.value.min)));
 const update=e=>{if(p.disabled)return;const v=Number(e.target.value);local.value=v;emit('update:modelValue',v);};
 return ()=>h('div',mergeProps(attrs,{class:['yk-slider',{'is-disabled':p.disabled}]}),[h('label',{for:'yk-range-'+id},[h('span',{},p.label),h('output',{for:'yk-range-'+id},value.value+p.unit)]),h('input',{id:'yk-range-'+id,type:'range',...bounds.value,value:value.value,disabled:p.disabled,name:p.name,'aria-valuetext':value.value+p.unit,onInput:update,onChange:e=>{if(!p.disabled)emit('change',Number(e.target.value));}})]);
 }});
