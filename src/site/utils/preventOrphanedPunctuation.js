/**
 * Keep punctuation from wrapping alone at the start of a line by turning the
 * space before it into a non-breaking space.
 *
 * Targets: ? ! : ; and separator hyphens (`word - word`).
 * Skips CSS `!important`. Idempotent when the space is already \u00A0 / \u202F.
 */
export function preventOrphanedPunctuation(text) {
  if (typeof text !== 'string' || text.length < 2) return text;
  return text
    .replace(/\s+([?!:;])(?!important)/g, '\u00A0$1')
    .replace(/(\S)[\u0020\u00A0\u202F]+-[\u0020\u00A0\u202F]+/g, '$1\u00A0- ');
}

/** Recursively apply preventOrphanedPunctuation to all strings in plain data. */
export function deepPreventOrphanedPunctuation(value) {
  if (typeof value === 'string') return preventOrphanedPunctuation(value);
  if (Array.isArray(value)) return value.map(deepPreventOrphanedPunctuation);
  if (value && typeof value === 'object') {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = deepPreventOrphanedPunctuation(child);
    }
    return out;
  }
  return value;
}

/** Props that are URLs, ids, or non-copy - leave untouched in JSX runtimes. */
export const TYPOGRAPHY_SKIP_PROP_KEYS = new Set([
  'href',
  'to',
  'src',
  'srcSet',
  'poster',
  'action',
  'formAction',
  'cite',
  'data',
  'id',
  'key',
  'className',
  'style',
  'type',
  'name',
  'rel',
  'target',
  'method',
  'htmlFor',
  'role',
  'as',
  'd',
  'viewBox',
  'xmlns',
  'fill',
  'stroke',
  'strokeWidth',
  'clipPath',
  'filter',
  'mask',
  'hrefLang',
  'itemType',
  'itemProp',
  'property',
  'httpEquiv',
  'charset',
  'sizes',
  'media',
  'integrity',
  'crossOrigin',
  'referrerPolicy',
]);

function fixValue(value) {
  if (typeof value === 'string') return preventOrphanedPunctuation(value);
  if (Array.isArray(value)) return value.map(fixValue);
  return value;
}

/** Rewrite string copy in JSX props (used by typography JSX runtimes). */
export function fixTypographyProps(props) {
  if (props == null) return props;
  let changed = false;
  const next = {};
  for (const key of Object.keys(props)) {
    const value = props[key];
    if (key === 'dangerouslySetInnerHTML' && value && typeof value.__html === 'string') {
      const html = preventOrphanedPunctuation(value.__html);
      if (html !== value.__html) {
        next[key] = { ...value, __html: html };
        changed = true;
      } else {
        next[key] = value;
      }
      continue;
    }
    if (
      TYPOGRAPHY_SKIP_PROP_KEYS.has(key) ||
      (typeof value !== 'string' && !Array.isArray(value))
    ) {
      next[key] = value;
      continue;
    }
    if (typeof value === 'string') {
      const fixed = preventOrphanedPunctuation(value);
      next[key] = fixed;
      if (fixed !== value) changed = true;
    } else if (key === 'children') {
      const fixed = fixValue(value);
      next[key] = fixed;
      if (fixed !== value) changed = true;
    } else {
      next[key] = value;
    }
  }
  return changed ? next : props;
}
