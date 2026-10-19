import React, { Fragment, useContext, useMemo, useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import { useTranslation } from '../i18n';
import { CANONICAL_BASE, LANDING_META_STLP, LANDING_SECTION_PY } from '../landing/constants';
import { STLP_LANDING_PATHS } from '../landing/paths';
import {
  STLP_CONTROL_IMAGES,
  STLP_HERO,
  STLP_METHOD_IMAGES,
} from '../landing/stlpAssets';
import { buildLandingFaqsStlp } from '../landing/landingFaqsStlp';
import { buildStlpBreadcrumbSchema } from '../landing/stlpCluster';
import { PROMO_BANNER_HEIGHT } from '../home-page/PromoBanner';

import LandingHeroSection from '../home-page/LandingHeroSection';
import TrustBanner from '../home-page/TrustBanner';
import ControlSection from '../home-page/ControlSection';
import LandingServicesSection from '../home-page/LandingServicesSection';
import BeforeAfterCarouselSection, {
  buildDefaultImages,
} from '../home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../home-page/ContactFormSection';
import MethodSection from '../home-page/MethodSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';

/** Microsoft Clarity project for ads / STLP landings */
const CLARITY_PROJECT_ID = 'w4hw2yfvew';

const HERO_CONTENT_PT = {
  base: `calc(6.75rem + ${PROMO_BANNER_HEIGHT.base})`,
  sm: `calc(7rem + ${PROMO_BANNER_HEIGHT.sm})`,
  md: `calc(7rem + ${PROMO_BANNER_HEIGHT.md})`,
  lg: `calc(7.5rem + ${PROMO_BANNER_HEIGHT.lg})`,
  xl: `calc(8rem + ${PROMO_BANNER_HEIGHT.xl})`,
  '2xl': `calc(8.25rem + ${PROMO_BANNER_HEIGHT['2xl']})`,
};

function LandingPageStlp({ lang: langProp, indexable = true }) {
  const location = useLocation();
  const { setCurrentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lang = langProp || 'fr';
  const isFr = lang === 'fr';
  const meta = LANDING_META_STLP[lang] ?? LANDING_META_STLP.fr;
  const landingFaqs = useMemo(() => buildLandingFaqsStlp(t), [t]);
  const beforeAfterImages = useMemo(() => buildDefaultImages(isFr), [isFr]);
  const controlCards = useMemo(
    () =>
      [1, 2, 3].map((n, i) => ({
        title: t[`controlCard${n}Title`],
        subtitle: t[`controlCard${n}Subtitle`],
        description: t[`controlCard${n}Desc`],
        image: STLP_CONTROL_IMAGES[i],
      })),
    [t],
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
    if (!el) return undefined;
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
    if (!STLP_LANDING_PATHS.includes(location.pathname)) return;
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

  const landingPath =
    lang === 'en' ? '/en/stlp-peinture-inc' : '/fr/stlp-peinture-inc';

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />
        <link rel="preload" href={STLP_HERO} as="image" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {indexable && (
          <link rel="canonical" href={`${CANONICAL_BASE}${landingPath}`} />
        )}
        {indexable && (
          <link
            rel="alternate"
            hrefLang="fr"
            href={`${CANONICAL_BASE}/fr/stlp-peinture-inc`}
          />
        )}
        {indexable && (
          <link
            rel="alternate"
            hrefLang="en"
            href={`${CANONICAL_BASE}/en/stlp-peinture-inc`}
          />
        )}
        {indexable && (
          <link
            rel="alternate"
            hrefLang="x-default"
            href={`${CANONICAL_BASE}/fr/stlp-peinture-inc`}
          />
        )}
        {indexable && <meta property="og:type" content="website" />}
        {indexable && <meta property="og:title" content={meta.title} />}
        {indexable && (
          <meta property="og:description" content={meta.description} />
        )}
        {indexable && (
          <meta property="og:url" content={`${CANONICAL_BASE}${landingPath}`} />
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
        />

        <TrustBanner />

        <ControlSection cards={controlCards} pt={LANDING_SECTION_PY} />

        <LandingServicesSection sectionPy={LANDING_SECTION_PY} />

        <BeforeAfterCarouselSection
          images={beforeAfterImages}
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        <ContactFormSection
          sectionPy={LANDING_SECTION_PY}
          sectionBg="app.ctaBg"
        />

        <MethodSection
          onSubmissionOpen={onOpen}
          hideCta
          images={STLP_METHOD_IMAGES}
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

export default LandingPageStlp;
