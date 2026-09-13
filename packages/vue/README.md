# @zhaoysg/yuankit-vue 0.2.0 beta

YuanKit 自有 Vue 3 原生组件库。根导出提供 22 个组件和 ConfigProvider；子路径 /studio 提供 YkAsset/预设工具，/blocks 提供 Navbar/Hero/CTA/Footer，/templates 提供 StatusPage。

引入 `@zhaoysg/yuankit-vue/style.css`。底层组件需要 ConfigProvider；YkAsset 已内置自身 Provider。组件库不包含 Vue 运行时，不需要 React。

完整源码包含工作台、字段 schema、示例预设、开发规约和测试。类型声明已提供，但本轮没有完整 SFC 消费端/SSR/跨浏览器验证。未发布 npm registry，使用本地 tarball 安装。


本版说明、AI 接入与迁移见完整源码 docs/。组件仍是 beta；没有真实模型、自动上传或工具执行。
