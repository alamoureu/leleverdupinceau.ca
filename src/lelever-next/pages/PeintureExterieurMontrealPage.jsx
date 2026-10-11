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
  FaCalendarAlt,
  FaTools,
  FaPaintBrush,
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaHome,
  FaBuilding,
  FaTag,
  FaCouch,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import heroImg from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/header extérieure.jpg';
import plateauAvant from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau avant.jpg';
import plateauApres from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau après.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Peinture extérieure Montréal' },
];

const CHECKMARKS = [
  {
    icon: FaCalendarAlt,
    title: 'Saison extérieure courte et bien planifiée',
    text: 'À Montréal, la fenêtre utile est limitée. Le bon séquençage des travaux compte autant que l\'application elle-même.',
  },
  {
    icon: FaTools,
    title: 'Préparation adaptée au gel, au dégel et à l\'humidité',
    text: 'Les surfaces extérieures souffrent des variations de température, des infiltrations et de l\'usure. Rien ne tient sans une base solide.',
  },
  {
    icon: FaPaintBrush,
    title: 'Approche différente selon la façade et le matériau',
    text: 'Brique peinte, métal, bois, béton, escalier ou corniche : chaque surface demande une méthode précise.',
  },
  {
    icon: FaTruck,
    title: 'Gestion propre des accès et des zones serrées',
    text: 'Cour étroite, stationnement limité, voisinage rapproché, circulation sur trottoir : le chantier doit rester maîtrisé.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du paysagement, des fenêtres et des zones de passage',
    text: 'Les projections, poussières et éclats doivent être contrôlés pour garder un chantier net.',
  },
  {
    icon: FaStar,
    title: 'Finition visible et valorisante',
    text: 'À l\'extérieur, chaque détail se voit immédiatement. L\'objectif est autant la durabilité que l\'impact visuel en façade.',
  },
];

const CONTEXTES = [
  {
    icon: FaHome,
    title: 'Triplex, plex et escaliers extérieurs métalliques',
    text: 'Montréal est rempli d\'escaliers, garde-corps et structures visibles qui demandent une préparation rigoureuse, une protection propre et une finition durable.',
  },
  {
    icon: FaBuilding,
    title: 'Façades de brique, corniches et éléments architecturaux',
    text: 'Plusieurs bâtiments ont des détails de façade très exposés. Le chantier doit protéger l\'allure du bâtiment tout en assurant une tenue réelle dans le temps.',
  },
  {
    icon: FaHome,
    title: 'Maisons unifamiliales avec revêtement et cadrages',
    text: 'Le revêtement, les soffites, les cadrages et les portes doivent être harmonisés sans transformer le chantier en projet interminable.',
  },
  {
    icon: FaCouch,
    title: 'Balcons, galeries et zones de passage',
    text: 'Ces surfaces sont fortement sollicitées et très visibles. L\'adhérence, la préparation et le choix du bon fini sont décisifs.',
  },
  {
    icon: FaTag,
    title: 'Travaux avant vente ou rafraîchissement extérieur',
    text: 'Une façade ou un escalier extérieur bien repeint améliore immédiatement l\'impression générale de la propriété et la perception d\'entretien.',
  },
];

const FAQS = [
  {
    question: 'Quelle est la meilleure période pour faire de la peinture extérieure à Montréal\u00A0?',
    answer: 'En général, la meilleure période se situe entre le printemps avancé et le début de l\'automne, quand la température, l\'humidité et les précipitations permettent une bonne adhérence et un bon séchage.',
  },
  {
    question: 'Peignez-vous les escaliers extérieurs, garde-corps et balcons à Montréal\u00A0?',
    answer: 'Oui. Ce sont des projets fréquents. Ces surfaces demandent souvent une préparation plus poussée, surtout lorsqu\'elles sont très exposées ou fortement sollicitées.',
  },
  {
    question: 'Intervenez-vous sur des triplex, plex et façades montréalaises plus anciennes\u00A0?',
    answer: 'Oui. Nous adaptons la planification et la méthode selon le bâtiment, l\'accès, la hauteur, les matériaux et le niveau d\'usure visible sur la façade.',
  },
  {
    question: 'Comment gérez-vous les accès, les zones étroites et le voisinage rapproché\u00A0?',
    answer: 'Ces éléments font partie intégrante de la planification. L\'objectif est de garder un chantier propre, sécuritaire et fluide même dans des contextes urbains serrés.',
  },
  {
    question: 'Faites-vous aussi la teinture extérieure ou seulement la peinture\u00A0?',
    answer: 'Nous faisons les deux, selon la surface et le résultat recherché. La teinture extérieure a aussi sa propre page dédiée lorsqu\'il s\'agit surtout de bois, patios, clôtures ou pergolas.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture extérieure',
    description: 'Surfaces, matériaux, saisons et durabilité - la page technique complète.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Teinture extérieure',
    description: 'Protection du bois, patios, clôtures, pergolas et surfaces en bois.',
    to: '/services/teinture-exterieure',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Décapage, sablage, calfeutrage et remise en état avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos et logements - l\'ensemble de nos services résidentiels.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Nos secteurs desservis à Montréal',
    description: 'Plateau, Ville-Marie, Outremont, Westmount et Grand Montréal.',
    to: '/secteurs/montreal',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la finition extérieure.',
    to: '/realisations',
  },
];

export default function PeintureExterieurMontrealPage() {
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
        name: 'Peinture extérieure Montréal',
        item: 'https://leleverdupinceau.ca/peinture-exterieure-montreal',
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
    name: 'Peinture extérieure à Montréal',
    description: 'Service de peinture extérieure à Montréal pour façades, balcons, escaliers et revêtements. Équipe RBQ, chantier propre et soumission gratuite.',
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
      before: plateauAvant,
      after: plateauApres,
      description: 'Façade extérieure - Plateau Mont-Royal',
    },
];

  return (
    <Fragment>
      <SEOHead
        title="Peinture extérieure à Montréal | Façades, balcons et escaliers | Le Lever du Pinceau"
        description="Peinture extérieure pour le climat montréalais: façades, balcons, escaliers métalliques et revêtements. Saison courte, accès serrés. Licence RBQ. Soumission gratuite."
        canonicalPath="/peinture-exterieure-montreal"
        schemaArray={[breadcrumbSchema, faqSchema, serviceSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture extérieure Montréal'
          imageBackground={heroImg}
          imageAlt='Peinture extérieure à Montréal - façade, escalier et balcon bien repeints'
          overlayBg='rgba(0, 0, 0, 0.48)'
          title='Peinture extérieure à Montréal'
          subtitle='Façades, balcons et revêtements protégés pour le climat montréalais.'
          description='Saison courte, accès serrés et surfaces très exposées.'
          buttonText='Soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
          secondaryCta={{ label: 'Nos réalisations', to: '/realisations' }}
        />
{/* ===== SECTION 3 - CHECKMARKS EXTÉRIEUR MONTRÉAL ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une exécution pensée pour l'extérieur à Montréal"
          subtitle="Le climat, les matériaux et les contraintes urbaines changent complètement la manière de planifier un chantier extérieur."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPy={{ base: 10, md: 12, lg: 14 }}
        />

        {/* ===== SECTION 4 - CONTEXTES MONTRÉALAIS ===== */}
        <FeatureCardsSection
          title="Une approche différente selon le type de bâtiment à Montréal"
          subtitle="Un triplex à escaliers métalliques, une façade à Ville Mont-Royal ou une maison de rangée ne se peignent pas de la même façon."
          items={CONTEXTES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, md: 2, lg: 3 }}
        />

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets extérieurs à Montréal"
          subtitle="Des réalisations qui montrent la qualité du fini et la diversité des contextes urbains."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          title="Une finition qui tient, dans un contexte montréalais exigeant"
          body="À Montréal, la qualité d'un projet extérieur se juge autant sur l'adhérence et la tenue dans le temps que sur le rendu final."
          onCtaClick={onOpen}
          note="Réponse généralement en moins de 24h"
        />

        <FAQSection
          title="Questions fréquentes sur la peinture extérieure à Montréal"
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
          title={'Prêt à rafraîchir votre extérieur à Montréal\u00A0?'}
          subtitle="Obtenez une soumission gratuite pour votre projet de peinture extérieure à Montréal"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
