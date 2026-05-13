import React, { Fragment, useContext, useMemo, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { useTranslation } from '../lelever-next/i18n';
import {
  CANONICAL_BASE,
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

const CLARITY_PROJECT_ID = 'w4hw2yfvew';

const HERO_CONTENT_PT = {
  base: `calc(5.5rem + ${PROMO_BANNER_HEIGHT.base})`,
  sm: `calc(5.75rem + ${PROMO_BANNER_HEIGHT.sm})`,
  md: `calc(7rem + ${PROMO_BANNER_HEIGHT.md})`,
  lg: `calc(7.5rem + ${PROMO_BANNER_HEIGHT.lg})`,
  xl: `calc(8rem + ${PROMO_BANNER_HEIGHT.xl})`,
  '2xl': `calc(8.25rem + ${PROMO_BANNER_HEIGHT['2xl']})`,
};

const META = {
  fr: {
    title: 'Peintre Gatineau | Peinture résidentielle et commerciale | Le Lever du Pinceau',
    description:
      'Peintre professionnel à Gatineau. Service rapide, propre et garanti. Peinture intérieure et extérieure, résidentielle et commerciale. Licence RBQ. Soumission gratuite en 24h.',
    keywords:
      'peintre Gatineau, peinture Gatineau, peintre professionnel Gatineau, peinture intérieure Gatineau, peinture extérieure Gatineau',
  },
  en: {
    title: 'Painter Gatineau | Residential & Commercial Painting | Le Lever du Pinceau',
    description:
      'Professional painter in Gatineau. Fast, clean and guaranteed service. Interior and exterior, residential and commercial painting. RBQ license. Free quote in 24h.',
    keywords:
      'painter Gatineau, painting Gatineau, professional painter Gatineau, interior painting Gatineau, exterior painting Gatineau',
  },
};

function LandingPageGatineau({ lang: langProp, indexable = false }) {
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lang = currentLang || langProp || 'fr';
  const meta = META[lang] ?? META.fr;
  const landingFaqs = useMemo(() => buildLandingFaqs(t), [t]);
  const landingPairs = useMemo(() => buildLandingPagePairs(lang === 'fr'), [lang]);

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
    const path = location.pathname;
    if (!path.includes('peintre-gatineau')) return;
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

  const heroSubtitle =
    lang === 'fr'
      ? 'Un service rapide, propre et garanti à Gatineau'
      : 'A fast, clean and guaranteed service in Gatineau';

  const reviewsSubtitle =
    lang === 'fr'
      ? 'Plus de 100 avis 5 étoiles sur Google'
      : 'Over 100 5-star reviews on Google';

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
        {indexable && <meta property="og:description" content={meta.description} />}
        {indexable && (
          <meta
            property="og:url"
            content={`${CANONICAL_BASE}/${lang}/peintre-gatineau`}
          />
        )}
        {indexable && (
          <meta property="og:locale" content={lang === 'fr' ? 'fr_CA' : 'en_CA'} />
        )}
        {!indexable && <meta name="robots" content="noindex, nofollow" />}
        {!indexable && <meta name="googlebot" content="noindex, nofollow" />}
      </Helmet>
      <MicrosoftClarity />

      <PromoBanner />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden" position="relative">
        {/* 1. Hero */}
        <LandingHeroSection
          onSubmissionOpen={onOpen}
          pageContext={t.pageContextName}
          title={t.landingHeroTitle}
          titleSecondLine=""
          subtitle={heroSubtitle}
          buttonText={t.landingHeroButton}
          contentPt={HERO_CONTENT_PT}
        />

        {/* 2. Bénéfices */}
        <Box bg="gray.50" w="100%">
          <TrustBanner />
        </Box>

        {/* 3. Services */}
        <LandingServicesSection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />

        {/* 4. Garantie — CTA + badge + engagement */}
        <GuaranteeSection
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />

        {/* 5. Méthode — sentinel déclenche le popup après 1s */}
        <MethodSection
          onSubmissionOpen={onOpen}
          hideCta
          sectionPy={LANDING_SECTION_PY}
        />
        <Box ref={methodEndRef} h={0} aria-hidden="true" />

        {/* 6. Formulaire */}
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
          subtitle={reviewsSubtitle}
          sectionBg="white"
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        {/* 8. Avant/Après */}
        <BeforeAfterCarouselSection
          images={landingPairs}
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        {/* 9. FAQ */}
        <FAQSection faqsOverride={landingFaqs} sectionPy={LANDING_SECTION_PY} />

        {/* 10. Final CTA */}
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
