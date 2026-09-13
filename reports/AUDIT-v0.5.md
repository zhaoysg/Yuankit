# YuanKit v0.5.0 扩展与修复审查

日期：2026-09-12。结论：可以作为继续开发和接入验证的 beta 基线，不宣称完整覆盖 Ant Design、HeroUI 或所有前端需求。

## 本轮交付范围

| 类型 | v0.4 | v0.5 |
| --- | ---: | ---: |
| 基础组件 | 32 | 42 |
| AI 组件 | 0 | 12 |
| 页面区块 | 15 | 17 |
| 页面模板 | 13 | 15 |
| 动效方案 | 16 | 16 |
| 配置容器 | 1 | 1 |
| 可编辑资产 | 77 | 103 |
| 独立命名样式预设 | 本轮新增 | 48 |

预设不计入组件数量。AI 对话页与创作工作台共用 YkAIChatPage 的两种 variant，模板入口数不等于完全独立的实现数。全局插件注册 42 基础 + 12 AI + 1 Provider，共 55 个组件；区块与模板采用显式导入。

## 修复项

| 问题 | 修复 |
| --- | --- |
| 旧预设只认完全相同 libraryVersion | 接受 schemaVersion=1 的 v0.2/0.3/0.4，严格校验后规范化 v0.5；仍拒绝未来版本和未知字段 |
| 新组件漏类型导出或全局注册 | 由 registry 生成插件清单，根导出、子路径及类型与契约测试对齐 |
| Combobox 外部值、禁用、键盘不一致 | 修复受控文字同步、disabled 参数传递、跳过禁用项、Esc、唯一 active-descendant |
| 多个 Popover 点击判断相互影响 | 限定当前实例根元素，外部点击隔离，Esc 焦点返回与监听清理 |
| 动画重播引用失效事件对象 | 同步保存触发元素，再处理动画重启 |
| Toast 指针离开但键盘焦点仍在时恢复计时 | 鼠标或焦点任何一个仍在内部，都继续暂停 |
| 超宽屏 Studio 资产区被旧侧栏覆盖 | 工作台独立占用内容区，隐藏非打开状态的旧侧栏；正常点击回归 |
| 样式库和参数表的 CSS 未进入打包 | 归并到构建读取的 studio.css，并截图检查 |

## 新内容

基础控件增加 Calendar、DatePicker、FileUpload、Tree、Carousel、Toast、Command、Sidebar、Chart、TagsInput。全部有真实实现、导出、参数映射、使用说明和至少一个行为用例。

AI 域增加 StreamingText、Message、Conversation、PromptInput、ModelSelect、Attachments、ToolCall、Sources、Activity、Suggestions、Artifact、Usage；区块增加知识资料面板与侧边助手；模板增加 AI 对话和创作工作台。

样式库有 48 套配置，涉及按钮、输入框、卡片、首屏、导航、404 以及 AI 消息/输入/页面。选择预设后继续在属性面板调整。应用预设只影响当前实例；导入完整 JSON 的全局配置行为单独说明。

新增 AI Elements Vue、AI Elements Tool、shadcn/vue Message Scroller、VLLNT Conversation 的具体文档记录。沿用 Ant Design、HeroUI 和原参考站分类。采取文档与交互参考、独立 Vue 实现；没有整站抓取或复制第三方图片/视频/字体/商业源码。

## AI 接入与安全

UI 组件接收业务数据并发出事件，本身不持有模型服务商密钥。PromptInput 提交文本、File 列表和模型选择值；停止请求事件由业务层落实取消。工具确认不等于工具已执行。来源卡片是安全 URL 展示，不证明资料真实性或读取权限。

Studio 内置示例明显标注本地演示，使用确定性定时输出和内存会话；导出的工作台示例仍是 UI/配置演示。生产应接入 /ai 和 /templates 公共接口。Artifact 只显示安全文本并导出 .txt；不执行 HTML/JS。Activity 是公开任务进度，而非模型隐藏推理。

## 后续仍需处理

优先验证真实 Vue SFC 消费端与类型检查，再评估 Reka UI 作为复杂浮层行为底座（尚未完成迁移）。继续补范围日期、上传传输适配器、完整 Data Table、树多选/虚拟化、多系列 Chart、全局 Toast 队列、页面拖拽编排。AI 后端、Markdown 安全渲染、流协议适配、会话存储与知识检索应作为独立适配层实现，不混入基础控件。

测试证据与环境限制见 VALIDATION-v0.5.md。当前没有 GitHub 推送、远程 CI 或 npm registry 发布记录。
