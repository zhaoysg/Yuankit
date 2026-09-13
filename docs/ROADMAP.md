# 路线与真实缺口（v0.5）

已经交付：103 个可编辑资产入口、48 套样式预设、12 个 AI 组件、AI 对话/创作页面和两类 AI 区块；Calendar/原生 DatePicker、客户端 FileUpload、单选 Tree、手动 Carousel、单条 Toast、Command、Sidebar、单序列 Chart、TagsInput。

下一阶段不是再加同名占位组件，而是补能力和覆盖：

1. 复杂浮层：保留 YuanKit API 和 Token，评估并迁移到成熟 Vue headless primitive（例如 Reka UI）。**本版未引入 Reka**，Popover/Combobox/Dropdown 不具备完整碰撞避让、嵌套焦点、屏幕阅读器矩阵保证。
2. 表单与数据：日期范围/时间/时区、服务端文件上传适配、可虚拟树、多序列图表、排序筛选分页选择 DataTable、Form/Field 校验、NumberField、PIN/OTP、Rating、Timeline。
3. 产品级组合：多页面路由、权限、登录接口、聊天数据库、真实模型流式 transport、RAG/引用溯源、附件上传和产物权限；客户端展示不能冒充服务端完成。
4. 编辑器：页面区块排序与可视化组合器仍未实现。当前是固定模板/插槽组合、参数预览和导出，不是拖拽建站器。
5. 验证：完整 Vue SFC/vue-tsc、SSR/hydration、跨浏览器/移动设备、屏幕阅读器/WCAG、复杂浮层组合、长列表性能。先完成验证，再考虑标记 stable。

WebGL/Three.js/canvas 和大体积编辑器作为可选 adapter，不能在所有业务页面默认加载。开放参考站点与官方资料持续登记到 references，而非复制商用素材。
