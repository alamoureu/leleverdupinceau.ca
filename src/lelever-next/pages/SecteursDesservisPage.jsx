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
  Image,
  Flex,
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';
import {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../home-page/SectorsSection';
import secteursHeroImage from '../images/secteurs_desservis.jpg';
import sectorHubPhotoHeader from '../images/1-page-principale/service hub/Photo header/IMG_6771.PNG';

export default function SecteursDesservisPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      image: montrealSecteur,
    },
    {
      name: 'Laval',
      description: isFr
        ? 'Services pour maisons, condos, commerces et entrepôts.'
        : 'Services for houses, condos, businesses and warehouses.',
      link: '/secteurs-desservis/laval',
      image: lavalSecteur,
    },
    {
      name: 'Longueuil',
      description: isFr
        ? 'Peinture intérieure, extérieure, résidentielle et commerciale.'
        : 'Interior, exterior, residential and commercial painting.',
      link: '/secteurs-desservis/longueuil',
      image: longueuilSecteur,
    },
    {
      name: 'Brossard',
      description: isFr
        ? 'Projets résidentiels et commerciaux.'
        : 'Residential and commercial projects.',
      link: '/secteurs-desservis/brossard',
      image: brossardSecteur,
    },
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
      link: '/services/peinture-interieure',
    },
    {
      name: isFr ? 'Peinture extérieure' : 'Exterior painting',
      link: '/services/peinture-exterieure',
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
                <Link as={RouterLink} to='/' _hover={{ textDecoration: 'underline' }} color='gray.600' textStyle='bodyLarge'>
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text textStyle='bodyLarge'>›</Text>
                <Text color='gray.800' fontWeight='medium' textStyle='bodyLarge'>
                  {isFr ? 'Secteurs desservis' : 'Service areas'}
                </Text>
              </HStack>
              <Stack spacing={{ base: 4, md: 6 }} textAlign='left'>
                <Heading as='h1' size='page' color='gray.800'>
                  {isFr
                    ? 'Secteurs desservis – Le Lever du Pinceau'
                    : 'Service areas – Le Lever du Pinceau'}
                </Heading>
                <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px'>
                  {isFr
                    ? "Nos équipes de peintres professionnels interviennent dans l'ensemble du Grand Montréal, incluant Montréal, Laval, Longueuil et Brossard. Cette page regroupe toutes les zones desservies par Le Lever du Pinceau : villes principales, sous-villes et quartiers majeurs. Sélectionnez votre secteur pour découvrir les services disponibles, les projets réalisés et les détails propres à votre localité."
                    : 'Our teams of professional painters serve all of Greater Montreal, including Montreal, Laval, Longueuil and Brossard. This page brings together all areas served by Le Lever du Pinceau: main cities, sub-cities and major neighborhoods. Select your area to discover available services, completed projects and details specific to your location.'}
                </Text>
                <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px' fontWeight='500'>
                  {isFr
                    ? '👉 Nous sommes disponibles rapidement dans votre quartier pour des projets résidentiels, commerciaux, intérieurs et extérieurs.'
                    : '👉 We are quickly available in your neighborhood for residential, commercial, interior and exterior projects.'}
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
                src={sectorHubPhotoHeader}
                alt={isFr ? 'Secteurs desservis – Le Lever du Pinceau' : 'Service areas – Le Lever du Pinceau'}
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
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' color='gray.800'>
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
                      >
                        <Box
                          position='relative'
                          borderRadius='2xl'
                          overflow='hidden'
                          border='1px solid'
                          borderColor='gray.200'
                          cursor='pointer'
                          transition='all 0.2s'
                          bg='white'
                          minH={{ base: '280px', md: '320px' }}
                          h='100%'
                          _hover={{
                            borderColor: 'brand.500',
                            boxShadow: 'xl',
                            transform: 'translateY(-4px)',
                          }}
                        >
                          <Image
                            src={city.image}
                            alt={city.name}
                            position='absolute'
                            top={0}
                            left={0}
                            w='100%'
                            h='100%'
                            objectFit='cover'
                            zIndex={0}
                          />
                          <Box
                            position='absolute'
                            top={0}
                            left={0}
                            right={0}
                            bottom={0}
                            bgGradient='linear(to-b, rgba(2, 42, 104, 0.3), rgba(2, 42, 104, 0.85))'
                            zIndex={1}
                          />

                          <Stack
                            position='relative'
                            zIndex={2}
                            p={{ base: 6, md: 8 }}
                            h='100%'
                            justify='flex-end'
                            spacing={3}
                          >
                            <HStack spacing={3}>
                              <Icon
                                as={FontAwesomeIcon}
                                icon={faMapMarkerAlt}
                                color='white' // Changed to white due to dark overlay
                                boxSize={5}
                              />
                              <Heading as='h3' size='subsection' color='white'>
                                {city.name}
                              </Heading>
                            </HStack>
                            <Text color='whiteAlpha.900' textStyle='bodyLarge' lineHeight='1.6' fontWeight='medium'>
                              {city.description}
                            </Text>
                            <HStack spacing={2} color='white' pt={2}>
                              <Text textStyle='caption' fontWeight='bold'>
                                {isFr ? 'Voir le secteur' : 'View area'}
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
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={{ base: 4, md: 6 }}
                  align='center'
                >
                  <Box
                    w='100%'
                    h={{ base: '250px', md: '400px' }}
                    borderRadius='xl'
                    overflow='hidden'
                    boxShadow='lg'
                  >
                    <Image
                      src={secteursHeroImage}
                      alt={
                        isFr
                          ? 'Secteurs desservis Le Lever du Pinceau - Peintres Montréal'
                          : 'Service areas Le Lever du Pinceau - Painters Montreal'
                      }
                      title={
                        isFr
                          ? 'Nos peintres desservent tout le Grand Montréal'
                          : 'Our painters serve all of Greater Montreal'
                      }
                      w='100%'
                      h='100%'
                      objectFit='cover'
                    />
                  </Box>
                  <Stack spacing={6}>
                    <Stack spacing={{ base: 2, md: 3 }}>
                      <Heading as='h2' size='section' color='gray.800'>
                        {isFr
                          ? 'Une équipe de peintres professionnels à proximité'
                          : 'A team of professional painters nearby'}
                      </Heading>
                    </Stack>

                    <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
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
                </SimpleGrid>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' color='gray.800'>
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
                            borderColor: 'brand.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={2} align='center'>
                            <Text fontWeight='bold' color='gray.800' textStyle='bodyLarge'>
                              {service.name}
                            </Text>
                            <HStack spacing={2} color='brand.500'>
                              <Text textStyle='caption' fontWeight='medium'>
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

            <ResourcesSection
              subtitle={
                isFr
                  ? 'Conseils utiles pour mieux planifier votre projet'
                  : 'Useful tips to better plan your project'
              }
            />
          </Stack>
        </Container>

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={
            isFr
              ? "Besoin d'un peintre dans votre secteur ?"
              : 'Need a painter in your area?'
          }
          subtitle={
            isFr
              ? 'Nos équipes interviennent rapidement dans toutes les villes et quartiers du Grand Montréal. Demandez votre estimation gratuite en moins de 24 heures.'
              : 'Our teams serve quickly in all cities and neighborhoods of Greater Montreal. Request your free estimate in less than 24 hours.'
          }
          buttonText={isFr ? 'Soumission gratuite' : 'Free quote'}
        />
      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
