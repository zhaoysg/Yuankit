import type {DefineComponent} from 'vue';
export interface YkComboboxProps {modelValue?:string;options?:Array<{value:string;label:string;disabled?:boolean}>;label?:string;placeholder?:string;disabled?:boolean;'onUpdate:modelValue'?:(value:string)=>void}
export declare const YkCombobox:DefineComponent<YkComboboxProps>;
