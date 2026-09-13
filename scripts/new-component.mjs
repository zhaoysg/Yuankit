import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
/** Generate a non-exported draft. This function takes an explicit root for safe isolated tests. */
export function createComponent(root, slug) {
  if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(slug || '')) throw new Error('Use a kebab-case name, for example empty-state.');
  const name = 'Yk' + slug.split('-').map(x => x[0].toUpperCase() + x.slice(1)).join('');
  const base = `packages/vue/src/components/${slug}`;
  const registryPath = path.join(root, 'registry/components.json');
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  if (fs.existsSync(path.join(root, base)) || registry.some(x => x.id === slug || x.name === name)) throw new Error('Component already exists; nothing was overwritten.');
  if (fs.existsSync(path.join(root, `references/components/${slug}.md`))) throw new Error('A specification with this name already exists.');
  const write = (file, text) => { const full = path.join(root, file); fs.mkdirSync(path.dirname(full), { recursive: true }); fs.writeFileSync(full, text, { flag: 'wx' }); };
  write(`${base}/index.js`, `import { defineComponent, h } from 'vue';\n\n// DRAFT: define and review the public contract before export.\nexport const ${name} = defineComponent({\n  name: '${name}',\n  setup(_, { slots }) {\n    return () => h('div', { class: 'yk-${slug}' }, slots.default?.());\n  }\n});\n`);
  write(`${base}/index.d.ts`, `import type { DefineComponent } from 'vue';\nexport interface ${name}Props {}\nexport declare const ${name}: DefineComponent<${name}Props>;\n`);
  write(`${base}/style.css`, `/* DRAFT: use --yk-* tokens. Do not add global resets. */\n.yk-${slug} { color: var(--yk-text); }\n`);
  write(`${base}/README.md`, `# ${name} (draft)\n\n实现、类型、样式同目录。发布前补齐 registry、规格、演示、测试与公共导出。\n`);
  write(`references/components/${slug}.md`, `# ${name} 组件规格草稿\n\n## 来源与版本\n待填写已核对证据，不得将未读取页面标记 reviewed。\n\n## 视觉\n待定义。\n\n## 结构\n待定义。\n\n## 交互与键盘\n待定义。\n\n## 参数、事件、插槽\n待定义。\n\n## 已知限制与测试\n待定义。\n`);
  registry.push({ id: slug, name, title: slug, category: '基础', summary: '草稿，尚不可用于业务。', status: 'draft', since: 'unreleased', source: `${base}/index.js`, style: `${base}/style.css`, types: `${base}/index.d.ts`, spec: `references/components/${slug}.md`, evidenceLevel: 'pending', props: [], slots: ['default'], events: [], structure: '待定义', visual: '待定义', rules: [], limitations: ['尚未实现和验证'], references: [] });
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + '\n');
  return { name, directory: base, status: 'draft' };
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { console.log(createComponent(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), process.argv[2])); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
