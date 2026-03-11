import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Button,
  HStack,
  Image,
  Grid,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import ServiceCard from '../home-page/ServiceCard';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import serviceHubPhotoHeader from '../images/5-landing-page/Photo/spray man 3000.jpeg';
import imgResidentielle from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import imgCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import imgInterieure from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import imgExterieure from '../images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG';
import imgIndustrielle from '../images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG';

export default function ServicesPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        name: isFr ? 'Services' : 'Services',
        item: 'https://leleverdupinceau.ca/services',
      },
    ],
  };

  const mainServices = [
    {
      image: imgResidentielle,
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      description: isFr
        ? 'Maisons, condos, appartements, logements locatifs et multi-étages.'
        : 'Houses, condos, apartments, rental housing, and multi-story.',
      link: '/services/peinture-residentielle',
      button: isFr ? 'Voir tous les services résidentiels →' : 'View all residential services →',
      subLinks: [
        { label: isFr ? 'Peinture de maison' : 'House painting', to: '/services/peinture-residentielle/maison' },
        { label: isFr ? 'Peinture de condo' : 'Condo painting', to: '/services/peinture-residentielle/condo' },
        { label: isFr ? 'Peinture d’appartement' : 'Apartment painting', to: '/services/peinture-residentielle/appartement' },
      ],
    },
    {
      image: imgCommerciale,
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      description: isFr
        ? 'Bureaux, restaurants, commerces, halls d’entrée et garderies.'
        : 'Offices, restaurants, stores, lobbies, and daycares.',
      link: '/services/peinture-commerciale',
      button: isFr ? 'Voir tous les services commerciaux →' : 'View all commercial services →',
      subLinks: [],
    },
    {
      image: imgIndustrielle,
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      description: isFr
        ? 'Entrepôts, usines, stationnements. Époxy et revêtements spécialisés.'
        : 'Warehouses, factories, parking lots. Epoxy and specialized coatings.',
      link: '/services/peinture-industrielle',
      button: isFr ? 'En savoir plus →' : 'Learn more →',
      subLinks: [],
    },
    {
      image: imgInterieure,
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      description: isFr
        ? 'Murs, plafonds, boiseries, armoires. Finitions nettes et durables.'
        : 'Walls, ceilings, woodwork, cabinets. Crisp, durable finishes.',
      link: '/services/peinture-interieure',
      button: isFr ? 'Voir tous les services intérieurs →' : 'View all interior services →',
      subLinks: [
        { label: isFr ? 'Armoires de cuisine' : 'Kitchen cabinets', to: '/services/peinture-interieure/armoires-de-cuisine' },
      ],
    },
    {
      image: imgExterieure,
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      description: isFr
        ? 'Revêtement, balcon, clôture, fondation. Protection contre le climat québécois.'
        : 'Siding, balcony, fence, foundation. Protection against the Quebec climate.',
      link: '/services/peinture-exterieure',
      button: isFr ? 'Voir tous les services extérieurs →' : 'View all exterior services →',
      subLinks: [],
    },
  ];

  const specializedServices = [
    { title: isFr ? "Teinture extérieure" : "Exterior staining", desc: isFr ? "Patio, clôture, revêtement en bois." : "Patio, fence, wood siding.", link: "/services/teinture-exterieure" },
    { title: isFr ? "Préparation de surfaces" : "Surface preparation", desc: isFr ? "Sablage, rebouchage, plâtre, calfeutrage." : "Sanding, filling, plastering, caulking.", link: "/services/preparation-de-surfaces" },
    { title: isFr ? "Peinture au pistolet" : "Spray painting", desc: isFr ? "Application airless pour grands espaces." : "Airless application for large spaces.", link: "/services/peinture-au-pistolet" },
    { title: isFr ? "Réparation de plâtre et gypse" : "Plaster & drywall repair", desc: isFr ? "Trous, fissures, joints avant peinture." : "Holes, cracks, joints before painting.", link: "/services/reparation-de-platre-et-gypse" },
    { title: isFr ? "Peinture après sinistre" : "Post-disaster painting", desc: isFr ? "Dégât d’eau, feu, moisissure." : "Water damage, fire, mold.", link: "/services/peinture-apres-sinistre" },
  ];

  const seoTitle = isFr
    ? 'Services de peinture à Montréal et Gatineau | Le Lever du Pinceau'
    : 'Painting Services in Montreal & Gatineau | Le Lever du Pinceau';
  const seoDescription = isFr
    ? 'Découvrez nos services de peinture résidentielle, commerciale, industrielle, intérieure et extérieure à Montréal et Gatineau. Peintres professionnels licenciés RBQ. Soumission gratuite.'
    : 'Discover our residential, commercial, industrial, interior and exterior painting services in Montreal and Gatineau. RBQ licensed professional painters. Free quote.';

  return (
    <Fragment>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath="/services"
        schema={breadcrumbSchema}
      />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        {/* Section 1: Hero */}
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="services"
          title={isFr ? "Nos services de peinture à Montréal et Gatineau" : "Our painting services in Montreal and Gatineau"}
          titleSecondLine=""
          subtitle={isFr ? "Peinture résidentielle, commerciale et industrielle. Intérieure et extérieure. Choisissez votre service ci-dessous." : "Residential, commercial and industrial painting. Interior and exterior. Choose your service below."}
          buttonText={isFr ? "Obtenir ma soumission gratuite →" : "Get my free quote →"}
          imageBackground={serviceHubPhotoHeader}
          compactTrustBanner={true}
        >
          <HStack spacing={2} fontSize="sm" color="whiteAlpha.900" mb={4}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }}>
              {isFr ? 'Accueil' : 'Home'}
            </Link>
            <Text>›</Text>
            <Text color="white" fontWeight="bold">
              {isFr ? 'Services' : 'Services'}
            </Text>
          </HStack>
        </HeroSection>

        {/* Section 3: Services principaux */}
        <Box pt={{ base: 20, sm: 24, md: 24, lg: 24, xl: 28, '2xl': 28 }} pb={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center" mb={{ base: 4, md: 8 }}>
                <Heading as="h2" size="section" color="gray.800">
                  {isFr ? "Choisissez le service qui correspond à votre projet" : "Choose the service that fits your project"}
                </Heading>
              </Stack>

              <Flex wrap="wrap" justify="center" gap={{ base: 6, md: 8 }}>
                {mainServices.map((service, index) => (
                  <Box
                    key={index}
                    w="100%"
                    maxW={{ base: '100%', md: '340px', lg: '400px' }}
                    flex={{ base: '0 0 100%', md: '0 0 calc(50% - 16px)', lg: '0 0 calc(33.333% - 22px)' }}
                    display="flex"
                  >
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      stripText={service.description}
                      alt={service.title}
                      noHoverBorder
                      compact
                    >
                      {service.subLinks.length > 0 && (
                        <Stack spacing={1} mb={4} mt={-2}>
                          {service.subLinks.map((subLink, idx) => (
                            <Link key={idx} as={RouterLink} to={subLink.to} color="brand.500" fontWeight="medium" fontSize="sm" _hover={{ textDecoration: 'underline' }}>
                              {subLink.label}
                            </Link>
                          ))}
                        </Stack>
                      )}
                      <Button
                        as={RouterLink}
                        to={service.link}
                        variant="outline"
                        borderColor="brand.400"
                        color="brand.600"
                        _hover={{ bg: 'brand.50', borderColor: 'brand.600', color: 'brand.700' }}
                        size="sm"
                        w="full"
                        mt="auto"
                        whiteSpace="normal"
                        height="auto"
                        minH="40px"
                        py={2}
                        borderRadius="full"
                      >
                        {service.button}
                      </Button>
                    </ServiceCard>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* Section 4: Services spécialisés */}
        <Box py={{ base: 12, md: 16 }} bg="gray.50">
          <Container maxW="1000px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" color="gray.800">
                  {isFr ? "Services spécialisés" : "Specialized services"}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600">
                  {isFr ? "Des solutions complémentaires pour un résultat complet" : "Complementary solutions for a perfect result"}
                </Text>
              </Stack>

              <Stack spacing={4}>
                {specializedServices.map((service, idx) => (
                  <Link
                    key={idx}
                    as={RouterLink}
                    to={service.link}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Flex
                      bg="white"
                      p={5}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                      align="center"
                      gap={4}
                      _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                      transition="all 0.2s"
                    >
                      <CheckCircleIcon color="brand.500" boxSize={6} flexShrink={0} />
                      <Box flex="1">
                        <Heading as="h3" size="sm" mb={1} color="gray.800">
                          {service.title}
                        </Heading>
                        <Text color="gray.600" fontSize="sm">
                          {service.desc}
                        </Text>
                      </Box>
                      <ArrowForwardIcon color="gray.400" />
                    </Flex>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Section 5: Pas certain quel service choisir? */}
        <Box py={{ base: 12, md: 16 }} bg="gray.100" textAlign="center">
          <Container maxW="800px" px={{ base: 4, md: 6 }}>
            <Stack spacing={6} align="center">
              <Heading as="h2" size="lg" color="gray.800">
                {isFr ? "Pas certain quel service choisir?" : "Not sure which service to choose?"}
              </Heading>
              <Text textStyle="bodyLarge" color="gray.600" mb={4}>
                {isFr ? "Décrivez-nous votre projet et nos experts vous orienteront vers la meilleure solution. Soumission gratuite, réponse en moins de 24h." : "Describe your project to us and our experts will guide you to the best solution. Free quote, response in less than 24h."}
              </Text>
              <Button
                onClick={onOpen}
                bg="brand.500"
                color="white"
                size="lg"
                height="60px"
                px={10}
                fontSize="lg"
                borderRadius="full"
                _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
              >
                {isFr ? "Obtenir ma soumission gratuite →" : "Get my free quote →"}
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* Section 6: Liens internes */}
        <Box py={{ base: 12, md: 16 }} bg="white" textAlign="center">
          <Container maxW="800px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Heading as="h2" size="md" color="gray.800">
                {isFr ? "En savoir plus" : "Learn more"}
              </Heading>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} textAlign="left" mx="auto" maxW="600px">
                <Link as={RouterLink} to="/peintre-professionnel" color="brand.500" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Pourquoi engager un peintre professionnel? →" : "Why hire a professional painter? →"}
                </Link>
                <Link as={RouterLink} to="/secteurs" color="brand.500" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Nos secteurs desservis →" : "Our operated sectors →"}
                </Link>
                <Link as={RouterLink} to="/realisations" color="brand.500" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Voir nos réalisations →" : "View our portfolio →"}
                </Link>
                <Link as={RouterLink} to="/services/peinture-exterieure" color="brand.500" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Peinture extérieure à Montréal →" : "Exterior painting in Montreal →"}
                </Link>
                <Link as={RouterLink} to="/services/peinture-interieure" color="brand.500" fontWeight="medium" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Peinture intérieure à Montréal →" : "Interior painting in Montreal →"}
                </Link>
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Section 7: CTA Final */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="blue.900" textAlign="center">
          <Container maxW="800px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8} align="center">
              <Stack spacing={4}>
                <Heading as="h2" size="xl" fontWeight="bold" color="white">
                  {isFr ? "Prêt à commencer votre projet?" : "Ready to start your project?"}
                </Heading>
                <Text fontSize="xl" color="blue.100">
                  {isFr ? "Soumission gratuite en moins de 24h" : "Free quote in less than 24h"}
                </Text>
              </Stack>
              <Button
                onClick={onOpen}
                bg="white"
                color="blue.900"
                size="lg"
                height="60px"
                px={10}
                fontSize="lg"
                borderRadius="full"
                _hover={{ bg: 'blue.50', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                boxShadow="xl"
              >
                {isFr ? "Obtenir ma soumission gratuite →" : "Get my free quote →"}
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
