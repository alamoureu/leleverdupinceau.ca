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
  FaShieldAlt,
  FaBolt,
  FaWater,
  FaEye,
  FaLayerGroup,
  FaHandshake,
  FaHome,
  FaBuilding,
  FaCut,
  FaWind,
  FaClock,
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
import ContactFormSection from '../home-page/ContactFormSection';
import { servicePageSchema } from '../components/ServicePageSections';

import sinistreHeroImg from '../images/L2 Services specialise/Photo page -après-sinitre/header.webp';

import sinistreAvant1 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7990.webp';
import sinistreApres1 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7988.webp';
import sinistreAvant2 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7992.webp';
import sinistreApres2 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7994.webp';
import sinistreAvant3 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0836.webp';
import sinistreApres3 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0837.webp';
import sinistreAvant4 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0859.webp';
import sinistreApres4 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0860.webp';
import sinistreAvant5 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0863.webp';
import sinistreApres5 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0864.webp';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture après-sinistre' },
];

const CHECKMARKS = [
  {
    icon: FaBolt,
    title: 'Intervention rapide une fois la source maîtrisée',
    text: 'Quand le dégât est arrêté et les surfaces stabilisées, on peut planifier rapidement la reprise pour éviter que la situation s\'éternise inutilement.',
  },
  {
    icon: FaEye,
    title: 'Blocage des taches et reprise des zones marquées',
    text: 'Taches d\'eau, auréoles, jaunissement, suie légère ou reprises visibles : on adapte l\'apprêt et le système de finition pour éviter que les marques réapparaissent.',
  },
  {
    icon: FaHandshake,
    title: 'Coordination avec les réparations nécessaires',
    text: 'Si un plafond a été ouvert, qu\'un mur a été repris ou qu\'un panneau a été remplacé, on séquence les étapes pour que la finition finale soit propre et cohérente.',
  },
  {
    icon: FaShieldAlt,
    title: 'Travail propre, protégé et rassurant dans un contexte sensible',
    text: 'Après un incident, les lieux sont souvent déjà stressants à gérer. On protège, on communique clairement et on remet le chantier au propre chaque jour.',
  },
  {
    icon: FaClock,
    title: 'Remise en état pièce par pièce lorsque nécessaire',
    text: 'Dans certains contextes, il est plus réaliste d\'avancer par zones afin de redonner rapidement l\'usage d\'une partie de l\'espace.',
  },
  {
    icon: FaLayerGroup,
    title: 'Fini uniforme malgré les reprises locales',
    text: 'Le vrai défi après-sinistre n\'est pas juste de repeindre, c\'est de faire disparaître visuellement la reprise pour retrouver un résultat homogène.',
  },
];

const CONTEXTES = [
  {
    icon: FaWater,
    title: 'Dégât d\'eau au plafond ou sur les murs',
    text: 'Une infiltration, un tuyau, un débordement ou une trace d\'humidité laisse souvent des marques visibles et parfois des matériaux repris localement. On intervient une fois les surfaces sèches et stabilisées pour uniformiser le résultat.',
  },
  {
    icon: FaWind,
    title: 'Fumée légère, odeurs résiduelles et jaunissement',
    text: 'Après un incident mineur ou une accumulation de fumée, certaines surfaces gardent une odeur ou des traces qui traversent la peinture standard. Le bon système d\'apprêt et de finition évite les remontées visuelles.',
  },
  {
    icon: FaCut,
    title: 'Ouverture puis fermeture de murs ou plafonds',
    text: 'Quand des travaux correctifs ont exigé d\'ouvrir une surface, la finition finale doit faire disparaître visuellement la reprise. C\'est là que la coordination entre réparation, préparation et peinture devient essentielle.',
  },
  {
    icon: FaHome,
    title: 'Condo, appartement ou logement à remettre rapidement en état',
    text: 'Après un incident, le vrai enjeu est souvent le délai. On planifie le chantier de façon réaliste pour remettre le logement ou l\'unité dans un état propre, cohérent et prêt à réutiliser.',
  },
  {
    icon: FaBuilding,
    title: 'Bureau, commerce ou espace à présenter rapidement',
    text: 'Dans un contexte commercial léger, on peut séquencer les travaux pour réduire l\'impact sur l\'exploitation tout en redonnant rapidement une apparence professionnelle au lieu.',
  },
];

const FAQS = [
  {
    question: 'Pouvez-vous repeindre après un dégât d\'eau\u00A0?',
    answer: 'Oui, lorsque la source du problème est réglée et que les surfaces sont sèches et stabilisées. Avant de repeindre, il faut s\'assurer que la zone n\'est plus active et que les matériaux repris sont prêts à recevoir la finition.',
  },
  {
    question: 'Est-ce que la peinture suffit pour couvrir une tache d\'eau ou de fumée\u00A0?',
    answer: 'Pas toujours. Une peinture standard seule n\'est souvent pas suffisante. Selon le type de marque, un apprêt bloque-taches ou un système plus adapté peut être nécessaire pour éviter que la trace réapparaisse.',
  },
  {
    question: 'Faites-vous aussi les réparations de plâtre ou de gypse avant de repeindre\u00A0?',
    answer: 'Oui, lorsque la surface a besoin d\'être reprise avant la finition, nous pouvons intégrer la réparation nécessaire dans le bon séquençage du chantier pour obtenir un résultat propre et cohérent.',
  },
  {
    question: 'Combien de temps faut-il attendre avant de repeindre après une infiltration\u00A0?',
    answer: 'Cela dépend de la nature du dommage, de l\'humidité résiduelle et des matériaux touchés. L\'important est de ne pas repeindre trop tôt. Une surface encore humide compromet la tenue et l\'apparence du résultat final. Dans la grande majorité des cas nous changeons le gypse.',
  },
  {
    question: 'Pouvez-vous intervenir rapidement pour remettre un logement ou une pièce en état\u00A0?',
    answer: 'Oui. Lorsqu\'un espace doit redevenir présentable rapidement, nous pouvons prioriser certaines zones et avancer de façon séquencée pour remettre le lieu en service dans un délai réaliste.',
  },
  {
    question: 'Travaillez-vous aussi dans des condos ou des petits espaces commerciaux après un sinistre\u00A0?',
    answer: 'Oui. Nous adaptons le chantier selon les contraintes d\'accès, les règles du bâtiment et le niveau d\'occupation afin de limiter les perturbations et de garder le projet bien coordonné.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Préparation de surfaces',
    description: 'Lavage, sablage, calfeutrage et apprêt - la fondation du résultat.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Fissures, trous, joints et remise à niveau du support avant finition.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture intérieure',
    description: 'Techniques, finis, couches et surfaces intérieures.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maison, condo, appartement - expérience client et respect de l\'espace.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture commerciale',
    description: 'Bureau, restaurant, commerce - hors heures et échéanciers serrés.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Pourquoi engager un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
  {
    title: 'Voir nos réalisations',
    description: 'Projets avant/après incluant des remises en état après sinistre.',
    to: '/realisations',
  },
];

export default function PeintureApresSinistrePage() {
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
        name: 'Peinture après-sinistre',
        item: 'https://leleverdupinceau.ca/services/peinture-apres-sinistre',
      },
    ],
  };

  const serviceSchema = servicePageSchema({
    name: 'Peinture après-sinistre à Montréal',
    path: '/services/peinture-apres-sinistre',
    description:
      "Service de peinture après-sinistre à Montréal pour dégâts d'eau, fumée légère, plafonds tachés et remise en état après réparations. Intervention structurée, propre et rapide.",
    serviceType: 'Peinture après-sinistre',
  });

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
      before: sinistreAvant1,
      after: sinistreApres1,
      description: 'Sous-sol taché remis en état après dégât d\'eau',
    },
    {
      before: sinistreAvant2,
      after: sinistreApres2,
      description: 'Remise en état après dégât d\'eau - surface repeinte Montréal',
    },
    {
      before: sinistreAvant3,
      after: sinistreApres3,
      description: 'Gypse remplacé autour d\'une fenêtre, joints tirés et mur repeint',
    },
    {
      before: sinistreAvant4,
      after: sinistreApres4,
      description: 'Peinture écaillée par l\'humidité sous une fenêtre, reprise et repeinte',
    },
    {
      before: sinistreAvant5,
      after: sinistreApres5,
      description: 'Tache d\'eau au plafond bloquée et plafond repeint uniformément',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture après-sinistre à Montréal | Le Lever du Pinceau"
        description="Peinture après-sinistre à Montréal pour dégâts d'eau, fumée légère, plafonds tachés et remise en état après réparations. Intervention structurée, propre et rapide. Soumission gratuite."
        canonicalPath="/services/peinture-apres-sinistre"
        schemaArray={[breadcrumbSchema, serviceSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture après-sinistre'
          imageBackground={sinistreHeroImg}
          imageAlt="Peinture après-sinistre à Montréal - espace remis en état après dégât d'eau"
          imagePosition="center 30%"
          title='Peinture après sinistre à Montréal'
          subtitle="Dégât d'eau, fumée et remise en état."
          description='Intervention structurée après réparations, propre et rapide.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS REMISE EN ÉTAT ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Après un dommage, la finition doit être reprise dans le bon ordre"
          subtitle="Diagnostic, préparation ciblée et remise en état pour retrouver un espace propre, stable et présentable"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après : surfaces remises en état après un dommage"
          subtitle="Plafonds tachés, murs marqués et zones reprises - avant et après remise en état à Montréal."
          images={carouselImages}
          sectionPaddingTop={0}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />

        {/* ===== SECTION 4 - CONTEXTES APRÈS-SINISTRE ===== */}
        <FeatureCardsSection
          title="Une approche adaptée au type de dommage et à l'état réel des surfaces"
          subtitle="Ici, on ne parle pas juste de repeindre : on parle de remettre un espace en état après un événement perturbateur"
          items={CONTEXTES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />

        <ContactFormSection sectionPaddingTop={{ base: 12, md: 16 }} sectionPaddingBottom={{ base: 12, md: 16 }} />

        <ServiceGuaranteeSection
          body="Chaque projet de remise en état est suivi jusqu'à ce que le résultat soit propre, uniforme et conforme aux attentes. On ne quitte pas le chantier tant que l'espace n'est pas prêt."
        />

        <FAQSection
          title="Questions fréquentes sur la peinture après-sinistre"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Besoin de remettre un espace en état après un dommage\u00A0?'}
          subtitle={'Obtenez votre soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
