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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';

export default function SecteursDesservisPage() {
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
        name: isFr ? 'Secteurs desservis' : 'Service areas',
        item: 'https://leleverdupinceau.ca/secteurs-desservis',
      },
    ],
  };

  const cities = [
    {
      name: 'Montréal',
      description: isFr
        ? 'Peinture résidentielle, intérieure, extérieure, commerciale, industrielle.'
        : 'Residential, interior, exterior, commercial, industrial painting.',
      link: '/secteurs-desservis/montreal',
    },
    {
      name: 'Laval',
      description: isFr
        ? 'Services pour maisons, condos, commerces et entrepôts.'
        : 'Services for houses, condos, businesses and warehouses.',
      link: '/secteurs-desservis/laval',
    },
    {
      name: 'Longueuil',
      description: isFr
        ? 'Peinture intérieure, extérieure, résidentielle et commerciale.'
        : 'Interior, exterior, residential and commercial painting.',
      link: '/secteurs-desservis/longueuil',
    },
    {
      name: 'Brossard',
      description: isFr
        ? 'Projets résidentiels et commerciaux.'
        : 'Residential and commercial projects.',
      link: '/secteurs-desservis/brossard',
    },
  ];

  const neighborhoods = [
    'Outremont',
    'Plateau-Mont-Royal',
    'NDG',
    'Rosemont',
    'Ahuntsic',
    'Griffintown',
    'Verdun',
    'Westmount',
    'Saint-Laurent',
    'Hochelaga',
  ];

  const services = [
    {
      name: isFr ? 'Peinture résidentielle' : 'Residential painting',
      link: '/services/peinture-residentielle',
    },
    {
      name: isFr ? 'Peinture commerciale' : 'Commercial painting',
      link: '/services/peinture-commerciale',
    },
    {
      name: isFr ? 'Peinture intérieure' : 'Interior painting',
      link: '/services/new-peinture-interieure',
    },
    {
      name: isFr ? 'Peinture extérieure' : 'Exterior painting',
      link: '/services/new-peinture-exterieure',
    },
    {
      name: isFr ? 'Peinture industrielle' : 'Industrial painting',
      link: '/services/peinture-industrielle',
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Secteurs desservis – Le Lever du Pinceau | Peinture Montréal, Laval, Longueuil, Brossard'
            : 'Service areas – Le Lever du Pinceau | Painting Montreal, Laval, Longueuil, Brossard'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? "Nos équipes de peintres professionnels interviennent dans l'ensemble du Grand Montréal : Montréal, Laval, Longueuil, Brossard. Services de peinture résidentielle, commerciale, intérieure et extérieure."
              : 'Our teams of professional painters serve all of Greater Montreal: Montreal, Laval, Longueuil, Brossard. Residential, commercial, interior and exterior painting services.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/secteurs-desservis'
        />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 8, md: 12 }}
        >
          <Stack spacing={0}>
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
                {isFr ? 'Secteurs desservis' : 'Service areas'}
              </Text>
            </HStack>

            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
              <Heading
                as='h1'
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {isFr
                  ? 'Secteurs desservis – Le Lever du Pinceau'
                  : 'Service areas – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='800px'
              >
                {isFr
                  ? "Nos équipes de peintres professionnels interviennent dans l'ensemble du Grand Montréal, incluant Montréal, Laval, Longueuil et Brossard. Ce Hub regroupe toutes les zones desservies par Le Lever du Pinceau : villes principales, sous-villes et quartiers majeurs. Sélectionnez votre secteur pour découvrir les services disponibles, les projets réalisés et les détails propres à votre localité."
                  : 'Our teams of professional painters serve all of Greater Montreal, including Montreal, Laval, Longueuil and Brossard. This Hub brings together all areas served by Le Lever du Pinceau: main cities, sub-cities and major neighborhoods. Select your area to discover available services, completed projects and details specific to your location.'}
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='800px'
                fontWeight='500'
              >
                {isFr
                  ? '👉 Nous sommes disponibles rapidement dans votre quartier pour des projets résidentiels, commerciaux, intérieurs et extérieurs.'
                  : '👉 We are quickly available in your neighborhood for residential, commercial, interior and exterior projects.'}
              </Text>
            </Stack>

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
                        ? 'Nos services de peinture par ville'
                        : 'Our painting services by city'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 6, md: 8 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {cities.map((city, index) => (
                      <Link
                        key={index}
                        as={RouterLink}
                        to={city.link}
                        _hover={{ textDecoration: 'none' }}
                        w='100%'
                        h='100%'
                      >
                        <Box
                          bg='white'
                          p={{ base: 6, md: 8 }}
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          h='100%'
                          minH={{ base: '200px', md: '220px' }}
                          display='flex'
                          flexDirection='column'
                          _hover={{
                            borderColor: '#014CC4',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={4} flex={1} justify='space-between'>
                            <Box>
                              <HStack spacing={3} mb={3}>
                                <Icon
                                  as={FontAwesomeIcon}
                                  icon={faMapMarkerAlt}
                                  color='#014CC4'
                                  boxSize={5}
                                />
                                <Heading
                                  as='h3'
                                  fontSize='xl'
                                  fontWeight='bold'
                                  color='gray.800'
                                >
                                  {city.name}
                                </Heading>
                              </HStack>
                              <Text
                                color='gray.600'
                                fontSize='md'
                                lineHeight='1.6'
                                minH={{ base: '48px', md: '56px' }}
                                display='flex'
                                alignItems='center'
                              >
                                {city.description}
                              </Text>
                            </Box>
                            <HStack spacing={2} color='#014CC4' flexShrink={0}>
                              <Text fontSize='sm' fontWeight='medium'>
                                {isFr ? 'Voir' : 'View'} {city.name}
                              </Text>
                              <ArrowForwardIcon boxSize={4} />
                            </HStack>
                          </Stack>
                        </Box>
                      </Link>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

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
                        ? 'Quelques quartiers que nous desservons'
                        : 'Some neighborhoods we serve'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 2, md: 3, lg: 5 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {neighborhoods.map((neighborhood, index) => (
                      <Box
                        key={index}
                        p={4}
                        bg='white'
                        borderRadius='lg'
                        border='1px solid'
                        borderColor='gray.200'
                        textAlign='center'
                      >
                        <Text
                          fontWeight='medium'
                          color='gray.700'
                          fontSize='md'
                        >
                          {neighborhood}
                        </Text>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={{ base: 8, md: 12 }}
                  align='center'
                >
                  <Box
                    w='100%'
                    h={{ base: '250px', md: '400px' }}
                    bg='gray.100'
                    borderRadius='xl'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    border='1px solid'
                    borderColor='gray.200'
                  >
                    <Text
                      color='gray.500'
                      fontSize={{ base: 'sm', md: 'md' }}
                      fontWeight='medium'
                    >
                      {isFr ? 'Image manquante' : 'Missing image'}
                    </Text>
                  </Box>
                  <Stack spacing={6}>
                    <Stack spacing={3}>
                      <Heading
                        as='h2'
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontWeight='bold'
                        color='gray.800'
                      >
                        {isFr
                          ? 'Une équipe de peintres professionnels à proximité'
                          : 'A team of professional painters nearby'}
                      </Heading>
                    </Stack>

                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                    >
                      {isFr
                        ? "Peu importe votre secteur, nos peintres professionnels assurent un travail précis, propre et durable. Nous adaptons nos méthodes selon les surfaces, le type d'habitation et le style architectural de chaque quartier."
                        : 'Regardless of your area, our professional painters ensure precise, clean and durable work. We adapt our methods according to surfaces, type of housing and architectural style of each neighborhood.'}
                    </Text>

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
                        whiteSpace='normal'
                        textAlign='center'
                        lineHeight='1.4'
                        h='auto'
                        minH='48px'
                      >
                        {isFr
                          ? 'En savoir plus sur nos peintres professionnels'
                          : 'Learn more about our professional painters'}
                      </Button>
                    </Link>
                  </Stack>
                </SimpleGrid>
              </Container>
            </Box>

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
                        ? 'Services de peinture accessibles dans votre région'
                        : 'Painting services available in your region'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        as={RouterLink}
                        to={service.link}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          bg='white'
                          p={{ base: 4, md: 6 }}
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          textAlign='center'
                          _hover={{
                            borderColor: '#014CC4',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={2} align='center'>
                            <Text
                              fontWeight='bold'
                              color='gray.800'
                              fontSize='lg'
                            >
                              {service.name}
                            </Text>
                            <HStack spacing={2} color='#014CC4'>
                              <Text fontSize='sm' fontWeight='medium'>
                                {isFr ? 'Voir' : 'View'}
                              </Text>
                              <ArrowForwardIcon boxSize={4} />
                            </HStack>
                          </Stack>
                        </Box>
                      </Link>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            {/* Section 5 — Guides & ressources */}
            <ResourcesSection />
          </Stack>
        </Container>

        <Box
          w='100%'
          py={{ base: 12, md: 16 }}
          bg='#014CC4'
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
                    ? "Besoin d'un peintre dans votre secteur ?"
                    : 'Need a painter in your area?'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Nos équipes interviennent rapidement dans toutes les villes et quartiers du Grand Montréal. Demandez votre estimation gratuite en moins de 24 heures.'
                    : 'Our teams serve quickly in all cities and neighborhoods of Greater Montreal. Request your free estimate in less than 24 hours.'}
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
                    color='#014CC4'
                    borderRadius='full'
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: 'gray.100' }}
                    size='lg'
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
