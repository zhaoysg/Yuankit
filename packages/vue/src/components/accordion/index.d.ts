import type { DefineComponent } from 'vue';
export interface YkAccordionProps { items: Array<{value: string; label: string; content?: string; disabled?: boolean}>; modelValue?: string[]; defaultValue?: string[]; multiple?: boolean; }
export declare const YkAccordion: DefineComponent<YkAccordionProps>;
