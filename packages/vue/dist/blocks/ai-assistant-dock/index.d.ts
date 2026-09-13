import type {DefineComponent} from 'vue';
import type {AIMessageData,AIPromptPayload} from '../../ai/types.js';
export interface YkAIAssistantDockProps {title?:string;messages?:AIMessageData[];modelValue?:string;busy?:boolean;height?:number;'onUpdate:modelValue'?:(text:string)=>void;onSubmit?:(payload:AIPromptPayload)=>void;onStop?:()=>void;onClose?:()=>void}
export declare const YkAIAssistantDock:DefineComponent<YkAIAssistantDockProps>;
