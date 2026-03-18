import React, { Fragment, useContext, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure } from '@chakra-ui/react';
import appContext from '../AppProvider';
import { useTranslation } from '../lelever-next/i18n';
import { CANONICAL_BASE, LANDING_META, buildLandingFaqs } from '../lelever-next/landing';
import heroImage from '../lelever-next/images/heroImage.png';

import HeroSection from '../lelever-next/home-page/HeroSection';
import WhyUsHero from '../components/WhyUsHero';
import BetonelBanerHero from '../components/BetonelBanerHero';
import BeforeAfterCarouselSection from '../lelever-next/home-page/BeforeAfterCarouselSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import ContactFormSection from '../lelever-next/home-page/ContactFormSection';
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
          <link rel="canonical" href={`${CANONICAL_BASE}/${lang}/peintre-montreal`} />
        )}
        {indexable && <meta property="og:type" content="website" />}
        {indexable && <meta property="og:title" content={meta.title} />}
        {indexable && <meta property="og:description" content={meta.description} />}
        {indexable && (
          <meta property="og:url" content={`${CANONICAL_BASE}/${lang}/peintre-montreal`} />
        )}
        {indexable && (
          <meta property="og:locale" content={lang === 'fr' ? 'fr_CA' : 'en_CA'} />
        )}
        {!indexable && <meta name="robots" content="noindex, nofollow" />}
        {!indexable && <meta name="googlebot" content="noindex, nofollow" />}
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden" position="relative">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={t.pageContextName}
          title={t.landingHeroTitle}
          titleSecondLine=""
          subtitle={t.landingHeroSubtitle}
          buttonText={t.landingHeroButton}
          compactTrustBanner
        />

        <WhyUsHero onSubmissionOpen={onOpen} />

        <BetonelBanerHero isMobile={false} />

        <BeforeAfterCarouselSection />

        <MethodSection onSubmissionOpen={onOpen} hideCta />

        <ContactFormSection
          fields={LANDING_FORM_FIELDS}
          phoneFirst
          projectDetailsLabel={t.formProjectDetails}
        />

        <ReviewsSection
          hideButton
          desktopColumns={2}
          title={t.reviewsTitle}
          subtitle={t.reviewsSubtitle}
        />

        <FAQSection faqsOverride={landingFaqs} />

        <FinalCTASection onSubmissionOpen={onOpen} />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

export default LandingPageV2;
