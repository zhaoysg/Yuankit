import type { DefineComponent } from 'vue';
import type {AIAttachment} from '../types.js';
export interface YkAIAttachmentsProps {items?:AIAttachment[];removable?:boolean;disabled?:boolean;onRemove?:(id:string)=>void}
export declare const YkAIAttachments: DefineComponent<YkAIAttachmentsProps>;
