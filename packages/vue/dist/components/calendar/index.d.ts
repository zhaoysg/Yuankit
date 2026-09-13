import type { DefineComponent } from 'vue';
export interface YkCalendarProps {modelValue?:string;defaultValue?:string;min?:string;max?:string;disabled?:boolean;weekStartsOn?:0|1;label?:string;'onUpdate:modelValue'?:(value:string)=>void}
export declare const YkCalendar: DefineComponent<YkCalendarProps>;
