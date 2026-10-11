import React, { Fragment } from 'react';
import {
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import {
  FaHome,
  FaShieldAlt,
  FaBroom,
  FaCalendarAlt,
  FaStar,
  FaCouch,
  FaTag,
  FaKey,
  FaPaintRoller,
  FaTree,
  FaLayerGroup,
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
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

import maisonHeroImg from '../images/2-services/Page peinture résidentielle/Photo header/IMG_7844.jpg';
import chambreAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre avant.jpg';
import chambreApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre après.jpg';
import corridorAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, corridor et boiseries avant.jpg';
import corridorApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, corridor et boiseries après.jpg';
import pieceDoubleAvant from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double avant.jpg';
import pieceDoubleApres from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, pièce double après.jpg';
import revetementAvant from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, revêtement maison avant.jpg";
import revetementApres from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, revêtement maison après.jpg";
import salleMangerAvant from '../images/3-ville/brossard/avant-apres/IMG_0826.jpg';
import salleMangerApres from '../images/3-ville/brossard/avant-apres/IMG_0827.jpg';
import porteAvant from '../images/L3 Sous services/Photo page -peinture maison/avant apres/IMG_0828.jpg';
import porteApres from '../images/L3 Sous services/Photo page -peinture maison/avant apres/IMG_0829.jpg';
import poutreAvant from '../images/L3 Sous services/Photo page -peinture maison/avant apres/IMG_0834.jpg';
import poutreApres from '../images/L3 Sous services/Photo page -peinture maison/avant apres/IMG_0835.jpg';
import fenetreAvant from '../images/3-ville/st-lambert/avant-apres/IMG_0836.jpg';
import fenetreApres from '../images/3-ville/st-lambert/avant-apres/IMG_0837.jpg';
import chambrePapierAvant from '../images/3-ville/st-lambert/avant-apres/IMG_0842.jpg';
import chambrePapierApres from '../images/3-ville/st-lambert/avant-apres/IMG_0843.jpg';
import chambreVerteAvant from '../images/L3 Sous services/Photo page -peinture maison/avant apres/IMG_0844.jpg';
import chambreVerteApres from '../images/L3 Sous services/Photo page -peinture maison/avant apres/IMG_0845.jpg';
import chambreBlancheAvant from '../images/3-ville/brossard/avant-apres/IMG_0846.jpg';
import chambreBlancheApres from '../images/3-ville/brossard/avant-apres/IMG_0847.jpg';
import chambreFloraleAvant from '../images/3-ville/laprairie/avant-apres/IMG_0852.jpg';
import chambreFloraleApres from '../images/3-ville/laprairie/avant-apres/IMG_0853.jpg';
import hallAvant from '../images/3-ville/brossard/avant-apres/IMG_0855.jpg';
import hallApres from '../images/3-ville/brossard/avant-apres/IMG_0856.jpg';
import plintheAvant from '../images/3-ville/laprairie/avant-apres/IMG_0861.jpg';
import plintheApres from '../images/3-ville/laprairie/avant-apres/IMG_0862.jpg';
import clotureAvant from '../images/3-ville/Montréal/avant-apres/IMG_1405.jpg';
import clotureApres from '../images/3-ville/Montréal/avant-apres/IMG_1406.jpg';
import pieceWestmountAvant from '../images/3-ville/Montréal/avant-apres/IMG_5984 6.jpg';
import pieceWestmountApres from '../images/3-ville/Montréal/avant-apres/IMG_5982 5.jpg';
import escalierAvant from '../images/3-ville/Montréal/avant-apres/IMG_7678 3.jpg';
import escalierApres from '../images/3-ville/Montréal/avant-apres/IMG_5873 3.jpg';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
  { label: 'Maison' },
];

const CHECKMARKS = [
  {
    icon: FaHome,
    title: 'Planification pièce par pièce dans une maison habitée',
    text: 'Salon, chambres, corridors, escaliers : on séquence les travaux pour que la famille puisse continuer à vivre dans la maison sans tout bouleverser.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète des planchers, meubles et passages',
    text: 'Toiles, rubans, protection des boiseries et des zones de circulation. Dans une maison, chaque surface exposée compte autant que le mur à peindre.',
  },
  {
    icon: FaLayerGroup,
    title: 'Préparation adaptée à l\'âge et au type de mur',
    text: 'Gypse récent, plâtre ancien, fissures de tassement ou boiseries usées : la préparation change selon le bâti, pas selon une méthode unique.',
  },
  {
    icon: FaBroom,
    title: 'Chantier propre du premier au dernier jour',
    text: 'Nettoyage quotidien, rangement du matériel et respect des espaces communs de la maison pour limiter la poussière et le dérangement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair pour un projet multi-pièces',
    text: 'Une maison demande souvent plusieurs journées et plusieurs zones. Vous savez quoi attendre, dans quel ordre, et quand chaque secteur sera libéré.',
  },
  {
    icon: FaStar,
    title: 'Finition cohérente murs, plafonds et boiseries',
    text: 'L\'objectif est un résultat uniforme d\'une pièce à l\'autre : lignes nettes, finis adaptés et détails soignés sur les éléments les plus visibles.',
  },
];

const SITUATIONS = [
  {
    icon: FaCouch,
    title: 'Maison occupée au quotidien',
    text: 'Quand la famille reste sur place, la priorité est d\'organiser le chantier zone par zone, avec un niveau de propreté qui permet de continuer à utiliser la cuisine, les chambres et les passages.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en vente',
    text: 'Une maison fraîchement peinte paraît plus lumineuse et plus soignée. L\'objectif est une mise à niveau rapide, neutre et visuellement forte pour les visites.',
  },
  {
    icon: FaKey,
    title: 'Maison avant emménagement',
    text: 'Quand les clés sont obtenues mais que les meubles ne sont pas encore installés, c\'est souvent le meilleur moment pour peindre efficacement, sans contourner le mobilier.',
  },
  {
    icon: FaPaintRoller,
    title: 'Rénovation intérieure multi-pièces',
    text: 'Plusieurs chambres, un salon ouvert, des corridors et des boiseries : on cadre le scope, la préparation et la séquence pour livrer un résultat cohérent partout.',
  },
  {
    icon: FaTree,
    title: 'Maison avec travaux intérieurs et extérieurs',
    text: 'Façade, terrasse, boiseries extérieures et intérieur : on peut combiner les volets du projet selon la saison, l\'état des surfaces et votre échéancier.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que je peux rester dans ma maison pendant les travaux\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous planifions les pièces et les protections pour limiter l\'impact sur votre quotidien et garder la maison utilisable pendant le chantier.',
  },
  {
    question: 'Combien de temps faut-il pour peindre une maison unifamiliale\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation. Une soumission détaillée établit un échéancier clair avant le début des travaux.',
  },
  {
    question: 'Peignez-vous aussi les boiseries, plafonds et escaliers\u00A0?',
    answer: 'Oui. Un projet de maison inclut souvent murs, plafonds, boiseries, portes et parfois escaliers. Le scope exact est précisé dans la soumission selon vos besoins.',
  },
  {
    question: 'Faites-vous la préparation des fissures et des réparations mineures\u00A0?',
    answer: 'Oui. La préparation fait partie du travail : rebouchage, toile à fissures aux points de tension, ponçage et apprêt au besoin avant la mise en peinture.',
  },
  {
    question: 'Pouvez-vous peindre l\'intérieur et l\'extérieur de la même maison\u00A0?',
    answer: 'Oui. Selon la saison et l\'état des surfaces, nous pouvons planifier l\'intérieur et l\'extérieur dans un même projet ou en deux phases clairement cadré.',
  },
  {
    question: 'Intervenez-vous à Montréal, Laval, Longueuil et sur la Rive-Sud\u00A0?',
    answer: 'Oui. Nous peignons des maisons unifamiliales dans le Grand Montréal, y compris Montréal, Laval, Longueuil, Brossard, Saint-Lambert et La Prairie.',
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
    title: 'Peinture extérieure',
    description: 'Façades, terrasses, boiseries et revêtements adaptés au climat.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Peinture de condo',
    description: 'Si votre projet est en copropriété plutôt qu\'en maison.',
    to: '/services/peinture-residentielle/condo',
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
];

export default function PeintureMaisonPage() {
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
        name: 'Peinture de maison unifamiliale',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle/maison',
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
      description: 'Peinture intérieure - Chambre de maison',
    },
    {
      before: corridorAvant,
      after: corridorApres,
      description: 'Corridor et boiseries - Maison résidentielle',
    },
    {
      before: pieceDoubleAvant,
      after: pieceDoubleApres,
      description: 'Rafraîchissement - Pièce double',
    },
    {
      before: revetementAvant,
      after: revetementApres,
      description: 'Peinture extérieure - Revêtement de maison',
    },
    {
      before: salleMangerAvant,
      after: salleMangerApres,
      description: 'Salle à manger - murs bleus repeints gris foncé',
    },
    {
      before: porteAvant,
      after: porteApres,
      description: "Porte d'entrée - décapage et peinture bleu marine",
    },
    {
      before: poutreAvant,
      after: poutreApres,
      description: "Poutre d'acier - rouille traitée et peinture noire",
    },
    {
      before: fenetreAvant,
      after: fenetreApres,
      description: 'Cadrage de fenêtre - plâtre et peinture',
    },
    {
      before: chambrePapierAvant,
      after: chambrePapierApres,
      description: 'Chambre - papier peint retiré et murs repeints',
    },
    {
      before: chambreVerteAvant,
      after: chambreVerteApres,
      description: 'Chambre - papier peint retiré, murs verts',
    },
    {
      before: chambreBlancheAvant,
      after: chambreBlancheApres,
      description: 'Chambre - murs repeints en blanc',
    },
    {
      before: chambreFloraleAvant,
      after: chambreFloraleApres,
      description: 'Chambre - papier peint fleuri remplacé par la peinture',
    },
    {
      before: hallAvant,
      after: hallApres,
      description: "Hall d'entrée - murs et boiseries rafraîchis",
    },
    {
      before: plintheAvant,
      after: plintheApres,
      description: 'Plinthe - réparation et peinture',
    },
    {
      before: clotureAvant,
      after: clotureApres,
      description: 'Clôture en bois - teinture',
    },
    {
      before: pieceWestmountAvant,
      after: pieceWestmountApres,
      description: 'Peinture intérieure - Pièce double à Westmount',
    },
    {
      before: escalierAvant,
      after: escalierApres,
      description: "Réparation et peinture - Cage d'escalier résidentielle",
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture de maison unifamiliale | Grand Montréal | Le Lever du Pinceau"
        description="Peinture de maison unifamiliale à Montréal, Laval, Longueuil et Rive-Sud. Chantier propre, préparation soignée, intérieur et extérieur. Soumission gratuite."
        canonicalPath="/services/peinture-residentielle/maison"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Maison"
          imageBackground={maisonHeroImg}
          imageAlt="Peinture de maison unifamiliale - intérieur résidentiel soigné"
          overlayBg="rgba(0, 0, 0, 0.45)"
          title="Peinture de maison unifamiliale"
          subtitle="Chantier propre, planifié pièce par pièce pour une maison habitée."
          description="Intérieur, boiseries et extérieur - préparation adaptée à votre bâti."
          buttonText="Obtenir ma soumission gratuite"
          breadcrumb={HERO_BREADCRUMB}
        />

        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une exécution pensée pour la réalité d'une maison"
          subtitle="Dans une maison unifamiliale, la qualité du chantier se joue autant dans l'organisation familiale que dans la finition."
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        <FeatureCardsSection
          title="Une approche différente selon le moment du projet"
          subtitle="Une maison occupée, une maison à vendre ou une maison avant emménagement ne se planifient pas de la même façon."
          items={SITUATIONS}
          variant="stacked"
          sectionBg="gray.50"
        />

        <BeforeAfterCarouselSection
          isFr
          title="Avant / après de projets en maison"
          subtitle="Finitions soignées et chantiers propres dans des maisons du Grand Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        <ServiceGuaranteeSection
          title="Un projet de maison bien cadré évite les mauvaises surprises"
          body="Peindre une maison, ce n'est pas seulement ouvrir des pots pièce par pièce. C'est anticiper la préparation des surfaces, protéger le quotidien familial, synchroniser les zones et livrer une finition cohérente partout. Notre approche vise un chantier prévisible, propre et bien communiqué du devis à la dernière retouche."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture de maison"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="En savoir plus"
          links={INTERNAL_LINKS}
        />

        <FinalCTASection
          title={"Besoin d'un chantier propre et bien planifié pour votre maison\u00A0?"}
          subtitle="Obtenez votre soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
