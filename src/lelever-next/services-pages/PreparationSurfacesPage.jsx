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
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaSearchPlus,
  FaFillDrip,
  FaTools,
  FaCut,
  FaLayerGroup,
  FaShieldAlt,
  FaCircle,
  FaAngleDoubleRight,
  FaBorderAll,
  FaPaintRoller,
  FaHome,
  FaExpand,
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

import surfacesHeroImg from '../images/L2 Services specialise/Photo page -surfaces/IMG_8099.jpg';

import surfacesAvant1 from '../images/L2 Services specialise/Photo page -surfaces/Avant-apres/IMG_5914.JPG';
import surfacesApres1 from '../images/L2 Services specialise/Photo page -surfaces/Avant-apres/IMG_5916.JPG';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const PLACEHOLDER_PAIR = { before: null, after: null };

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Préparation de surfaces' },
];

const CHECKMARKS = [
  {
    icon: FaSearchPlus,
    title: 'Évaluation complète de la surface avant travaux',
    text: 'Nous identifions les fissures, trous, joints faibles, défauts visuels, anciennes réparations et zones qui pourraient nuire à l\'adhérence ou au fini avant toute intervention.',
  },
  {
    icon: FaFillDrip,
    title: 'Rebouchage, correction et lissage des imperfections',
    text: 'Petits impacts, anciennes fixations, trous de vis, éclats et défauts de surface sont repris pour créer une base plus uniforme avant l\'application de la finition.',
  },
  {
    icon: FaTools,
    title: 'Sablage adapté au support',
    text: 'Le sablage enlève les aspérités, atténue les reprises visibles et améliore l\'accroche du produit de finition sans abîmer inutilement la surface.',
  },
  {
    icon: FaCut,
    title: 'Calfeutrage et finition des transitions',
    text: 'Joints autour des moulures, cadrages, plinthes et points de rencontre : on corrige les lignes pour que le résultat final paraisse plus net et mieux fini.',
  },
  {
    icon: FaLayerGroup,
    title: 'Apprêt choisi selon la réalité du support',
    text: 'Surface poreuse, ancienne peinture, reprise locale, zone tachée ou support neuf : l\'apprêt est sélectionné pour stabiliser le tout avant la couche finale.',
  },
  {
    icon: FaShieldAlt,
    title: 'Préparation propre et contrôlée',
    text: 'Protection, gestion de poussière, nettoyage et séquence logique des étapes permettent de préparer sans transformer l\'espace en chantier désorganisé.',
  },
];

const TYPES_PREPARATION = [
  {
    icon: FaCircle,
    title: 'Murs marqués, trous et anciennes fixations',
    text: 'Impacts, trous de cadres, ancrages, reprises visibles et petites imperfections sont rebouchés puis sablés pour retrouver une surface plus uniforme avant la peinture.',
  },
  {
    icon: FaAngleDoubleRight,
    title: 'Joints, fissures fines et reprises locales',
    text: 'Certaines microfissures et joints fatigués exigent une reprise localisée, parfois avec composé et ponçage, pour éviter que le défaut ressorte après application du fini.',
  },
  {
    icon: FaBorderAll,
    title: 'Moulures, cadrages et boiseries',
    text: 'Les éléments de finition demandent souvent calfeutrage, légers rebouchages et sablage fin pour obtenir des lignes nettes et une apparence plus soignée.',
  },
  {
    icon: FaPaintRoller,
    title: 'Surfaces déjà peintes ou mal préparées',
    text: 'Quand une ancienne couche présente des traces, souvent dues à une peinture au latex appliqué sur une peinture à l\'huile, différences de texture, brillances ou reprises mal faites, la préparation permet de repartir sur une base plus cohérente.',
  },
  {
    icon: FaHome,
    title: 'Préparation avant mise en vente ou remise à neuf',
    text: 'Avant une vente, une location ou un rafraîchissement rapide, une bonne préparation permet d\'améliorer visiblement l\'apparence sans refaire tout le support en profondeur.',
  },
  {
    icon: FaExpand,
    title: 'Supports neufs ou zones reprises partiellement',
    text: 'Gypse neuf, patchs récents, sections reprises ou zones plus poreuses : l\'objectif est d\'uniformiser l\'absorption et la texture avant l\'application finale.',
  },
];

const FAQS = [
  {
    question: 'Pourquoi la préparation de surfaces est-elle si importante avant de peindre\u00A0?',
    answer: 'Parce qu\'une belle peinture ne peut pas cacher durablement une surface mal préparée. Une bonne préparation améliore l\'adhérence, réduit les défauts visibles et permet d\'obtenir un fini plus net et plus durable.',
  },
  {
    question: 'Est-ce que vous rebouchez les trous et petites imperfections avant de peindre\u00A0?',
    answer: 'Oui. Nous corrigeons les petits trous, impacts, anciennes fixations et irrégularités courantes avant l\'application finale afin d\'obtenir une surface plus uniforme.',
  },
  {
    question: 'Faut-il toujours sabler avant de peindre\u00A0?',
    answer: 'Pas dans tous les cas, mais très souvent un sablage léger ou ciblé est nécessaire pour lisser le support, atténuer les reprises et améliorer l\'accroche du produit de finition.',
  },
  {
    question: 'Est-ce que vous appliquez aussi l\'apprêt\u00A0?',
    answer: 'Oui, lorsque le support l\'exige. Gypse neuf, zones reprises, surfaces poreuses, taches ou anciennes peintures problématiques peuvent nécessiter un apprêt avant la couche finale.',
  },
  {
    question: 'Est-ce que vous pouvez faire seulement la préparation, sans peinture complète\u00A0?',
    answer: 'Selon le projet, oui. Certaines interventions peuvent se limiter à la correction et à la mise en état de la surface. Le besoin exact est validé lors de la soumission.',
  },
  {
    question: 'Quelle est la différence entre préparation de surfaces et réparation de plâtre/gypse\u00A0?',
    answer: 'La préparation de surfaces couvre l\'ensemble des corrections légères à moyennes avant peinture. La réparation de plâtre et gypse concerne des interventions plus spécifiques ou plus avancées sur les murs et plafonds.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Application, finis, couches et techniques pour l\'intérieur.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Fissures, trous et joints - correction des défauts du support.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces et surfaces exigeantes.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale pour les projets intérieurs dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Pourquoi faire appel à un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
];

export default function PreparationSurfacesPage() {
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
        name: 'Préparation de surfaces',
        item: 'https://leleverdupinceau.ca/services/preparation-de-surfaces',
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
      before: surfacesAvant1,
      after: surfacesApres1,
      description: 'Préparation de surfaces Montréal avant après',
    },
    {
      ...PLACEHOLDER_PAIR,
      description:
        'Deuxième paire : à documenter sur de la préparation pure (les fichiers 7992/7994 sont réservés à la page après sinistre).',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Préparation de surfaces à Montréal | Avant peinture | Le Lever du Pinceau"
        description="Préparation de surfaces à Montréal : rebouchage, sablage, calfeutrage, apprêt et correction des imperfections avant peinture. Soumission gratuite."
        canonicalPath="/services/preparation-de-surfaces"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Préparation de surfaces'
          imageBackground={surfacesHeroImg}
          imageAlt='Préparation de surfaces avant peinture à Montréal - sablage, rebouchage et apprêt'
          overlayBg='rgba(0, 0, 0, 0.50)'
          title='Préparation de surfaces à Montréal'
          subtitle='Support propre, lisse et prêt à recevoir la peinture.'
          description='Rebouchage, sablage, calfeutrage et apprêt avant peinture.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS FONDATION DU RÉSULTAT ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une finition durable dépend d'abord de la préparation"
          subtitle="Corriger le support avant de peindre permet d'obtenir un résultat plus net, plus stable et plus durable"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - TYPES DE PRÉPARATION ===== */}
        <FeatureCardsSection
          title="Une préparation adaptée à l'état réel de la surface"
          subtitle="Tous les supports ne demandent pas le même niveau d'intervention avant peinture"
          items={TYPES_PREPARATION}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />


        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Quand la préparation change vraiment le résultat"
          subtitle="Surfaces corrigées, imperfections effacées et supports remis à niveau avant la peinture finale à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="Un travail bien préparé dure plus longtemps, nécessite moins de retouches et donne un résultat visuellement plus propre. Nous intégrons la préparation comme une étape à part entière de chaque projet, pas comme une formalité à expédier."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la préparation de surfaces"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Commencez avec une base bien préparée'}
          subtitle={'Obtenez une soumission gratuite en moins de 24h pour vos travaux de préparation et de peinture'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
