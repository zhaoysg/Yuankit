import type {DefineComponent} from 'vue';
import type {AISource} from '../../ai/types.js';
export interface YkAIKnowledgePanelProps {items?:AISource[];selected?:string[];title?:string;'onUpdate:selected'?:(ids:string[])=>void}
export declare const YkAIKnowledgePanel:DefineComponent<YkAIKnowledgePanelProps>;
