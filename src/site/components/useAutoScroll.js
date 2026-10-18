import { useEffect } from 'react';

/**
 * Continuous auto-scroll (horizontal or vertical).
 * When reaching the end, jumps back to the start.
 * Never requires the item list to be rendered twice (that caused visible doublons).
 * Pauses on hover/focus/touch/wheel and when off-screen.
 * Resumes after the gesture settles (debounced), unless still hovered/focused.
 * Respects reduced motion.
 *
 * Geometry (scrollWidth/clientWidth) is measured only on resize / content size
 * changes - never inside the rAF loop - to avoid forced reflows.
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
    let inView = false;
    let maxScroll = 0;
    let pos = isVertical ? el.scrollTop : el.scrollLeft;

    const isPaused = () => hoverPaused || focusPaused || interactionPaused;

    const measure = () => {
      maxScroll = isVertical
        ? el.scrollHeight - el.clientHeight
        : el.scrollWidth - el.clientWidth;
      if (isPaused()) {
        pos = isVertical ? el.scrollTop : el.scrollLeft;
      } else if (maxScroll > 4 && pos > maxScroll) {
        pos = 0;
      }
    };

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

    const syncPosFromDom = () => {
      pos = isVertical ? el.scrollTop : el.scrollLeft;
    };

    const stopLoop = () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const step = () => {
      rafId = 0;
      if (!inView) return;
      if (!isPaused() && maxScroll > 4) {
        pos += speed;
        if (pos >= maxScroll - 1) pos = 0;
        if (isVertical) el.scrollTop = pos;
        else el.scrollLeft = pos;
      }
      rafId = window.requestAnimationFrame(step);
    };

    const startLoop = () => {
      if (!rafId) rafId = window.requestAnimationFrame(step);
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

    const onScroll = () => {
      if (isPaused()) syncPosFromDom();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) startLoop();
        else stopLoop();
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    const ro =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            measure();
          })
        : null;
    ro?.observe(el);
    if (el.firstElementChild) ro?.observe(el.firstElementChild);

    el.addEventListener('pointerenter', onPointerEnter);
    el.addEventListener('pointerleave', onPointerLeave);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: true });
    el.addEventListener('focusin', onFocusIn);
    el.addEventListener('focusout', onFocusOut);
    el.addEventListener('scroll', onScroll, { passive: true });

    measure();

    return () => {
      stopLoop();
      clearResume();
      io.disconnect();
      ro?.disconnect();
      el.removeEventListener('pointerenter', onPointerEnter);
      el.removeEventListener('pointerleave', onPointerLeave);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('focusin', onFocusIn);
      el.removeEventListener('focusout', onFocusOut);
      el.removeEventListener('scroll', onScroll);
    };
  }, [scrollerRef, speed, enabled, resumeDelay, axis]);
}
