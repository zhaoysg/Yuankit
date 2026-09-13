/** Explicit opt-in publishing helper. No credentials are read or stored by this script.
 * Requires an already authenticated official GitHub CLI. Defaults to PRIVATE.
 * Refuses existing local origin, wrong logged-in account, dirty tracked files,
 * and an existing remote repository; never force-pushes or replaces a repository.
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = 'zhaoysg/yuankit';
function run(command, args, capture = false) {
  const result = spawnSync(command, args, { cwd: root, encoding: 'utf8', stdio: capture ? ['ignore', 'pipe', 'pipe'] : 'inherit', shell: false });
  if (result.error || result.status !== 0) throw new Error(result.error?.message || `${command} ${args.join(' ')} failed: ${result.stderr || result.status}`);
  return (result.stdout || '').trim();
}
try {
  if (!process.argv.includes('--execute')) {
    console.log(`Dry run only. Target: ${target}; visibility: PRIVATE.\nRun node scripts/publish-github.mjs --execute to create and push a NEW repository.\nNo GitHub repository has been created by this preview.`);
    process.exit(0);
  }
  run('gh', ['--version'], true);
  const account = run('gh', ['api', 'user', '--jq', '.login'], true);
  if (account !== 'zhaoysg') throw new Error(`Authenticated account is ${account}; expected zhaoysg. No repository was changed.`);
  if (fs.existsSync(path.join(root, '.git'))) {
    const origin = spawnSync('git', ['remote', 'get-url', 'origin'], { cwd: root, encoding: 'utf8' });
    if (origin.status === 0) throw new Error('An origin already exists; refuse to overwrite it. Review the existing remote manually.');
    if (run('git', ['status', '--porcelain', '--untracked-files=no'], true)) throw new Error('Tracked files have uncommitted changes. Review and commit them first.');
  } else {
    run('git', ['init', '-b', 'main']);
  }
  // User identity must already be configured. Never invent a GitHub author identity.
  run('git', ['var', 'GIT_AUTHOR_IDENT'], true);
  run(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'check']);
  const reportPath = path.join(root, 'reports/browser-results.json');
  if (!fs.existsSync(reportPath) || JSON.parse(fs.readFileSync(reportPath, 'utf8')).failed !== 0) throw new Error('Run python tests/browser/run.py and resolve all failures first.');
  console.log('Review .gitignore and new files before executing this upload script.');
  run('git', ['add', '.']);
  const hasChanges = spawnSync('git', ['diff', '--cached', '--quiet'], { cwd: root });
  if (hasChanges.status === 1) run('git', ['commit', '-m', 'feat: initialize YuanKit Vue design-system library']);
  run('gh', ['repo', 'create', target, '--private', '--description', 'Owned Vue component, token, specification and pattern library', '--source', '.', '--remote', 'origin', '--push']);
  console.log('Verified repository created and local main pushed:', run('gh', ['repo', 'view', target, '--json', 'url', '--jq', '.url'], true));
} catch (error) { console.error(error.message); process.exitCode = 1; }
