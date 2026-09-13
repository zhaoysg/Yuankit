import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkConfigProviderProps {
  /** 形状与层次；不是两个第三方库的 runtime。 */
  skin?: 'soft' | 'precise';
  /** 亮/暗主题。 */
  mode?: 'light' | 'dark';
  /** 控件高度与容器间距。 */
  density?: 'comfortable' | 'compact';
  /** 按钮、输入框、选择器的默认尺寸。 */
  size?: 'sm' | 'md' | 'lg';
  /** 减少动效；也尊重系统 prefers-reduced-motion。 */
  motion?: boolean;
  /** 内建关闭、清空等文案，不自动翻译业务文案。 */
  locale?: 'zh-CN' | 'en-US';
  /** 经过白名单校验的 CSS 变量覆盖。 */
  tokens?: Partial<Record<TokenName, string>>;
}
export declare const YkConfigProvider: DefineComponent<YkConfigProviderProps>;
