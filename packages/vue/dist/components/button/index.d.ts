import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkButtonProps {
  /** 操作外观；一个操作区域建议只有一个主要动作。 */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  /** 单个组件尺寸，优先于全局默认。 */
  size?: 'sm' | 'md' | 'lg';
  /** 原生按钮类型；不会意外提交表单。 */
  type?: 'button' | 'submit' | 'reset';
  /** 加载时禁用点击，并提供忙碌语义。 */
  loading?: boolean;
  /** 禁用鼠标及键盘激活。 */
  disabled?: boolean;
  /** 铺满可用宽度。 */
  block?: boolean;
  /** 方形图标按钮；调用方必须提供 aria-label。 */
  iconOnly?: boolean;
  "onClick"?: (value: MouseEvent) => void;
}
export declare const YkButton: DefineComponent<YkButtonProps>;
