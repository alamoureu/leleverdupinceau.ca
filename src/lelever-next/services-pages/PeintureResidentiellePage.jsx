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
  Icon,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../home-page/SectorsSection';
import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import img5971 from '../images/before_after/IMG_5971.jpg';
import img5972 from '../images/before_after/IMG_5972.jpg';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';

export default function PeintureResidentiellePage() {
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
        name: isFr ? 'Peinture résidentielle' : 'Residential painting',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle',
      },
    ],
  };

  const whyUsContent = isFr
    ? [
      'Une préparation soignée (réparations, sablage, calfeutrage)',
      'Une protection complète des surfaces',
      'Une application uniforme et durable',
      'Des produits haut de gamme adaptés à chaque matériau',
      'Un chantier propre et organisé',
      'Un service rapide et respectueux de votre espace',
    ]
    : [
      'Careful preparation (repairs, sanding, caulking)',
      'Complete protection of surfaces',
      'Uniform and durable application',
      'High-end products adapted to each material',
      'Clean and organized worksite',
      'Fast and respectful service of your space',
    ];

  const cities = [
    { name: isFr ? 'Montréal' : 'Montreal', slug: 'montreal' },
    { name: 'Laval', slug: 'laval' },
    { name: 'Longueuil', slug: 'longueuil' },
    { name: 'Brossard', slug: 'brossard' },
  ];

  // Images section removed to avoid duplication with project images above
  // Images section populated
  const images = [
    { src: img5969, alt: isFr ? 'Projet résidentiel avant' : 'Residential project before' },
    { src: img5970, alt: isFr ? 'Projet résidentiel après' : 'Residential project after' },
    { src: img5971, alt: isFr ? 'Peinture intérieure' : 'Interior painting' },
    { src: img5972, alt: isFr ? 'Peinture salon' : 'Living room painting' },
    { src: img5973, alt: isFr ? 'Rénovation' : 'Renovation' },
    { src: img5974, alt: isFr ? 'Finition impeccable' : 'Impeccable finish' },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peinture résidentielle – Le Lever du Pinceau | Services professionnels pour maisons et condos'
            : 'Residential painting – Le Lever du Pinceau | Professional services for houses and condos'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture résidentielle pour maisons, condos, appartements, duplex et triplex dans le Grand Montréal. Peintres professionnels, préparation soignée, finition impeccable.'
              : 'Le Lever du Pinceau offers residential painting services for houses, condos, apartments, duplexes and triplexes in Greater Montreal. Professional painters, careful preparation, impeccable finish.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/services/peinture-residentielle'
        />
        <meta name='robots' content='noindex, nofollow' />
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
            {/* Breadcrumb */}
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
              <Link
                as={RouterLink}
                to='/services'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {isFr ? 'Services' : 'Services'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Text
                color='gray.800'
                fontWeight='medium'
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {isFr ? 'Peinture résidentielle' : 'Residential painting'}
              </Text>
            </HStack>

            {/* H1 et Introduction */}
            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
              <Heading
                as='h1'
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {isFr
                  ? 'Peinture résidentielle – Le Lever du Pinceau'
                  : 'Residential painting – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? 'La peinture résidentielle demande précision, propreté et maîtrise technique. Chez Le Lever du Pinceau, nous réalisons des projets pour maisons, condos, appartements, duplex, triplex et immeubles à Montréal, Laval, Longueuil et les environs.'
                  : 'Residential painting requires precision, cleanliness and technical mastery. At Le Lever du Pinceau, we carry out projects for houses, condos, apartments, duplexes, triplexes and buildings in Montreal, Laval, Longueuil and surrounding areas.'}
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
                mt={4}
                fontWeight='medium'
              >
                {isFr
                  ? '👉 Notre équipe de peintres professionnels s’occupe de tout : préparation des surfaces, protection des espaces, application uniforme et finition impeccable. Pour transformer votre intérieur ou rafraîchir l’extérieur de votre maison, vous êtes au bon endroit.'
                  : '👉 Our team of professional painters takes care of everything: surface preparation, space protection, uniform application and impeccable finish. To transform your interior or refresh the exterior of your home, you are in the right place.'}
              </Text>
            </Stack>

            {/* Images Section */}
            {images && images.length > 0 && (
              <Box mb={{ base: 12, md: 16 }}>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={4}
                  maxW='1200px'
                >
                  {images.map((img, index) => (
                    <Image
                      key={index}
                      src={img.src}
                      alt={img.alt}
                      borderRadius='lg'
                      w='100%'
                      h={{ base: '200px', md: '250px' }}
                      objectFit='cover'
                    />
                  ))}
                </SimpleGrid>
              </Box>
            )}

            {/* Section 1 — Pourquoi choisir notre service résidentiel */}
            <Box
              py={{ base: 12, md: 16 }}
              bg='gray.50'
              borderRadius='xl'
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='left'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Un résultat professionnel à chaque étape'
                        : 'A professional result at every step'}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                    >
                      {isFr
                        ? 'Nos peintres résidentiels vous garantissent :'
                        : 'Our residential painters guarantee you:'}
                    </Text>
                  </Stack>

                  <Stack spacing={3}>
                    {whyUsContent.map((item, index) => (
                      <Flex
                        key={index}
                        align='start'
                        gap={4}
                        p={4}
                        bg='white'
                        borderRadius='lg'
                        border='1px solid'
                        borderColor='gray.200'
                        _hover={{
                          borderColor: '#014CC4',
                          boxShadow: 'sm',
                          transform: 'translateX(4px)',
                        }}
                        transition='all 0.2s ease'
                      >
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={0.5}
                          flexShrink={0}
                        />
                        <Text
                          fontSize='md'
                          color='gray.700'
                          lineHeight='1.6'
                          fontWeight='500'
                          textAlign='left'
                        >
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                    mt={4}
                  >
                    {isFr
                      ? 'Nous intervenons sur tous types de propriétés : maisons unifamiliales, condos, plex et immeubles.'
                      : 'We work on all types of properties: single-family homes, condos, plex and buildings.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            {/* Section 2 — Sous-services : intérieur & extérieur */}
            <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='left'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Peinture résidentielle intérieure et extérieure'
                        : 'Interior and exterior residential painting'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 6, md: 8 }}
                    maxW='800px'
                  >
                    <Link
                      as={RouterLink}
                      to='/services/peinture-residentielle/interieure'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={6}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                        _hover={{
                          borderColor: '#014CC4',
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                        transition='all 0.2s'
                      >
                        <Stack spacing={3} flex={1}>
                          <Heading
                            as='h3'
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.800'
                          >
                            {isFr
                              ? 'Peinture résidentielle intérieure'
                              : 'Interior residential painting'}
                          </Heading>
                          <Text fontSize='md' color='gray.600' lineHeight='1.6'>
                            {isFr
                              ? 'Murs, plafonds, portes, boiseries, pièces complètes.'
                              : 'Walls, ceilings, doors, woodwork, complete rooms.'}
                          </Text>
                          <HStack spacing={2} color='#014CC4' mt='auto'>
                            <Text fontSize='sm' fontWeight='medium'>
                              {isFr ? 'Voir la page' : 'View page'}
                            </Text>
                            <ArrowForwardIcon boxSize={4} />
                          </HStack>
                        </Stack>
                      </Box>
                    </Link>

                    <Link
                      as={RouterLink}
                      to='/services/peinture-residentielle/exterieure'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={6}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                        _hover={{
                          borderColor: '#014CC4',
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                        transition='all 0.2s'
                      >
                        <Stack spacing={3} flex={1}>
                          <Heading
                            as='h3'
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.800'
                          >
                            {isFr
                              ? 'Peinture résidentielle extérieure'
                              : 'Exterior residential painting'}
                          </Heading>
                          <Text fontSize='md' color='gray.600' lineHeight='1.6'>
                            {isFr
                              ? 'Revêtement, brique, bois, aluminium, crépi, terrasses.'
                              : 'Coating, brick, wood, aluminum, stucco, terraces.'}
                          </Text>
                          <HStack spacing={2} color='#014CC4' mt='auto'>
                            <Text fontSize='sm' fontWeight='medium'>
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

            {/* Section 3 — Peinture résidentielle par ville */}
            <SectorsSection
              title={
                isFr
                  ? 'Disponible dans toutes les villes du Grand Montréal'
                  : 'Available in all Greater Montreal cities'
              }
              sectors={[
                {
                  name: 'Montréal',
                  link: '/services/peinture-residentielle/montreal',
                  image: montrealSecteur,
                },
                {
                  name: 'Laval',
                  link: '/services/peinture-residentielle/laval',
                  image: lavalSecteur,
                },
                {
                  name: 'Longueuil',
                  link: '/services/peinture-residentielle/longueuil',
                  image: longueuilSecteur,
                },
                {
                  name: 'Brossard',
                  link: '/services/peinture-residentielle/brossard',
                  image: brossardSecteur,
                },
              ]}
            />

            <ResourcesSection />

            {/* Section 5 — À propos de nos peintres professionnels */}
            <Box
              py={{ base: 12, md: 16 }}
              bg='gray.50'
              borderRadius='xl'
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6} textAlign='center' align='center'>
                  <Heading
                    as='h2'
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight='bold'
                    color='gray.800'
                  >
                    {isFr
                      ? 'Une équipe de peintres résidentiels qualifiés'
                      : 'A team of qualified residential painters'}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                  >
                    {isFr
                      ? 'Nos peintres professionnels réalisent des projets résidentiels depuis plus de 10 ans. Nous appliquons des méthodes modernes pour offrir une finition impeccable et durable.'
                      : 'Our professional painters have been carrying out residential projects for over 10 years. We apply modern methods to offer an impeccable and durable finish.'}
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
              </Container>
            </Box>
          </Stack>
        </Container>

        {/* Section 7 — CTA final */}
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
                    ? 'Obtenez votre soumission gratuite pour un projet résidentiel'
                    : 'Get your free quote for a residential project'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Nous pouvons commencer votre projet rapidement, peu importe la ville ou le type d’habitation.'
                    : 'We can start your project quickly, regardless of the city or type of housing.'}
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
