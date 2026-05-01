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
  FaTools,
  FaSearchPlus,
  FaLayerGroup,
  FaRulerCombined,
  FaWrench,
  FaCheckCircle,
  FaShieldAlt,
  FaAngleDoubleRight,
  FaCircle,
  FaBorderAll,
  FaTh,
  FaWater,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import platreHeroImg from '../images/L2 Services specialise/Photo page -plâtre/header _plaster.JPEG';

import platreAvant1 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6030.PNG';
import platreApres1 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_6031.PNG';
import platreAvant2 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8106.PNG';
import platreApres2 from '../images/L2 Services specialise/Photo page -plâtre/Avant après/IMG_8108.PNG';

const CHECKMARKS = [
  {
    icon: FaTools,
    title: 'Réparation des fissures et microfissures',
    text: 'On ouvre, stabilise et rebouche les fissures pour éviter qu\'elles réapparaissent trop vite en surface. La méthode varie selon le type de fissure et le mouvement du support.',
  },
  {
    icon: FaSearchPlus,
    title: 'Correction des trous, impacts et anciennes réparations visibles',
    text: 'Trous d\'ancrage, coups, anciennes patches mal faites ou reprises visibles : on remet le mur à niveau avant finition pour que la zone disparaisse sous la peinture.',
  },
  {
    icon: FaLayerGroup,
    title: 'Joints de gypse repris proprement',
    text: 'Quand les joints craquent, ressortent ou télégraphient sous la peinture, on les reprend pour retrouver une lecture visuelle uniforme sur l\'ensemble du mur ou du plafond.',
  },
  {
    icon: FaRulerCombined,
    title: 'Surfaces lissées et remises droites',
    text: 'Sablage, tirage et correction locale pour réduire les vagues, surépaisseurs et différences de niveau visibles à la lumière rasante.',
  },
  {
    icon: FaWrench,
    title: 'Réparation adaptée au type de dommage',
    text: 'Plâtre ancien, gypse récent, plafond fissuré, coin endommagé ou surface touchée par l\'humidité : on n\'intervient pas partout de la même façon.',
  },
  {
    icon: FaCheckCircle,
    title: 'Prêt pour peinture ou finition subséquente',
    text: 'Une fois la réparation terminée, la surface est cohérente, stable et prête pour l\'apprêt ou la peinture. C\'est l\'objectif à chaque intervention.',
  },
];

const TYPES_REPARATIONS = [
  {
    icon: FaAngleDoubleRight,
    title: 'Fissures, microfissures et craques récurrentes',
    text: 'Murs et plafonds qui travaillent, coins qui ouvrent, lignes qui réapparaissent sous la peinture : on corrige avec une méthode adaptée pour réduire le retour rapide du défaut.',
  },
  {
    icon: FaCircle,
    title: 'Trous, impacts et surfaces abîmées',
    text: 'Ancres, poignées, coups de meubles, dommages après travaux ou reprises visibles : on rebouche, lisse et remet la zone à niveau pour qu\'elle disparaisse au fini.',
  },
  {
    icon: FaBorderAll,
    title: 'Joints de gypse apparents ou mal finis',
    text: 'Quand les joints ressortent, craquent ou se lisent trop dans la lumière, on les reprend pour rétablir une lecture visuelle propre et uniforme sur le mur ou le plafond.',
  },
  {
    icon: FaTh,
    title: 'Plafonds et surfaces irrégulières',
    text: 'Ondulations, patchs visibles, anciennes réparations mal poncées ou effets d\'ombre au plafond : on corrige ce qui nuit le plus au rendu final dans une pièce.',
  },
  {
    icon: FaWater,
    title: 'Réparations après infiltration légère ou détérioration locale',
    text: 'Taches anciennes, cloques localisées, gypse fragilisé ou surface marquée après incident : la réparation vise à rendre le support sain et présentable avant finition.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous réparez les fissures avant de peindre\u00A0?',
    answer: 'Oui. Les fissures doivent être traitées correctement avant la peinture, sinon elles réapparaissent rapidement. Selon le type de fissure et le support, nous adaptons la réparation pour stabiliser la zone et retrouver une surface plus uniforme.',
  },
  {
    question: 'Est-ce que les trous et impacts disparaissent complètement\u00A0?',
    answer: 'Dans la majorité des cas, oui. L\'objectif n\'est pas seulement de remplir le trou, mais de remettre la zone au bon niveau pour qu\'elle se fonde au reste du mur. Plus la réparation est bien préparée, moins elle se lit après peinture.',
  },
  {
    question: 'Est-ce que vous refaites les joints de gypse apparents\u00A0?',
    answer: 'Oui. Lorsque les joints ressortent, craquent ou deviennent trop visibles à la lumière, nous pouvons les reprendre pour corriger la lecture du mur ou du plafond avant la finition.',
  },
  {
    question: 'Faut-il repeindre toute la pièce après une réparation\u00A0?',
    answer: 'Pas toujours, mais très souvent une reprise locale se voit, surtout sur des murs mats, exposés à la lumière ou déjà vieillis. Nous recommandons la solution la plus propre selon la visibilité de la zone et l\'état du reste de la pièce.',
  },
  {
    question: 'Est-ce que vous pouvez réparer après un dégât mineur ou une infiltration légère\u00A0?',
    answer: 'Oui, si le support est stabilisé et apte à être repris. Nous pouvons corriger une zone marquée, fragilisée ou abîmée localement avant la remise en peinture ou la finition.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Préparation de surfaces',
    description: 'Lavage, sablage, apprêt et adhérence avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Peinture intérieure',
    description: 'Application, finis, couches et techniques pour l\'intérieur.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale pour les projets intérieurs dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Peinture après sinistre',
    description: 'Dégât d\'eau, incendie - remise en état avec documentation assureur.',
    to: '/services/peinture-apres-sinistre',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
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

export default function ReparationPlatreGysePage() {
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
        name: 'Réparation de plâtre et gypse',
        item: 'https://leleverdupinceau.ca/services/reparation-de-platre-et-gypse',
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
      before: platreAvant1,
      after: platreApres1,
      description: 'Réparation plâtre plafond fissuré Montréal avant après',
    },
    {
      before: platreAvant2,
      after: platreApres2,
      description: 'Correction joints et mur abîmé avant peinture - Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Réparation de plâtre et gypse à Montréal | Fissures, trous et joints | Le Lever du Pinceau"
        description="Réparation de plâtre et gypse à Montréal. Correction de fissures, trous, joints visibles et surfaces abîmées avant peinture. Soumission gratuite et travail propre."
        canonicalPath="/services/reparation-de-platre-et-gypse"
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
            src={platreHeroImg}
            alt="Réparation de plâtre et gypse à Montréal - correction de fissures et trous avant peinture"
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
                    Réparation de plâtre et gypse
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
                  Réparation de plâtre et gypse à Montréal - Fissures, trous et joints
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Des surfaces abîmées corrigées proprement pour un fini lisse, droit et prêt à peindre.
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

        {/* ===== SECTION 3 - CHECKMARKS CORRECTION DU SUPPORT ===== */}
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
                  Corriger les défauts avant qu&apos;ils réapparaissent
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Une belle finition commence par une surface réparée, droite et stable
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

        {/* ===== SECTION 4 - TYPES DE RÉPARATIONS ===== */}
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
                  Une intervention différente selon le défaut à corriger
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  On ne traite pas un trou, une fissure ou un plafond abîmé de la même manière
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {TYPES_REPARATIONS.map((item, i) => (
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
          title="Avant / après de surfaces réparées"
          subtitle="Fissures effacées, trous comblés, joints disparus - la transformation visible avant la finition à Montréal."
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
                Une réparation bien faite change tout le résultat final
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                Quand les défauts sont mal corrigés, ils reviennent vite sous la peinture ou restent visibles à la lumière. Notre objectif est de remettre la surface au bon niveau avant la finition, pour éviter les reprises inutiles et livrer un résultat plus propre dès la première fois.
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
                Questions fréquentes sur la réparation de plâtre et gypse
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
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="app.ctaBg">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
              >
                Besoin de corriger vos murs ou plafonds avant de peindre&#xA0;?
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
