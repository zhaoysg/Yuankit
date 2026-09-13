export type Size = 'sm' | 'md' | 'lg';
export interface Option { value: string; label: string; disabled?: boolean; }
export interface TabItem extends Option { content?: string; }
export type TokenName = "background" | "border" | "control-padding" | "danger" | "danger-soft" | "duration" | "ease" | "field-background" | "focus" | "focus-width" | "font" | "font-size" | "height-lg" | "height-md" | "height-sm" | "line-height" | "muted" | "on-primary" | "overlay" | "panel-padding" | "primary" | "primary-hover" | "primary-soft" | "radius-control" | "radius-panel" | "radius-pill" | "shadow" | "space-1" | "space-2" | "space-3" | "space-4" | "space-6" | "space-8" | "success" | "success-soft" | "surface" | "surface-raised" | "text" | "text-muted" | "warning" | "warning-soft" | "z-tooltip";
export interface YuanConfig {
  skin?: 'soft' | 'precise'; mode?: 'light' | 'dark'; density?: 'comfortable' | 'compact';
  size?: Size; motion?: boolean; locale?: 'zh-CN' | 'en-US'; tokens?: Partial<Record<TokenName, string>>;
}
