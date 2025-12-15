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
  Icon,
  HStack,
  Flex,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import ReviewsSection from '../home-page/ReviewsSection';
import SectorsSection from '../home-page/SectorsSection';


export default function AboutPage() {
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
        name: isFr ? 'À propos' : 'About',
        item: 'https://leleverdupinceau.ca/a-propos',
      },
    ],
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: isFr
      ? 'À propos de Le Lever du Pinceau'
      : 'About Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca/a-propos',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Le Lever du Pinceau',
      description: isFr
        ? 'Équipe de peintres professionnels spécialisés en peinture résidentielle, commerciale, intérieure et extérieure dans tout le Grand Montréal'
        : 'Team of professional painters specialized in residential, commercial, interior and exterior painting throughout Greater Montreal',
      telephone: '+14388680772',
      email: 'leleverdupinceau@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2175 Rue Saint-Patrick',
        addressLocality: 'Montréal',
        addressRegion: 'QC',
        postalCode: 'H3K 1B4',
        addressCountry: 'CA',
      },
    },
  };

  const missionPoints = [
    isFr
      ? 'Offrir une qualité de finition impeccable'
      : 'Deliver impeccable finish quality',
    isFr
      ? 'Livrer un service professionnel & courtois'
      : 'Provide professional & courteous service',
    isFr
      ? 'Respecter les délais et votre espace'
      : 'Respect deadlines and your space',
    isFr
      ? 'Garantir un résultat durable et esthétique'
      : 'Guarantee a durable and aesthetic result',
    isFr
      ? 'Rendre chaque projet simple, clair et agréable'
      : 'Make every project simple, clear and pleasant',
  ];

  const values = [
    {
      title: isFr ? 'Qualité' : 'Quality',
      description: isFr
        ? 'Nous utilisons uniquement des produits professionnels et des techniques éprouvées'
        : 'We use only professional products and proven techniques',
    },
    {
      title: isFr ? 'Propreté' : 'Cleanliness',
      description: isFr
        ? 'Protection complète des surfaces + nettoyage final impeccable'
        : 'Complete surface protection + impeccable final cleaning',
    },
    {
      title: isFr ? 'Transparence' : 'Transparency',
      description: isFr
        ? 'Soumissions claires, communication simple, prix honnête'
        : 'Clear quotes, simple communication, honest pricing',
    },
    {
      title: isFr ? 'Respect' : 'Respect',
      description: isFr
        ? 'Respect des lieux, de votre temps et de vos attentes'
        : 'Respect for the premises, your time and your expectations',
    },
    {
      title: isFr ? 'Finitions impeccables' : 'Impeccable finishes',
      description: isFr
        ? 'Nous ne quittons jamais avant que tout soit parfait'
        : 'We never leave until everything is perfect',
    },
  ];

  const teamPoints = [
    isFr
      ? 'Formés aux meilleures techniques du métier'
      : 'Trained in the best techniques of the trade',
    isFr
      ? 'Spécialisés en surfaces modernes & anciennes'
      : 'Specialized in modern & old surfaces',
    isFr
      ? 'Habitués aux logements habités'
      : 'Accustomed to occupied dwellings',
    isFr
      ? 'Capables de gérer petits et grands projets'
      : 'Able to handle small and large projects',
    isFr
      ? 'Reconnus pour leur minutie et leur efficacité'
      : 'Recognized for their attention to detail and efficiency',
  ];

  const projectTypes = [
    isFr ? 'Peinture intérieure' : 'Interior painting',
    isFr ? 'Peinture extérieure' : 'Exterior painting',
    isFr ? 'Projets résidentiels' : 'Residential projects',
    isFr ? 'Projets commerciaux' : 'Commercial projects',
    isFr
      ? 'Conversions & rénovations complètes'
      : 'Conversions & complete renovations',
    isFr
      ? 'Préparation & réparation des surfaces'
      : 'Surface preparation & repair',
    isFr
      ? "Murs d'accent & finitions décoratives"
      : 'Accent walls & decorative finishes',
  ];

  const guarantees = [
    isFr ? 'Un résultat impeccable' : 'An impeccable result',
    isFr ? 'Un chantier propre' : 'A clean worksite',
    isFr ? 'Une équipe professionnelle' : 'A professional team',
    isFr ? 'Une communication claire' : 'Clear communication',
    isFr ? 'Une finition durable' : 'A durable finish',
    isFr
      ? 'Une expérience simple et agréable'
      : 'A simple and pleasant experience',
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'À propos de Le Lever du Pinceau | Peintres professionnels Montréal'
            : 'About Le Lever du Pinceau | Professional Painters Montreal'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Découvrez Le Lever du Pinceau, une équipe de peintres professionnels passionnés spécialisés en peinture résidentielle et commerciale dans tout le Grand Montréal. Mission, valeurs et engagement qualité'
              : 'Discover Le Lever du Pinceau, a team of passionate professional painters specialized in residential and commercial painting throughout Greater Montreal. Mission, values and quality commitment'
          }
        />
        <link rel='canonical' href='https://leleverdupinceau.ca/a-propos' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type='application/ld+json'>
          {JSON.stringify(aboutPageSchema)}
        </script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 8, md: 12 }}
        >
          <Stack spacing={0}>
            {/* Breadcrumbs */}
            <HStack
              spacing={3}
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
            >
              <Link
                as={RouterLink}
                to='/new-home'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {isFr ? 'Accueil' : 'Home'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Text
                color='gray.800'
                fontWeight='medium'
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {isFr ? 'À propos' : 'About'}
              </Text>
            </HStack>

            {/* Intro Content */}
            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
              <Heading
                as='h1'
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {isFr
                  ? 'À propos de Le Lever du Pinceau'
                  : 'About Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? 'Le Lever du Pinceau est une équipe de peintres professionnels passionnés, spécialisés en peinture résidentielle, commerciale, intérieure et extérieure dans tout le Grand Montréal. Nous croyons que chaque projet mérite une approche personnalisée, un service impeccable et une finition de qualité durable. Depuis plusieurs années, nous aidons les propriétaires, entreprises, gestionnaires immobiliers et rénovateurs à transformer leurs espaces avec précision, propreté et souci du détail.'
                  : 'Le Lever du Pinceau is a team of passionate professional painters, specialized in residential, commercial, interior and exterior painting throughout Greater Montreal. We believe that every project deserves a personalized approach, impeccable service and a durable quality finish. For several years, we have been helping homeowners, businesses, property managers and renovators transform their spaces with precision, cleanliness and attention to detail.'}
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.700'
                fontWeight='medium'
                lineHeight='1.7'
                maxW='900px'
                mt={2}
              >
                {isFr
                  ? '👉 Notre mission : offrir la meilleure expérience de peinture au Québec, du premier contact à la finition parfaite.'
                  : '👉 Our mission: to offer the best painting experience in Quebec, from first contact to perfect finish.'}
              </Text>
            </Stack>

            {/* Values Section (Moved Up) */}
            <Box py={{ base: 8, md: 12 }}>
              <Container maxW='1440px' px={{ base: 0 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Les principes qui guident chaque projet'
                        : 'The principles that guide every project'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 8, md: 10 }}
                    maxW='1200px'
                    mx='auto'
                  >
                    {values.map((value, index) => (
                      <Box
                        key={index}
                        p={{ base: 6, md: 8 }}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        textAlign='center'
                      >
                        <Stack spacing={4}>
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faCheckCircle}
                            color='#014CC4'
                            boxSize={6}
                            mx='auto'
                          />
                          <Heading
                            as='h3'
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.800'
                          >
                            {value.title}
                          </Heading>
                          <Text color='gray.600' fontSize='md' lineHeight='1.6'>
                            {value.description}
                          </Text>
                        </Stack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>



            {/* Mission Section (Background Gray) */}
            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Améliorer vos espaces, un coup de pinceau à la fois'
                        : 'Improve your spaces, one brushstroke at a time'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.700'
                    textAlign='center'
                    mb={4}
                  >
                    {isFr
                      ? 'Notre mission est simple'
                      : 'Our mission is simple'}
                  </Text>

                  <Box maxW='1000px' mx='auto'>
                    <SimpleGrid
                      columns={{ base: 1, md: 2, lg: 3 }}
                      spacing={{ base: 6, md: 8 }}
                    >
                      {missionPoints.slice(0, 3).map((point, index) => (
                        <Flex key={index} align='start' gap={3}>
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faCheckCircle}
                            color='#014CC4'
                            boxSize={5}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                            {point}
                          </Text>
                        </Flex>
                      ))}
                    </SimpleGrid>
                    {/* Last row - centered on desktop */}
                    <Flex
                      direction={{ base: 'column', lg: 'row' }}
                      justify='center'
                      gap={{ base: 4, lg: 6 }}
                      mt={{ base: 4, lg: 6 }}
                    >
                      {missionPoints.slice(3).map((point, index) => (
                        <Flex
                          key={index + 3}
                          align='start'
                          gap={3}
                          w={{ base: '100%', lg: 'auto' }}
                          maxW={{ base: '100%', lg: 'calc(33.333% - 12px)' }}
                        >
                          <Icon
                            as={FontAwesomeIcon}
                            icon={faCheckCircle}
                            color='#014CC4'
                            boxSize={5}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                            {point}
                          </Text>
                        </Flex>
                      ))}
                    </Flex>
                  </Box>
                </Stack>
              </Container>
            </Box>



            {/* Project Types (De la petite retouche...) */}
            <Box py={{ base: 4, md: 8 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'De la petite retouche aux grands projets'
                        : 'From small touch-ups to large projects'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    textAlign='center'
                    mb={4}
                  >
                    {isFr ? 'Nous intervenons pour :' : 'We work on:'}
                  </Text>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {projectTypes.map((type, index) => (
                      <Flex key={index} align='start' gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                          {type}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>

                  <Box textAlign='center' pt={4}>
                    <Link
                      as={RouterLink}
                      to='/services'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        variant='outline'
                        borderColor='#014CC4'
                        color='#014CC4'
                        borderRadius='full'
                        fontSize={{ base: 'sm', md: 'md' }}
                        px={{ base: 5, md: 7 }}
                        py={{ base: 3, md: 4 }}
                        _hover={{ bg: '#014CC4', color: 'white' }}
                      >
                        {isFr
                          ? 'Voir tous nos services'
                          : 'See all our services'}
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Container>
            </Box>

            {/* Team Points (Des peintres professionnels...) */}
            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6} maxW='800px' mx='auto'>
                  <Stack spacing={3}>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Des peintres professionnels expérimentés'
                        : 'Experienced professional painters'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                  >
                    {isFr
                      ? 'Notre équipe est composée de peintres :'
                      : 'Our team is made up of painters who are:'}
                  </Text>

                  <Stack spacing={5}>
                    {teamPoints.map((point, index) => (
                      <Flex key={index} align='start' gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                          {point}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  <Link
                    as={RouterLink}
                    to='/peintre-professionnel'
                    _hover={{ textDecoration: 'none' }}
                    w={{ base: '100%', md: 'auto' }}
                  >
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant='outline'
                      borderColor='#014CC4'
                      color='#014CC4'
                      borderRadius='full'
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 5, md: 7 }}
                      py={{ base: 3, md: 4 }}
                      _hover={{ bg: '#014CC4', color: 'white' }}
                    >
                      {isFr
                        ? 'Voir notre page Peintres professionnels'
                        : 'See our Professional Painters page'}
                    </Button>
                  </Link>
                </Stack>
              </Container>
            </Box>

            {/* Guarantees */}
            <Box py={{ base: 12, md: 16 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? "La tranquillité d'esprit, c'est notre promesse"
                        : 'Peace of mind is our promise'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    textAlign='center'
                    mb={4}
                  >
                    {isFr ? 'Nous garantissons :' : 'We guarantee:'}
                  </Text>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {guarantees.map((guarantee, index) => (
                      <Flex key={index} align='start' gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                          {guarantee}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            <SectorsSection
              title={
                isFr
                  ? 'Nous servons tout le Grand Montréal'
                  : 'We serve all of Greater Montreal'
              }
              subtitle={
                isFr
                  ? 'Tous les quartiers & secteurs desservis'
                  : 'All neighborhoods & service areas'
              }
              pageContext={isFr ? 'Page À propos' : 'About Page'}
            />

            <Box py={{ base: 12, md: 16 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6} mb={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Ce que nos clients disent de nous'
                        : 'What our clients say about us'}
                    </Heading>
                  </Stack>
                </Stack>
              </Container>
              <ReviewsSection hideTitle={true} hideButton={true} />
            </Box>
          </Stack>
        </Container>

        <Box
          w='100%'
          py={{ base: 12, md: 16 }}
          bg='#022A68'
          mt={{ base: 8, md: 12 }}
        >
          <Container maxW='1440px' px={{ base: 4, md: 6 }}>
            <Stack spacing={8} textAlign='center'>
              <Stack spacing={3}>
                <Heading
                  as='h2'
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight='bold'
                  color='white'
                >
                  {isFr
                    ? 'Prêt à transformer votre espace ?'
                    : 'Ready to transform your space?'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Nous offrons des soumissions rapides et détaillées pour tous les types de projets'
                    : 'We offer fast and detailed quotes for all types of projects'}
                </Text>
              </Stack>

              <Box>
                <Link
                  as={RouterLink}
                  to='/new-contact'
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    bg='white'
                    color='#022A68'
                    borderRadius='full'
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: 'gray.100' }}
                    size='lg'
                  >
                    {isFr
                      ? 'Obtenir votre soumission gratuite'
                      : 'Get your free quote'}
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
