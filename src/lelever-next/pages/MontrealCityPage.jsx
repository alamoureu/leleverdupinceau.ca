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
  SimpleGrid,
  Flex,
  Button,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import HeroSection from '../home-page/HeroSection';
import SubmissionModal from '../home-page/SubmissionModal';
import TrustBanner from '../home-page/TrustBanner';
import CityWhyUsSection from '../city-pages/CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';

import headerMontreal from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/header.jpg';
import interieureHeroImg from '../images/2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg';
import exterieureHeroImg from '../images/2-services/Page peinture extérieure/Photo header/IMG_0989.JPG';
import residentielleHeroImg from '../images/2-services/Page peinture résidentielle/Photo header/Paint Cut-in Louis.jpeg';
import commercialeHeroImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import quartierPlateau from '../images/pillar-pages/secteur-hub/IMG_7900.jpg';
import quartierVilleMarie from '../images/pillar-pages/secteur-hub/IMG_7902.jpg';
import quartierOutremont from '../images/pillar-pages/secteur-hub/IMG_7898.jpg';
import quartierWestmount from '../images/pillar-pages/secteur-hub/IMG_7896.jpg';
import monImg0818 from '../images/3-ville/Montréal/avant-apres/IMG_0818.jpg';
import monImg0819 from '../images/3-ville/Montréal/avant-apres/IMG_0819.jpg';
import monImg1405 from '../images/3-ville/Montréal/avant-apres/IMG_1405.jpg';
import monImg1406 from '../images/3-ville/Montréal/avant-apres/IMG_1406.jpg';
import monImg5984 from '../images/3-ville/Montréal/avant-apres/IMG_5984 6.jpg';
import monImg5982 from '../images/3-ville/Montréal/avant-apres/IMG_5982 5.jpg';
import porteAvant from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée avant.jpg";
import porteApres from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée après.jpg";
import poutreAcierAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, poutre d_acier avant.jpg';
import poutreAcierApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, poutre d_acier après.jpg';
import chambrePapierPeintAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, chambre papier peint avant.jpg';
import chambrePapierPeintApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, chambre papier peint après.jpg';
import moulureAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, moulure avant.jpg';
import moulureApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, moulure après.jpg';
import verdunAvant from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun avant.jpg';
import verdunApres from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun après.jpg';
import monImg7924 from '../images/3-ville/Montréal/avant-apres/IMG_7924 4.jpg';
import monImg7922 from '../images/3-ville/Montréal/avant-apres/IMG_7922 3.jpg';
import monImg7999 from '../images/3-ville/Montréal/avant-apres/IMG_7999 9.jpg';
import monImg7997 from '../images/3-ville/Montréal/avant-apres/IMG_7997 9.jpg';
import monImg7678 from '../images/3-ville/Montréal/avant-apres/IMG_7678 3.jpg';
import monImg5873 from '../images/3-ville/Montréal/avant-apres/IMG_5873 3.jpg';
import monImg7971 from '../images/3-ville/Montréal/avant-apres/IMG_7971 5.jpg';
import monImg6755 from '../images/3-ville/Montréal/avant-apres/IMG_6755 3.jpg';

export default function MontrealCityPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Schema markup

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: isFr ? 'Accueil' : 'Home', item: 'https://www.leleverdupinceau.ca/' },
      { '@type': 'ListItem', position: 2, name: isFr ? 'Secteurs desservis' : 'Service areas', item: 'https://www.leleverdupinceau.ca/secteurs' },
      { '@type': 'ListItem', position: 3, name: 'Montréal', item: 'https://www.leleverdupinceau.ca/secteurs/montreal' },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau - Montréal',
    url: 'https://www.leleverdupinceau.ca/secteurs/montreal',
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'City', name: 'Montréal' },
      { '@type': 'Neighborhood', name: 'Plateau Mont-Royal' },
      { '@type': 'Neighborhood', name: 'Ville-Marie' },
      { '@type': 'Neighborhood', name: 'Outremont' },
      { '@type': 'Neighborhood', name: 'Westmount' },
      { '@type': 'Neighborhood', name: 'Griffintown' },
    ],
  };

  // Section 3 - Checkmarks

  const checkmarks = isFr ? [
    'Habitués aux condos, plex et maisons de quartier - Le type d\'immeuble change la façon d\'organiser les travaux, les accès et les protections.',
    'Logistique simple en milieu urbain - Stationnement, ascenseur, circulation du matériel, rues étroites et immeubles occupés sont intégrés à la planification.',
    'Échéancier clair pour les projets sensibles - Avant vente, avant emménagement, entre deux locataires ou avant réouverture d\'un commerce.',
    'Chantier propre dans des espaces occupés - À Montréal, les espaces sont souvent compacts et chaque pièce compte. La propreté et la séquence de travail deviennent critiques.',
    'Communication facile du début à la fin - Le projet se déroule mieux quand le client sait exactement quoi attendre, surtout dans un contexte urbain rapide.',
    'Réseau de quartiers déjà desservis - La preuve locale compte: Plateau, Ville-Marie, Outremont, Westmount et autres secteurs déjà travaillés ou ciblés.',
  ] : [
    'Experienced with condos, plex and neighborhood homes - The type of building changes how we organize the work, access and protections.',
    'Simple logistics in urban settings - Parking, elevator, material flow, narrow streets and occupied buildings are all integrated into planning.',
    'Clear schedule for sensitive projects - Before sale, before move-in, between tenants or before reopening a business.',
    'Clean job site in occupied spaces - In Montreal, spaces are often compact and every room matters. Cleanliness and work sequencing become critical.',
    'Easy communication from start to finish - The project runs better when the client knows exactly what to expect, especially in a fast urban context.',
    'Network of neighborhoods already served - Local proof matters: Plateau, Ville-Marie, Outremont, Westmount and other sectors already worked or targeted.',
  ];

  // Section 4 - Contextes montrealais

  const contexts = isFr ? [
    {
      number: '01',
      title: 'Condo centre-ville ou tour résidentielle',
      description: 'Accès, ascenseur, stationnement, espace restreint et immeuble occupé: chaque détail logistique compte dans un projet en hauteur.',
    },
    {
      number: '02',
      title: 'Plex, triplex et immeubles montréalais',
      description: 'Escaliers, circulation verticale, pièces plus morcelées, murs plus anciens et voisinage rapproché demandent une approche structurée.',
    },
    {
      number: '03',
      title: 'Maison unifamiliale en quartier résidentiel',
      description: 'Projet plus fluide, mais avec attentes élevées de protection, d\'échéancier et de finition dans les quartiers recherchés.',
    },
    {
      number: '04',
      title: 'Projet avant vente ou prise de possession',
      description: 'Rafraîchir rapidement l\'espace pour le rendre plus lumineux, plus propre et plus facile à projeter pour un acheteur.',
    },
    {
      number: '05',
      title: 'Commerce de quartier ou bureau',
      description: 'Travaux à planifier sans perturber l\'activité, avec horaires clairs et exécution disciplinée.',
    },
  ] : [
    {
      number: '01',
      title: 'Downtown condo or residential tower',
      description: 'Access, elevator, parking, tight space and occupied building: every logistical detail matters in a high-rise project.',
    },
    {
      number: '02',
      title: 'Plex, triplex and Montreal buildings',
      description: 'Stairs, vertical circulation, more fragmented rooms, older walls and close neighbors require a structured approach.',
    },
    {
      number: '03',
      title: 'Single-family home in a residential neighborhood',
      description: 'A smoother project, but with high expectations for protection, scheduling and finish in sought-after neighborhoods.',
    },
    {
      number: '04',
      title: 'Project before sale or possession',
      description: 'Quickly refreshing the space to make it brighter, cleaner and easier for a buyer to envision.',
    },
    {
      number: '05',
      title: 'Neighborhood business or office',
      description: 'Work to plan without disrupting activity, with clear schedules and disciplined execution.',
    },
  ];

  const contextLinks = {
    '01': '/services/peinture-residentielle/condo',
    '02': '/services/peinture-residentielle/appartement',
    '03': '/services/peinture-residentielle/maison',
    '05': '/services/peinture-commerciale',
  };

  // Section 5 - Services les plus demandes

  const serviceCardImages = {
    '/services/peinture-interieure': interieureHeroImg,
    '/services/peinture-exterieure': exterieureHeroImg,
    '/services/peinture-residentielle': residentielleHeroImg,
    '/services/peinture-commerciale': commercialeHeroImg,
  };

  const serviceCards = isFr ? [
    {
      title: 'Peinture intérieure à Montréal',
      description: 'Condos, plex, maisons et appartements: préparation sérieuse, finition nette et chantier propre du début à la fin.',
      to: '/services/peinture-interieure',
    },
    {
      title: 'Peinture extérieure à Montréal',
      description: 'Façades, balcons, escaliers et revêtements extérieurs adaptés au climat montréalais et aux surfaces locales.',
      to: '/services/peinture-exterieure',
    },
    {
      title: 'Peinture résidentielle',
      description: 'Service complet pour maisons, condos et unités résidentielles: du devis à la livraison finale.',
      to: '/services/peinture-residentielle',
    },
    {
      title: 'Peinture commerciale',
      description: 'Bureaux, commerces et espaces professionnels: exécution rapide, propre et adaptée aux contraintes d\'exploitation.',
      to: '/services/peinture-commerciale',
    },
  ] : [
    {
      title: 'Interior painting in Montreal',
      description: 'Condos, plex, homes and apartments: serious preparation, clean finish and tidy job site from start to finish.',
      to: '/services/peinture-interieure',
    },
    {
      title: 'Exterior painting in Montreal',
      description: 'Facades, balconies, staircases and exterior cladding adapted to Montreal\'s climate and local surfaces.',
      to: '/services/peinture-exterieure',
    },
    {
      title: 'Residential painting',
      description: 'Complete service for homes, condos and residential units: from quote to final delivery.',
      to: '/services/peinture-residentielle',
    },
    {
      title: 'Commercial painting',
      description: 'Offices, businesses and professional spaces: fast, clean execution adapted to operational constraints.',
      to: '/services/peinture-commerciale',
    },
  ];

  // Section 6 - Avant/apres Montreal

  const montrealBeforeAfterPairs = [
    {
      before: monImg7924,
      after: monImg7922,
      description: isFr ? 'Peinture intérieure - Condo Griffintown' : 'Interior painting - Griffintown condo',
    },
    {
      before: monImg7999,
      after: monImg7997,
      description: isFr ? 'Rafraîchissement complet - Plateau Mont-Royal' : 'Full refresh - Plateau Mont-Royal',
    },
    {
      before: monImg7678,
      after: monImg5873,
      description: isFr ? 'Réparation et peinture - Cage d\'escalier résidentielle' : 'Repair and painting - Residential staircase',
    },
    {
      before: monImg7971,
      after: monImg6755,
      description: isFr ? 'Projet extérieur - Maison à Ville Mont-Royal' : 'Exterior project - House in Town of Mount Royal',
    },
    {
      before: monImg5984,
      after: monImg5982,
      description: isFr ? 'Peinture intérieure - Pièce double à Westmount' : 'Interior painting - Double room in Westmount',
    },
    {
      before: chambrePapierPeintAvant,
      after: chambrePapierPeintApres,
      description: isFr ? 'Retrait de papier peint et peinture - Chambre' : 'Wallpaper removal and painting - Bedroom',
    },
    {
      before: porteAvant,
      after: porteApres,
      description: isFr ? "Peinture extérieure - Porte d'entrée" : 'Exterior painting - Front door',
    },
    {
      before: verdunAvant,
      after: verdunApres,
      description: isFr ? 'Escalier en fer forgé - Verdun' : 'Wrought iron staircase - Verdun',
    },
    {
      before: monImg1405,
      after: monImg1406,
      description: isFr ? 'Teinture extérieure - Clôture en bois' : 'Exterior staining - Wood fence',
    },
    {
      before: poutreAcierAvant,
      after: poutreAcierApres,
      description: isFr ? "Peinture intérieure - Poutre d'acier rouillée" : 'Interior painting - Rusted steel beam',
    },
    {
      before: monImg0818,
      after: monImg0819,
      description: isFr ? 'Réparation de plâtre - Coin de mur endommagé' : 'Plaster repair - Damaged wall corner',
    },
    {
      before: moulureAvant,
      after: moulureApres,
      description: isFr ? 'Peinture de boiseries - Moulure' : 'Trim painting - Molding',
    },
  ];

  // Section 7 - FAQ Montreal

  const montrealFaqs = [
    {
      question: isFr
        ? 'Mes murs sont en plâtre, pas en gypse, est-ce que ça change votre approche?'
        : 'My walls are plaster, not drywall, does that change your approach?',
      answer: isFr
        ? "Oui. Le plâtre sur lattis, très répandu dans les plex montréalais d'avant-guerre, réagit différemment au rebouchage et à l'apprêt qu'une cloison de gypse. Nous évaluons et ajustons la préparation en conséquence pour éviter que les réparations ne ressortent sous la peinture."
        : "Yes. Plaster on lath, very common in pre-war Montreal plexes, reacts differently to patching and primer than a drywall partition. We assess and adjust the preparation accordingly so repairs don't show through the paint.",
    },
    {
      question: isFr ? 'Dans quels quartiers de Montréal intervenez-vous?' : 'Which Montreal neighborhoods do you serve?',
      answer: isFr
        ? 'Nous desservons Montréal et plusieurs secteurs comme le Plateau Mont-Royal, Ville-Marie, Outremont, Westmount et d\'autres quartiers selon le projet. Lors de la soumission, nous confirmons rapidement la zone desservie et les disponibilités.'
        : 'We serve Montreal and several sectors such as Plateau Mont-Royal, Ville-Marie, Outremont, Westmount and other neighborhoods depending on the project. When quoting, we quickly confirm the service area and availability.',
    },
    {
      question: isFr ? 'Faites-vous des projets en condo, plex et maison à Montréal?' : 'Do you work on condos, plex and homes in Montreal?',
      answer: isFr
        ? 'Oui. Nous adaptons la planification selon le type d\'immeuble, les accès et les contraintes de chantier propres à chaque contexte montréalais: condos en hauteur, plex avec escaliers intérieurs, maisons de quartier ou appartements occupés.'
        : 'Yes. We adapt our planning to the type of building, access points and job site constraints specific to each Montreal context: high-rise condos, plex with interior stairs, neighborhood homes or occupied apartments.',
    },
    {
      question: isFr ? 'Pouvez-vous intervenir avant une vente ou un emménagement à Montréal?' : 'Can you work before a sale or move-in in Montreal?',
      answer: isFr
        ? "Oui. C'est même l'un des contextes les plus fréquents à Montréal. Nous planifions les travaux pour respecter les fenêtres de temps serrées et remettre l'espace au bon moment, propre et bien fini."
        : "Yes. It's one of the most common contexts in Montreal. We plan the work to respect tight timeframes and deliver the space at the right moment, clean and well finished.",
    },
    {
      question: isFr ? 'Offrez-vous aussi des services commerciaux à Montréal?' : 'Do you also offer commercial services in Montreal?',
      answer: isFr
        ? 'Oui. Nous réalisons des projets commerciaux à Montréal, avec une organisation adaptée aux bureaux, commerces et espaces occupés. Les horaires de travail sont planifiés pour minimiser l\'impact sur les opérations.'
        : 'Yes. We carry out commercial projects in Montreal, with organization adapted to offices, businesses and occupied spaces. Work schedules are planned to minimize impact on operations.',
    },
    {
      question: isFr ? 'Quelle page consulter si je cherche un service précis à Montréal?' : 'Which page should I visit for a specific service in Montreal?',
      answer: isFr
        ? 'Si votre projet concerne l\'intérieur ou l\'extérieur, nos pages de services (/services/peinture-interieure et /services/peinture-exterieure) donnent plus de détails spécifiques. Pour les projets résidentiels ou commerciaux, les pages services correspondantes vous guideront selon le contexte.'
        : 'If your project involves interior or exterior work, our service pages (/services/peinture-interieure and /services/peinture-exterieure) provide more specific details. For residential or commercial projects, the corresponding service pages will guide you based on context.',
    },
  ];

  // Schema FAQPage

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: montrealFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Section 8 - Liens internes

  const serviceLinks = isFr ? [
    { label: 'Peinture intérieure à Montréal', to: '/services/peinture-interieure' },
    { label: 'Peinture extérieure à Montréal', to: '/services/peinture-exterieure' },
    { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
    { label: 'Peinture commerciale', to: '/services/peinture-commerciale' },
    { label: 'Avis clients', to: '/avis-clients' },
    { label: 'Voir nos réalisations', to: '/realisations' },
    { label: 'Obtenir une soumission', to: '/contact' },
  ] : [
    { label: 'Interior painting in Montreal', to: '/services/peinture-interieure' },
    { label: 'Exterior painting in Montreal', to: '/services/peinture-exterieure' },
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Client reviews', to: '/avis-clients' },
    { label: 'Get a quote', to: '/contact' },
  ];

  const montrealQuartierHighlights = [
    { label: 'Plateau Mont-Royal', to: '/secteurs/montreal/plateau-mont-royal', image: quartierPlateau },
    { label: 'Ville-Marie', to: '/secteurs/montreal/ville-marie', image: quartierVilleMarie },
    { label: 'Outremont', to: '/secteurs/montreal/outremont', image: quartierOutremont },
    { label: 'Westmount', to: '/secteurs/montreal/westmount', image: quartierWestmount },
  ];

  // Render

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintre à Montréal | Résidentiel et commercial | Le Lever du Pinceau'
            : 'Painter in Montreal | Residential and commercial | Le Lever du Pinceau'}
        </title>
        <meta
          name="description"
          content={
            isFr
              ? 'Le Lever du Pinceau réalise vos projets de peinture à Montréal: condos, plex, maisons et commerces. Peintres professionnels licenciés RBQ. Soumission gratuite.'
              : 'Le Lever du Pinceau delivers your painting projects in Montreal: condos, plex, homes and businesses. Licensed RBQ professional painters. Free quote.'
          }
        />
        <link rel="canonical" href="https://www.leleverdupinceau.ca/secteurs/montreal" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">

        {/* SECTION 1 - Hero Banner */}
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Montréal"
          title={isFr ? 'Peintre à Montréal' : 'Painter in Montreal'}
          subtitle={
            isFr
              ? 'Peintres de métier pour vos projets résidentiels et commerciaux partout à Montréal.'
              : 'Professional painters for your residential and commercial projects across Montreal.'
          }
          imageBackground={headerMontreal}
        >
          <HStack spacing={3} textStyle="bodyLarge" color="whiteAlpha.900" mb={{ base: 2, md: 4 }} flexWrap="wrap">
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline', color: 'white' }}>
              {isFr ? 'Accueil' : 'Home'}
            </Link>
            <Text>›</Text>
            <Link as={RouterLink} to="/secteurs" _hover={{ textDecoration: 'underline', color: 'white' }}>
              {isFr ? 'Secteurs desservis' : 'Service areas'}
            </Link>
            <Text>›</Text>
            <Text color="white" fontWeight="medium">Montréal</Text>
          </HStack>
        </HeroSection>

        {/* SECTION 2 - Barre de confiance */}
        <TrustBanner />

        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 10, md: 14, lg: 16 }}>
          <Stack spacing={0}>

            {/* SECTION 3 - Checkmarks Montreal */}
            <CityWhyUsSection
              cityName="Montréal"
              customTitle={
                isFr
                  ? 'Une équipe habituée à la réalité des chantiers à Montréal'
                  : 'A team familiar with the reality of job sites in Montreal'
              }
              localInsight={
                isFr
                  ? "Une bonne partie du bâti montréalais, surtout dans les arrondissements centraux (Plateau, Rosemont, Villeray, Sud-Ouest), date d'avant 1950. Ces plex ont souvent des murs en plâtre appliqué sur lattis de bois plutôt qu'en gypse moderne : le plâtre ancien se fissure et se détache différemment, et demande une préparation plus fine (sondage, rebouchage adapté, parfois une toile à plâtre) avant la mise en peinture. Nos équipes distinguent ce type de mur d'une cloison de gypse standard dès l'évaluation, pour proposer la bonne préparation plutôt qu'un traitement générique."
                  : "A large share of Montreal's buildings, especially in the central boroughs (Plateau, Rosemont, Villeray, Sud-Ouest), predate 1950. These plexes often have plaster-on-wood-lath walls rather than modern drywall: old plaster cracks and detaches differently, and requires finer preparation (probing, suitable patching, sometimes plaster mesh) before painting. Our teams tell this type of wall apart from a standard drywall partition at the assessment stage, to propose the right preparation rather than a generic treatment."
              }
              whyUsIntroText={
                isFr
                  ? 'À Montréal, la qualité d\'un projet dépend autant de la logistique que de la finition.'
                  : 'In Montreal, the quality of a project depends as much on logistics as on the finish.'
              }
              whyUsContent={checkmarks}
            />

            {/* SECTION 4 - Contextes montrealais */}
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
                      ? 'Des besoins différents selon le type de projet à Montréal'
                      : 'Different needs depending on the type of project in Montreal'}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {isFr
                      ? 'Un condo centre-ville, un plex à Rosemont ou une maison à Westmount ne se gèrent pas de la même manière.'
                      : 'A downtown condo, a plex in Rosemont or a house in Westmount are not managed the same way.'}
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
                      as={contextLinks[ctx.number] ? RouterLink : undefined}
                      to={contextLinks[ctx.number]}
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
                        {contextLinks[ctx.number] && (
                          <HStack spacing={1} color="brand.500" fontWeight="semibold" fontSize="sm">
                            <Text>{isFr ? 'En savoir plus' : 'Learn more'}</Text>
                            <ArrowForwardIcon />
                          </HStack>
                        )}
                      </Stack>
                    </Box>
                  ))}
                </Flex>
              </Stack>
            </Box>

          </Stack>
        </Container>

        {/* SECTION 5 - Services les plus demandés à Montréal */}
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
                    ? 'Les services de peinture les plus demandés à Montréal'
                    : 'The most requested painting services in Montreal'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? 'Cette page oriente vers le bon service selon le type de projet.'
                    : 'This page guides you to the right service based on your type of project.'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                spacing={{ base: 4, md: 6 }}
                maxW="900px"
                mx="auto"
              >
                {serviceCards.map((card) => (
                  <Box
                    key={card.to}
                    bg="white"
                    borderRadius="xl"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    <Image
                      src={serviceCardImages[card.to]}
                      alt={card.title}
                      w="100%"
                      aspectRatio="16/10"
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <Stack spacing={4} p={{ base: 5, md: 6 }}>
                      <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                        {card.title}
                      </Text>
                      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                        {card.description}
                      </Text>
                      <Link as={RouterLink} to={card.to} _hover={{ textDecoration: 'none' }}>
                        <Button
                          variant="ctaOutline"
                          rightIcon={<ArrowForwardIcon />}
                          borderRadius="full"
                          size="sm"
                          px={5}
                        >
                          {isFr ? 'En savoir plus' : 'Learn more'}
                        </Button>
                      </Link>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 6 - Avant/apres Montreal */}
        <BeforeAfterCarouselSection
          isFr={isFr}
          title={
            isFr
              ? 'Quelques réalisations récentes à Montréal'
              : 'Some recent projects in Montreal'
          }
          subtitle={
            isFr
              ? 'La preuve la plus forte qu\'on connaît Montréal, c\'est de montrer des projets montréalais réels.'
              : 'The strongest proof that we know Montreal is showing real Montreal projects.'
          }
          images={montrealBeforeAfterPairs}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        {/* SECTION 6b - Quartiers desservis a Montreal */}
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
                    ? 'Nous desservons Montréal et ses quartiers'
                    : 'We serve Montreal and its neighborhoods'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {isFr
                    ? 'Une présence locale crédible se construit aussi par la précision territoriale.'
                    : 'A credible local presence is also built on territorial precision.'}
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={{ base: 3, md: 4 }} w="100%" maxW="1100px" mx="auto">
                {montrealQuartierHighlights.map(({ label, to, image }) => (
                  <Box
                    key={label}
                    as={RouterLink}
                    to={to}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    <Image
                      src={image}
                      alt={isFr ? `Peintre ${label}, Montréal` : `Painter ${label}, Montreal`}
                      w="100%"
                      aspectRatio="4/3"
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <HStack justify="center" spacing={2} px={3} py={{ base: 3, md: 4 }}>
                      <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'sm', md: 'md' }} textAlign="center">
                        {label}
                      </Text>
                      <ArrowForwardIcon color="brand.500" boxSize={3} />
                    </HStack>
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
                  ? 'Nous intervenons aussi dans de nombreux autres secteurs résidentiels et commerciaux de Montréal selon le type de projet et les disponibilités.'
                  : 'We also work in many other residential and commercial sectors of Montreal depending on the type of project and availability.'}
              </Text>
            </Stack>
          </Box>
        </Container>

        {/* SECTION 7 - FAQ locale */}
        <FAQSection
          faqsOverride={montrealFaqs}
          title={
            isFr
              ? 'Questions fréquentes sur nos services de peinture à Montréal'
              : 'Frequently asked questions about our painting services in Montreal'
          }
        />

        {/* SECTION 8 - Liens internes critiques */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Stack spacing={3} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {isFr
                    ? 'Explorer les pages liées à votre projet'
                    : 'Explore the pages related to your project'}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="580px" mx="auto">
                  {isFr
                    ? "Cette page est conçue pour vous orienter vers l'information la plus utile pour votre projet à Montréal."
                    : 'This page is designed to guide you to the most useful information for your Montreal project.'}
                </Text>
              </Stack>

              {/* Services + conversion (Wrap pour centrer proprement FR 7 / EN 6 cartes) */}
              <Wrap spacing={{ base: 3, md: 4 }} justify="center" maxW="960px" mx="auto">
                {serviceLinks.map((link) => (
                  <WrapItem key={`${link.label}-${link.to}`}>
                    <Link as={RouterLink} to={link.to} _hover={{ textDecoration: 'none' }}>
                      <Box
                        w={{ base: '100%', sm: '260px', md: '280px' }}
                        px={{ base: 4, md: 5 }}
                        py={{ base: 4, md: 5 }}
                        bg="gray.50"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="xl"
                        textAlign="center"
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
                  </WrapItem>
                ))}
              </Wrap>

            </Stack>
          </Container>
        </Box>

        {/* SECTION 9 - CTA final */}
        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr ? 'Obtenez votre soumission pour un projet de peinture à Montréal' : 'Get your quote for a painting project in Montreal'}
          subtitle={
            isFr
              ? 'Vous avez un projet de peinture résidentielle, commerciale ou industrielle à Montréal ? Nos peintres se déplacent rapidement dans votre secteur.'
              : 'Do you have a residential, commercial or industrial painting project in Montreal? Our painters quickly travel to your area.'
          }
        />

      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
