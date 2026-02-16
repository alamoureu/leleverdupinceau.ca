import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Grid,
  Link,
  Button,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import ServiceWhyUsSection from './components/ServiceWhyUsSection';
import ServiceSubServicesSection from './components/ServiceSubServicesSection';
import ResourcesSection from '../home-page/ResourcesSection';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../home-page/SectorsSection';
import ServiceCTASection from './components/ServiceCTASection';
import heroImage from '../images/hero/service-hero.png';
import interieurePhotoHeader from '../images/2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg';
import img5969 from '../images/2-services/Page peinture intérieure/1. réalisations/IMG_6032.PNG';
import img5970 from '../images/2-services/Page peinture intérieure/2. réalisations/IMG_6768.PNG';
import img5971 from '../images/2-services/Page peinture intérieure/3. réalisations/IMG_6762.PNG';
import img5972 from '../images/2-services/Page peinture intérieure/4. réalisations/IMG_6751.PNG';
import img5973 from '../images/2-services/Page peinture intérieure/5. réalisations/IMG_6754.PNG';
import img5974 from '../images/2-services/Page peinture intérieure/6. réalisations/IMG_5976.PNG';
import imgResInterieure from '../images/2-services/Page peinture résidentielle/Peinture résidentielle intérieure/IMG_6758.PNG';
import imgComInterieure from '../images/4-sous-services/commercial x intérieure/1. réalisations/IMG_6759.PNG';

export default function PeintureInterieurePage() {
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
        name: isFr ? 'Peinture intérieure' : 'Interior painting',
        item: 'https://leleverdupinceau.ca/services/peinture-interieure',
      },
    ],
  };

  const whyUsContent = isFr
    ? [
        'Une préparation soignée (réparations, joints, calfeutrage)',
        'Une protection complète des meubles, planchers et surfaces',
        'Une application uniforme sans traces ni démarcations',
        'Des conseils sur les couleurs, finis et produits',
        'Une équipe ponctuelle, propre et expérimentée',
        'Des produits adaptés : fini mat, perle, velours, semi-lustré, etc.',
      ]
    : [
        'Careful preparation (repairs, joints, caulking)',
        'Complete protection of furniture, floors and surfaces',
        'Uniform application without traces or demarcations',
        'Advice on colors, finishes and products',
        'A punctual, clean and experienced team',
        'Adapted products: matte, pearl, velvet, semi-gloss finish, etc.',
      ];

  const images = [
    { src: img5969, alt: isFr ? 'Peinture du nouveau mur agissant comme foyer en noir' : 'Painting of the new wall acting as a fireplace in black' },
    { src: img5970, alt: isFr ? 'Peinture de cette maison entière à Ville Mont Royal' : 'Painting of this entire house in Town of Mount Royal' },
    { src: img5971, alt: isFr ? 'Peinture après la rénovation de cette entrée de bureau médical' : 'Painting after the renovation of this medical office entrance' },
    { src: img5972, alt: isFr ? 'Peinture et rafraîchissement de ce petit local commercial à Verdun' : 'Painting and refresh of this small commercial space in Verdun' },
    { src: img5973, alt: isFr ? 'Peinture de l\'entièreté de cette maison à Westmount' : 'Painting of the entirety of this house in Westmount' },
    { src: img5974, alt: isFr ? 'Peinture entière des portes de cabinet de cette cuisine' : 'Complete painting of the cabinet doors of this kitchen' },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peinture intérieure – Le Lever du Pinceau | Services professionnels'
            : 'Interior painting – Le Lever du Pinceau | Professional services'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture intérieure professionnels à Montréal, Laval, Longueuil et Brossard. Peintres expérimentés, finitions impeccables, conseils personnalisés.'
              : 'Le Lever du Pinceau offers professional interior painting services in Montreal, Laval, Longueuil and Brossard. Experienced painters, impeccable finishes, personalized advice.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/services/peinture-interieure'
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
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
            >
              <Link
                as={RouterLink}
                to='/'
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
                {isFr ? 'Peinture intérieure' : 'Interior painting'}
              </Text>
            </HStack>
            <Stack spacing={4} textAlign='left'>
                <Heading
                  as='h1'
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight='bold'
                  color='gray.800'
                >
                  {isFr
                    ? 'Peinture intérieure – Le Lever du Pinceau'
                    : 'Interior painting – Le Lever du Pinceau'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  maxW='900px'
                >
                  {isFr
                    ? "La peinture intérieure transforme immédiatement l'apparence d'un espace, que ce soit pour rafraîchir une pièce, moderniser un condo, ou revoir entièrement le style de votre maison. Le Lever du Pinceau offre des services de peinture intérieure professionnels à Montréal, Laval, Longueuil et Brossard pour tous types de surfaces : murs, plafonds, escaliers, boiseries et plus."
                    : 'Interior painting immediately transforms the appearance of a space, whether to refresh a room, modernize a condo, or completely rethink the style of your home. Le Lever du Pinceau offers professional interior painting services in Montreal, Laval, Longueuil and Brossard for all types of surfaces: walls, ceilings, stairs, woodwork and more.'}
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
                    ? '👉 Nos peintres travaillent proprement, rapidement et avec un souci constant du détail. Pour un intérieur impeccable, durable et adapté à votre style, notre équipe est là pour vous accompagner.'
                    : '👉 Our painters work cleanly, quickly and with constant attention to detail. For an impeccable, durable interior adapted to your style, our team is here to support you.'}
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
                src={interieurePhotoHeader}
                alt={isFr ? 'Peinture intérieure – Le Lever du Pinceau' : 'Interior painting – Le Lever du Pinceau'}
                w='100%'
                h='100%'
                objectFit='cover'
                objectPosition='center'
              />
            </Box>
          </Grid>
          <Stack spacing={0}>

            {/* Section 1 — Pourquoi choisir notre service */}
            <ServiceWhyUsSection
              title={
                isFr
                  ? 'Finitions impeccables, techniques maîtrisées'
                  : 'Impeccable finishes, mastered techniques'
              }
              subtitle={
                isFr
                  ? 'Faire appel à nos peintres intérieurs vous assure :'
                  : 'Calling on our interior painters ensures you:'
              }
              content={whyUsContent}
              introText={
                isFr
                  ? 'Nous travaillons dans : maisons, condos, plex, appartements, escaliers, pièces de vie, cuisines, chambres, bureaux résidentiels.'
                  : 'We work in: houses, condos, plex, apartments, stairs, living rooms, kitchens, bedrooms, residential offices.'
              }
            />

            {/* Section 2 — Sous-services */}
            <ServiceSubServicesSection
              title={
                isFr
                  ? 'Peinture intérieure pour tous les types de projets'
                  : 'Interior painting for all types of projects'
              }
              subServices={[
                {
                  title: isFr
                    ? 'Peinture résidentielle intérieure'
                    : 'Residential interior painting',
                  description: isFr
                    ? 'Maisons, condos, appartements et résidences privées.'
                    : 'Houses, condos, apartments and private residences.',
                  link: '/services/peinture-residentielle/interieure',
                  image: imgResInterieure,
                },
                {
                  title: isFr
                    ? 'Peinture commerciale intérieure'
                    : 'Commercial interior painting',
                  description: isFr
                    ? 'Bureaux, commerces, restaurants et espaces commerciaux.'
                    : 'Offices, stores, restaurants and commercial spaces.',
                  link: '/services/peinture-commerciale/interieure',
                  image: imgComInterieure,
                },
              ]}
            />

            {/* Section 3 — Peinture intérieure par ville */}
            <SectorsSection
              title={
                isFr
                  ? 'Disponible dans tout le Grand Montréal'
                  : 'Available throughout Greater Montreal'
              }
              sectors={[
                {
                  name: 'Montréal',
                  link: '/services/peinture-interieure/montreal',
                  image: montrealSecteur,
                },
                {
                  name: 'Laval',
                  link: '/services/peinture-interieure/laval',
                  image: lavalSecteur,
                },
                {
                  name: 'Longueuil',
                  link: '/services/peinture-interieure/longueuil',
                  image: longueuilSecteur,
                },
                {
                  name: 'Brossard',
                  link: '/services/peinture-interieure/brossard',
                  image: brossardSecteur,
                },
              ]}
            />

            {/* Section 4 — Exemples de projets intérieurs */}
            {images && images.length > 0 && (
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
                          ? 'Quelques réalisations en peinture intérieure'
                          : 'Some interior painting achievements'}
                      </Heading>
                    </Stack>

                    <SimpleGrid
                      columns={{ base: 1, md: 2, lg: 3 }}
                      spacing={4}
                      maxW='1200px'
                    >
                      {images.map((img, index) => (
                        <Stack key={index} spacing={2}>
                          <Image
                            src={img.src}
                            alt={img.alt}
                            borderRadius='lg'
                            w='100%'
                            h={{ base: '200px', md: '250px' }}
                            objectFit='cover'
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
            )}

            {/* Section 5 — Guides & ressources */}
            <ResourcesSection
              title={
                isFr
                  ? 'Conseils utiles pour vos projets intérieurs'
                  : 'Useful tips for your interior projects'
              }
            />

            {/* Section 6 — À propos de nos peintres */}
            <Box
              py={{ base: 12, md: 16, lg: 20 }}
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
                      ? 'Une équipe spécialisée en peinture intérieure'
                      : 'A team specialized in interior painting'}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                  >
                    {isFr
                      ? 'Nos peintres professionnels réalisent des travaux intérieurs depuis plus de 10 ans, avec une maîtrise parfaite des produits, des techniques et des finitions haut de gamme.'
                      : 'Our professional painters have been doing interior work for over 10 years, with perfect mastery of products, techniques and high-end finishes.'}
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
                      fontSize={{ base: 'sm', md: 'md' }}
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
              </Container>
            </Box>
          </Stack>
        </Container>

        {/* Section 7 — CTA final */}
        <ServiceCTASection
          title={
            isFr
              ? 'Obtenez votre soumission gratuite pour un projet intérieur'
              : 'Get your free quote for an interior project'
          }
          description={
            isFr
              ? 'Nous offrons des services rapides, propres et adaptés aux besoins résidentiels, commerciaux ou industriels.'
              : 'We offer fast, clean services adapted to residential, commercial or industrial needs.'
          }
        />
      </Box>
    </Fragment>
  );
}
