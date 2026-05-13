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
  FaLeaf,
  FaSun,
  FaEye,
  FaClock,
  FaSyncAlt,
  FaShieldAlt,
  FaTree,
  FaBorderAll,
  FaHome,
  FaArchway,
  FaLayerGroup,
  FaCouch,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import teintureHeroImg from '../images/L2 Services specialise/Photo page teinture/Header.PNG';
import teintureImg5973 from '../images/L2 Services specialise/Photo page teinture/Avant après/IMG_5973.PNG';
import teintureImg5974 from '../images/L2 Services specialise/Photo page teinture/Avant après/IMG_5974.PNG';

const PLACEHOLDER_PAIR = { before: null, after: null };

const CHECKMARKS = [
  {
    icon: FaLeaf,
    title: 'Préparation du bois avant application',
    text: 'Nettoyage, sablage léger, retrait des résidus, séchage complet : une teinture tient bien seulement si le bois est prêt à la recevoir.',
  },
  {
    icon: FaSun,
    title: 'Le bon produit selon l\'exposition',
    text: 'Un patio plein soleil, une clôture à l\'ombre ou un revêtement exposé à la pluie ne demandent pas la même finition ni la même protection.',
  },
  {
    icon: FaEye,
    title: 'Respect du grain et de l\'apparence naturelle',
    text: 'La teinture met en valeur le bois au lieu de le masquer. Le choix du bon niveau d\'opacité change tout sur le résultat final.',
  },
  {
    icon: FaClock,
    title: 'Application au bon moment de la saison',
    text: 'Température, humidité, pluie annoncée et temps de séchage influencent directement la tenue du produit.',
  },
  {
    icon: FaSyncAlt,
    title: 'Entretien plus simple à long terme',
    text: 'Une teinture bien choisie et bien appliquée s\'entretient plus facilement qu\'une finition ratée qui pèle ou s\'use de façon inégale.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection propre du chantier',
    text: 'Protection des surfaces voisines, du paysagement et des éléments non teints. Nettoyage complet à la fin du chantier.',
  },
];

const SPECIALITES = [
  {
    icon: FaTree,
    title: 'Patio / terrasse en bois',
    text: 'Protection contre les UV, l\'eau, l\'usure et les passages fréquents. Prévoir une finition adaptée au niveau d\'exposition.',
  },
  {
    icon: FaBorderAll,
    title: 'Clôture en bois',
    text: 'Uniformité visuelle, protection contre le grisaillement et durabilité face aux intempéries.',
  },
  {
    icon: FaHome,
    title: 'Revêtement extérieur en bois',
    text: 'Teinture adaptée au parement bois pour protéger sans emprisonner l\'humidité inutilement.',
  },
  {
    icon: FaArchway,
    title: 'Pergola, gazebo et structures décoratives',
    text: 'Finition plus soignée sur des éléments visibles qui influencent l\'apparence générale de la cour.',
  },
  {
    icon: FaLayerGroup,
    title: 'Marches, rampes et garde-corps en bois',
    text: 'Usure localisée et sécurité : l\'application doit tenir compte des zones de frottement et des surfaces touchées fréquemment.',
  },
  {
    icon: FaCouch,
    title: 'Mobilier extérieur ou boiseries ponctuelles',
    text: 'Teinture sur mesure pour les éléments bois secondaires - cadres, boiseries décoratives ou mobilier extérieur en bois.',
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre peinture et teinture extérieure\u00A0?',
    answer: 'La peinture forme généralement un film en surface, alors que la teinture pénètre davantage le bois et laisse plus ou moins apparaître son grain selon l\'opacité choisie.',
  },
  {
    question: 'À quelle fréquence faut-il reteindre un patio ou une clôture\u00A0?',
    answer: 'Cela dépend surtout du niveau d\'exposition au soleil, à la pluie et à l\'usure. Certaines surfaces demandent un entretien plus fréquent que d\'autres.',
  },
  {
    question: 'Faut-il sabler ou préparer le bois avant de teindre\u00A0?',
    answer: 'Oui, dans la majorité des cas. Une bonne préparation améliore l\'adhérence, l\'uniformité du résultat et la durée de vie de la finition.',
  },
  {
    question: 'Quelle teinture choisir : transparente, semi-transparente ou opaque\u00A0?',
    answer: 'Le bon choix dépend du look recherché, de l\'état du bois et du niveau de protection souhaité. Toutes ne donnent pas le même rendu ni le même cycle d\'entretien.',
  },
  {
    question: 'Peut-on teindre du bois déjà traité ou déjà fini\u00A0?',
    answer: 'Souvent oui, mais il faut d\'abord vérifier l\'état de la surface, le produit déjà en place et la préparation nécessaire avant d\'appliquer une nouvelle teinture.',
  },
  {
    question: 'Que se passe-t-il s\'il pleut trop vite après l\'application\u00A0?',
    answer: 'La pluie, l\'humidité et une mauvaise fenêtre météo peuvent affecter le séchage et le résultat. C\'est pourquoi le bon moment d\'application est aussi important que le produit lui-même.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture extérieure',
    description: 'Service technique extérieur global pour tous types de matériaux.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Décapage, sablage, réparation et remise en état avant finition.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture extérieure à Montréal',
    description: 'Page locale pour les projets extérieurs dans la région de Montréal.',
    to: '/peinture-exterieure-montreal',
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
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24 h, sans engagement.',
    to: '/contact',
  },
];

export default function TeintureExterieurePage() {
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
        name: 'Teinture extérieure',
        item: 'https://leleverdupinceau.ca/services/teinture-exterieure',
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
      before: teintureImg5973,
      after: teintureImg5974,
      description: 'Teinture extérieure bois Montréal - avant / après',
    },
    {
      ...PLACEHOLDER_PAIR,
      description:
        'Deuxième exemple : à remplir avec une paire teinture bois (la même que la page peinture extérieure Montréal a été retirée ici).',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Teinture extérieure à Montréal | Patio, clôture et bois | Le Lever du Pinceau"
        description="Service de teinture extérieure à Montréal pour patio, clôture, revêtement et autres surfaces en bois. Protection durable, préparation soignée et soumission gratuite."
        canonicalPath="/services/teinture-exterieure"
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
            src={teintureHeroImg}
            alt="Teinture extérieure bois à Montréal - patio, clôture et revêtement"
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
                  <Text color="white" fontWeight="medium">
                    Teinture extérieure
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
                  Teinture extérieure à Montréal pour patio, clôture et revêtement bois
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Protégez et ravivez vos surfaces en bois avec une finition adaptée au climat québécois et à l&apos;exposition réelle de votre propriété.
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color="whiteAlpha.900"
                  maxW={{ base: '100%', md: '620px', lg: '720px' }}
                  lineHeight="1.6"
                >
                  Teinture semi-transparente, opaque ou protectrice pour patios, clôtures, revêtements et autres surfaces extérieures en bois.
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

        {/* ===== SECTION 3 - CHECKMARKS ===== */}
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
                  Pourquoi confier votre teinture extérieure à des professionnels?
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un bon produit ne suffit pas : le résultat dépend surtout de la préparation, du choix de finition et des conditions d&apos;application.
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

        {/* ===== SECTION 4 - SPÉCIALITÉS BOIS ===== */}
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
                  Les surfaces extérieures en bois que nous teintons le plus souvent
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Chaque surface a ses particularités : niveau d&apos;exposition, type de bois, usure et fréquence d&apos;entretien varient d&apos;un projet à l&apos;autre.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {SPECIALITES.slice(0, 3).map((item, i) => (
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
                {SPECIALITES.slice(3).map((item, i) => (
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
          title="Des surfaces en bois ravivées et mieux protégées"
          subtitle="Quelques projets récents de teinture extérieure à Montréal et dans les environs."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE / ENGAGEMENT ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="orange.50">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Une teinture appliquée avec méthode, pas à la va-vite
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                La tenue d&apos;une teinture extérieure dépend autant de la préparation et des conditions d&apos;application que du produit choisi. Nous évaluons l&apos;état du bois, le niveau d&apos;exposition et la bonne fenêtre météo avant d&apos;intervenir pour livrer un résultat propre, durable et cohérent avec votre surface.
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
                Soumission gratuite - réponse en moins de 24 h
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
                Questions fréquentes sur la teinture extérieure
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
                En savoir plus sur nos services connexes
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
                Prêt à protéger vos surfaces en bois pour la saison?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez votre soumission gratuite en moins de 24 h et réservez votre créneau au bon moment de la saison.
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
