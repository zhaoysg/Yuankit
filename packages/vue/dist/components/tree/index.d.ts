import type { DefineComponent } from 'vue';
export interface TreeNode {value:string;label:string;disabled?:boolean;children?:TreeNode[]}
export interface YkTreeProps {items?:TreeNode[];modelValue?:string;defaultValue?:string;label?:string;disabled?:boolean;'onUpdate:modelValue'?:(value:string)=>void}
export declare const YkTree: DefineComponent<YkTreeProps>;
