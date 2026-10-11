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
  SimpleGrid,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import HeroSection from '../home-page/HeroSection';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';

import headerLaval from '../images/3-ville/laval/header.jpg';
// Avant/après Laval - paires identifiées

import lavImg5975 from '../images/3-ville/laval/avant-apres/IMG_5975 4.jpg';
import lavImg5976 from '../images/3-ville/laval/avant-apres/IMG_5976 5.jpg';
import lavImg7992 from '../images/3-ville/laval/avant-apres/IMG_7992 5.jpg';
import lavImg7994 from '../images/3-ville/laval/avant-apres/IMG_7994 5.jpg';
import lavImg6031 from '../images/3-ville/laval/avant-apres/IMG_6031 3.jpg';
import lavImg8108 from '../images/3-ville/laval/avant-apres/IMG_8108 3.jpg';

export default function LavalCityPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isFr = currentLang === 'fr';

  // ─── Schema markup ──────────────────────────────────────────────────────────

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: 'https://www.leleverdupinceau.ca/' },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Secteurs desservis' : 'Service areas', item: 'https://www.leleverdupinceau.ca/secteurs' },
      { '@type': 'ListItem', position: 3, name: 'Laval', item: 'https://www.leleverdupinceau.ca/secteurs/laval' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau - Laval',
    url: 'https://www.leleverdupinceau.ca/secteurs/laval',
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'City', name: 'Laval' },
      { '@type': 'Neighborhood', name: 'Chomedey' },
      { '@type': 'Neighborhood', name: 'Sainte-Dorothée' },
      { '@type': 'Neighborhood', name: 'Laval-des-Rapides' },
      { '@type': 'Neighborhood', name: 'Fabreville' },
      { '@type': 'Neighborhood', name: 'Vimont' },
      { '@type': 'Neighborhood', name: 'Duvernay' },
    ],
  };

  // ─── Section 3 - Checkmarks ─────────────────────────────────────────────────

  const checkmarks = isFr ? [
    'Habitués aux bungalows et split-levels 1960-1990 - À Laval, une grande part du bâti porte encore de l\'aluminium peint ou du vinyle plutôt que du bois ou de la brique pleine.',
    'Traitement du crétage avant de repeindre - Sur aluminium oxydé, nettoyage en profondeur et apprêt liant avant toute nouvelle couche, sinon la peinture s\'écaille vite.',
    'Vinyle et aluminium ne se traitent pas pareil - On évalue le support et le système de produit selon le revêtement, pas avec une méthode unique.',
    'Logistique simple en secteur pavillonnaire - Stationnement, accès et séquence des pièces organisés pour un chantier fluide dans les rues résidentielles.',
    'Connaissance des quartiers lavallois - Chomedey, Sainte-Dorothée, Laval-des-Rapides, Vimont, Fabreville ou Duvernay : le type de propriété change, l\'approche aussi.',
  ] : [
    'Experienced with 1960s-1990s bungalows and split-levels - In Laval, much of the stock still has painted aluminum or vinyl rather than wood or solid brick.',
    'Chalking treated before repainting - On oxidized aluminum, deep cleaning and a bonding primer before any new coat, or the paint flakes quickly.',
    'Vinyl and aluminum are not treated the same - We assess the substrate and product system by cladding type, not with one method.',
    'Simple logistics in suburban streets - Parking, access and room sequencing organized for a smooth job in residential areas.',
    'Knowledge of Laval neighborhoods - Chomedey, Sainte-Dorothée, Laval-des-Rapides, Vimont, Fabreville or Duvernay: property types change, so does the approach.',
  ];

  // ─── Section 4 - Contextes lavallois ────────────────────────────────────────

  const contexts = isFr ? [
    {
      number: '01',
      title: 'Bungalow ou split-level en aluminium',
      description: 'À Chomedey, Fabreville ou Vimont, un revêtement pâle et poudreux signale souvent du crétage. On le traite avant de peindre, avec nettoyage en profondeur et apprêt adhérent conçu pour l\'aluminium, sinon la nouvelle couche s\'écaille vite.',
      to: '/services/peinture-exterieure',
      linkLabel: 'Peinture extérieure',
    },
    {
      number: '02',
      title: 'Maison en vinyle à rafraîchir',
      description: 'Le vinyle demande un autre jugement que l\'aluminium des années 1960-1990 : état du panneau, flexibilité du revêtement et produit adapté. On évalue le support avant de proposer une méthode.',
      to: '/services/peinture-exterieure',
      linkLabel: 'Peinture extérieure',
    },
    {
      number: '03',
      title: 'Intérieur de maison familiale occupée',
      description: 'Beaucoup de projets lavallois se font pendant que la famille reste sur place, à Sainte-Dorothée comme à Duvernay : protections, rythme pièce par pièce et chantier propre au quotidien.',
      to: '/services/peinture-residentielle/maison',
      linkLabel: 'Peinture de maison unifamiliale',
    },
    {
      number: '04',
      title: 'Condo ou copropriété à Laval',
      description: 'Accès, ascenseur et espaces communs planifiés pour un immeuble récent ou une tour, sans perdre la qualité de finition d\'un projet résidentiel bien cadré.',
      to: '/services/peinture-residentielle/condo',
      linkLabel: 'Peinture de condo',
    },
    {
      number: '05',
      title: 'Mise à niveau avant vente',
      description: 'Couleurs neutres, scope cadré et échéancier serré pour présenter une propriété plus lumineuse à Chomedey, Duvernay ou ailleurs à Laval, sans prolonger la mise en marché.',
    },
  ] : [
    {
      number: '01',
      title: 'Aluminum bungalow or split-level',
      description: 'In Chomedey, Fabreville or Vimont, pale powdery siding often means chalking. We treat it before painting, with deep cleaning and an adhesion primer made for aluminum, or the new coat flakes quickly.',
      to: '/services/peinture-exterieure',
      linkLabel: 'Exterior painting',
    },
    {
      number: '02',
      title: 'Vinyl home to refresh',
      description: 'Vinyl needs a different call than 1960s-1990s aluminum: panel condition, siding flexibility and a suitable product. We assess the substrate before proposing a method.',
      to: '/services/peinture-exterieure',
      linkLabel: 'Exterior painting',
    },
    {
      number: '03',
      title: 'Occupied family-home interior',
      description: 'Many Laval jobs happen while the family stays home, in Sainte-Dorothée as in Duvernay: protections, room-by-room pace and a clean site day to day.',
      to: '/services/peinture-residentielle/maison',
      linkLabel: 'Single-family house painting',
    },
    {
      number: '04',
      title: 'Condo or co-ownership in Laval',
      description: 'Access, elevator and common areas planned for a recent building or tower, without losing the finish quality of a well-scoped residential project.',
      to: '/services/peinture-residentielle/condo',
      linkLabel: 'Condo painting',
    },
    {
      number: '05',
      title: 'Pre-sale update',
      description: 'Neutral colors, defined scope and a tight schedule to present a brighter property in Chomedey, Duvernay or elsewhere in Laval, without prolonging the listing.',
    },
  ];

  // ─── Section 5 - Avant/après Laval ──────────────────────────────────────────

  const lavalBeforeAfterPairs = [
    
    {
      before: lavImg5975,
      after: lavImg5976,
      description: isFr ? 'Peinture d\'armoires de cuisine - Maison à Laval-des-Rapides' : 'Kitchen cabinet painting - House in Laval-des-Rapides',
    },
    {
      before: lavImg7992,
      after: lavImg7994,
      description: isFr ? 'Peinture résidentielle - Maison à Sainte-Dorothée' : 'Residential painting - House in Sainte-Dorothée',
    },
    {
      before: lavImg6031,
      after: lavImg8108,
      description: isFr ? 'Mise à niveau avant vente - Condo à Duvernay' : 'Pre-sale update - Condo in Duvernay',
    },
];

  // ─── Section 6 - Pourquoi nous choisir ──────────────────────────────────────

  const whyUsCards = isFr ? [
    {
      number: '01',
      title: 'Crétage traité avant de peindre',
      description: 'Sur aluminium lavallois oxydé, nettoyage et apprêt liant d\'abord. Sans ça, la nouvelle couche décolle vite, peu importe la marque.',
    },
    {
      number: '02',
      title: 'Méthode selon le revêtement',
      description: 'Aluminium craie, vinyle flexible ou intérieur de bungalow : on choisit le système selon le support, pas un processus unique.',
    },
    {
      number: '03',
      title: 'Chantier pensé pour Laval',
      description: 'Secteurs pavillonnaires, maisons occupées et échéanciers familiaux : logistique claire pour que le projet avance sans friction.',
    },
  ] : [
    {
      number: '01',
      title: 'Chalking treated before painting',
      description: 'On oxidized Laval aluminum, cleaning and a bonding primer first. Without that, the new coat peels quickly, brand aside.',
    },
    {
      number: '02',
      title: 'Method by cladding type',
      description: 'Chalking aluminum, flexible vinyl or bungalow interior: we choose the system by substrate, not one process.',
    },
    {
      number: '03',
      title: 'Job planned for Laval',
      description: 'Suburban sectors, occupied homes and family schedules: clear logistics so the project moves without friction.',
    },
  ];

  // ─── Section 7 - FAQ Laval ───────────────────────────────────────────────────

  const lavalFaqs = [
    {
      question: isFr
        ? "Mon revêtement d'aluminium a l'air pâle et poudreux, peut-on le repeindre?"
        : 'My aluminum siding looks faded and powdery, can it be repainted?',
      answer: isFr
        ? "Oui, mais il faut d'abord traiter le crétage (l'oxydation qui laisse une poudre blanche au toucher) avec un nettoyage en profondeur et un apprêt adhérent conçu pour l'aluminium. Sans cette étape, la peinture s'écaille rapidement, peu importe la qualité du produit utilisé."
        : 'Yes, but the chalking (oxidation that leaves a white powder to the touch) must first be treated with deep cleaning and an adhesion primer designed for aluminum. Without this step, the paint flakes quickly, regardless of the quality of the product used.',
    },
    {
      question: isFr
        ? 'Pourquoi le crétage est-il si fréquent sur les bungalows et split-levels à Laval?'
        : 'Why is chalking so common on bungalows and split-levels in Laval?',
      answer: isFr
        ? "Laval s'est surtout bâtie entre les années 1960 et 1990 avec de l'aluminium peint plutôt que du bois ou de la brique pleine. Après des décennies de soleil, ce revêtement s'oxyde et laisse une fine poudre blanchâtre. C'est une étape qu'on vérifie systématiquement avant de soumissionner sur ces maisons."
        : 'Laval was mostly built between the 1960s and 1990s with painted aluminum rather than wood or solid brick. After decades of sun, that siding oxidizes and leaves a fine whitish powder. It is a step we systematically check before quoting on these homes.',
    },
    {
      question: isFr ? 'Est-ce que vous vous déplacez partout à Laval?' : 'Do you travel throughout Laval?',
      answer: isFr
        ? "Oui. Nous desservons Laval et ses principaux quartiers, dont Chomedey, Sainte-Dorothée, Laval-des-Rapides, Fabreville, Vimont et Duvernay. Lors de la soumission, nous confirmons rapidement la disponibilité et l'échéancier selon votre secteur."
        : 'Yes. We serve Laval and its main neighborhoods, including Chomedey, Sainte-Dorothée, Laval-des-Rapides, Fabreville, Vimont and Duvernay. When quoting, we quickly confirm availability and scheduling based on your area.',
    },
    {
      question: isFr
        ? 'Peignez-vous aussi le vinyle, ou seulement l\'aluminium oxydé des bungalows?'
        : 'Do you also paint vinyl, or only oxidized aluminum on bungalows?',
      answer: isFr
        ? "Les deux cas se présentent à Laval. Sur l'aluminium qui craie, le nettoyage et l'apprêt liant sont indispensables. Sur le vinyle, on évalue l'état, la flexibilité du revêtement et le type de produit : ce n'est pas le même système que sur l'aluminium des années 1960-1990."
        : 'Both come up in Laval. On chalking aluminum, cleaning and a bonding primer are essential. On vinyl, we assess condition, siding flexibility and product type: it is not the same system as on 1960s-1990s aluminum.',
    },
  ];

  // ─── Schema FAQPage ──────────────────────────────────────────────────────────

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: lavalFaqs.map((faq) => ({
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
    { label: 'Peinture intérieure', to: '/services/peinture-interieure' },
    { label: 'Peinture extérieure', to: '/services/peinture-exterieure' },
    { label: 'Peinture commerciale', to: '/services/peinture-commerciale' },
    { label: 'Pourquoi choisir un peintre professionnel', to: '/peintre-professionnel' },
    { label: 'Voir nos réalisations', to: '/realisations' },
  ] : [
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Interior painting', to: '/services/peinture-interieure' },
    { label: 'Exterior painting', to: '/services/peinture-exterieure' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Why choose a professional painter', to: '/peintre-professionnel' },
    { label: 'View our projects', to: '/realisations' },
  ];

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintre à Laval | Résidentiel et commercial | Le Lever du Pinceau'
            : 'Painter in Laval | Residential and commercial | Le Lever du Pinceau'}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? 'Peintre à Laval pour bungalows et split-levels : aluminium qui craie, vinyle, intérieur familial. Licence RBQ. Soumission gratuite.'
              : 'Painter in Laval for bungalows and split-levels: chalking aluminum, vinyl, family interiors. RBQ license. Free quote.'
          }
        />
        <link rel="canonical" href="https://www.leleverdupinceau.ca/secteurs/laval" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">

        {/* ── SECTION 1 - Hero Banner ──────────────────────────────────────── */}
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Laval"
          imageBackground={headerLaval}
          overlayBg="rgba(2, 42, 104, 0.55)"
          title={isFr ? 'Peintre à Laval' : 'Painter in Laval'}
          subtitle={
            isFr
              ? 'Bungalows, aluminium oxydé et quartiers pavillonnaires.'
              : 'Bungalows, oxidized aluminum and suburban neighborhoods.'
          }
          description={
            isFr
              ? 'Crétage traité avant de peindre, chantiers propres à Chomedey comme à Duvernay.'
              : 'Chalking treated before painting, clean jobs from Chomedey to Duvernay.'
          }
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
          breadcrumb={[
            { label: isFr ? 'Accueil' : 'Home', to: '/' },
            { label: isFr ? 'Secteurs desservis' : 'Service areas', to: '/secteurs' },
            { label: 'Laval' },
          ]}
        />

        {/* ── SECTION 3 - Checkmarks Laval ─────────────────────────────── */}
        <CityWhyUsSection
          cityName="Laval"
          customTitle={
            isFr
              ? 'Une équipe habituée aux réalités des projets à Laval'
              : 'A team familiar with the realities of projects in Laval'
          }
          localInsight={
            isFr
              ? "Laval s'est surtout bâtie entre les années 1960 et 1990 : bungalows et split-level revêtus d'aluminium ou de vinyle plutôt que de bois ou de brique pleine. Le revêtement d'aluminium peint de cette époque s'oxyde et craie avec les années d'exposition au soleil : une fine poudre blanchâtre se dépose à la surface. Repeindre par-dessus sans traiter ce crétage avec un nettoyage et un apprêt liant fait décoller la nouvelle couche en une saison. C'est une étape qu'on vérifie systématiquement sur les revêtements lavallois avant de soumissionner."
              : "Laval was mostly built between the 1960s and 1990s: bungalows and split-levels clad in aluminum or vinyl rather than wood or solid brick. Painted aluminum siding from that era oxidizes and chalks after years of sun exposure: a fine whitish powder forms on the surface. Repainting over it without treating this chalking with cleaning and a bonding primer makes the new coat peel within a season. It's a step we systematically check on Laval siding before quoting."
          }
          whyUsIntroText={
            isFr
              ? 'À Laval, la qualité d\'un chantier dépend autant de l\'organisation que de la finition.'
              : 'In Laval, the quality of a job depends as much on organization as on the finish.'
          }
          whyUsContent={checkmarks}
        />

        <Container maxW="1440px" px={{ base: 4, md: 6 }}>
          <Stack spacing={0}>

            {/* ── SECTION 4 - Contextes lavallois ──────────────────────────── */}
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
                      ? 'Des projets différents selon le type de propriété à Laval'
                      : 'Different projects depending on the type of property in Laval'}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {isFr
                      ? 'Une maison familiale, un condo récent ou une propriété à vendre ne se gèrent pas de la même manière.'
                      : 'A family home, a recent condo or a property for sale are not managed the same way.'}
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
                        {ctx.to && (
                          <Link
                            as={RouterLink}
                            to={ctx.to}
                            color="brand.500"
                            fontWeight="semibold"
                            fontSize={{ base: 'sm', md: 'md' }}
                          >
                            {ctx.linkLabel} <ArrowForwardIcon boxSize={3} />
                          </Link>
                        )}
                      </Stack>
                    </Box>
                  ))}
                </Flex>
              </Stack>
            </Box>

          </Stack>
        </Container>

        {/* ── SECTION 5 - Avant/après Laval ───────────────────────────────── */}
        <BeforeAfterCarouselSection
          isFr={isFr}
          title={
            isFr
              ? 'Avant / après de projets à Laval'
              : 'Before / after of projects in Laval'
          }
          subtitle={
            isFr
              ? 'Quelques exemples de transformations propres et bien exécutées dans la région.'
              : 'A few examples of clean and well-executed transformations in the area.'
          }
          images={lavalBeforeAfterPairs}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        {/* ── SECTION 6 - Pourquoi nous choisir à Laval ───────────────────── */}
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
                    ? 'Ce que les clients veulent à Laval, ce n\'est pas seulement un beau résultat: c\'est un chantier bien géré du début à la fin.'
                    : 'What clients in Laval want is not just a beautiful result: it\'s a job site well managed from start to finish.'}
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
                      <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color="brand.100"
                        lineHeight="1"
                      >
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

        {/* ── SECTION 6 - Quartiers desservis à Laval ─────────────────────── */}
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
                    ? 'Nous desservons Laval et ses principaux quartiers'
                    : 'We serve Laval and its main neighborhoods'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? 'Une présence locale crédible se construit aussi par la précision territoriale.'
                    : 'A credible local presence is also built on territorial precision.'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 2, md: 3 }}
                spacing={{ base: 3, md: 4 }}
                maxW="900px"
                mx="auto"
              >
                {['Chomedey', 'Sainte-Dorothée', 'Laval-des-Rapides', 'Fabreville', 'Vimont', 'Duvernay'].map((quartier) => (
                  <Box
                    key={quartier}
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
                      textAlign="center"
                    >
                      {quartier}
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
                  ? "Nous intervenons aussi dans les secteurs résidentiels et commerciaux de Laval selon le type de projet et l'échéancier."
                  : "We also work in the residential and commercial sectors of Laval depending on the type of project and timeline."}
              </Text>
            </Stack>
          </Box>
        </Container>

        {/* ── SECTION 7 - FAQ locale ───────────────────────────────────────── */}
        <FAQSection
          faqsOverride={lavalFaqs}
          title={
            isFr
              ? 'Questions fréquentes sur nos services de peinture à Laval'
              : 'Frequently asked questions about our painting services in Laval'
          }
          emitSchema={false}
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
                    ? 'Explorez les services les plus demandés à Laval'
                    : 'Explore the most requested services in Laval'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="580px" mx="auto">
                  {isFr
                    ? 'Aluminium, intérieur résidentiel ou page service : allez au détail utile pour un projet à Laval.'
                    : 'Aluminum, residential interior or a service page: go to the useful detail for a Laval project.'}
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
        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr ? 'Obtenez votre soumission pour un projet de peinture à Laval' : 'Get your quote for a painting project in Laval'}
          subtitle={
            isFr
              ? 'Bungalow en aluminium, vinyle ou intérieur familial à Laval : décrivez le projet et on confirme la bonne préparation.'
              : 'Aluminum bungalow, vinyl or family interior in Laval: describe the project and we confirm the right prep.'
          }
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
