/** Only public web links. Never turn model-provided data/javascript URLs into links. */
export function safeWebUrl(value) {
 if (typeof value !== 'string' || !/^https?:\/\//i.test(value.trim())) return null;
 try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url.href : null; } catch { return null; }
}
export function safeText(value) { return typeof value === 'string' ? value : value == null ? '' : String(value); }
export function formatBytes(n) { return n >= 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n >= 1024 ? (n / 1024).toFixed(1) + ' KB' : n + ' B'; }
export function validateFiles(files, {accept = '', maxSize = 10485760, maxFiles = 5, existing = []} = {}) {
 const accepted = [], rejected = [], rules = accept.split(',').map(x => x.trim().toLowerCase()).filter(Boolean);
 for (const file of files) {
  let reason = '';
  if (existing.length + accepted.length >= maxFiles) reason = `最多 ${maxFiles} 个文件`;
  else if (file.size > maxSize) reason = '文件超出大小限制';
  else if (rules.length && !rules.some(rule => rule.startsWith('.') ? file.name.toLowerCase().endsWith(rule) : rule.endsWith('/*') ? file.type.toLowerCase().startsWith(rule.slice(0,-1)) : file.type.toLowerCase() === rule)) reason = '不支持的文件类型';
  else if ([...existing,...accepted].some(x => x.name === file.name && x.size === file.size && x.lastModified === file.lastModified)) reason = '重复文件';
  if (reason) rejected.push({file, reason}); else accepted.push(file);
 }
 return {accepted,rejected};
}
export function safeFilename(value, extension = '.txt') {
 const name = String(value || 'artifact').replace(/[<>:"/\\|?*\x00-\x1f]/g,'_').replace(/^\.+/,'').slice(0,80);
 return (name || 'artifact') + extension;
}
