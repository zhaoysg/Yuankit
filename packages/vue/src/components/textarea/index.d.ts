import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkTextareaProps {
  /** 受控文本。 */
  modelValue?: string;
  /** 非受控初始文本。 */
  defaultValue?: string;
  /** 输入元素 ID。 */
  id?: string;
  /** 可见标签；否则传 aria-label。 */
  label?: string;
  /** 辅助说明。 */
  description?: string;
  /** 错误内容。 */
  error?: string;
  /** 禁用。 */
  disabled?: boolean;
  /** 只读。 */
  readonly?: boolean;
  /** 原生必填。 */
  required?: boolean;
  /** 初始行数。 */
  rows?: number;
  /** 原生 UTF-16 码元长度上限。 */
  maxlength?: number;
  /** 展示与 maxlength 一致的 UTF-16 码元计数。 */
  showCount?: boolean;
  "onUpdate:modelValue"?: (value: string) => void;
  "onChange"?: (value: string) => void;
}
export declare const YkTextarea: DefineComponent<YkTextareaProps>;
