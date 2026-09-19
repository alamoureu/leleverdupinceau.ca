/**
 * @deprecated Utiliser scripts/all-public-routes.mjs
 * Conservé pour compatibilité : réexporte la classification unique.
 */
export {
  classifyPublicRoutes,
  redirectHtml,
} from './all-public-routes.mjs';

import { classifyPublicRoutes } from './all-public-routes.mjs';

export function getLegacyRedirectMap() {
  return classifyPublicRoutes().redirects;
}
