/** Analyze real ESM import/export declarations, not code examples inside template literals. */
import fs from 'node:fs';
import ts from 'typescript';
const files=JSON.parse(fs.readFileSync(0,'utf8'));
const result={};
for(const [name,source] of Object.entries(files)){
 const file=ts.createSourceFile(name,source,ts.ScriptTarget.ES2022,true,ts.ScriptKind.JS);
 result[name]=file.statements.filter(n=>(ts.isImportDeclaration(n)||ts.isExportDeclaration(n))&&n.moduleSpecifier).map(n=>n.moduleSpecifier.text);
}
process.stdout.write(JSON.stringify(result));
