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
  FaSearchPlus,
  FaFillDrip,
  FaTools,
  FaCut,
  FaLayerGroup,
  FaShieldAlt,
  FaCircle,
  FaAngleDoubleRight,
  FaBorderAll,
  FaPaintRoller,
  FaHome,
  FaExpand,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import surfacesHeroImg from '../images/L2 Services specialise/Photo page -surfaces/IMG_8099.jpg';

import surfacesAvant1 from '../images/L2 Services specialise/Photo page -surfaces/Avant-apres/IMG_5914.JPG';
import surfacesApres1 from '../images/L2 Services specialise/Photo page -surfaces/Avant-apres/IMG_5916.JPG';

const PLACEHOLDER_PAIR = { before: null, after: null };

const CHECKMARKS = [
  {
    icon: FaSearchPlus,
    title: 'Évaluation complète de la surface avant travaux',
    text: 'Nous identifions les fissures, trous, joints faibles, défauts visuels, anciennes réparations et zones qui pourraient nuire à l\'adhérence ou au fini avant toute intervention.',
  },
  {
    icon: FaFillDrip,
    title: 'Rebouchage, correction et lissage des imperfections',
    text: 'Petits impacts, anciennes fixations, trous de vis, éclats et défauts de surface sont repris pour créer une base plus uniforme avant l\'application de la finition.',
  },
  {
    icon: FaTools,
    title: 'Sablage adapté au support',
    text: 'Le sablage enlève les aspérités, atténue les reprises visibles et améliore l\'accroche du produit de finition sans abîmer inutilement la surface.',
  },
  {
    icon: FaCut,
    title: 'Calfeutrage et finition des transitions',
    text: 'Joints autour des moulures, cadrages, plinthes et points de rencontre : on corrige les lignes pour que le résultat final paraisse plus net et mieux fini.',
  },
  {
    icon: FaLayerGroup,
    title: 'Apprêt choisi selon la réalité du support',
    text: 'Surface poreuse, ancienne peinture, reprise locale, zone tachée ou support neuf : l\'apprêt est sélectionné pour stabiliser le tout avant la couche finale.',
  },
  {
    icon: FaShieldAlt,
    title: 'Préparation propre et contrôlée',
    text: 'Protection, gestion de poussière, nettoyage et séquence logique des étapes permettent de préparer sans transformer l\'espace en chantier désorganisé.',
  },
];

const TYPES_PREPARATION = [
  {
    icon: FaCircle,
    title: 'Murs marqués, trous et anciennes fixations',
    text: 'Impacts, trous de cadres, ancrages, reprises visibles et petites imperfections sont rebouchés puis sablés pour retrouver une surface plus uniforme avant la peinture.',
  },
  {
    icon: FaAngleDoubleRight,
    title: 'Joints, fissures fines et reprises locales',
    text: 'Certaines microfissures et joints fatigués exigent une reprise localisée, parfois avec composé et ponçage, pour éviter que le défaut ressorte après application du fini.',
  },
  {
    icon: FaBorderAll,
    title: 'Moulures, cadrages et boiseries',
    text: 'Les éléments de finition demandent souvent calfeutrage, légers rebouchages et sablage fin pour obtenir des lignes nettes et une apparence plus soignée.',
  },
  {
    icon: FaPaintRoller,
    title: 'Surfaces déjà peintes ou mal préparées',
    text: 'Quand une ancienne couche présente des traces, souvent dues à une peinture au latex appliqué sur une peinture à l\'huile, différences de texture, brillances ou reprises mal faites, la préparation permet de repartir sur une base plus cohérente.',
  },
  {
    icon: FaHome,
    title: 'Préparation avant mise en vente ou remise à neuf',
    text: 'Avant une vente, une location ou un rafraîchissement rapide, une bonne préparation permet d\'améliorer visiblement l\'apparence sans refaire tout le support en profondeur.',
  },
  {
    icon: FaExpand,
    title: 'Supports neufs ou zones reprises partiellement',
    text: 'Gypse neuf, patchs récents, sections reprises ou zones plus poreuses : l\'objectif est d\'uniformiser l\'absorption et la texture avant l\'application finale.',
  },
];

const FAQS = [
  {
    question: 'Pourquoi la préparation de surfaces est-elle si importante avant de peindre\u00A0?',
    answer: 'Parce qu\'une belle peinture ne peut pas cacher durablement une surface mal préparée. Une bonne préparation améliore l\'adhérence, réduit les défauts visibles et permet d\'obtenir un fini plus net et plus durable.',
  },
  {
    question: 'Est-ce que vous rebouchez les trous et petites imperfections avant de peindre\u00A0?',
    answer: 'Oui. Nous corrigeons les petits trous, impacts, anciennes fixations et irrégularités courantes avant l\'application finale afin d\'obtenir une surface plus uniforme.',
  },
  {
    question: 'Faut-il toujours sabler avant de peindre\u00A0?',
    answer: 'Pas dans tous les cas, mais très souvent un sablage léger ou ciblé est nécessaire pour lisser le support, atténuer les reprises et améliorer l\'accroche du produit de finition.',
  },
  {
    question: 'Est-ce que vous appliquez aussi l\'apprêt\u00A0?',
    answer: 'Oui, lorsque le support l\'exige. Gypse neuf, zones reprises, surfaces poreuses, taches ou anciennes peintures problématiques peuvent nécessiter un apprêt avant la couche finale.',
  },
  {
    question: 'Est-ce que vous pouvez faire seulement la préparation, sans peinture complète\u00A0?',
    answer: 'Selon le projet, oui. Certaines interventions peuvent se limiter à la correction et à la mise en état de la surface. Le besoin exact est validé lors de la soumission.',
  },
  {
    question: 'Quelle est la différence entre préparation de surfaces et réparation de plâtre/gypse\u00A0?',
    answer: 'La préparation de surfaces couvre l\'ensemble des corrections légères à moyennes avant peinture. La réparation de plâtre et gypse concerne des interventions plus spécifiques ou plus avancées sur les murs et plafonds.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Application, finis, couches et techniques pour l\'intérieur.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Fissures, trous et joints - correction des défauts du support.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces et surfaces exigeantes.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale pour les projets intérieurs dans la métropole.',
    to: '/peinture-interieure-montreal',
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

export default function PreparationSurfacesPage() {
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
        name: 'Préparation de surfaces',
        item: 'https://leleverdupinceau.ca/services/preparation-de-surfaces',
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
      before: surfacesAvant1,
      after: surfacesApres1,
      description: 'Préparation de surfaces Montréal avant après',
    },
    {
      ...PLACEHOLDER_PAIR,
      description:
        'Deuxième paire : à documenter sur de la préparation pure (les fichiers 7992/7994 sont réservés à la page après sinistre).',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Préparation de surfaces à Montréal | Avant peinture | Le Lever du Pinceau"
        description="Préparation de surfaces à Montréal : rebouchage, sablage, calfeutrage, apprêt et correction des imperfections avant peinture. Soumission gratuite."
        canonicalPath="/services/preparation-de-surfaces"
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
            src={surfacesHeroImg}
            alt="Préparation de surfaces avant peinture à Montréal - sablage, rebouchage et apprêt"
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
                    Préparation de surfaces
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
                  Préparation de surfaces à Montréal
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Un bon fini commence toujours par un support propre, lisse et prêt à recevoir la peinture.
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color="whiteAlpha.900"
                  maxW={{ base: '100%', md: '620px', lg: '720px' }}
                  lineHeight="1.6"
                >
                  Rebouchage, sablage, calfeutrage, apprêt et correction des imperfections avant peinture intérieure ou extérieure.
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

        {/* ===== SECTION 3 - CHECKMARKS FONDATION DU RÉSULTAT ===== */}
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
                  Une finition durable dépend d&apos;abord de la préparation
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Corriger le support avant de peindre permet d&apos;obtenir un résultat plus net, plus stable et plus durable
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

        {/* ===== SECTION 4 - TYPES DE PRÉPARATION ===== */}
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
                  Une préparation adaptée à l&apos;état réel de la surface
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Tous les supports ne demandent pas le même niveau d&apos;intervention avant peinture
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {TYPES_PREPARATION.map((item, i) => (
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
          title="Quand la préparation change vraiment le résultat"
          subtitle="Surfaces corrigées, imperfections effacées et supports remis à niveau avant la peinture finale à Montréal."
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
                Un travail bien préparé dure plus longtemps, nécessite moins de retouches et donne un résultat visuellement plus propre. Nous intégrons la préparation comme une étape à part entière de chaque projet, pas comme une formalité à expédier.
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
                Questions fréquentes sur la préparation de surfaces
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
                Commencez avec une base bien préparée
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez une soumission gratuite en moins de 24h pour vos travaux de préparation et de peinture
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
