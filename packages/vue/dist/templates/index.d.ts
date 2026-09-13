import type {DefineComponent} from 'vue';
export interface StatusPageProps {status?:string;label?:string;description?:string;eyebrow?:string;actionLabel?:string;secondaryLabel?:string;layout?:'center'|'split';onAction?:(event:{action:'primary'|'secondary';value:string})=>void}
export declare const YkStatusPage:DefineComponent<StatusPageProps>;

export { YkAIChatPage } from './ai-chat-page/index.js';
