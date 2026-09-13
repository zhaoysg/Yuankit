# 可视化参数工作台

## 工作台布局

工作台采用三栏：左侧资产库、中间真实 Vue 画布、右侧属性检查器。顶部“项目主题”只处理全局品牌色、圆角和密度；右侧属性按内容、尺寸与布局、字体、外观、行为、动效六类切换。这个结构参考了 Storybook Controls 的 live args/controls 思路，但 YuanKit 的字段仍由自己的 `registry/inspector.json` 明确定义，不从第三方运行时自动推断。

独立资产现包含基础组件、页面区块、页面模板与动效方案。导航、首屏、CTA、页脚、公告栏可独立调用；`landing-page` 用来验证这些区块组合后的整体效果。动效方案独立展示 fade/slide/scale/glow/shimmer/pulse，并复用同一组时长、缓动、延迟和强度字段。


## 三个编辑范围

`resolveSettings(asset, settings, designSystem)` 负责合并。示例：

```json
{
  "schemaVersion": 1,
  "libraryVersion": "0.5.0",
  "asset": "button",
  "settings": {"radius": 0, "label": "只改这个按钮"},
  "designSystem": {
    "global": {"radius": 6},
    "components": {"button": {"radius": 14}}
  }
}
```

结果：当前按钮直角；另一 `YkAsset asset="button"` 若共享同一 designSystem 则圆角 14；Input 继承全局圆角 6。没有实例覆盖时继承同类，再继承全局。

在较低层编辑时，面板显示该层的值，不显示上层覆盖后的值；来源标签告诉你最终预览是否被实例覆盖。调低层时预览不变，先检查是否存在更高层覆盖，不要误判为滑块无效。

只有通用外观字段可设为全局。width、文本、value、disabled、列表数据等不开放为全局。库不会扫描 DOM 自动套样式；多个资产需传入同一 designSystem。

## 四种值的位置

1. `tokens.json` 是原生组件库基础主题的来源。
2. `registry/inspector.json.fields` 定义可视化字段范围和默认值。
3. `assets[].defaults` 定义该资产自己的初始样式。
4. 导出的 preset 表示用户覆盖，不会写回源码或 silently 修改其他项目。

不要只修改 registry 名字就宣称参数有效。改变映射时同步 `config.js`、`asset.js` 和 CSS。参数变化必须测实际 computed style 或组件状态，而不只是测输入框值。

## 当前参数类型

range（滑块+数值）、color（颜色选择+六位色值）、text、select、boolean、items（增加/删除/重命名）。各组件暴露不同字段；无意义的控件不显示。有限数值、范围、步长、枚举、列表长度和键唯一性在运行时校验。

`radius=0` 真正表示直角，和旧“主题工坊”用 0 恢复预设的历史交互不同。当前资产设定覆盖基础皮肤；输入框带标签时编辑资产宽度并非只缩放内部文字。小屏标题/状态数字会按响应式规则限制显示尺寸，避免横向溢出。

## 动效与视觉

支持选定资产悬停上移、光晕、扫光；渐变是独立背景选项。编辑时不能为了好看破坏可访问名称、焦点提示、disabled 语义或表单关联。OS 减少动态效果和 `motion=false` 都会关闭对应动效。

部分颜色只在相应变体出现，例如 outline 使用 surface/border，primary 使用强调色/前景色。不是任意 CSS 可视化编辑器，也不允许向页面注入 HTML/CSS/JS 字符串。

## 保存、导入、导出

命名方案最多 50 个，localStorage 键 `yuankit.studio.presets.v1`。保存的是配置和资产 ID，不是截屏。浏览器禁止持久存储时明确提示仅当前会话可用；推荐导出 JSON 作为可靠备份。清空浏览器数据会移除本地方案。

当前导出 schemaVersion=1 / libraryVersion=0.5.0，旧 0.2/0.3/0.4 通过校验后迁移；单文件最大 256KB。未来格式不兼容时必须写迁移器，不能盲目接受。导入只读本地文件，不向服务器上传。未做云同步、团队协作、账号、权限或多人版本合并。

导出 Vue 文件使用 `YkAsset` 与相同 preset；action 由业务项目接管。直接按需使用 `YkButton` 等组件更轻量；当前 YkAsset 的 renderer 覆盖整个资产目录，不承诺按单个资产实现最小打包体积。

## 可用性边界

能调不代表任意组合都合理。过小触控尺寸、低对比度、长文字和大圆角可能影响使用；发布前检查实际页面。原生 Select 展开面板与部分原生表单控件无法统一跨浏览器逐像素外观。工作台保持真实限制，不提供伪控件。

## v0.5：AI、样式库和接口页

新增「AI 界面」目录与顶部直达按钮。「样式库」有当前资产/全部筛选，48 个卡片使用真实 Vue 渲染，展示卡片设 inert 以免嵌套交互干扰；通过独立“应用”按钮把设置载入当前实例。「接口」显示组件 Props、事件、插槽和源码路径。「内容」里项目列表现在可展开修改内容和禁用状态；内容按资产解释为文字、URL、数值或状态。

图库应用只替换指定实例，不改项目全局/同类。导入完整 JSON 会载入其中的 designSystem，这两种操作不同。AI 对话页中的流与工具状态是清楚标识的本地演示，不调用模型或网络。生产调用示例见 AI_COMPONENTS.md。
