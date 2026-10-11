import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Link,
  Icon,
  HStack,
  SimpleGrid,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaBuilding,
  FaTruck,
  FaCalendarAlt,
  FaShieldAlt,
  FaStar,
  FaComments,
  FaHome,
  FaKey,
  FaTag,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import heroImg from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau après.jpg';
import griffintownAvant from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Griffintown avant.jpg';
import griffintownApres from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Griffintown après.JPG';
import plateauAvant from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau avant.jpg';
import plateauApres from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau après.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';
import FinalCTASection from '../home-page/FinalCTASection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Peinture intérieure Montréal' },
];

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Habitués aux condos, plex et maisons de quartier',
    text: 'Centre-ville, Plateau, Outremont, Ville-Marie ou Westmount : les contraintes ne sont pas les mêmes d\'un projet à l\'autre.',
  },
  {
    icon: FaTruck,
    title: 'Logistique simple en milieu urbain',
    text: 'Accès, stationnement, immeuble occupé, ascenseur, circulation du matériel : on planifie le chantier pour que tout se passe proprement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair pour les projets sensibles',
    text: 'Avant emménagement, avant vente, avant retour au bureau ou entre deux occupations : on comprend l\'importance du timing.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète des espaces habités',
    text: 'Dans un condo ou un appartement occupé, chaque pièce compte. Le chantier doit rester propre, structuré et rassurant.',
  },
  {
    icon: FaStar,
    title: 'Finition nette dans des espaces très visibles',
    text: 'En ville, les pièces sont souvent plus compactes et les détails sautent aux yeux. Le niveau de finition doit être impeccable.',
  },
  {
    icon: FaComments,
    title: 'Communication simple du début à la fin',
    text: 'Quand le projet se fait vite et dans un espace occupé, la clarté de communication compte autant que l\'exécution.',
  },
];

const CONTEXTES = [
  {
    icon: FaBuilding,
    title: 'Condo centre-ville ou tour résidentielle',
    text: 'Accès, ascenseur, stationnement limité, heures de travaux et espace compact : tout doit être coordonné proprement.',
  },
  {
    icon: FaHome,
    title: 'Plex, triplex et immeubles montréalais',
    text: 'Escaliers, circulation verticale, murs plus anciens, petites zones communes et voisinage rapproché demandent une exécution respectueuse et bien protégée.',
  },
  {
    icon: FaHome,
    title: 'Maison unifamiliale en quartier résidentiel',
    text: 'Les familles veulent un chantier rapide, propre et prévisible, sans que la maison soit désorganisée plus longtemps que nécessaire.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en marché',
    text: 'Peindre avant de vendre permet souvent de rendre l\'espace plus lumineux, propre et projetable pour les visites.',
  },
  {
    icon: FaKey,
    title: 'Travaux avant emménagement ou prise de possession',
    text: 'C\'est souvent la meilleure fenêtre pour peindre rapidement l\'intérieur avant de replacer les meubles et reprendre la routine.',
  },
];

const FAQS = [
  {
    question: 'Intervenez-vous dans quels quartiers de Montréal\u00A0?',
    answer: 'Oui. Nous desservons Montréal et plusieurs quartiers comme le Plateau Mont-Royal, Ville-Marie, Outremont, Westmount, Griffintown, Rosemont et d\'autres secteurs du Grand Montréal.',
  },
  {
    question: 'Faites-vous la peinture intérieure de condos à Montréal\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets en condo, y compris dans des immeubles occupés ou avec contraintes d\'accès. Nous adaptons le chantier aux règles de l\'immeuble et à l\'espace disponible.',
  },
  {
    question: 'Pouvez-vous peindre avant un emménagement ou une mise en marché\u00A0?',
    answer: 'Oui. C\'est l\'un des contextes les plus fréquents. Nous planifions les travaux pour que l\'espace soit prêt dans le bon délai, avant l\'arrivée des meubles ou des visites.',
  },
  {
    question: 'Comment gérez-vous l\'accès, le stationnement ou l\'ascenseur dans les immeubles montréalais\u00A0?',
    answer: 'Ces éléments sont intégrés à la planification du chantier. L\'objectif est de limiter les imprévus, protéger les zones de passage et garder une exécution fluide malgré les contraintes de l\'immeuble.',
  },
  {
    question: 'Faites-vous aussi la peinture d\'armoires, de condos et d\'appartements\u00A0?',
    answer: 'Oui. Selon le projet, nous pouvons aussi intervenir sur des armoires de cuisine, des condos et des appartements. Ces services ont aussi leurs pages dédiées dans le site.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Surfaces, finis, couches et préparation - la page technique complète.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos, logements et appartements à Montréal.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture condo',
    description: 'Projets spécialisés en condo : accès, contraintes et finition.',
    to: '/services/peinture-residentielle/condo',
  },
  {
    title: 'Peinture appartement',
    description: 'Remise en état locative, logement occupé ou rafraîchissement.',
    to: '/services/peinture-residentielle/appartement',
  },
  {
    title: 'Nos secteurs desservis à Montréal',
    description: 'Plateau, Ville-Marie, Outremont, Westmount et Grand Montréal.',
    to: '/secteurs/montreal',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la finition.',
    to: '/realisations',
  },
];

export default function PeintureInterieurMontrealPage() {
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
        name: 'Peinture intérieure Montréal',
        item: 'https://leleverdupinceau.ca/peinture-interieure-montreal',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Peinture intérieure à Montréal',
    description: 'Service de peinture intérieure à Montréal pour condos, plex et maisons. Chantier propre, finition impeccable, équipe RBQ.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Le Lever du Pinceau',
      url: 'https://leleverdupinceau.ca',
    },
    areaServed: {
      '@type': 'City',
      name: 'Montréal',
    },
  };

  const carouselImages = [
    {
      before: griffintownAvant,
      after: griffintownApres,
      description: 'Peinture intérieure - Condo Griffintown',
    },
    {
      before: plateauAvant,
      after: plateauApres,
      description: 'Rafraîchissement complet - Plateau Mont-Royal',
    },
];

  return (
    <Fragment>
      <SEOHead
        title="Peinture intérieure à Montréal | Condos, plex et maisons | Le Lever du Pinceau"
        description="Peinture intérieure adaptée aux bâtiments montréalais: condos, plex et maisons. Accès urbains, espaces occupés, finition nette. Licence RBQ. Soumission gratuite."
        canonicalPath="/peinture-interieure-montreal"
        schemaArray={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture intérieure Montréal'
          imageBackground={heroImg}
          imageAlt='Peinture intérieure à Montréal - condo lumineux et impeccable après travaux'
          overlayBg='rgba(0, 0, 0, 0.48)'
          title='Peinture intérieure à Montréal'
          subtitle='Projets propres et impeccables pour condos, plex et maisons.'
          description='Espaces occupés, accès urbains et finition soignée.'
          buttonText='Soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
          secondaryCta={{ label: 'Nos réalisations', to: '/realisations' }}
        />
{/* ===== SECTION 3 - CHECKMARKS HYPERLOCAUX ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une exécution pensée pour les réalités d'un projet intérieur à Montréal"
          subtitle="Le bon résultat ne dépend pas seulement de la peinture, mais aussi du contexte dans lequel le chantier se déroule."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPy={{ base: 10, md: 12, lg: 14 }}
        />

        {/* ===== SECTION 4 - CONTEXTES MONTRÉALAIS ===== */}
        <FeatureCardsSection
          title="Une approche différente selon le type de projet à Montréal"
          subtitle="Un condo à Griffintown, un plex à Rosemont ou une maison à Outremont ne se planifient pas de la même façon."
          items={CONTEXTES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, md: 2, lg: 3 }}
        />

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets intérieurs à Montréal"
          subtitle="Des réalisations qui montrent le niveau de finition, mais aussi la diversité des contextes locaux."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          title="Un résultat impeccable, sans mauvaise surprise"
          body="À Montréal comme ailleurs, un bon chantier intérieur ne se juge pas seulement à la couleur finale, mais à la propreté, au respect du délai et à la qualité de finition."
          onCtaClick={onOpen}
          note="Réponse généralement en moins de 24h"
        />

        <FAQSection
          title="Questions fréquentes sur la peinture intérieure à Montréal"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Explorer les pages liées à votre projet"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        />

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title={'Prêt à rafraîchir votre intérieur à Montréal\u00A0?'}
          subtitle="Obtenez une soumission gratuite pour votre projet de peinture intérieure à Montréal"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
