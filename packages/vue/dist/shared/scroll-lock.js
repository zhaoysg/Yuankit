// Shared by all dialog instances; release is idempotent and supports nesting.
let locks = 0;
let previous = '';
export function acquireScrollLock() {
  if (typeof document === 'undefined') return () => {};
  if (locks === 0) { previous = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
  locks++;
  let released = false;
  return () => {
    if (released) return;
    released = true;
    locks = Math.max(0, locks - 1);
    if (locks === 0 && document.body.style.overflow === 'hidden') document.body.style.overflow = previous;
  };
}
