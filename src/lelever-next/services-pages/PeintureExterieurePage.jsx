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

export default function PeintureExterieurePage() {
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
        name: isFr ? 'Peinture extérieure' : 'Exterior painting',
        item: 'https://leleverdupinceau.ca/services/new-peinture-exterieure',
      },
    ],
  };

  const whyUsContent = isFr
    ? [
        'Nettoyage, préparation et réparation des surfaces',
        'Décapage ou sablage selon le type de revêtement',
        'Protection complète des fenêtres, portes et végétation',
        'Application uniforme et durable',
        'Produits spécialisés : bois, aluminium, brique, crépi, vinyle',
        'Finition résistante aux intempéries et aux UV',
      ]
    : [
        'Cleaning, preparation and surface repair',
        'Stripping or sandblasting depending on coating type',
        'Complete protection of windows, doors and vegetation',
        'Uniform and durable application',
        'Specialized products: wood, aluminum, brick, stucco, vinyl',
        'Finish resistant to weather and UV',
      ];

  const metaDescription = isFr
    ? 'Le Lever du Pinceau offre des services de peinture extérieure pour maisons, commerces et bâtiments industriels dans le Grand Montréal. Produits résistants aux intempéries, protection durable, finition professionnelle.'
    : 'Le Lever du Pinceau offers exterior painting services for homes, businesses and industrial buildings in Greater Montreal. Weather-resistant products, durable protection, professional finish.';

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peinture extérieure – Le Lever du Pinceau | Protection et rénovation de façades'
            : 'Exterior painting – Le Lever du Pinceau | Facade protection and renovation'}
        </title>
        <meta name='description' content={metaDescription} />
        <meta name='robots' content='noindex, nofollow' />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/services/new-peinture-exterieure'
        />
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
                {isFr ? 'Peinture extérieure' : 'Exterior painting'}
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
                  ? 'Peinture extérieure – Le Lever du Pinceau'
                  : 'Exterior painting – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? 'La peinture extérieure protège votre propriété contre les intempéries, rehausse son apparence et augmente sa valeur. Le Lever du Pinceau réalise des projets de peinture extérieure pour maisons, plex, condos, immeubles résidentiels, commerces et bâtiments industriels dans tout le Grand Montréal.'
                  : 'Exterior painting protects your property against the elements, enhances its appearance and increases its value. Le Lever du Pinceau carries out exterior painting projects for houses, plex, condos, residential buildings, businesses and industrial buildings throughout Greater Montreal.'}
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
                mt={2}
                fontWeight='medium'
              >
                {isFr
                  ? "👉 Nos peintres professionnels utilisent des produits haut de gamme, résistants aux UV, à l'humidité, aux variations de température et au climat québécois. Pour rafraîchir votre façade, moderniser une structure extérieure ou protéger un revêtement, notre équipe est prête à intervenir."
                  : '👉 Our professional painters use high-end products, resistant to UV, humidity, temperature variations and Quebec climate. To refresh your facade, modernize an exterior structure or protect a coating, our team is ready to intervene.'}
              </Text>
            </Stack>

            {/* Section 1 — Pourquoi choisir notre service */}
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
                        ? 'Protection, durabilité et esthétique'
                        : 'Protection, durability and aesthetics'}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                    >
                      {isFr
                        ? 'Nos services extérieurs incluent :'
                        : 'Our exterior services include:'}
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
                      ? 'Nous travaillons sur : maisons unifamiliales, plex, condos, façades de commerces, structures métalliques, clôtures, terrasses et plus.'
                      : 'We work on: single-family homes, plex, condos, commercial facades, metal structures, fences, terraces and more.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            {/* Section 2 — Sous-services */}
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
                        ? 'Peinture extérieure pour tous les types de bâtiments'
                        : 'Exterior painting for all types of buildings'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 6, md: 8 }}
                    maxW='1000px'
                  >
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
                              : 'Residential exterior painting'}
                          </Heading>
                          <Text fontSize='md' color='gray.600' lineHeight='1.6'>
                            {isFr
                              ? 'Façades, revêtements, brique, bois, terrasses résidentielles.'
                              : 'Facades, coatings, brick, wood, residential terraces.'}
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
                      to='/services/peinture-commerciale/exterieure'
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
                              ? 'Peinture commerciale extérieure'
                              : 'Commercial exterior painting'}
                          </Heading>
                          <Text fontSize='md' color='gray.600' lineHeight='1.6'>
                            {isFr
                              ? 'Façades, entrées commerciales, structures extérieures, enseignes.'
                              : 'Facades, commercial entrances, exterior structures, signs.'}
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

            {/* Section 3 — Peinture extérieure par ville */}
            <SectorsSection
              title={
                isFr
                  ? 'Disponible dans tout le Grand Montréal'
                  : 'Available throughout Greater Montreal'
              }
              sectors={[
                {
                  name: 'Montréal',
                  link: '/services/new-peinture-exterieure/montreal',
                  image: montrealSecteur,
                },
                {
                  name: 'Laval',
                  link: '/services/new-peinture-exterieure/laval',
                  image: lavalSecteur,
                },
                {
                  name: 'Longueuil',
                  link: '/services/new-peinture-exterieure/longueuil',
                  image: longueuilSecteur,
                },
                {
                  name: 'Brossard',
                  link: '/services/new-peinture-exterieure/brossard',
                  image: brossardSecteur,
                },
              ]}
            />

            {/* Section 4 — Exemples de projets extérieurs */}
            <Box mt={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6}>
                  <Stack spacing={3} textAlign='left'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Quelques réalisations en peinture extérieure'
                        : 'Some exterior painting achievements'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={4}
                    maxW='1200px'
                  >
                    {[
                      {
                        src: img5969,
                        alt: isFr
                          ? 'Peinture extérieure Montréal 1'
                          : 'Exterior painting Montreal 1',
                      },
                      {
                        src: img5970,
                        alt: isFr
                          ? 'Peinture extérieure Montréal 2'
                          : 'Exterior painting Montreal 2',
                      },
                      {
                        src: img5971,
                        alt: isFr
                          ? 'Peinture extérieure Montréal 3'
                          : 'Exterior painting Montreal 3',
                      },
                      {
                        src: img5972,
                        alt: isFr
                          ? 'Peinture extérieure Montréal 4'
                          : 'Exterior painting Montreal 4',
                      },
                      {
                        src: img5973,
                        alt: isFr
                          ? 'Peinture extérieure Montréal 5'
                          : 'Exterior painting Montreal 5',
                      },
                      {
                        src: img5974,
                        alt: isFr
                          ? 'Peinture extérieure Montréal 6'
                          : 'Exterior painting Montreal 6',
                      },
                    ].map((img, index) => (
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

                  <Stack spacing={2} mt={4}>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.700'
                      fontWeight='medium'
                    >
                      {isFr ? 'Projets typiques :' : 'Typical projects:'}
                    </Text>
                    <Stack spacing={1} pl={4}>
                      {isFr ? (
                        <>
                          <Text fontSize='md' color='gray.600'>
                            • Rafraîchissement de façade résidentielle
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Peinture de revêtement aluminium
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Protection de structures extérieures
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Mise à jour de commerces ou entrées commerciales
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Peinture de terrasses et clôtures
                          </Text>
                        </>
                      ) : (
                        <>
                          <Text fontSize='md' color='gray.600'>
                            • Residential facade refresh
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Aluminum siding painting
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Exterior structure protection
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Commercial store or entrance update
                          </Text>
                          <Text fontSize='md' color='gray.600'>
                            • Terrace and fence painting
                          </Text>
                        </>
                      )}
                    </Stack>
                  </Stack>
                </Stack>
              </Container>
            </Box>

            {/* Section 5 — Guides & ressources */}
            <ResourcesSection
              title={
                isFr
                  ? 'Conseils pour vos projets extérieurs'
                  : 'Tips for your exterior projects'
              }
            />

            {/* Section 6 — À propos de nos peintres professionnels */}
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
                      ? 'Une équipe spécialisée en travaux extérieurs'
                      : 'A team specialized in exterior work'}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                    maxW='800px'
                    mx='auto'
                  >
                    {isFr
                      ? 'Nos peintres professionnels sont formés pour travailler en hauteur, sur divers types de revêtements et dans des environnements extérieurs exigeants.'
                      : 'Our professional painters are trained to work at height, on various types of coatings and in demanding exterior environments.'}
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
                    ? 'Obtenez votre soumission gratuite pour un projet extérieur'
                    : 'Get your free quote for an exterior project'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Nous offrons un service complet, rapide et durable, parfait pour les projets résidentiels, commerciaux ou industriels.'
                    : 'We offer a complete, fast and durable service, perfect for residential, commercial or industrial projects.'}
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
