import { computed } from 'vue';
import { CONFIG_KEY } from './config/context.js';
import { defaultConfig } from './config/defaults.js';
import { mergeConfig } from './config/theme.js';
import { publicComponents } from './components.generated.js';
/** Opt-in global registration. Visual theme still requires ConfigProvider. */
export function createYuanKit(options={}) {
 const config=mergeConfig(defaultConfig,options);
 return {install(app){app.provide(CONFIG_KEY,computed(()=>config));for(const [name,component] of Object.entries(publicComponents))app.component(name,component);}};
}
