import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from '@/lib/next-router';
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
  Grid,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
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
import ServiceCard from '../home-page/ServiceCard';
import serviceImgResidentielle from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import serviceImgCommerciale from '../images/1-page-principale/service hub/Peinture commerciale/IMG_6766.PNG';
import serviceImgInterieure from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import serviceImgExterieure from '../images/1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG';
import serviceImgIndustrielle from '../images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG';
import { toImageSrc } from '@/lib/imageSrc';

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

  const serviceImages = [
    serviceImgResidentielle,
    serviceImgCommerciale,
    serviceImgInterieure,
    serviceImgExterieure,
    serviceImgIndustrielle,
  ];

  const services = [
    {
      name: isFr ? 'Peinture résidentielle' : 'Residential painting',
      stripText: isFr ? 'Maisons, condos et propriétés' : 'Homes, condos and properties',
      link: '/services/peinture-residentielle',
      image: serviceImages[0],
    },
    {
      name: isFr ? 'Peinture commerciale' : 'Commercial painting',
      stripText: isFr ? 'Bureaux, commerces et espaces professionnels' : 'Offices, retail and professional spaces',
      link: '/services/peinture-commerciale',
      image: serviceImages[1],
    },
    {
      name: isFr ? 'Peinture intérieure' : 'Interior painting',
      stripText: isFr ? 'Murs, plafonds et finitions' : 'Walls, ceilings and finishes',
      link: '/services/peinture-interieure',
      image: serviceImages[2],
    },
    {
      name: isFr ? 'Peinture extérieure' : 'Exterior painting',
      stripText: isFr ? 'Façades, revêtements et protection' : 'Facades, siding and protection',
      link: '/services/peinture-exterieure',
      image: serviceImages[3],
    },
    {
      name: isFr ? 'Peinture industrielle' : 'Industrial painting',
      stripText: isFr ? 'Entrepôts, ateliers et bâtiments' : 'Warehouses, workshops and industrial buildings',
      link: '/services/peinture-industrielle',
      image: serviceImages[4],
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Peinture Montréal, Laval, Longueuil, Brossard | Secteurs desservis' : 'Painting Montreal, Laval, Longueuil, Brossard | Service areas'}
        description={isFr ? 'Peintres professionnels dans tout le Grand Montréal : Montréal, Laval, Longueuil, Brossard. Peinture résidentielle, commerciale, intérieure, extérieure. Devis gratuit par secteur.' : 'Professional painters across Greater Montreal: Montreal, Laval, Longueuil, Brossard. Residential, commercial, interior, exterior painting. Free quote by area.'}
        canonicalPath="/secteurs-desservis"
        schema={breadcrumbSchema}
      />

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
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
                  {isFr ? 'Secteurs desservis' : 'Service areas'}
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
              aspectRatio={{ base: '1', md: '4/3' }}
              borderRadius='xl'
              overflow='hidden'
              bg='gray.100'
            >
              <Image
                src={toImageSrc(sectorHubPhotoHeader)}
                alt={isFr ? 'Secteurs desservis – Le Lever du Pinceau' : 'Service areas – Le Lever du Pinceau'}
                w='100%'
                h='100%'
                objectFit='cover'
                objectPosition='center'
                loading="eager"
                fetchPriority="high"
                decoding="async"
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
                            src={toImageSrc(city.image)}
                            alt={city.name}
                            position='absolute'
                            top={0}
                            left={0}
                            w='100%'
                            h='100%'
                            objectFit='cover'
                            zIndex={0}
                            loading="lazy"
                            decoding="async"
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
                      src={toImageSrc(secteursHeroImage)}
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
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
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
                          ? 'En savoir plus'
                          : 'Learn more'}
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

                  <Stack spacing={{ base: 4, md: 6 }} maxW='1000px' mx='auto' align='center'>
                    <SimpleGrid
                      columns={{ base: 1, md: 3 }}
                      spacing={{ base: 4, md: 6 }}
                      w='100%'
                    >
                      {services.slice(0, 3).map((service, index) => (
                        <Box key={index} as={RouterLink} to={service.link} _hover={{ textDecoration: 'none' }} w='100%' display='block'>
                          <ServiceCard
                            image={service.image}
                            title={service.name}
                            subtitle={service.stripText}
                            subtitleOnImageOnly
                            ctaLabel={isFr ? 'Voir' : 'View'}
                            noHoverBorder={false}
                            compact
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                    <Flex w='100%' justify='center' gap={{ base: 4, md: 6 }} flexWrap='wrap'>
                      {services.slice(3, 5).map((service, index) => (
                        <Box
                          key={index + 3}
                          as={RouterLink}
                          to={service.link}
                          _hover={{ textDecoration: 'none' }}
                          w={{ base: '100%', md: 'calc(33.333% - 8px)' }}
                          maxW={{ md: '320px' }}
                          display='block'
                        >
                          <ServiceCard
                            image={service.image}
                            title={service.name}
                            subtitle={service.stripText}
                            subtitleOnImageOnly
                            ctaLabel={isFr ? 'Voir' : 'View'}
                            noHoverBorder={false}
                            compact
                          />
                        </Box>
                      ))}
                    </Flex>
                  </Stack>
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
