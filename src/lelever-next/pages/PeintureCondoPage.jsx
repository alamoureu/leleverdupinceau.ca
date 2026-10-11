import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaBuilding,
  FaShieldAlt,
  FaHome,
  FaBroom,
  FaCalendarAlt,
  FaStar,
  FaCouch,
  FaGavel,
  FaTag,
  FaKey,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import condoHeroImg from '../images/L3 Sous services/Photo page -peinture condo/header.jpg';
import condoImg7924 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7924 3.jpg';
import condoImg7922 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7922 2.jpg';
import condoImg7999 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7999 4.jpg';
import condoImg7997 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7997 4.jpg';
import condoImg8108 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_8108.jpg';
import condoImg6031 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_6031.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Coordination simple avec les règles de l\'immeuble',
    text: 'Heures permises, accès, réservation d\'ascenseur, stationnement de service ou consignes du syndicat : on planifie le chantier pour respecter le cadre de la copropriété.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection des parties communes et du trajet de chantier',
    text: 'Entrées, corridors, ascenseur et zones de passage sont protégés et respectés pour réduire les plaintes, les traces et les irritants.',
  },
  {
    icon: FaHome,
    title: 'Travaux adaptés à un espace occupé',
    text: 'En condo, l\'espace est souvent compact et chaque pièce compte. On séquence les travaux pour limiter l\'encombrement et préserver le confort au quotidien.',
  },
  {
    icon: FaBroom,
    title: 'Gestion propre des matériaux et du bruit',
    text: 'Transport du matériel, protections, contenants, circulation et nettoyage sont gérés avec discipline dans un environnement où tout se voit rapidement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair malgré les contraintes d\'immeuble',
    text: 'On tient compte des règles du bâtiment pour proposer un plan réaliste, sans improvisation de dernière minute.',
  },
  {
    icon: FaStar,
    title: 'Résultat net dans un espace très visible',
    text: 'Dans un condo, les finitions se remarquent tout de suite. L\'objectif est un résultat propre, lumineux et soigné dans un espace souvent plus exposé à la lumière.',
  },
];

const SITUATIONS = [
  {
    icon: FaCouch,
    title: 'Condo occupé au quotidien',
    text: 'Quand vous vivez sur place pendant les travaux, la priorité est d\'organiser le chantier pièce par pièce, avec un niveau de propreté et de coordination qui vous permet de continuer à utiliser votre espace.',
  },
  {
    icon: FaGavel,
    title: 'Condo avec règles strictes de copropriété',
    text: 'Certaines tours et copropriétés imposent des heures de travail, une réservation d\'ascenseur, des zones protégées ou des avis préalables. Nous adaptons le chantier à ces contraintes dès le départ.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant vente',
    text: 'Un condo fraîchement peint paraît plus propre, plus lumineux et plus facile à projeter pour un acheteur. L\'objectif est une mise à niveau rapide, propre et visuellement forte.',
  },
  {
    icon: FaKey,
    title: 'Condo avant emménagement',
    text: 'Quand les clés sont obtenues mais que l\'installation n\'est pas faite, c\'est souvent le meilleur moment pour peindre efficacement, sans contourner le mobilier et sans prolonger l\'inconfort.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Condo avec accès ou circulation complexes',
    text: 'Centre-ville, tour avec monte-charge, stationnement restreint, étages élevés ou long trajet intérieur : la logistique change le chantier. On l\'intègre au plan au lieu de l\'improviser.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous pouvez travailler dans un immeuble avec des règles strictes\u00A0?',
    answer: 'Oui. Nous nous adaptons aux consignes de la copropriété : plages horaires autorisées, réservation d\'ascenseur, accès, circulation et protection des zones communes.',
  },
  {
    question: 'Est-ce que je peux rester dans mon condo pendant les travaux\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous planifions les travaux pour limiter l\'impact sur votre quotidien et garder l\'espace le plus fonctionnel possible pendant le chantier.',
  },
  {
    question: 'Comment protégez-vous les corridors, l\'ascenseur et les parties communes\u00A0?',
    answer: 'Nous transportons le matériel proprement, protégeons le trajet de chantier au besoin et travaillons de manière ordonnée pour limiter les marques, les salissures et les irritants.',
  },
  {
    question: 'Combien de temps faut-il pour peindre un condo\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Une soumission permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Pouvez-vous peindre un condo avant une mise en vente ou avant mon emménagement\u00A0?',
    answer: 'Oui. Ce sont souvent deux des meilleurs moments pour intervenir rapidement et efficacement, avec moins de contraintes et un impact visuel immédiat.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture résidentielle',
    description: 'Page parente - maisons, condos, logements et multi-étages.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture intérieure',
    description: 'Complément technique : surfaces, finis, couches et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale - intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Voir nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité de finition.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureCondoPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://leleverdupinceau.ca/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Peinture résidentielle',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Peinture de condo',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle/condo',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const carouselImages = [
    {
      before: condoImg7924,
      after: condoImg7922,
      description: 'Salon - Condo Griffintown, Montréal',
    },
    {
      before: condoImg7999,
      after: condoImg7997,
      description: 'Rafraîchissement intérieur - Condo Montréal',
    },
    {
      before: condoImg8108,
      after: condoImg6031,
      description: 'Rénovation avant vente - Condo',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture de condo à Montréal | Chantier propre et coordonné | Le Lever du Pinceau"
        description="Peinture de condo à Montréal. Chantier propre, coordination avec la copropriété, protection des parties communes et échéancier clair. Soumission gratuite."
        canonicalPath="/services/peinture-residentielle/condo"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        {/* ===== SECTION 1 - HERO ===== */}
        <Box
          position="relative"
          w="100%"
          minW={0}
          minH={{ base: '320px', sm: '350px', md: 'max(440px, 52vh)', lg: 'max(480px, 55vh)', xl: 'max(580px, 75vh)' }}
          pb={{ base: 10, sm: 12, md: 14, lg: 16 }}
          bgColor="gray.700"
          overflow="visible"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10 }}
        >
          <Image
            src={condoHeroImg}
            alt="Peinture de condo à Montréal - intérieur lumineux et soigné"
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            zIndex={0}
            loading="eager"
            fetchpriority="high"
            decoding="async"
            htmlWidth={1600}
            htmlHeight={1067}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.45)"
            zIndex={1}
          />
          <Container
            maxW="1440px"
            h="100%"
            position="relative"
            zIndex={2}
            px={{ base: 4, sm: 4, md: 6, lg: 8 }}
            minW={0}
          >
            <Stack
              h="100%"
              minW={0}
              pt={{ base: '62px', sm: '62px', md: '120px', lg: '120px', xl: '140px' }}
            >
              <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6 }} minW={0}>
                <HStack spacing={2} fontSize={{ base: 'sm', md: 'md' }} flexWrap="wrap" layerStyle="clearReviewBadge">
                  <Link
                    as={RouterLink}
                    to="/"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Accueil
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Link
                    as={RouterLink}
                    to="/services"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Services
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Link
                    as={RouterLink}
                    to="/services/peinture-residentielle"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Peinture résidentielle
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Condo
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Peinture de condo à Montréal
                </Heading>

                <Text
                  variant="heroSubtitle"
                  color="white"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                >
                  Chantier propre et bien coordonné, adapté à la copropriété.
                </Text>

                <Box pt={{ base: 2, md: 3 }}>
                  <Button
                    variant="cta"
                    size={{ base: 'md', md: 'lg' }}
                    rightIcon={<ArrowForwardIcon />}
                    onClick={onOpen}
                    borderRadius="full"
                    px={{ base: 6, md: 8 }}
                    fontWeight="600"
                  >
                    Obtenir ma soumission gratuite
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <TrustBanner />

        <FeatureCardsSection
          title="Une exécution pensée pour la réalité d'un condo"
          subtitle="Dans un immeuble occupé, la qualité du chantier se joue autant dans la coordination que dans la finition."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        <FeatureCardsSection
          title="Une approche différente selon la réalité du condo"
          subtitle="Un condo occupé, un condo à vendre ou un condo avant emménagement ne se planifient pas de la même façon."
          items={SITUATIONS}
          variant="stacked"
          sectionBg="gray.50"
        />

        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets en condo"
          subtitle="Finitions soignées, espaces lumineux et chantiers propres dans des condos montréalais."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        <ServiceGuaranteeSection
          title="Un projet de condo bien géré évite beaucoup de friction"
          body="En copropriété, la qualité d'un chantier ne se mesure pas seulement à la finition finale. Elle se mesure aussi à la propreté, à la coordination, au respect des consignes de l'immeuble et à la simplicité de l'expérience pour vous. Notre approche vise justement à rendre le projet fluide, propre et prévisible du début à la fin."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture de condo"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
        />

        <InternalLinksSection
          title="En savoir plus"
          links={INTERNAL_LINKS}
        />

        <FinalCTASection
          title={"Besoin d'un chantier propre et bien coordonné dans votre condo\u00A0?"}
          subtitle="Obtenez votre soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
