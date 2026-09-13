import type {DefineComponent} from 'vue';
export interface NavigationItem {value:string;label:string;disabled?:boolean}
export interface BlockAction {action:'primary'|'secondary'|'navigate';value?:string}
export interface NavbarProps {brand?:string;items?:NavigationItem[];actionLabel?:string;onAction?:(event:BlockAction)=>void}
export interface HeroProps {label?:string;description?:string;eyebrow?:string;actionLabel?:string;secondaryLabel?:string;layout?:'center'|'split';onAction?:(event:BlockAction)=>void}
export interface CtaProps {label?:string;description?:string;actionLabel?:string;secondaryLabel?:string;layout?:'center'|'split';onAction?:(event:BlockAction)=>void}
export interface FooterProps {brand?:string;footerNote?:string;items?:NavigationItem[];onAction?:(event:BlockAction)=>void}
export declare const YkNavbar:DefineComponent<NavbarProps>;
export declare const YkHero:DefineComponent<HeroProps>;
export declare const YkCta:DefineComponent<CtaProps>;
export declare const YkFooter:DefineComponent<FooterProps>;

export { YkAnnouncement } from './announcement/index.js';

export { YkAIKnowledgePanel } from './ai-knowledge-panel/index.js';
export { YkAIAssistantDock } from './ai-assistant-dock/index.js';
