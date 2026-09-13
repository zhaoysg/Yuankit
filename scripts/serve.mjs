import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const port=Number(process.env.PORT||5173);
http.createServer((req,res)=>{try{const url=new URL(req.url,'http://localhost');let target=decodeURIComponent(url.pathname);if(target==='/')target='/preview.html';if(target==='/apps/docs/')target='/apps/docs/index.html';if(!(target==='/preview.html'||target==='/preview-ai.html'||target.startsWith('/apps/docs/')||target.startsWith('/vendor/')||target.startsWith('/packages/vue/dist/')||target.startsWith('/packages/tokens/dist/'))||target.split('/').some(x=>x.startsWith('.'))){res.writeHead(404);return res.end('Not found');}const p=path.resolve(root,'.'+target);if(!p.startsWith(root+path.sep)||!fs.statSync(p).isFile()){res.writeHead(404);return res.end('Not found');}const mime={'.js':'text/javascript','.css':'text/css','.html':'text/html','.json':'application/json','.svg':'image/svg+xml','.png':'image/png'}[path.extname(p)]||'application/octet-stream';res.setHeader('Content-Type',mime+'; charset=utf-8');res.setHeader('Cache-Control','no-store');fs.createReadStream(p).pipe(res);}catch{res.writeHead(404);res.end('Not found');}}).listen(port,'127.0.0.1',()=>console.log(`YuanKit: http://127.0.0.1:${port} (build after source edits)`));
