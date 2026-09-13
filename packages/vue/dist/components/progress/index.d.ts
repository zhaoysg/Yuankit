import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkProgressProps {
  /** 进度值；undefined 为不确定进度。 */
  value?: number;
  /** 最大值；非正/非有限值回退为100。 */
  max?: number;
  /** 可见名称和 progressbar 的 accessible name。 */
  label: string;
  /** 展示百分比。 */
  showValue?: boolean;
}
export declare const YkProgress: DefineComponent<YkProgressProps>;
