import {defineComponent,h} from 'vue';
export const YkAIStreamingText=defineComponent({name:'YkAIStreamingText',props:{content:{type:String,default:''},streaming:Boolean,cursor:{type:Boolean,default:true}},setup(p){return()=>h('div',{class:'yk-ai-streaming','aria-busy':p.streaming},[p.content,p.streaming&&p.cursor?h('span',{class:'yk-ai-streaming__cursor','aria-hidden':'true'},'▋'):null]);}});
