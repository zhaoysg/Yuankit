import type { DefineComponent } from 'vue';
import type { Option, TabItem, TokenName } from '../../types.js';
export interface YkAvatarProps {
  /** 可访问名称和文字降级来源。 */
  name: string;
  /** 图片 URL；由调用方保证来源可信。 */
  src?: string;
  /** 28/40/56px。 */
  size?: 'sm' | 'md' | 'lg';
}
export declare const YkAvatar: DefineComponent<YkAvatarProps>;
