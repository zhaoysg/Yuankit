import { defineComponent,h,mergeProps } from 'vue';
export const YkProgress=defineComponent({name:'YkProgress',inheritAttrs:false,props:{value:Number,max:{type:Number,default:100},label:{type:String,required:true},showValue:{type:Boolean,default:true}},setup(props,{attrs}){return ()=>{const max=Number.isFinite(props.max)&&props.max>0?props.max:100,indeterminate=props.value===undefined,value=Math.max(0,Math.min(max,Number.isFinite(props.value)?props.value:0)),percent=Math.round(value/max*100);return h('div',mergeProps(attrs,{class:'yk-progress'}),[
 h('div',{class:'yk-progress__heading'},[h('span',{},props.label),props.showValue&&!indeterminate?h('span',{},`${percent}%`):null]),
 h('div',{role:'progressbar','aria-label':props.label,'aria-valuemin':0,'aria-valuemax':max,'aria-valuenow':indeterminate?undefined:value,class:['yk-progress__track',{'yk-progress--indeterminate':indeterminate}]},h('div',{class:'yk-progress__bar',style:indeterminate?{}:{width:`${percent}%`}}))
 ]);};}});
