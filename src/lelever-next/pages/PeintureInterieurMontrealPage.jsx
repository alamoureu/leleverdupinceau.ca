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
  FaTruck,
  FaCalendarAlt,
  FaShieldAlt,
  FaStar,
  FaComments,
  FaHome,
  FaKey,
  FaTag,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import heroImg from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/header.jpg';
import griffintownAvant from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Griffintown avant.jpg';
import griffintownApres from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Griffintown après.JPG';
import plateauAvant from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau avant.jpg';
import plateauApres from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/plateau après.jpg';
import westmountAvant from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount avant.jpg';
import westmountApres from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount après.jpg';
import ndgAvant from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Notre-dame-de-grâce avant.jpg';
import ndgApres from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Notre-dame-de-grâce après.jpg';

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Habitués aux condos, plex et maisons de quartier',
    text: 'Centre-ville, Plateau, Outremont, Ville-Marie ou Westmount : les contraintes ne sont pas les mêmes d\'un projet à l\'autre.',
  },
  {
    icon: FaTruck,
    title: 'Logistique simple en milieu urbain',
    text: 'Accès, stationnement, immeuble occupé, ascenseur, circulation du matériel : on planifie le chantier pour que tout se passe proprement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair pour les projets sensibles',
    text: 'Avant emménagement, avant vente, avant retour au bureau ou entre deux occupations : on comprend l\'importance du timing.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète des espaces habités',
    text: 'Dans un condo ou un appartement occupé, chaque pièce compte. Le chantier doit rester propre, structuré et rassurant.',
  },
  {
    icon: FaStar,
    title: 'Finition nette dans des espaces très visibles',
    text: 'En ville, les pièces sont souvent plus compactes et les détails sautent aux yeux. Le niveau de finition doit être impeccable.',
  },
  {
    icon: FaComments,
    title: 'Communication simple du début à la fin',
    text: 'Quand le projet se fait vite et dans un espace occupé, la clarté de communication compte autant que l\'exécution.',
  },
];

const CONTEXTES = [
  {
    icon: FaBuilding,
    title: 'Condo centre-ville ou tour résidentielle',
    text: 'Accès, ascenseur, stationnement limité, heures de travaux et espace compact : tout doit être coordonné proprement.',
  },
  {
    icon: FaHome,
    title: 'Plex, triplex et immeubles montréalais',
    text: 'Escaliers, circulation verticale, murs plus anciens, petites zones communes et voisinage rapproché demandent une exécution respectueuse et bien protégée.',
  },
  {
    icon: FaHome,
    title: 'Maison unifamiliale en quartier résidentiel',
    text: 'Les familles veulent un chantier rapide, propre et prévisible, sans que la maison soit désorganisée plus longtemps que nécessaire.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en marché',
    text: 'Peindre avant de vendre permet souvent de rendre l\'espace plus lumineux, propre et projetable pour les visites.',
  },
  {
    icon: FaKey,
    title: 'Travaux avant emménagement ou prise de possession',
    text: 'C\'est souvent la meilleure fenêtre pour peindre rapidement l\'intérieur avant de replacer les meubles et reprendre la routine.',
  },
];

const FAQS = [
  {
    question: 'Intervenez-vous dans quels quartiers de Montréal\u00A0?',
    answer: 'Oui. Nous desservons Montréal et plusieurs quartiers comme le Plateau Mont-Royal, Ville-Marie, Outremont, Westmount, Griffintown, Rosemont et d\'autres secteurs du Grand Montréal.',
  },
  {
    question: 'Faites-vous la peinture intérieure de condos à Montréal\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets en condo, y compris dans des immeubles occupés ou avec contraintes d\'accès. Nous adaptons le chantier aux règles de l\'immeuble et à l\'espace disponible.',
  },
  {
    question: 'Pouvez-vous peindre avant un emménagement ou une mise en marché\u00A0?',
    answer: 'Oui. C\'est l\'un des contextes les plus fréquents. Nous planifions les travaux pour que l\'espace soit prêt dans le bon délai, avant l\'arrivée des meubles ou des visites.',
  },
  {
    question: 'Comment gérez-vous l\'accès, le stationnement ou l\'ascenseur dans les immeubles montréalais\u00A0?',
    answer: 'Ces éléments sont intégrés à la planification du chantier. L\'objectif est de limiter les imprévus, protéger les zones de passage et garder une exécution fluide malgré les contraintes de l\'immeuble.',
  },
  {
    question: 'Faites-vous aussi la peinture d\'armoires, de condos et d\'appartements\u00A0?',
    answer: 'Oui. Selon le projet, nous pouvons aussi intervenir sur des armoires de cuisine, des condos et des appartements. Ces services ont aussi leurs pages dédiées dans le site.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Surfaces, finis, couches et préparation - la page technique complète.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos, logements et appartements à Montréal.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture condo',
    description: 'Projets spécialisés en condo : accès, contraintes et finition.',
    to: '/services/peinture-residentielle/condo',
  },
  {
    title: 'Peinture appartement',
    description: 'Remise en état locative, logement occupé ou rafraîchissement.',
    to: '/services/peinture-residentielle/appartement',
  },
  {
    title: 'Nos secteurs desservis à Montréal',
    description: 'Plateau, Ville-Marie, Outremont, Westmount et Grand Montréal.',
    to: '/secteurs/montreal',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la finition.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureInterieurMontrealPage() {
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
        name: 'Peinture intérieure Montréal',
        item: 'https://leleverdupinceau.ca/peinture-interieure-montreal',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Peinture intérieure à Montréal',
    description: 'Service de peinture intérieure à Montréal pour condos, plex et maisons. Chantier propre, finition impeccable, équipe RBQ.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Le Lever du Pinceau',
      url: 'https://leleverdupinceau.ca',
    },
    areaServed: {
      '@type': 'City',
      name: 'Montréal',
    },
  };

  const carouselImages = [
    {
      before: griffintownAvant,
      after: griffintownApres,
      description: 'Peinture intérieure - Condo Griffintown',
    },
    {
      before: plateauAvant,
      after: plateauApres,
      description: 'Rafraîchissement complet - Plateau Mont-Royal',
    },
    {
      before: westmountAvant,
      after: westmountApres,
      description: 'Murs et plafonds - Westmount',
    },
    {
      before: ndgAvant,
      after: ndgApres,
      description: 'Peinture intérieure - Notre-Dame-de-Grâce',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture intérieure à Montréal | Peintres professionnels | Le Lever du Pinceau"
        description="Service de peinture intérieure à Montréal pour condos, plex et maisons. Chantier propre, finition impeccable, équipe RBQ et soumission gratuite."
        canonicalPath="/peinture-interieure-montreal"
        schemaArray={[breadcrumbSchema, faqSchema, serviceSchema]}
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
            src={heroImg}
            alt="Peinture intérieure à Montréal - condo lumineux et impeccable après travaux"
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
            bg="rgba(0, 0, 0, 0.48)"
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
                  <Text color="white" fontWeight="medium">
                    Peinture intérieure Montréal
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
                  Peinture intérieure à Montréal
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Des projets propres, rapides et impeccables dans les condos, plex et maisons du Grand Montréal.
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color="whiteAlpha.850"
                  maxW={{ base: '100%', md: '640px', lg: '720px' }}
                  lineHeight="1.6"
                >
                  Une équipe de peintres de métier pour vos travaux de peinture intérieure à Montréal : condos centre-ville, triplex, maisons unifamiliales et espaces occupés.
                </Text>

                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={4}
                  pt={{ base: 2, md: 3 }}
                  align={{ base: 'flex-start', sm: 'center' }}
                >
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
                  <Link
                    as={RouterLink}
                    to="/realisations"
                    color="whiteAlpha.900"
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="500"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Voir nos réalisations à Montréal →
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box bg="gray.50" borderTop="1px solid" borderTopColor="gray.200" borderBottom="1px solid" borderBottomColor="gray.200">
          <TrustBanner />
        </Box>

        {/* ===== SECTION 3 - CHECKMARKS HYPERLOCAUX ===== */}
        <Box pt={{ base: 10, md: 12, lg: 14 }} pb={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Une exécution pensée pour les réalités d&apos;un projet intérieur à Montréal
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Le bon résultat ne dépend pas seulement de la peinture, mais aussi du contexte dans lequel le chantier se déroule.
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

        {/* ===== SECTION 4 - CONTEXTES MONTRÉALAIS ===== */}
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
                  Une approche différente selon le type de projet à Montréal
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un condo à Griffintown, un plex à Rosemont ou une maison à Outremont ne se planifient pas de la même façon.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {CONTEXTES.slice(0, 3).map((item, i) => (
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

              <Flex wrap="wrap" justify="center" gap={6}>
                {CONTEXTES.slice(3).map((item, i) => (
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
          title="Avant / après de projets intérieurs à Montréal"
          subtitle="Des réalisations qui montrent le niveau de finition, mais aussi la diversité des contextes locaux."
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
                Un résultat impeccable, sans mauvaise surprise
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                À Montréal comme ailleurs, un bon chantier intérieur ne se juge pas seulement à la couleur finale, mais à la propreté, au respect du délai et à la qualité de finition.
              </Text>
              <Box
                bg="white"
                border="2px solid"
                borderColor="brand.500"
                borderRadius="xl"
                px={{ base: 6, md: 10 }}
                py={{ base: 4, md: 5 }}
              >
                <Text fontWeight="700" color="brand.500" fontSize={{ base: 'md', md: 'lg' }}>
                  Satisfaction 100% garantie
                </Text>
              </Box>
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
              <Text fontSize="sm" color="gray.500">
                Réponse généralement en moins de 24h
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 7 - FAQ LOCALE ===== */}
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
                Questions fréquentes sur la peinture intérieure à Montréal
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
                Explorer les pages liées à votre projet
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
                {INTERNAL_LINKS.map((lien, i) => (
                  <Link
                    key={i}
                    as={RouterLink}
                    to={lien.to}
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
                          {lien.title}
                        </Text>
                        <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                          {lien.description}
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
                Prêt à rafraîchir votre intérieur à Montréal&#xA0;?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez une soumission gratuite pour votre projet de peinture intérieure à Montréal
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
