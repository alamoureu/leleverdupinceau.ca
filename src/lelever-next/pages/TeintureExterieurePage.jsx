import React, { Fragment } from 'react';
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
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaLeaf,
  FaSun,
  FaEye,
  FaClock,
  FaSyncAlt,
  FaShieldAlt,
  FaTree,
  FaBorderAll,
  FaHome,
  FaArchway,
  FaLayerGroup,
  FaCouch,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import { servicePageSchema } from '../components/ServicePageSections';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import teintureHeroImg from '../images/L2 Services specialise/Photo page teinture/Header.webp';
import teintureImg5973 from '../images/L2 Services specialise/Photo page teinture/Avant après/IMG_5973.webp';
import teintureImg5974 from '../images/L2 Services specialise/Photo page teinture/Avant après/IMG_5974.webp';
import escalierAvant from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, escalier de balcon avant.webp';
import escalierApres from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, escalier de balcon après.webp';
import clotureAvant from '../images/3-ville/Montréal/avant-apres/IMG_1405.webp';
import clotureApres from '../images/3-ville/Montréal/avant-apres/IMG_1406.webp';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Teinture extérieure' },
];

const CHECKMARKS = [
  {
    icon: FaLeaf,
    title: 'Préparation du bois avant application',
    text: 'Nettoyage, sablage léger, retrait des résidus, séchage complet : une teinture tient bien seulement si le bois est prêt à la recevoir.',
  },
  {
    icon: FaSun,
    title: 'Le bon produit selon l\'exposition',
    text: 'Un patio plein soleil, une clôture à l\'ombre ou un revêtement exposé à la pluie ne demandent pas la même finition ni la même protection.',
  },
  {
    icon: FaEye,
    title: 'Respect du grain et de l\'apparence naturelle',
    text: 'La teinture met en valeur le bois au lieu de le masquer. Le choix du bon niveau d\'opacité change tout sur le résultat final.',
  },
  {
    icon: FaClock,
    title: 'Application au bon moment de la saison',
    text: 'Température, humidité, pluie annoncée et temps de séchage influencent directement la tenue du produit.',
  },
  {
    icon: FaSyncAlt,
    title: 'Entretien plus simple à long terme',
    text: 'Une teinture bien choisie et bien appliquée s\'entretient plus facilement qu\'une finition ratée qui pèle ou s\'use de façon inégale.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection propre du chantier',
    text: 'Protection des surfaces voisines, du paysagement et des éléments non teints. Nettoyage complet à la fin du chantier.',
  },
];

const SPECIALITES = [
  {
    icon: FaTree,
    title: 'Patio / terrasse en bois',
    text: 'Protection contre les UV, l\'eau, l\'usure et les passages fréquents. Prévoir une finition adaptée au niveau d\'exposition.',
  },
  {
    icon: FaBorderAll,
    title: 'Clôture en bois',
    text: 'Uniformité visuelle, protection contre le grisaillement et durabilité face aux intempéries.',
  },
  {
    icon: FaHome,
    title: 'Revêtement extérieur en bois',
    text: 'Teinture adaptée au parement bois pour protéger sans emprisonner l\'humidité inutilement.',
  },
  {
    icon: FaArchway,
    title: 'Pergola, gazebo et structures décoratives',
    text: 'Finition plus soignée sur des éléments visibles qui influencent l\'apparence générale de la cour.',
  },
  {
    icon: FaLayerGroup,
    title: 'Marches, rampes et garde-corps en bois',
    text: 'Usure localisée et sécurité : l\'application doit tenir compte des zones de frottement et des surfaces touchées fréquemment.',
  },
  {
    icon: FaCouch,
    title: 'Mobilier extérieur ou boiseries ponctuelles',
    text: 'Teinture sur mesure pour les éléments bois secondaires - cadres, boiseries décoratives ou mobilier extérieur en bois.',
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre peinture et teinture extérieure\u00A0?',
    answer: 'La peinture forme généralement un film en surface, alors que la teinture pénètre davantage le bois et laisse plus ou moins apparaître son grain selon l\'opacité choisie.',
  },
  {
    question: 'À quelle fréquence faut-il reteindre un patio ou une clôture\u00A0?',
    answer: 'Cela dépend surtout du niveau d\'exposition au soleil, à la pluie et à l\'usure. Certaines surfaces demandent un entretien plus fréquent que d\'autres.',
  },
  {
    question: 'Faut-il sabler ou préparer le bois avant de teindre\u00A0?',
    answer: 'Oui, dans la majorité des cas. Une bonne préparation améliore l\'adhérence, l\'uniformité du résultat et la durée de vie de la finition.',
  },
  {
    question: 'Quelle teinture choisir : transparente, semi-transparente ou opaque\u00A0?',
    answer: 'Le bon choix dépend du look recherché, de l\'état du bois et du niveau de protection souhaité. Toutes ne donnent pas le même rendu ni le même cycle d\'entretien.',
  },
  {
    question: 'Peut-on teindre du bois déjà traité ou déjà fini\u00A0?',
    answer: 'Souvent oui, mais il faut d\'abord vérifier l\'état de la surface, le produit déjà en place et la préparation nécessaire avant d\'appliquer une nouvelle teinture.',
  },
  {
    question: 'Que se passe-t-il s\'il pleut trop vite après l\'application\u00A0?',
    answer: 'La pluie, l\'humidité et une mauvaise fenêtre météo peuvent affecter le séchage et le résultat. C\'est pourquoi le bon moment d\'application est aussi important que le produit lui-même.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture extérieure',
    description: 'Service technique extérieur global pour tous types de matériaux.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Décapage, sablage, réparation et remise en état avant finition.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
];

export default function TeintureExterieurePage() {
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
        name: 'Teinture extérieure',
        item: 'https://leleverdupinceau.ca/services/teinture-exterieure',
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
      before: teintureImg5973,
      after: teintureImg5974,
      description: 'Terrasse en bois - teinture et protection',
    },
    {
      before: escalierAvant,
      after: escalierApres,
      description: 'Teinture d\'un escalier extérieur en bois - avant / après',
    },
    {
      before: clotureAvant,
      after: clotureApres,
      description: 'Teinture d\'une clôture en bois - avant / après',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Teinture extérieure à Montréal | Patio, clôture et bois | Le Lever du Pinceau"
        description="Service de teinture extérieure à Montréal pour patio, clôture, revêtement et autres surfaces en bois. Protection durable, préparation soignée et soumission gratuite."
        canonicalPath="/services/teinture-exterieure"
        schemaArray={[
          breadcrumbSchema,
          faqSchema,
          servicePageSchema({
            name: 'Teinture extérieure à Montréal',
            path: '/services/teinture-exterieure',
            description:
              'Service de teinture extérieure à Montréal pour patio, clôture, revêtement et autres surfaces en bois. Protection durable, préparation soignée et soumission gratuite.',
            serviceType: 'Teinture extérieure',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Teinture extérieure'
          imageBackground={teintureHeroImg}
          imageAlt='Teinture extérieure bois à Montréal - patio, clôture et revêtement'
          overlayBg='rgba(0, 0, 0, 0.45)'
          title='Teinture extérieure à Montréal'
          subtitle='Patio · Clôture · Revêtement bois'
          description="Protégez et ravivez vos surfaces en bois avec une finition adaptée au climat québécois et à l'exposition réelle de votre propriété."
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Pourquoi confier votre teinture extérieure à des professionnels?"
          subtitle="Un bon produit ne suffit pas : le résultat dépend surtout de la préparation, du choix de finition et des conditions d'application."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPy={{ base: 10, md: 12, lg: 14 }}
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS BOIS ===== */}
        <FeatureCardsSection
          title="Les surfaces extérieures en bois que nous teintons le plus souvent"
          subtitle="Chaque surface a ses particularités : niveau d'exposition, type de bois, usure et fréquence d'entretien varient d'un projet à l'autre."
          items={SPECIALITES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, md: 2, lg: 3 }}
        />

        <ContactFormSection sectionPaddingTop={{ base: 12, md: 16 }} sectionPaddingBottom={0} />

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Des surfaces en bois ravivées et mieux protégées"
          subtitle="Quelques projets récents de teinture extérieure à Montréal et dans les environs."
          images={carouselImages}
          sectionPaddingTop={{ base: 10, md: 12 }}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />

        {/* ===== SECTION 6 - GARANTIE / ENGAGEMENT ===== */}
        <ServiceGuaranteeSection
          title="Une teinture appliquée avec méthode, pas à la va-vite"
          body="La tenue d'une teinture extérieure dépend autant de la préparation et des conditions d'application que du produit choisi. Nous évaluons l'état du bois, le niveau d'exposition et la bonne fenêtre météo avant d'intervenir pour livrer un résultat propre, durable et cohérent avec votre surface."
        />

        <FAQSection
          title="Questions fréquentes sur la teinture extérieure"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="En savoir plus sur nos services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        />

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title="Prêt à protéger vos surfaces en bois pour la saison?"
          subtitle="Obtenez votre soumission gratuite en moins de 24 h et réservez votre créneau au bon moment de la saison."
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
