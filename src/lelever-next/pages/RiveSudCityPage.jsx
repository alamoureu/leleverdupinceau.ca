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
  SimpleGrid,
  Flex,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import TrustBanner from '../home-page/TrustBanner';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import CityCTASection from '../city-pages/CityCTASection';

import headerRiveSud from '../images/3-ville/rive-sud/header (1).JPEG';
// Avant/apres Rive-Sud - paires identifiees
import rsImg5973 from '../images/3-ville/rive-sud/avant-apres/IMG_5973 6.jpg';
import rsImg5974 from '../images/3-ville/rive-sud/avant-apres/IMG_5974 6.jpg';
import rsImg7974 from '../images/3-ville/rive-sud/avant-apres/IMG_7974 4.jpg';
import rsImg7975 from '../images/3-ville/rive-sud/avant-apres/IMG_7975 4.jpg';
import rsImg7988 from '../images/3-ville/rive-sud/avant-apres/IMG_7988 5.jpg';
import rsImg7990 from '../images/3-ville/rive-sud/avant-apres/IMG_7990 5.jpg';
import rsImg7992 from '../images/3-ville/rive-sud/avant-apres/IMG_7992 7.jpg';
import rsImg7994 from '../images/3-ville/rive-sud/avant-apres/IMG_7994 7.jpg';
import rsImg7997 from '../images/3-ville/rive-sud/avant-apres/IMG_7997 8.jpg';
import rsImg7999 from '../images/3-ville/rive-sud/avant-apres/IMG_7999 8.jpg';

export default function RiveSudCityPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Schema markup

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: 'https://www.leleverdupinceau.ca/' },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Secteurs desservis' : 'Service areas', item: 'https://www.leleverdupinceau.ca/secteurs' },
      { '@type': 'ListItem', position: 3, name: 'Rive-Sud', item: 'https://www.leleverdupinceau.ca/secteurs/rive-sud' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau - Rive-Sud',
    url: 'https://www.leleverdupinceau.ca/secteurs/rive-sud',
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Rive-Sud' },
      { '@type': 'City', name: 'Longueuil' },
      { '@type': 'City', name: 'Saint-Lambert' },
      { '@type': 'City', name: 'Boucherville' },
      { '@type': 'Neighborhood', name: 'Greenfield Park' },
      { '@type': 'City', name: 'Saint-Bruno' },
    ],
  };

  // Section 3 - Checkmarks

  const checkmarks = isFr ? [
    "Habitués aux maisons, condos et projets familiaux de la Rive-Sud - Une grande partie des projets concerne des propriétés occupées, des condos récents ou des remises à niveau avant vente ou emménagement.",
    "Coordination simple d'une municipalité à l'autre - Accès, stationnement, circulation du matériel et séquence du chantier sont planifiés pour garder une exécution fluide partout sur la Rive-Sud.",
    "Échéancier clair pour les moments sensibles - Avant mise en marché, avant déménagement, entre deux occupations ou pendant un horaire familial serré.",
    "Protection complète des espaces habités - Dans une maison ou un condo occupé, les protections, la propreté et le nettoyage quotidien comptent autant que le résultat visuel.",
    "Communication simple du début à la fin - Le client sait quoi attendre, ce qui est inclus et comment le chantier va se dérouler, peu importe la ville desservie.",
    "Connaissance des contextes locaux de la Rive-Sud - Longueuil, Saint-Lambert, Boucherville, Greenfield Park, Saint-Bruno ou d'autres secteurs voisins : les contextes changent, l'approche s'adapte.",
  ] : [
    "Experienced with homes, condos and family projects on the South Shore - Most projects involve occupied properties, newer condos or updates before a sale or move-in.",
    "Simple coordination from one municipality to the next - Access, parking, material flow and site sequencing are planned to keep execution smooth across the entire South Shore.",
    "Clear schedule for sensitive moments - Before listing, before moving, between occupations or during a tight family schedule.",
    "Full protection of occupied spaces - In an occupied home or condo, protections, cleanliness and daily cleanup matter as much as the visual result.",
    "Simple communication from start to finish - The client knows what to expect, what is included and how the site will run, regardless of the city being served.",
    "Knowledge of South Shore local contexts - Longueuil, Saint-Lambert, Boucherville, Greenfield Park, Saint-Bruno and neighbouring areas: the context changes, the approach adapts.",
  ];

  // Section 4 - Contextes Rive-Sud

  const contexts = isFr ? [
    {
      number: '01',
      title: 'Maison familiale occupée',
      description: 'Projet à planifier pièce par pièce, avec protections, rythme de chantier clair et souci du quotidien familial.',
    },
    {
      number: '02',
      title: 'Condo ou unité en copropriété',
      description: "Accès, ascenseur, espaces communs, circulation et propreté prennent plus d'importance dans les immeubles récents de la région.",
    },
    {
      number: '03',
      title: 'Rafraîchissement avant vente',
      description: 'Une peinture propre et neutre aide à présenter une propriété plus lumineuse, plus soignée et plus facile à projeter pour un acheteur.',
    },
    {
      number: '04',
      title: 'Projet avant emménagement',
      description: 'Le meilleur moment pour peindre vite et efficacement, sans contourner le mobilier ni compliquer la logistique.',
    },
    {
      number: '05',
      title: 'Remise à niveau entre deux occupants',
      description: 'Appartement, logement ou unité en transition : il faut aller vite, proprement et avec un scope bien cadré.',
    },
  ] : [
    {
      number: '01',
      title: 'Occupied family home',
      description: 'Project to plan room by room, with protections, clear site rhythm and attention to daily family life.',
    },
    {
      number: '02',
      title: 'Condo or co-ownership unit',
      description: 'Access, elevator, common areas, circulation and cleanliness take on more importance in newer buildings in the region.',
    },
    {
      number: '03',
      title: 'Pre-sale refresh',
      description: 'Clean, neutral paint helps present a brighter, more polished property that buyers can more easily envision.',
    },
    {
      number: '04',
      title: 'Pre-move-in project',
      description: 'The best time to paint quickly and efficiently, without working around furniture or complicating logistics.',
    },
    {
      number: '05',
      title: 'Turnover between occupants',
      description: 'Apartment, unit or rental in transition: we move fast, cleanly and with a well-defined scope.',
    },
  ];

  // Section 5 - Avant/apres Rive-Sud

  const riveSudBeforeAfterPairs = [
    {
      before: rsImg5973,
      after: rsImg5974,
      description: isFr ? 'Peinture intérieure - Maison à Boucherville' : 'Interior painting - House in Boucherville',
    },
    {
      before: rsImg7992,
      after: rsImg7994,
      description: isFr ? 'Rafraîchissement complet - Condo à Saint-Lambert' : 'Full refresh - Condo in Saint-Lambert',
    },
    {
      before: rsImg7990,
      after: rsImg7988,
      description: isFr ? 'Peinture résidentielle - Maison à Saint-Bruno' : 'Residential painting - House in Saint-Bruno',
    },
    {
      before: rsImg7999,
      after: rsImg7997,
      description: isFr ? 'Mise à niveau avant vente - Propriété à Greenfield Park' : 'Pre-sale update - Property in Greenfield Park',
    },
    {
      before: rsImg7975,
      after: rsImg7974,
      description: isFr ? 'Peinture extérieure - Rampe métallique repeinte sur la Rive-Sud' : 'Exterior painting - Metal railing repainted on the South Shore',
    },
  ];

  // Section 6 - Pourquoi nous choisir

  const whyUsCards = isFr ? [
    {
      number: '01',
      title: 'Organisation claire',
      description: 'Soumission détaillée, plan de match, échéancier précis et séquence des travaux communiquée avant le début du chantier.',
    },
    {
      number: '02',
      title: 'Chantier propre',
      description: 'Protections en place, respect des lieux, nettoyage quotidien du chantier. Votre espace reste habitable pendant les travaux.',
    },
    {
      number: '03',
      title: 'Résultat durable',
      description: 'Préparation sérieuse des surfaces, produits adaptés à chaque contexte, finition nette et uniforme de la première à la dernière couche.',
    },
  ] : [
    {
      number: '01',
      title: 'Clear organization',
      description: 'Detailed quote, game plan, precise schedule and work sequence communicated before the start of the job.',
    },
    {
      number: '02',
      title: 'Clean job site',
      description: 'Protections in place, respect for the space, daily site cleanup. Your home stays livable during the work.',
    },
    {
      number: '03',
      title: 'Lasting result',
      description: 'Thorough surface preparation, products adapted to each context, clean and uniform finish from first to last coat.',
    },
  ];

  // Section 7 - FAQ Rive-Sud

  const riveSudFaqs = [
    {
      question: isFr ? 'Est-ce que vous desservez toute la Rive-Sud?' : 'Do you serve the entire South Shore?',
      answer: isFr
        ? "Oui. Nous desservons la Rive-Sud et plusieurs secteurs clés de la région. Selon le type de projet, nous pouvons aussi vous orienter vers notre page Longueuil si votre besoin est très localisé."
        : 'Yes. We serve the South Shore and several key areas in the region. Depending on the type of project, we can also direct you to our Longueuil page if your need is very localized.',
    },
    {
      question: isFr ? 'Faites-vous aussi des projets à Longueuil?' : 'Do you also work on projects in Longueuil?',
      answer: isFr
        ? "Oui. Longueuil fait partie de la Rive-Sud, mais nous avons aussi une page spécifique pour les visiteurs qui cherchent un contenu plus localisé à cette ville."
        : 'Yes. Longueuil is part of the South Shore, but we also have a dedicated page for visitors looking for content more specific to that city.',
    },
    {
      question: isFr ? 'Faites-vous des projets dans des maisons occupées?' : 'Do you work in occupied homes?',
      answer: isFr
        ? "Oui. Une grande partie de nos projets sur la Rive-Sud se font dans des maisons ou condos habités. Nous planifions les protections, la séquence des pièces et le nettoyage pour limiter les impacts au quotidien."
        : 'Yes. A large portion of our South Shore projects take place in occupied homes or condos. We plan protections, room sequencing and cleanup to minimize daily disruptions.',
    },
    {
      question: isFr ? 'Faites-vous aussi les condos et copropriétés sur la Rive-Sud?' : 'Do you also work on condos and co-ownerships on the South Shore?',
      answer: isFr
        ? "Oui. Nous adaptons le chantier aux règles de l'immeuble, aux accès, aux ascenseurs et à la circulation du matériel pour garder le projet simple et propre."
        : 'Yes. We adapt our operations to building rules, access points, elevators and material flow to keep the project simple and clean.',
    },
    {
      question: isFr ? 'Peut-on obtenir une soumission rapidement?' : 'Can we get a quote quickly?',
      answer: isFr
        ? "Oui. Nous répondons rapidement et pouvons vous guider vers la bonne page service ou vers la bonne page locale selon votre secteur et votre projet. Dans la majorité des cas, nous répondons en moins de 24 heures."
        : 'Yes. We respond quickly and can guide you to the right service page or local page based on your area and project. In most cases, we respond within 24 hours.',
    },
  ];

  // Schema FAQPage

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: riveSudFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Section 8 - Liens internes

  const internalLinks = isFr ? [
    { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
    { label: 'Peinture intérieure', to: '/services/peinture-interieure' },
    { label: 'Peinture extérieure', to: '/services/peinture-exterieure' },
    { label: 'Peinture commerciale', to: '/services/peinture-commerciale' },
    { label: 'Peintre à Longueuil', to: '/secteurs/longueuil' },
    { label: 'Obtenir une soumission', to: '/contact' },
    { label: 'Pourquoi choisir un peintre professionnel', to: '/peintre-professionnel' },
    { label: 'Voir nos réalisations', to: '/realisations' },
  ] : [
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Interior painting', to: '/services/peinture-interieure' },
    { label: 'Exterior painting', to: '/services/peinture-exterieure' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Painter in Longueuil', to: '/secteurs/longueuil' },
    { label: 'Get a quote', to: '/contact' },
    { label: 'Why choose a professional painter', to: '/peintre-professionnel' },
    { label: 'Client reviews', to: '/avis-clients' },
  ];

  // Render

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintre sur la Rive-Sud | Résidentiel et commercial | Le Lever du Pinceau'
            : 'Painter on the South Shore | Residential and commercial | Le Lever du Pinceau'}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture sur la Rive-Sud pour maisons, condos et commerces. Peintres professionnels licenciés RBQ. Soumission gratuite.'
              : 'Le Lever du Pinceau offers painting services on the South Shore for homes, condos and businesses. Licensed RBQ professional painters. Free quote.'
          }
        />
        <link rel="canonical" href="https://www.leleverdupinceau.ca/secteurs/rive-sud" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">

        {/* SECTION 1 - Hero Banner */}
        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 12, md: 16, lg: 20 }}>
          <Grid
            templateColumns={{ base: '1fr', md: '6fr 4fr' }}
            gap={{ base: 6, md: 8, lg: 10 }}
            mb={{ base: 16, md: 20 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              {/* Breadcrumb */}
              <HStack
                spacing={3}
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.600"
                mb={{ base: 4, md: 6 }}
                flexWrap="wrap"
              >
                <Link
                  as={RouterLink}
                  to="/"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.600"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Link
                  as={RouterLink}
                  to="/secteurs"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.600"
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Secteurs desservis' : 'Service areas'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Text color="gray.800" fontWeight="medium" fontSize={{ base: 'md', md: 'lg' }}>Rive-Sud</Text>
              </HStack>

              <Stack spacing={5} textAlign="left">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr ? 'Peintre Rive-Sud' : 'Painter on the South Shore'}
                </Heading>

                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {isFr
                    ? 'Des peintres de métier pour vos projets résidentiels et commerciaux partout sur la Rive-Sud.'
                    : 'Professional painters for your residential and commercial projects throughout the South Shore.'}
                </Text>

                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {isFr
                    ? 'Maisons, condos, logements locatifs et commerces sur la Rive-Sud : nous réalisons des projets propres, rapides et bien coordonnés dans la région, de Longueuil à Saint-Lambert, Boucherville et au-delà.'
                    : 'Homes, condos, rental units and businesses on the South Shore: we deliver clean, fast and well-coordinated projects throughout the region, from Longueuil to Saint-Lambert, Boucherville and beyond.'}
                </Text>

                <HStack spacing={4} pt={2} flexWrap="wrap">
                  <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none' }}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      bg="brand.500"
                      color="white"
                      borderRadius="full"
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 6, md: 8 }}
                      size="lg"
                      _hover={{ bg: 'brand.600' }}
                    >
                      {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
                    </Button>
                  </Link>
                  <Link as={RouterLink} to="/realisations" _hover={{ textDecoration: 'none' }}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant="outline"
                      borderColor="brand.500"
                      color="brand.500"
                      borderRadius="full"
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 6, md: 8 }}
                      size="lg"
                      _hover={{ bg: 'brand.500', color: 'white' }}
                    >
                      {isFr ? 'Voir nos réalisations sur la Rive-Sud' : 'View our South Shore projects'}
                    </Button>
                  </Link>
                </HStack>
              </Stack>
            </Stack>

            <Box
              w="100%"
              aspectRatio={{ base: '1', md: '4/3' }}
              borderRadius="xl"
              overflow="hidden"
              bg="gray.100"
            >
              <Image
                src={headerRiveSud}
                alt={
                  isFr
                    ? 'Peintre professionnel sur la Rive-Sud - Le Lever du Pinceau'
                    : 'Professional painter on the South Shore - Le Lever du Pinceau'
                }
                title={
                  isFr
                    ? 'Peintre professionnel Rive-Sud, Le Lever du Pinceau, projet de peinture résidentielle complété'
                    : 'Professional painter South Shore, Le Lever du Pinceau, residential painting project completed'
                }
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                decoding="async"
              />
            </Box>
          </Grid>
        </Container>

        {/* SECTION 2 - Barre de confiance */}
        <Box bg="gray.50" borderTop="1px solid" borderTopColor="gray.200" borderBottom="1px solid" borderBottomColor="gray.200">
          <TrustBanner noCard showSatisfactionGuarantee={false} />
        </Box>

        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 10, md: 14, lg: 16 }}>
          <Stack spacing={0}>

            {/* SECTION 3 - Checkmarks Rive-Sud */}
            <CityWhyUsSection
              cityName="Rive-Sud"
              customTitle={
                isFr
                  ? 'Une équipe habituée aux réalités des projets sur la Rive-Sud'
                  : 'A team familiar with the realities of South Shore projects'
              }
              whyUsIntroText={
                isFr
                  ? "Sur la Rive-Sud, la qualité d'un chantier dépend autant de la coordination régionale que de la finition."
                  : 'On the South Shore, the quality of a job depends as much on regional coordination as on the finish.'
              }
              whyUsContent={checkmarks}
            />

            {/* SECTION 4 - Contextes Rive-Sud */}
            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Stack spacing={8}>
                <Stack spacing={3} textAlign="center">
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="gray.800"
                  >
                    {isFr
                      ? 'Des projets différents selon le type de propriété sur la Rive-Sud'
                      : 'Different projects depending on the type of property on the South Shore'}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {isFr
                      ? 'Une maison familiale, un condo récent ou une propriété à vendre sur la Rive-Sud ne se gèrent pas de la même manière.'
                      : 'A family home, a newer condo or a property for sale on the South Shore are not managed the same way.'}
                  </Text>
                </Stack>

                <Flex
                  flexWrap="wrap"
                  gap={{ base: 4, md: 6 }}
                  justify="center"
                  maxW="1000px"
                  mx="auto"
                >
                  {contexts.map((ctx) => (
                    <Box
                      key={ctx.number}
                      w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                      bg="white"
                      p={{ base: 5, md: 6 }}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.200"
                      boxShadow="sm"
                      _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={3}>
                        <Text fontSize="2xl" fontWeight="bold" color="brand.100" lineHeight="1">
                          {ctx.number}
                        </Text>
                        <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                          {ctx.title}
                        </Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                          {ctx.description}
                        </Text>
                      </Stack>
                    </Box>
                  ))}
                </Flex>
              </Stack>
            </Box>

          </Stack>
        </Container>

        {/* SECTION 5 - Avant/apres Rive-Sud */}
        <BeforeAfterCarouselSection
          isFr={isFr}
          title={
            isFr
              ? 'Avant / après de projets sur la Rive-Sud'
              : 'Before / after of projects on the South Shore'
          }
          subtitle={
            isFr
              ? 'Quelques exemples de transformations propres et bien exécutées dans la région.'
              : 'A few examples of clean and well-executed transformations in the region.'
          }
          images={riveSudBeforeAfterPairs}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        {/* SECTION 6 - Pourquoi nous choisir sur la Rive-Sud */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={3} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr
                    ? 'Une exécution fiable, propre et bien coordonnée'
                    : 'Reliable, clean and well-coordinated execution'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? "Ce que les clients veulent sur la Rive-Sud, ce n'est pas seulement un beau résultat : c'est un chantier bien géré du début à la fin."
                    : "What clients on the South Shore want is not just a beautiful result: it's a job site well managed from start to finish."}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 4, md: 6 }}
                maxW="1000px"
                mx="auto"
              >
                {whyUsCards.map((card) => (
                  <Box
                    key={card.number}
                    bg="white"
                    p={{ base: 5, md: 6 }}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    <Stack spacing={3}>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.100" lineHeight="1">
                        {card.number}
                      </Text>
                      <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                        {card.title}
                      </Text>
                      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                        {card.description}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 6b - Villes desservies sur la Rive-Sud */}
        <Container maxW="1440px" px={{ base: 4, md: 6 }}>
          <Box py={{ base: 12, md: 16, lg: 20 }}>
            <Stack spacing={8}>
              <Stack spacing={3} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr
                    ? 'Nous desservons la Rive-Sud et ses principaux secteurs'
                    : 'We serve the South Shore and its main areas'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? 'Une couverture régionale crédible, de Longueuil aux municipalités voisines.'
                    : 'Credible regional coverage, from Longueuil to neighbouring municipalities.'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 2, md: 3 }}
                spacing={{ base: 3, md: 4 }}
                maxW="700px"
                mx="auto"
              >
                {['Longueuil', 'Saint-Lambert', 'Boucherville', 'Greenfield Park', 'Saint-Bruno', 'Saint-Hubert'].map((secteur) => (
                  <Box
                    key={secteur}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 4, md: 5 }}
                    textAlign="center"
                    boxShadow="sm"
                    minH={{ base: '60px', md: '70px' }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    <Text
                      fontWeight="bold"
                      color="gray.800"
                      fontSize={{ base: 'sm', md: 'md' }}
                    >
                      {secteur}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>

              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.500"
                textAlign="center"
                maxW="580px"
                mx="auto"
              >
                {isFr
                  ? "Nous intervenons aussi dans les zones résidentielles et commerciales de la Rive-Sud selon le type de projet et l'échéancier."
                  : 'We also work in residential and commercial zones across the South Shore depending on the type of project and timeline.'}
              </Text>
            </Stack>
          </Box>
        </Container>

        {/* SECTION 7 - FAQ locale */}
        <FAQSection
          faqsOverride={riveSudFaqs}
          title={
            isFr
              ? 'Questions fréquentes sur nos services de peinture sur la Rive-Sud'
              : 'Frequently asked questions about our painting services on the South Shore'
          }
        />

        {/* SECTION 8 - Liens internes critiques */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={3} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr
                    ? 'Explorez les services les plus demandés sur la Rive-Sud'
                    : 'Explore the most requested services on the South Shore'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="580px" mx="auto">
                  {isFr
                    ? "Cette page est conçue pour vous orienter vers l'information la plus utile pour votre projet."
                    : 'This page is designed to guide you to the most useful information for your project.'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 3, md: 4 }}
                maxW="900px"
                mx="auto"
              >
                {internalLinks.map((link) => (
                  <Link
                    key={link.to}
                    as={RouterLink}
                    to={link.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      px={{ base: 4, md: 5 }}
                      py={{ base: 4, md: 5 }}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      textAlign="center"
                      h="100%"
                      minH={{ base: '60px', md: '68px' }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _hover={{ borderColor: 'brand.500', bg: 'brand.50' }}
                      transition="all 0.2s"
                    >
                      <HStack spacing={2} justify="center" align="center">
                        <Text
                          fontWeight="medium"
                          color="gray.700"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.4"
                        >
                          {link.label}
                        </Text>
                        <ArrowForwardIcon color="brand.500" boxSize={3} flexShrink={0} />
                      </HStack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 9 - CTA final */}
        <CityCTASection cityName="Rive-Sud" />

      </Box>
    </Fragment>
  );
}
