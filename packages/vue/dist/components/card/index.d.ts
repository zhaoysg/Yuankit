import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkCardProps {
  /** 默认 h3 标题；复杂标题通过 header 插槽控制层级。 */
  title?: string;
  /** 说明文字。 */
  description?: string;
  /** 根节点语义。 */
  as?: 'section' | 'article' | 'div';
  /** 描边或阴影。 */
  variant?: 'outlined' | 'elevated';
}
export declare const YkCard: DefineComponent<YkCardProps>;
