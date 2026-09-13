import type { DefineComponent } from 'vue';
import type {AIRole,AIStatus} from '../types.js';
export interface YkAIMessageProps {role?:AIRole;content?:string;name?:string;status?:AIStatus;appearance?:'bubble'|'plain'|'card';showAvatar?:boolean;showActions?:boolean;onCopy?:(result:{ok:boolean})=>void;onFeedback?:(rating:'positive'|'negative'|'')=>void;onRetry?:()=>void}
export declare const YkAIMessage: DefineComponent<YkAIMessageProps>;
