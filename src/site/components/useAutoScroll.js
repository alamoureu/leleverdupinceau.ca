import { useEffect } from 'react';

/**
 * Continuous auto-scroll (horizontal or vertical).
 * When reaching the end, jumps back to the start.
 * Never requires the item list to be rendered twice (that caused visible doublons).
 * Pauses on hover/focus/touch/wheel and when off-screen.
 * Resumes after the gesture settles (debounced), unless still hovered/focused.
 * Respects reduced motion.
 */
export default function useAutoScroll(
  scrollerRef,
  {
    speed = 0.45,
    enabled = true,
    resumeDelay = 1400,
    axis = 'horizontal',
  } = {},
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

    const isVertical = axis === 'vertical';
    let rafId = 0;
    let resumeTimer = 0;
    let hoverPaused = false;
    let focusPaused = false;
    let interactionPaused = false;
    const rect = el.getBoundingClientRect();
    let inView =
      rect.bottom > 0 && rect.top < (window.innerHeight || 0);

    const isPaused = () => hoverPaused || focusPaused || interactionPaused;

    const clearResume = () => {
      if (resumeTimer) {
        window.clearTimeout(resumeTimer);
        resumeTimer = 0;
      }
    };

    const scheduleResume = () => {
      clearResume();
      if (hoverPaused || focusPaused) return;
      resumeTimer = window.setTimeout(() => {
        interactionPaused = false;
        resumeTimer = 0;
      }, resumeDelay);
    };

    const pauseInteraction = () => {
      interactionPaused = true;
      scheduleResume();
    };

    const wrapLoop = () => {
      if (isVertical) {
        const max = el.scrollHeight - el.clientHeight;
        if (max > 4 && el.scrollTop >= max - 1) {
          el.scrollTop = 0;
        }
      } else {
        const max = el.scrollWidth - el.clientWidth;
        if (max > 4 && el.scrollLeft >= max - 1) {
          el.scrollLeft = 0;
        }
      }
    };

    const step = () => {
      if (inView && !isPaused()) {
        if (isVertical) {
          if (el.scrollHeight > el.clientHeight + 4) {
            el.scrollTop += speed;
            wrapLoop();
          }
        } else if (el.scrollWidth > el.clientWidth + 4) {
          el.scrollLeft += speed;
          wrapLoop();
        }
      }
      rafId = window.requestAnimationFrame(step);
    };

    const onPointerEnter = () => {
      hoverPaused = true;
      clearResume();
    };

    const onPointerLeave = () => {
      hoverPaused = false;
      interactionPaused = true;
      scheduleResume();
    };

    const onFocusIn = () => {
      focusPaused = true;
      clearResume();
    };

    const onFocusOut = () => {
      focusPaused = false;
      interactionPaused = true;
      scheduleResume();
    };

    const onTouchStart = () => {
      interactionPaused = true;
      clearResume();
    };

    const onTouchEnd = () => {
      scheduleResume();
    };

    const onWheel = () => {
      pauseInteraction();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    el.addEventListener('pointerenter', onPointerEnter);
    el.addEventListener('pointerleave', onPointerLeave);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('focusin', onFocusIn);
    el.addEventListener('focusout', onFocusOut);

    rafId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(rafId);
      clearResume();
      io.disconnect();
      el.removeEventListener('pointerenter', onPointerEnter);
      el.removeEventListener('pointerleave', onPointerLeave);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('focusin', onFocusIn);
      el.removeEventListener('focusout', onFocusOut);
    };
  }, [scrollerRef, speed, enabled, resumeDelay, axis]);
}
