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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaPaintBrush,
  FaLayerGroup,
  FaCut,
  FaPalette,
  FaBox,
  FaShieldAlt,
  FaHome,
  FaUtensils,
  FaBath,
  FaBorderAll,
  FaArrowsAlt,
  FaBuilding,
  FaWarehouse,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import interieureHeroImg from '../images/2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg';

import avantApresCondo1 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintres professionnels à Montréal, Le Lever du Pinceau a installé la protection et peinturé l_ensemble de ce condo a Griffintown, Montréal.jpg';
import avantApresCondo2 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a peinturé l_ensemble de ce condo a Griffintown, Montréal.jpg';
import avantApresArmoires1 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintres d_expériences à Montréal, Le Lever du Pinceau a peinturé les portes d_armoires de cette cuisine à Montréal.jpg';
import avantApresArmoires2 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintres pros à Montréal, Le Lever du Pinceau a peint les armoires de cuisines de cette maison dans le grand Montréal.jpg';
import avantApresWestmount1 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a peinturé et ont faites les réparations de plâtre sur les plafonds et les murs de cette maison à Westmount, Montréal.jpg';
import avantApresWestmount2 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a peint  l_ensemble de cette maison victorienne à Westmount, Montréal.jpg';

const CHECKMARKS = [
  {
    icon: FaPaintBrush,
    title: 'Préparation minutieuse de chaque surface',
    text: 'Sablage, rebouchage, apprêt adapté au type de mur (gypse, plâtre, béton) - le résultat final dépend de la préparation.',
  },
  {
    icon: FaLayerGroup,
    title: 'Application uniforme en 2-3 couches',
    text: 'Sablage léger entre les couches pour une finition parfaitement lisse, sans traces de rouleau ni démarcations.',
  },
  {
    icon: FaCut,
    title: 'Découpes nettes au plafond et aux moulures',
    text: 'Technique de découpe à la main, pas juste du ruban. C\'est ce qui distingue un travail professionnel d\'un travail amateur.',
  },
  {
    icon: FaPalette,
    title: 'Finis adaptés à chaque pièce',
    text: 'Mat pour les plafonds, perle/velours pour les murs, semi-brillant pour les boiseries et salles d\'eau. Le bon produit au bon endroit.',
  },
  {
    icon: FaBox,
    title: 'Produits de qualité professionnelle',
    text: 'Nous travaillons principalement avec Bétonel Dulux (gammes VIP, Diamond, Lifemaster) et Benjamin Moore pour des résultats durables.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète de vos planchers et meubles',
    text: 'Toiles, ruban de masquage professionnel, nettoyage quotidien. Votre espace est respecté du début à la fin du chantier.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Murs et plafonds',
    text: 'Le coeur de la peinture intérieure. Minimum 2 couches avec sablage entre chaque pour un fini parfaitement uniforme.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Armoires de cuisine',
    text: 'Alternative économique au remplacement. Démontage, sablage, apprêt, 2-3 couches de peinture alkyde hybride, remontage.',
    link: '/services/peinture-interieure/armoires-de-cuisine',
    linkLabel: 'Voir notre service armoires',
    popular: true,
  },
  {
    icon: FaUtensils,
    title: 'Cuisine (murs)',
    text: 'Peinture résistante à la graisse et à l\'humidité. Fini lavable recommandé : perle ou semi-brillant. Coordination couleurs murs-armoires.',
    link: null,
  },
  {
    icon: FaBath,
    title: 'Salle de bain',
    text: 'Fini semi-brillant anti-humidité obligatoire. Traitement anti-moisissure si nécessaire. Ventilation vérifiée avant application.',
    link: null,
  },
  {
    icon: FaBorderAll,
    title: 'Boiseries, moulures et portes',
    text: 'Sablage, apprêt, peinture alkyde ou latex en fini semi-brillant. Découpes précises à la main. Le travail qui distingue un pro.',
    link: null,
  },
  {
    icon: FaArrowsAlt,
    title: 'Escaliers et cage d\'escalier',
    text: 'Équipement spécialisé pour les hauteurs. Peinture et/ou teinture des marches, contremarches, rampes et murs.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Plafonds hauts et cathédrales',
    text: 'Échafaudage professionnel et pistolet airless pour les plafonds hors d\'atteinte. Expertise en sécurité.',
    link: null,
  },
  {
    icon: FaWarehouse,
    title: 'Sous-sol',
    text: 'Gestion de l\'humidité, murs de fondation, plancher de béton. Couleurs claires recommandées pour compenser l\'éclairage limité.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Combien de temps dure un projet de peinture intérieure\u00A0?',
    answer: 'La durée dépend surtout du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Un projet simple peut prendre 1 à 2 jours, tandis qu\'un projet plus complet avec réparations, sablage et plusieurs couches peut prendre plus longtemps. Une soumission détaillée permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Est-ce que vous protégez les meubles et les planchers avant de peindre\u00A0?',
    answer: 'Oui, toujours. La protection des surfaces fait partie intégrante de notre processus. Nous couvrons les planchers, protégeons les meubles et utilisons les bons matériaux pour éviter les éclaboussures, les traces ou les dommages pendant les travaux. Le chantier est également nettoyé à la fin de chaque journée.',
  },
  {
    question: 'Combien de couches de peinture faut-il pour un bon résultat\u00A0?',
    answer: 'Dans la majorité des cas, deux couches sont recommandées pour obtenir un fini uniforme, durable et professionnel. Selon la couleur existante, le type de surface ou le changement de teinte, une couche d\'apprêt peut aussi être nécessaire. Le bon nombre de couches dépend toujours de l\'état réel des murs et du résultat recherché.',
  },
  {
    question: 'Peinturez-vous aussi les armoires, boiseries et moulures\u00A0?',
    answer: 'Oui. Nous réalisons aussi la peinture d\'armoires de cuisine, de moulures, de portes, de cadrages et d\'autres boiseries intérieures. Ces éléments demandent souvent une préparation plus minutieuse et des produits adaptés pour assurer une finition durable, nette et résistante à l\'usure.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale - intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Peinture extérieure',
    description: 'Revêtement, balcon, clôture et surfaces extérieures.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, rebouchage, calfeutrage et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Trous, fissures, joints - surfaces remises en état avant finition.',
    to: '/services/reparation-de-platre-et-gypse',
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

export default function PeintureInterieurePage() {
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
      before: avantApresCondo1,
      after: avantApresCondo2,
      description: 'Peinture intérieure salon - Condo Griffintown, Montréal',
    },
    {
      before: avantApresArmoires1,
      after: avantApresArmoires2,
      description: 'Transformation armoires de cuisine - avant / après Montréal',
    },
    {
      before: avantApresWestmount1,
      after: avantApresWestmount2,
      description: 'Peinture intérieure murs et plafonds - Westmount, Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture intérieure à Montréal | Murs, plafonds, armoires | Le Lever du Pinceau"
        description="Service de peinture intérieure professionnelle à Montréal. Murs, plafonds, boiseries, armoires de cuisine. Préparation soignée, finitions impeccables. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-interieure"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        {/* ===== SECTION 1 - HERO ===== */}
        <Box
          position="relative"
          w="100%"
          minW={0}
          minH={{ base: '320px', sm: '350px', md: '440px', lg: '480px', xl: '580px' }}
          h={{ base: 'auto', sm: 'auto', md: '52vh', lg: '55vh', xl: '75vh' }}
          pb={{ base: 10, sm: 12, md: 14, lg: 16 }}
          bgColor="gray.700"
          overflow="visible"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10 }}
        >
          <Image
            src={interieureHeroImg}
            alt="Peinture intérieure à Montréal - peintre professionnel au travail"
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
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.50)"
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
                <HStack spacing={2} fontSize={{ base: 'sm', md: 'md' }} flexWrap="wrap">
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
                    Peinture intérieure
                  </Text>
                </HStack>

                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }}
                  fontWeight="700"
                  color="white"
                  lineHeight="1.05"
                  minW={0}
                >
                  Peinture intérieure à Montréal pour murs, plafonds, boiseries et armoires
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Des finitions impeccables pour chaque pièce de votre intérieur.
                </Text>

                <Box pt={{ base: 2, md: 3 }}>
                  <Button
                    size={{ base: 'md', md: 'lg' }}
                    bg="brand.500"
                    color="white"
                    _hover={{ bg: 'brand.600' }}
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
        <Box bg="gray.50" borderTop="1px solid" borderTopColor="gray.200" borderBottom="1px solid" borderBottomColor="gray.200">
          <TrustBanner />
        </Box>

        {/* ===== SECTION 3 - CHECKMARKS TECHNIQUES ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Ce qui distingue notre peinture intérieure
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Des techniques maîtrisées pour chaque surface de votre intérieur
                </Text>
              </Stack>

              <Flex wrap="wrap" justify="center" gap={5}>
                {CHECKMARKS.map((item, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 5, md: 6 }}
                    boxShadow="0 2px 12px rgba(0,0,0,0.05)"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                    w={{ base: '100%', md: 'calc(50% - 10px)', lg: 'calc(33.333% - 14px)' }}
                    maxW={{ lg: '420px' }}
                  >
                    <HStack spacing={4} mb={3} align="center">
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="lg"
                        bg="brand.50"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Text
                        fontWeight="bold"
                        color="gray.800"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="1.3"
                      >
                        {item.title}
                      </Text>
                    </HStack>
                    <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                      {item.text}
                    </Text>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 4 - SPÉCIALITÉS PAR PIÈCE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Chaque pièce mérite une attention particulière
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Nous adaptons nos techniques et nos produits selon l&apos;espace à peindre
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
                {SPECIALITES.map((item, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 6, md: 7 }}
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    display="flex"
                    flexDirection="column"
                    position="relative"
                  >
                    {item.popular && (
                      <Box
                        position="absolute"
                        top={3}
                        right={3}
                        bg="brand.500"
                        color="white"
                        fontSize="xs"
                        fontWeight="700"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        Populaire
                      </Box>
                    )}
                    <Stack spacing={3} flex={1}>
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="xl"
                        bg="brand.50"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Heading
                        as="h3"
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight="700"
                        color="gray.800"
                        lineHeight="1.3"
                      >
                        {item.title}
                      </Heading>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" flex={1}>
                        {item.text}
                      </Text>
                      {item.link && (
                        <Link
                          as={RouterLink}
                          to={item.link}
                          color="brand.500"
                          fontWeight="600"
                          fontSize="sm"
                          _hover={{ textDecoration: 'underline' }}
                          display="inline-flex"
                          alignItems="center"
                          gap={1}
                        >
                          {item.linkLabel} <ArrowForwardIcon boxSize={3} />
                        </Link>
                      )}
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Résultats de nos projets de peinture intérieure"
          subtitle="Finitions soignées, surfaces préparées et projets intérieurs réalisés à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="orange.50">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Flex
                w="64px"
                h="64px"
                borderRadius="full"
                bg="brand.500"
                align="center"
                justify="center"
              >
                <Icon as={FaShieldAlt} color="white" boxSize={7} />
              </Flex>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Garantie satisfaction 100%
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                Chaque projet est réalisé avec les bons produits, les bonnes techniques et le niveau de soin que vous méritez. Si le résultat ne vous convient pas, nous revenons corriger sans frais supplémentaires.
              </Text>
              <Button
                size={{ base: 'md', md: 'lg' }}
                bg="brand.500"
                color="white"
                _hover={{ bg: 'brand.600' }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onOpen}
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                fontWeight="600"
              >
                Obtenir ma soumission gratuite
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 7 - FAQ ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="900px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                Questions fréquentes sur la peinture intérieure
              </Heading>

              <Accordion allowMultiple>
                {FAQS.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    mb={3}
                    overflow="hidden"
                  >
                    <AccordionButton
                      py={{ base: 4, md: 5 }}
                      px={{ base: 5, md: 6 }}
                      _hover={{ bg: 'gray.50' }}
                      _expanded={{ bg: 'gray.50' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text
                          fontWeight="600"
                          color="gray.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.4"
                        >
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="brand.500" />
                    </AccordionButton>
                    <AccordionPanel
                      pb={{ base: 4, md: 5 }}
                      px={{ base: 5, md: 6 }}
                      pt={0}
                      bg="gray.50"
                    >
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8">
                        {faq.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 8 - LIENS INTERNES ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                Services connexes
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
                {INTERNAL_LINKS.map((link, i) => (
                  <Link
                    key={i}
                    as={RouterLink}
                    to={link.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={5}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={3} flex={1} justify="space-between">
                        <Text
                          fontWeight="600"
                          color="gray.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.3"
                        >
                          {link.title}
                        </Text>
                        <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                          {link.description}
                        </Text>
                        <HStack spacing={1} color="brand.500">
                          <Text fontSize="sm" fontWeight="medium">Voir</Text>
                          <ArrowForwardIcon boxSize={3} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="app.ctaBg">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
              >
                Prêt à transformer votre intérieur&#xA0;?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Soumission gratuite en moins de 24h
              </Text>
              <Button
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="brand.500"
                _hover={{ bg: 'gray.100' }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onOpen}
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                fontWeight="700"
              >
                Obtenir ma soumission gratuite
              </Button>
            </Stack>
          </Container>
        </Box>

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
