/**
 * Normalizes image src for Chakra/HTML img.
 * Next.js static imports return { src, width, height }; we need the string.
 * Data files sometimes use { src: importObject }; importObject has .src.
 * External URLs are already strings.
 */
export function toImageSrc(val) {
  if (val == null) return '';
  if (typeof val === 'string') return val;
  const s = val?.src ?? val?.default?.src ?? '';
  return typeof s === 'string' ? s : toImageSrc(s);
}
