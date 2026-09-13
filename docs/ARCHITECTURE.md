# 架构与目录

## 分层与依赖

```text
参考资料（Ant Design / HeroUI / Web 平台规范）
    ↓ 人工提炼，记录证据与取舍，不直接运行 React 代码
registry 契约 + references 设计说明
    ↓
packages/tokens      设计值：品牌、模式、风格、密度
packages/vue         Vue 结构、状态、事件、语义与样式
    ↓
blocks               可复用方案；只组合基础组件
    ↓
apps/docs / 业务项目  交互演示或真正业务数据
```

源码组织是多包目录，不使用 npm workspaces 自动安装 peer。根 package-lock 锁定构建工具；两个包单独使用 npm pack，业务项目自行解析 Vue peer。

## 目录职责

```text
yuankit/
├── packages/
│   ├── tokens/src/tokens.json         唯一主题数值源
│   │   └── src/index.js               对比度等纯函数
│   └── vue/src/
│       ├── components/<slug>/        实现、CSS、类型、简介
│       ├── ai/<slug>/                AI 显示层：消息、输入、工具状态、来源与产物
│       ├── blocks/                   可公开复用的导航/营销/AI 区块
│       ├── templates/                页面组合与插槽
│       ├── studio/                   参数、预览与显式本地 AI 演示
│       ├── config/                   默认配置、注入、合并与校验
│       ├── shared/                   状态、ID 辅助、滚动锁、图标
│       ├── base.css                  作用域内基础样式
│       ├── types.d.ts                公共共享类型
│       ├── plugin.js                 可选全局注册
│       └── index.js / index.d.ts      对外入口
├── registry/components.json          参数与组件目录的单一登记入口
├── registry/inspector.json           103 个资产及字段范围
├── registry/presets.json             48 套样式参数与文件映射
├── presets/gallery/                 样式 JSON
├── registry/patterns.json            方案登记
├── references/sources.lock.json      来源/提交号/核对范围
├── references/components/            四维规格、决策与边界
├── blocks/                           组合方案与配套样式
├── apps/docs/src/                     工作台源码
├── scripts/                          构建、预览、生成器、上传助手
├── tests/unit/                       Node 纯逻辑和契约验证
├── tests/browser/                    真实 Vue 浏览器行为测试
├── tests/consumer/                   尚需联网执行的消费端验证入口
├── vendor/                           离线 Vue 运行时与 MIT 归属
├── reports/                          实际测试证据
├── releases/                         打包的 tgz
└── preview.html                      构建生成的单文件演示
```

## 为什么首版使用原生 HTML 行为

Dialog 使用 HTML dialog/showModal；Select 使用原生 select；Checkbox、Switch、RadioGroup 使用原生表单元素。基础行为可直接继承浏览器语义和键盘机制，自有代码负责 Vue 状态、事件、样式和组合。

此选择不等于把 HeroUI/Ant Design 所有能力带进来了：原生 select 的展开面板由操作系统控制，不提供自定义 option 模板、搜索、多选；dialog 的兼容性需要按目标浏览器验证。后续复杂选择器/菜单可评估 Reka UI，但 **v0.5.0 仍不依赖 Reka UI**。

## 构建原理

Node 读取 Token JSON → 生成 CSS 变量、允许的 Token 名称 → 复制 Vue ESM 到 dist → 合并组件 CSS → 使用 TypeScript 解析器转译模块为离线 bundle。没有运行时模板编译，也没有字符串替换式 JSX/模板解析。

发布 ESM 保留 `import ... from 'vue'`，避免重复打包 Vue。全局版需要先加载 Vue；preview 单文件额外内嵌官方 Vue 运行时。演示与 npm ESM 共享同一份组件源文件。

构建器只有本仓库需要的静态 ESM 能力，不是完整 Vite/Rollup 替代品。新增外部依赖、动态导入、CSS 预处理或 SFC 源码时，必须扩展构建与测试或迁移成熟构建器。

## 扩展决策

代码级改动用 ADR 记录：动机、参考、公开接口影响、包体积、浏览器支持、迁移和测试。优先用 CSS Token 完成品牌调整，不为了换颜色新增一套重复组件。
