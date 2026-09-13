import { defineComponent, h, computed, provide, mergeProps } from 'vue';
import { CONFIG_KEY, useYuanConfig } from '../../config/context.js';
import { mergeConfig, themeAttrs } from '../../config/theme.js';
export const YkConfigProvider = defineComponent({
 name:'YkConfigProvider', inheritAttrs:false,
 props:{skin:String,mode:String,density:String,size:String,motion:{type:Boolean,default:undefined},locale:String,tokens:Object},
 setup(props,{slots,attrs}) {
  const parent=useYuanConfig(); const config=computed(()=>mergeConfig(parent.value,props));
  provide(CONFIG_KEY,config);
  return ()=>h('div',mergeProps(themeAttrs(config.value),attrs),slots.default?.());
 }
});
