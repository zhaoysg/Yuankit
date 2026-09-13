import type { DefineComponent } from 'vue';
import type {AIModelOption,AIPromptPayload} from '../types.js';
export interface YkAIPromptInputProps {modelValue?:string;model?:string;models?:AIModelOption[];placeholder?:string;label?:string;busy?:boolean;disabled?:boolean;rows?:number;maxLength?:number;sendKey?:'enter'|'modifier-enter';attachments?:boolean;accept?:string;maxFiles?:number;'onUpdate:modelValue'?:(value:string)=>void;'onUpdate:model'?:(model:string)=>void;onSubmit?:(payload:AIPromptPayload)=>void;onStop?:()=>void;onReject?:(items:Array<{file:File;reason:string}>)=>void}
export declare const YkAIPromptInput: DefineComponent<YkAIPromptInputProps>;
