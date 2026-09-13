import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkDialogProps {
  /** v-model:open；undefined 使用内部状态。 */
  open?: boolean;
  /** 非受控初始打开状态。 */
  defaultValue?: boolean;
  /** 对话框可访问名称。 */
  title: string;
  /** 补充描述。 */
  description?: string;
  /** 最大宽度 400/520/760px；手机自动收缩。 */
  size?: 'sm' | 'md' | 'lg';
  /** Esc 是否请求关闭。 */
  closeOnEscape?: boolean;
  /** 点击遮罩是否请求关闭。 */
  closeOnBackdrop?: boolean;
  /** 显示标题区关闭按钮。 */
  showClose?: boolean;
  "onUpdate:open"?: (value: boolean) => void;
  "onAfterOpen"?: () => void;
  "onAfterClose"?: () => void;
}
export declare const YkDialog: DefineComponent<YkDialogProps>;
