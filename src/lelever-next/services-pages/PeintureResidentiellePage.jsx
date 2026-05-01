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
  FaCalendarAlt,
  FaShieldAlt,
  FaBroom,
  FaClock,
  FaComments,
  FaStar,
  FaHome,
  FaBuilding,
  FaDoorOpen,
  FaKey,
  FaUsers,
  FaHammer,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import residentielleHeroImg from '../images/2-services/Page peinture résidentielle/Photo header/Paint Cut-in Louis.jpeg';

import avantApresRes1a from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre professionnel Montréal, Le Lever du Pinceau a peint l_ensemble de cette maison centenaire de Montréal.jpg';
import avantApresRes1b from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peinturé l_ensemble de cette maison plein de boiserie décorative à Westmount.jpg';
import avantApresRes2a from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peint cette appartement au Plateau-Mont-Royal à Montréal.jpg';
import avantApresRes2b from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre pro Montréal, Le Lever du Pinceau a peint cette appartement du 3e étage au Plateau-Mont-Royal à Montréal.jpg';
import avantApresRes3a from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peint ce condo divise dans le quartier de Griffintown à Montréal.jpg';
import avantApresRes3b from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréalais, Le Lever du Pinceau a peint tout ce condo à Montréal.jpg';

const CHECKMARKS = [
  {
    icon: FaCalendarAlt,
    title: 'Horaires flexibles adaptés à votre réalité',
    text: 'Que vous habitiez sur place ou que la propriété soit vide, nous planifions les travaux selon votre situation et votre niveau de tolérance aux perturbations.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète des meubles et effets personnels',
    text: 'Toiles de protection, déplacement des meubles si nécessaire, ruban de masquage professionnel. Votre espace est traité avec le même soin que si c\'était le nôtre.',
  },
  {
    icon: FaBroom,
    title: 'Chantier propre du début à la fin',
    text: 'Nettoyage quotidien du chantier, sortie des déchets et remise en état des lieux à la fin des travaux. Vous retrouvez votre maison propre.',
  },
  {
    icon: FaClock,
    title: 'Respect des délais annoncés',
    text: 'Un projet résidentiel bien planifié a un début et une fin clairs. Nous ne laissons pas traîner un chantier et nous vous informons de l\'avancement.',
  },
  {
    icon: FaComments,
    title: 'Communication claire à chaque étape',
    text: 'Soumission détaillée, confirmation avant chaque étape et disponibilité pour vos questions. Pas de surprises, pas de malentendus.',
  },
  {
    icon: FaStar,
    title: 'Garantie sur les travaux effectués',
    text: 'Si quelque chose ne vous satisfait pas, nous revenons corriger. Notre réputation repose sur des clients satisfaits qui nous recommandent.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Maison unifamiliale',
    text: 'Intérieur complet, pièces sélectionnées ou rafraîchissement ciblé. Nous nous adaptons à vos besoins et à votre occupation du lieu.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Condo',
    text: 'Coordination avec la copropriété, protection des parties communes et chantier propre dans un espace compact.',
    link: '/services/peinture-residentielle/condo',
    linkLabel: 'Voir notre service condo',
    popular: true,
  },
  {
    icon: FaDoorOpen,
    title: 'Appartement',
    text: 'Peinture avant emménagement, entre deux locataires ou pour rafraîchir un espace. Travail rapide et résultat net.',
    link: '/services/peinture-residentielle/appartement',
    linkLabel: 'Voir notre service appartement',
  },
  {
    icon: FaKey,
    title: 'Logement locatif',
    text: 'Remise en état entre deux locataires, peinture blanche ou couleur neutre, travail efficace pour minimiser les pertes de loyer.',
    link: null,
  },
  {
    icon: FaUsers,
    title: 'Multi-logements',
    text: 'Duplex, triplex, immeubles à revenus. Gestion coordonnée de plusieurs logements avec un service structuré.',
    link: null,
  },
  {
    icon: FaHammer,
    title: 'Maison neuve ou rénovation',
    text: 'Premier entretien d\'une maison neuve ou peinture après rénovation majeure. Travail propre en fin de chantier.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Est-ce que je dois quitter ma maison pendant les travaux\u00A0?',
    answer: 'Non, dans la majorité des cas. Nous planifions les travaux pièce par pièce pour que vous puissiez continuer à utiliser votre espace. Selon l\'ampleur du projet et vos préférences, nous adaptons le déroulement pour minimiser les inconvénients.',
  },
  {
    question: 'Comment protégez-vous mes meubles et mes effets personnels\u00A0?',
    answer: 'Nous couvrons les planchers avec des toiles de protection, déplaçons les meubles légers si nécessaire, et utilisons du ruban de masquage professionnel pour protéger les surfaces qui ne doivent pas être peintes. Un nettoyage est effectué à la fin de chaque journée.',
  },
  {
    question: 'Combien de temps dure un projet résidentiel complet\u00A0?',
    answer: 'La durée varie selon la superficie, le nombre de pièces, l\'état des surfaces et le niveau de préparation requis. Une soumission détaillée inclut toujours un échéancier réaliste. La plupart des appartements et condos se réalisent en 1 à 3 jours. Les maisons complètes prennent généralement plus longtemps.',
  },
  {
    question: 'Donnez-vous une garantie sur vos travaux\u00A0?',
    answer: 'Oui. Si le résultat ne vous satisfait pas, nous revenons corriger sans frais supplémentaires. Notre engagement est simple : un travail propre, soigné et durable dont vous êtes pleinement satisfait.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Techniques, surfaces, finis et produits - tout ce qui touche à l\'application.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture extérieure',
    description: 'Revêtement, balcon, clôture et surfaces extérieures.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Peinture commerciale',
    description: 'Bureaux, commerces et restaurants - hors heures et selon vos contraintes.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Peinture de condo',
    description: 'Coordination copropriété, protection parties communes, chantier propre.',
    to: '/services/peinture-residentielle/condo',
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

export default function PeintureResidentiellePage() {
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
      before: avantApresRes1a,
      after: avantApresRes1b,
      description: 'Peinture résidentielle - maison complète Montréal',
    },
    {
      before: avantApresRes2a,
      after: avantApresRes2b,
      description: 'Peinture appartement - Plateau-Mont-Royal, Montréal',
    },
    {
      before: avantApresRes3a,
      after: avantApresRes3b,
      description: 'Peinture condo - Griffintown, Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture résidentielle à Montréal | Maison, condo, appartement | Le Lever du Pinceau"
        description="Service de peinture résidentielle à Montréal. Maison, condo, appartement, logement locatif. Horaires flexibles, protection des meubles, chantier propre. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-residentielle"
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
            src={residentielleHeroImg}
            alt="Peinture résidentielle à Montréal - peintre professionnel en action"
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
                    Peinture résidentielle
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
                  Peinture résidentielle à Montréal - Maison, condo, appartement
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Un chantier propre, bien coordonné et respectueux de votre espace de vie.
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

        {/* ===== SECTION 3 - CHECKMARKS EXPÉRIENCE CLIENT ===== */}
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
                  Une expérience sans friction, de la soumission à la remise des clés
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Chez vous, chaque détail compte - la finition, mais aussi l&apos;expérience du chantier
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

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
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
                  Tous les types de propriétés résidentielles
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Chaque type d&apos;habitation a ses contraintes - nous nous adaptons à toutes
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
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
          title="Résultats de nos projets résidentiels"
          subtitle="Maisons, condos et appartements - des chantiers bien menés et des finitions soignées à Montréal."
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
                Votre maison est votre espace. Nous la traitons avec soin, nous respectons votre vie quotidienne et nous livrons un résultat dont vous êtes pleinement satisfait. C&apos;est notre engagement sur chaque projet résidentiel.
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
                Questions fréquentes sur la peinture résidentielle
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
                Prêt à rafraîchir votre espace résidentiel&#xA0;?
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
