import React, { Fragment, useContext, useMemo, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { useTranslation } from '../lelever-next/i18n';
import {
  CANONICAL_BASE,
  LANDING_META_STLP,
  LANDING_SECTION_PY,
  STLP_BEFORE_AFTER_DESCRIPTIONS,
  STLP_BEFORE_AFTER_PAIRS,
  STLP_CONTROL_IMAGES,
  STLP_CONTROL_IMAGE_POSITIONS,
  STLP_HERO,
  STLP_LANDING_PATHS,
  STLP_METHOD_IMAGES,
  buildLandingFaqsStlp,
  buildStlpBreadcrumbSchema,
} from '../lelever-next/landing';
import {
  LANDING_ADS_CLARITY_PROJECT_ID,
  trackPageView,
} from '../config/analytics';
import LandingClarity from '../lelever-next/analytics/LandingClarity';
import PromoBanner, { PROMO_BANNER_HEIGHT } from '../lelever-next/home-page/PromoBanner';

import LandingHeroSection from '../lelever-next/home-page/LandingHeroSection';
import TrustBanner from '../lelever-next/home-page/TrustBanner';
import ControlSection from '../lelever-next/home-page/ControlSection';
import LandingServicesSection from '../lelever-next/home-page/LandingServicesSection';
import BeforeAfterCarouselSection from '../lelever-next/home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../lelever-next/home-page/ContactFormSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import FAQSection from '../lelever-next/home-page/FAQSection';
import FinalCTASection from '../lelever-next/home-page/FinalCTASection';
import SubmissionModal from '../components/SubmissionModal';

const LANDING_FORM_FIELDS = {
  name: true,
  phone: true,
  email: true,
  address: false,
  paintingType: false,
  projectDetails: 'optional',
};

const HERO_CONTENT_PT = {
  base: `calc(5.5rem + ${PROMO_BANNER_HEIGHT.base})`,
  sm: `calc(5.75rem + ${PROMO_BANNER_HEIGHT.sm})`,
  md: `calc(7rem + ${PROMO_BANNER_HEIGHT.md})`,
  lg: `calc(7.5rem + ${PROMO_BANNER_HEIGHT.lg})`,
  xl: `calc(8rem + ${PROMO_BANNER_HEIGHT.xl})`,
  '2xl': `calc(8.25rem + ${PROMO_BANNER_HEIGHT['2xl']})`,
};

function buildStlpBeforeAfterImages(isFr) {
  const descriptions =
    STLP_BEFORE_AFTER_DESCRIPTIONS[isFr ? 'fr' : 'en'] ??
    STLP_BEFORE_AFTER_DESCRIPTIONS.fr;

  return STLP_BEFORE_AFTER_PAIRS.map(([before, after], index) => ({
    before,
    after,
    description: descriptions[index] ?? '',
  }));
}

function LandingPageStlp({ lang: langProp, indexable = false }) {
  const location = useLocation();
  const { setCurrentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lang = langProp || 'fr';
  const isFr = lang === 'fr';
  const meta = LANDING_META_STLP[lang] ?? LANDING_META_STLP.fr;
  const landingFaqs = useMemo(() => buildLandingFaqsStlp(t), [t]);
  const beforeAfterImages = useMemo(
    () => buildStlpBeforeAfterImages(isFr),
    [isFr],
  );

  useEffect(() => {
    if (langProp) setCurrentLang(langProp);
  }, [langProp, setCurrentLang]);

  const methodEndRef = useRef(null);
  const hasTriggered = useRef(false);
  const popupTimerRef = useRef(null);

  const handleMethodEndIntersect = useCallback(
    ([entry], observer) => {
      if (entry.isIntersecting && !hasTriggered.current) {
        hasTriggered.current = true;
        observer.disconnect();
        popupTimerRef.current = setTimeout(onOpen, 1000);
      }
    },
    [onOpen],
  );

  useEffect(() => {
    const el = methodEndRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(handleMethodEndIntersect, {
      threshold: 0,
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, [handleMethodEndIntersect]);

  useEffect(() => {
    trackPageView(location.pathname, meta.title);
  }, [location.pathname, meta.title]);

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />
        <link rel="preload" href={STLP_HERO} as="image" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {indexable && (
          <link rel="canonical" href={`${CANONICAL_BASE}/${lang}/stlp`} />
        )}
        {indexable && (
          <link rel="alternate" hrefLang="fr" href={`${CANONICAL_BASE}/fr/stlp`} />
        )}
        {indexable && (
          <link rel="alternate" hrefLang="en" href={`${CANONICAL_BASE}/en/stlp`} />
        )}
        {indexable && (
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${CANONICAL_BASE}/fr/stlp`}
          />
        )}
        {indexable && <meta property="og:type" content="website" />}
        {indexable && <meta property="og:title" content={meta.title} />}
        {indexable && (
          <meta property="og:description" content={meta.description} />
        )}
        {indexable && (
          <meta property="og:url" content={`${CANONICAL_BASE}/${lang}/stlp`} />
        )}
        {indexable && (
          <meta
            property="og:locale"
            content={lang === 'fr' ? 'fr_CA' : 'en_CA'}
          />
        )}
        {!indexable && <meta name="robots" content="noindex, nofollow" />}
        {!indexable && <meta name="googlebot" content="noindex, nofollow" />}
        {indexable && (
          <script type="application/ld+json">
            {JSON.stringify(buildStlpBreadcrumbSchema(lang))}
          </script>
        )}
      </Helmet>
      <LandingClarity
        projectId={LANDING_ADS_CLARITY_PROJECT_ID}
        paths={STLP_LANDING_PATHS}
      />

      <PromoBanner onSubmissionOpen={onOpen} />

      <Box
        w="100%"
        minW={0}
        maxW="100%"
        bg="white"
        overflowX="hidden"
        position="relative"
      >
        <LandingHeroSection
          onSubmissionOpen={onOpen}
          pageContext={t.pageContextName}
          title={t.landingHeroTitle}
          titleSecondLine=""
          subtitle={t.stlpLandingHeroSubtitle}
          buttonText={t.landingHeroButton}
          contentPt={HERO_CONTENT_PT}
          imageBackground={STLP_HERO}
          imageObjectPosition={{ base: '78% center', md: '65% center' }}
          flatBottom
        />

        <Box bg="white" w="100%">
          <TrustBanner noCard compactMobile />
        </Box>

        <ControlSection
          onSubmissionOpen={onOpen}
          cardImages={STLP_CONTROL_IMAGES}
          cardImagePositions={STLP_CONTROL_IMAGE_POSITIONS}
          showCta
          compactTop
          sectionPy={LANDING_SECTION_PY}
        />

        <LandingServicesSection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
          hideCta
          compactMobile
        />

        <BeforeAfterCarouselSection
          images={beforeAfterImages}
          maxItems={3}
          compactMobile
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        <ContactFormSection
          fields={LANDING_FORM_FIELDS}
          phoneFirst
          projectDetailsLabel={t.formProjectDetails}
          sectionPy={LANDING_SECTION_PY}
          sectionBg="app.ctaBg"
        />

        <MethodSection
          onSubmissionOpen={onOpen}
          stepImages={STLP_METHOD_IMAGES}
          sectionPy={LANDING_SECTION_PY}
          compactMobile
        />
        <Box ref={methodEndRef} h={0} aria-hidden="true" />

        <FAQSection faqsOverride={landingFaqs} sectionPy={LANDING_SECTION_PY} compactMobile />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
          compactMobile
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

export default LandingPageStlp;
