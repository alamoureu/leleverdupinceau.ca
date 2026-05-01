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
  FaBuilding,
  FaBroom,
  FaCog,
  FaClock,
  FaComments,
  FaLayerGroup,
  FaCouch,
  FaKey,
  FaExchangeAlt,
  FaBriefcase,
  FaTag,
  FaCheckCircle,
  FaRoute,
  FaStar,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';

import heroImg from '../images/neighborhood_placeholder.jpg';

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Habitués aux condos, tours et immeubles occupés',
    text: 'Accès, interphone, ascenseur, circulation du matériel et gestion des espaces communs sont intégrés dès le départ pour éviter les frictions.',
  },
  {
    icon: FaBroom,
    title: 'Chantier propre dans des espaces compacts',
    text: 'Quand chaque pièce compte, la séquence des travaux, les protections et le nettoyage quotidien deviennent essentiels pour garder l\'espace fonctionnel.',
  },
  {
    icon: FaCog,
    title: 'Coordination simple avec les contraintes d\'immeuble',
    text: 'Règlements de copropriété, plages horaires, monte-charges, réservations d\'ascenseur ou zones de livraison sont pris en compte dès la planification.',
  },
  {
    icon: FaClock,
    title: 'Échéancier clair pour les projets pressés',
    text: 'Avant prise de possession, avant location, entre deux occupants, avant photos ou avant ouverture d\'un espace professionnel - les délais sont tenus.',
  },
  {
    icon: FaComments,
    title: 'Communication rassurante et structurée',
    text: 'En contexte urbain rapide, le client veut savoir comment le chantier va se dérouler sans avoir à le superviser ou à relancer l\'équipe.',
  },
  {
    icon: FaLayerGroup,
    title: 'Approche adaptée aux projets mixtes du centre-ville',
    text: 'Condos, bureaux légers, commerces de proximité ou espaces de travail demandent une exécution disciplinée avec une logistique bien planifiée.',
  },
];

const CONTEXTES = [
  {
    icon: FaBuilding,
    title: 'Condo dans une tour ou un immeuble en copropriété',
    text: 'Accès, ascenseur, stationnement, circulation du matériel et voisinage imposent une organisation plus stricte. Tout est anticipé avant le début des travaux.',
  },
  {
    icon: FaKey,
    title: 'Unité avant emménagement ou prise de possession',
    text: 'Fenêtre de temps limitée, chantier accéléré et objectif simple : remettre un espace propre, net et prêt à être habité dans les délais prévus.',
  },
  {
    icon: FaExchangeAlt,
    title: 'Appartement ou logement entre deux occupations',
    text: 'Remise à niveau rapide, protections efficaces, plan de match clair pour réduire le temps vacant et remettre l\'espace en marché rapidement.',
  },
  {
    icon: FaBriefcase,
    title: 'Bureau léger ou espace professionnel au centre-ville',
    text: 'Intervention propre, bien séquencée, avec horaires adaptés et impact minimal sur les opérations en cours ou les voisins de l\'immeuble.',
  },
  {
    icon: FaTag,
    title: 'Projet avant vente ou mise en marché',
    text: 'Rafraîchir l\'espace pour le rendre plus lumineux, plus cohérent et plus facile à projeter dès les premières visites ou photos de mise en marché.',
  },
];

const SERVICES = [
  {
    title: 'Peinture intérieure à Montréal',
    text: 'Pour les condos, unités occupées et projets centre-ville où la logistique, la propreté et la finition intérieure sont prioritaires.',
    to: '/peinture-interieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture extérieure à Montréal',
    text: 'Pour les façades, balcons, boiseries extérieures et surfaces exposées au climat montréalais.',
    to: '/peinture-exterieure-montreal',
    cta: 'Voir la page',
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien planifié et sans stress dans votre condo, appartement ou propriété urbaine.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
  },
  {
    title: 'Nos réalisations',
    text: 'Pour montrer des projets concrets et appuyer la crédibilité dans un contexte centre-ville.',
    to: '/realisations',
    cta: 'Voir les projets',
  },
];

const CREDIBILITE = [
  {
    icon: FaRoute,
    title: 'Gestion simple des accès et des contraintes d\'immeuble',
    text: 'Interphone, ascenseur, zones de livraison, plages horaires et règles de copropriété - tout est planifié à l\'avance. Vous n\'avez pas à gérer les va-et-vient ni à coordonner les accès le jour J. On s\'en occupe proprement.',
  },
  {
    icon: FaCheckCircle,
    title: 'Chantier propre et discret dans des espaces occupés',
    text: 'En contexte urbain dense, la propreté n\'est pas un bonus - c\'est une exigence de base. Protections complètes, déplacements ordonnés et nettoyage quotidien font partie de notre façon de travailler dans chaque projet centre-ville.',
  },
  {
    icon: FaStar,
    title: 'Résultat net dans des délais compatibles avec la réalité centre-ville',
    text: 'Que le projet soit avant une prise de possession, une location ou une mise en marché, l\'objectif est de livrer un espace propre, bien fini et prêt à être utilisé dans les délais prévus. Sans improvisation de dernière minute.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous intervenez dans les condos et tours résidentielles de Ville-Marie\u00A0?',
    answer: 'Oui. Nous intervenons dans les condos, tours résidentielles et autres types d\'unités à Ville-Marie. Ce type de projet demande souvent une bonne coordination avec l\'immeuble, un chantier propre et une attention particulière aux accès et aux espaces communs. Notre approche s\'adapte à ces contraintes pour que les travaux se déroulent de façon simple, efficace et bien encadrée.',
  },
  {
    question: 'Comment gérez-vous les accès, ascenseurs et horaires d\'immeuble au centre-ville\u00A0?',
    answer: 'Les projets au centre-ville demandent souvent une planification plus précise. Nous tenons compte des accès, des ascenseurs, des plages horaires permises, du stationnement et des règles de l\'immeuble avant de commencer les travaux. L\'objectif est de garder le chantier organisé dès le départ afin de limiter les imprévus et de travailler efficacement dans un environnement plus encadré.',
  },
  {
    question: 'Pouvez-vous travailler avant un emménagement, une relocation ou une mise en vente\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets avant un emménagement, une relocation ou une mise en vente. Dans ce contexte, le respect des délais est particulièrement important. Nous planifions donc le chantier avec un échéancier clair afin que les travaux soient complétés au bon moment et que l\'espace soit prêt à être occupé, reloué ou présenté dans les meilleures conditions.',
  },
  {
    question: 'Travaillez-vous aussi dans des bureaux ou espaces commerciaux légers à Ville-Marie\u00A0?',
    answer: 'Oui. Nous pouvons intervenir dans certains bureaux, locaux professionnels et espaces commerciaux légers à Ville-Marie, selon le type de projet. Ce genre d\'intervention demande souvent de la flexibilité, une bonne coordination et un chantier propre afin de limiter les impacts sur les activités en place. Chaque projet est évalué selon ses contraintes et son échéancier.',
  },
  {
    question: 'Combien de temps faut-il pour obtenir une soumission à Ville-Marie\u00A0?',
    answer: 'Nous répondons en moins de 24 heures. Le délai exact dépend du type de projet, des informations fournies et de la période de l\'année. Plus votre demande est claire dès le départ, plus nous pouvons vous transmettre rapidement une soumission précise, adaptée à votre propriété et aux contraintes propres à Ville-Marie.',
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
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité.',
    to: '/realisations',
  },
  {
    title: 'Demander une soumission',
    description: 'Réponse en moins de 24h, sans engagement.',
    to: '/contact',
  },
  {
    title: 'Nos autres secteurs à Montréal',
    description: 'Tous les quartiers et secteurs desservis dans la ville.',
    to: '/secteurs/montreal',
  },
];

export default function VilleMariePage() {
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
        name: 'Ville-Marie',
        item: 'https://leleverdupinceau.ca/secteurs/montreal/ville-marie',
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
      { '@type': 'City', name: 'Ville-Marie' },
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
        title="Peintre à Ville-Marie | Condos et projets centre-ville | Le Lever du Pinceau"
        description="Le Lever du Pinceau réalise des projets de peinture à Ville-Marie dans les condos, tours résidentielles et espaces urbains occupés. Chantier propre, coordination claire, soumission gratuite."
        canonicalPath="/secteurs/montreal/ville-marie"
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
          pb={{ base: 24, sm: 32, md: 28, lg: 32 }}
          bgColor="gray.700"
          overflow="visible"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10 }}
        >
          <Image
            src={heroImg}
            alt="Peintre à Ville-Marie - condo centre-ville Montréal"
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
                    Ville-Marie
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
                  Peintre à Ville-Marie
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  Des peintres de métier pour vos projets résidentiels et commerciaux légers au coeur de Montréal.
                </Text>

                <Text
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  color="whiteAlpha.900"
                  maxW={{ base: '100%', md: '620px', lg: '720px' }}
                  lineHeight="1.7"
                >
                  Condos centre-ville, tours résidentielles, unités locatives, bureaux légers et projets avant emménagement : nous réalisons des chantiers propres, rapides et bien coordonnés dans Ville-Marie.
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
                    Voir nos réalisations
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Container>

          <TrustBanner compact showSatisfactionGuarantee={false} />
        </Box>

        {/* ===== SECTION 3 - CHECKMARKS VILLE-MARIE ===== */}
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
                  Une équipe habituée aux réalités d&apos;un chantier centre-ville
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  À Ville-Marie, la réussite du projet dépend autant de la logistique et de la coordination que de la finition.
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

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS À VILLE-MARIE ===== */}
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
                  Des projets qui demandent une vraie coordination urbaine
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Un condo en tour, une unité locative au centre-ville ou un bureau léger ne se gèrent pas de la même manière.
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

        {/* ===== SECTION 5 - SERVICES LES PLUS DEMANDÉS À VILLE-MARIE ===== */}
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
                  Les services les plus demandés dans Ville-Marie
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Trouvez rapidement le bon service selon votre type de projet au centre-ville.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {SERVICES.map((service, i) => (
                  <Link
                    key={i}
                    as={RouterLink}
                    to={service.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={{ base: 6, md: 7 }}
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
                      <Stack spacing={4} flex={1} justify="space-between">
                        <Box>
                          <Heading
                            as="h3"
                            fontSize={{ base: 'md', md: 'lg' }}
                            fontWeight="700"
                            color="gray.800"
                            lineHeight="1.3"
                            mb={3}
                          >
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

        {/* ===== SECTION 6 - PREUVE DE CRÉDIBILITÉ LOCALE ===== */}
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
                  Une approche cohérente avec les attentes du centre-ville
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Ce n&apos;est pas seulement un projet de peinture - c&apos;est une intervention dans un environnement urbain dense où tout se voit et où la coordination compte.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {CREDIBILITE.map((bloc, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 6, md: 8 }}
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                  >
                    <Stack spacing={5}>
                      <Flex
                        w="52px"
                        h="52px"
                        borderRadius="xl"
                        bg="brand.50"
                        align="center"
                        justify="center"
                      >
                        <Icon as={bloc.icon} color="brand.500" boxSize={6} />
                      </Flex>
                      <Heading
                        as="h3"
                        fontSize={{ base: 'lg', md: 'xl' }}
                        fontWeight="700"
                        color="gray.800"
                        lineHeight="1.3"
                      >
                        {bloc.title}
                      </Heading>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8">
                        {bloc.text}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
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
                Questions fréquentes sur nos services de peinture à Ville-Marie
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
                Explorer les pages les plus utiles pour votre projet
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 3 }} spacing={4}>
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
                Prêt à confier votre projet à une équipe habituée au centre-ville&#xA0;?
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
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
