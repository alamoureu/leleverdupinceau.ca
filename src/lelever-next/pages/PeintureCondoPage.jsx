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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaBuilding,
  FaShieldAlt,
  FaHome,
  FaBroom,
  FaCalendarAlt,
  FaStar,
  FaCouch,
  FaGavel,
  FaTag,
  FaKey,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import condoHeroImg from '../images/L3 Sous services/Photo page -peinture condo/header.jpg';
import condoImg7924 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7924 3.jpg';
import condoImg7922 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7922 2.jpg';
import condoImg7999 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7999 4.jpg';
import condoImg7997 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7997 4.jpg';
import condoImg8108 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_8108.jpg';
import condoImg6031 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_6031.jpg';

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Coordination simple avec les règles de l\'immeuble',
    text: 'Heures permises, accès, réservation d\'ascenseur, stationnement de service ou consignes du syndicat : on planifie le chantier pour respecter le cadre de la copropriété.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection des parties communes et du trajet de chantier',
    text: 'Entrées, corridors, ascenseur et zones de passage sont protégés et respectés pour réduire les plaintes, les traces et les irritants.',
  },
  {
    icon: FaHome,
    title: 'Travaux adaptés à un espace occupé',
    text: 'En condo, l\'espace est souvent compact et chaque pièce compte. On séquence les travaux pour limiter l\'encombrement et préserver le confort au quotidien.',
  },
  {
    icon: FaBroom,
    title: 'Gestion propre des matériaux et du bruit',
    text: 'Transport du matériel, protections, contenants, circulation et nettoyage sont gérés avec discipline dans un environnement où tout se voit rapidement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair malgré les contraintes d\'immeuble',
    text: 'On tient compte des règles du bâtiment pour proposer un plan réaliste, sans improvisation de dernière minute.',
  },
  {
    icon: FaStar,
    title: 'Résultat net dans un espace très visible',
    text: 'Dans un condo, les finitions se remarquent tout de suite. L\'objectif est un résultat propre, lumineux et soigné dans un espace souvent plus exposé à la lumière.',
  },
];

const SITUATIONS = [
  {
    icon: FaCouch,
    title: 'Condo occupé au quotidien',
    text: 'Quand vous vivez sur place pendant les travaux, la priorité est d\'organiser le chantier pièce par pièce, avec un niveau de propreté et de coordination qui vous permet de continuer à utiliser votre espace.',
  },
  {
    icon: FaGavel,
    title: 'Condo avec règles strictes de copropriété',
    text: 'Certaines tours et copropriétés imposent des heures de travail, une réservation d\'ascenseur, des zones protégées ou des avis préalables. Nous adaptons le chantier à ces contraintes dès le départ.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant vente',
    text: 'Un condo fraîchement peint paraît plus propre, plus lumineux et plus facile à projeter pour un acheteur. L\'objectif est une mise à niveau rapide, propre et visuellement forte.',
  },
  {
    icon: FaKey,
    title: 'Condo avant emménagement',
    text: 'Quand les clés sont obtenues mais que l\'installation n\'est pas faite, c\'est souvent le meilleur moment pour peindre efficacement, sans contourner le mobilier et sans prolonger l\'inconfort.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Condo avec accès ou circulation complexes',
    text: 'Centre-ville, tour avec monte-charge, stationnement restreint, étages élevés ou long trajet intérieur : la logistique change le chantier. On l\'intègre au plan au lieu de l\'improviser.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous pouvez travailler dans un immeuble avec des règles strictes\u00A0?',
    answer: 'Oui. Nous nous adaptons aux consignes de la copropriété : plages horaires autorisées, réservation d\'ascenseur, accès, circulation et protection des zones communes.',
  },
  {
    question: 'Est-ce que je peux rester dans mon condo pendant les travaux\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous planifions les travaux pour limiter l\'impact sur votre quotidien et garder l\'espace le plus fonctionnel possible pendant le chantier.',
  },
  {
    question: 'Comment protégez-vous les corridors, l\'ascenseur et les parties communes\u00A0?',
    answer: 'Nous transportons le matériel proprement, protégeons le trajet de chantier au besoin et travaillons de manière ordonnée pour limiter les marques, les salissures et les irritants.',
  },
  {
    question: 'Combien de temps faut-il pour peindre un condo\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Une soumission permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Pouvez-vous peindre un condo avant une mise en vente ou avant mon emménagement\u00A0?',
    answer: 'Oui. Ce sont souvent deux des meilleurs moments pour intervenir rapidement et efficacement, avec moins de contraintes et un impact visuel immédiat.',
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
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale - intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil, Rive-Sud et Gatineau.',
    to: '/secteurs',
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
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureCondoPage() {
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
        name: 'Peinture de condo',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle/condo',
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
      before: condoImg7924,
      after: condoImg7922,
      description: 'Salon - Condo Griffintown, Montréal',
    },
    {
      before: condoImg7999,
      after: condoImg7997,
      description: 'Rafraîchissement intérieur - Condo Montréal',
    },
    {
      before: condoImg8108,
      after: condoImg6031,
      description: 'Rénovation avant vente - Condo',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture de condo à Montréal | Chantier propre et coordonné | Le Lever du Pinceau"
        description="Peinture de condo à Montréal. Chantier propre, coordination avec la copropriété, protection des parties communes et échéancier clair. Soumission gratuite."
        canonicalPath="/services/peinture-residentielle/condo"
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
          pb={{ base: 24, sm: 32, md: 28, lg: 32 }}
          bgColor="gray.700"
          overflow="visible"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10 }}
        >
          <Image
            src={condoHeroImg}
            alt="Peinture de condo à Montréal - intérieur lumineux et soigné"
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
            bg="rgba(0, 0, 0, 0.45)"
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
                  <Link
                    as={RouterLink}
                    to="/services/peinture-residentielle"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Peinture résidentielle
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Condo
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
                  Peinture de condo à Montréal
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Un chantier propre, bien coordonné et adapté aux réalités de la copropriété.
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

          <TrustBanner compact showSatisfactionGuarantee={false} />
        </Box>

        {/* ===== SECTION 3 - CHECKMARKS COPROPRIÉTÉ ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} pt={{ base: 20, md: 24, lg: 28 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Une exécution pensée pour la réalité d&apos;un condo
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Dans un immeuble occupé, la qualité du chantier se joue autant dans la coordination que dans la finition.
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

        {/* ===== SECTION 4 - SITUATIONS COURANTES ===== */}
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
                  Une approche différente selon la réalité du condo
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un condo occupé, un condo à vendre ou un condo avant emménagement ne se planifient pas de la même façon.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {SITUATIONS.slice(0, 3).map((item, i) => (
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
                  >
                    <Stack spacing={4}>
                      <Flex
                        w="48px"
                        h="48px"
                        borderRadius="xl"
                        bg="brand.50"
                        align="center"
                        justify="center"
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
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                        {item.text}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>

              {/* Last 2 cards centered */}
              <Flex wrap="wrap" justify="center" gap={6}>
                {SITUATIONS.slice(3).map((item, i) => (
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
                    w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                    maxW={{ lg: '420px' }}
                  >
                    <Stack spacing={4}>
                      <Flex
                        w="48px"
                        h="48px"
                        borderRadius="xl"
                        bg="brand.50"
                        align="center"
                        justify="center"
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
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                        {item.text}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets en condo"
          subtitle="Finitions soignées, espaces lumineux et chantiers propres dans des condos montréalais."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="orange.50">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Un projet de condo bien géré évite beaucoup de friction
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                En copropriété, la qualité d&apos;un chantier ne se mesure pas seulement à la finition finale. Elle se mesure aussi à la propreté, à la coordination, au respect des consignes de l&apos;immeuble et à la simplicité de l&apos;expérience pour vous. Notre approche vise justement à rendre le projet fluide, propre et prévisible du début à la fin.
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
                Questions fréquentes sur la peinture de condo
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
                En savoir plus
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
        <Box
          py={{ base: 16, md: 20, lg: 24 }}
          bg="app.ctaBg"
        >
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
              >
                Besoin d&apos;un chantier propre et bien coordonné dans votre condo&#xA0;?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez votre soumission gratuite en moins de 24h
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
