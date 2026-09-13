import {defineComponent,h,mergeProps} from 'vue';
export const YkButtonGroup=defineComponent({name:'YkButtonGroup',inheritAttrs:false,props:{attached:{type:Boolean,default:true}},setup(p,{attrs,slots}){return()=>h('div',mergeProps(attrs,{class:['yk-button-group',{'is-attached':p.attached}],role:'group'}),slots.default?.());}});
