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
} from '@chakra-ui/react';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import CityServicesSection from '../city-pages/CityServicesSection';
import CityProjectsSection from '../city-pages/CityProjectsSection';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import CityCTASection from '../city-pages/CityCTASection';


import ResidentialProject from '../images/3-ville/Montréal/résidentielle/IMG_6763.PNG';
import ExtProject from '../images/3-ville/Montréal/extérieure/IMG_6778.PNG';
import CommercialProject from '../images/3-ville/Montréal/commerciale/IMG_6760.PNG';
import img5969 from '../images/3-ville/Montréal/1. réalisations/IMG_6767.PNG';
import img5970 from '../images/3-ville/Montréal/2. réalisations/IMG_6760.PNG';
import img5971 from '../images/3-ville/Montréal/3. réalisations/IMG_6759.PNG';
import img5972 from '../images/3-ville/Montréal/4. réalisations/IMG_6756.PNG';
import img5973 from '../images/3-ville/Montréal/5. réalisations/IMG_5877.JPG';
import img5974 from '../images/3-ville/Montréal/6. réalisations/IMG_6779.PNG';

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

  const projectImages = [ResidentialProject, ExtProject, CommercialProject, img5969, img5970, img5971, img5972, img5973, img5974];

  const serviceDescriptions = isFr ? {
    residential: 'Service complet de peinture pour maisons unifamiliales, condos, plex et appartements à Montréal. Finitions soignées.',
    commercial: 'Solutions et forfaits de peinture pour bureaux, commerces, boutiques et restaurants. Travail rapide.',
    industrial: "Peinture d'entrepôts, usines et structures industrielles. Protection durable et revêtements spécialisés.",
    interior: 'Rafraîchissement de murs, plafonds, boiseries et portes. Protection des meubles et nettoyage inclus.',
    exterior: 'Peinture et entretien de façades, balcons, corniches, briques et revêtements extérieurs.'
  } : {
    residential: 'Complete painting service for single-family homes, condos, plex and apartments in Montreal. Careful finishes.',
    commercial: 'Painting solutions and packages for offices, stores, shops and restaurants. Fast work.',
    industrial: 'Painting of warehouses, factories and industrial structures. Durable protection and specialized coatings.',
    interior: 'Refreshing walls, ceilings, woodwork and doors. Furniture protection and cleaning included.',
    exterior: 'Painting and maintenance of facades, balconies, cornices, bricks and exterior siding.'
  };

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

              <Box>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  mb={4}
                  maxW='900px'
                >
                  {isFr
                    ? "Montréal est au cœur de nos activités de peinture résidentielle, commerciale et industrielle. Le Lever du Pinceau dessert de nombreux quartiers de l'île, des secteurs résidentiels calmes aux rues commerciales animées. Nos peintres professionnels interviennent dans les maisons, condos, commerces, bureaux, immeubles et bâtiments industriels partout à Montréal."
                    : 'Montreal is at the heart of our residential, commercial and industrial painting activities. Le Lever du Pinceau serves many neighborhoods on the island, from quiet residential sectors to busy commercial streets. Our professional painters work in homes, condos, stores, offices, buildings and industrial facilities throughout Montreal.'}
                </Text>

                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  fontWeight='medium'
                  maxW='900px'
                >
                  {isFr
                    ? '👉 Que vous soyez à Outremont, NDG, Plateau-Mont-Royal ou dans un autre quartier de Montréal, notre équipe peut se déplacer rapidement pour vos projets de peinture intérieure et extérieure.'
                    : '👉 Whether you are in Outremont, NDG, Plateau-Mont-Royal or another neighborhood in Montreal, our team can quickly come to your location for your interior and exterior painting projects.'}
                </Text>
              </Box>
            </Stack>

            {/* Section 1 — Services de peinture */}
            <CityServicesSection
              cityName='Montréal'
              citySlug='montreal'
              serviceDescriptions={serviceDescriptions}
            />

            {/* Section 2 — Projets réalisés */}
            <CityProjectsSection
              cityName='Montréal'
              projectsContent={projectsContent}
              projectImages={projectImages}
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
