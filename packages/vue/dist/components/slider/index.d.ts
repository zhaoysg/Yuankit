import type { DefineComponent } from 'vue';
export interface YkSliderProps { modelValue?: number; defaultValue?: number; min?: number; max?: number; step?: number; label: string; disabled?: boolean; name?: string; unit?: string; }
export declare const YkSlider: DefineComponent<YkSliderProps>;
