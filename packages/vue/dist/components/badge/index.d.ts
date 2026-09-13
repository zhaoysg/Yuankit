import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkBadgeProps {
  /** 语义色。 */
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
  /** 浅色背景或描边。 */
  variant?: 'soft' | 'outline';
  /** 增加装饰性状态点。 */
  dot?: boolean;
}
export declare const YkBadge: DefineComponent<YkBadgeProps>;
