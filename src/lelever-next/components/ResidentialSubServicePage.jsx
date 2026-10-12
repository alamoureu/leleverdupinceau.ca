import React, { Fragment } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';
import MethodSection from '../home-page/MethodSection';
import ContactFormSection from '../home-page/ContactFormSection';
import ControlSection from '../home-page/ControlSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

const SITE = 'https://leleverdupinceau.ca';

/**
 * Gabarit des sous-pages résidentielles (maison, condo, appartement) :
 * héros, points forts, situations, avant/après, garantie, FAQ, liens internes, CTA.
 */
export default function ResidentialSubServicePage({
  seo,
  slug,
  breadcrumbName,
  breadcrumbLabel,
  hero,
  checkmarks,
  control,
  situations,
  showMethodAndForm = false,
  carousel,
  guarantee,
  faqTitle,
  faqs,
  internalLinks,
  finalCtaTitle,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const canonicalPath = `/services/peinture-residentielle/${slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Peinture résidentielle',
        item: `${SITE}/services/peinture-residentielle`,
      },
      { '@type': 'ListItem', position: 4, name: breadcrumbName, item: `${SITE}${canonicalPath}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <Fragment>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={canonicalPath}
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={breadcrumbName}
          imageBackground={hero.image}
          imageAlt={hero.alt}
          overlayBg="rgba(0, 0, 0, 0.45)"
          title={hero.title}
          subtitle={hero.subtitle}
          description={hero.description}
          buttonText="Obtenir ma soumission gratuite"
          breadcrumb={[
            { label: 'Accueil', to: '/' },
            { label: 'Services', to: '/services' },
            { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
            { label: breadcrumbLabel },
          ]}
        />

        {checkmarks && (
          <FeatureCardsSection
            sectionPaddingTop={TRUST_BANNER_BELOW_PT}
            title={checkmarks.title}
            subtitle={checkmarks.intro}
            items={checkmarks.items}
            variant="inline"
          />
        )}

        {control && <ControlSection {...control} pt={{ base: 12, md: 16 }} />}

        {situations && (
          <FeatureCardsSection
            sectionPaddingTop={checkmarks ? undefined : TRUST_BANNER_BELOW_PT}
            title={situations.title}
            subtitle={situations.intro}
            items={situations.items}
            variant="stacked"
            sectionBg="gray.50"
          />
        )}

        {showMethodAndForm && (
          <>
            <MethodSection hideCta />
            <ContactFormSection
              sectionPaddingTop={{ base: 12, md: 16 }}
              sectionPaddingBottom={{ base: 12, md: 16 }}
            />
          </>
        )}

        <BeforeAfterCarouselSection
          isFr={true}
          title={carousel.title}
          subtitle={carousel.subtitle}
          images={carousel.images}
          sectionBg={carousel.bg}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        <ServiceGuaranteeSection title={guarantee.title} body={guarantee.body} hideCta />

        <FAQSection title={faqTitle} faqsOverride={faqs} emitSchema={false} />

        <InternalLinksSection title="En savoir plus" links={internalLinks} />

        <FinalCTASection
          title={finalCtaTitle}
          subtitle="Obtenez votre soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
