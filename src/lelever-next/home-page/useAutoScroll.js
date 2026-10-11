import { useEffect } from 'react';

/**
 * Continuous horizontal auto-scroll with seamless loop.
 * Content should be rendered twice; loop resets at scrollWidth / 2.
 * Pauses on hover/touch/manual scroll and when off-screen. Respects reduced motion.
 */
export default function useAutoScroll(
  scrollerRef,
  { speed = 0.45, enabled = true, resumeDelay = 1400 } = {},
) {
  useEffect(() => {
    if (!enabled) return undefined;
    const el = scrollerRef.current;
    if (!el) return undefined;
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return undefined;
    }

    let rafId = 0;
    let resumeTimer = 0;
    let userPaused = false;
    const rect = el.getBoundingClientRect();
    let inView =
      rect.bottom > 0 && rect.top < (window.innerHeight || 0);

    const clearResume = () => {
      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
        resumeTimer = 0;
      }
    };

    const pause = () => {
      userPaused = true;
      clearResume();
    };

    const scheduleResume = () => {
      clearResume();
      resumeTimer = window.setTimeout(() => {
        userPaused = false;
        resumeTimer = 0;
      }, resumeDelay);
    };

    const step = () => {
      if (inView && !userPaused && el.scrollWidth > el.clientWidth + 4) {
        el.scrollLeft += speed;
        const loopAt = el.scrollWidth / 2;
        if (loopAt > 0 && el.scrollLeft >= loopAt) {
          el.scrollLeft -= loopAt;
        }
      }
      rafId = window.requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', scheduleResume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', scheduleResume, { passive: true });
    el.addEventListener('wheel', pause, { passive: true });
    el.addEventListener('focusin', pause);
    el.addEventListener('focusout', scheduleResume);

    rafId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(rafId);
      clearResume();
      io.disconnect();
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', scheduleResume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', scheduleResume);
      el.removeEventListener('wheel', pause);
      el.removeEventListener('focusin', pause);
      el.removeEventListener('focusout', scheduleResume);
    };
  }, [scrollerRef, speed, enabled, resumeDelay]);
}
