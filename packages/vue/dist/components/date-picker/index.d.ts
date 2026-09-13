import type { DefineComponent } from 'vue';
export interface YkDatePickerProps {modelValue?:string;defaultValue?:string;label?:string;min?:string;max?:string;disabled?:boolean;required?:boolean;name?:string;'onUpdate:modelValue'?:(value:string)=>void}
export declare const YkDatePicker: DefineComponent<YkDatePickerProps>;
