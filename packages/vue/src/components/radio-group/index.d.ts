import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkRadioGroupProps {
  /** 受控值。 */
  modelValue?: string;
  /** 非受控初始值。 */
  defaultValue?: string;
  /** fieldset 的 legend。 */
  label: string;
  /** 一组原生 radio 的共享 name。 */
  name?: string;
  /** 唯一非空字符串 value、label、disabled。 */
  options?: Option[];
  /** 禁用整组。 */
  disabled?: boolean;
  /** 至少选择一个。 */
  required?: boolean;
  /** 布局方向，不改原生键盘行为。 */
  orientation?: 'horizontal' | 'vertical';
  "onUpdate:modelValue"?: (value: string) => void;
  "onChange"?: (value: string) => void;
}
export declare const YkRadioGroup: DefineComponent<YkRadioGroupProps>;
