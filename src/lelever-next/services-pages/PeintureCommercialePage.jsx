import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Button,
  HStack,
  Flex,
  Grid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../home-page/SectorsSection';
import heroImage from '../images/hero/service-hero.png';
// Réalisations: Page peinture commerciale + sous-services uniquement (pas de doublon avec pages ville)
import imgCom1 from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import imgCom2 from '../images/2-services/Page peinture commerciale/2. réalisations/IMG_6759.PNG';
import imgCom3 from '../images/2-services/Page peinture commerciale/3. réalisations/IMG_6777.PNG';
import imgCom4 from '../images/4-sous-services/commercial x intérieure/3. réalisations/IMG_6762.PNG';
import imgCom5 from '../images/4-sous-services/commercial x éxtérieure/2. réalisations/IMG_6756.PNG';
// Header image removed as per folder structure rule

export default function PeintureCommercialePage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isFr ? 'Accueil' : 'Home',
        item: 'https://leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isFr ? 'Services' : 'Services',
        item: 'https://leleverdupinceau.ca/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isFr ? 'Peinture commerciale' : 'Commercial painting',
        item: 'https://leleverdupinceau.ca/services/peinture-commerciale',
      },
    ],
  };

  const whyUsContent = isFr
    ? [
      "Planification des travaux en dehors des heures d'ouverture si nécessaire",
      'Protection complète des sols, meubles et équipements',
      'Respect strict des délais et du calendrier convenu',
      'Utilisation de produits adaptés aux environnements commerciaux (faible odeur, séchage rapide, résistance accrue)',
      'Communication claire du début à la fin du projet',
    ]
    : [
      'Planning work outside opening hours if necessary',
      'Complete protection of floors, furniture and equipment',
      'Strict respect of deadlines and agreed schedule',
      'Use of products adapted to commercial environments (low odor, fast drying, increased resistance)',
      'Clear communication from start to finish of the project',
    ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peinture commerciale – Le Lever du Pinceau | Services professionnels pour entreprises'
            : 'Commercial painting – Le Lever du Pinceau | Professional services for businesses'}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture commerciale pour bureaux, commerces, restaurants et immeubles dans le Grand Montréal. Peintres professionnels, planification efficace, finition durable.'
              : 'Le Lever du Pinceau offers commercial painting services for offices, stores, restaurants and buildings in Greater Montreal. Professional painters, efficient planning, durable finish.'
          }
        />
        <link
          rel="canonical"
          href="https://leleverdupinceau.ca/services/peinture-commerciale"
        />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Box w="100%" bg="white" overflowX="hidden">
        <Container
          maxW="1440px"
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Grid
            templateColumns="1fr"
            gap={{ base: 6, md: 8, lg: 10 }}
            mb={{ base: 12, md: 16 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              <HStack
                spacing={3}
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.600"
                mb={{ base: 4, md: 6 }}
              >
                <Link
                  as={RouterLink}
                  to="/"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.600"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Link
                  as={RouterLink}
                  to="/services"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.600"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Services' : 'Services'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Text
                  color="gray.800"
                  fontWeight="medium"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Peinture commerciale' : 'Commercial painting'}
                </Text>
              </HStack>
              <Stack spacing={4} textAlign="left">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr
                    ? 'Peinture commerciale – Le Lever du Pinceau'
                    : 'Commercial painting – Le Lever du Pinceau'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.600"
                  lineHeight="1.7"
                  maxW="900px"
                >
                  {isFr
                    ? "La peinture commerciale demande une organisation efficace, des délais respectés et un résultat professionnel qui renforce l'image de votre entreprise. Le Lever du Pinceau accompagne commerces, bureaux, restaurants, cliniques, immeubles et bâtiments commerciaux dans tout le Grand Montréal."
                    : "Commercial painting requires efficient organization, respected deadlines and a professional result that strengthens your company's image. Le Lever du Pinceau accompanies stores, offices, restaurants, clinics, buildings and commercial buildings throughout Greater Montreal."}
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="gray.600"
                  lineHeight="1.7"
                  maxW="900px"
                  mt={2}
                  fontWeight="medium"
                >
                  {isFr
                    ? "👉 Nos peintres professionnels planifient les travaux pour minimiser l'impact sur vos opérations, tout en livrant une finition propre, durable et adaptée à votre environnement. Pour rafraîchir vos locaux, moderniser votre espace client ou rénover un immeuble complet, notre équipe de peinture commerciale est prête à intervenir."
                    : '👉 Our professional painters plan the work to minimize the impact on your operations, while delivering a clean, durable finish adapted to your environment. To refresh your premises, modernize your customer space or renovate a complete building, our commercial painting team is ready to intervene.'}
                </Text>
              </Stack>
            </Stack>
          </Grid>
          <Stack spacing={0}>

            {/* Section 1 — Pourquoi choisir notre service */}
            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign="left">
                    <Heading
                      as="h2"
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Une équipe organisée pour vos espaces commerciaux'
                        : 'An organized team for your commercial spaces'}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color="gray.600"
                      lineHeight="1.7"
                    >
                      {isFr
                        ? 'Nous adaptons nos interventions à la réalité des entreprises :'
                        : 'We adapt our interventions to the reality of businesses:'}
                    </Text>
                  </Stack>

                  <Stack spacing={3}>
                    {whyUsContent.map((item, index) => (
                      <Flex
                        key={index}
                        align="start"
                        gap={4}
                        p={4}
                        bg="white"
                        borderRadius="lg"
                        border="1px solid"
                        borderColor="gray.200"
                        _hover={{
                          borderColor: 'brand.500',
                          boxShadow: 'sm',
                          transform: 'translateX(4px)',
                        }}
                        transition="all 0.2s ease"
                      >
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color="brand.500"
                          boxSize={5}
                          mt={0.5}
                          flexShrink={0}
                        />
                        <Text
                          fontSize="md"
                          color="gray.700"
                          lineHeight="1.6"
                          fontWeight="500"
                          textAlign="left"
                        >
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="gray.600"
                    lineHeight="1.7"
                    mt={4}
                  >
                    {isFr
                      ? "Nous intervenons dans : bureaux, commerces de détail, restaurants, cabinets, cliniques, centres de services, espaces communs d'immeubles, etc."
                      : 'We work in: offices, retail stores, restaurants, practices, clinics, service centers, common areas of buildings, etc.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            {/* Section 2 — Sous-services */}
            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign="left">
                    <Heading
                      as="h2"
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Peinture commerciale intérieure et extérieure'
                        : 'Interior and exterior commercial painting'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 6, md: 8 }}
                    maxW="800px"
                  >
                    <Link
                      as={RouterLink}
                      to="/services/peinture-commerciale/interieure"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={6}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
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
                        <Stack spacing={3} flex={1}>
                          <Heading
                            as="h3"
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.800"
                          >
                            {isFr
                              ? 'Peinture commerciale intérieure'
                              : 'Interior commercial painting'}
                          </Heading>
                          <Text fontSize="md" color="gray.600" lineHeight="1.6">
                            {isFr
                              ? "Bureaux, salles de réunion, espaces clients, corridors, cages d'escaliers."
                              : 'Offices, meeting rooms, customer spaces, corridors, stairwells.'}
                          </Text>
                          <HStack spacing={2} color="brand.500" mt="auto">
                            <Text fontSize="sm" fontWeight="medium">
                              {isFr ? 'Voir la page' : 'View page'}
                            </Text>
                            <ArrowForwardIcon boxSize={4} />
                          </HStack>
                        </Stack>
                      </Box>
                    </Link>

                    <Link
                      as={RouterLink}
                      to="/services/peinture-commerciale/exterieure"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={6}
                        bg="white"
                        borderRadius="xl"
                        border="1px solid"
                        borderColor="gray.200"
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
                        <Stack spacing={3} flex={1}>
                          <Heading
                            as="h3"
                            fontSize="xl"
                            fontWeight="bold"
                            color="gray.800"
                          >
                            {isFr
                              ? 'Peinture commerciale extérieure'
                              : 'Exterior commercial painting'}
                          </Heading>
                          <Text fontSize="md" color="gray.600" lineHeight="1.6">
                            {isFr
                              ? 'Façades, entrées commerciales, structures extérieures, enseignes, revêtements.'
                              : 'Facades, commercial entrances, exterior structures, signs, coatings.'}
                          </Text>
                          <HStack spacing={2} color="brand.500" mt="auto">
                            <Text fontSize="sm" fontWeight="medium">
                              {isFr ? 'Voir la page' : 'View page'}
                            </Text>
                            <ArrowForwardIcon boxSize={4} />
                          </HStack>
                        </Stack>
                      </Box>
                    </Link>
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            {/* Section 3 — Peinture commerciale par ville */}
            <SectorsSection
              title={
                isFr
                  ? 'Peinture commerciale dans votre ville'
                  : 'Commercial painting in your city'
              }
              sectors={[
                {
                  name: 'Montréal',
                  link: '/services/peinture-commerciale/montreal',
                  image: montrealSecteur,
                },
                {
                  name: 'Laval',
                  link: '/services/peinture-commerciale/laval',
                  image: lavalSecteur,
                },
                {
                  name: 'Longueuil',
                  link: '/services/peinture-commerciale/longueuil',
                  image: longueuilSecteur,
                },
                {
                  name: 'Brossard',
                  link: '/services/peinture-commerciale/brossard',
                  image: brossardSecteur,
                },
              ]}
            />

            {/* Section 4 — Exemples de projets commerciaux */}
            <Box mt={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={6}>
                  <Stack spacing={3} textAlign="left">
                    <Heading
                      as="h2"
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight="bold"
                      color="gray.800"
                    >
                      {isFr
                        ? 'Réalisations en peinture commerciale'
                        : 'Commercial painting achievements'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={4}
                    maxW="1200px"
                  >
                    {[
                      { src: imgCom1, alt: isFr ? 'Peinture et plâtre avant l\'ouverture de ce café à Notre-Dame de Grâce' : 'Painting and plastering before the opening of this café in Notre-Dame de Grâce' },
                      { src: imgCom2, alt: isFr ? 'Rafraîchissement des murs et rampes de la cage d\'escalier d\'un plex à Ville-Marie' : 'Refresh of the walls and railings of the stairwell of a plex in Ville-Marie' },
                      { src: imgCom3, alt: isFr ? 'Peinture de la porte d\'entrée et du cadre de porte de cet immeuble de 8 logements sur la rive sud' : 'Painting of the entrance door and door frame of this 8-unit building on the South Shore' },
                      { src: imgCom4, alt: isFr ? 'Rafraîchissement commercial en intérieur' : 'Commercial interior refresh' },
                      { src: imgCom5, alt: isFr ? 'Peinture commerciale extérieure' : 'Commercial exterior painting' },
                    ].map((img, index) => (
                      <Stack key={index} spacing={2}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          borderRadius="lg"
                          w="100%"
                          h={{ base: '200px', md: '250px' }}
                          objectFit="cover"
                        />
                        <Text fontSize="sm" color="gray.600" lineHeight="1.5" textAlign="left">
                          {img.alt}
                        </Text>
                      </Stack>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            {/* Section 5 — À propos de nos peintres professionnels */}
            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={6} textAlign="center" align="center">
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="gray.800"
                  >
                    {isFr
                      ? 'Des peintres commerciaux expérimentés'
                      : 'Experienced commercial painters'}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color="gray.600"
                    lineHeight="1.7"
                  >
                    {isFr
                      ? "Nos peintres professionnels ont l'habitude de travailler dans des environnements commerciaux, avec des contraintes de temps, d'image de marque et d'achalandage."
                      : 'Our professional painters are used to working in commercial environments, with time constraints, brand image and traffic.'}
                  </Text>
                  <Link
                    as={RouterLink}
                    to="/peintre-professionnel"
                    _hover={{ textDecoration: 'none' }}
                    w={{ base: '100%', md: 'auto' }}
                  >
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant="outline"
                      borderColor="brand.500"
                      color="brand.500"
                      borderRadius="full"
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 5, md: 7 }}
                      py={{ base: 3, md: 4 }}
                      _hover={{ bg: 'brand.500', color: 'white' }}
                      whiteSpace="normal"
                      textAlign="center"
                      lineHeight="1.4"
                      h="auto"
                      minH="48px"
                    >
                      {isFr
                        ? 'En savoir plus sur nos peintres professionnels'
                        : 'Learn more about our professional painters'}
                    </Button>
                  </Link>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Container>

        {/* Section 7 — CTA final */}
        <Box
          w="100%"
          py={{ base: 12, md: 16, lg: 20 }}
          bg="brand.700"
          mt={{ base: 8, md: 12 }}
        >
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8} textAlign="center">
              <Stack spacing={3}>
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="white"
                >
                  {isFr
                    ? 'Obtenez une soumission pour votre projet commercial'
                    : 'Get a quote for your commercial project'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="whiteAlpha.900"
                  maxW="800px"
                  mx="auto"
                >
                  {isFr
                    ? 'Que ce soit pour des bureaux, un commerce, un restaurant ou un immeuble, nous vous proposons une estimation claire et un plan de travail adapté.'
                    : "Whether it's for offices, a store, a restaurant or a building, we offer you a clear estimate and an adapted work plan."}
                </Text>
              </Stack>

              <Box>
                <Link
                  as={RouterLink}
                  to="/contact"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    bg="white"
                    color="brand.700"
                    borderRadius="full"
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: 'gray.100' }}
                    size="lg"
                  >
                    {isFr ? 'Soumission gratuite' : 'Free quote'}
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
}
