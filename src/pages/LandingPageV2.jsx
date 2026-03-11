import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, useDisclosure, Stack, Text } from '@chakra-ui/react';
import appContext from '../AppProvider';
import HeroSection from '../lelever-next/home-page/HeroSection';
import ControlSection from '../lelever-next/home-page/ControlSection';
import MethodSection from '../lelever-next/home-page/MethodSection';
import ReviewsSection from '../lelever-next/home-page/ReviewsSection';
import FAQSection from '../lelever-next/home-page/FAQSection';
import FinalCTASection from '../lelever-next/home-page/FinalCTASection';
import SubmissionForm from '../lelever-next/home-page/SubmissionForm';
import SubmissionModal from '../components/SubmissionModal';
import { useTranslation } from '../lelever-next/i18n';
import GuaranteeSection from '../lelever-next/home-page/GuaranteeSection';
import BeforeAfterCarouselSection from '../lelever-next/home-page/BeforeAfterCarouselSection';
import beforeKitchenReplacement from '../lelever-next/images/IMG_7678.PNG';
import afterKitchenReplacement from '../lelever-next/images/IMG_5873.PNG';
import guaranteeBadgeOverride from '../lelever-next/images/IMG_2574\ (1).PNG';

const META = {
  fr: {
    title: 'Entreprise de Peinture à Montréal | Le Lever du Pinceau',
    description:
      "Découvrez les meilleurs services de peinture intérieure et extérieure à Montréal avec Le Lever du Pinceau. Travail professionnel, matériaux de qualité et prix compétitifs. Demandez votre soumission gratuite dès aujourd'hui.",
    keywords:
      'Peinture intérieure Montréal, Peinture extérieure Montréal, Services de peinture résidentielle, Peintres professionnels, Devis peinture Montréal',
  },
  en: {
    title: 'Painting Company Montreal | Le Lever du Pinceau',
    description:
      'Discover the best interior and exterior painting services in Montreal with Le Lever du Pinceau. Professional work, quality materials and competitive prices. Request your free quote today.',
    keywords:
      'Interior painting Montreal, Exterior painting Montreal, Residential painting services, Professional painters, Painting quote Montreal',
  },
};

const CANONICAL_BASE = 'https://www.leleverdupinceau.ca';

function LandingPageV2({ lang: langProp = undefined, indexable = false } = {}) {
  const { currentLang, setCurrentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();
  const [isFormSuccess, setIsFormSuccess] = useState(false);

  // Use route lang when provided (/fr/peintre-montreal or /en/peintre-montreal) so EN page displays in English
  const lang = (langProp != null && langProp !== '' ? langProp : currentLang) || 'fr';
  const isFr = lang === 'fr';
  const pageContext = t.pageContextName ?? (isFr ? 'Accueil' : 'Home');

  // Sync app language to route so HeroSection, ControlSection, etc. (useTranslation) show correct language
  useEffect(() => {
    if (langProp != null && langProp !== '' && currentLang !== langProp) {
      setCurrentLang(langProp);
    }
  }, [langProp, currentLang, setCurrentLang]);

  const meta = META[lang] || META.fr;

  const landingFaqs = [
    {
      question: isFr ? 'Combien coûte un peintre professionnel à Montréal?' : 'How much does a professional painter cost in Montreal?',
      answer: isFr
        ? "Le coût dépend de la superficie, de l'état des surfaces et du nombre de couches. En moyenne, pour un projet résidentiel standard, comptez entre 1$ et 3$ par pied carré."
        : "The cost depends on the area, surface condition, and number of coats. On average, expect between $1 and $3 per square foot for a standard residential project.",
    },
    {
      question: isFr ? 'Offrez-vous une garantie sur vos travaux?' : 'Do you offer a guarantee on your work?',
      answer: isFr
        ? 'Oui. Nous offrons une garantie satisfaction à 100%. Si le résultat ne répond pas à vos attentes, nous corrigeons le tout sans frais supplémentaires.'
        : "Yes. We offer a 100% satisfaction guarantee. If the result doesn't meet your expectations, we will correct it at no additional cost.",
    },
    {
      question: isFr ? 'Quel est le délai pour obtenir une soumission?' : 'What is the turnaround time for a quote?',
      answer: isFr
        ? "Nous répondons généralement sous 24 heures. Après avoir pris connaissance de votre projet, nous planifions une visite sur place pour évaluer les surfaces, la préparation nécessaire et établir une soumission détaillée et transparente. Notre équipe est réactive et s'adapte à vos disponibilités pour accélérer le processus."
        : 'We generally respond within 24 hours. After learning about your project, we schedule an on-site visit to assess surfaces, necessary preparation, and establish a detailed and transparent quote. Our team is responsive and adapts to your schedule to speed up the process.',
    },
    {
      question: isFr ? 'Est-ce que vos peintres sont licenciés RBQ?' : 'Are your painters RBQ licensed?',
      answer: isFr
        ? 'Oui. Le Lever du Pinceau détient la licence RBQ #5864-1481-01 et une assurance responsabilité de 5 millions de dollars. Tous nos peintres ont plus de 10 ans d’expérience.'
        : 'Yes. Le Lever du Pinceau holds RBQ license #5864-1481-01 and $5M liability insurance. All our painters have over 10 years of experience.',
    },
    {
      question: isFr ? 'Est-ce que vous protégez les surfaces avant de peindre ?' : 'Do you protect surfaces before painting?',
      answer: isFr
        ? 'Oui, absolument. La protection fait partie intégrante de notre processus professionnel. Nous couvrons systématiquement les planchers avec des toiles protectrices, protégeons tous les meubles et objets, masquons les cadres de portes et fenêtres, et utilisons du ruban de masquage de qualité professionnelle pour garantir des lignes nettes. Nous nettoyons également entièrement après chaque journée de travail pour vous laisser un espace propre et protégé.'
        : 'Yes, absolutely. Protection is an integral part of our professional process. We systematically cover floors with protective cloths, protect all furniture and objects, mask door and window frames, and use professional-quality masking tape to ensure clean lines. We also thoroughly clean up after each workday to leave you with a clean and protected space.',
    },
    {
      question: isFr ? "Quelle est la durée typique d'un projet de peinture?" : 'What is the typical duration of a painting project?',
      answer: isFr
        ? "La durée varie selon l'ampleur du projet. Pour une pièce standard (chambre ou salon), comptez 1 à 2 jours. Un appartement complet (3-4 pièces) prend généralement 3 à 5 jours. Une maison complète peut nécessiter 1 à 2 semaines selon la superficie. Les projets commerciaux sont planifiés selon vos contraintes opérationnelles. Nous vous fournirons un échéancier précis lors de la soumission."
        : 'Duration varies depending on project scope. For a standard room (bedroom or living room), expect 1 to 2 days. A complete apartment (3-4 rooms) generally takes 3 to 5 days. A complete house may require 1 to 2 weeks depending on size. Commercial projects are scheduled according to your operational constraints. We will provide you with a precise timeline when quoting.',
    },
    {
      question: isFr ? 'Utilisez-vous des peintures écologiques et sans odeur ?' : 'Do you use eco-friendly and low-odor paints?',
      answer: isFr
        ? "Oui, nous proposons une gamme complète de peintures écologiques à faible émission de COV (composés organiques volatils). Ces produits sont idéaux pour les chambres d'enfants, les personnes sensibles aux odeurs, et les espaces commerciaux qui doivent rester opérationnels. Nous travaillons avec des marques réputées comme Bétonel Dulux, en utilisant notamment les gammes VIP, Diamond et Lifemaster, reconnues pour leur durabilité, leur excellente couvrance et leurs faibles émissions de COV. Nous vous conseillerons sur le meilleur choix selon votre projet et votre budget."
        : "Yes, we offer a complete range of eco-friendly low-VOC (volatile organic compounds) paints. These products are ideal for children's rooms, people sensitive to odors, and commercial spaces that need to remain operational. We work with reputable brands such as Bétonel Dulux, using in particular the VIP, Diamond and Lifemaster ranges, known for their durability, excellent coverage and low VOC emissions. We will advise you on the best choice based on your project and budget.",
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <html lang={lang} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        {indexable && (
          <link
            rel="canonical"
            href={`${CANONICAL_BASE}/${lang}/peintre-montreal`}
          />
        )}
        {!indexable && <meta name="robots" content="noindex, nofollow" />}
        {!indexable && <meta name="googlebot" content="noindex, nofollow" />}
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
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden" position="relative">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={pageContext}
          title={isFr ? 'Redonnez vie à votre\nmaison sans lever le petit doigt' : undefined}
          titleSecondLine={isFr ? '' : undefined}
          subtitle={isFr ? 'Un service rapide, propre et garanti à Montréal' : undefined}
          buttonText={isFr ? 'Obtenir ma soumission en 24h' : undefined}
          titleFontWeight={isFr ? 600 : undefined}
          titleFontSize={
            isFr
              ? { base: 'xl', sm: '2xl', md: '3xl', lg: '4xl', xl: '4xl' }
              : undefined
          }
          contentMaxW={
            isFr
              ? { base: '100%', sm: '560px', md: '640px', lg: '720px' }
              : undefined
          }
          contentPr={isFr ? { base: 0, sm: 0, md: 24, lg: 28 } : undefined}
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

        <MethodSection onSubmissionOpen={onOpen} hideCta />

        <Stack
          pt={{ base: 4, sm: 6, md: 8, lg: 10 }}
          pb={{ base: 8, sm: 10, md: 12, lg: 14 }}
          align="center"
          px={{ base: 3, sm: 4, md: 6, lg: 8 }}
        >
          <Box
            w="100%"
            maxW={{
              base: '100%',
              sm: '520px',
              md: '720px',
              lg: '900px',
              xl: '960px',
              '2xl': '1000px',
            }}
          >
            {!isFormSuccess && (
              <Text
                as="h2"
                id="submission-form-title"
                fontSize={{
                  base: 'lg',
                  sm: 'xl',
                  md: '2xl',
                  lg: '3xl',
                  xl: '4xl',
                  '2xl': '4xl',
                }}
                fontWeight="bold"
                color="gray.900"
                textAlign="center"
                pb={1}
                textTransform="uppercase"
              >
                {t.contactFormTitle}
              </Text>
            )}
            {!isFormSuccess && (
              <Text
                textAlign="center"
                color="gray.600"
                fontSize={{ base: 'sm', md: 'lg' }}
                fontWeight="medium"
                pb={2}
              >
                en moins de 24h
              </Text>
            )}
            <Box
              px={{ base: 0, sm: 0, md: 0 }}
              py={{ base: 0, sm: 0, md: 0 }}
            >
              <SubmissionForm
                onSubmissionStateChange={setIsFormSuccess}
                fields={{
                  name: true,
                  phone: true,
                  email: true,
                  address: false,
                  paintingType: false,
                  projectDetails: 'optional',
                }}
                phoneFirst
                projectDetailsLabel={isFr ? 'Description du projet' : 'Project description'}
              />
            </Box>
          </Box>
        </Stack>

        <ReviewsSection
          hideButton
          title={isFr ? 'Ce que nos clients disent de nous' : undefined}
          subtitle={isFr ? 'Plus de 100 avis 5 étoiles sur Google' : undefined}
        />

        <BeforeAfterCarouselSection
          isFr={isFr}
          kitchenPairOverride={{ before: beforeKitchenReplacement, after: afterKitchenReplacement }}
        />

        <FAQSection faqsOverride={landingFaqs} />

        <FinalCTASection onSubmissionOpen={onOpen} />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}

export default LandingPageV2;
