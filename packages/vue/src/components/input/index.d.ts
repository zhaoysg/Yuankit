import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkInputProps {
  /** 受控值，通过 v-model 双向绑定。 */
  modelValue?: string;
  /** 非受控初始值；只在初始化时读取。 */
  defaultValue?: string;
  /** 输入元素 ID；不放到外层容器。 */
  id?: string;
  /** 可见标签；缺省时必须传 aria-label。 */
  label?: string;
  /** 辅助说明，加入 aria-describedby。 */
  description?: string;
  /** 错误内容；展示错误样式和 aria-invalid。 */
  error?: string;
  /** 单个组件尺寸，优先于全局默认。 */
  size?: 'sm' | 'md' | 'lg';
  /** 禁用。 */
  disabled?: boolean;
  /** 只读，不显示清空操作。 */
  readonly?: boolean;
  /** 原生必填约束。 */
  required?: boolean;
  /** 允许清空并将焦点返回输入框。 */
  clearable?: boolean;
  /** 原生 input 类型；值保持字符串，不做数字解析。 */
  type?: string;
  "onUpdate:modelValue"?: (value: string) => void;
  "onChange"?: (value: string) => void;
  "onClear"?: () => void;
}
export declare const YkInput: DefineComponent<YkInputProps>;
