import type { DefineComponent } from 'vue';
export interface YkAIArtifactProps {title?:string;content?:string;summary?:string;language?:string;downloadable?:boolean;onDownload?:()=>void;onCopy?:(result:{ok:boolean})=>void}
export declare const YkAIArtifact: DefineComponent<YkAIArtifactProps>;
