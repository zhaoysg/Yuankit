import type { DefineComponent } from 'vue';
export interface YkAISuggestionsProps {items?:Array<{value:string;label:string;content?:string;disabled?:boolean}>;disabled?:boolean;layout?:'chips'|'cards';onSelect?:(item:{value:string;label:string;content?:string})=>void}
export declare const YkAISuggestions: DefineComponent<YkAISuggestionsProps>;
