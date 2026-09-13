import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkCheckboxProps {
  /** 受控选中状态。 */
  modelValue?: boolean;
  /** 非受控初始状态。 */
  defaultValue?: boolean;
  /** 原生 DOM 半选状态；父组件负责联动。 */
  indeterminate?: boolean;
  /** 禁用。 */
  disabled?: boolean;
  /** 原生必填约束。 */
  required?: boolean;
  /** 文字标签，也可使用 default 插槽。 */
  label?: string;
  /** 辅助说明。 */
  description?: string;
  /** 控件 ID。 */
  id?: string;
  /** 原生表单字段名。 */
  name?: string;
  /** FormData 中选中时提交的值。 */
  value?: string;
  "onUpdate:modelValue"?: (value: boolean) => void;
  "onChange"?: (value: boolean) => void;
}
export declare const YkCheckbox: DefineComponent<YkCheckboxProps>;
