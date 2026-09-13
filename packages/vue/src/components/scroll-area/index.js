import {defineComponent,h,mergeProps} from 'vue';
export const YkScrollArea=defineComponent({name:'YkScrollArea',inheritAttrs:false,props:{height:{type:Number,default:220}},setup(p,{attrs,slots}){return()=>h('div',mergeProps(attrs,{class:'yk-scroll-area',style:{maxHeight:p.height+'px'}}),slots.default?.());}});
