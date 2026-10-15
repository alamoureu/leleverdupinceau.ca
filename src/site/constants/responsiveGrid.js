/**
 * Shared responsive grid helpers: last-row centering + hover-shadow room.
 */

/** Padding so card hover lift/shadow is not clipped by parents. */
export const GRID_HOVER_PAD = { pt: 2, pb: 4 };

/** Center stacked cards on mobile at the same width as home services. */
export const MOBILE_CENTERED_CARD_SX = {
  '@media screen and (max-width: 47.99em)': {
    '& > *': {
      width: '88%',
      maxWidth: '340px',
      justifySelf: 'center',
    },
  },
};

/**
 * Center a single leftover card in a 2-column row (sm through pre-lg).
 * Use when the grid is 2 columns between 30em and 62em.
 */
export const CENTER_LAST_ODD_MD_SX = {
  '@media screen and (min-width: 30em) and (max-width: 61.99em)': {
    '& > *:last-child:nth-of-type(odd)': {
      gridColumn: '1 / -1',
      width: '100%',
      maxWidth: 'calc(50% - 0.625rem)',
      mx: 'auto',
    },
  },
};

/**
 * Desktop 3+2 layout: 6 tracks, each card spans 2, last two centered.
 * Pair with gridTemplateColumns: repeat(6, minmax(0, 1fr)) at lg.
 */
export const DESKTOP_THREE_PLUS_TWO_SX = {
  '@media screen and (min-width: 62em)': {
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
    '& > *': { gridColumn: 'span 2' },
    '& > *:nth-of-type(4)': { gridColumn: '2 / span 2' },
    '& > *:nth-of-type(5)': { gridColumn: '4 / span 2' },
  },
};

/**
 * Pick column counts that avoid a single orphan when possible.
 * Prefer 2 on tablet; on desktop use 3 for 5 or 6 items (3+2 / 3+3), else up to 4.
 */
export function columnsForCount(count, {
  base = 1,
  sm,
  md = 2,
  lg,
} = {}) {
  const desktop = lg ?? (count === 5 || count === 6 ? 3 : Math.min(4, count));
  return {
    base,
    ...(sm != null ? { sm } : {}),
    md,
    lg: desktop,
  };
}
