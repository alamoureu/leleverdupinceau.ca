/** Shared blue-bar sizes so closed nav and open drawer match on every breakpoint. */
export const NAV_BAR_PY = { base: 2.5, sm: 3, md: 3, lg: 4 };
export const NAV_LOGO_H = { base: '52px', sm: '56px', md: '64px', lg: '68px' };
export const NAV_LOGO_W = { base: '84px', sm: '90px', md: '103px', lg: '110px' };
/** logo + vertical padding - apply as `h` on both bars */
export const NAV_BAR_H = { base: '72px', sm: '80px', md: '88px', lg: '100px' };

/** Black top strip (social / phone) above the blue bar */
export const TOP_BAR_H = { base: '34px', sm: '34px', md: '26px', lg: '26px' };

/** Fixed header total = top bar + blue bar - use as main `pt` so content sits flush */
export const HEADER_OFFSET = {
  base: '106px',
  sm: '114px',
  md: '114px',
  lg: '126px',
};
