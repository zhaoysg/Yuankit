import type { DefineComponent } from 'vue';
export interface YkCarouselProps {items?:Array<{value:string;label:string;content?:string}>;modelValue?:number;defaultValue?:number;label?:string;loop?:boolean;'onUpdate:modelValue'?:(value:number)=>void}
export declare const YkCarousel: DefineComponent<YkCarouselProps>;
