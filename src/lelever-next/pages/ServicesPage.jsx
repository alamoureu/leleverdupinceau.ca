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
  Image,
  Grid,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import SectorsSection from '../home-page/SectorsSection';
import serviceHubPhotoHeader from '../images/1-page-principale/service hub/Photo header/IMG_6771.PNG';

export default function ServicesPage() {
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
    ],
  };

  const mainServices = [
    {
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      description: isFr
        ? 'Maisons, condos, plex, logements, multi-étages.'
        : 'Houses, condos, plex, dwellings, multi-story buildings.',
      link: '/services/peinture-residentielle',
    },
    {
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      description: isFr
        ? 'Bureaux, commerces, restaurants, immeubles.'
        : 'Offices, stores, restaurants, buildings.',
      link: '/services/peinture-commerciale',
    },
    {
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      description: isFr
        ? 'Murs, plafonds, portes, escaliers, finitions.'
        : 'Walls, ceilings, doors, stairs, finishes.',
      link: '/services/peinture-interieure',
    },
    {
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      description: isFr
        ? 'Revêtements extérieurs, brique, bois, aluminium, crépi.'
        : 'Exterior coatings, brick, wood, aluminum, stucco.',
      link: '/services/peinture-exterieure',
    },
    {
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      description: isFr
        ? 'Entrepôts, usines, bâtiments spécialisés.'
        : 'Warehouses, factories, specialized buildings.',
      link: '/services/peinture-industrielle',
    },
  ];

  const subServices = [
    {
      title: isFr
        ? 'Peinture résidentielle intérieure'
        : 'Residential interior painting',
      link: '/services/peinture-residentielle/interieure',
    },
    {
      title: isFr
        ? 'Peinture résidentielle extérieure'
        : 'Residential exterior painting',
      link: '/services/peinture-residentielle/exterieure',
    },
    {
      title: isFr
        ? 'Peinture commerciale intérieure'
        : 'Commercial interior painting',
      link: '/services/peinture-commerciale/interieure',
    },
    {
      title: isFr
        ? 'Peinture commerciale extérieure'
        : 'Commercial exterior painting',
      link: '/services/peinture-commerciale/exterieure',
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Services de peinture – Le Lever du Pinceau | Montréal'
            : 'Painting Services – Le Lever du Pinceau | Montreal'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Explorez tous les services de peinture offerts par Le Lever du Pinceau dans le Grand Montréal. Peinture résidentielle, commerciale, intérieure, extérieure et industrielle. Soumission gratuite.'
              : 'Explore all painting services offered by Le Lever du Pinceau in Greater Montreal. Residential, commercial, interior, exterior and industrial painting. Free quote.'
          }
        />
        <link rel='canonical' href='https://leleverdupinceau.ca/services' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Grid
            templateColumns={{ base: '1fr', md: '6fr 4fr' }}
            gap={{ base: 6, md: 8, lg: 10 }}
            mb={{ base: 12, md: 16 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              <HStack
                spacing={3}
                textStyle='bodyLarge'
                color='gray.600'
                mb={{ base: 4, md: 6 }}
              >
                <Link href='/' _hover={{ textDecoration: 'underline' }} color='gray.600' textStyle='bodyLarge'>
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text textStyle='bodyLarge'>›</Text>
                <Text color='gray.800' fontWeight='medium' textStyle='bodyLarge'>
                  {isFr ? 'Services' : 'Services'}
                </Text>
              </HStack>
              <Stack spacing={{ base: 4, md: 6 }} textAlign='left'>
                <Heading as='h1' size='page' color='gray.800'>
                  {isFr
                    ? 'Services de peinture – Le Lever du Pinceau'
                    : 'Painting Services – Le Lever du Pinceau'}
                </Heading>
                <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px'>
                  {isFr
                    ? "Explorez tous les services de peinture offerts par Le Lever du Pinceau dans le Grand Montréal. Nos équipes de peintres professionnels réalisent des projets résidentiels, commerciaux, intérieurs, extérieurs et industriels avec une finition impeccable. Cette page regroupe l'ensemble de nos services afin de vous orienter rapidement vers la page correspondant à votre besoin."
                    : 'Explore all painting services offered by Le Lever du Pinceau in Greater Montreal. Our teams of professional painters carry out residential, commercial, interior, exterior and industrial projects with impeccable finish. This page brings together all our services to quickly guide you to the page corresponding to your need.'}
                </Text>
                <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px' fontWeight='500'>
                  {isFr
                    ? '👉 Choisissez un service pour découvrir les détails et les options disponibles.'
                    : '👉 Choose a service to discover the details and available options.'}
                </Text>
              </Stack>
            </Stack>
            <Box
              w='100%'
              aspectRatio='1'
              borderRadius='xl'
              overflow='hidden'
              bg='gray.100'
            >
              <Image
                src={serviceHubPhotoHeader}
                alt={isFr ? 'Services de peinture – Le Lever du Pinceau' : 'Painting services – Le Lever du Pinceau'}
                w='100%'
                h='100%'
                objectFit='cover'
                objectPosition='center'
              />
            </Box>
          </Grid>
          <Stack spacing={0}>

            <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='left'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr
                        ? 'Nos services de peinture'
                        : 'Our painting services'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 6, md: 8 }}
                  >
                    {mainServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          bg='white'
                          p={{ base: 6, md: 8 }}
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          h='100%'
                          display='flex'
                          flexDirection='column'
                          _hover={{
                            borderColor: 'brand.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={4} flex={1}>
                            <Heading as='h3' size='subsection' color='gray.800'>
                              {service.title}
                            </Heading>
                            <Text color='gray.600' textStyle='body' lineHeight='1.6'>
                              {service.description}
                            </Text>
                            <HStack spacing={2} color='brand.500' mt='auto'>
                              <Text textStyle='caption' fontWeight='medium' _hover={{ textDecoration: 'underline' }}>
                                {isFr ? 'Voir la page' : 'View page'}
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

            <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='left'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr
                        ? 'Sous-services disponibles'
                        : 'Available sub-services'}
                    </Heading>
                    <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px'>
                      {isFr
                        ? 'Découvrez nos services spécialisés par type de projet et environnement.'
                        : 'Discover our specialized services by project type and environment.'}
                    </Text>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 6, md: 8 }}
                  >
                    {subServices.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          bg='white'
                          p={{ base: 6, md: 8 }}
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          h='100%'
                          display='flex'
                          flexDirection='column'
                          _hover={{
                            borderColor: 'brand.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={4} flex={1}>
                            <Heading as='h3' size='subsection' color='gray.800'>
                              {service.title}
                            </Heading>
                            <HStack spacing={2} color='brand.500' mt='auto'>
                              <Text textStyle='caption' fontWeight='medium' _hover={{ textDecoration: 'underline' }}>
                                {service.link.includes('residentielle')
                                  ? isFr
                                    ? 'Voir peinture résidentielle'
                                    : 'View residential painting'
                                  : isFr
                                  ? 'Voir peinture commerciale'
                                  : 'View commercial painting'}
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

            <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                  <Stack spacing={{ base: 4, md: 6 }} align='center' textAlign='center'>
                  <Stack spacing={{ base: 2, md: 3 }} maxW='800px'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr
                        ? 'Des peintres professionnels pour chaque type de projet'
                        : 'Professional painters for every type of project'}
                    </Heading>

                    <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
                      {isFr
                        ? 'Tous nos services sont réalisés par des peintres professionnels qualifiés, formés pour garantir une application uniforme, une finition durable et un chantier propre.'
                        : 'All our services are carried out by qualified professional painters, trained to guarantee uniform application, durable finish and a clean worksite.'}
                    </Text>

                    <Link
                      href='/peintre-professionnel'
                      _hover={{ textDecoration: 'none' }}
                      w={{ base: '100%', md: 'auto' }}
                      display='inline-block'
                    >
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        variant='outline'
                        borderColor='brand.500'
                        color='brand.500'
                        borderRadius='full'
                        textStyle='nav'
                        px={{ base: 5, md: 7 }}
                        py={{ base: 3, md: 4 }}
                        _hover={{ bg: 'brand.500', color: 'white' }}
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
                </Stack>
              </Container>
            </Box>

            <SectorsSection
              title={
                isFr
                  ? 'Services disponibles dans votre ville'
                  : 'Services available in your city'
              }
            />

            {/* Section 5 — Guides & ressources */}
            <ResourcesSection
              title={
                isFr
                  ? 'Conseils pratiques avant de choisir votre service'
                  : 'Practical advice before choosing your service'
              }
            />
          </Stack>
        </Container>

        <Box
          w='100%'
          py={{ base: 12, md: 16, lg: 20 }}
          bg='brand.700'
          mt={{ base: 8, md: 12 }}
        >
          <Container maxW='1440px' px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 4, md: 6 }} textAlign='center'>
              <Stack spacing={{ base: 2, md: 3 }}>
                <Heading as='h2' size='section' color='white'>
                  {isFr
                    ? 'Obtenez votre soumission gratuite'
                    : 'Get your free quote'}
                </Heading>
                <Text textStyle='bodyLarge' color='whiteAlpha.900' maxW='800px' mx='auto'>
                  {isFr
                    ? 'Nos équipes sont disponibles rapidement pour tous vos projets de peinture résidentielle, commerciale, intérieure, extérieure ou industrielle.'
                    : 'Our teams are quickly available for all your residential, commercial, interior, exterior or industrial painting projects.'}
                </Text>
              </Stack>

              <Box>
                <Link
                  as={RouterLink}
                  to='/contact'
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    bg='white'
                    color='brand.700'
                    borderRadius='full'
                    textStyle='nav'
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
