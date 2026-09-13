# YkConfigProvider / 配置容器

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
一个入口管理外观、行为默认值和作用域。

## 来源与取舍
- [Ant Design tokens](https://ant.design/docs/react/customize-theme/) — reviewed
- [HeroUI theming](https://heroui.com/en/docs/react/getting-started/theming) — reviewed

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
两种 skin × 两种 mode × 两种 density；tokens 支持局部覆盖。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
div.yk-theme + Vue provide/inject；作用域内组件消费配置。

## 交互与无障碍
- 继承父配置，只有显式传入的值覆盖父层。
- 全局默认 < 外层Provider < 内层Provider < 单组件行为Props。
- 视觉CSS：预设变量 < Provider内联tokens < 消费方明确CSS覆盖。
- 增加 token 后 build 会同步 token-key 白名单；未知 token 抛错。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `skin` | `'soft'  /  'precise'` | `soft / 继承` | 形状与层次；不是两个第三方库的 runtime。 |
| `mode` | `'light'  /  'dark'` | `light / 继承` | 亮/暗主题。 |
| `density` | `'comfortable'  /  'compact'` | `comfortable / 继承` | 控件高度与容器间距。 |
| `size` | `'sm'  /  'md'  /  'lg'` | `md / 继承` | 按钮、输入框、选择器的默认尺寸。 |
| `motion` | `boolean` | `true / 继承` | 减少动效；也尊重系统 prefers-reduced-motion。 |
| `locale` | `'zh-CN'  /  'en-US'` | `zh-CN / 继承` | 内建关闭、清空等文案，不自动翻译业务文案。 |
| `tokens` | `Partial<Record<TokenName, string>>` | `{} / 合并继承` | 经过白名单校验的 CSS 变量覆盖。 |

## Slots
default

## Events


## 修改入口
行为：`packages/vue/src/components/config-provider/index.js`。样式：`packages/vue/src/components/config-provider/style.css`。类型：`packages/vue/src/components/config-provider/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 不内置自动跟随系统明暗；业务可通过 matchMedia 映射 mode。
- 插件注册不自动创建主题容器，页面根部仍需 Provider。
