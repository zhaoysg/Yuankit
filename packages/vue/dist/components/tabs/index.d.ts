import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkTabsProps {
  /** 受控激活 value。 */
  modelValue?: string;
  /** 非受控初始项；未指定时使用第一个可用项。 */
  defaultValue?: string;
  /** 唯一 value、label、disabled、可选纯文本 content。 */
  items?: TabItem[];
  /** tablist 的可访问名称。 */
  label?: string;
  /** 方向键自动激活或仅移动焦点。 */
  activation?: 'automatic' | 'manual';
  /** 分段背景或线条外观。 */
  variant?: 'soft' | 'line';
  "onUpdate:modelValue"?: (value: string) => void;
  "onChange"?: (value: string) => void;
}
export declare const YkTabs: DefineComponent<YkTabsProps>;
