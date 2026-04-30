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
  FaTools,
  FaStar,
  FaCalendarAlt,
  FaCog,
  FaShieldAlt,
  FaTag,
  FaHistory,
  FaPaintBrush,
  FaThLarge,
  FaWrench,
  FaKey,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import armoiresHeroImg from '../images/L3 Sous services/Photo page armoires de cuisine/header.jpeg';
import armoiresImg5975 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5975.PNG';
import armoiresImg5976 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5976.PNG';
import armoiresImg8114 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8114.PNG';
import armoiresImg8120 from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8120.PNG';

const CHECKMARKS = [
  {
    icon: FaTools,
    title: 'Préparation fine des surfaces visibles',
    text: 'Nettoyage, dégraissage, ponçage et correction légère pour éviter que le fini révèle les défauts une fois la lumière sur les portes.',
  },
  {
    icon: FaStar,
    title: 'Fini uniforme sur portes, façades et moulures',
    text: 'L\'objectif est d\'obtenir une lecture visuelle cohérente d\'un élément à l\'autre, sans différences de texture ni traces évidentes.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Séquence de travail structurée',
    text: 'Démontage, identification, préparation, application, séchage et remontage : chaque étape compte pour garder un résultat propre et logique.',
  },
  {
    icon: FaCog,
    title: 'Produits adaptés aux surfaces sollicitées',
    text: 'Les armoires subissent humidité, frottement, nettoyage fréquent et manipulations quotidiennes. Le système choisi doit suivre cette réalité.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du reste de la cuisine',
    text: 'Comptoirs, électroménagers, planchers, dosserets et circulation sont protégés pour que la transformation reste propre du début à la fin.',
  },
  {
    icon: FaTag,
    title: 'Résultat plus rentable que le remplacement complet',
    text: 'Quand les armoires sont encore bonnes structurellement, la transformation du fini permet souvent un très grand impact visuel pour un coût mieux contrôlé.',
  },
];

const SITUATIONS = [
  {
    icon: FaHistory,
    title: 'Armoires à mettre au goût du jour',
    text: 'Quand la cuisine est fonctionnelle mais visuellement datée, la peinture permet une transformation majeure sans démolition complète.',
  },
  {
    icon: FaPaintBrush,
    title: 'Portes et façades moulurées',
    text: 'Les profils, rainures et reliefs exigent une préparation et une application plus minutieuses pour éviter les surcharges et garder des lignes propres.',
  },
  {
    icon: FaThLarge,
    title: 'Caissons visibles et panneaux latéraux',
    text: 'Le résultat doit rester cohérent entre les éléments principaux et les surfaces visibles secondaires pour que la cuisine paraisse vraiment refaite.',
  },
  {
    icon: FaWrench,
    title: 'Armoires avec traces d\'usure ou jaunissement',
    text: 'Graisse, frottement, brillances inégales, coins usés et zones fatiguées demandent une remise en état plus sérieuse avant finition.',
  },
  {
    icon: FaKey,
    title: 'Projet de rafraîchissement avant vente ou location',
    text: 'Quand on veut moderniser rapidement une cuisine sans remplacement complet, la peinture d\'armoires peut créer un gain visuel immédiat.',
  },
];

const FAQS = [
  {
    question: 'Combien de temps dure un projet de peinture d\'armoires de cuisine\u00A0?',
    answer: 'La durée dépend du nombre de portes, de l\'état des surfaces et du niveau de préparation requis. Un projet complet prend généralement plusieurs jours, car la qualité du fini dépend beaucoup de la préparation, des temps de séchage et d\'un remontage propre.',
  },
  {
    question: 'Faut-il remplacer les armoires ou peut-on vraiment les repeindre\u00A0?',
    answer: 'Si les armoires sont encore solides, la peinture est souvent une excellente option. Elle permet de transformer l\'apparence de la cuisine à moindre coût que le remplacement, tout en conservant les caissons et la structure existante.',
  },
  {
    question: 'Est-ce que vous démontez les portes et les poignées\u00A0?',
    answer: 'Oui. Pour obtenir un résultat plus uniforme et plus propre, les portes, façades et quincailleries sont généralement démontées, identifiées puis remises en place à la fin du processus.',
  },
  {
    question: 'Quel type de fini recommandez-vous pour des armoires de cuisine\u00A0?',
    answer: 'Le bon fini dépend du style recherché et de l\'usage de la cuisine, mais on privilégie toujours une solution durable, lavable et adaptée à une surface souvent manipulée et nettoyée.',
  },
  {
    question: 'Peut-on continuer à utiliser la cuisine pendant les travaux\u00A0?',
    answer: 'Cela dépend de l\'ampleur du projet, mais l\'objectif est toujours de limiter l\'impact sur votre quotidien. La planification du chantier est pensée pour garder le processus aussi propre et gérable que possible.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Page parente - murs, plafonds, boiseries, finis et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Ponçage, correction, enduit et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
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

export default function PeintureArmoiresCuisinePage() {
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
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Peinture d\'armoires de cuisine',
        item: 'https://leleverdupinceau.ca/services/peinture-interieure/armoires-de-cuisine',
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
      before: armoiresImg5975,
      after: armoiresImg5976,
      description: 'Peinture armoires cuisine Montréal avant / après',
    },
    {
      before: armoiresImg8114,
      after: armoiresImg8120,
      description: 'Transformation armoires cuisine - avant / après Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture d'armoires de cuisine à Montréal | Le Lever du Pinceau"
        description="Transformez vos armoires de cuisine sans les remplacer. Service spécialisé à Montréal pour portes, façades et caissons visibles. Soumission gratuite."
        canonicalPath="/services/peinture-interieure/armoires-de-cuisine"
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
            src={armoiresHeroImg}
            alt="Peinture armoires cuisine Montréal - transformation fini net et uniforme"
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
                    to="/services/peinture-interieure"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Peinture intérieure
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    Armoires de cuisine
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
                  Peinture d&apos;armoires de cuisine à Montréal
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Transformez vos armoires sans les remplacer, avec un fini net, durable et uniforme.
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

        {/* ===== SECTION 3 - CHECKMARKS TRANSFORMATION D'ARMOIRES ===== */}
        <Box pt={{ base: 20, md: 24, lg: 28 }} pb={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Des armoires transformées, sans compromis sur le fini
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Le vrai défi n&apos;est pas de couvrir la surface, mais d&apos;obtenir un rendu uniforme, durable et propre.
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

        {/* ===== SECTION 4 - TYPES D'INTERVENTIONS ===== */}
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
                  Une approche différente selon l&apos;état, le matériau et le résultat recherché
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  On ne traite pas une cuisine d&apos;origine, une mélamine fatiguée ou des portes moulurées de la même façon.
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
          title="Avant / après de cuisines transformées"
          subtitle="Portes jaunies, style daté, finis irréguliers - le gain visuel est immédiat avec un fini propre et uniforme."
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
                Un projet minutieux du démontage au remontage
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                La peinture d&apos;armoires de cuisine est un projet qui demande de la précision à chaque étape. Une préparation soignée, un système de peinture adapté aux surfaces sollicitées, une protection rigoureuse du reste de la cuisine et un remontage propre : c&apos;est cette séquence complète qui garantit un résultat durable et visuellement transformateur.
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
                Questions fréquentes sur la peinture d&apos;armoires de cuisine
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
                Parlez-nous de vos armoires
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez une soumission gratuite en moins de 24h
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
