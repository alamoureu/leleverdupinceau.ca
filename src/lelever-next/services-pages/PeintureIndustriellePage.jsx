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
  FaIndustry,
  FaShieldAlt,
  FaTools,
  FaFlask,
  FaHardHat,
  FaLayerGroup,
  FaWarehouse,
  FaWrench,
  FaMapMarkedAlt,
  FaSprayCan,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import industrielleImg1 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peint ce plafond en steel deck en mur à Montréal est.jpg';
import industrielleImg2 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import industrielleImg3 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine sur la rive nord de Montréal.jpg';
import industrielleImg4 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle dans le grand Montréal, Le Lever du Pinceau a peinturé au spray l_extérieure de cette usine à Laval.jpg';
import industrielleImg5 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import industrielleImg6 from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre professionnel sur l_île de Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck en mur à Montréal.jpg';

const CHECKMARKS = [
  {
    icon: FaIndustry,
    title: 'Revêtements adaptés aux conditions industrielles',
    text: 'Époxy, uréthane, peinture résistante aux produits chimiques, aux chocs et à l\'usure intensive. Pas les mêmes produits qu\'en résidentiel.',
  },
  {
    icon: FaHardHat,
    title: 'Application au pistolet airless',
    text: 'Pour couvrir de grandes surfaces rapidement et uniformément - plafonds steel deck, structures métalliques, murs de béton.',
  },
  {
    icon: FaShieldAlt,
    title: 'Sécurité et conformité sur le chantier industriel',
    text: 'Équipements de protection, ventilation, gestion des produits chimiques. Nos équipes sont formées pour travailler en environnement industriel.',
  },
  {
    icon: FaTools,
    title: 'Préparation des surfaces métalliques',
    text: 'Sablage, traitement antirouille, apprêt d\'adhérence. Une surface métallique mal préparée ne retient pas la peinture.',
  },
  {
    icon: FaLayerGroup,
    title: 'Systèmes multicouches pour la durabilité',
    text: 'Fond de teinte, couche intermédiaire et finition : les applications industrielles demandent des systèmes de peinture complets.',
  },
  {
    icon: FaFlask,
    title: 'Produits conformes aux normes',
    text: 'Peintures à faible teneur en COV disponibles, conformité aux normes environnementales et de santé au travail selon les exigences du site.',
  },
];

const SPECIALITES = [
  {
    icon: FaWarehouse,
    title: 'Entrepôt et usine',
    text: 'Murs, plafonds steel deck et colonnes. Application au pistolet pour couvrir rapidement de grandes surfaces avec un fini uniforme.',
    link: null,
  },
  {
    icon: FaLayerGroup,
    title: 'Plancher époxy',
    text: 'Revêtement époxy pour planchers industriels - résistance aux impacts, aux produits chimiques et à l\'usure du trafic lourd.',
    link: null,
  },
  {
    icon: FaWrench,
    title: 'Structures métalliques',
    text: 'Poutrelles, charpentes, équipements et surfaces métalliques. Traitement antirouille, apprêt et finition adaptés.',
    link: null,
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Marquage au sol',
    text: 'Lignes de circulation, zones de sécurité, allées de chariot élévateur. Peinture ou époxy selon les exigences du site.',
    link: null,
  },
  {
    icon: FaSprayCan,
    title: 'Extérieur d\'usine et de bâtiment industriel',
    text: 'Revêtements extérieurs résistants aux intempéries et aux conditions climatiques du Québec pour les bâtiments industriels.',
    link: null,
  },
  {
    icon: FaIndustry,
    title: 'Stationnement et garage',
    text: 'Plancher en béton, murs et colonnes de stationnement. Revêtements résistants à l\'usure et aux produits pétroliers.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre une peinture industrielle et une peinture commerciale\u00A0?',
    answer: 'Les peintures industrielles sont formulées pour résister à des conditions plus exigeantes : produits chimiques, chaleur, usure mécanique intense, exposition prolongée aux intempéries. Elles utilisent souvent des systèmes multicouches (époxy, uréthane) et demandent une préparation de surface plus poussée.',
  },
  {
    question: 'Pouvez-vous peindre des plafonds steel deck très hauts\u00A0?',
    answer: 'Oui. Nous disposons de l\'équipement nécessaire pour les grandes hauteurs : échafaudages, plateformes élévatrices et pistolets airless à long portée. La planification de l\'accès fait partie de notre soumission.',
  },
  {
    question: 'Est-ce que vous faites du marquage au sol dans les entrepôts\u00A0?',
    answer: 'Oui. Nous réalisons le traçage et le marquage au sol selon vos plans : lignes de sécurité, zones de circulation, emplacements de stockage. Nous utilisons des peintures durables ou de l\'époxy selon les contraintes du plancher et du trafic.',
  },
  {
    question: 'Combien de temps faut-il pour le séchage d\'un plancher époxy\u00A0?',
    answer: 'Le temps de séchage varie selon le système époxy utilisé, la température ambiante et le taux d\'humidité. En général, le retour à la marche se fait en 24 à 48 heures, et le retour au trafic lourd après 5 à 7 jours. Ces délais sont intégrés à la planification du chantier.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture commerciale',
    description: 'Bureau, restaurant, commerce - travaux hors heures et délais serrés.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces industriels et commerciaux.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, décapage et apprêt - fondation du travail industriel.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
];

export default function PeintureIndustriellePage() {
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
        name: 'Peinture industrielle',
        item: 'https://leleverdupinceau.ca/services/peinture-industrielle',
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
      before: industrielleImg1,
      after: industrielleImg2,
      description: 'Peinture plafond steel deck - entrepôt Montréal Est',
    },
    {
      before: industrielleImg3,
      after: industrielleImg4,
      description: 'Peinture extérieure usine au pistolet - Rive-Nord de Montréal',
    },
    {
      before: industrielleImg5,
      after: industrielleImg6,
      description: 'Peinture steel deck airless - Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture industrielle à Montréal | Entrepôt, usine, stationnement | Le Lever du Pinceau"
        description="Service de peinture industrielle à Montréal. Entrepôt, usine, plancher époxy, structures métalliques, marquage au sol. Application au pistolet airless. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-industrielle"
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
            src={industrielleImg2}
            alt="Peinture industrielle à Montréal - plafond steel deck au pistolet airless"
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
            bg="rgba(0, 0, 0, 0.60)"
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
                    Peinture industrielle
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
                  Peinture industrielle à Montréal - Entrepôt, usine, stationnement
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Revêtements spécialisés, application au pistolet et produits conçus pour les exigences industrielles.
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
                  Ce qui distingue notre approche industrielle
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  La peinture industrielle n&apos;est pas de la peinture résidentielle appliquée dans une usine - c&apos;est une spécialité à part entière
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
                  Nos spécialités en peinture industrielle
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Des revêtements adaptés aux surfaces et aux contraintes de chaque environnement industriel
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
          title="Exemples de projets industriels réalisés"
          subtitle="Plafonds steel deck, usines et entrepôts - des travaux réalisés avec le bon équipement et les bons produits."
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
                En industriel, un revêtement qui écaille ou un plancher qui s&apos;use prématurément coûte cher à refaire. Nous utilisons les bons produits, au bon endroit, avec la bonne préparation pour que le résultat dure.
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
                Questions fréquentes sur la peinture industrielle
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
                Prêt à planifier votre projet industriel&#xA0;?
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
