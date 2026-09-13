import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkAlertProps {
  /** 语义色；danger 使用 alert，其余使用 status。 */
  tone?: 'primary' | 'success' | 'warning' | 'danger';
  /** 可选标题。 */
  title?: string;
  /** 允许关闭；重新挂载可重置可见状态。 */
  dismissible?: boolean;
  "onDismiss"?: () => void;
}
export declare const YkAlert: DefineComponent<YkAlertProps>;
