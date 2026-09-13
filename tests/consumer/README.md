# 消费端验收待办

此目录记录尚未执行的消费端验证，不包含伪造的通过结果。

在使用真实 Vue 和项目构建器的独立应用中安装 releases 的 tgz，分别验证：

- App.vue 中按需导入、样式入口、v-model 与 v-model:open。
- TypeScript 严格模式 + vue-tsc；检查 Props、事件和 slot 类型。
- 项目构建产物不重复打包 Vue；常用 bundler 的 ESM/子路径导入。
- SSR/hydration、Teleport/原生 dialog、目标 Safari/Firefox。

当前环境未能联网安装真实消费端依赖，因此不创建假 Vue 类型桩来冒充这些验证。发现问题后补成可执行 fixture 并接入 CI，再移除待办状态。
