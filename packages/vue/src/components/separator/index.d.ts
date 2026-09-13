import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkSeparatorProps {
  /** 水平或垂直。 */
  orientation?: 'horizontal' | 'vertical';
  /** true 使用 role=none；false 提供 separator 语义。 */
  decorative?: boolean;
}
export declare const YkSeparator: DefineComponent<YkSeparatorProps>;
