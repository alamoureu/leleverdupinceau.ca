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
  FaClock,
  FaShieldAlt,
  FaCalendarAlt,
  FaFileAlt,
  FaBriefcase,
  FaTools,
  FaBuilding,
  FaUtensils,
  FaShoppingBag,
  FaDoorOpen,
  FaChild,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';

import commercialeHeroImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';

import commercialImg1 from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre commercial dans le grand Montréal, Le Lever du Pinceau a peint ce bureau commerciale au centre ville de Montréal.jpg';
import commercialImg2 from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal professionnel, Le Lever du Pinceau a peinturé ce local commercial dans le quartier Notre-dame-de-grâce, Mtl.jpg';
import commercialImg3 from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a peinturé cette cage d_escalier à Outremont, Montréal.jpg';
import commercialImg4 from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel à Montréal, Le Lever du Pinceau a peinturé cette cage d_escalier dans le quartier Outremont.jpg';
import commercialImg5 from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre Montréal de profession, Le Lever du Pinceau a peinturé ce local commercial dans NDG, Montréal.jpg';
import commercialImg6 from '../images/L2 Services principaux/Photo page -peinture-commerciale/Peintre professionnel commercial à Montréal, Le Lever du Pinceau a complété ce bureau commerciale au centre ville.jpg';

const CHECKMARKS = [
  {
    icon: FaClock,
    title: 'Travaux hors heures d\'affaires',
    text: 'Soir, nuit, fin de semaine. Nous adaptons notre horaire au vôtre pour que vos opérations ne soient jamais interrompues.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Respect strict de l\'échéancier',
    text: 'En commercial, les délais sont non négociables. Un chantier qui traîne coûte de l\'argent. Nous livrons selon le calendrier convenu.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection du matériel et des stocks',
    text: 'Mobilier, équipements, inventaire et surfaces sont protégés avec les bons matériaux. Aucune trace, aucun dommage.',
  },
  {
    icon: FaFileAlt,
    title: 'Soumission détaillée pour vos dossiers',
    text: 'Devis précis, documentation complète et factures conformes pour vos besoins administratifs ou de gestion immobilière.',
  },
  {
    icon: FaBriefcase,
    title: 'Présentation professionnelle sur place',
    text: 'Nos équipes arrivent préparées, en uniforme et avec le matériel complet. L\'image de notre chantier respecte l\'image de votre commerce.',
  },
  {
    icon: FaTools,
    title: 'Finitions adaptées aux espaces commerciaux',
    text: 'Peintures lavables, résistantes à l\'usure, anti-marquage. Les espaces commerciaux subissent plus d\'usure que les espaces résidentiels.',
  },
];

const SPECIALITES = [
  {
    icon: FaBriefcase,
    title: 'Bureau et espace de travail',
    text: 'Réfection complète ou rafraîchissement ciblé. Peinture lavable et résistante, couleurs corporatives ou neutres selon vos standards.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Restaurant et espace de restauration',
    text: 'Environnement exigeant : humidité, chaleur, graisses. Produits adaptés, travail réalisé en dehors des heures de service.',
    link: null,
  },
  {
    icon: FaShoppingBag,
    title: 'Commerce de détail et boutique',
    text: 'Mise en valeur de l\'espace de vente, couleurs de marque, finitions nettes. Travaux planifiés pour minimiser la fermeture.',
    link: null,
  },
  {
    icon: FaDoorOpen,
    title: 'Hall d\'entrée et espaces communs',
    text: 'Première impression de votre immeuble ou commerce. Finitions soignées, peintures résistantes au frottement et aux impacts.',
    link: null,
  },
  {
    icon: FaChild,
    title: 'Garderie et établissement scolaire',
    text: 'Peintures sans COV, couleurs adaptées à l\'environnement enfant, respect des normes de santé et de sécurité.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Immeuble à bureaux et copropriété commerciale',
    text: 'Gestion multi-locaux, coordination avec la régie et travaux par phases pour maintenir les opérations en cours.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Pouvez-vous travailler le soir ou la fin de semaine pour éviter de perturber nos opérations\u00A0?',
    answer: 'Oui. Nous travaillons selon vos contraintes d\'exploitation. Les travaux peuvent être réalisés en soirée, la nuit ou pendant les fins de semaine pour que votre commerce ne soit jamais fermé à cause d\'un chantier.',
  },
  {
    question: 'Fournissez-vous une documentation pour nos dossiers ou pour la gestion immobilière\u00A0?',
    answer: 'Oui. Nous fournissons une soumission détaillée, un rapport de travaux complété et des factures conformes à vos besoins. Si vous devez transmettre les informations à un gestionnaire ou à votre propriétaire, nous vous outillons pour ça.',
  },
  {
    question: 'Quelles peintures utilisez-vous pour les espaces commerciaux\u00A0?',
    answer: 'Nous privilégions des peintures lavables et résistantes à l\'usure pour les espaces commerciaux. Selon l\'usage du local, nous recommandons des finis semi-brillants ou satinés qui facilitent l\'entretien et résistent mieux aux frottements et aux impacts.',
  },
  {
    question: 'Intervenez-vous aussi dans les immeubles à logements ou les copropriétés mixtes\u00A0?',
    answer: 'Oui. Nous gérons aussi la peinture des espaces communs, halls d\'entrée, corridors et stationnements dans les immeubles résidentiels ou à usage mixte. La coordination avec les gestionnaires fait partie de notre approche.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture industrielle',
    description: 'Entrepôt, usine, stationnement - époxy et revêtements résistants.',
    to: '/services/peinture-industrielle',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos et appartements - chantier propre et horaires flexibles.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture au pistolet',
    description: 'Application airless pour grands espaces commerciaux.',
    to: '/services/peinture-au-pistolet',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, rebouchage, calfeutrage et apprêt avant peinture.',
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

export default function PeintureCommercialePage() {
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
        name: 'Peinture commerciale',
        item: 'https://leleverdupinceau.ca/services/peinture-commerciale',
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
      before: commercialImg1,
      after: commercialImg2,
      description: 'Peinture bureau commercial - centre-ville Montréal',
    },
    {
      before: commercialImg3,
      after: commercialImg4,
      description: 'Peinture cage d\'escalier commerciale - Outremont, Montréal',
    },
    {
      before: commercialImg5,
      after: commercialImg6,
      description: 'Peinture local commercial - NDG, Montréal',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture commerciale à Montréal | Bureau, restaurant, commerce | Le Lever du Pinceau"
        description="Service de peinture commerciale à Montréal. Bureau, restaurant, commerce, garderie. Travaux hors heures, respect des délais, finitions durables. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-commerciale"
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
            src={commercialeHeroImg}
            alt="Peinture commerciale à Montréal - bureau et espace commercial professionnel"
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
                    Peinture commerciale
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
                  Peinture commerciale à Montréal - Bureau, restaurant, commerce
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Des travaux adaptés aux réalités des entreprises - hors heures, dans les délais et sans perturbation.
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
                  Ce que signifie travailler en milieu commercial
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un chantier commercial se gère différemment - délais serrés, contraintes d&apos;exploitation et exigences de présentation
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
                  Nos spécialités en peinture commerciale
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Chaque type d&apos;espace commercial a ses exigences propres
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
          title="Exemples de projets commerciaux réalisés"
          subtitle="Bureaux, commerces et espaces de travail - des chantiers menés selon vos contraintes d'exploitation."
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
                En commercial, un chantier raté coûte plus qu&apos;une deuxième couche de peinture. Nous assumons la qualité de notre travail et nous revenons corriger sans frais si le résultat n&apos;est pas à la hauteur.
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
                Questions fréquentes sur la peinture commerciale
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
                Prêt à planifier votre projet commercial&#xA0;?
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
