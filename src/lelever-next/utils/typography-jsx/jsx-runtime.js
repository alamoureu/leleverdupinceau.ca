import { Fragment, jsx as jsxOrig, jsxs as jsxsOrig } from 'react/jsx-runtime';
import { fixTypographyProps } from '../preventOrphanedPunctuation';

export function jsx(type, props, key) {
  return jsxOrig(type, fixTypographyProps(props), key);
}

export function jsxs(type, props, key) {
  return jsxsOrig(type, fixTypographyProps(props), key);
}

export { Fragment };
