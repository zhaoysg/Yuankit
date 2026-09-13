import type { DefineComponent } from 'vue';
import type {AIMessageData} from '../types.js';
export interface YkAIConversationProps {messages?:AIMessageData[];height?:number;streaming?:boolean;appearance?:'bubble'|'plain'|'card';showAvatar?:boolean;emptyTitle?:string;onFeedback?:(value:{id:string;rating:string})=>void;onRetry?:(id:string)=>void}
export declare const YkAIConversation: DefineComponent<YkAIConversationProps>;
