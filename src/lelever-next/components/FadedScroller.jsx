import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import useAutoScroll from './useAutoScroll';

/**
 * Soft edge fades: opaque at the outer edge (hides the clip cut), then a short
 * gentle dissolve so cards stay readable. Keep desktop short / not intense.
 */
const DEFAULT_FADE_SIZE = { base: '24px', md: '40px', lg: '48px' };

/**
 * Reusable scrollable list with soft edge fades and optional auto-scroll.
 * Works for horizontal or vertical lists.
 *
 * Edge fades only appear when content is clipped under that edge, so on
 * mobile the first card stays crisp until it actually scrolls under the fade.
 *
 * For seamless looping with autoScroll, render the item list twice;
 * the loop resets at half the scroll size.
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
  fadeFrom = 'white',
  hideScrollbar = true,
  scrollerProps,
  ...wrapperProps
}) {
  const scrollerRef = useRef(null);
  const isVertical = axis === 'vertical';
  const { sx: scrollerSx, ...restScrollerProps } = scrollerProps || {};
  const [showStartFade, setShowStartFade] = useState(false);
  const [showEndFade, setShowEndFade] = useState(true);

  useAutoScroll(scrollerRef, {
    enabled: autoScroll,
    speed,
    resumeDelay,
    axis,
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return undefined;

    const updateFades = () => {
      const threshold = 2;
      if (isVertical) {
        const max = el.scrollHeight - el.clientHeight;
        setShowStartFade(el.scrollTop > threshold);
        setShowEndFade(max > threshold && el.scrollTop < max - threshold);
      } else {
        const max = el.scrollWidth - el.clientWidth;
        setShowStartFade(el.scrollLeft > threshold);
        setShowEndFade(max > threshold && el.scrollLeft < max - threshold);
      }
    };

    updateFades();
    el.addEventListener('scroll', updateFades, { passive: true });
    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateFades)
      : null;
    ro?.observe(el);
    window.addEventListener('resize', updateFades);

    return () => {
      el.removeEventListener('scroll', updateFades);
      ro?.disconnect();
      window.removeEventListener('resize', updateFades);
    };
  }, [isVertical, children]);

  const scrollbarSx = hideScrollbar
    ? {
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }
    : undefined;

  // Ignore transparent: edge fades need a real surface color to hide the cut.
  const fadeColor = !fadeFrom || fadeFrom === 'transparent' ? 'white' : fadeFrom;

  // Opaque at the clip edge, then a short soft falloff (not a heavy veil).
  const startGradient = isVertical
    ? `linear-gradient(to bottom, ${fadeColor} 0%, ${fadeColor} 40%, transparent 100%)`
    : `linear-gradient(to right, ${fadeColor} 0%, ${fadeColor} 40%, transparent 100%)`;
  const endGradient = isVertical
    ? `linear-gradient(to top, ${fadeColor} 0%, ${fadeColor} 40%, transparent 100%)`
    : `linear-gradient(to left, ${fadeColor} 0%, ${fadeColor} 40%, transparent 100%)`;

  const startFade = isVertical
    ? { top: 0, left: 0, right: 0, h: fadeSize, backgroundImage: startGradient }
    : { top: 0, bottom: 0, left: 0, w: fadeSize, backgroundImage: startGradient };

  const endFade = isVertical
    ? { bottom: 0, left: 0, right: 0, h: fadeSize, backgroundImage: endGradient }
    : { top: 0, bottom: 0, right: 0, w: fadeSize, backgroundImage: endGradient };

  const defaultHoverPad = isVertical
    ? undefined
    : { pt: 3, pb: 6, px: { base: 1, md: 2 } };

  return (
    <Box position="relative" minW={0} {...wrapperProps}>
      <Box
        ref={scrollerRef}
        w="100%"
        h={isVertical ? '100%' : undefined}
        overflowX={isVertical ? 'hidden' : 'auto'}
        overflowY={isVertical ? 'auto' : 'hidden'}
        {...defaultHoverPad}
        sx={{
          scrollBehavior: 'auto',
          ...scrollbarSx,
          ...scrollerSx,
        }}
        {...restScrollerProps}
      >
        {children}
      </Box>
      <Box
        aria-hidden
        pointerEvents="none"
        position="absolute"
        zIndex={2}
        opacity={showStartFade ? 1 : 0}
        transition="opacity 0.3s ease"
        {...startFade}
      />
      <Box
        aria-hidden
        pointerEvents="none"
        position="absolute"
        zIndex={2}
        opacity={showEndFade ? 1 : 0}
        transition="opacity 0.3s ease"
        {...endFade}
      />
    </Box>
  );
}
