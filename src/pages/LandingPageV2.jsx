import React, { Fragment, useContext, useMemo, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { useTranslation } from '../lelever-next/i18n';
import {
  CANONICAL_BASE,
  LANDING_META,
  LANDING_SECTION_PY,
  buildLandingFaqs,
} from '../lelever-next/landing';
import heroImage from '../lelever-next/images/heroImage.png';
import PromoBanner, { PROMO_BANNER_HEIGHT } from '../lelever-next/home-page/PromoBanner';

import LandingHeroSection from '../lelever-next/home-page/LandingHeroSection';
import TrustBanner from '../lelever-next/home-page/TrustBanner';
import ReviewsSection from '../lelever-next/home-page/ReviewsSection';
import LandingServicesSection from '../lelever-next/home-page/LandingServicesSection';
import BeforeAfterCarouselSection, { buildLandingPagePairs } from '../lelever-next/home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../lelever-next/home-page/ContactFormSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import GuaranteeSection from '../lelever-next/home-page/GuaranteeSection';
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
/** Microsoft Clarity project — loaded only on /fr/peintre-montreal */
const CLARITY_PROJECT_ID = 'w4hw2yfvew';

const HERO_CONTENT_PT = {
  base: `calc(5.5rem + ${PROMO_BANNER_HEIGHT.base})`,
  sm: `calc(5.75rem + ${PROMO_BANNER_HEIGHT.sm})`,
  md: `calc(7rem + ${PROMO_BANNER_HEIGHT.md})`,
  lg: `calc(7.5rem + ${PROMO_BANNER_HEIGHT.lg})`,
  xl: `calc(8rem + ${PROMO_BANNER_HEIGHT.xl})`,
  '2xl': `calc(8.25rem + ${PROMO_BANNER_HEIGHT['2xl']})`,
};

function LandingPageV2({ lang: langProp, indexable = false }) {
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lang = currentLang || langProp || 'fr';
  const meta = LANDING_META[lang] ?? LANDING_META.fr;
  const landingFaqs = useMemo(() => buildLandingFaqs(t), [t]);
  const landingPairs = useMemo(() => buildLandingPagePairs(lang === 'fr'), [lang]);

  // Popup fires once, 1s after the user scrolls past the end of the method section.
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
    if (location.pathname !== '/fr/peintre-montreal') return;
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
            href={`${CANONICAL_BASE}/${lang}/peintre-montreal`}
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
            content={`${CANONICAL_BASE}/${lang}/peintre-montreal`}
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

      {/* Promo bar pinned at viewport top (zIndex 10000, above the fixed navbar) */}
      <PromoBanner />

      <Box
        w="100%"
        minW={0}
        maxW="100%"
        bg="white"
        overflowX="hidden"
        position="relative"
      >
        {/* 1. Hero — contentPt clears the fixed promo banner + fixed navbar */}
        <LandingHeroSection
          onSubmissionOpen={onOpen}
          pageContext={t.pageContextName}
          title={t.landingHeroTitle}
          titleSecondLine=""
          subtitle={t.landingHeroSubtitle}
          buttonText={t.landingHeroButton}
          contentPt={HERO_CONTENT_PT}
        />

        {/* 2. Trust bar — full-width grey strip (bénéfices) */}
        <Box bg="gray.50" w="100%">
          <TrustBanner noCard />
        </Box>

        {/* 3. Services (2 cartes : intérieure + extérieure) */}
        <LandingServicesSection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />

        {/* 4. Section garantie — CTA + badge + engagement */}
        <GuaranteeSection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />

        {/* 5. Méthode en 4 étapes — sentinel déclenche le popup après 1s */}
        <MethodSection
          onSubmissionOpen={onOpen}
          hideCta
          sectionPy={LANDING_SECTION_PY}
        />
        <Box ref={methodEndRef} h={0} aria-hidden="true" />

        {/* 6. Formulaire de contact — fond bleu */}
        <ContactFormSection
          fields={LANDING_FORM_FIELDS}
          phoneFirst
          projectDetailsLabel={t.formProjectDetails}
          sectionPy={LANDING_SECTION_PY}
          sectionBg="app.ctaBg"
        />

        {/* 7. Avis clients */}
        <ReviewsSection
          hideButton
          desktopColumns={3}
          title={t.reviewsTitle}
          subtitle={t.reviewsSubtitle}
          sectionBg="white"
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        {/* 8. Avant/Après — 6 paires, carousel swipe mobile */}
        <BeforeAfterCarouselSection
          images={landingPairs}
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        {/* 9. FAQ */}
        <FAQSection faqsOverride={landingFaqs} sectionPy={LANDING_SECTION_PY} />

        {/* 9. Final CTA */}
        <FinalCTASection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

export default LandingPageV2;
