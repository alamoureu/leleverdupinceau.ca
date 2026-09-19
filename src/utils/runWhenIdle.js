/**
 * Run a callback after the browser is idle, or on first user interaction,
 * whichever comes first. Keeps third-party / heavy JS off the critical path.
 */
export function runWhenIdle(fn, { timeout = 4000 } = {}) {
  if (typeof window === 'undefined') return () => {};

  let done = false;
  let idleId;
  let timerId;

  const events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];

  const cleanup = () => {
    events.forEach((e) => window.removeEventListener(e, onInteract));
    if (idleId != null && typeof cancelIdleCallback === 'function') {
      cancelIdleCallback(idleId);
    }
    if (timerId != null) clearTimeout(timerId);
  };

  const run = () => {
    if (done) return;
    done = true;
    cleanup();
    fn();
  };

  const onInteract = () => run();

  events.forEach((e) =>
    window.addEventListener(e, onInteract, { once: true, passive: true }),
  );

  if (typeof requestIdleCallback === 'function') {
    idleId = requestIdleCallback(run, { timeout });
  } else {
    timerId = setTimeout(run, timeout);
  }

  return cleanup;
}
