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
  FaCalendarAlt,
  FaTools,
  FaPaintBrush,
  FaTruck,
  FaShieldAlt,
  FaStar,
  FaHome,
  FaBuilding,
  FaTag,
  FaCouch,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import heroImg from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/header extérieure.jpg';
import plateauAvant from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau avant.jpg';
import plateauApres from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/plateau après.jpg';
import verdunAvant from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun avant.jpg';
import verdunApres from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun après.jpg';

const CHECKMARKS = [
  {
    icon: FaCalendarAlt,
    title: 'Saison extérieure courte et bien planifiée',
    text: 'À Montréal, la fenêtre utile est limitée. Le bon séquençage des travaux compte autant que l\'application elle-même.',
  },
  {
    icon: FaTools,
    title: 'Préparation adaptée au gel, au dégel et à l\'humidité',
    text: 'Les surfaces extérieures souffrent des variations de température, des infiltrations et de l\'usure. Rien ne tient sans une base solide.',
  },
  {
    icon: FaPaintBrush,
    title: 'Approche différente selon la façade et le matériau',
    text: 'Brique peinte, métal, bois, béton, escalier ou corniche : chaque surface demande une méthode précise.',
  },
  {
    icon: FaTruck,
    title: 'Gestion propre des accès et des zones serrées',
    text: 'Cour étroite, stationnement limité, voisinage rapproché, circulation sur trottoir : le chantier doit rester maîtrisé.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du paysagement, des fenêtres et des zones de passage',
    text: 'Les projections, poussières et éclats doivent être contrôlés pour garder un chantier net.',
  },
  {
    icon: FaStar,
    title: 'Finition visible et valorisante',
    text: 'À l\'extérieur, chaque détail se voit immédiatement. L\'objectif est autant la durabilité que l\'impact visuel en façade.',
  },
];

const CONTEXTES = [
  {
    icon: FaHome,
    title: 'Triplex, plex et escaliers extérieurs métalliques',
    text: 'Montréal est rempli d\'escaliers, garde-corps et structures visibles qui demandent une préparation rigoureuse, une protection propre et une finition durable.',
  },
  {
    icon: FaBuilding,
    title: 'Façades de brique, corniches et éléments architecturaux',
    text: 'Plusieurs bâtiments ont des détails de façade très exposés. Le chantier doit protéger l\'allure du bâtiment tout en assurant une tenue réelle dans le temps.',
  },
  {
    icon: FaHome,
    title: 'Maisons unifamiliales avec revêtement et cadrages',
    text: 'Le revêtement, les soffites, les cadrages et les portes doivent être harmonisés sans transformer le chantier en projet interminable.',
  },
  {
    icon: FaCouch,
    title: 'Balcons, galeries et zones de passage',
    text: 'Ces surfaces sont fortement sollicitées et très visibles. L\'adhérence, la préparation et le choix du bon fini sont décisifs.',
  },
  {
    icon: FaTag,
    title: 'Travaux avant vente ou rafraîchissement extérieur',
    text: 'Une façade ou un escalier extérieur bien repeint améliore immédiatement l\'impression générale de la propriété et la perception d\'entretien.',
  },
];

const FAQS = [
  {
    question: 'Quelle est la meilleure période pour faire de la peinture extérieure à Montréal\u00A0?',
    answer: 'En général, la meilleure période se situe entre le printemps avancé et le début de l\'automne, quand la température, l\'humidité et les précipitations permettent une bonne adhérence et un bon séchage.',
  },
  {
    question: 'Peignez-vous les escaliers extérieurs, garde-corps et balcons à Montréal\u00A0?',
    answer: 'Oui. Ce sont des projets fréquents. Ces surfaces demandent souvent une préparation plus poussée, surtout lorsqu\'elles sont très exposées ou fortement sollicitées.',
  },
  {
    question: 'Intervenez-vous sur des triplex, plex et façades montréalaises plus anciennes\u00A0?',
    answer: 'Oui. Nous adaptons la planification et la méthode selon le bâtiment, l\'accès, la hauteur, les matériaux et le niveau d\'usure visible sur la façade.',
  },
  {
    question: 'Comment gérez-vous les accès, les zones étroites et le voisinage rapproché\u00A0?',
    answer: 'Ces éléments font partie intégrante de la planification. L\'objectif est de garder un chantier propre, sécuritaire et fluide même dans des contextes urbains serrés.',
  },
  {
    question: 'Faites-vous aussi la teinture extérieure ou seulement la peinture\u00A0?',
    answer: 'Nous faisons les deux, selon la surface et le résultat recherché. La teinture extérieure a aussi sa propre page dédiée lorsqu\'il s\'agit surtout de bois, patios, clôtures ou pergolas.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture extérieure',
    description: 'Surfaces, matériaux, saisons et durabilité - la page technique complète.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Teinture extérieure',
    description: 'Protection du bois, patios, clôtures, pergolas et surfaces en bois.',
    to: '/services/teinture-exterieure',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Décapage, sablage, calfeutrage et remise en état avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos et logements - l\'ensemble de nos services résidentiels.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Nos secteurs desservis à Montréal',
    description: 'Plateau, Ville-Marie, Outremont, Westmount et Grand Montréal.',
    to: '/secteurs/montreal',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la finition extérieure.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureExterieurMontrealPage() {
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
        name: 'Peinture extérieure Montréal',
        item: 'https://leleverdupinceau.ca/peinture-exterieure-montreal',
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
    name: 'Peinture extérieure à Montréal',
    description: 'Service de peinture extérieure à Montréal pour façades, balcons, escaliers et revêtements. Équipe RBQ, chantier propre et soumission gratuite.',
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
      before: plateauAvant,
      after: plateauApres,
      description: 'Façade extérieure - Plateau Mont-Royal',
    },
    {
      before: verdunAvant,
      after: verdunApres,
      description: 'Peinture extérieure - Verdun',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture extérieure à Montréal | Façades, balcons et escaliers | Le Lever du Pinceau"
        description="Service de peinture extérieure à Montréal pour façades, balcons, escaliers et revêtements. Équipe RBQ, chantier propre et soumission gratuite."
        canonicalPath="/peinture-exterieure-montreal"
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
            alt="Peinture extérieure à Montréal - façade, escalier et balcon bien repeints"
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
                    Peinture extérieure Montréal
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
                  Peinture extérieure à Montréal
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Façades, balcons, escaliers, corniches et revêtements peints pour résister au climat montréalais.
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color="whiteAlpha.850"
                  maxW={{ base: '100%', md: '640px', lg: '720px' }}
                  lineHeight="1.6"
                >
                  Un service de peinture extérieure pensé pour les bâtiments montréalais : saison courte, surfaces exposées, accès serrés, hauteurs, escaliers métalliques, briques et revêtements visibles.
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

        {/* ===== SECTION 3 - CHECKMARKS EXTÉRIEUR MONTRÉAL ===== */}
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
                  Une exécution pensée pour l&apos;extérieur à Montréal
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Le climat, les matériaux et les contraintes urbaines changent complètement la manière de planifier un chantier extérieur.
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
                  Une approche différente selon le type de bâtiment à Montréal
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un triplex à escaliers métalliques, une façade à Ville Mont-Royal ou une maison de rangée ne se peignent pas de la même façon.
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
          title="Avant / après de projets extérieurs à Montréal"
          subtitle="Des réalisations qui montrent la qualité du fini et la diversité des contextes urbains."
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
                Une finition qui tient, dans un contexte montréalais exigeant
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                À Montréal, la qualité d&apos;un projet extérieur se juge autant sur l&apos;adhérence et la tenue dans le temps que sur le rendu final.
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
                Questions fréquentes sur la peinture extérieure à Montréal
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
                Prêt à rafraîchir votre extérieur à Montréal&#xA0;?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez une soumission gratuite pour votre projet de peinture extérieure à Montréal
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
