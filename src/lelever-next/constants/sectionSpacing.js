/**
 * Rythme vertical partagé entre sections de contenu.
 * Hero + TrustBanner gardent leur chevauchement ; ces tokens s'appliquent aux blocs suivants.
 */

/** Accueil, pages ville / CitySectorPage, composants home partagés. */
export const SECTION_PY = { base: 12, md: 16, lg: 20 };

/** Pages service, sous-service et quartier (blocs plus aérés). */
export const PAGE_SECTION_PY = { base: 16, md: 20, lg: 24 };

/**
 * Largeur max des blocs titre de section (desktop assez large pour rester sur une ligne
 * quand le texte n'est pas trop long).
 */
export const SECTION_TITLE_MAX_W = { base: '100%', md: '960px', lg: '1100px' };
