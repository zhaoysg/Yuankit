import type { DefineComponent } from 'vue';
import type {AIModelOption} from '../types.js';
export interface YkAIModelSelectProps {modelValue?:string;options?:AIModelOption[];disabled?:boolean;label?:string;'onUpdate:modelValue'?:(model:string)=>void}
export declare const YkAIModelSelect: DefineComponent<YkAIModelSelectProps>;
