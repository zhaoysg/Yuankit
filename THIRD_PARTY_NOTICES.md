# Third-party notices and provenance

## YuanKit implementation

Copyright (c) 2026 YuanKit contributors. MIT; see LICENSE.

The components, styles, demo layout, simple SVG line icons and theme values in this project are independently authored. No Ant Design or HeroUI runtime, React runtime, Pro template or brand artwork is distributed as part of the component package.

## Reference projects, not copied implementations

Ant Design: https://github.com/ant-design/ant-design — MIT at the selected 6.6.3 commit. HeroUI: https://github.com/heroui-inc/heroui/tree/v3 — Apache-2.0 at the selected v3 baseline; do not substitute the license of another branch. Reka UI documentation was consulted for interaction design; the current release does not depend on Reka UI.

See references/sources.lock.json for exact commit identifiers and verification scope. Reference names do not imply affiliation or endorsement. Future copied code must include the original license/required notices and identify modifications as required; this file does not grant rights to commercial templates.

## Vue demo runtime (redistributed, unmodified)

vendor/vue-3.5.13.global.prod.js is the Vue 3.5.13 production global runtime, MIT.
Copyright (c) 2018-present Yuxi (Evan) You and Vue contributors.

The runtime was obtained from the preinstalled trame_client Vue3 web distribution in the build environment. Its original version/license header is preserved; SHA-256 is recorded in vendor/runtime-integrity.json. Upstream project: https://github.com/vuejs/core/tree/v3.5.13

See vendor/VUE-LICENSE.txt for the full MIT text. The same runtime is embedded in preview.html and test/demo pages, but is NOT embedded in the Vue npm package. The package declares Vue as a peer dependency.

## Build/test tools

TypeScript 5.8.3 is an Apache-2.0 development dependency installed via npm; its files and license remain in that dependency's distribution. Playwright 1.57.0 is an Apache-2.0 Python test dependency. Neither tool is shipped as part of the published component runtime. Dependency versions are pinned for this workbench; reassess licenses when upgrading.

## v0.2 新增参考站

11 个入口清单见 references/inspiration-sources.json（完整源码包）。这些条目用于记录设计方向与阅读范围，不代表其内容许可适用于本库。新增区块、状态页、参数工作台与可选 CSS 特效为自有实现；未复制第三方图片、字体、视频或付费代码。
