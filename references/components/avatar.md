# YkAvatar / 头像

版本：0.1.0-beta。该文件由 registry/components.json 同步维护；修改组件必须更新规格和测试。

## 用途
图片与可预测的文字降级。

## 来源与取舍
- [Ant Design](https://ant.design/components/avatar/) — reference
- [HeroUI v3](https://heroui.com/en/docs/react/components/avatar) — reference

`reviewed` 表示已读取相关官方文档或源码；`reference` 表示后续复核入口，不表示已逐项复刻。所有 YuanKit CSS 与组件代码为本次独立编写，不包含这两家的运行时或 Pro 资产。

## 视觉
正常图片、缺图、错误降级；三种尺寸。

YuanKit 不是任何一家的像素级拷贝：soft 使用柔和色面与较大圆角，precise 使用较小圆角和描边；具体参数由 `packages/tokens/src/tokens.json` 定义。

## 结构
span[role=img,aria-label] → img 或前两个 Unicode 码点。

## 交互与无障碍
- 图片错误自动退回文字；src 改变后重新尝试。
- 外层统一提供名称，内层 img 不重复播报。

## Props
| 参数 | 类型 | 默认值 | 用途 |
| --- | --- | --- | --- |
| `name` | `string` | `required` | 可访问名称和文字降级来源。 |
| `src` | `string` | `undefined` | 图片 URL；由调用方保证来源可信。 |
| `size` | `'sm'  /  'md'  /  'lg'` | `md` | 28/40/56px。 |

## Slots
无

## Events


## 修改入口
行为：`packages/vue/src/components/avatar/index.js`。样式：`packages/vue/src/components/avatar/style.css`。类型：`packages/vue/src/components/avatar/index.d.ts`。
整体尺寸、品牌与颜色：`packages/tokens/src/tokens.json`。演示：`apps/docs/src/demos.js`。

## 已知范围边界
- 使用前两个 Unicode 码点，不是复杂语种姓名缩写规则。
