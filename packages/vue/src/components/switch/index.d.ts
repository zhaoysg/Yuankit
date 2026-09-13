import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkSwitchProps {
  /** 受控开关值。 */
  modelValue?: boolean;
  /** 非受控初始值。 */
  defaultValue?: boolean;
  /** 禁用。 */
  disabled?: boolean;
  /** 标签文字。 */
  label?: string;
  /** 状态说明。 */
  description?: string;
  /** 控件 ID。 */
  id?: string;
  /** 原生表单字段名。 */
  name?: string;
  /** FormData 提交值。 */
  value?: string;
  "onUpdate:modelValue"?: (value: boolean) => void;
  "onChange"?: (value: boolean) => void;
}
export declare const YkSwitch: DefineComponent<YkSwitchProps>;
