import type { DefineComponent } from 'vue';
export interface YkTagsInputProps {modelValue?:string[];defaultValue?:string[];label?:string;placeholder?:string;max?:number;disabled?:boolean;'onUpdate:modelValue'?:(value:string[])=>void}
export declare const YkTagsInput: DefineComponent<YkTagsInputProps>;
