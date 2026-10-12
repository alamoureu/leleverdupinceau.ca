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
  FaTools,
  FaSearchPlus,
  FaLayerGroup,
  FaRulerCombined,
  FaWrench,
  FaCheckCircle,
  FaAngleDoubleRight,
  FaCircle,
  FaBorderAll,
  FaTh,
  FaWater,
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

import platreHeroImg from '../images/L2 Services specialise/Photo page -surfaces/IMG_8099.jpg';

import platreAvant1 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8106.PNG';
import platreApres1 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6030.PNG';
import platreAvant2 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6031.PNG';
import platreApres2 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8108.PNG';
import platreAvant3 from '../images/3-ville/Montréal/avant-apres/IMG_0818.jpg';
import platreApres3 from '../images/3-ville/Montréal/avant-apres/IMG_0819.jpg';
import platreAvant4 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, cadrage de fenêtre avant.jpg';
import platreApres4 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, cadrage de fenêtre après.jpg';
import platreAvant5 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0859.jpg';
import platreApres5 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0860.jpg';
import platreAvant6 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, moulure avant.jpg';
import platreApres6 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, moulure après.jpg';
import platreAvant7 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0863.jpg';
import platreApres7 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_0864.jpg';
import platreAvant8 from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau avant.jpg';
import platreApres8 from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau après.jpg';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Réparation de plâtre et gypse' },
];

const CHECKMARKS = [
  {
    icon: FaTools,
    title: 'Réparation des fissures et microfissures',
    text: 'On ouvre, stabilise et rebouche les fissures pour éviter qu\'elles réapparaissent trop vite en surface. La méthode varie selon le type de fissure et le mouvement du support.',
  },
  {
    icon: FaSearchPlus,
    title: 'Correction des trous, impacts et anciennes réparations visibles',
    text: 'Trous d\'ancrage, coups, anciennes patches mal faites ou reprises visibles : on remet le mur à niveau avant finition pour que la zone disparaisse sous la peinture.',
  },
  {
    icon: FaLayerGroup,
    title: 'Joints de gypse repris proprement',
    text: 'Quand les joints craquent, ressortent ou télégraphient sous la peinture, on les reprend pour retrouver une lecture visuelle uniforme sur l\'ensemble du mur ou du plafond.',
  },
  {
    icon: FaRulerCombined,
    title: 'Surfaces lissées et remises droites',
    text: 'Sablage, tirage et correction locale pour réduire les vagues, surépaisseurs et différences de niveau visibles à la lumière rasante.',
  },
  {
    icon: FaWrench,
    title: 'Réparation adaptée au type de dommage',
    text: 'Plâtre ancien, gypse récent, plafond fissuré, coin endommagé ou surface touchée par l\'humidité : on n\'intervient pas partout de la même façon.',
  },
  {
    icon: FaCheckCircle,
    title: 'Prêt pour peinture ou finition subséquente',
    text: 'Une fois la réparation terminée, la surface est cohérente, stable et prête pour l\'apprêt ou la peinture. C\'est l\'objectif à chaque intervention.',
  },
];

const TYPES_REPARATIONS = [
  {
    icon: FaAngleDoubleRight,
    title: 'Fissures, microfissures et craques récurrentes',
    text: 'Murs et plafonds qui travaillent, coins qui ouvrent, lignes qui réapparaissent sous la peinture : on corrige avec une méthode adaptée pour réduire le retour rapide du défaut.',
  },
  {
    icon: FaCircle,
    title: 'Trous, impacts et surfaces abîmées',
    text: 'Ancres, poignées, coups de meubles, dommages après travaux ou reprises visibles : on rebouche, lisse et remet la zone à niveau pour qu\'elle disparaisse au fini.',
  },
  {
    icon: FaBorderAll,
    title: 'Joints de gypse apparents ou mal finis',
    text: 'Quand les joints ressortent, craquent ou se lisent trop dans la lumière, on les reprend pour rétablir une lecture visuelle propre et uniforme sur le mur ou le plafond.',
  },
  {
    icon: FaTh,
    title: 'Plafonds et surfaces irrégulières',
    text: 'Ondulations, patchs visibles, anciennes réparations mal poncées ou effets d\'ombre au plafond : on corrige ce qui nuit le plus au rendu final dans une pièce.',
  },
  {
    icon: FaWater,
    title: 'Réparations après infiltration légère ou détérioration locale',
    text: 'Taches anciennes, cloques localisées, gypse fragilisé ou surface marquée après incident : la réparation vise à rendre le support sain et présentable avant finition.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous réparez les fissures avant de peindre\u00A0?',
    answer: 'Oui. Les fissures doivent être traitées correctement avant la peinture, sinon elles réapparaissent rapidement. Selon le type de fissure et le support, nous adaptons la réparation pour stabiliser la zone et retrouver une surface plus uniforme.',
  },
  {
    question: 'Est-ce que les trous et impacts disparaissent complètement\u00A0?',
    answer: 'Dans la majorité des cas, oui. L\'objectif n\'est pas seulement de remplir le trou, mais de remettre la zone au bon niveau pour qu\'elle se fonde au reste du mur. Plus la réparation est bien préparée, moins elle se lit après peinture.',
  },
  {
    question: 'Est-ce que vous refaites les joints de gypse apparents\u00A0?',
    answer: 'Oui. Lorsque les joints ressortent, craquent ou deviennent trop visibles à la lumière, nous pouvons les reprendre pour corriger la lecture du mur ou du plafond avant la finition.',
  },
  {
    question: 'Faut-il repeindre toute la pièce après une réparation\u00A0?',
    answer: 'Pas toujours, mais très souvent une reprise locale se voit, surtout sur des murs mats, exposés à la lumière ou déjà vieillis. Nous recommandons la solution la plus propre selon la visibilité de la zone et l\'état du reste de la pièce.',
  },
  {
    question: 'Est-ce que vous pouvez réparer après un dégât mineur ou une infiltration légère\u00A0?',
    answer: 'Oui, si le support est stabilisé et apte à être repris. Nous pouvons corriger une zone marquée, fragilisée ou abîmée localement avant la remise en peinture ou la finition.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Préparation de surfaces',
    description: 'Lavage, sablage, apprêt et adhérence avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture intérieure',
    description: 'Application, finis, couches et techniques pour l\'intérieur.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture après sinistre',
    description: 'Dégât d\'eau, incendie - remise en état avec documentation assureur.',
    to: '/services/peinture-apres-sinistre',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
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

export default function ReparationPlatreGysePage() {
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
        name: 'Réparation de plâtre et gypse',
        item: 'https://leleverdupinceau.ca/services/reparation-de-platre-et-gypse',
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
      before: platreAvant1,
      after: platreApres1,
      description: 'Sous-sol en gypse neuf : joints tirés et vis recouvertes avant finition',
    },
    {
      before: platreAvant2,
      after: platreApres2,
      description: 'Corridor aux trous rebouchés, mur lissé et repeint - Montréal',
    },
    {
      before: platreAvant3,
      after: platreApres3,
      description: 'Coin de mur arraché réparé, remis droit et repeint',
    },
    {
      before: platreAvant4,
      after: platreApres4,
      description: 'Gypse autour d\'une fenêtre repris, joints tirés et mur repeint',
    },
    {
      before: platreAvant5,
      after: platreApres5,
      description: 'Peinture écaillée sous une fenêtre grattée, réparée et repeinte',
    },
    {
      before: platreAvant6,
      after: platreApres6,
      description: 'Plinthe marquée et rayée réparée puis repeinte',
    },
    {
      before: platreAvant7,
      after: platreApres7,
      description: 'Taches d\'eau au plafond bloquées et plafond repeint uniformément',
    },
    {
      before: platreAvant8,
      after: platreApres8,
      description: 'Fissures au plafond et trous aux murs réparés dans un condo du Plateau',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Réparation de plâtre et gypse à Montréal | Fissures, trous et joints | Le Lever du Pinceau"
        description="Réparation de plâtre et gypse à Montréal. Correction de fissures, trous, joints visibles et surfaces abîmées avant peinture. Soumission gratuite et travail propre."
        canonicalPath="/services/reparation-de-platre-et-gypse"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Réparation de plâtre et gypse'
          imageBackground={platreHeroImg}
          imageAlt='Réparation de plâtre et gypse à Montréal - correction de fissures et trous avant peinture'
          imagePosition='center 30%'
          overlayBg='rgba(0, 0, 0, 0.55)'
          title='Réparation de plâtre et gypse à Montréal'
          subtitle='Fissures, trous et joints.'
          description='Des surfaces abîmées corrigées proprement pour un fini lisse, droit et prêt à peindre.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS CORRECTION DU SUPPORT ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Corriger les défauts avant qu'ils réapparaissent"
          subtitle="Une belle finition commence par une surface réparée, droite et stable"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de surfaces réparées"
          subtitle="Fissures effacées, trous comblés, joints disparus - la transformation visible avant la finition à Montréal."
          images={carouselImages}
          sectionPaddingTop={0}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />

        {/* ===== SECTION 4 - TYPES DE RÉPARATIONS ===== */}
        <FeatureCardsSection
          title="Une intervention différente selon le défaut à corriger"
          subtitle="On ne traite pas un trou, une fissure ou un plafond abîmé de la même manière"
          items={TYPES_REPARATIONS}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />

        <ContactFormSection sectionPaddingTop={{ base: 12, md: 16 }} sectionPaddingBottom={{ base: 12, md: 16 }} />

        <ServiceGuaranteeSection
          title="Une réparation bien faite change tout le résultat final"
          body="Quand les défauts sont mal corrigés, ils reviennent vite sous la peinture ou restent visibles à la lumière. Notre objectif est de remettre la surface au bon niveau avant la finition, pour éviter les reprises inutiles et livrer un résultat plus propre dès la première fois."
        />

        <FAQSection
          title="Questions fréquentes sur la réparation de plâtre et gypse"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="En savoir plus sur nos services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Besoin de corriger vos murs ou plafonds avant de peindre\u00A0?'}
          subtitle={'Obtenez une soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
