import { defineComponent,h,mergeProps } from 'vue';
export const YkCard=defineComponent({name:'YkCard',inheritAttrs:false,props:{title:String,description:String,as:{type:String,default:'section'},variant:{type:String,default:'outlined'}},setup(props,{slots,attrs}){return ()=>h(['section','article','div'].includes(props.as)?props.as:'section',mergeProps(attrs,{class:['yk-card',`yk-card--${props.variant}`]}),[
 slots.header?h('header',{class:'yk-card__header'},slots.header()):(props.title||props.description)?h('header',{class:'yk-card__header'},[props.title?h('h3',{class:'yk-card__title'},props.title):null,props.description?h('p',{class:'yk-card__description'},props.description):null]):null,
 h('div',{class:'yk-card__body'},slots.default?.()),slots.footer?h('footer',{class:'yk-card__footer'},slots.footer()):null
 ]);}});
