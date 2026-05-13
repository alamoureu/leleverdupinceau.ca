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
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import TrustBanner from '../home-page/TrustBanner';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import CityCTASection from '../city-pages/CityCTASection';

import headerGatineau from '../images/3-ville/gatineau/header_gatineau_city.PNG';
// Avant/après Gatineau - paires identifiées
import gatImg7990 from '../images/3-ville/gatineau/avant-apres/IMG_7990 2.jpg';
import gatImg7988 from '../images/3-ville/gatineau/avant-apres/IMG_7988 2.jpg';
import gatImg7992 from '../images/3-ville/gatineau/avant-apres/IMG_7992 4.jpg';
import gatImg7994 from '../images/3-ville/gatineau/avant-apres/IMG_7994 4.jpg';
import gatImg7999 from '../images/3-ville/gatineau/avant-apres/IMG_7999 7.jpg';
import gatImg7997 from '../images/3-ville/gatineau/avant-apres/IMG_7997 7.jpg';
import gatImg5973 from '../images/3-ville/gatineau/avant-apres/IMG_5973 3.jpg';
import gatImg5974 from '../images/3-ville/gatineau/avant-apres/IMG_5974 3.jpg';
import gatImg5975 from '../images/3-ville/gatineau/avant-apres/IMG_5975 3.jpg';
import gatImg5976 from '../images/3-ville/gatineau/avant-apres/IMG_5976 4.jpg';

export default function GatineauCityPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // ─── Schema markup ──────────────────────────────────────────────────────────

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: 'https://www.leleverdupinceau.ca/' },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Secteurs' : 'Sectors', item: 'https://www.leleverdupinceau.ca/secteurs' },
      { '@type': 'ListItem', position: 3, name: 'Gatineau', item: 'https://www.leleverdupinceau.ca/secteurs/gatineau' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau - Gatineau',
    url: 'https://www.leleverdupinceau.ca/secteurs/gatineau',
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Hull' },
      { '@type': 'City', name: 'Aylmer' },
      { '@type': 'City', name: 'Buckingham' },
      { '@type': 'City', name: 'Masson-Angers' },
    ],
  };

  // ─── Section 3 - Checkmarks ─────────────────────────────────────────────────

  const checkmarks = isFr ? [
    'Accès simple dans les secteurs résidentiels et urbains - maisons, condos et petits immeubles demandent des préparations différentes selon le contexte.',
    'Habitués aux projets dans des espaces occupés - la propreté, la séquence de travail et le respect des lieux restent critiques dans un projet vécu au quotidien.',
    "Échéancier clair pour les projets sensibles - avant emménagement, avant mise en marché, entre deux locataires ou avant réouverture d'un local.",
    'Communication rapide et rassurante - pour un contact issu de Google ou du GBP, la réactivité fait partie de la confiance locale.',
    'Coordination locale crédible - Hull, Aylmer, Buckingham et Masson-Angers ne se planifient pas exactement de la même manière.',
    "Projet bien encadré du début à la fin - le client doit sentir qu'il traite avec une vraie équipe organisée, pas avec une page locale improvisée.",
  ] : [
    'Easy access in residential and urban areas - houses, condos and small buildings require different preparations depending on the context.',
    'Experienced with projects in occupied spaces - cleanliness, work sequencing and respect for the premises remain critical in day-to-day projects.',
    'Clear schedule for sensitive projects - before move-in, before listing, between tenants or before reopening a space.',
    'Fast and reassuring communication - for a contact coming from Google or GBP, responsiveness is part of local trust.',
    "Credible local coordination - Hull, Aylmer, Buckingham and Masson-Angers don't all require exactly the same planning.",
    "Project well managed from start to finish - the client must feel they're dealing with a truly organized team, not an improvised local page.",
  ];

  // ─── Section 4 - Contextes fréquents ────────────────────────────────────────

  const contexts = isFr ? [
    {
      number: '01',
      title: 'Maison unifamiliale',
      description: "Projet occupé, rythme familial, pièces à remettre en service rapidement, importance de la propreté et du respect de l'espace de vie.",
    },
    {
      number: '02',
      title: 'Condo ou appartement',
      description: 'Accès, escaliers, stationnement, séquence de travail plus serrée, voisinage proche. Une coordination rigoureuse s\'impose.',
    },
    {
      number: '03',
      title: 'Commerce local',
      description: 'Horaires adaptés, image professionnelle à maintenir, délai réduit et moins de perturbation possible pendant les travaux.',
    },
    {
      number: '04',
      title: 'Remise en état avant vente ou location',
      description: "Calendrier rapide, finition propre, impact visuel immédiat. Idéal avant une mise en marché ou l'accueil d'un nouveau locataire.",
    },
    {
      number: '05',
      title: 'Projet urgent ou fenêtre de temps courte',
      description: "Besoin de réponse rapide, soumission claire et déroulement sans surprise. Nous faisons notre possible pour accommoder les échéanciers serrés.",
    },
  ] : [
    {
      number: '01',
      title: 'Single-family home',
      description: 'Occupied project, family rhythm, rooms to put back in service quickly, importance of cleanliness and respect for living space.',
    },
    {
      number: '02',
      title: 'Condo or apartment',
      description: 'Access, stairs, parking, tighter work sequence, close neighbors. Rigorous coordination is essential.',
    },
    {
      number: '03',
      title: 'Local business',
      description: 'Adapted schedules, professional image to maintain, reduced delay and minimal disruption possible during work.',
    },
    {
      number: '04',
      title: 'Renovation before sale or rental',
      description: 'Fast schedule, clean finish, immediate visual impact. Ideal before listing or welcoming a new tenant.',
    },
    {
      number: '05',
      title: 'Urgent project or tight timeline',
      description: 'Need for quick response, clear quote and smooth execution. We do our best to accommodate tight schedules.',
    },
  ];

  // ─── Section 5 - Avant/après Gatineau ────────────────────────────────────────

  const gatineauBeforeAfterPairs = [
    {
      before: gatImg7990,
      after: gatImg7988,
      description: isFr ? 'Peinture intérieure - Maison à Aylmer' : 'Interior painting - House in Aylmer',
    },
    {
      before: gatImg7992,
      after: gatImg7994,
      description: isFr ? 'Remise au goût du jour - Condo à Hull' : 'Modern update - Condo in Hull',
    },
    {
      before: gatImg7999,
      after: gatImg7997,
      description: isFr ? 'Murs et boiseries - Résidence à Gatineau' : 'Walls and trim - Residence in Gatineau',
    },
    {
      before: gatImg5973,
      after: gatImg5974,
      description: isFr ? 'Peinture extérieure - Résidence à Gatineau' : 'Exterior painting - Residence in Gatineau',
    },
    {
      before: gatImg5975,
      after: gatImg5976,
      description: isFr ? 'Rafraîchissement commercial - Local de quartier' : 'Commercial refresh - Neighborhood space',
    },
  ];

  // ─── Section 7 - FAQ Gatineau ────────────────────────────────────────────────

  // Défini avant le schema JSON-LD pour pouvoir le référencer
  const gatineauFaqs = [
    {
      question: isFr ? 'Est-ce que vous desservez Hull et Aylmer?' : 'Do you serve Hull and Aylmer?',
      answer: isFr
        ? "Oui. Nous desservons Gatineau, Hull, Aylmer ainsi que les secteurs environnants. Notre équipe peut intervenir autant dans les maisons, condos et appartements que dans certains espaces commerciaux, selon le type de projet. Lors de la soumission, nous confirmons rapidement la zone desservie et les disponibilités selon votre secteur."
        : "Yes. We serve Gatineau, Hull, Aylmer and surrounding areas. Our team can work in homes, condos and apartments as well as certain commercial spaces, depending on the type of project. When quoting, we quickly confirm the service area and availability based on your sector.",
    },
    {
      question: isFr ? 'Combien de temps faut-il pour obtenir une soumission à Gatineau?' : 'How long does it take to get a quote in Gatineau?',
      answer: isFr
        ? "Dans la majorité des cas, nous répondons en moins de 24 heures. Le délai exact dépend du type de projet, des informations fournies et de la période de l'année. Plus votre demande est claire dès le départ, plus nous pouvons vous donner une estimation rapide, précise et adaptée à votre projet à Gatineau."
        : "In most cases, we respond within 24 hours. The exact delay depends on the type of project, the information provided, and the time of year. The clearer your request from the start, the faster we can provide a quick, accurate estimate tailored to your project in Gatineau.",
    },
    {
      question: isFr ? 'Travaillez-vous sur des projets résidentiels et commerciaux à Gatineau?' : 'Do you work on residential and commercial projects in Gatineau?',
      answer: isFr
        ? "Oui. Nous réalisons des projets de peinture résidentielle et commerciale à Gatineau. Cela comprend notamment les maisons, condos, appartements, bureaux, commerces et autres espaces professionnels. Chaque projet est planifié selon ses contraintes propres, avec un échéancier clair, une préparation adaptée et une exécution soignée du début à la fin."
        : "Yes. We carry out residential and commercial painting projects in Gatineau. This includes homes, condos, apartments, offices, stores and other professional spaces. Each project is planned according to its own constraints, with a clear timeline, appropriate preparation and careful execution from start to finish.",
    },
    {
      question: isFr ? 'Est-ce que vous pouvez intervenir rapidement pour un projet urgent?' : 'Can you respond quickly for an urgent project?',
      answer: isFr
        ? "Oui, selon nos disponibilités. Nous faisons notre possible pour accommoder les projets urgents, surtout lorsqu'il y a un impératif de vente, de déménagement, de remise en état ou d'ouverture commerciale. Le plus simple est de nous contacter rapidement avec les détails du projet afin que nous puissions confirmer si une intervention rapide est possible."
        : "Yes, depending on our availability. We do our best to accommodate urgent projects, especially when there is a deadline for sale, moving, renovation or commercial opening. The simplest approach is to contact us quickly with the project details so we can confirm whether a rapid intervention is possible.",
    },
    {
      question: isFr ? "Comment se déroule un projet de peinture dans un espace encore occupé?" : 'How does a painting project work in an occupied space?',
      answer: isFr
        ? "Un projet dans un espace occupé demande surtout de la méthode, de la protection et une bonne coordination. Nous planifions les travaux de façon à limiter les impacts sur votre quotidien ou vos opérations, en protégeant les surfaces, en gardant le chantier propre et en avançant par zones lorsque c'est nécessaire. L'objectif est de rendre le projet le plus simple, propre et prévisible possible."
        : "A project in an occupied space requires method, protection and good coordination above all. We plan the work to minimize impact on your daily life or operations, protecting surfaces, keeping the site clean and advancing by zones when necessary. The goal is to make the project as simple, clean and predictable as possible.",
    },
  ];

  // ─── Schema FAQPage ──────────────────────────────────────────────────────────

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: gatineauFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // ─── Section 8 - Liens internes ─────────────────────────────────────────────

  const internalLinks = isFr ? [
    { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
    { label: 'Peinture commerciale', to: '/services/peinture-commerciale' },
    { label: 'Peinture intérieure', to: '/services/peinture-interieure' },
    { label: 'Peinture extérieure', to: '/services/peinture-exterieure' },
    { label: 'Pourquoi choisir un peintre professionnel', to: '/peintre-professionnel' },
    { label: 'Voir nos réalisations', to: '/realisations' },
    { label: 'Obtenir une soumission', to: '/contact' },
  ] : [
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Interior painting', to: '/services/peinture-interieure' },
    { label: 'Exterior painting', to: '/services/peinture-exterieure' },
    { label: 'Why choose a professional painter', to: '/peintre-professionnel' },
    { label: 'View our projects', to: '/realisations' },
    { label: 'Get a quote', to: '/contact' },
  ];

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintre à Gatineau | Résidentiel et commercial | Le Lever du Pinceau'
            : 'Painter in Gatineau | Residential and commercial | Le Lever du Pinceau'}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture résidentielle et commerciale à Gatineau, Hull, Aylmer et les environs. Soumission gratuite en 24h.'
              : 'Le Lever du Pinceau offers residential and commercial painting services in Gatineau, Hull, Aylmer and surrounding areas. Free quote in 24h.'
          }
        />
        <link rel="canonical" href="https://www.leleverdupinceau.ca/secteurs/gatineau" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">

        {/* ── SECTION 1 - Hero Banner ──────────────────────────────────────── */}
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
                <Text color="gray.800" fontWeight="medium" fontSize={{ base: 'md', md: 'lg' }}>Gatineau</Text>
              </HStack>

              <Stack spacing={5} textAlign="left">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr ? 'Peintre professionnel à Gatineau' : 'Professional painter in Gatineau'}
                </Heading>

                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {isFr
                    ? 'Une équipe de peintres de métier pour vos projets résidentiels et commerciaux à Gatineau, Hull, Aylmer et les environs.'
                    : 'A team of professional painters for your residential and commercial projects in Gatineau, Hull, Aylmer and surrounding areas.'}
                </Text>

                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {isFr
                    ? "Condos, maisons, commerces de quartier ou travaux urgents entre deux échéanciers : nous réalisons des projets propres, rapides et bien coordonnés partout à Gatineau."
                    : "Condos, houses, neighborhood businesses or urgent work between deadlines: we deliver clean, fast and well-coordinated projects throughout Gatineau."}
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
                src={headerGatineau}
                alt={
                  isFr
                    ? 'Peintre professionnel à Gatineau - Le Lever du Pinceau'
                    : 'Professional painter in Gatineau - Le Lever du Pinceau'
                }
                title={
                  isFr
                    ? 'Équipe Le Lever du Pinceau en chantier de peinture, région de Gatineau'
                    : 'Le Lever du Pinceau team on a painting project, Gatineau region'
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

        {/* ── SECTION 2 - Barre de confiance ──────────────────────────────── */}
        <Box bg="gray.50" borderTop="1px solid" borderTopColor="gray.200" borderBottom="1px solid" borderBottomColor="gray.200">
          <TrustBanner />
        </Box>

        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 10, md: 14, lg: 16 }}>
          <Stack spacing={0}>

            {/* ── SECTION 3 - Checkmarks Gatineau ─────────────────────────── */}
            <CityWhyUsSection
              cityName="Gatineau"
              customTitle={
                isFr
                  ? 'Une équipe prête à intervenir à Gatineau avec une logistique simple et prévisible'
                  : 'A team ready to work in Gatineau with simple and predictable logistics'
              }
              whyUsIntroText={
                isFr
                  ? 'À Gatineau, la confiance vient autant de la coordination que de la qualité du résultat.'
                  : 'In Gatineau, trust comes as much from coordination as from the quality of the result.'
              }
              whyUsContent={checkmarks}
            />

            {/* ── SECTION 4 - Contextes fréquents ─────────────────────────── */}
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
                      ? 'Des besoins différents selon le type de projet à Gatineau'
                      : 'Different needs depending on the type of project in Gatineau'}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {isFr
                      ? "Une maison à Aylmer, un condo à Hull ou un commerce de quartier ne se gèrent pas de la même manière."
                      : "A house in Aylmer, a condo in Hull or a neighborhood business are not managed the same way."}
                  </Text>
                </Stack>

                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={{ base: 4, md: 6 }}
                  maxW="1000px"
                  mx="auto"
                >
                  {contexts.map((ctx) => (
                    <Box
                      key={ctx.number}
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
                        <Text
                          fontSize="2xl"
                          fontWeight="bold"
                          color="brand.100"
                          lineHeight="1"
                        >
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
                </SimpleGrid>
              </Stack>
            </Box>

          </Stack>
        </Container>

        {/* ── SECTION 5 - Avant/après Gatineau ────────────────────────────── */}
        <BeforeAfterCarouselSection
          isFr={isFr}
          title={
            isFr
              ? 'Des projets qui parlent à la réalité de Gatineau'
              : 'Projects that reflect the reality of Gatineau'
          }
          subtitle={
            isFr
              ? 'Des réalisations concrètes dans la région de Gatineau, Hull et Aylmer.'
              : 'Concrete achievements in the Gatineau, Hull and Aylmer region.'
          }
          images={gatineauBeforeAfterPairs}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        {/* ── SECTION 6 - Secteurs desservis ──────────────────────────────── */}
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
                    ? 'Nous desservons Gatineau et ses principaux secteurs'
                    : 'We serve Gatineau and its main sectors'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? 'Une présence locale crédible se construit aussi par la précision territoriale.'
                    : 'A credible local presence is also built on territorial precision.'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                spacing={{ base: 3, md: 4 }}
                maxW="700px"
                mx="auto"
              >
                {['Hull', 'Aylmer', 'Buckingham', 'Masson-Angers'].map((sector) => (
                  <Box
                    key={sector}
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
                      fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                      whiteSpace="nowrap"
                    >
                      {sector}
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
                  ? "Nous intervenons aussi dans les secteurs résidentiels et commerciaux de Gatineau selon le type de projet et l'échéancier."
                  : "We also work in the residential and commercial sectors of Gatineau depending on the type of project and timeline."}
              </Text>
            </Stack>
          </Box>
        </Container>

        {/* ── SECTION 7 - FAQ locale ───────────────────────────────────────── */}
        <FAQSection
          faqsOverride={gatineauFaqs}
          title={
            isFr
              ? 'Questions fréquentes sur nos services de peinture à Gatineau'
              : 'Frequently asked questions about our painting services in Gatineau'
          }
        />

        {/* ── SECTION 8 - Liens internes critiques ────────────────────────── */}
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
                    ? 'Explorer les bonnes pages selon votre besoin'
                    : 'Explore the right pages based on your need'}
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

        {/* ── SECTION 9 - CTA final ────────────────────────────────────────── */}
        <CityCTASection cityName="Gatineau" />

      </Box>
    </Fragment>
  );
}
