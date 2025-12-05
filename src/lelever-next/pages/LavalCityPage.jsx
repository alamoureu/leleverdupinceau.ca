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
import CityResourcesSection from '../city-pages/CityResourcesSection';
import CityCTASection from '../city-pages/CityCTASection';

export default function LavalCityPage() {
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
        name: 'Laval',
        item: 'https://leleverdupinceau.ca/secteurs-desservis/laval',
      },
    ],
  };

  const projectsContent = isFr
    ? [
        '• Peinture intérieure complète de maisons et condos',
        '• Rafraîchissement de façades et revêtements extérieurs',
        '• Projets commerciaux : bureaux, commerces, restaurants, cliniques',
        "• Peinture d'entrepôts et bâtiments industriels",
        '• Travaux dans des plex et immeubles locatifs',
      ]
    : [
        '• Complete interior painting of houses and condos',
        '• Facade refresh and exterior coatings',
        '• Commercial projects: offices, stores, restaurants, clinics',
        '• Warehouse and industrial building painting',
        '• Work in plex and rental buildings',
      ];

  const whyUsContent = isFr
    ? [
        '• Intervention rapide dans tous les quartiers lavallois',
        '• Connaissance des matériaux et types de bâtiments locaux',
        '• Produits adaptés au climat québécois',
        '• Travail propre, professionnel et garanti',
        '• Service client transparent du devis à la livraison',
      ]
    : [
        '• Quick intervention in all Laval neighborhoods',
        '• Knowledge of local materials and building types',
        '• Products adapted to Quebec climate',
        '• Clean, professional and guaranteed work',
        '• Transparent customer service from quote to delivery',
      ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintres à Laval – Le Lever du Pinceau | Services de peinture résidentielle, commerciale et industrielle'
            : 'Painters in Laval – Le Lever du Pinceau | Residential, commercial and industrial painting services'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services complets de peinture résidentielle, commerciale et industrielle à Laval. Peintres professionnels dans tous les secteurs. Soumission gratuite.'
              : 'Le Lever du Pinceau offers complete residential, commercial and industrial painting services in Laval. Professional painters in all sectors. Free quote.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/secteurs-desservis/laval'
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
                Laval
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
                  ? 'Peintres à Laval – Le Lever du Pinceau'
                  : 'Painters in Laval – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? "Laval est l'une des villes où nous effectuons le plus de projets résidentiels, commerciaux et industriels. Le Lever du Pinceau dessert l'ensemble des quartiers de Laval : maisons unifamiliales, condos, plex, commerces, bureaux, immeubles et zones industrielles, incluant Chomedey, Sainte-Dorothée, Laval-des-Rapides, Fabreville et plus. Nos peintres professionnels interviennent pour des projets intérieurs et extérieurs, avec une finition durable et de haute qualité. Que vous soyez dans un secteur résidentiel ou commercial, notre équipe se déplace rapidement pour vos travaux de peinture à Laval."
                  : 'Laval is one of the cities where we carry out the most residential, commercial and industrial projects. Le Lever du Pinceau serves all neighborhoods in Laval: single-family homes, condos, plex, stores, offices, buildings and industrial areas, including Chomedey, Sainte-Dorothée, Laval-des-Rapides, Fabreville and more. Our professional painters work on interior and exterior projects, with durable and high-quality finishes. Whether you are in a residential or commercial sector, our team can quickly come to your location for your painting work in Laval.'}
              </Text>
            </Stack>

            {/* Section 1 — Services de peinture */}
            <CityServicesSection cityName='Laval' citySlug='laval' />

            {/* Section 2 — Projets réalisés */}
            <CityProjectsSection
              cityName='Laval'
              projectsContent={projectsContent}
            />

            {/* Section 3 — Pourquoi choisir Le Lever du Pinceau */}
            <CityWhyUsSection cityName='Laval' whyUsContent={whyUsContent} />

            {/* Section 4 — Guides & ressources utiles */}
            <CityResourcesSection cityName='Laval' />

            <ResourcesSection />
          </Stack>
        </Container>

        {/* Section 5 — CTA final - Full width */}
        <CityCTASection cityName='Laval' />
      </Box>
    </Fragment>
  );
}
