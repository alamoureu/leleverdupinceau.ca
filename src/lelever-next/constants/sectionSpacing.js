/**
 * Rythme vertical partagé entre sections de contenu.
 *
 * TrustBanner (chevauchement) :
 * - section au-dessus : pb={TRUST_BANNER_ABOVE_PB} (HeroSection par défaut)
 * - section en dessous : pt={TRUST_BANNER_BELOW_PT}
 * - titre → contenu : spacing={TRUST_BANNER_AIR_SPACE}
 * Une seule valeur d'air visible (TRUST_BANNER_AIR) pour les trois gaps.
 */

/** Air visible (CSS) autour de la carte TrustBanner. Chakra 8 / 10. */
export const TRUST_BANNER_AIR = { base: '2rem', md: '2.5rem' };
export const TRUST_BANNER_AIR_SPACE = { base: 8, md: 10 };

/** Accueil, pages ville / CitySectorPage, composants home partagés. */
export const SECTION_PY = { base: 12, md: 16, lg: 20 };

/** Pages service, sous-service et quartier (blocs plus aérés). */
export const PAGE_SECTION_PY = { base: 16, md: 20, lg: 24 };

/**
 * Hero photo partagé (HeroSection + landings internes).
 * md+ : remplit le viewport sous la nav fixe (~7rem) pour que la TrustBanner
 * reste aérée sous le CTA - surtout iPad landscape où un floor px seul est trop bas.
 */
export const PAGE_HERO_MIN_H = {
  base: 'max(360px, 50dvh)',
  sm: 'max(380px, 48dvh)',
  md: 'max(560px, calc(100dvh - 11rem))',
  lg: 'max(600px, calc(100dvh - 11rem))',
  xl: 'max(680px, calc(100dvh - 10.5rem))',
  '2xl': 'max(740px, calc(100dvh - 10.5rem))',
};

/** Padding-top du contenu dans le hero photo (sous le header / badge avis). */
export const PAGE_HERO_CONTENT_PT = {
  base: '36px',
  sm: '40px',
  md: '100px',
  lg: '100px',
  xl: '120px',
};

/** Espacement vertical entre titre / sous-titre / CTA dans le hero photo. */
export const PAGE_HERO_STACK_SPACING = { base: 3, sm: 4, md: 6, lg: 7 };

/** Espacement entre sous-titre et description du hero (les 2 lignes sous le H1). */
export const PAGE_HERO_TITLES_SPACING = { base: 2, md: 3 };

/**
 * Largeur max des blocs titre de section (desktop assez large pour rester sur une ligne
 * quand le texte n'est pas trop long).
 */
export const SECTION_TITLE_MAX_W = { base: '100%', md: '960px', lg: '1100px' };
