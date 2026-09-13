import type { DefineComponent } from 'vue';
export interface YkAIToolCallProps {name?:string;status?:'idle'|'running'|'success'|'error'|'approval';input?:string;output?:string;defaultOpen?:boolean;onApprove?:()=>void;onReject?:()=>void}
export declare const YkAIToolCall: DefineComponent<YkAIToolCallProps>;
