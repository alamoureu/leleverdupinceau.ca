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
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import platreHeroImg from '../images/L2 Services specialise/Photo page -plâtre/header _plaster.JPEG';

import platreAvant1 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6030.PNG';
import platreApres1 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6031.PNG';
import platreAvant2 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8106.PNG';
import platreApres2 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8108.PNG';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

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
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale pour les projets intérieurs dans la métropole.',
    to: '/peinture-interieure-montreal',
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
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
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
      description: 'Réparation plâtre plafond fissuré Montréal avant après',
    },
    {
      before: platreAvant2,
      after: platreApres2,
      description: 'Correction joints et mur abîmé avant peinture - Montréal',
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
            src={platreHeroImg}
            alt="Réparation de plâtre et gypse à Montréal - correction de fissures et trous avant peinture"
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
            bg="rgba(0, 0, 0, 0.55)"
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
                  <Text color="white" fontWeight="medium">
                    Réparation de plâtre et gypse
                  </Text>
                </HStack>

                <Heading as="h1" size="hero" color="white" minW={0}>
                  Réparation de plâtre et gypse à Montréal
                </Heading>

                <Text
                  variant="heroSubtitle"
                  color="white"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                >
                  Surfaces corrigées pour un fini lisse, droit et prêt à peindre.
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

        {/* ===== SECTION 3 - CHECKMARKS CORRECTION DU SUPPORT ===== */}
        <FeatureCardsSection
          title="Corriger les défauts avant qu'ils réapparaissent"
          subtitle="Une belle finition commence par une surface réparée, droite et stable"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
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

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de surfaces réparées"
          subtitle="Fissures effacées, trous comblés, joints disparus - la transformation visible avant la finition à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          title="Une réparation bien faite change tout le résultat final"
          body="Quand les défauts sont mal corrigés, ils reviennent vite sous la peinture ou restent visibles à la lumière. Notre objectif est de remettre la surface au bon niveau avant la finition, pour éviter les reprises inutiles et livrer un résultat plus propre dès la première fois."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la réparation de plâtre et gypse"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
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
