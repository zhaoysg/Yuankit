import type { DefineComponent } from 'vue';
export interface CommandItem {value:string;label:string;disabled?:boolean;shortcut?:string}
export interface YkCommandProps {open?:boolean;items?:CommandItem[];label?:string;'onUpdate:open'?:(open:boolean)=>void;onSelect?:(item:CommandItem)=>void}
export declare const YkCommand: DefineComponent<YkCommandProps>;
