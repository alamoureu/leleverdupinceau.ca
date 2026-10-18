import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import useAutoScroll from './useAutoScroll';

/**
 * Short edge masks so cards AND their box-shadows dissolve together.
 * Keep just long enough to hide the overflow hard-cut; short = rougher feel.
 */
const DEFAULT_FADE_SIZE = { base: '12px', md: '16px', lg: '18px' };

function resolveFadeSize(fadeSize) {
  if (typeof fadeSize === 'string') return fadeSize;
  if (typeof window === 'undefined' || !fadeSize || typeof fadeSize !== 'object') {
    return '16px';
  }
  const w = window.innerWidth;
  if (w >= 62 * 16 && fadeSize.lg) return fadeSize.lg; // lg ~62em
  if (w >= 48 * 16 && fadeSize.md) return fadeSize.md; // md ~48em
  return fadeSize.base || fadeSize.md || '16px';
}

function buildEdgeMask(isVertical, showStart, showEnd, size) {
  if (!showStart && !showEnd) return 'none';
  const direction = isVertical ? 'to bottom' : 'to right';
  const start = showStart ? `transparent 0%, black ${size}` : 'black 0%';
  const end = showEnd
    ? `black calc(100% - ${size}), transparent 100%`
    : 'black 100%';
  return `linear-gradient(${direction}, ${start}, ${end})`;
}

/**
 * Reusable scrollable list with soft edge fades and optional auto-scroll.
 * Works for horizontal or vertical lists.
 *
 * Edge fades only appear when content is clipped under that edge, so on
 * mobile the first card stays crisp until it actually scrolls under the fade.
 *
 * Auto-scroll restarts at the start when it reaches the end. Never render the
 * item list twice for looping - that shows every card as a visible doublon.
 *
 * @example
 * <FadedScroller axis="horizontal" autoScroll speed={0.35} fadeFrom="white">
 *   <Flex>{items}</Flex>
 * </FadedScroller>
 */
export default function FadedScroller({
  children,
  axis = 'horizontal',
  autoScroll = false,
  speed = 0.45,
  resumeDelay = 1400,
  fadeSize = DEFAULT_FADE_SIZE,
  // Kept for call-site compat; masks use alpha, not a surface color.
  fadeFrom = 'white',
  // Discarded: restart-only scroll; must not reach the DOM via ...wrapperProps.
  loopMode,
  hideScrollbar = true,
  scrollerProps,
  ...wrapperProps
}) {
  void fadeFrom;
  void loopMode;

  const scrollerRef = useRef(null);
  const isVertical = axis === 'vertical';
  const { sx: scrollerSx, ...restScrollerProps } = scrollerProps || {};
  const [showStartFade, setShowStartFade] = useState(false);
  const [showEndFade, setShowEndFade] = useState(true);
  const [fadePx, setFadePx] = useState(() => resolveFadeSize(fadeSize));

  useAutoScroll(scrollerRef, {
    enabled: autoScroll,
    speed,
    resumeDelay,
    axis,
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;

    // Cache max scroll extent; remeasure only on resize/content size change.
    // Reading scrollWidth/clientWidth on every scroll (auto-scroll fires often)
    // forces layout after mask style updates.
    let maxScroll = 0;

    const measureMax = () => {
      maxScroll = isVertical
        ? el.scrollHeight - el.clientHeight
        : el.scrollWidth - el.clientWidth;
    };

    const updateFades = () => {
      const threshold = 2;
      const scrollPos = isVertical ? el.scrollTop : el.scrollLeft;
      const nextStart = scrollPos > threshold;
      const nextEnd = maxScroll > threshold && scrollPos < maxScroll - threshold;
      setShowStartFade((prev) => (prev === nextStart ? prev : nextStart));
      setShowEndFade((prev) => (prev === nextEnd ? prev : nextEnd));
    };

    const updateFadeSize = () => {
      const next = resolveFadeSize(fadeSize);
      setFadePx((prev) => (prev === next ? prev : next));
    };

    const onResize = () => {
      measureMax();
      updateFades();
      updateFadeSize();
    };

    measureMax();
    updateFades();
    updateFadeSize();
    el.addEventListener('scroll', updateFades, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(onResize)
      : null;
    ro?.observe(el);
    if (el.firstElementChild) ro?.observe(el.firstElementChild);
    window.addEventListener('resize', onResize);

    return () => {
      el.removeEventListener('scroll', updateFades);
      ro?.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [isVertical, children, fadeSize]);

  const scrollbarSx = hideScrollbar
    ? {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }
    : undefined;

  const maskImage = buildEdgeMask(isVertical, showStartFade, showEndFade, fadePx);

  // Room for card hover lift + box-shadow inside the overflow clip.
  const defaultHoverPad = isVertical
    ? undefined
    : { pt: 4, pb: 10, px: 7 };

  return (
    <Box position="relative" minW={0} {...wrapperProps}>
      <Box
        ref={scrollerRef}
        w="100%"
        h={isVertical ? '100%' : undefined}
        overflowX={isVertical ? 'hidden' : 'auto'}
        overflowY={isVertical ? 'auto' : 'hidden'}
        {...defaultHoverPad}
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
        sx={{
          scrollBehavior: 'auto',
          ...scrollbarSx,
          ...scrollerSx,
        }}
        {...restScrollerProps}
      >
        {children}
      </Box>
    </Box>
  );
}
