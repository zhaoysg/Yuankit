import type { DefineComponent } from 'vue';
export interface YkSidebarProps {items?:Array<{value:string;label:string;disabled?:boolean}>;modelValue?:string;brand?:string;collapsed?:boolean;'onUpdate:modelValue'?:(value:string)=>void;'onUpdate:collapsed'?:(value:boolean)=>void}
export declare const YkSidebar: DefineComponent<YkSidebarProps>;
