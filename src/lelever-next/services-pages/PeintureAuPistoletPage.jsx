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
  FaSprayCan,
  FaBolt,
  FaLayerGroup,
  FaShieldAlt,
  FaClock,
  FaSliders,
  FaDoorOpen,
  FaUtensils,
  FaBuilding,
  FaExpand,
  FaTh,
  FaTools,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import pistoletHeroImg from '../images/L2 Services specialise/Photo page -pistolet/header-spray man.JPEG';

import pistoletAvant1 from '../images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_5977 3.jpg';
import pistoletApres1 from '../images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_7997 2.jpg';
import pistoletAvant2 from '../images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_5978 3.jpg';
import pistoletApres2 from '../images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_7999 2.jpg';

const CHECKMARKS = [
  {
    icon: FaSprayCan,
    title: 'Finition plus uniforme sur grandes surfaces',
    text: 'Le pistolet permet une application régulière sur de larges murs, plafonds ouverts, portes multiples ou surfaces répétitives où l\'uniformité du fini compte.',
  },
  {
    icon: FaBuilding,
    title: 'Méthode idéale pour plafonds ouverts, structures et reliefs',
    text: 'Sur des poutres, conduits peints, cages d\'escalier, plafonds techniques ou surfaces texturées, le rouleau n\'est pas toujours la meilleure option.',
  },
  {
    icon: FaBolt,
    title: 'Rapidité d\'exécution sur les bons types de projets',
    text: 'Quand la configuration s\'y prête, le pistolet permet d\'avancer plus vite sans compromettre la qualité du fini.',
  },
  {
    icon: FaTools,
    title: 'Masquage et protection plus exigeants, mais mieux contrôlés',
    text: 'Le vrai travail se joue avant la pulvérisation : protection, confinement, séquençage et contrôle de l\'overspray. C\'est là que la rigueur fait la différence.',
  },
  {
    icon: FaDoorOpen,
    title: 'Application adaptée aux portes, boiseries et éléments finis',
    text: 'Pour certains éléments comme les portes, cadrages, armoires ou boiseries, le pistolet peut offrir un fini plus lisse et plus régulier qu\'une application au rouleau ou au pinceau.',
  },
  {
    icon: FaSliders,
    title: 'Choix de méthode selon le support, pas par automatisme',
    text: 'Le pistolet n\'est pas toujours la bonne réponse. Nous le choisissons seulement quand il améliore réellement le résultat, la vitesse ou l\'uniformité.',
  },
];

const SURFACES_CONTEXTES = [
  {
    icon: FaDoorOpen,
    title: 'Portes, moulures et boiseries',
    text: 'Quand le projet demande une finition lisse et régulière sur plusieurs éléments finis, la pulvérisation peut offrir un meilleur rendu visuel qu\'une application traditionnelle.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Armoires et éléments fabriqués',
    text: 'Le pistolet est souvent la bonne méthode pour des armoires, vanités ou panneaux qui demandent une finition uniforme et sans traces de rouleau.',
    link: '/services/peinture-interieure/armoires-de-cuisine',
    linkLabel: 'Voir notre service armoires',
  },
  {
    icon: FaBuilding,
    title: 'Plafonds ouverts et structures visibles',
    text: 'Conduits, poutres, cages d\'escalier ouvertes, plafonds de sous-sol ou plafonds commerciaux ouverts se prêtent bien à la pulvérisation lorsqu\'un rendu homogène est recherché.',
    link: null,
  },
  {
    icon: FaExpand,
    title: 'Grandes surfaces répétitives',
    text: 'Quand la configuration du chantier le permet, le pistolet accélère l\'application sur des surfaces larges ou répétitives où l\'uniformité est prioritaire.',
    link: null,
  },
  {
    icon: FaTh,
    title: 'Surfaces texturées ou reliefs',
    text: 'Certaines textures, détails architecturaux ou supports irréguliers reçoivent mieux la peinture au pistolet qu\'au rouleau pour obtenir une couverture homogène.',
    link: null,
  },
  {
    icon: FaLayerGroup,
    title: 'Projets où le contrôle du chantier est essentiel',
    text: 'La pulvérisation demande un masquage rigoureux. Le site doit être bien préparé, protégé et séquencé pour éviter l\'overspray et garder un chantier propre.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre peindre au pistolet et au rouleau\u00A0?',
    answer: 'Le pistolet pulvérise la peinture de façon plus uniforme sur certaines surfaces, surtout les grandes zones, les plafonds ouverts, les portes ou les éléments détaillés. Le rouleau et le pinceau restent toutefois préférables dans plusieurs contextes. La bonne méthode dépend du support, de l\'accès et du résultat recherché.',
  },
  {
    question: 'Est-ce que la peinture au pistolet fait plus de dégâts\u00A0?',
    answer: 'Elle demande surtout une meilleure préparation. Le contrôle de l\'overspray passe par un masquage rigoureux, la protection des surfaces, le séquençage du chantier et la bonne technique d\'application. Bien exécutée, la méthode reste propre et très efficace.',
  },
  {
    question: 'Quelles surfaces se prêtent le mieux à la peinture au pistolet\u00A0?',
    answer: 'Les portes, moulures, armoires, plafonds ouverts, structures visibles et certaines grandes surfaces répétitives sont souvent de bons candidats. Nous évaluons chaque projet pour confirmer si le pistolet est réellement la meilleure option.',
  },
  {
    question: 'Peut-on peindre un plafond ouvert ou un sous-sol au pistolet\u00A0?',
    answer: 'Oui, c\'est même souvent l\'un des meilleurs cas d\'usage. Sur des poutres, conduits, tuyaux ou plafonds irréguliers, le pistolet permet une couverture plus régulière et une exécution plus rapide que les méthodes traditionnelles.',
  },
  {
    question: 'Est-ce que vous utilisez aussi le pistolet pour les armoires ou boiseries\u00A0?',
    answer: 'Oui. Pour des armoires, portes, boiseries ou éléments fabriqués, la pulvérisation peut offrir un fini plus lisse et plus uniforme. Le résultat dépend toutefois de la préparation, du sablage, de l\'apprêt et du produit utilisé.',
  },
  {
    question: 'La peinture au pistolet est-elle toujours le meilleur choix\u00A0?',
    answer: 'Non. Nous utilisons le pistolet quand il améliore réellement le résultat, la vitesse ou l\'uniformité. Sur certains projets, le rouleau et le pinceau restent plus appropriés. La méthode est choisie selon le support, le chantier et l\'objectif final.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Application, finis, couches et techniques pour l\'intérieur.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture industrielle',
    description: 'Entrepôt, usine, stationnement - époxy et revêtements résistants.',
    to: '/services/peinture-industrielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, rebouchage, calfeutrage et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Armoires de cuisine',
    description: 'Transformation au pistolet pour un fini laqué professionnel.',
    to: '/services/peinture-interieure/armoires-de-cuisine',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale pour les projets intérieurs dans la métropole.',
    to: '/peinture-interieure-montreal',
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
    title: 'Nos réalisations',
    description: 'Projets complétés au pistolet et autres techniques - avant/après.',
    to: '/realisations',
  },
  {
    title: 'Obtenir une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
];

export default function PeintureAuPistoletPage() {
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
        name: 'Peinture au pistolet',
        item: 'https://leleverdupinceau.ca/services/peinture-au-pistolet',
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
      before: pistoletAvant1,
      after: pistoletApres1,
      description: 'Peinture au pistolet Montréal avant après',
    },
    {
      before: pistoletAvant2,
      after: pistoletApres2,
      description: 'Application au pistolet airless sur surface ouverte - Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture au pistolet à Montréal | Finition uniforme | Le Lever du Pinceau"
        description="Service de peinture au pistolet à Montréal pour plafonds ouverts, boiseries, portes, armoires et grandes surfaces. Finition uniforme, masquage rigoureux et soumission gratuite."
        canonicalPath="/services/peinture-au-pistolet"
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
            src={pistoletHeroImg}
            alt="Peinture au pistolet à Montréal - application professionnelle sur chantier contrôlé"
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
                    Peinture au pistolet
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
                  Peinture au pistolet à Montréal
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Une méthode rapide, uniforme et précise pour les grandes surfaces, plafonds ouverts, portes, boiseries et projets qui demandent un fini régulier.
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

        {/* ===== SECTION 3 - CHECKMARKS MÉTHODE D'APPLICATION ===== */}
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
                  Quand le pistolet est la bonne méthode, le résultat se voit
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Une application plus uniforme, plus rapide et mieux adaptée à certaines surfaces, à condition que la préparation et le masquage soient rigoureux
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

        {/* ===== SECTION 4 - SURFACES ET CONTEXTES ADAPTÉS ===== */}
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
                  Une méthode adaptée à certaines surfaces, pas à toutes
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Le pistolet excelle quand le support, l&apos;accès et le niveau de finition recherché s&apos;y prêtent
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {SURFACES_CONTEXTES.map((item, i) => (
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
          title="Des projets où la méthode fait toute la différence"
          subtitle="Plafonds ouverts, boiseries, portes et grandes surfaces - avant et après application au pistolet à Montréal."
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
                Une méthode rapide ne veut pas dire un chantier bâclé
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                Le pistolet donne d&apos;excellents résultats seulement quand la préparation, le masquage et la séquence d&apos;application sont bien exécutés. Nous ne quittons pas le chantier tant que le résultat n&apos;est pas propre, uniforme et conforme aux attentes.
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
              <Text fontSize="sm" color="gray.500">
                Réponse en moins de 24h
              </Text>
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
                Questions fréquentes sur la peinture au pistolet
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
                Services complémentaires
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
                Un projet qui se prête bien à la peinture au pistolet&#xA0;?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Obtenez une soumission gratuite et voyons si cette méthode est la meilleure pour votre chantier
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
