import { inject, computed } from 'vue';
import { defaultConfig, messages } from './defaults.js';
export const CONFIG_KEY = Symbol('YuanKit config');
export function useYuanConfig() { return inject(CONFIG_KEY, computed(() => defaultConfig)); }
export function useMessages() { const config = useYuanConfig(); return computed(() => messages[config.value.locale]); }
