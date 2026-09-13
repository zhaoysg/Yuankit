/** Change library-wide behavioral defaults here; visual values live in tokens.json. */
export const defaultConfig = Object.freeze({
  skin: 'soft', mode: 'light', density: 'comfortable', size: 'md',
  motion: true, locale: 'zh-CN', tokens: Object.freeze({})
});
export const messages = {
  'zh-CN': { close: '关闭', clear: '清空', loading: '加载中', required: '必填', choose: '请选择' },
  'en-US': { close: 'Close', clear: 'Clear', loading: 'Loading', required: 'Required', choose: 'Choose an option' }
};
