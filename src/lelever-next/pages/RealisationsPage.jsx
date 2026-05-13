import React, { Fragment, useState, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Link,
  HStack,
  SimpleGrid,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';

import heroImage from '../images/3-ville/Montréal/5. réalisations/IMG_5877.JPG';

import monImg7924 from '../images/3-ville/Montréal/avant-apres/IMG_7924 4.jpg';
import monImg7922 from '../images/3-ville/Montréal/avant-apres/IMG_7922 3.jpg';
import monImg7999 from '../images/3-ville/Montréal/avant-apres/IMG_7999 9.jpg';
import monImg7997 from '../images/3-ville/Montréal/avant-apres/IMG_7997 9.jpg';
import monImg7678 from '../images/3-ville/Montréal/avant-apres/IMG_7678 3.jpg';
import monImg5873 from '../images/3-ville/Montréal/avant-apres/IMG_5873 3.jpg';
import monImg7971 from '../images/3-ville/Montréal/avant-apres/IMG_7971 5.jpg';
import monImg6755 from '../images/3-ville/Montréal/avant-apres/IMG_6755 3.jpg';
import longImg7990 from '../images/3-ville/longueuil/avant-apres/IMG_7990 4.jpg';
import longImg7988 from '../images/3-ville/longueuil/avant-apres/IMG_7988 4.jpg';
import lavalImg7992 from '../images/3-ville/laval/avant-apres/IMG_7992 5.jpg';
import lavalImg7994 from '../images/3-ville/laval/avant-apres/IMG_7994 5.jpg';
import riveSudImg7975 from '../images/3-ville/rive-sud/avant-apres/IMG_7975 4.jpg';
import riveSudImg7974 from '../images/3-ville/rive-sud/avant-apres/IMG_7974 4.jpg';

// ─── Data ───────────────────────────────────────────────────────────────────

function getProjects(isFr) {
  return [
    {
      id: 1,
      title: isFr
        ? 'Peinture intérieure - Condo à Griffintown'
        : 'Interior painting - Condo in Griffintown',
      district: isFr ? 'Griffintown, Montréal' : 'Griffintown, Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: 'Condo',
      context: isFr
        ? "Condo occupé avant emménagement complet. Projet réalisé par zones pour limiter les impacts sur les résidents. Accès par ascenseur, protection des planchers et boiseries."
        : 'Condo occupied before full move-in. Project carried out in zones to limit impact. Elevator access, floor and trim protection.',
      result: isFr
        ? 'Finition nette sur murs et plafonds, couleurs choisies avec le client, chantier propre et délais respectés.'
        : 'Clean finish on walls and ceilings, colors chosen with the client, tidy job site and deadlines met.',
      serviceLink: '/peinture-interieure-montreal',
      serviceLinkLabel: isFr ? 'Peinture intérieure à Montréal' : 'Interior painting in Montreal',
      sectorLink: '/secteurs/montreal',
      sectorLinkLabel: isFr ? 'Nos services à Montréal' : 'Our services in Montreal',
      beforeImg: monImg7924,
      afterImg: monImg7922,
      beforeAlt: isFr
        ? 'Avant - Peinture intérieure condo Griffintown Montréal'
        : 'Before - Interior painting condo Griffintown Montreal',
      afterAlt: isFr
        ? 'Après - Peinture intérieure condo Griffintown Montréal'
        : 'After - Interior painting condo Griffintown Montreal',
      tags: ['Intérieur', 'Résidentiel', 'Montréal', 'Condo'],
    },
    {
      id: 2,
      title: isFr
        ? 'Rafraîchissement complet - Appartement au Plateau'
        : 'Full refresh - Apartment on the Plateau',
      district: isFr ? 'Plateau Mont-Royal, Montréal' : 'Plateau Mont-Royal, Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Appartement' : 'Apartment',
      context: isFr
        ? "Appartement entre deux locataires. Remise à neuf avant relocation, accent sur la luminosité et la propreté des surfaces. Travaux coordonnés avec le propriétaire de l'immeuble."
        : 'Apartment between two tenants. Refreshed before re-leasing, focus on brightness and surface cleanliness. Work coordinated with building owner.',
      result: isFr
        ? 'Murs et plafonds rafraîchis, pièce transformée, prête pour les nouveaux locataires dans les délais convenus.'
        : 'Walls and ceilings refreshed, room transformed, ready for new tenants within agreed deadlines.',
      serviceLink: '/services/peinture-interieure',
      serviceLinkLabel: isFr ? 'Peinture intérieure' : 'Interior painting',
      sectorLink: '/secteurs/montreal',
      sectorLinkLabel: isFr ? 'Nos services à Montréal' : 'Our services in Montreal',
      beforeImg: monImg7999,
      afterImg: monImg7997,
      beforeAlt: isFr
        ? 'Avant - Peinture intérieure appartement Plateau Mont-Royal Montréal'
        : 'Before - Interior painting apartment Plateau Mont-Royal Montreal',
      afterAlt: isFr
        ? 'Après - Peinture intérieure appartement Plateau Mont-Royal Montréal'
        : 'After - Interior painting apartment Plateau Mont-Royal Montreal',
      tags: ['Intérieur', 'Résidentiel', 'Montréal', 'Appartement'],
    },
    {
      id: 3,
      title: isFr
        ? "Réparation et peinture - Cage d'escalier résidentielle"
        : 'Repair and painting - Residential staircase',
      district: isFr ? 'Montréal' : 'Montreal',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? "Cage d'escalier avec surfaces endommagées et murs anciens. Circulation continue pendant les travaux. Réparation des fissures et préparation soignée avant la peinture."
        : 'Staircase with damaged surfaces and older walls. Ongoing traffic during work. Crack repair and careful prep before painting.',
      result: isFr
        ? "Surfaces réparées et uniformisées, finition propre sur toute la hauteur de la cage d'escalier."
        : 'Repaired and uniform surfaces, clean finish throughout the full height of the staircase.',
      serviceLink: '/services/peinture-residentielle',
      serviceLinkLabel: isFr ? 'Peinture résidentielle' : 'Residential painting',
      sectorLink: '/secteurs/montreal',
      sectorLinkLabel: isFr ? 'Nos services à Montréal' : 'Our services in Montreal',
      beforeImg: monImg7678,
      afterImg: monImg5873,
      beforeAlt: isFr
        ? "Avant - Réparation et peinture cage d'escalier résidentielle Montréal"
        : 'Before - Repair and painting residential staircase Montreal',
      afterAlt: isFr
        ? "Après - Réparation et peinture cage d'escalier résidentielle Montréal"
        : 'After - Repair and painting residential staircase Montreal',
      tags: ['Intérieur', 'Résidentiel', 'Montréal', 'Maison'],
    },
    {
      id: 4,
      title: isFr
        ? 'Peinture intérieure - Maison à Chomedey, Laval'
        : 'Interior painting - House in Chomedey, Laval',
      district: isFr ? 'Chomedey, Laval' : 'Chomedey, Laval',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? "Maison unifamiliale à Laval, projet réalisé avant un déménagement. Préparation des surfaces, réparations mineures et peinture complète des pièces principales."
        : 'Single-family home in Laval, project completed before a move. Surface preparation, minor repairs and full painting of main rooms.',
      result: isFr
        ? 'Pièces transformées, couleurs fraîches et uniformes, chantier propre livré dans les délais prévus.'
        : 'Rooms transformed, fresh and uniform colors, clean job site delivered on schedule.',
      serviceLink: '/services/peinture-residentielle',
      serviceLinkLabel: isFr ? 'Peinture résidentielle' : 'Residential painting',
      sectorLink: '/secteurs/laval',
      sectorLinkLabel: isFr ? 'Nos services à Laval' : 'Our services in Laval',
      beforeImg: lavalImg7992,
      afterImg: lavalImg7994,
      beforeAlt: isFr
        ? 'Avant - Peinture intérieure maison Chomedey Laval'
        : 'Before - Interior painting house Chomedey Laval',
      afterAlt: isFr
        ? 'Après - Peinture intérieure maison Chomedey Laval'
        : 'After - Interior painting house Chomedey Laval',
      tags: ['Intérieur', 'Résidentiel', 'Laval', 'Maison'],
    },
    {
      id: 5,
      title: isFr
        ? 'Peinture résidentielle - Maison à Greenfield Park, Longueuil'
        : 'Residential painting - House in Greenfield Park, Longueuil',
      district: isFr ? 'Greenfield Park, Longueuil' : 'Greenfield Park, Longueuil',
      serviceType: isFr ? 'Intérieur' : 'Interior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? "Maison à Greenfield Park, travaux réalisés pièce par pièce pendant que le propriétaire est sur place. Séquence planifiée pour limiter les impacts sur la vie quotidienne."
        : 'House in Greenfield Park, work completed room by room while the owner was on site. Planned sequence to minimize impact on daily life.',
      result: isFr
        ? "Intérieur entièrement rafraîchi, finition nette et propre, délais respectés sans perturbation du quotidien."
        : 'Interior fully refreshed, clean finish, deadlines met without disrupting daily life.',
      serviceLink: '/services/peinture-residentielle',
      serviceLinkLabel: isFr ? 'Peinture résidentielle' : 'Residential painting',
      sectorLink: '/secteurs/longueuil',
      sectorLinkLabel: isFr ? 'Nos services à Longueuil' : 'Our services in Longueuil',
      beforeImg: longImg7990,
      afterImg: longImg7988,
      beforeAlt: isFr
        ? 'Avant - Peinture résidentielle maison Greenfield Park Longueuil'
        : 'Before - Residential painting house Greenfield Park Longueuil',
      afterAlt: isFr
        ? 'Après - Peinture résidentielle maison Greenfield Park Longueuil'
        : 'After - Residential painting house Greenfield Park Longueuil',
      tags: ['Intérieur', 'Résidentiel', 'Longueuil', 'Maison'],
    },
    {
      id: 6,
      title: isFr
        ? 'Peinture extérieure - Maison à Gatineau'
        : 'Exterior painting - House in Gatineau',
      district: 'Gatineau',
      serviceType: isFr ? 'Extérieur' : 'Exterior',
      projectType: isFr ? 'Résidentiel' : 'Residential',
      propertyType: isFr ? 'Maison' : 'House',
      context: isFr
        ? "Maison unifamiliale avec surfaces extérieures variées. Préparation rigoureuse et application en deux couches pour une durabilité maximale face aux hivers de l'Outaouais."
        : 'Single-family home with varied exterior surfaces. Rigorous preparation and two-coat application for maximum durability against Outaouais winters.',
      result: isFr
        ? "Façade transformée, couleurs choisies avec le propriétaire, finition résistante aux conditions climatiques de la région."
        : 'Transformed facade, colors chosen with the owner, finish resistant to regional climate conditions.',
      serviceLink: '/services/peinture-exterieure',
      serviceLinkLabel: isFr ? 'Peinture extérieure' : 'Exterior painting',
      sectorLink: '/secteurs/gatineau',
      sectorLinkLabel: isFr ? 'Nos services à Gatineau' : 'Our services in Gatineau',
      beforeImg: null,
      afterImg: null,
      beforeAlt: null,
      afterAlt: null,
      tags: ['Extérieur', 'Résidentiel', 'Gatineau', 'Maison'],
    },
  ];
}

function getRealisationsFaqs(isFr) {
  return [
    {
      question: isFr
        ? 'Avez-vous déjà réalisé un projet similaire au mien?'
        : 'Have you already completed a project similar to mine?',
      answer: isFr
        ? "Oui. Nos réalisations couvrent une grande variété de contextes: condos centre-ville, plex montréalais, maisons unifamiliales, commerces de quartier et espaces industriels. Si vous avez un type de projet particulier en tête, décrivez-le lors de votre demande de soumission et nous pourrons vous partager des exemples concrets."
        : 'Yes. Our completed projects cover a wide variety of contexts: downtown condos, Montreal plex, single-family homes, neighborhood businesses and industrial spaces. If you have a specific type of project in mind, describe it in your quote request and we can share concrete examples.',
    },
    {
      question: isFr
        ? 'Les photos présentées sont-elles de vrais chantiers?'
        : 'Are the photos shown from real job sites?',
      answer: isFr
        ? "Oui, toutes les photos sur cette page sont des chantiers réels réalisés par notre équipe. Chaque avant/après représente un projet livré à un client véritable, avec son contexte, ses contraintes et ses résultats."
        : 'Yes, all photos on this page are from real job sites completed by our team. Each before/after represents a project delivered to a real client, with its context, constraints and results.',
    },
    {
      question: isFr
        ? 'Travaillez-vous aussi dans des condos, plex et espaces commerciaux?'
        : 'Do you also work in condos, plex and commercial spaces?',
      answer: isFr
        ? "Oui. Nous intervenons dans tous types d'espaces résidentiels et commerciaux: condos en hauteur, plex avec escaliers intérieurs, maisons unifamiliales, bureaux, commerces de détail et espaces industriels. Notre organisation s'adapte au type de propriété et à ses contraintes spécifiques."
        : 'Yes. We work in all types of residential and commercial spaces: high-rise condos, plex with interior stairs, single-family homes, offices, retail businesses and industrial spaces. Our organization adapts to the property type and its specific constraints.',
    },
    {
      question: isFr
        ? "Peut-on demander une soumission à partir d'un projet vu ici?"
        : 'Can I request a quote based on a project seen here?',
      answer: isFr
        ? "Absolument. Si un projet sur cette page ressemble à votre besoin, mentionnez-le dans votre demande de soumission. Cela nous aide à mieux comprendre vos attentes et à préparer une proposition plus précise."
        : 'Absolutely. If a project on this page resembles your need, mention it in your quote request. This helps us better understand your expectations and prepare a more precise proposal.',
    },
    {
      question: isFr
        ? 'Réalisez-vous des projets à Montréal, Laval, Longueuil et Gatineau?'
        : 'Do you carry out projects in Montreal, Laval, Longueuil and Gatineau?',
      answer: isFr
        ? "Oui. Nous intervenons dans l'ensemble de ces territoires. Chaque région a ses particularités: type de bâtiment, accès, conditions climatiques et contraintes logistiques. Notre équipe est habituée à travailler dans ces différents contextes urbains et périurbains."
        : 'Yes. We work throughout all these territories. Each region has its particularities: building type, access, climate conditions and logistical constraints. Our team is accustomed to working in these different urban and suburban contexts.',
    },
  ];
}

function getLocalContextItems(isFr) {
  return [
    {
      number: '01',
      title: isFr ? 'Bâtiments occupés et circulation continue' : 'Occupied buildings and ongoing traffic',
      description: isFr
        ? "Travailler dans un immeuble habité demande une planification rigoureuse: séquences de travail, protection des espaces communs, respect des voisins et coordination avec les règles de l'immeuble."
        : 'Working in an occupied building requires rigorous planning: work sequences, protection of common areas, consideration for neighbors and coordination with building rules.',
    },
    {
      number: '02',
      title: isFr ? 'Accès, stationnement et logistique urbaine' : 'Access, parking and urban logistics',
      description: isFr
        ? "En milieu urbain, le stationnement, l'accès au matériel, les rues étroites et les ascenseurs sont intégrés à la planification dès le départ pour éviter les délais."
        : 'In urban settings, parking, material access, narrow streets and elevators are integrated into planning from the start to avoid delays.',
    },
    {
      number: '03',
      title: isFr ? 'Délais serrés et projets avant vente' : 'Tight deadlines and pre-sale projects',
      description: isFr
        ? "Avant emménagement, avant vente ou entre deux locataires: nous planifions les travaux pour respecter les fenêtres de temps serrées et remettre l'espace propre au bon moment."
        : 'Before move-in, before sale or between tenants: we plan work to respect tight timeframes and deliver a clean space at the right moment.',
    },
    {
      number: '04',
      title: isFr ? 'Météo et travaux extérieurs' : 'Weather and exterior work',
      description: isFr
        ? "Pour les projets extérieurs, les fenêtres météo favorables sont planifiées à l'avance. La température et l'humidité sont surveillées pour garantir une adhérence et une durabilité optimales."
        : 'For exterior projects, favorable weather windows are planned in advance. Temperature and humidity are monitored to ensure optimal adhesion and durability.',
    },
    {
      number: '05',
      title: isFr ? 'Espaces commerciaux en opération' : 'Operating commercial spaces',
      description: isFr
        ? "Bureaux, commerces et locaux professionnels en activité: les horaires sont planifiés en soirée ou en fin de semaine pour minimiser l'impact sur les opérations et les clients."
        : 'Active offices, businesses and professional spaces: schedules are planned for evenings or weekends to minimize impact on operations and customers.',
    },
  ];
}

// ─── Filter tags ─────────────────────────────────────────────────────────────

// key: '' = show all (language-independent); key: FR tag = filter by that FR tag
// EN display labels are mapped per entry
const FILTER_TAGS = [
  { key: '', fr: 'Tous', en: 'All' },
  { key: 'Intérieur', fr: 'Intérieur', en: 'Interior' },
  { key: 'Extérieur', fr: 'Extérieur', en: 'Exterior' },
  { key: 'Résidentiel', fr: 'Résidentiel', en: 'Residential' },
  { key: 'Commercial', fr: 'Commercial', en: 'Commercial' },
  { key: 'Montréal', fr: 'Montréal', en: 'Montreal' },
  { key: 'Laval', fr: 'Laval', en: 'Laval' },
  { key: 'Longueuil', fr: 'Longueuil', en: 'Longueuil' },
  { key: 'Gatineau', fr: 'Gatineau', en: 'Gatineau' },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ProjectCard({ project, isFr }) {
  const hasImages = project.beforeImg && project.afterImg;
  return (
    <Box
      bg="white"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="sm"
      overflow="hidden"
      _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
      transition="all 0.2s"
    >
      {/* Before / After images */}
      {hasImages ? (
        <Stack spacing={0}>
          <Box position="relative" w="100%">
            <Box
              as="img"
              src={project.beforeImg}
              alt={project.beforeAlt}
              w="100%"
              objectFit="cover"
              style={{ aspectRatio: '3/2', display: 'block' }}
              loading="lazy"
              decoding="async"
            />
            <Box
              position="absolute"
              top={3}
              left={3}
              bg="gray.900"
              color="white"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="bold"
              boxShadow="sm"
            >
              {isFr ? 'Avant' : 'Before'}
            </Box>
          </Box>
          <Box position="relative" w="100%" borderTop="2px solid white">
            <Box
              as="img"
              src={project.afterImg}
              alt={project.afterAlt}
              w="100%"
              objectFit="cover"
              style={{ aspectRatio: '3/2', display: 'block' }}
              loading="lazy"
              decoding="async"
            />
            <Box
              position="absolute"
              top={3}
              left={3}
              bg="brand.500"
              color="white"
              px={3}
              py={1}
              borderRadius="md"
              fontSize="xs"
              fontWeight="bold"
              boxShadow="sm"
            >
              {isFr ? 'Après' : 'After'}
            </Box>
          </Box>
        </Stack>
      ) : (
        <Flex
          w="100%"
          bg="gray.100"
          borderBottom="1px solid"
          borderColor="gray.200"
          align="center"
          justify="center"
          direction="column"
          gap={2}
          py={10}
          px={4}
        >
          <Text fontSize="2xl" color="gray.300" lineHeight="1">📷</Text>
          <Text fontSize="sm" color="gray.400" fontWeight="medium" textAlign="center">
            {isFr ? 'Photos à venir' : 'Photos coming soon'}
          </Text>
        </Flex>
      )}

      {/* Project details */}
      <Stack spacing={4} p={{ base: 5, md: 6 }}>
        {/* Tags */}
        <Flex gap={2} flexWrap="wrap">
          <Box
            px={3}
            py={1}
            bg="brand.50"
            color="brand.700"
            borderRadius="full"
            fontSize="xs"
            fontWeight="semibold"
          >
            {project.serviceType}
          </Box>
          <Box
            px={3}
            py={1}
            bg="gray.100"
            color="gray.700"
            borderRadius="full"
            fontSize="xs"
            fontWeight="semibold"
          >
            {project.projectType}
          </Box>
          <Box
            px={3}
            py={1}
            bg="gray.100"
            color="gray.700"
            borderRadius="full"
            fontSize="xs"
            fontWeight="semibold"
          >
            {project.propertyType}
          </Box>
        </Flex>

        <Stack spacing={1}>
          <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" color="gray.800" lineHeight="1.3">
            {project.title}
          </Heading>
          <Text fontSize="sm" color="brand.500" fontWeight="medium">
            {project.district}
          </Text>
        </Stack>

        <Stack spacing={3}>
          <Box>
            <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={1}>
              {isFr ? 'Contexte' : 'Context'}
            </Text>
            <Text fontSize="sm" color="gray.600" lineHeight="1.6">
              {project.context}
            </Text>
          </Box>
          <Box>
            <Text fontSize="xs" fontWeight="bold" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={1}>
              {isFr ? 'Résultat' : 'Result'}
            </Text>
            <Text fontSize="sm" color="gray.700" lineHeight="1.6" fontWeight="medium">
              {project.result}
            </Text>
          </Box>
        </Stack>

        <Stack spacing={2} pt={1}>
          <Link
            as={RouterLink}
            to={project.serviceLink}
            color="brand.500"
            fontSize="sm"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            gap={1}
            _hover={{ textDecoration: 'underline' }}
          >
            <ArrowForwardIcon boxSize={3} />
            {project.serviceLinkLabel}
          </Link>
          <Link
            as={RouterLink}
            to={project.sectorLink}
            color="gray.500"
            fontSize="sm"
            fontWeight="medium"
            display="flex"
            alignItems="center"
            gap={1}
            _hover={{ color: 'brand.500', textDecoration: 'underline' }}
          >
            <ArrowForwardIcon boxSize={3} />
            {project.sectorLinkLabel}
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function RealisationsPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();
  // '' = show all (language-independent so filter survives language toggle)
  const [activeFilter, setActiveFilter] = useState('');

  const projects = getProjects(isFr);
  const realisationsFaqs = getRealisationsFaqs(isFr);
  const localContextItems = getLocalContextItems(isFr);

  const filteredProjects = activeFilter === ''
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  // ── Schemas ─────────────────────────────────────────────────────────────────

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
        name: isFr ? 'Réalisations' : 'Portfolio',
        item: 'https://leleverdupinceau.ca/realisations',
      },
    ],
  };

  // ── Carousel images for Section 3 ───────────────────────────────────────────

  const carouselImages = [
    {
      before: monImg7924,
      after: monImg7922,
      description: isFr
        ? 'Peinture intérieure - Condo Griffintown, Montréal'
        : 'Interior painting - Griffintown condo, Montreal',
    },
    {
      before: monImg7999,
      after: monImg7997,
      description: isFr
        ? 'Rafraîchissement intérieur - Plateau Mont-Royal, Montréal'
        : 'Interior refresh - Plateau Mont-Royal, Montreal',
    },
    {
      before: monImg7678,
      after: monImg5873,
      description: isFr
        ? "Réparation et peinture - Cage d'escalier résidentielle, Montréal"
        : 'Repair and painting - Residential staircase, Montreal',
    },
    {
      before: longImg7990,
      after: longImg7988,
      description: isFr
        ? 'Peinture résidentielle - Maison à Greenfield Park, Longueuil'
        : 'Residential painting - House in Greenfield Park, Longueuil',
    },
    {
      before: monImg7971,
      after: monImg6755,
      description: isFr
        ? 'Projet extérieur - Résidence, Montréal'
        : 'Exterior project - Residence, Montreal',
    },
    {
      before: lavalImg7992,
      after: lavalImg7994,
      description: isFr
        ? 'Peinture intérieure - Maison à Chomedey, Laval'
        : 'Interior painting - House in Chomedey, Laval',
    },
    {
      before: riveSudImg7975,
      after: riveSudImg7974,
      description: isFr
        ? 'Peinture extérieure - Résidence sur la Rive-Sud'
        : 'Exterior painting - Residence on the South Shore',
    },
  ];

  // ── Internal links ───────────────────────────────────────────────────────────

  const internalLinks = [
    {
      label: isFr ? 'Peinture intérieure à Montréal' : 'Interior painting in Montreal',
      to: '/peinture-interieure-montreal',
      description: isFr
        ? 'Condos, plex et appartements - finition professionnelle en milieu urbain.'
        : 'Condos, plex and apartments - professional finish in urban settings.',
    },
    {
      label: isFr ? 'Peinture extérieure à Montréal' : 'Exterior painting in Montreal',
      to: '/peinture-exterieure-montreal',
      description: isFr
        ? 'Façades, balcons et escaliers - surfaces adaptées au climat montréalais.'
        : 'Facades, balconies and staircases - surfaces adapted to Montreal climate.',
    },
    {
      label: isFr ? 'Nos services de peinture' : 'Our painting services',
      to: '/services',
      description: isFr
        ? 'Résidentiel, commercial, intérieur et extérieur - tous les types de projets.'
        : 'Residential, commercial, interior and exterior - all project types.',
    },
    {
      label: isFr ? 'Nos secteurs desservis' : 'Our service areas',
      to: '/secteurs',
      description: isFr
        ? 'Montréal, Laval, Longueuil, Gatineau et la Rive-Sud.'
        : 'Montreal, Laval, Longueuil, Gatineau and the South Shore.',
    },
    {
      label: isFr ? 'Avis clients' : 'Client reviews',
      to: '/avis-clients',
      description: isFr
        ? 'Plus de 850\u00A0clients satisfaits - lisez leurs témoignages.'
        : 'More than 850 satisfied clients - read their testimonials.',
    },
    {
      label: isFr ? 'Obtenir une soumission gratuite' : 'Get a free quote',
      to: '/contact',
      description: isFr
        ? 'Décrivez votre projet et recevez une réponse en moins de 24h.'
        : 'Describe your project and receive a response in less than 24h.',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title={
          isFr
            ? 'Réalisations peinture à Montréal et Gatineau | Le Lever du Pinceau'
            : 'Painting projects in Montreal and Gatineau | Le Lever du Pinceau'
        }
        description={
          isFr
            ? 'Découvrez nos réalisations en peinture résidentielle et commerciale à Montréal, Laval, Longueuil et Gatineau. Projets réels, avant/après et finitions professionnelles.'
            : 'Discover our residential and commercial painting projects in Montreal, Laval, Longueuil and Gatineau. Real projects, before/after and professional finishes.'
        }
        canonicalPath="/realisations"
        schemaArray={[breadcrumbSchema]}
      />

      <SubmissionModal isOpen={isOpen} onClose={onClose} />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        {/* ── Section 1 - Hero Banner ───────────────────────────────────────── */}
        <Box
          position="relative"
          w="100%"
          minW={0}
          minH={{ base: '380px', sm: '420px', md: '520px', lg: '580px', xl: '660px', '2xl': '740px' }}
          h={{ base: 'auto', sm: 'auto', md: '60vh', lg: '65vh', xl: '78vh', '2xl': '82vh' }}
          bgColor="gray.600"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
          overflow="hidden"
        >
          <Image
            src={heroImage}
            alt={
              isFr
                ? 'Réalisations peinture résidentielle et commerciale - Le Lever du Pinceau Montréal'
                : 'Residential and commercial painting projects - Le Lever du Pinceau Montreal'
            }
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            zIndex={0}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.45)"
            zIndex={1}
          />
          <Container
            maxW="1440px"
            h="100%"
            position="relative"
            zIndex={2}
            px={{ base: 4, sm: 4, md: 6, lg: 8 }}
            minW={0}
          >
            <Stack
              h="100%"
              minW={0}
              justify="center"
              pt={{ base: '64px', sm: '70px', md: '70px' }}
              pb={{ base: 10, sm: 12, md: '5vh' }}
            >
              <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6 }} maxW={{ base: '100%', md: '720px', lg: '820px' }}>
                <Heading
                  as="h1"
                  fontWeight="700"
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: '4xl', xl: '5xl', '2xl': '6xl' }}
                  color="white"
                  lineHeight="1.1"
                  minW={0}
                >
                  {isFr
                    ? 'Nos réalisations en peinture à Montréal, Laval, Longueuil et Gatineau'
                    : 'Our painting projects in Montreal, Laval, Longueuil and Gatineau'}
                </Heading>
                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="thin"
                  minW={0}
                  lineHeight="1.5"
                >
                  {isFr
                    ? 'Des projets réels, des transformations visibles et un aperçu concret de notre niveau de finition.'
                    : 'Real projects, visible transformations and a concrete overview of our finish quality.'}
                </Text>
                <Text
                  color="whiteAlpha.900"
                  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                  lineHeight="1.6"
                  maxW={{ base: '560px', md: '640px', lg: '720px' }}
                >
                  {isFr
                    ? 'Condos, maisons, plex, commerces et projets spécialisés: explorez des chantiers réalisés par notre équipe et voyez comment nous travaillons sur le terrain.'
                    : 'Condos, homes, plex, businesses and specialized projects: explore job sites completed by our team and see how we work in the field.'}
                </Text>
                <HStack
                  spacing={{ base: 3, md: 4 }}
                  pt={{ base: 2, sm: 3, md: 4 }}
                  flexWrap="wrap"
                >
                  <Button
                    onClick={onOpen}
                    bg="brand.500"
                    color="white"
                    borderRadius="full"
                    px={{ base: 7, md: 9, lg: 12 }}
                    py={{ base: 3, md: 4, lg: 6 }}
                    minH={{ base: '48px', md: '56px', lg: '64px' }}
                    h="auto"
                    boxShadow="lg"
                    _hover={{ bg: 'brand.600' }}
                    whiteSpace="normal"
                    lineHeight="1.15"
                    fontWeight="semibold"
                    fontSize={{ base: 'sm', md: 'md' }}
                    w={{ base: '100%', sm: 'auto' }}
                    maxW={{ base: '100%', sm: '400px' }}
                  >
                    {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
                    <ArrowForwardIcon ml={2} />
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/services"
                    variant="outline"
                    borderColor="whiteAlpha.800"
                    color="white"
                    borderRadius="full"
                    px={{ base: 6, md: 8, lg: 10 }}
                    py={{ base: 3, md: 4, lg: 6 }}
                    minH={{ base: '48px', md: '56px', lg: '64px' }}
                    h="auto"
                    _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                    whiteSpace="normal"
                    lineHeight="1.15"
                    fontWeight="medium"
                    fontSize={{ base: 'sm', md: 'md' }}
                    w={{ base: '100%', sm: 'auto' }}
                    maxW={{ base: '100%', sm: '320px' }}
                  >
                    {isFr ? 'Voir nos services' : 'View our services'}
                    <ArrowForwardIcon ml={2} />
                  </Button>
                </HStack>
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* ── Section 2 - Barre de confiance ───────────────────────────────── */}
        <Box
          bg="gray.50"
          borderTop="1px solid"
          borderTopColor="gray.200"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
        >
          <TrustBanner />
        </Box>

        {/* ── Section 3 - Projets vedettes avant / après ────────────────────── */}
        <BeforeAfterCarouselSection
          isFr={isFr}
          title={isFr ? 'Des transformations visibles, projet après projet' : 'Visible transformations, project after project'}
          subtitle={
            isFr
              ? 'Une sélection de chantiers récents qui montrent le niveau de finition, la variété des projets et la qualité du travail livré.'
              : 'A selection of recent job sites showing the level of finish, variety of projects and quality of work delivered.'
          }
          images={carouselImages}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 4, md: 6 }}
        />

        {/* ── Sections 4+5 - Cartes projet + Filtres ───────────────────────── */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 10 }}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" fontWeight="bold" color="gray.800">
                  {isFr ? 'Explorez les réalisations par type de projet' : 'Explore projects by type'}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" maxW="720px" mx="auto" lineHeight="1.7">
                  {isFr
                    ? 'Chaque projet est identifié par son type, son contexte et sa localisation. Filtrez selon vos besoins pour trouver des réalisations proches de votre situation.'
                    : 'Each project is identified by its type, context and location. Filter by your needs to find projects similar to your situation.'}
                </Text>
              </Stack>

              {/* Filter buttons - client-side only, no URL generation */}
              <Flex gap={2} flexWrap="wrap" justify="center">
                {FILTER_TAGS.map(({ key, fr, en }) => {
                  const label = isFr ? fr : en;
                  const isActive = activeFilter === key;
                  return (
                    <Button
                      key={key === '' ? '__all__' : key}
                      onClick={() => setActiveFilter(key)}
                      size="sm"
                      borderRadius="full"
                      px={4}
                      fontWeight={isActive ? 'bold' : 'medium'}
                      bg={isActive ? 'brand.500' : 'white'}
                      color={isActive ? 'white' : 'gray.700'}
                      border="1px solid"
                      borderColor={isActive ? 'brand.500' : 'gray.200'}
                      _hover={{
                        bg: isActive ? 'brand.600' : 'gray.50',
                        borderColor: 'brand.500',
                      }}
                      transition="all 0.15s"
                    >
                      {label}
                    </Button>
                  );
                })}
              </Flex>

              {/* Project cards grid */}
              {filteredProjects.length > 0 ? (
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={{ base: 6, md: 8 }}
                >
                  {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isFr={isFr} />
                  ))}
                </SimpleGrid>
              ) : (
                <Box textAlign="center" py={12} color="gray.500">
                  <Text fontSize={{ base: 'md', md: 'lg' }}>
                    {isFr
                      ? 'Aucun projet dans cette catégorie pour le moment.'
                      : 'No projects in this category for now.'}
                  </Text>
                </Box>
              )}
            </Stack>
          </Container>
        </Box>

        {/* ── Section 6 - Preuve locale et contexte des projets ─────────────── */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 10 }}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" fontWeight="bold" color="gray.800">
                  {isFr
                    ? 'Des projets réalisés dans des contextes bien réels'
                    : 'Projects completed in genuinely real contexts'}
                </Heading>
                <Text
                  textStyle="bodyLarge"
                  color="gray.600"
                  maxW="760px"
                  mx="auto"
                  lineHeight="1.7"
                >
                  {isFr
                    ? "Chaque chantier a ses propres contraintes: voisins, accès, stationnement, bâtiment occupé, météo ou horaires d'immeuble. Ce n'est pas seulement la finition qui compte - c'est la capacité à livrer dans des conditions réelles et maîtrisées."
                    : "Each job site has its own constraints: neighbors, access, parking, occupied building, weather or building schedules. It's not just about the finish - it's the ability to deliver under real, controlled conditions."}
                </Text>
              </Stack>

              <Flex flexWrap="wrap" gap={{ base: 4, md: 6 }} justify="center">
                {localContextItems.map((item) => (
                  <Box
                    key={item.number}
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
                        {item.number}
                      </Text>
                      <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                        {item.title}
                      </Text>
                      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                        {item.description}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* ── Section 7 - FAQ ───────────────────────────────────────────────── */}
        <FAQSection
          faqsOverride={realisationsFaqs}
          title={isFr ? 'Questions fréquentes sur nos réalisations' : 'Frequently asked questions about our projects'}
        />

        {/* ── Section 8 - Liens internes stratégiques ───────────────────────── */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 10 }}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" fontWeight="bold" color="gray.800">
                  {isFr ? 'Aller plus loin selon votre type de projet' : 'Go further based on your project type'}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" maxW="680px" mx="auto" lineHeight="1.7">
                  {isFr
                    ? 'Chaque page ci-dessous approfondit un service ou un secteur spécifique pour vous aider à trouver exactement ce que vous cherchez.'
                    : 'Each page below goes deeper into a specific service or area to help you find exactly what you need.'}
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={{ base: 4, md: 6 }}>
                {internalLinks.map((item) => (
                  <Link
                    key={item.to}
                    as={RouterLink}
                    to={item.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      p={{ base: 5, md: 6 }}
                      bg="gray.50"
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.200"
                      h="100%"
                      _hover={{ borderColor: 'brand.500', bg: 'brand.50', transform: 'translateY(-2px)', boxShadow: 'sm' }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={2}>
                        <HStack spacing={2} align="center">
                          <ArrowForwardIcon color="brand.500" boxSize={4} flexShrink={0} />
                          <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'sm', md: 'md' }}>
                            {item.label}
                          </Text>
                        </HStack>
                        <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                          {item.description}
                        </Text>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ── Section 9 - CTA final ─────────────────────────────────────────── */}
        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr ? 'Prêt à voir ce que nous pourrions faire chez vous\u00A0?' : 'Ready to see what we could do for you?'}
          subtitle={
            isFr
              ? 'Décrivez-nous votre projet et obtenez une soumission gratuite en moins de 24h.'
              : 'Describe your project and get a free quote in less than 24h.'
          }
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
        />
      </Box>
    </Fragment>
  );
}
