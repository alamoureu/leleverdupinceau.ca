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
  FaBrush,
  FaCloudRain,
  FaSearch,
  FaTools,
  FaShieldAlt,
  FaLayerGroup,
  FaHome,
  FaSwimmingPool,
  FaBorderAll,
  FaCar,
  FaBuilding,
  FaWindowMaximize,
  FaTh,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import exterieureHeroImg from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.JPG';

import avantApresTerrasse1 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.jpg';
import avantApresTerrasse2 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a teint cette terasse sur la rive-sud de Montréal.jpg';
import avantApresEscalier1 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette escalier en fer forgé dans le sud ouest à Montréal.jpg';
import avantApresEscalier2 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette escalier en fer forgé dans le sud ouest àMontréal.jpg';
import avantApresCorniche1 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.jpg';
import avantApresCorniche2 from '../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peintre extérieur dans le grand Montréal, Le Lever du Pinceau a peint cette cornciche dans Ville-Mont-Royal, Montréal.jpg';

const CHECKMARKS = [
  {
    icon: FaBrush,
    title: 'Préparation adaptée aux conditions extérieures',
    text: 'Nettoyage haute pression, sablage, décapage, rebouchage et calfeutrage selon le type de matériau et son état avant peinture.',
  },
  {
    icon: FaCloudRain,
    title: 'Produits conçus pour le climat québécois',
    text: 'Cycles de gel-dégel, UV intenses, humidité saisonnière : les produits extérieurs doivent résister à des conditions que les peintures intérieures ne subissent pas.',
  },
  {
    icon: FaSearch,
    title: 'Inspection avant application',
    text: 'Vérification de l\'état du substrat, des joints, de la fixation et de la présence d\'humidité emprisonnée avant toute application.',
  },
  {
    icon: FaTools,
    title: 'Application selon la surface',
    text: 'Rouleau, pinceau ou pistolet airless selon le type de surface. La méthode d\'application influe directement sur la durabilité et l\'adhérence.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du chantier et des surfaces voisines',
    text: 'Masquage, toiles et protection des surfaces adjacentes. Nettoyage complet à la fin de chaque journée de travail.',
  },
  {
    icon: FaLayerGroup,
    title: 'Respect des conditions météorologiques',
    text: 'Température minimale, humidité relative et prévisions de pluie sont vérifiées avant chaque application pour garantir l\'adhérence du produit.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Revêtement extérieur',
    text: 'Bois, aluminium, vinyle ou maçonnerie : chaque matériau exige un produit et une technique adaptés pour assurer l\'adhérence et la longévité.',
    link: null,
  },
  {
    icon: FaSwimmingPool,
    title: 'Balcon et patio',
    text: 'Surfaces exposées à l\'usure fréquente, à l\'eau et aux UV. Peinture ou teinture selon le matériau, avec protection renforcée.',
    link: null,
  },
  {
    icon: FaBorderAll,
    title: 'Clôture en bois',
    text: 'Teinture ou peinture adaptée au bois exposé. Protection contre le grisaillement, les UV et l\'humidité.',
    link: null,
  },
  {
    icon: FaCar,
    title: 'Porte de garage',
    text: 'Surface très visible et exposée. Préparation soignée du métal ou du bois, apprêt adhérant et peinture résistante aux intempéries.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Fondation',
    text: 'Peinture hydrofuge spécialisée pour béton ou blocs. Application en conditions optimales pour limiter l\'infiltration d\'humidité.',
    link: null,
  },
  {
    icon: FaWindowMaximize,
    title: 'Fenêtres et cadrages',
    text: 'Boiseries extérieures, dormants et cadrages en bois ou aluminium. Découpes nettes, fini durable et protection contre les éléments.',
    link: null,
  },
  {
    icon: FaTh,
    title: 'Brique et maçonnerie',
    text: 'Teinture ou peinture spécialisée pour brique. Application délicate qui demande un produit respirant pour éviter le cloquage.',
    link: null,
  },
  {
    icon: FaTools,
    title: 'Fer forgé et métal',
    text: 'Sablage, traitement antirouille, apprêt métal et peinture adaptée. Pour rampes, escaliers et garde-corps extérieurs.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle saison est la meilleure pour peindre l\'extérieur\u00A0?',
    answer: 'Les conditions idéales se trouvent généralement au printemps et à l\'automne, avec des températures entre 10 et 30°C et un taux d\'humidité raisonnable. L\'été peut convenir si la chaleur n\'est pas trop intense. Il faut éviter d\'appliquer de la peinture sous la pluie ou lorsque des précipitations sont prévues dans les 24 heures.',
  },
  {
    question: 'Est-ce que vous travaillez sur les maisons en brique\u00A0?',
    answer: 'Oui. La peinture ou la teinture sur brique demande des produits spécialisés qui permettent au matériau de respirer. Une brique mal peinte peut retenir l\'humidité et causer des problèmes à long terme. Nous évaluons l\'état de la brique avant de recommander une approche.',
  },
  {
    question: 'Combien de temps dure une peinture extérieure au Québec\u00A0?',
    answer: 'Avec une bonne préparation et des produits de qualité, une peinture extérieure peut tenir entre 5 et 10 ans selon les conditions d\'exposition. Les surfaces orientées au sud (plus de soleil direct) demandent souvent un entretien plus fréquent.',
  },
  {
    question: 'Comment préparez-vous les surfaces avant la peinture extérieure\u00A0?',
    answer: 'La préparation varie selon le matériau : nettoyage haute pression, sablage, décapage de l\'ancienne peinture écaillée, rebouchage des fissures, calfeutrage des joints et application d\'un apprêt adapté. Cette étape est souvent plus longue que l\'application elle-même, et elle détermine la durabilité du résultat.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Murs, plafonds, boiseries et armoires - techniques et produits.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Teinture extérieure',
    description: 'Patio, clôture et revêtement bois - pénétration et protection.',
    to: '/services/teinture-exterieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, décapage, calfeutrage et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
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

export default function PeintureExterieurePage() {
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
        name: 'Peinture extérieure',
        item: 'https://leleverdupinceau.ca/services/peinture-exterieure',
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
      before: avantApresTerrasse1,
      after: avantApresTerrasse2,
      description: 'Teinture terrasse bois - Rive-Sud de Montréal',
    },
    {
      before: avantApresEscalier1,
      after: avantApresEscalier2,
      description: 'Peinture escalier fer forgé - Sud-Ouest, Montréal',
    },
    {
      before: avantApresCorniche1,
      after: avantApresCorniche2,
      description: 'Peinture corniche - Ville Mont-Royal, Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture extérieure à Montréal | Revêtement, balcon, clôture | Le Lever du Pinceau"
        description="Service de peinture extérieure professionnelle à Montréal. Revêtement, balcon, clôture, porte de garage, fondation. Produits adaptés au climat québécois. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-exterieure"
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
            src={exterieureHeroImg}
            alt="Peinture extérieure à Montréal - revêtement, balcon et clôture"
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
                    Peinture extérieure
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
                  Peinture extérieure à Montréal - Revêtement, balcon, clôture
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Protéger et embellir l&apos;extérieur de votre propriété avec les bons produits et les bonnes techniques.
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

        {/* ===== SECTION 3 - CHECKMARKS TECHNIQUES ===== */}
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
                  Ce qui distingue notre peinture extérieure
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  La durabilité d&apos;une peinture extérieure dépend autant de la préparation que du produit appliqué
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
                  Nos spécialités en peinture extérieure
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Chaque surface extérieure demande une approche spécifique
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
                  >
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
          title="Résultats de nos projets de peinture extérieure"
          subtitle="Terrasses, escaliers, corniches et surfaces extérieures - avant et après nos interventions."
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
                Un projet extérieur bien réalisé, c&apos;est une protection durable pour votre propriété. Nous travaillons avec les bons produits, aux bonnes conditions, et nous assumons le résultat.
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
                Questions fréquentes sur la peinture extérieure
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
                Prêt à redonner de l&apos;éclat à votre extérieur&#xA0;?
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
