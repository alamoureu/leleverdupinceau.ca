import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
import SubmissionModal from '../home-page/SubmissionModal';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SEOHead from '../seo/SEOHead';
import { SITE_URL } from '../seo/config';
import { COMPANY_PHONE_E164 } from '../constants/company';

import headerLongueuil from '../images/3-ville/longueuil/header.JPEG';
// Avant/apres Longueuil - paires identifiees
import lonImg7990 from '../images/3-ville/longueuil/avant-apres/IMG_7990 4.jpg';
import lonImg7988 from '../images/3-ville/longueuil/avant-apres/IMG_7988 4.jpg';
import lonImg0830 from '../images/3-ville/longueuil/avant-apres/IMG_0830.jpg';
import lonImg0831 from '../images/3-ville/longueuil/avant-apres/IMG_0831.jpg';

import bedroomBefore from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre avant.jpg';
import bedroomAfter from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre après.jpg';
import lonAdd1b from '../images/3-ville/brossard/avant-apres/IMG_0822.jpg';
import lonAdd1a from '../images/3-ville/brossard/avant-apres/IMG_0823.jpg';
import lonAdd2b from '../images/3-ville/st-lambert/avant-apres/IMG_0836.jpg';
import lonAdd2a from '../images/3-ville/st-lambert/avant-apres/IMG_0837.jpg';
import lonAdd3b from '../images/3-ville/brossard/avant-apres/IMG_0838.jpg';
import lonAdd3a from '../images/3-ville/brossard/avant-apres/IMG_0839.jpg';
import lonAdd4b from '../images/3-ville/brossard/avant-apres/IMG_0846.jpg';
import lonAdd4a from '../images/3-ville/brossard/avant-apres/IMG_0847.jpg';
export default function LongueuilCityPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isFr = currentLang === 'fr';

  // Schema markup

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Secteurs desservis' : 'Service areas', item: `${SITE_URL}/secteurs` },
      { '@type': 'ListItem', position: 3, name: 'Longueuil', item: `${SITE_URL}/secteurs/longueuil` },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau - Longueuil',
    url: `${SITE_URL}/secteurs/longueuil`,
    telephone: COMPANY_PHONE_E164,
    areaServed: [
      { '@type': 'City', name: 'Longueuil' },
      { '@type': 'Neighborhood', name: 'Vieux-Longueuil' },
      { '@type': 'Neighborhood', name: 'Saint-Hubert' },
      { '@type': 'Neighborhood', name: 'Greenfield Park' },
    ],
  };

  // Section 3 - Checkmarks

  const checkmarks = isFr ? [
    'Deux réalités sur le même territoire - Tours des années 1960-1970 près du métro et maisons de pierre ou de brique du Vieux-Longueuil, près du fleuve.',
    'Efflorescence traitée avant de peindre - Dépôts blancs sur brique nettoyés à sec et source d\'humidité vérifiée, sinon le revêtement décolle vite.',
    'Logistique d\'immeuble en tour - Accès, ascenseurs, corridors et règles de voisins planifiés avant d\'ouvrir les pots.',
    'Préparation adaptée à la maçonnerie du Vieux - Humidité du Saint-Laurent et sels minéraux pris en compte avant toute peinture de façade.',
    'Connaissance des secteurs de Longueuil - Vieux-Longueuil, Saint-Hubert et Greenfield Park n\'impliquent pas la même méthode; l\'approche s\'adapte.',
  ] : [
    'Two realities on the same territory - 1960s-1970s towers near the metro and stone or brick homes in Old Longueuil, near the river.',
    'Efflorescence treated before painting - White deposits on brick cleaned dry and moisture source checked, or the coating peels quickly.',
    'Tower building logistics - Access, elevators, corridors and neighbor rules planned before opening the cans.',
    'Prep suited to Old Town masonry - St. Lawrence humidity and mineral salts accounted for before any facade paint.',
    'Knowledge of Longueuil sectors - Old Longueuil, Saint-Hubert and Greenfield Park do not all need the same method; the approach adapts.',
  ];

  // Section 4 - Contextes longueuillois

  const contexts = isFr ? [
    {
      number: '01',
      title: 'Maison de brique près du fleuve',
      description: 'Près du Saint-Laurent, l\'efflorescence est fréquente sur la brique. On nettoie les dépôts à sec, on vérifie la source d\'humidité, puis seulement on applique un revêtement adapté, sinon la peinture décolle.',
    },
    {
      number: '02',
      title: 'Tour à logements près du métro',
      description: 'Immeubles des années 1960-1970 : coordination des accès, protection des corridors, ascenseurs et horaires respectueux des voisins. Ce n\'est pas la même planification qu\'une maison individuelle.',
    },
    {
      number: '03',
      title: 'Maison ou plex du Vieux-Longueuil',
      description: 'Pierre, brique et proximité du fleuve : la préparation de façade compte autant que la couleur finale. On adapte produits et méthode au support, pas à une recette unique.',
    },
    {
      number: '04',
      title: 'Maison familiale à Saint-Hubert ou Greenfield Park',
      description: 'Chantier en secteur résidentiel : protections, séquence des pièces et rythme adapté à une maison occupée, pour limiter l\'impact sur le quotidien familial.',
    },
    {
      number: '05',
      title: 'Rafraîchissement avant vente à Longueuil',
      description: 'Scope cadré et échéancier serré pour présenter une propriété plus claire, que ce soit en tour près du métro ou en maison de quartier à Saint-Hubert.',
    },
  ] : [
    {
      number: '01',
      title: 'Brick home near the river',
      description: 'Near the St. Lawrence, efflorescence is common on brick. We dry-clean deposits, check the moisture source, then only apply a suitable coating, or the paint peels.',
    },
    {
      number: '02',
      title: 'Apartment tower near the metro',
      description: '1960s-1970s buildings: access coordination, corridor protection, elevators and schedules that respect neighbors. It is not the same planning as a single-family home.',
    },
    {
      number: '03',
      title: 'Old Longueuil house or plex',
      description: 'Stone, brick and proximity to the river: facade prep matters as much as the final color. We adapt products and method to the substrate, not a single recipe.',
    },
    {
      number: '04',
      title: 'Family home in Saint-Hubert or Greenfield Park',
      description: 'Job in a residential sector: protections, room sequencing and a pace suited to an occupied home, to limit impact on daily family life.',
    },
    {
      number: '05',
      title: 'Pre-sale refresh in Longueuil',
      description: 'Defined scope and a tight schedule to present a clearer property, whether in a tower near the metro or a neighborhood home in Saint-Hubert.',
    },
  ];

  // Section 5 - Avant/apres Longueuil

  const longueuilBeforeAfterPairs = [

    {
      before: lonImg7990,
      after: lonImg7988,
      description: isFr ? 'Peinture résidentielle - Maison à Greenfield Park' : 'Residential painting - House in Greenfield Park',
    },
    
    {
      before: lonImg0830,
      after: lonImg0831,
      description: isFr ? 'Peinture extérieure - Revêtement de maison à Longueuil' : 'Exterior painting - House siding in Longueuil',
    },

    {
      before: bedroomBefore,
      after: bedroomAfter,
      description: isFr ? 'Peinture résidentielle - Chambre à Longueuil' : 'Residential painting - Bedroom in Longueuil',
    },

  { before: lonAdd1b, after: lonAdd1a, description: 'Balcon et escalier - peinture' },
  { before: lonAdd2b, after: lonAdd2a, description: 'Cadrage de fenêtre - plâtre et peinture' },
  { before: lonAdd3b, after: lonAdd3a, description: 'Intérieur - rafraîchissement' },
  { before: lonAdd4b, after: lonAdd4a, description: 'Salon - murs et boiseries' },
];

  // Section 6 - Pourquoi nous choisir

  const whyUsCards = isFr ? [
    {
      number: '01',
      title: 'Efflorescence gérée avant la peinture',
      description: 'Près du fleuve, les sels minéraux sur la brique se nettoient à sec. Peindre par-dessus sans traiter la source d\'humidité fait éclater la nouvelle couche.',
    },
    {
      number: '02',
      title: 'Méthode tour vs Vieux-Longueuil',
      description: 'En tour, la logistique d\'immeuble domine. Dans le Vieux, c\'est la maçonnerie et l\'humidité qui dictent la préparation.',
    },
    {
      number: '03',
      title: 'Chantier adapté au secteur',
      description: 'Vieux-Longueuil, Saint-Hubert ou Greenfield Park : accès, voisinage et type de bâti planifiés dès la soumission.',
    },
  ] : [
    {
      number: '01',
      title: 'Efflorescence handled before paint',
      description: 'Near the river, mineral salts on brick are cleaned dry. Painting over them without treating the moisture source makes the new coat burst.',
    },
    {
      number: '02',
      title: 'Tower vs Old Longueuil method',
      description: 'In towers, building logistics dominate. In Old Town, masonry and humidity drive the prep.',
    },
    {
      number: '03',
      title: 'Job adapted to the sector',
      description: 'Old Longueuil, Saint-Hubert or Greenfield Park: access, neighbors and building type planned from the quote.',
    },
  ];

  // Section 7 - FAQ Longueuil

  const longueuilFaqs = [
    {
      question: isFr
        ? 'Il y a des taches blanches poudreuses sur ma brique, est-ce un problème avant de peindre?'
        : 'There are powdery white stains on my brick, is that a problem before painting?',
      answer: isFr
        ? "Ces dépôts, appelés efflorescence, sont fréquents près du fleuve à Longueuil en raison du taux d'humidité ambiant. Il faut les nettoyer à sec (jamais à l'eau, qui les fait revenir) et vérifier la source d'humidité avant d'appliquer un revêtement, sans quoi la peinture décolle rapidement."
        : 'These deposits, called efflorescence, are common near the river in Longueuil due to ambient humidity. They must be cleaned dry (never with water, which brings them back) and the source of moisture checked before applying a coating, otherwise the paint peels quickly.',
    },
    {
      question: isFr
        ? 'Approchez-vous de la même façon une tour près du métro et une maison du Vieux-Longueuil?'
        : 'Do you approach a tower near the metro the same way as a home in Old Longueuil?',
      answer: isFr
        ? "Non. Longueuil combine des tours à logements des années 1960-1970 et des maisons de pierre ou de brique près du fleuve. En tour, la logistique d'immeuble domine; dans le Vieux-Longueuil, c'est surtout l'humidité, l'efflorescence et la préparation de la maçonnerie qui dictent la méthode."
        : 'No. Longueuil combines 1960s-1970s apartment towers and stone or brick homes near the river. In towers, building logistics dominate; in Old Longueuil, humidity, efflorescence and masonry prep drive the method.',
    },
    {
      question: isFr ? 'Est-ce que vous vous déplacez partout à Longueuil?' : 'Do you travel throughout Longueuil?',
      answer: isFr
        ? "Oui. Nous desservons Longueuil et ses principaux secteurs, dont Vieux-Longueuil, Saint-Hubert et Greenfield Park, selon le type de projet. Lors de la soumission, nous confirmons rapidement la disponibilité et l'échéancier selon votre secteur."
        : 'Yes. We serve Longueuil and its main sectors, including Vieux-Longueuil, Saint-Hubert and Greenfield Park, depending on the type of project. When quoting, we quickly confirm availability and scheduling based on your area.',
    },
    {
      question: isFr
        ? 'Intervenez-vous dans les tours à logements près du métro à Longueuil?'
        : 'Do you work in apartment towers near the metro in Longueuil?',
      answer: isFr
        ? "Oui. Ces immeubles des années 1960-1970 demandent surtout une bonne coordination : accès, ascenseurs, protection des corridors et respect des voisins. Ce n'est pas la même planification qu'une maison de pierre du Vieux-Longueuil."
        : 'Yes. Those 1960s-1970s buildings mainly need solid coordination: access, elevators, corridor protection and consideration for neighbors. It is not the same planning as a stone house in Old Longueuil.',
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
    { label: 'Peintre à Brossard', to: '/secteurs/brossard' },
    { label: 'Voir nos réalisations', to: '/realisations' },
  ] : [
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Interior painting', to: '/services/peinture-interieure' },
    { label: 'Exterior painting', to: '/services/peinture-exterieure' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Painter in Brossard', to: '/secteurs/brossard' },
    { label: 'View our projects', to: '/realisations' },
  ];

  // Render

  return (
    <Fragment>
      <SEOHead
        title={
          isFr
            ? 'Peintre à Longueuil | Résidentiel et commercial | Le Lever du Pinceau'
            : 'Painter in Longueuil | Residential and commercial | Le Lever du Pinceau'
        }
        description={
          isFr
            ? 'Peintre à Longueuil : Vieux près du fleuve, tours près du métro, Saint-Hubert et Greenfield Park. Efflorescence, intérieur et extérieur. Soumission gratuite.'
            : 'Painter in Longueuil: Old Town by the river, towers near the metro, Saint-Hubert and Greenfield Park. Efflorescence, interior and exterior. Free quote.'
        }
        canonicalPath="/secteurs/longueuil"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqPageSchema]}
      />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Longueuil"
          title={isFr ? 'Peintre à Longueuil' : 'Painter in Longueuil'}
          subtitle={
            isFr
              ? 'Tours près du métro, Vieux-Longueuil et maisons de quartier.'
              : 'Towers near the metro, Old Longueuil and neighborhood homes.'
          }
          description={
            isFr
              ? 'Efflorescence, maçonnerie du Vieux et logistique de tours près du métro.'
              : 'Efflorescence, Old Town masonry and tower logistics near the metro.'
          }
          imageBackground={headerLongueuil}
          imageAlt={
            isFr
              ? 'Peintre professionnel à Longueuil - Le Lever du Pinceau'
              : 'Professional painter in Longueuil - Le Lever du Pinceau'
          }
          buttonText={isFr ? 'Soumission gratuite' : 'Free quote'}
          breadcrumb={[
            { label: isFr ? 'Accueil' : 'Home', to: '/' },
            { label: isFr ? 'Secteurs desservis' : 'Service areas', to: '/secteurs' },
            { label: 'Longueuil' },
          ]}
          secondaryCta={{
            label: isFr ? 'Nos réalisations' : 'Our projects',
            to: '/realisations',
          }}
        />

        {/* SECTION 3 - Checkmarks Longueuil */}
        <CityWhyUsSection
          cityName="Longueuil"
          customTitle={
            isFr
              ? 'Une équipe habituée aux réalités des projets à Longueuil'
              : 'A team familiar with the realities of projects in Longueuil'
          }
          localInsight={
            isFr
              ? "Longueuil combine deux réalités bien distinctes : les tours à logements des années 1960-1970 près du métro, et les maisons de pierre et de brique du Vieux-Longueuil, tout près du fleuve. Cette proximité avec le Saint-Laurent maintient un taux d'humidité plus élevé dans l'air, ce qui favorise l'efflorescence, ces dépôts blanchâtres de sels minéraux qui remontent à la surface de la brique et de la maçonnerie. Peindre par-dessus sans traiter l'efflorescence piège l'humidité et fait éclater la nouvelle couche."
              : 'Longueuil combines two very different realities: 1960s-1970s apartment towers near the metro, and the stone and brick houses of Old Longueuil, close to the river. This proximity to the St. Lawrence keeps air humidity higher, which promotes efflorescence, the whitish mineral salt deposits that rise to the surface of brick and masonry. Painting over it without treating the efflorescence traps moisture and makes the new coat burst.'
          }
          whyUsIntroText={
            isFr
              ? "À Longueuil, la réussite d'un chantier dépend autant de la planification que de la finition."
              : 'In Longueuil, the success of a job depends as much on planning as on the finish.'
          }
          whyUsContent={checkmarks}
        />

        <Container maxW="1440px" px={{ base: 4, md: 6 }}>
          <Stack spacing={0}>

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
          emitSchema={false}
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
                    ? 'Efflorescence, tour près du métro ou page service : allez au détail utile pour Longueuil.'
                    : 'Efflorescence, tower near the metro or a service page: go to the useful detail for Longueuil.'}
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

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr ? 'Obtenez une soumission pour un projet de peinture à Longueuil' : 'Get a quote for a painting project in Longueuil'}
          subtitle={
            isFr
              ? 'Brique près du fleuve, tour près du métro ou maison à Saint-Hubert : décrivez le projet et on confirme la bonne méthode.'
              : 'Brick near the river, tower near the metro or home in Saint-Hubert: describe the project and we confirm the right method.'
          }
        />

      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
