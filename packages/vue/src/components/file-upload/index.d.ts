import type { DefineComponent } from 'vue';
export interface YkFileUploadProps {modelValue?:File[];defaultValue?:File[];label?:string;accept?:string;maxSize?:number;maxFiles?:number;disabled?:boolean;'onUpdate:modelValue'?:(files:File[])=>void;onReject?:(items:Array<{file:File;reason:string}>)=>void}
export declare const YkFileUpload: DefineComponent<YkFileUploadProps>;
