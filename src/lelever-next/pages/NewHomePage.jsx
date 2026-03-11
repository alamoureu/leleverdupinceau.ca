import React, { Fragment, useContext } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import HeroSection from '../home-page/HeroSection';
import ControlSection from '../home-page/ControlSection';
import GuaranteeSection from '../home-page/GuaranteeSection';
import ServicesSection from '../home-page/ServicesSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import TeamSection from '../home-page/TeamSection';
import ReviewsSection from '../home-page/ReviewsSection';
import MethodSection from '../home-page/MethodSection';
import SectorsSection from '../home-page/SectorsSection';
import FAQSection from '../home-page/FAQSection';
import ResourcesSection from '../home-page/ResourcesSection';
import ContactFormSection from '../home-page/ContactFormSection';
import FinalCTASection from '../home-page/FinalCTASection';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import { KEYWORDS, LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import SubmissionModal from '../home-page/SubmissionModal';
import guaranteeBadgeOverride from '../images/IMG_2574\ (1).PNG';

export default function NewHomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const pageContext = isFr ? 'Accueil' : 'Home';

  const title = isFr
    ? 'Peintre Montréal | Peinture résidentielle & commerciale | Le Lever du Pinceau'
    : 'Montreal Painter | Residential & Commercial Painting | Le Lever du Pinceau';
  const description = isFr
    ? 'Le Lever du Pinceau, peintre professionnel à Montréal. Service clé en main pour peinture intérieure, extérieure, résidentielle et commerciale. 100+ avis 5★. Licence RBQ. Soumission gratuite en 24h.'
    : 'Le Lever du Pinceau, professional painter in Montreal. Turnkey service for interior, exterior, residential and commercial painting. 100+ 5★ reviews. RBQ licensed. Free quote in 24h.';

  const homePageFaqs = [
    {
      question: isFr ? 'Combien coûte un peintre professionnel à Montréal ?' : 'How much does a professional painter cost in Montreal?',
      answer: isFr
        ? "Le coût dépend de la superficie, de l'état des surfaces et du nombre de couches. En moyenne, pour un projet résidentiel standard, comptez entre 1$ et 3$ par pied carré. Pour obtenir une estimation précise adaptée à votre projet,"
        : "The cost depends on the area, surface condition, and number of coats. On average, expect between $1 and $3 per square foot for a standard residential project. For an accurate estimate tailored to your project,",
      link: true,
    },
    {
      question: isFr ? 'Offrez-vous une garantie sur vos travaux?' : 'Do you offer a warranty on your work?',
      answer: isFr ? 'Oui. Nous offrons une garantie satisfaction à 100%. Si le résultat ne répond pas à vos attentes, nous corrigeons le tout sans frais supplémentaires.' : 'Yes. We offer a 100% satisfaction guarantee. If the result does not meet your expectations, we will fix it at no additional cost.',
    },
    {
      question: isFr ? 'Est-ce que vos peintres sont licenciés RBQ?' : 'Are your painters RBQ licensed?',
      answer: isFr ? 'Oui. Le Lever du Pinceau détient la licence RBQ #5864-1481-01 et une assurance responsabilité de 5 millions de dollars. De plus, tous nos peintres de professions ont plus de 10 ans d’expérience.' : 'Yes. Le Lever du Pinceau holds RBQ license #5864-1481-01 and a 5 million dollar liability insurance. In addition, all our professional painters have over 10 years of experience.',
    },
    {
      question: isFr ? 'Quel est le délai pour obtenir une soumission ?' : 'What is the turnaround time for a quote?',
      answer: isFr ? "Nous répondons généralement sous 24 heures et planifions rapidement une visite sur place pour vous fournir une soumission détaillée et transparente." : 'We generally respond within 24 hours and quickly schedule an on-site visit to provide a detailed and transparent quote.',
    },
    {
      question: isFr ? "Quelle est la durée typique d'un projet de peinture ?" : 'What is the typical duration of a painting project?',
      answer: isFr ? "La durée varie selon l'ampleur du projet. Pour une pièce standard (chambre ou salon), comptez 1 à 2 jours. Un appartement complet (3-4 pièces) prend généralement 3 à 5 jours. Une maison complète peut nécessiter 1 à 2 semaines selon la superficie. Les projets commerciaux sont planifiés selon vos contraintes opérationnelles. Nous vous fournirons un échéancier précis lors de la soumission." : 'Duration varies depending on project scope. For a standard room (bedroom or living room), expect 1 to 2 days. A complete apartment (3-4 rooms) generally takes 3 to 5 days. A complete house may require 1 to 2 weeks depending on size. Commercial projects are scheduled according to your operational constraints. We will provide you with a precise timeline when quoting.',
    },
    {
      question: isFr ? 'Est-ce que vous protégez les surfaces avant de peindre ?' : 'Do you protect surfaces before painting?',
      answer: isFr ? 'Oui, absolument. La protection fait partie intégrante de notre processus professionnel. Nous couvrons systématiquement les planchers avec des toiles protectrices, protégeons tous les meubles et objets, masquons les cadres de portes et fenêtres, et utilisons du ruban de masquage de qualité professionnelle pour garantir des lignes nettes. Nous nettoyons également entièrement après chaque journée de travail pour vous laisser un espace propre et protégé.' : 'Yes, absolutely. Protection is an integral part of our professional process. We systematically cover floors with protective cloths, protect all furniture and objects, mask door and window frames, and use professional-quality masking tape to ensure clean lines. We also thoroughly clean up after each workday to leave you with a clean and protected space.',
    },
    {
      question: isFr ? 'Est-ce que vous peinturez les armoires de cuisine?' : 'Do you paint kitchen cabinets?',
      answer: isFr ? 'Absolument. La peinture d’armoires est l’un de nos services les plus demandés. Nous utilisons un processus spécifique (sablage, apprêt, 2-3 couches) pour un fini durable qui coûte une fraction du remplacement.' : 'Absolutely. Cabinet painting is one of our most requested services. We use a specific process (sanding, primer, 2-3 coats) for a durable finish that costs a fraction of a replacement.',
    },
    {
      question: isFr ? 'Utilisez-vous des peintures écologiques et sans odeur ?' : 'Do you use eco-friendly and odorless paints?',
      answer: isFr ? "Oui, nous proposons une gamme complète de peintures écologiques à faible émission de COV (composés organiques volatils). Ces produits sont idéaux pour les chambres d'enfants, les personnes sensibles aux odeurs, et les espaces commerciaux qui doivent rester opérationnels. Nous travaillons avec des marques réputées comme Bétonel Dulux, en utilisant notamment les gammes VIP, Diamond et Lifemaster, reconnues pour leur durabilité, leur excellente couvrance et leurs faibles émissions de COV. Nous vous conseillerons sur le meilleur choix selon votre projet et votre budget." : "Yes, we offer a complete range of eco-friendly low-VOC (volatile organic compounds) paints. These products are ideal for children's rooms, people sensitive to odors, and commercial spaces that need to remain operational. We work with reputable brands such as Bétonel Dulux, using in particular the VIP, Diamond and Lifemaster ranges, known for their durability, excellent coverage and low VOC emissions. We will advise you on the best choice based on your project and budget.",
    },
  ];

  const serviceSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: isFr ? 'Peinture intérieure' : 'Interior painting',
      provider: { '@id': 'https://www.leleverdupinceau.ca/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: isFr ? 'Peinture extérieure' : 'Exterior painting',
      provider: { '@id': 'https://www.leleverdupinceau.ca/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: isFr ? 'Peinture résidentielle' : 'Residential painting',
      provider: { '@id': 'https://www.leleverdupinceau.ca/#organization' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: isFr ? 'Peinture commerciale' : 'Commercial painting',
      provider: { '@id': 'https://www.leleverdupinceau.ca/#organization' },
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title={title}
        description={description}
        canonicalPath="/"
        keywords={KEYWORDS[currentLang] || KEYWORDS.fr}
        schema={LOCAL_BUSINESS_SCHEMA}
        schemaArray={serviceSchemas}
      />

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={pageContext}
          title={
            isFr ? (
              <Fragment>
                Peintre professionnel{' '}
                <Box as="br" display={{ base: 'block', md: 'none' }} />
                à Montréal
              </Fragment>
            ) : (
              <Fragment>
                Professional Painter{' '}
                <Box as="br" display={{ base: 'block', md: 'none' }} />
                in Montreal
              </Fragment>
            )
          }
          subtitle={isFr ? "Un résultat impeccable, rien de moins." : "An impeccable result, nothing less."}
          description={isFr ? "Service de peinture intérieure et extérieure, résidentielle et commerciale, clé en main, exécuté par des peintres de métier." : "Turnkey interior and exterior, residential and commercial painting service, executed by tradesmen painters."}
          buttonText={isFr ? "Obtenir ma soumission gratuite" : "Get my free quote"}
        />

        <ControlSection onSubmissionOpen={onOpen} />
        
        <GuaranteeSection
          onSubmissionOpen={onOpen}
          badgeSrc={guaranteeBadgeOverride}
          mt={{ base: 8, sm: 10, md: 12 }}
          body={
            isFr
              ? 'Nous ne quittons pas le chantier tant que vous n’êtes pas 100% satisfait des travaux effectués.'
              : "We don't leave the jobsite until you're 100% satisfied."
          }
        />

        <MethodSection onSubmissionOpen={onOpen} />

        <ServicesSection />
        
        <BeforeAfterCarouselSection isFr={isFr} />

        <TeamSection pageContext={pageContext} />

        <ReviewsSection />

        <SectorsSection pageContext={pageContext} disableLinks={true} />
        
        <FAQSection faqsOverride={homePageFaqs} />

        <ResourcesSection />

        <ContactFormSection />

        <FinalCTASection onSubmissionOpen={onOpen} />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
