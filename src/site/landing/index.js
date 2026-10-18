/**
 * Landing page module: constants and data builders.
 * Use with useTranslation() for i18n data.
 */

export {
  CANONICAL_BASE,
  LANDING_BETONEL_BAND_PY,
  LANDING_HERO_MOBILE_PT_COMPENSATION,
  LANDING_MAIN_CONTENT_PT,
  LANDING_META,
  LANDING_META_STLP,
  LANDING_SECTION_PY,
  LANDING_SECTION_PY_HALF,
  LANDING_WHYUS_SECTION_PT,
} from './constants';
export { buildLandingFaqs } from './landingFaqs';
export { buildLandingFaqsStlp } from './landingFaqsStlp';
export { buildStlpBreadcrumbSchema } from './stlpCluster';
export {
  STLP_CONTROL_IMAGES,
  STLP_CONTROL_IMAGE_POSITIONS,
  STLP_HERO,
  STLP_LOGO,
  STLP_METHOD_IMAGES,
} from './stlpAssets';
export {
  ADS_LANDING_PATHS,
  LANDING_LOCALE_PAIRS,
  STLP_LANDING_PATHS,
  isAdsLandingPath,
  isLocaleLandingPath,
  isStlpLandingPath,
} from './paths';
