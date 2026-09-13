import type { DefineComponent } from 'vue';
export interface YkToastProps {open?:boolean;title?:string;description?:string;duration?:number;tone?:'success'|'danger'|'warning'|'primary'|'neutral';'onUpdate:open'?:(open:boolean)=>void}
export declare const YkToast: DefineComponent<YkToastProps>;
