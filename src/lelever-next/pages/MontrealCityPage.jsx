import React, { Fragment, useContext } from 'react';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  HStack,
} from '@chakra-ui/react';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import CityServicesSection from '../city-pages/CityServicesSection';
import CityProjectsSection from '../city-pages/CityProjectsSection';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import CityCTASection from '../city-pages/CityCTASection';

export default function MontrealCityPage() {
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
        name: 'Montréal',
        item: 'https://leleverdupinceau.ca/secteurs-desservis/montreal',
      },
    ],
  };

  const projectsContent = isFr
    ? [
        "• Peinture d'appartements et de condos au centre-ville et dans les quartiers résidentiels",
        '• Rafraîchissement de maisons unifamiliales dans plusieurs arrondissements',
        '• Projets commerciaux pour bureaux, commerces, restaurants et cliniques',
        '• Travaux dans des entrepôts, usines et bâtiments industriels',
      ]
    : [
        '• Apartment and condo painting in downtown and residential neighborhoods',
        '• Single-family home refresh in multiple boroughs',
        '• Commercial projects for offices, stores, restaurants and clinics',
        '• Work in warehouses, factories and industrial buildings',
      ];

  const whyUsIntroText = isFr
    ? "Choisir Le Lever du Pinceau pour vos projets à Montréal, c'est profiter de :"
    : 'Choosing Le Lever du Pinceau for your projects in Montreal means benefiting from:';

  const whyUsContent = isFr
    ? [
        '• Une équipe de peintres professionnels habitués aux bâtiments montréalais (plex, condos, immeubles anciens, etc.)',
        '• Des produits adaptés au climat québécois (froid, chaleur, humidité)',
        '• Une planification flexible selon votre réalité (résidentiel ou commercial)',
        "• Un service transparent, du devis jusqu'à la livraison finale",
      ]
    : [
        '• A team of professional painters familiar with Montreal buildings (plex, condos, old buildings, etc.)',
        '• Products adapted to Quebec climate (cold, heat, humidity)',
        '• Flexible planning according to your reality (residential or commercial)',
        '• Transparent service, from quote to final delivery',
      ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintres à Montréal – Le Lever du Pinceau | Services de peinture résidentielle, commerciale et industrielle'
            : 'Painters in Montreal – Le Lever du Pinceau | Residential, commercial and industrial painting services'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services complets de peinture résidentielle, commerciale et industrielle à Montréal. Peintres professionnels dans tous les arrondissements. Soumission gratuite.'
              : 'Le Lever du Pinceau offers complete residential, commercial and industrial painting services in Montreal. Professional painters in all boroughs. Free quote.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/secteurs-desservis/montreal'
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
            {/* Breadcrumb */}
            <HStack
              spacing={3}
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
            >
              <Link
                href='/new-home'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {isFr ? 'Accueil' : 'Home'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Link
                href='/secteurs-desservis'
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
                Montréal
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
                  ? 'Peintres à Montréal – Le Lever du Pinceau'
                  : 'Painters in Montreal – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? "Montréal est au cœur de nos activités de peinture résidentielle, commerciale et industrielle. Le Lever du Pinceau dessert de nombreux quartiers de l'île, des secteurs résidentiels calmes aux rues commerciales animées. Nos peintres professionnels interviennent dans les maisons, condos, commerces, bureaux, immeubles et bâtiments industriels partout à Montréal. Que vous soyez à Outremont, NDG, Plateau-Mont-Royal ou dans un autre quartier de Montréal, notre équipe peut se déplacer rapidement pour vos projets de peinture intérieure et extérieure."
                  : 'Montreal is at the heart of our residential, commercial and industrial painting activities. Le Lever du Pinceau serves many neighborhoods on the island, from quiet residential sectors to busy commercial streets. Our professional painters work in homes, condos, stores, offices, buildings and industrial facilities throughout Montreal. Whether you are in Outremont, NDG, Plateau-Mont-Royal or another neighborhood in Montreal, our team can quickly come to your location for your interior and exterior painting projects.'}
              </Text>
            </Stack>

            {/* Section 1 — Services de peinture */}
            <CityServicesSection cityName='Montréal' citySlug='montreal' />

            {/* Section 2 — Projets réalisés */}
            <CityProjectsSection
              cityName='Montréal'
              projectsContent={projectsContent}
            />

            {/* Section 3 — Pourquoi choisir Le Lever du Pinceau */}
            <CityWhyUsSection
              cityName='Montréal'
              whyUsContent={whyUsContent}
              whyUsIntroText={whyUsIntroText}
            />

            <ResourcesSection />
          </Stack>
        </Container>

        {/* Section 5 — CTA final - Full width */}
        <CityCTASection cityName='Montréal' />
      </Box>
    </Fragment>
  );
}
