import React, { Fragment, useContext, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { useTranslation } from '../lelever-next/i18n';
import {
  CANONICAL_BASE,
  LANDING_BETONEL_BAND_PY,
  LANDING_META,
  LANDING_SECTION_PY,
  LANDING_SECTION_PY_HALF,
  LANDING_WHYUS_SECTION_PT,
  buildLandingFaqs,
} from '../lelever-next/landing';
import heroImage from '../lelever-next/images/heroImage.png';

import LandingHeroSection from '../lelever-next/home-page/LandingHeroSection';
import WhyUsHero from '../components/WhyUsHero';
import BetonelBanerHero from '../components/BetonelBanerHero';
import BeforeAfterCarouselSection from '../lelever-next/home-page/BeforeAfterCarouselSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import GuaranteeSection from '../lelever-next/home-page/GuaranteeSection';
import ContactFormSection from '../lelever-next/home-page/ContactFormSection';
import TrustBanner from '../lelever-next/home-page/TrustBanner';
import ReviewsSection from '../lelever-next/home-page/ReviewsSection';
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

function LandingPageV2({ lang: langProp, indexable = false }) {
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const lang = currentLang || langProp || 'fr';
  const meta = LANDING_META[lang] ?? LANDING_META.fr;
  const landingFaqs = useMemo(() => buildLandingFaqs(t), [t]);

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
          subtitle={t.landingHeroSubtitle}
          buttonText={t.landingHeroButton}
        />

        <WhyUsHero
          onSubmissionOpen={onOpen}
          sectionPt={LANDING_WHYUS_SECTION_PT}
          sectionPb={LANDING_BETONEL_BAND_PY}
        />

        <Box py={LANDING_BETONEL_BAND_PY} bg="white" w="100%">
          <BetonelBanerHero isMobile={false} />
        </Box>

        <BeforeAfterCarouselSection
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_BETONEL_BAND_PY}
          sectionPaddingBottom={LANDING_SECTION_PY_HALF}
        />

        <MethodSection
          onSubmissionOpen={onOpen}
          hideCta
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingTop={LANDING_SECTION_PY_HALF}
        />

        <GuaranteeSection
          hideCta
          onSubmissionOpen={onOpen}
          sectionPy={LANDING_SECTION_PY}
        />

        <ContactFormSection
          fields={LANDING_FORM_FIELDS}
          phoneFirst
          projectDetailsLabel={t.formProjectDetails}
          sectionPy={LANDING_SECTION_PY}
          sectionPaddingBottom={LANDING_SECTION_PY_HALF}
        />

        <Box bg="white" w="100%">
          <ReviewsSection
            hideButton
            desktopColumns={2}
            title={t.reviewsTitle}
            subtitle={t.reviewsSubtitle}
            sectionBg="white"
            sectionPaddingTop={LANDING_SECTION_PY_HALF}
            sectionPaddingBottom={0}
            compactDotsMargin
          />

          <Box py={LANDING_SECTION_PY}>
            <Container maxW="1440px" px={{ base: 2, sm: 3, md: 6, lg: 8 }}>
              <TrustBanner compact inline />
            </Container>
          </Box>
        </Box>

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

export default LandingPageV2;
