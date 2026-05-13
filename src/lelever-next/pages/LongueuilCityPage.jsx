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

import headerLongueuil from '../images/3-ville/longueuil/header.JPEG';
// Avant/apres Longueuil - paires identifiees
import lonImg5973 from '../images/3-ville/longueuil/avant-apres/IMG_5973 5.jpg';
import lonImg5974 from '../images/3-ville/longueuil/avant-apres/IMG_5974 5.jpg';
import lonImg7992 from '../images/3-ville/longueuil/avant-apres/IMG_7992 6.jpg';
import lonImg7994 from '../images/3-ville/longueuil/avant-apres/IMG_7994 6.jpg';
import lonImg7990 from '../images/3-ville/longueuil/avant-apres/IMG_7990 4.jpg';
import lonImg7988 from '../images/3-ville/longueuil/avant-apres/IMG_7988 4.jpg';
import lonImg6031 from '../images/3-ville/longueuil/avant-apres/IMG_6031 4.jpg';
import lonImg8108 from '../images/3-ville/longueuil/avant-apres/IMG_8108 4.jpg';

export default function LongueuilCityPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Schema markup

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: 'https://www.leleverdupinceau.ca/' },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Secteurs desservis' : 'Service areas', item: 'https://www.leleverdupinceau.ca/secteurs' },
      { '@type': 'ListItem', position: 3, name: 'Longueuil', item: 'https://www.leleverdupinceau.ca/secteurs/longueuil' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau - Longueuil',
    url: 'https://www.leleverdupinceau.ca/secteurs/longueuil',
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'City', name: 'Longueuil' },
      { '@type': 'Neighborhood', name: 'Vieux-Longueuil' },
      { '@type': 'Neighborhood', name: 'Saint-Hubert' },
      { '@type': 'Neighborhood', name: 'Greenfield Park' },
    ],
  };

  // Section 3 - Checkmarks

  const checkmarks = isFr ? [
    'Habitués aux maisons, condos et projets de transition - À Longueuil, beaucoup de projets concernent des propriétés occupées, des condos, des rafraîchissements avant vente ou des espaces à remettre au propre avant une nouvelle étape.',
    'Logistique simple et bien planifiée - Stationnement, accès, circulation du matériel et séquence des pièces sont organisés pour garder le chantier fluide, surtout dans des propriétés habitées.',
    "Échéancier clair pour les moments sensibles - Avant mise en marché, avant déménagement, entre deux occupations ou pendant un horaire familial serré.",
    'Protection complète des espaces habités - Dans une maison ou un condo occupé, les protections et le nettoyage quotidien comptent autant que le résultat visuel.',
    'Communication simple du début à la fin - Le client sait quoi attendre, quand les travaux commencent, ce qui est inclus et comment le chantier va se dérouler.',
    "Connaissance des secteurs de Longueuil - Vieux-Longueuil, Saint-Hubert, Greenfield Park et les zones résidentielles plus familiales n'impliquent pas les mêmes contextes; l'approche s'adapte.",
  ] : [
    'Experienced with homes, condos and transition projects - In Longueuil, many projects involve occupied properties, condos, pre-sale refreshes or spaces to clean up before a new chapter.',
    'Simple and well-planned logistics - Parking, access, material flow and room sequencing are organized to keep the site running smoothly, especially in occupied properties.',
    'Clear schedule for sensitive moments - Before listing, before moving, between occupations or during a tight family schedule.',
    'Full protection of occupied spaces - In an occupied home or condo, protections and daily cleanup matter as much as the visual result.',
    'Simple communication from start to finish - The client knows what to expect, when work starts, what is included and how the site will run.',
    "Knowledge of Longueuil's sectors - Vieux-Longueuil, Saint-Hubert, Greenfield Park and the more residential family zones don't all involve the same context; the approach adapts.",
  ];

  // Section 4 - Contextes longueuillois

  const contexts = isFr ? [
    {
      number: '01',
      title: 'Maison unifamiliale occupée',
      description: 'Projet à planifier pièce par pièce, avec protections, rythme de chantier clair et souci du quotidien familial.',
    },
    {
      number: '02',
      title: 'Condo ou unité en copropriété',
      description: "Accès, circulation, espaces communs et propreté prennent plus d'importance dans les immeubles récents ou les copropriétés.",
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
      title: 'Occupied single-family home',
      description: 'Project to plan room by room, with protections, clear site rhythm and attention to daily family life.',
    },
    {
      number: '02',
      title: 'Condo or co-ownership unit',
      description: 'Access, circulation, common areas and cleanliness take on more importance in recent buildings or co-ownerships.',
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

  // Section 5 - Avant/apres Longueuil

  const longueuilBeforeAfterPairs = [
    {
      before: lonImg5973,
      after: lonImg5974,
      description: isFr ? 'Peinture intérieure - Maison à Vieux-Longueuil' : 'Interior painting - House in Vieux-Longueuil',
    },
    {
      before: lonImg7992,
      after: lonImg7994,
      description: isFr ? 'Rafraîchissement complet - Condo à Saint-Hubert' : 'Full refresh - Condo in Saint-Hubert',
    },
    {
      before: lonImg7990,
      after: lonImg7988,
      description: isFr ? 'Peinture résidentielle - Maison à Greenfield Park' : 'Residential painting - House in Greenfield Park',
    },
    {
      before: lonImg6031,
      after: lonImg8108,
      description: isFr ? 'Mise à niveau avant vente - Propriété à Longueuil' : 'Pre-sale update - Property in Longueuil',
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

  // Section 7 - FAQ Longueuil

  const longueuilFaqs = [
    {
      question: isFr ? 'Est-ce que vous vous déplacez partout à Longueuil?' : 'Do you travel throughout Longueuil?',
      answer: isFr
        ? "Oui. Nous desservons Longueuil et ses principaux secteurs, dont Vieux-Longueuil, Saint-Hubert et Greenfield Park, selon le type de projet. Lors de la soumission, nous confirmons rapidement la disponibilité et l'échéancier selon votre secteur."
        : 'Yes. We serve Longueuil and its main sectors, including Vieux-Longueuil, Saint-Hubert and Greenfield Park, depending on the type of project. When quoting, we quickly confirm availability and scheduling based on your area.',
    },
    {
      question: isFr ? 'Faites-vous des projets dans des maisons occupées?' : 'Do you work in occupied homes?',
      answer: isFr
        ? 'Oui. Une grande partie de nos projets à Longueuil se font dans des maisons ou condos habités. Nous planifions les protections, la séquence des pièces et le nettoyage pour limiter les impacts au quotidien et garder le chantier le plus discret possible.'
        : 'Yes. A large portion of our Longueuil projects take place in occupied homes or condos. We plan protections, room sequencing and cleanup to minimize daily disruptions and keep the job site as unobtrusive as possible.',
    },
    {
      question: isFr ? 'Combien de temps faut-il pour peindre une propriété à Longueuil?' : 'How long does it take to paint a property in Longueuil?',
      answer: isFr
        ? "Cela dépend de la taille, de l'état des surfaces et du niveau de préparation. Une soumission détaillée permet d'établir un échéancier clair et réaliste avant le début des travaux, pour que vous sachiez exactement à quoi vous attendre."
        : 'It depends on the size of the project, the condition of the surfaces and the level of preparation required. A detailed quote allows us to establish a clear and realistic schedule before work begins, so you know exactly what to expect.',
    },
    {
      question: isFr ? 'Faites-vous aussi les condos et copropriétés à Longueuil?' : 'Do you also work on condos and co-ownerships in Longueuil?',
      answer: isFr
        ? "Oui. Nous adaptons le chantier aux règles de l'immeuble, aux accès et à la circulation du matériel pour garder le projet simple, propre et respectueux des espaces communs et des voisins."
        : 'Yes. We adapt our operations to building rules, access points and material flow to keep the project simple, clean and respectful of common areas and neighbors.',
    },
    {
      question: isFr ? 'Peut-on obtenir une soumission rapidement?' : 'Can we get a quote quickly?',
      answer: isFr
        ? 'Oui. Nous répondons rapidement et pouvons vous guider vers la bonne page service ou vous proposer une estimation adaptée à votre projet à Longueuil. Dans la majorité des cas, nous répondons en moins de 24 heures.'
        : 'Yes. We respond quickly and can guide you to the right service page or provide an estimate tailored to your Longueuil project. In most cases, we respond within 24 hours.',
    },
  ];

  // Schema FAQPage

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: longueuilFaqs.map((faq) => ({
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
    { label: 'Obtenir une soumission', to: '/contact' },
    { label: 'Peintre Rive-Sud', to: '/secteurs/rive-sud' },
    { label: 'Voir nos réalisations', to: '/realisations' },
  ] : [
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Interior painting', to: '/services/peinture-interieure' },
    { label: 'Exterior painting', to: '/services/peinture-exterieure' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Get a quote', to: '/contact' },
    { label: 'Painter on the South Shore', to: '/secteurs/rive-sud' },
    { label: 'View our projects', to: '/realisations' },
  ];

  // Render

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintre à Longueuil | Résidentiel et commercial | Le Lever du Pinceau'
            : 'Painter in Longueuil | Residential and commercial | Le Lever du Pinceau'}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture à Longueuil pour maisons, condos et commerces. Soumission gratuite, chantier propre, peintres de métier.'
              : 'Le Lever du Pinceau offers painting services in Longueuil for homes, condos and businesses. Free quote, clean job site, professional painters.'
          }
        />
        <link rel="canonical" href="https://www.leleverdupinceau.ca/secteurs/longueuil" />
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
                <Text color="gray.800" fontWeight="medium" fontSize={{ base: 'md', md: 'lg' }}>Longueuil</Text>
              </HStack>

              <Stack spacing={5} textAlign="left">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr ? 'Peintre à Longueuil' : 'Painter in Longueuil'}
                </Heading>

                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {isFr
                    ? 'Des peintres de métier pour vos projets résidentiels et commerciaux partout à Longueuil.'
                    : 'Professional painters for your residential and commercial projects throughout Longueuil.'}
                </Text>

                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {isFr
                    ? 'Maisons familiales, condos, appartements et espaces commerciaux : nous réalisons des projets propres, rapides et bien coordonnés à Longueuil.'
                    : 'Family homes, condos, apartments and commercial spaces: we deliver clean, fast and well-coordinated projects throughout Longueuil.'}
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
                      {isFr ? 'Voir nos réalisations' : 'View our projects'}
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
                src={headerLongueuil}
                alt={
                  isFr
                    ? 'Peintre professionnel à Longueuil - Le Lever du Pinceau'
                    : 'Professional painter in Longueuil - Le Lever du Pinceau'
                }
                title={
                  isFr
                    ? 'Peintre professionnel Longueuil, Le Lever du Pinceau, projet de peinture résidentielle complété'
                    : 'Professional painter Longueuil, Le Lever du Pinceau, residential painting project completed'
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
          <TrustBanner />
        </Box>

        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 10, md: 14, lg: 16 }}>
          <Stack spacing={0}>

            {/* SECTION 3 - Checkmarks Longueuil */}
            <CityWhyUsSection
              cityName="Longueuil"
              customTitle={
                isFr
                  ? 'Une équipe habituée aux réalités des projets à Longueuil'
                  : 'A team familiar with the realities of projects in Longueuil'
              }
              whyUsIntroText={
                isFr
                  ? "À Longueuil, la réussite d'un chantier dépend autant de la planification que de la finition."
                  : 'In Longueuil, the success of a job depends as much on planning as on the finish.'
              }
              whyUsContent={checkmarks}
            />

            {/* SECTION 4 - Contextes longueuillois */}
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
                      ? 'Des projets différents selon le type de propriété à Longueuil'
                      : 'Different projects depending on the type of property in Longueuil'}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {isFr
                      ? 'Une maison familiale, un condo ou une propriété à remettre au propre avant une transition ne se gèrent pas de la même manière.'
                      : 'A family home, a condo or a property to clean up before a transition are not managed the same way.'}
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

        {/* SECTION 5 - Avant/apres Longueuil */}
        <BeforeAfterCarouselSection
          isFr={isFr}
          title={
            isFr
              ? 'Avant / après de projets à Longueuil'
              : 'Before / after of projects in Longueuil'
          }
          subtitle={
            isFr
              ? 'Quelques exemples de transformations propres et bien exécutées dans la région.'
              : 'A few examples of clean and well-executed transformations in the area.'
          }
          images={longueuilBeforeAfterPairs}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        {/* SECTION 6 - Pourquoi nous choisir a Longueuil */}
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
                    ? 'Une exécution fiable, propre et bien encadrée'
                    : 'Reliable, clean and well-managed execution'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? "Ce que les clients veulent à Longueuil, ce n'est pas seulement un beau résultat : c'est un chantier bien géré du début à la fin."
                    : "What clients in Longueuil want is not just a beautiful result: it's a job site well managed from start to finish."}
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

        {/* SECTION 6b - Secteurs desservis a Longueuil */}
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
                    ? 'Nous desservons Longueuil et ses principaux secteurs'
                    : 'We serve Longueuil and its main sectors'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? 'Une présence locale crédible se construit aussi par la précision territoriale.'
                    : 'A credible local presence is also built on territorial precision.'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 3, md: 4 }}
                maxW="700px"
                mx="auto"
              >
                {['Vieux-Longueuil', 'Saint-Hubert', 'Greenfield Park'].map((secteur) => (
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
                      whiteSpace="nowrap"
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
                  ? "Nous intervenons aussi dans les zones résidentielles et commerciales de Longueuil selon le type de projet et l'échéancier."
                  : 'We also work in the residential and commercial zones of Longueuil depending on the type of project and timeline.'}
              </Text>
            </Stack>
          </Box>
        </Container>

        {/* SECTION 7 - FAQ locale */}
        <FAQSection
          faqsOverride={longueuilFaqs}
          title={
            isFr
              ? 'Questions fréquentes sur nos services de peinture à Longueuil'
              : 'Frequently asked questions about our painting services in Longueuil'
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
                    ? 'Explorez les services les plus demandés à Longueuil'
                    : 'Explore the most requested services in Longueuil'}
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
        <CityCTASection cityName="Longueuil" />

      </Box>
    </Fragment>
  );
}
