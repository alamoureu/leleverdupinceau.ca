import React, { Fragment, useContext, useMemo, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { useTranslation } from '../lelever-next/i18n';
import {
  CANONICAL_BASE,
  LANDING_META_GATINEAU,
  LANDING_SECTION_PY,
  buildLandingFaqsGatineau,
} from '../lelever-next/landing';
import heroImage from '../lelever-next/images/heroImage.png';
import PromoBanner, { PROMO_BANNER_HEIGHT } from '../lelever-next/home-page/PromoBanner';

import LandingHeroSection from '../lelever-next/home-page/LandingHeroSection';
import TrustBanner from '../lelever-next/home-page/TrustBanner';
import ReviewsSection from '../lelever-next/home-page/ReviewsSection';
import LandingServicesSection from '../lelever-next/home-page/LandingServicesSection';
import BeforeAfterCarouselSection from '../lelever-next/home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../lelever-next/home-page/ContactFormSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import FAQSection from '../lelever-next/home-page/FAQSection';
import FinalCTASection from '../lelever-next/home-page/FinalCTASection';
import SubmissionModal from '../components/SubmissionModal';
import MicrosoftClarity from '../lelever-next/analytics/MicrosoftClarity';

const LANDING_FORM_FIELDS = {
  name: true,
  phone: true,
  email: true,
  address: false,
  paintingType: false,
  projectDetails: 'optional',
};

/**
 * The hero content pt must clear: fixed promo banner + fixed navbar.
 * Banner heights come from PROMO_BANNER_HEIGHT; navbar heights from LANDING_MAIN_CONTENT_PT.
 * We use CSS calc() to combine them.
 */
/** Microsoft Clarity project — chargé sur la landing Gatineau (même id que Montréal). */
const CLARITY_PROJECT_ID = 'w4hw2yfvew';

const CLARITY_GATINEAU_PATHS = [
  '/fr/peintre-gatineau',
  '/en/peintre-gatineau',
  '/en/painter-gatineau',
];

const HERO_CONTENT_PT = {
  base: `calc(5.5rem + ${PROMO_BANNER_HEIGHT.base})`,
  sm: `calc(5.75rem + ${PROMO_BANNER_HEIGHT.sm})`,
  md: `calc(7rem + ${PROMO_BANNER_HEIGHT.md})`,
  lg: `calc(7.5rem + ${PROMO_BANNER_HEIGHT.lg})`,
  xl: `calc(8rem + ${PROMO_BANNER_HEIGHT.xl})`,
  '2xl': `calc(8.25rem + ${PROMO_BANNER_HEIGHT['2xl']})`,
};

function gatineauize(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/Montréal/g, 'Gatineau').replace(/Montreal/gi, 'Gatineau');
}

function LandingPageGatineau({ lang: langProp, indexable = false }) {
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lang = currentLang || langProp || 'fr';
  const meta = LANDING_META_GATINEAU[lang] ?? LANDING_META_GATINEAU.fr;
  const landingFaqs = useMemo(() => buildLandingFaqsGatineau(t), [t]);

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
    const observer = new IntersectionObserver(handleMethodEndIntersect, { threshold: 0 });
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (popupTimerRef.current) clearTimeout(popupTimerRef.current);
    };
  }, [handleMethodEndIntersect]);

  useEffect(() => {
    if (!CLARITY_GATINEAU_PATHS.includes(location.pathname)) return;
    const src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
    if (document.querySelector(`script[src="${src}"]`)) return;
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);
  }, [location.pathname]);

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />
        <link rel="preload" href={heroImage} as="image" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {indexable && (
          <link
            rel="canonical"
            href={`${CANONICAL_BASE}/${lang}/peintre-gatineau`}
          />
        )}
        {indexable && <meta property="og:type" content="website" />}
        {indexable && <meta property="og:title" content={meta.title} />}
        {indexable && (
          <meta property="og:description" content={meta.description} />
        )}
        {indexable && (
          <meta
            property="og:url"
            content={`${CANONICAL_BASE}/${lang}/peintre-gatineau`}
          />
        )}
        {indexable && (
          <meta
            property="og:locale"
            content={lang === 'fr' ? 'fr_CA' : 'en_CA'}
          />
        )}
        {!indexable && <meta name="robots" content="noindex, nofollow" />}
        {!indexable && <meta name="googlebot" content="noindex, nofollow" />}
      </Helmet>
      <MicrosoftClarity />

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
          title={gatineauize(t.landingHeroTitle)}
          titleSecondLine=""
          subtitle={gatineauize(t.landingHeroSubtitle)}
          buttonText={t.landingHeroButton}
          contentPt={HERO_CONTENT_PT}
        />

        <Box bg="gray.50" w="100%">
          <TrustBanner noCard />
        </Box>

        <ReviewsSection
          hideButton
          desktopColumns={3}
          title={t.reviewsTitle}
          subtitle={t.reviewsSubtitle}
          sectionBg="white"
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        <LandingServicesSection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />

        <BeforeAfterCarouselSection
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
          subtitle={gatineauize(t.beforeAfterSubtitle)}
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
          hideCta
          sectionPy={LANDING_SECTION_PY}
        />
        <Box ref={methodEndRef} h={0} aria-hidden="true" />

        <FAQSection faqsOverride={landingFaqs} sectionPy={LANDING_SECTION_PY} />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

export default LandingPageGatineau;
