import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkSelectProps {
  /** 受控选中值。 */
  modelValue?: string;
  /** 非受控初始值。 */
  defaultValue?: string;
  /** 控件 ID。 */
  id?: string;
  /** 可见标签，否则传 aria-label。 */
  label?: string;
  /** 辅助说明。 */
  description?: string;
  /** 错误说明。 */
  error?: string;
  /** 未选择时提示。 */
  placeholder?: string;
  /** 单个组件尺寸，优先于全局默认。 */
  size?: 'sm' | 'md' | 'lg';
  /** 唯一非空 string value；空字符串保留给未选状态。 */
  options?: Option[];
  /** 禁用。 */
  disabled?: boolean;
  /** 原生必选约束。 */
  required?: boolean;
  /** 允许重新选择空占位选项。 */
  clearable?: boolean;
  "onUpdate:modelValue"?: (value: string) => void;
  "onChange"?: (value: string) => void;
}
export declare const YkSelect: DefineComponent<YkSelectProps>;
