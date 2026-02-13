import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  HStack,
  Image,
  Grid,
} from '@chakra-ui/react';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import CityServicesSection from '../city-pages/CityServicesSection';
import CityProjectsSection from '../city-pages/CityProjectsSection';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import CityCTASection from '../city-pages/CityCTASection';

import ResidentialProject from '../images/3-ville/brossard/résidentielle/IMG_6763.PNG';
import ExtProject from '../images/3-ville/brossard/extérieure/IMG_6778.PNG';
import CommercialProject from '../images/3-ville/brossard/commerciale/IMG_6759.PNG';
import img5969 from '../images/3-ville/brossard/1. réalisations/IMG_6761.PNG';
import img5970 from '../images/3-ville/brossard/2. réalisations/IMG_6768.PNG';
import img5971 from '../images/3-ville/brossard/3. réalisations/IMG_6777.PNG';
import img5972 from '../images/3-ville/brossard/intérieure/IMG_6764.PNG';
import img5973 from '../images/3-ville/brossard/industrielle/IMG_6752.PNG';
import img5974 from '../images/3-ville/brossard/résidentielle/IMG_6763.PNG';
import brossardPhotoHeader from '../images/3-ville/brossard/+Header/IMG_6784.PNG';

export default function BrossardCityPage() {
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
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Brossard',
        item: 'https://leleverdupinceau.ca/secteurs-desservis/brossard',
      },
    ],
  };

  const projectsContent = isFr
    ? [
      '• Maisons familiales dans les secteurs R, S et C',
      '• Condos modernes autour du Quartier DIX30',
      '• Projets commerciaux (restaurants, bureaux, commerces du DIX30)',
      '• Peinture de revêtements extérieurs pour de nouvelles constructions',
      '• Travaux industriels dans les zones techniques du secteur V',
    ]
    : [
      '• Family homes in sectors R, S and C',
      '• Modern condos around DIX30 Quarter',
      '• Commercial projects (restaurants, offices, DIX30 businesses)',
      '• Exterior coating painting for new constructions',
      '• Industrial work in technical areas of sector V',
    ];

  const projectImages = [ResidentialProject, ExtProject, CommercialProject, img5969, img5970, img5971, img5972, img5973, img5974];

  const whyUsIntroText = isFr
    ? 'Nos peintres sont régulièrement en intervention à Brossard et offrent :'
    : 'Our painters regularly work in Brossard and offer:';

  const whyUsContent = isFr
    ? [
      '• Un service rapide dans tous les secteurs alphabétiques',
      '• Une excellente maîtrise des types de constructions de Brossard',
      '• Des produits adaptés au climat québécois (UV, humidité, température)',
      '• Une approche propre, professionnelle et efficace',
      "• Une finition durable — autant intérieure qu'extérieure",
    ]
    : [
      '• Fast service in all alphabetical sectors',
      '• Excellent knowledge of Brossard construction types',
      '• Products adapted to Quebec climate (UV, humidity, temperature)',
      '• A clean, professional and efficient approach',
      '• Durable finish — both interior and exterior',
    ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintres à Brossard – Le Lever du Pinceau | Services de peinture résidentielle, commerciale et industrielle'
            : 'Painters in Brossard – Le Lever du Pinceau | Residential, commercial and industrial painting services'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services complets de peinture résidentielle, commerciale et industrielle à Brossard. Peintres professionnels dans les secteurs R, S, T, C, V et Quartier DIX30. Soumission gratuite.'
              : 'Le Lever du Pinceau offers complete residential, commercial and industrial painting services in Brossard. Professional painters in sectors R, S, T, C, V and DIX30 Quarter. Free quote.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/secteurs-desservis/brossard'
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
                  to='/secteurs-desservis'
                  _hover={{ textDecoration: 'underline' }}
                  color='gray.600'
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Secteurs desservis' : 'Service areas'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Text
                  color='gray.800'
                  fontWeight='medium'
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  Brossard
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
                    ? 'Peintres à Brossard – Le Lever du Pinceau'
                    : 'Painters in Brossard – Le Lever du Pinceau'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  maxW='900px'
                >
                  {isFr
                    ? 'Brossard est une ville en pleine croissance où résident de nombreuses familles, entreprises et complexes immobiliers. Le Lever du Pinceau offre des services complets de peinture résidentielle, commerciale et industrielle dans tous les secteurs de Brossard, incluant les quartiers R, S, T, C, V et les nouvelles zones de développement. Nos peintres professionnels réalisent des projets intérieurs et extérieurs avec précision, rapidité et une finition durable.'
                    : 'Brossard is a growing city where many families, businesses and residential complexes reside. Le Lever du Pinceau offers complete residential, commercial and industrial painting services in all sectors of Brossard, including neighborhoods R, S, T, C, V and new development areas. Our professional painters carry out interior and exterior projects with precision, speed and durable finish.'}
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  fontWeight='medium'
                  maxW='900px'
                >
                  {isFr
                    ? '👉 Que vous soyez dans un secteur résidentiel, près du Quartier DIX30 ou dans une zone commerciale, notre équipe peut se déplacer rapidement pour votre projet de peinture.'
                    : '👉 Whether you are in a residential sector, near DIX30 Quarter or in a commercial area, our team can quickly come to your location for your painting project.'}
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
                src={brossardPhotoHeader}
                alt={isFr ? 'Peintres à Brossard – Le Lever du Pinceau' : 'Painters in Brossard – Le Lever du Pinceau'}
                w='100%'
                h='100%'
                objectFit='cover'
                objectPosition='center'
              />
            </Box>
          </Grid>
          <Stack spacing={0}>

            <CityServicesSection cityName='Brossard' citySlug='brossard' />

            <CityProjectsSection
              cityName='Brossard'
              projectsContent={projectsContent}
              projectImages={projectImages}
            />

            <CityWhyUsSection
              cityName='Brossard'
              whyUsContent={whyUsContent}
              whyUsIntroText={whyUsIntroText}
            />

            <ResourcesSection />
          </Stack>
        </Container>

        <CityCTASection cityName='Brossard' />
      </Box>
    </Fragment>
  );
}
