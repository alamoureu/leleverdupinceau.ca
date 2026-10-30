import React, { Fragment, useContext, useMemo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import { useTranslation } from '../i18n';
import {
  CANONICAL_BASE,
  LANDING_META,
  LANDING_SECTION_PY,
  buildLandingFaqs,
} from '../landing';
import heroImage from '../images/shared/heroImage.webp';

import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import ReviewsSection from '../home-page/ReviewsSection';
import LandingServicesSection from '../home-page/LandingServicesSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ContactFormSection from '../home-page/ContactFormSection';
import MethodSection from '../home-page/MethodSection';
import GuaranteeSection from '../home-page/GuaranteeSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';
import MicrosoftClarity from '../components/MicrosoftClarity';

/** Microsoft Clarity project - loaded only on /fr/peintre-montreal */
const CLARITY_PROJECT_ID = 'w4hw2yfvew';

function LandingPageV2({ lang: langProp, indexable = false }) {
  const location = useLocation();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [paintingType, setPaintingType] = useState(null);

  const openSubmission = () => {
    setPaintingType(null);
    onOpen();
  };

  const openServiceSubmission = (type) => {
    setPaintingType(type);
    onOpen();
  };

  const closeSubmission = () => {
    onClose();
    setPaintingType(null);
  };

  const lang = currentLang || langProp || 'fr';
  const meta = LANDING_META[lang] ?? LANDING_META.fr;
  const landingFaqs = useMemo(() => buildLandingFaqs(t), [t]);

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

  const landingPath =
    lang === 'en' ? '/en/painter-montreal' : '/fr/peintre-montreal';

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />
        <link rel="preload" href={heroImage} as="image" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {indexable && (
          <link rel="canonical" href={`${CANONICAL_BASE}${landingPath}`} />
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
      </Helmet>
      <MicrosoftClarity />

      {/* Promo + white nav live in LandingLayout (not the blue WebsiteLayout chrome). */}
      <Box
        w="100%"
        minW={0}
        maxW="100%"
        bg="white"
        overflowX="hidden"
        position="relative"
      >
        {/* 1. Rectangular hero (same HeroSection as the rest of the site) + TrustBanner */}
        <HeroSection
          onSubmissionOpen={openSubmission}
          pageContext={t.pageContextName}
          title={t.landingHeroTitle}
          titleSecondLine=""
          subtitle={t.landingHeroSubtitle}
          buttonText={t.landingHeroButton}
        />

        {/* 2. Reviews - keep the updated review banner / carousel */}
        <ReviewsSection
          hideButton
          sectionBg="white"
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          sectionPaddingBottom={LANDING_SECTION_PY}
        />

        {/* 3. Contact form - blue background, right under reviews */}
        <ContactFormSection
          sectionPy={LANDING_SECTION_PY}
          sectionBg="app.ctaBg"
        />

        {/* 4. Services (2 cards: intérieure + extérieure) */}
        <LandingServicesSection
          sectionPy={LANDING_SECTION_PY}
          onServiceClick={openServiceSubmission}
        />

        {/* 5. Before/After - form CTA instead of link to /realisations */}
        <BeforeAfterCarouselSection
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY}
          onSubmissionOpen={openSubmission}
        />

        {/* 6. Method */}
        <MethodSection hideCta sectionPy={LANDING_SECTION_PY} />

        {/* 7. 100% satisfaction guarantee + CTA */}
        <GuaranteeSection
          onSubmissionOpen={openSubmission}
          sectionPy={LANDING_SECTION_PY}
        />

        {/* 8. FAQ */}
        <FAQSection faqsOverride={landingFaqs} sectionPy={LANDING_SECTION_PY} />

        {/* 9. Final CTA */}
        <FinalCTASection
          onSubmissionOpen={openSubmission}
          sectionPy={LANDING_SECTION_PY}
        />
      </Box>

      <SubmissionModal
        isOpen={isOpen}
        onClose={closeSubmission}
        paintingType={paintingType}
      />
    </Fragment>
  );
}

export default LandingPageV2;
