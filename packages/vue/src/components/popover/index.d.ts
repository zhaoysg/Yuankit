import type {DefineComponent} from 'vue';
export interface YkPopoverProps {open?:boolean;placement?:'top'|'bottom';label?:string;'onUpdate:open'?:(open:boolean)=>void}
export declare const YkPopover:DefineComponent<YkPopoverProps>;
