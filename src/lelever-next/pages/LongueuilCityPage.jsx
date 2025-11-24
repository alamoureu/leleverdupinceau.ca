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
import CityServicesSection from '../home-page/city-pages/CityServicesSection';
import CityProjectsSection from '../home-page/city-pages/CityProjectsSection';
import CityWhyUsSection from '../home-page/city-pages/CityWhyUsSection';
import CityResourcesSection from '../home-page/city-pages/CityResourcesSection';
import CityCTASection from '../home-page/city-pages/CityCTASection';

export default function LongueuilCityPage() {
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
        name: 'Longueuil',
        item: 'https://leleverdupinceau.ca/secteurs-desservis/longueuil',
      },
    ],
  };

  const projectsContent = isFr
    ? [
        '• Peinture intérieure de maisons et condos',
        '• Rafraîchissement de revêtements extérieurs',
        '• Projets commerciaux pour bureaux, commerces et restaurants',
        '• Travaux dans des entrepôts et bâtiments industriels',
        '• Interventions dans des plex et immeubles locatifs',
      ]
    : [
        '• Interior painting of houses and condos',
        '• Exterior coating refresh',
        '• Commercial projects for offices, stores and restaurants',
        '• Work in warehouses and industrial buildings',
        '• Work in plex and rental buildings',
      ];

  const whyUsIntroText = isFr
    ? 'Nos peintres sont régulièrement en intervention dans Longueuil et comprennent parfaitement :'
    : 'Our painters regularly work in Longueuil and understand perfectly:';

  const whyUsContent = isFr
    ? [
        '• la typologie des propriétés locales (maisons, plex, condos)',
        '• les besoins des commerces de la Rive-Sud',
        "• les contraintes climatiques et d'entretien des bâtiments",
        '• les surfaces courantes du secteur',
        "• l'importance d'un travail propre, rapide et durable",
      ]
    : [
        '• the typology of local properties (houses, plex, condos)',
        '• the needs of South Shore businesses',
        '• climate constraints and building maintenance',
        '• common surfaces in the area',
        '• the importance of clean, fast and durable work',
      ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintres à Longueuil – Le Lever du Pinceau | Services de peinture résidentielle, commerciale et industrielle'
            : 'Painters in Longueuil – Le Lever du Pinceau | Residential, commercial and industrial painting services'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services complets de peinture résidentielle, commerciale et industrielle à Longueuil. Peintres professionnels dans tous les secteurs. Soumission gratuite.'
              : 'Le Lever du Pinceau offers complete residential, commercial and industrial painting services in Longueuil. Professional painters in all sectors. Free quote.'
          }
        />
        <meta name='robots' content='noindex, nofollow' />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/secteurs-desservis/longueuil'
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
                Longueuil
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
                  ? 'Peintres à Longueuil – Le Lever du Pinceau'
                  : 'Painters in Longueuil – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? "Longueuil fait partie des principales villes que nous desservons pour des projets résidentiels, commerciaux et industriels. Le Lever du Pinceau intervient dans l'ensemble des secteurs de Longueuil, incluant Saint-Hubert, Le Vieux-Longueuil, Greenfield Park et plusieurs autres zones. Nos peintres professionnels réalisent des travaux de peinture intérieure et extérieure pour maisons, condos, commerces, bureaux et bâtiments industriels. Où que vous soyez à Longueuil, notre équipe se déplace rapidement pour offrir un service professionnel, propre et durable."
                  : 'Longueuil is one of the main cities we serve for residential, commercial and industrial projects. Le Lever du Pinceau works throughout all sectors of Longueuil, including Saint-Hubert, Le Vieux-Longueuil, Greenfield Park and several other areas. Our professional painters perform interior and exterior painting work for homes, condos, stores, offices and industrial buildings. Wherever you are in Longueuil, our team quickly travels to provide professional, clean and durable service.'}
              </Text>
            </Stack>

            {/* Section 1 — Services de peinture */}
            <CityServicesSection cityName='Longueuil' citySlug='longueuil' />

            {/* Section 2 — Projets réalisés */}
            <CityProjectsSection
              cityName='Longueuil'
              projectsContent={projectsContent}
            />

            {/* Section 3 — Pourquoi choisir Le Lever du Pinceau */}
            <CityWhyUsSection
              cityName='Longueuil'
              whyUsContent={whyUsContent}
              whyUsIntroText={whyUsIntroText}
            />

            {/* Section 4 — Guides & ressources utiles */}
            <CityResourcesSection cityName='Longueuil' />

            <ResourcesSection />
          </Stack>
        </Container>

        {/* Section 5 — CTA final - Full width */}
        <CityCTASection cityName='Longueuil' />
      </Box>
    </Fragment>
  );
}
