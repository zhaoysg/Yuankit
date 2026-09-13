import type { DefineComponent } from 'vue';
export interface YkBreadcrumbProps { items: Array<{value?: string; label: string; href?: string}>; label?: string; separator?: string; }
export declare const YkBreadcrumb: DefineComponent<YkBreadcrumbProps>;
