import React, { Fragment, useContext } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import MicrosoftClarity from '../analytics/MicrosoftClarity';
import HeroSection from '../home-page/HeroSection';
import { useTranslation } from '../i18n';
import ControlSection from '../home-page/ControlSection';
import GuaranteeSection from '../home-page/GuaranteeSection';
import MethodSection from '../home-page/MethodSection';
import ServicesSection from '../home-page/ServicesSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import TeamSection from '../home-page/TeamSection';
import ReviewsSection from '../home-page/ReviewsSection';
import SectorsSection from '../home-page/SectorsSection';
import FAQSection from '../home-page/FAQSection';
import ResourcesSection from '../home-page/ResourcesSection';
import ContactFormSection from '../home-page/ContactFormSection';
import FinalCTASection from '../home-page/FinalCTASection';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import { KEYWORDS, LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import SubmissionModal from '../home-page/SubmissionModal';

export default function NewHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentLang } = useContext(appContext);
  const { t } = useTranslation();
  const isFr = currentLang === 'fr';
  const pageContext = isFr ? 'Accueil' : 'Home';

  const title = isFr
    ? 'Peintre Montréal | Peinture résidentielle & commerciale | Le Lever du Pinceau'
    : 'Painter Montreal | Residential & Commercial Painting | Le Lever du Pinceau';
  const description = isFr
    ? 'Le Lever du Pinceau, peintre professionnel à Montréal. Service clé en main pour peinture intérieure, extérieure, résidentielle et commerciale. 100+ avis 5★. Licence RBQ. Soumission gratuite en 24h.'
    : 'Le Lever du Pinceau, professional painter in Montreal. Turnkey service for interior, exterior, residential and commercial painting. 100+ 5★ reviews. RBQ license. Free quote in 24h.';

  const faqTitle = isFr
    ? 'Questions fréquentes sur nos services de peinture'
    : 'Frequently asked questions about our painting services';

  return (
    <Fragment>
      <SEOHead
        title={title}
        description={description}
        canonicalPath="/"
        keywords={KEYWORDS[currentLang] || KEYWORDS.fr}
        schema={LOCAL_BUSINESS_SCHEMA}
      />
      <MicrosoftClarity />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={pageContext}
          description={t.heroDescription}
        />

        <ControlSection onSubmissionOpen={onOpen} />

        <GuaranteeSection onSubmissionOpen={onOpen} />

        <MethodSection onSubmissionOpen={onOpen} />

        <ServicesSection />

        <BeforeAfterCarouselSection />

        <TeamSection pageContext={pageContext} />

        <ReviewsSection />

        <SectorsSection pageContext={pageContext} />

        <FAQSection title={faqTitle} />

        <ResourcesSection />

        <ContactFormSection phoneFirst />

        <FinalCTASection onSubmissionOpen={onOpen} />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
