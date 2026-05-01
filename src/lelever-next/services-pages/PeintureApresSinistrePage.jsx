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
  FaShieldAlt,
  FaBolt,
  FaWater,
  FaEye,
  FaLayerGroup,
  FaHandshake,
  FaHome,
  FaBuilding,
  FaCut,
  FaWind,
  FaClock,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import sinistreHeroImg from '../images/L2 Services specialise/Photo page -après-sinitre/header.jpg';

import sinistreAvant1 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7988.jpg';
import sinistreApres1 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7990.jpg';
import sinistreAvant2 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7992.jpg';
import sinistreApres2 from '../images/L2 Services specialise/Photo page -après-sinitre/photo avant-après/IMG_7994.jpg';

const CHECKMARKS = [
  {
    icon: FaBolt,
    title: 'Intervention rapide une fois la source maîtrisée',
    text: 'Quand le dégât est arrêté et les surfaces stabilisées, on peut planifier rapidement la reprise pour éviter que la situation s\'éternise inutilement.',
  },
  {
    icon: FaEye,
    title: 'Blocage des taches et reprise des zones marquées',
    text: 'Taches d\'eau, auréoles, jaunissement, suie légère ou reprises visibles : on adapte l\'apprêt et le système de finition pour éviter que les marques réapparaissent.',
  },
  {
    icon: FaHandshake,
    title: 'Coordination avec les réparations nécessaires',
    text: 'Si un plafond a été ouvert, qu\'un mur a été repris ou qu\'un panneau a été remplacé, on séquence les étapes pour que la finition finale soit propre et cohérente.',
  },
  {
    icon: FaShieldAlt,
    title: 'Travail propre, protégé et rassurant dans un contexte sensible',
    text: 'Après un incident, les lieux sont souvent déjà stressants à gérer. On protège, on communique clairement et on remet le chantier au propre chaque jour.',
  },
  {
    icon: FaClock,
    title: 'Remise en état pièce par pièce lorsque nécessaire',
    text: 'Dans certains contextes, il est plus réaliste d\'avancer par zones afin de redonner rapidement l\'usage d\'une partie de l\'espace.',
  },
  {
    icon: FaLayerGroup,
    title: 'Fini uniforme malgré les reprises locales',
    text: 'Le vrai défi après-sinistre n\'est pas juste de repeindre, c\'est de faire disparaître visuellement la reprise pour retrouver un résultat homogène.',
  },
];

const CONTEXTES = [
  {
    icon: FaWater,
    title: 'Dégât d\'eau au plafond ou sur les murs',
    text: 'Une infiltration, un tuyau, un débordement ou une trace d\'humidité laisse souvent des marques visibles et parfois des matériaux repris localement. On intervient une fois les surfaces sèches et stabilisées pour uniformiser le résultat.',
  },
  {
    icon: FaWind,
    title: 'Fumée légère, odeurs résiduelles et jaunissement',
    text: 'Après un incident mineur ou une accumulation de fumée, certaines surfaces gardent une odeur ou des traces qui traversent la peinture standard. Le bon système d\'apprêt et de finition évite les remontées visuelles.',
  },
  {
    icon: FaCut,
    title: 'Ouverture puis fermeture de murs ou plafonds',
    text: 'Quand des travaux correctifs ont exigé d\'ouvrir une surface, la finition finale doit faire disparaître visuellement la reprise. C\'est là que la coordination entre réparation, préparation et peinture devient essentielle.',
  },
  {
    icon: FaHome,
    title: 'Condo, appartement ou logement à remettre rapidement en état',
    text: 'Après un incident, le vrai enjeu est souvent le délai. On planifie le chantier de façon réaliste pour remettre le logement ou l\'unité dans un état propre, cohérent et prêt à réutiliser.',
  },
  {
    icon: FaBuilding,
    title: 'Bureau, commerce ou espace à présenter rapidement',
    text: 'Dans un contexte commercial léger, on peut séquencer les travaux pour réduire l\'impact sur l\'exploitation tout en redonnant rapidement une apparence professionnelle au lieu.',
  },
];

const FAQS = [
  {
    question: 'Pouvez-vous repeindre après un dégât d\'eau\u00A0?',
    answer: 'Oui, lorsque la source du problème est réglée et que les surfaces sont sèches et stabilisées. Avant de repeindre, il faut s\'assurer que la zone n\'est plus active et que les matériaux repris sont prêts à recevoir la finition.',
  },
  {
    question: 'Est-ce que la peinture suffit pour couvrir une tache d\'eau ou de fumée\u00A0?',
    answer: 'Pas toujours. Une peinture standard seule n\'est souvent pas suffisante. Selon le type de marque, un apprêt bloque-taches ou un système plus adapté peut être nécessaire pour éviter que la trace réapparaisse.',
  },
  {
    question: 'Faites-vous aussi les réparations de plâtre ou de gypse avant de repeindre\u00A0?',
    answer: 'Oui, lorsque la surface a besoin d\'être reprise avant la finition, nous pouvons intégrer la réparation nécessaire dans le bon séquençage du chantier pour obtenir un résultat propre et cohérent.',
  },
  {
    question: 'Combien de temps faut-il attendre avant de repeindre après une infiltration\u00A0?',
    answer: 'Cela dépend de la nature du dommage, de l\'humidité résiduelle et des matériaux touchés. L\'important est de ne pas repeindre trop tôt. Une surface encore humide compromet la tenue et l\'apparence du résultat final. Dans la grande majorité des cas nous changeons le gypse.',
  },
  {
    question: 'Pouvez-vous intervenir rapidement pour remettre un logement ou une pièce en état\u00A0?',
    answer: 'Oui. Lorsqu\'un espace doit redevenir présentable rapidement, nous pouvons prioriser certaines zones et avancer de façon séquencée pour remettre le lieu en service dans un délai réaliste.',
  },
  {
    question: 'Travaillez-vous aussi dans des condos ou des petits espaces commerciaux après un sinistre\u00A0?',
    answer: 'Oui. Nous adaptons le chantier selon les contraintes d\'accès, les règles du bâtiment et le niveau d\'occupation afin de limiter les perturbations et de garder le projet bien coordonné.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Préparation de surfaces',
    description: 'Lavage, sablage, calfeutrage et apprêt - la fondation du résultat.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Fissures, trous, joints et remise à niveau du support avant finition.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture intérieure',
    description: 'Techniques, finis, couches et surfaces intérieures.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maison, condo, appartement - expérience client et respect de l\'espace.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture commerciale',
    description: 'Bureau, restaurant, commerce - hors heures et échéanciers serrés.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Pourquoi engager un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
  {
    title: 'Voir nos réalisations',
    description: 'Projets avant/après incluant des remises en état après sinistre.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureApresSinistrePage() {
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
        name: 'Peinture après-sinistre',
        item: 'https://leleverdupinceau.ca/services/peinture-apres-sinistre',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Peinture après-sinistre à Montréal',
    description:
      'Service de peinture après-sinistre à Montréal pour dégâts d\'eau, fumée légère, plafonds tachés et remise en état après réparations. Intervention structurée, propre et rapide.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Le Lever du Pinceau',
      url: 'https://leleverdupinceau.ca',
    },
    areaServed: {
      '@type': 'City',
      name: 'Montréal',
    },
    serviceType: 'Peinture après-sinistre',
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
      before: sinistreAvant1,
      after: sinistreApres1,
      description: 'Peinture après sinistre plafond Montréal avant après',
    },
    {
      before: sinistreAvant2,
      after: sinistreApres2,
      description: 'Remise en état après dégât d\'eau - surface repeinte Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture après-sinistre à Montréal | Dégât d'eau et remise en état | Le Lever du Pinceau"
        description="Peinture après-sinistre à Montréal pour dégâts d'eau, fumée légère, plafonds tachés et remise en état après réparations. Intervention structurée, propre et rapide. Soumission gratuite."
        canonicalPath="/services/peinture-apres-sinistre"
        schemaArray={[breadcrumbSchema, serviceSchema, faqSchema]}
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
            src={sinistreHeroImg}
            alt="Peinture après-sinistre à Montréal - espace remis en état après dégât d'eau"
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
                    Peinture après-sinistre
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
                  Peinture après-sinistre à Montréal - Dégât d&apos;eau, fumée et remise en état
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Un service structuré pour remettre vos surfaces en état après un dommage, une infiltration ou une reprise de travaux.
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

        {/* ===== SECTION 3 - CHECKMARKS REMISE EN ÉTAT ===== */}
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
                  Après un dommage, la finition doit être reprise dans le bon ordre
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Diagnostic, préparation ciblée et remise en état pour retrouver un espace propre, stable et présentable
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

        {/* ===== SECTION 4 - CONTEXTES APRÈS-SINISTRE ===== */}
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
                  Une approche adaptée au type de dommage et à l&apos;état réel des surfaces
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Ici, on ne parle pas juste de repeindre : on parle de remettre un espace en état après un événement perturbateur
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {CONTEXTES.map((item, i) => (
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
                    <Stack spacing={3}>
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
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
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
          title="Avant / après : surfaces remises en état après un dommage"
          subtitle="Plafonds tachés, murs marqués et zones reprises - avant et après remise en état à Montréal."
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
                Satisfaction 100% garantie
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                Chaque projet de remise en état est suivi jusqu&apos;à ce que le résultat soit propre, uniforme et conforme aux attentes. On ne quitte pas le chantier tant que l&apos;espace n&apos;est pas prêt.
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
                Questions fréquentes sur la peinture après-sinistre
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
                Besoin de remettre un espace en état après un dommage&#xA0;?
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
