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
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaTools,
  FaStar,
  FaCalendarAlt,
  FaCog,
  FaShieldAlt,
  FaTag,
  FaHistory,
  FaPaintBrush,
  FaThLarge,
  FaWrench,
  FaKey,
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

import armoiresHeroImg from '../images/L3 Sous services/Photo page armoires de cuisine/header-IMG_1429.jpg';
import armoiresImg5975 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5975.PNG';
import armoiresImg5976 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5976.PNG';
import armoiresImg8114 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8114.PNG';
import armoiresImg8120 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8120.PNG';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture intérieure', to: '/services/peinture-interieure' },
  { label: 'Armoires de cuisine' },
];

const CHECKMARKS = [
  {
    icon: FaTools,
    title: 'Préparation fine des surfaces visibles',
    text: 'Nettoyage, dégraissage, ponçage et correction légère pour éviter que le fini révèle les défauts une fois la lumière sur les portes.',
  },
  {
    icon: FaStar,
    title: 'Fini uniforme sur portes, façades et moulures',
    text: 'L\'objectif est d\'obtenir une lecture visuelle cohérente d\'un élément à l\'autre, sans différences de texture ni traces évidentes.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Séquence de travail structurée',
    text: 'Démontage, identification, préparation, application, séchage et remontage : chaque étape compte pour garder un résultat propre et logique.',
  },
  {
    icon: FaCog,
    title: 'Produits adaptés aux surfaces sollicitées',
    text: 'Les armoires subissent humidité, frottement, nettoyage fréquent et manipulations quotidiennes. Le système choisi doit suivre cette réalité.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du reste de la cuisine',
    text: 'Comptoirs, électroménagers, planchers, dosserets et circulation sont protégés pour que la transformation reste propre du début à la fin.',
  },
  {
    icon: FaTag,
    title: 'Résultat plus rentable que le remplacement complet',
    text: 'Quand les armoires sont encore bonnes structurellement, la transformation du fini permet souvent un très grand impact visuel pour un coût mieux contrôlé.',
  },
];

const SITUATIONS = [
  {
    icon: FaHistory,
    title: 'Armoires à mettre au goût du jour',
    text: 'Quand la cuisine est fonctionnelle mais visuellement datée, la peinture permet une transformation majeure sans démolition complète.',
  },
  {
    icon: FaPaintBrush,
    title: 'Portes et façades moulurées',
    text: 'Les profils, rainures et reliefs exigent une préparation et une application plus minutieuses pour éviter les surcharges et garder des lignes propres.',
  },
  {
    icon: FaThLarge,
    title: 'Caissons visibles et panneaux latéraux',
    text: 'Le résultat doit rester cohérent entre les éléments principaux et les surfaces visibles secondaires pour que la cuisine paraisse vraiment refaite.',
  },
  {
    icon: FaWrench,
    title: 'Armoires avec traces d\'usure ou jaunissement',
    text: 'Graisse, frottement, brillances inégales, coins usés et zones fatiguées demandent une remise en état plus sérieuse avant finition.',
  },
  {
    icon: FaKey,
    title: 'Projet de rafraîchissement avant vente ou location',
    text: 'Quand on veut moderniser rapidement une cuisine sans remplacement complet, la peinture d\'armoires peut créer un gain visuel immédiat.',
  },
];

const FAQS = [
  {
    question: 'Combien de temps dure un projet de peinture d\'armoires de cuisine\u00A0?',
    answer: 'La durée dépend du nombre de portes, de l\'état des surfaces et du niveau de préparation requis. Un projet complet prend généralement plusieurs jours, car la qualité du fini dépend beaucoup de la préparation, des temps de séchage et d\'un remontage propre.',
  },
  {
    question: 'Faut-il remplacer les armoires ou peut-on vraiment les repeindre\u00A0?',
    answer: 'Si les armoires sont encore solides, la peinture est souvent une excellente option. Elle permet de transformer l\'apparence de la cuisine à moindre coût que le remplacement, tout en conservant les caissons et la structure existante.',
  },
  {
    question: 'Est-ce que vous démontez les portes et les poignées\u00A0?',
    answer: 'Oui. Pour obtenir un résultat plus uniforme et plus propre, les portes, façades et quincailleries sont généralement démontées, identifiées puis remises en place à la fin du processus.',
  },
  {
    question: 'Quel type de fini recommandez-vous pour des armoires de cuisine\u00A0?',
    answer: 'Le bon fini dépend du style recherché et de l\'usage de la cuisine, mais on privilégie toujours une solution durable, lavable et adaptée à une surface souvent manipulée et nettoyée.',
  },
  {
    question: 'Peut-on continuer à utiliser la cuisine pendant les travaux\u00A0?',
    answer: 'Cela dépend de l\'ampleur du projet, mais l\'objectif est toujours de limiter l\'impact sur votre quotidien. La planification du chantier est pensée pour garder le processus aussi propre et gérable que possible.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Page parente - murs, plafonds, boiseries, finis et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Ponçage, correction, enduit et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
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
];

export default function PeintureArmoiresCuisinePage() {
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
        name: 'Peinture intérieure',
        item: 'https://leleverdupinceau.ca/services/peinture-interieure',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Peinture d\'armoires de cuisine',
        item: 'https://leleverdupinceau.ca/services/peinture-interieure/armoires-de-cuisine',
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
      before: armoiresImg5975,
      after: armoiresImg5976,
      description: 'Peinture armoires cuisine Montréal avant / après',
    },
    {
      before: armoiresImg8114,
      after: armoiresImg8120,
      description: 'Transformation armoires cuisine - avant / après Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture d'armoires de cuisine à Montréal | Service pro | Le Lever du Pinceau"
        description="Service professionnel de peinture d'armoires à Montréal: portes, façades et caissons visibles. Fini uniforme, chantier protégé. Soumission gratuite."
        canonicalPath="/services/peinture-interieure/armoires-de-cuisine"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Armoires de cuisine'
          imageBackground={armoiresHeroImg}
          imageAlt='Peinture armoires cuisine Montréal - transformation fini net et uniforme'
          overlayBg='rgba(0, 0, 0, 0.45)'
          title="Peinture d'armoires de cuisine à Montréal"
          subtitle='Transformez-les sans les remplacer - fini net et durable.'
          description='Portes, façades et caissons visibles - rendu uniforme.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS TRANSFORMATION D'ARMOIRES ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Des armoires transformées, sans compromis sur le fini"
          subtitle="Le vrai défi n'est pas de couvrir la surface, mais d'obtenir un rendu uniforme, durable et propre."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPy={{ base: 10, md: 12, lg: 14 }}
        />

        {/* ===== SECTION 4 - TYPES D'INTERVENTIONS ===== */}
        <FeatureCardsSection
          title="Une approche différente selon l'état, le matériau et le résultat recherché"
          subtitle="On ne traite pas une cuisine d'origine, une mélamine fatiguée ou des portes moulurées de la même façon."
          items={SITUATIONS}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, md: 2, lg: 3 }}
        />

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de cuisines transformées"
          subtitle="Portes jaunies, style daté, finis irréguliers - le gain visuel est immédiat avec un fini propre et uniforme."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          title="Un projet minutieux du démontage au remontage"
          body="La peinture d'armoires de cuisine est un projet qui demande de la précision à chaque étape. Une préparation soignée, un système de peinture adapté aux surfaces sollicitées, une protection rigoureuse du reste de la cuisine et un remontage propre : c'est cette séquence complète qui garantit un résultat durable et visuellement transformateur."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture d'armoires de cuisine"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="En savoir plus"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title="Parlez-nous de vos armoires"
          subtitle="Obtenez une soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
