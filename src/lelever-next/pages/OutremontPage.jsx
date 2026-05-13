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
  FaBroom,
  FaShieldAlt,
  FaStar,
  FaClock,
  FaComments,
  FaHome,
  FaCouch,
  FaBuilding,
  FaKey,
  FaPaintBrush,
  FaBriefcase,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import heroImg from '../images/neighborhood_placeholder.jpg';

const PLACEHOLDER = { before: null, after: null };

const CHECKMARKS = [
  {
    icon: FaBroom,
    title: 'Chantier discret et respectueux',
    text: 'Dans un secteur calme et résidentiel, la façon de travailler compte. Le chantier reste propre, ordonné et peu dérangeant pour les lieux et le voisinage.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection rigoureuse des lieux',
    text: 'Planchers, moulures, mobilier, circulation et zones de vie sont protégés avec sérieux du début à la fin. Rien n\'est laissé au hasard.',
  },
  {
    icon: FaStar,
    title: 'Finitions nettes dans des espaces soignés',
    text: 'Les détails ressortent davantage dans les propriétés bien entretenues. Les lignes, reprises et transitions doivent être impeccables pour être à la hauteur.',
  },
  {
    icon: FaClock,
    title: 'Échéancier clair pour projets sensibles',
    text: 'Avant emménagement, avant mise en marché ou en occupation continue - le calendrier est établi dès le départ et tenu tout au long du chantier.',
  },
  {
    icon: FaComments,
    title: 'Communication simple et professionnelle',
    text: 'Le client veut savoir où le projet en est, sans devoir gérer le chantier au quotidien. On informe, on coordonne et on avance.',
  },
  {
    icon: FaHome,
    title: 'Habitués aux propriétés résidentielles de qualité',
    text: 'Maisons, condos et immeubles soignés exigent une exécution à la hauteur du cadre. Le standard d\'Outremont est intégré à notre façon de travailler.',
  },
];

const CONTEXTES = [
  {
    icon: FaCouch,
    title: 'Maison familiale occupée',
    text: 'Protection maximale, progression par zones, coordination simple pour que la vie continue pendant les travaux. Pas de compromis sur la propreté au quotidien.',
  },
  {
    icon: FaBuilding,
    title: 'Condo ou unité haut de gamme',
    text: 'Accès, voisinage, propreté et discrétion sont essentiels. Le chantier doit être contrôlé et propre à tout moment, du premier jour à la remise des lieux.',
  },
  {
    icon: FaKey,
    title: 'Rafraîchissement avant prise de possession',
    text: 'Projet à exécuter vite, proprement et dans un calendrier serré avant l\'installation. Un espace propre et bien peint est prêt à recevoir son nouvel occupant.',
  },
  {
    icon: FaPaintBrush,
    title: 'Remise en état légère d\'un espace soigné',
    text: 'Le client ne veut pas tout refaire - il veut redonner de l\'éclat à un espace déjà beau, sans complications ni surprises en cours de route.',
  },
  {
    icon: FaBriefcase,
    title: 'Projet commercial ou bureau de proximité',
    text: 'Travaux planifiés avec méthode pour limiter l\'impact sur l\'activité et l\'image du lieu. Chantier propre, intervention discrète et résultat net.',
  },
];

const SERVICES = [
  {
    title: 'Peinture intérieure à Montréal',
    text: 'Pour les maisons et condos d\'Outremont où la finition intérieure, la protection et la coordination comptent autant que le résultat.',
    to: '/peinture-interieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture extérieure à Montréal',
    text: 'Pour les façades, boiseries extérieures, balcons et surfaces exposées au climat montréalais.',
    to: '/peinture-exterieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien coordonné et sans stress dans votre maison ou appartement.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture condo',
    text: 'Pour les condos et unités en copropriété où l\'accès, la coordination et la propreté du chantier sont essentiels.',
    to: '/services/peinture-residentielle/condo',
    cta: 'Voir la page',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Peinture extérieure à Montréal',
    description: 'Façades, boiseries, balcons et surfaces exposées.',
    to: '/peinture-exterieure-montreal',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos, appartements - toutes les formules.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture condo',
    description: 'Coordination, accès et finitions en copropriété.',
    to: '/services/peinture-residentielle/condo',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel ?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Voir nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous intervenez dans les maisons et condos à Outremont\u00A0?',
    answer: 'Oui. Nous intervenons autant dans les maisons que dans les condos à Outremont. Chaque propriété a ses particularités, que ce soit l\'accès, la protection des lieux, la présence d\'occupants ou le niveau de finition attendu. Notre approche s\'adapte au type de bâtiment pour assurer un chantier propre, bien encadré et simple à vivre du début à la fin.',
  },
  {
    question: 'Comment se déroule un chantier dans un espace encore occupé\u00A0?',
    answer: 'Un chantier dans un espace occupé demande surtout de la méthode, de la discrétion et une bonne coordination. Nous planifions les travaux pour limiter les impacts sur votre quotidien, en avançant par zones lorsque nécessaire et en gardant les lieux propres tout au long du projet. L\'objectif est de rendre le chantier aussi organisé, prévisible et peu dérangeant que possible.',
  },
  {
    question: 'Est-ce que vous protégez les planchers, moulures et mobilier avant de peindre\u00A0?',
    answer: 'Oui, systématiquement. La protection des surfaces fait partie intégrante de notre façon de travailler. Nous protégeons les planchers, les moulures, le mobilier et les éléments fixes avant de commencer afin d\'éviter les éclaboussures, traces ou dommages. Cette étape est essentielle pour assurer un chantier propre et un résultat à la hauteur des attentes.',
  },
  {
    question: 'Pouvez-vous travailler avant un emménagement ou une mise en vente\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets avant un emménagement, une mise en marché ou une séance photo pour la vente. Dans ce contexte, le respect des délais est particulièrement important. Nous planifions donc le projet avec un échéancier clair afin que les travaux soient terminés au bon moment et que l\'espace soit prêt à être utilisé ou présenté.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir une soumission à Outremont\u00A0?',
    answer: 'Dans la majorité des cas, nous répondons en moins de 24 heures. Le délai exact dépend du type de projet, des informations fournies et de la période de l\'année. Plus votre demande est claire dès le départ, plus nous pouvons vous transmettre rapidement une soumission précise, adaptée à votre propriété et à vos besoins à Outremont.',
  },
];

export default function OutremontPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const carouselImages = [
    {
      ...PLACEHOLDER,
      description:
        'Emplacement 1 : avant/après à tourner sur un chantier Outremont (pas de visuels repris de la page condo).',
    },
    {
      ...PLACEHOLDER,
      description:
        'Emplacement 2 : deuxième paire locale pour crédibiliser le quartier sans dupliquer d\'autres services.',
    },
    {
      ...PLACEHOLDER,
      description:
        'Emplacement 3 : troisième paire réservée aux réalisations Outremont.',
    },
  ];

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
        name: 'Secteurs',
        item: 'https://leleverdupinceau.ca/secteurs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Montréal',
        item: 'https://leleverdupinceau.ca/secteurs/montreal',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Outremont',
        item: 'https://leleverdupinceau.ca/secteurs/montreal/outremont',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca',
    telephone: '+15148005155',
    areaServed: [
      { '@type': 'City', name: 'Outremont' },
      { '@type': 'City', name: 'Montréal' },
    ],
    hasCredential: 'RBQ #5864-1481-01',
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

  return (
    <Fragment>
      <SEOHead
        title="Peintre à Outremont | Maisons, condos et projets soignés | Le Lever du Pinceau"
        description="Peintre à Outremont pour maisons, condos et projets résidentiels soignés. Travaux propres, finitions nettes, communication claire et soumission gratuite."
        canonicalPath="/secteurs/montreal/outremont"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqSchema]}
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
            alt="Peintre à Outremont - maisons et condos résidentiels soignés"
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
                    to="/secteurs"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Secteurs
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Link
                    as={RouterLink}
                    to="/secteurs/montreal"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Montréal
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Outremont
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
                  Peintre à Outremont
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Une équipe de peintres de métier pour les maisons, condos et projets soignés à Outremont.
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color="whiteAlpha.900"
                  maxW={{ base: '100%', md: '620px', lg: '720px' }}
                  lineHeight="1.7"
                >
                  Travaux propres, communication claire, échéancier respecté et finitions nettes pour les propriétés d&apos;Outremont.
                </Text>

                <Flex gap={3} wrap="wrap" pt={{ base: 2, md: 3 }}>
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
                  <Button
                    as={RouterLink}
                    to="/realisations"
                    size={{ base: 'md', md: 'lg' }}
                    variant="outline"
                    color="white"
                    borderColor="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="full"
                    px={{ base: 6, md: 8 }}
                    fontWeight="600"
                  >
                    Voir nos réalisations à Montréal
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box bg="gray.50" borderTop="1px solid" borderTopColor="gray.200" borderBottom="1px solid" borderBottomColor="gray.200">
          <TrustBanner />
        </Box>

        {/* ===== SECTION 3 - CHECKMARKS OUTREMONT ===== */}
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
                  Une approche adaptée aux propriétés d&apos;Outremont
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Dans un quartier où l&apos;on remarque les détails, la qualité du chantier compte autant que le résultat final.
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

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS À OUTREMONT ===== */}
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
                  Des besoins différents selon le type de propriété à Outremont
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Une maison familiale, un condo haut de gamme ou un immeuble bien entretenu ne se gèrent pas exactement de la même manière.
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
                      <Flex w="48px" h="48px" borderRadius="xl" bg="brand.50" align="center" justify="center">
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3">
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
                      <Flex w="48px" h="48px" borderRadius="xl" bg="brand.50" align="center" justify="center">
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3">
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

        {/* ===== SECTION 5 - SERVICES LES PLUS PERTINENTS POUR OUTREMONT ===== */}
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
                  Les services les plus demandés à Outremont
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Trouvez rapidement le bon service selon votre type de projet.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {SERVICES.map((service, i) => (
                  <Link key={i} as={RouterLink} to={service.to} _hover={{ textDecoration: 'none' }}>
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={{ base: 6, md: 7 }}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'md' }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={4} flex={1} justify="space-between">
                        <Box>
                          <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3" mb={3}>
                            {service.title}
                          </Heading>
                          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                            {service.text}
                          </Text>
                        </Box>
                        <HStack spacing={1} color="brand.500">
                          <Text fontSize="sm" fontWeight="600">{service.cta}</Text>
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

        {/* ===== SECTION 6 - RÉALISATIONS PROCHES D'OUTREMONT ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Quelques réalisations récentes près d'Outremont"
          subtitle="La meilleure preuve locale reste de montrer des projets montréalais comparables au niveau d'exigence du quartier."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />

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
                Questions fréquentes sur nos services de peinture à Outremont
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
                        <Text fontWeight="600" color="gray.800" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.4">
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="brand.500" />
                    </AccordionButton>
                    <AccordionPanel pb={{ base: 4, md: 5 }} px={{ base: 5, md: 6 }} pt={0} bg="gray.50">
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

        {/* ===== SECTION 8 - LIENS INTERNES STRATÉGIQUES ===== */}
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
                Explorer les bons services selon votre projet
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
                {INTERNAL_LINKS.map((link, i) => (
                  <Link key={i} as={RouterLink} to={link.to} _hover={{ textDecoration: 'none' }}>
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={5}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'md' }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={3} flex={1} justify="space-between">
                        <Text fontWeight="600" color="gray.800" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.3">
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
                Un projet de peinture à Outremont&#xA0;?
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.900" lineHeight="1.7">
                Obtenez votre soumission gratuite en moins de 24h.
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
