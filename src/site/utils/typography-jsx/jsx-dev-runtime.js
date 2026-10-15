import { Fragment, jsxDEV as jsxDEVOrig } from 'react/jsx-dev-runtime';
import { fixTypographyProps } from '../preventOrphanedPunctuation';

export function jsxDEV(type, props, key, isStaticChildren, source, self) {
  return jsxDEVOrig(
    type,
    fixTypographyProps(props),
    key,
    isStaticChildren,
    source,
    self,
  );
}

export { Fragment };
