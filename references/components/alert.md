# YkAlert / 消息提示

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
页面内的说明、成功反馈和错误信息。

## 来源与取舍
- [Ant Design](https://ant.design/components/alert/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/alert) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
四类语义、单行/多行、可关闭。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
容器 → 装饰图标 + 标题/正文 + 关闭按钮。

## 交互与无障碍
- 关闭按钮有可访问名称。
- 错误通过文字说明，不只靠红色。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `tone` | `'primary'  /  'success'  /  'warning'  /  'danger'` | `primary` | 语义色；danger 使用 alert，其余使用 status。 |
| `title` | `string` | `undefined` | 可选标题。 |
| `dismissible` | `boolean` | `false` | 允许关闭；重新挂载可重置可见状态。 |

## Slots
default

## Events
- `dismiss` → `void`

## 修改入口
行为：`packages/vue/src/components/alert/index.js`。样式：`packages/vue/src/components/alert/style.css`。类型：`packages/vue/src/components/alert/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 页面内组件，不是全局 toast 系统；没有自动消失计时器。
