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
  FaSync,
  FaThLarge,
  FaShieldAlt,
  FaHome,
  FaStar,
  FaPhone,
  FaKey,
  FaCouch,
  FaTag,
  FaBroom,
  FaBuilding,
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

import appartHeroImg from '../images/L3 Sous services/Photo page appartement/header.PNG';
import appartImg6759 from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_6759 2.jpg';
import appartImg7983 from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7983 2.jpg';
import chambreAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre avant.jpg';
import chambreApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre après.jpg';
import corridorAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, corridor et boiseries avant.jpg';
import corridorApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, corridor et boiseries après.jpg';
import pieceDoubleAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double avant.jpg';
import pieceDoubleApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double après.jpg';
import mouluresAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peint l_ensemble de ce duplex à Montréal.jpg';
import mouluresApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréalais, Le Lever du Pinceau a peint tout ce condo à Montréal.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
  { label: 'Appartement' },
];

const CHECKMARKS = [
  {
    icon: FaSync,
    title: 'Remise en état rapide entre deux occupants',
    text: 'Quand un logement doit être reloué vite, l\'objectif est de rafraîchir efficacement sans sacrifier la qualité du résultat.',
  },
  {
    icon: FaThLarge,
    title: 'Planification simple dans un espace compact',
    text: 'Dans un appartement, l\'espace de circulation, de stockage et de travail est souvent limité. Le chantier doit rester structuré et propre.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection des planchers, comptoirs et zones sensibles',
    text: 'Même sur un petit logement, les éclaboussures et traces se remarquent immédiatement. La protection n\'est pas optionnelle.',
  },
  {
    icon: FaHome,
    title: 'Travaux adaptés à un logement occupé ou semi-meublé',
    text: 'Quand tout n\'est pas vide, il faut séquencer les pièces intelligemment pour garder l\'espace le plus fonctionnel possible.',
  },
  {
    icon: FaStar,
    title: 'Impact visuel immédiat avant location ou vente',
    text: 'Un appartement fraîchement peint paraît plus propre, plus lumineux et plus facile à projeter pour un futur locataire ou acheteur.',
  },
  {
    icon: FaPhone,
    title: 'Communication claire avec propriétaire, gestionnaire ou locataire',
    text: 'On garde un plan simple : accès, échéancier, zones à traiter et résultat attendu.',
  },
];

const SITUATIONS = [
  {
    icon: FaKey,
    title: 'Appartement entre deux locataires',
    text: 'C\'est souvent le moment idéal pour intervenir vite, avec un espace plus libre et une priorité claire : remettre le logement propre et attrayant pour la relocation.',
  },
  {
    icon: FaCouch,
    title: 'Appartement encore occupé',
    text: 'Quand le locataire est sur place ou qu\'une partie du logement reste utilisée, le chantier doit être séquencé avec ordre, rapidité et respect de l\'espace.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en vente',
    text: 'Un appartement fraîchement peint aide à corriger l\'impression d\'usure, uniformiser les murs et augmenter la valeur perçue dès les visites.',
  },
  {
    icon: FaBroom,
    title: 'Logement locatif avec traces d\'usure',
    text: 'Marques, trous, frottements, reprises visibles et zones fatiguées exigent une vraie remise au propre avant peinture pour que le logement reparte sur une base saine.',
  },
  {
    icon: FaBuilding,
    title: 'Petit appartement ou espace très compact',
    text: 'Studio, 3½ ou 4½ : plus l\'espace est restreint, plus la gestion du matériel, des protections et de la circulation doit être maîtrisée.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous pouvez peindre un appartement entre deux locataires\u00A0?',
    answer: 'Oui. C\'est souvent l\'un des contextes les plus simples pour intervenir rapidement. Le logement peut être remis au propre efficacement avant relocation, avec un résultat net et un échéancier plus facile à respecter.',
  },
  {
    question: 'Pouvez-vous travailler dans un appartement encore occupé\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous séquençons les travaux pour limiter l\'impact sur le quotidien et garder l\'espace aussi fonctionnel que possible pendant le chantier.',
  },
  {
    question: 'Est-ce que vous réparez aussi les trous, fissures et marques avant de peindre\u00A0?',
    answer: 'Oui. Un bon résultat passe par une remise en état minimale ou plus complète selon le niveau d\'usure du logement. Les défauts visibles sont corrigés avant l\'application de la finition.',
  },
  {
    question: 'Combien de temps faut-il pour peindre un appartement\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Une soumission permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Est-ce que la peinture peut aider à relouer ou vendre plus facilement un appartement\u00A0?',
    answer: 'Oui. Un appartement fraîchement peint paraît généralement plus propre, plus lumineux et mieux entretenu, ce qui améliore la première impression dès la visite.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture résidentielle',
    description: 'Page parente - maisons, condos, logements et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture intérieure',
    description: 'Complément technique : surfaces, finis, couches et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Remise en état des murs avant peinture.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture après-sinistre',
    description: 'Remise en état suite à dégât d\'eau, incendie ou moisissures.',
    to: '/services/peinture-apres-sinistre',
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
  {
    title: 'Voir nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité de finition.',
    to: '/realisations',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale - intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
];

export default function PeintureAppartementPage() {
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
        name: 'Peinture d\'appartement',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle/appartement',
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
      before: chambreAvant,
      after: chambreApres,
      description: 'Chambre - Remise au propre, Montréal',
    },
    {
      before: appartImg7983,
      after: appartImg6759,
      description: 'Cage d\'escalier - Remise en état, Montréal',
    },
    {
      before: corridorAvant,
      after: corridorApres,
      description: 'Corridor et boiseries - Appartement, Montréal',
    },
    {
      before: pieceDoubleAvant,
      after: pieceDoubleApres,
      description: 'Pièce double - Rafraîchissement, Montréal',
    },
    {
      before: mouluresAvant,
      after: mouluresApres,
      description: 'Moulures et murs - Appartement, Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture d'appartement à Montréal | Turnover locatif rapide | Le Lever du Pinceau"
        description="Remise en état d'appartement à Montréal entre locataires, logement occupé ou avant vente. Délais serrés, chantier propre. Soumission gratuite en 24h."
        canonicalPath="/services/peinture-residentielle/appartement"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Appartement'
          imageBackground={appartHeroImg}
          imageAlt='Peinture appartement Montréal - intérieur propre et lumineux remis au goût du jour'
          overlayBg='rgba(0, 0, 0, 0.45)'
          title="Peinture d'appartement à Montréal"
          subtitle='Remise au propre rapide pour logement occupé ou mise en location.'
          description='Turnover locatif, avant vente ou entre deux locataires.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS LOGEMENT LOCATIF ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une remise au propre pensée pour la réalité d'un appartement"
          subtitle="Quand le délai est serré et que chaque jour compte, l'organisation du chantier devient aussi importante que la finition."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPy={{ base: 10, md: 12, lg: 14 }}
        />

        {/* ===== SECTION 4 - SITUATIONS COURANTES ===== */}
        <FeatureCardsSection
          title="Une approche différente selon la situation du logement"
          subtitle="Un appartement occupé, un logement à relouer ou un rafraîchissement avant vente ne se planifient pas de la même façon."
          items={SITUATIONS}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, md: 2, lg: 3 }}
        />

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets en appartement"
          subtitle="Espaces compacts remis au propre, logements lumineux et finitions nettes dans des appartements montréalais."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          title="Un appartement bien repeint se loue et se présente beaucoup mieux"
          body="Dans un appartement, la perception visuelle change très vite avec une peinture propre et uniforme. Que l'objectif soit de remettre un logement en état, de le relouer plus facilement, de le vendre ou simplement de l'habiter dans de meilleures conditions, le chantier doit être rapide, propre et bien organisé. Notre approche vise justement à créer ce résultat sans ajouter de friction inutile."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture d'appartement"
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
          title={'Besoin de remettre un appartement au propre rapidement\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
