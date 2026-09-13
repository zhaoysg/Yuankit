import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkTooltipProps {
  /** 纯文本提示。 */
  text: string;
  /** 显示延迟，单位毫秒。 */
  delay?: number;
}
export declare const YkTooltip: DefineComponent<YkTooltipProps>;
