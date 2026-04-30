import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Button,
  Icon,
  HStack,
  Flex,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';
import TrustBanner from '../home-page/TrustBanner';

import heroSecteurHub from '../images/pillar-pages/secteur-hub/IMG_7894.jpg';
import quartierWestmount from '../images/pillar-pages/secteur-hub/IMG_7896.jpg';
import quartierOutremont from '../images/pillar-pages/secteur-hub/IMG_7898.jpg';
import quartierPlateau from '../images/pillar-pages/secteur-hub/IMG_7900.jpg';
import quartierVilleMarie from '../images/pillar-pages/secteur-hub/IMG_7902.jpg';
import montrealSecteur from '../images/mtl.png';
import lavalSecteur from '../images/laval.png';
import longueuilSecteur from '../images/longueuil.png';
import riveSudSecteur from '../images/brossard.png';
import gatineauSecteur from '../images/pillar-pages/IMG_2585.jpg';

export default function SecteursDesservisPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isFr = currentLang === 'fr';

  // ─── Schema markup ──────────────────────────────────────────────────────────

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
        item: 'https://leleverdupinceau.ca/secteurs',
      },
    ],
  };

  const areaServedSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: 'Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca',
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'City', name: 'Montréal' },
      { '@type': 'City', name: 'Gatineau' },
      { '@type': 'City', name: 'Laval' },
      { '@type': 'City', name: 'Longueuil' },
      { '@type': 'AdministrativeArea', name: 'Rive-Sud' },
    ],
  };

  // ─── Section 3 - City cards ──────────────────────────────────────────────────

  const citiesRow1 = [
    {
      name: 'Montréal',
      description: isFr
        ? 'Peinture résidentielle, commerciale et industrielle sur toute l\'île.'
        : 'Residential, commercial and industrial painting across the entire island.',
      link: '/secteurs/montreal',
      image: montrealSecteur,
      imgScale: 1.25,
      imgTop: '-20px',
    },
    {
      name: 'Gatineau',
      description: isFr
        ? 'Peinture résidentielle et commerciale à Hull, Aylmer et Gatineau.'
        : 'Residential and commercial painting in Hull, Aylmer and Gatineau.',
      link: '/secteurs/gatineau',
      image: gatineauSecteur,
      imgScale: 1,
      imgTop: '0',
    },
    {
      name: 'Rive-Sud',
      description: isFr
        ? 'Longueuil, Brossard, Saint-Lambert, Saint-Bruno et environs.'
        : 'Longueuil, Brossard, Saint-Lambert, Saint-Bruno and surrounding areas.',
      link: '/secteurs/rive-sud',
      image: riveSudSecteur,
      imgScale: 1,
      imgTop: '0',
    },
  ];

  const citiesRow2 = [
    {
      name: 'Laval',
      description: isFr
        ? 'Services pour maisons, condos, commerces et entrepôts.'
        : 'Services for homes, condos, businesses and warehouses.',
      link: '/secteurs/laval',
      image: lavalSecteur,
      imgScale: 1,
      imgTop: '0',
    },
    {
      name: 'Longueuil',
      description: isFr
        ? 'Peinture intérieure, extérieure, résidentielle et commerciale.'
        : 'Interior, exterior, residential and commercial painting.',
      link: '/secteurs/longueuil',
      image: longueuilSecteur,
      imgScale: 1,
      imgTop: '0',
    },
  ];

  // ─── Section 4 - Quartiers Montréal ─────────────────────────────────────────

  const quartiersData = [
    {
      name: 'Westmount',
      description: isFr
        ? 'Maisons de prestige, boiseries d\'époque, service haut de gamme.'
        : 'Prestigious homes, period woodwork, high-end service.',
      link: '/secteurs/montreal/westmount',
      image: quartierWestmount,
    },
    {
      name: 'Outremont',
      description: isFr
        ? 'Peinture résidentielle de qualité pour propriétés de prestige.'
        : 'Quality residential painting for prestigious properties.',
      link: '/secteurs/montreal/outremont',
      image: quartierOutremont,
    },
    {
      name: 'Plateau-Mont-Royal',
      description: isFr
        ? 'Triplex, duplex patrimoniaux, escaliers extérieurs et moulures.'
        : 'Heritage triplex, duplex, exterior staircases and mouldings.',
      link: '/secteurs/montreal/plateau-mont-royal',
      image: quartierPlateau,
    },
    {
      name: 'Ville-Marie / Centre-Ville',
      description: isFr
        ? 'Condos de luxe, bureaux et commerces du centre-ville.'
        : 'Luxury condos, offices and downtown businesses.',
      link: '/secteurs/montreal/ville-marie',
      image: quartierVilleMarie,
    },
  ];

  // ─── Section 6 - Internal service links ─────────────────────────────────────

  const serviceLinks = isFr ? [
    { label: 'Peinture intérieure', to: '/services/peinture-interieure' },
    { label: 'Peinture extérieure', to: '/services/peinture-exterieure' },
    { label: 'Peinture résidentielle', to: '/services/peinture-residentielle' },
    { label: 'Peinture commerciale', to: '/services/peinture-commerciale' },
    { label: 'Pourquoi un peintre professionnel?', to: '/peintre-professionnel' },
  ] : [
    { label: 'Interior painting', to: '/services/peinture-interieure' },
    { label: 'Exterior painting', to: '/services/peinture-exterieure' },
    { label: 'Residential painting', to: '/services/peinture-residentielle' },
    { label: 'Commercial painting', to: '/services/peinture-commerciale' },
    { label: 'Why hire a professional painter?', to: '/peintre-professionnel' },
  ];

  // ─── City card component ─────────────────────────────────────────────────────

  const CityCard = ({ city }) => (
    <Link
      as={RouterLink}
      to={city.link}
      _hover={{ textDecoration: 'none' }}
      w="100%"
      h="100%"
      display="block"
    >
      <Box
        position="relative"
        borderRadius="2xl"
        overflow="hidden"
        border="1px solid"
        borderColor="gray.200"
        cursor="pointer"
        transition="all 0.2s"
        bg="white"
        minH={{ base: '260px', md: '300px' }}
        h="100%"
        _hover={{
          borderColor: 'brand.500',
          boxShadow: 'xl',
          transform: 'translateY(-4px)',
        }}
      >
        <Image
          src={city.image}
          alt={city.name}
          position="absolute"
          top={city.imgTop}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          zIndex={0}
          transform={city.imgScale !== 1 ? `scale(${city.imgScale})` : undefined}
          loading="lazy"
          decoding="async"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-b, rgba(2, 42, 104, 0.3), rgba(2, 42, 104, 0.85))"
          zIndex={1}
        />
        <Stack
          position="relative"
          zIndex={2}
          p={{ base: 6, md: 8 }}
          h="100%"
          justify="flex-end"
          spacing={3}
        >
          <HStack spacing={3}>
            <Icon
              as={FontAwesomeIcon}
              icon={faMapMarkerAlt}
              color="white"
              boxSize={5}
            />
            <Heading as="h3" size="subsection" color="white">
              {city.name}
            </Heading>
          </HStack>
          <Text color="whiteAlpha.900" textStyle="bodyLarge" lineHeight="1.6" fontWeight="medium">
            {city.description}
          </Text>
          <HStack spacing={2} color="white" pt={2}>
            <Text textStyle="caption" fontWeight="bold">
              {isFr ? 'Voir le secteur' : 'View area'}
            </Text>
            <ArrowForwardIcon boxSize={4} />
          </HStack>
        </Stack>
      </Box>
    </Link>
  );

  // ─── Breadcrumb (rendered as hero children) ──────────────────────────────────

  const heroBreadcrumb = (
    <HStack
      spacing={2}
      fontSize={{ base: 'sm', md: 'md' }}
      color="whiteAlpha.800"
      flexWrap="wrap"
      mb={1}
    >
      <Link
        as={RouterLink}
        to="/"
        color="whiteAlpha.800"
        _hover={{ color: 'white', textDecoration: 'underline' }}
        fontSize={{ base: 'sm', md: 'md' }}
      >
        {isFr ? 'Accueil' : 'Home'}
      </Link>
      <Text color="whiteAlpha.600" fontSize={{ base: 'sm', md: 'md' }}>›</Text>
      <Text color="white" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
        {isFr ? 'Secteurs desservis' : 'Service areas'}
      </Text>
    </HStack>
  );

  return (
    <Fragment>
      <SEOHead
        title={
          isFr
            ? 'Secteurs desservis | Peintre Grand Montréal et Gatineau | Le Lever du Pinceau'
            : 'Service areas | Painter Greater Montreal and Gatineau | Le Lever du Pinceau'
        }
        description={
          isFr
            ? 'Le Lever du Pinceau dessert Montréal, Gatineau, Laval, Longueuil et la Rive-Sud. Peintres professionnels licenciés RBQ pour vos projets résidentiels et commerciaux. Soumission gratuite en 24h.'
            : 'Le Lever du Pinceau serves Montreal, Gatineau, Laval, Longueuil and the South Shore. Licensed RBQ professional painters for your residential and commercial projects. Free quote within 24h.'
        }
        canonicalPath="/secteurs"
        schemaArray={[breadcrumbSchema, areaServedSchema]}
      />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">

        {/* SECTION 1 - Hero Banner avec image de fond */}
        <HeroSection
          onSubmissionOpen={onOpen}
          imageBackground={heroSecteurHub}
          overlayBg="rgba(2, 42, 104, 0.55)"
          title={
            isFr
              ? 'Services de peinture dans le Grand Montréal et à Gatineau'
              : 'Painting services in Greater Montreal and Gatineau'
          }
          subtitle={
            isFr
              ? 'Nos équipes interviennent rapidement à Montréal, Gatineau, Laval, Longueuil et sur la Rive-Sud.'
              : 'Our teams respond quickly in Montreal, Gatineau, Laval, Longueuil and on the South Shore.'
          }
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
          showHeroTrustBanner={false}
        >
          {heroBreadcrumb}
        </HeroSection>

        {/* SECTION 2 - Barre de confiance */}
        <Box
          bg="gray.50"
          borderTop="1px solid"
          borderTopColor="gray.200"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
        >
          <TrustBanner noCard showSatisfactionGuarantee={false} />
        </Box>

        {/* SECTION 3 - Nos villes desservies (5 cartes) */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" color="gray.800">
                  {isFr ? 'Choisissez votre ville' : 'Choose your city'}
                </Heading>
              </Stack>

              {/* Rangée 1 : Montréal, Gatineau, Rive-Sud */}
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, md: 6 }}
              >
                {citiesRow1.map((city) => (
                  <CityCard key={city.name} city={city} />
                ))}
              </SimpleGrid>

              {/* Rangée 2 : Laval, Longueuil (centrée) */}
              <Flex
                justify="center"
                gap={{ base: 5, md: 6 }}
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
              >
                {citiesRow2.map((city) => (
                  <Box
                    key={city.name}
                    w={{ base: '100%', md: 'calc(33.333% - 8px)' }}
                    maxW={{ md: '420px' }}
                  >
                    <CityCard city={city} />
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 4 - Quartiers de Montréal */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" color="gray.800">
                  {isFr
                    ? 'Nos peintres dans les quartiers de Montréal'
                    : 'Our painters in Montreal neighborhoods'}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" maxW="600px" mx="auto">
                  {isFr
                    ? 'Nous réalisons des projets partout sur l\'île'
                    : 'We complete projects across the entire island'}
                </Text>
              </Stack>

              <SimpleGrid
                columns={{ base: 2, md: 4 }}
                spacing={{ base: 4, md: 6 }}
              >
                {quartiersData.map((quartier) => (
                  <Link
                    key={quartier.name}
                    as={RouterLink}
                    to={quartier.link}
                    _hover={{ textDecoration: 'none' }}
                    h="100%"
                    display="block"
                  >
                    <Box
                      position="relative"
                      h="100%"
                      minH={{ base: '220px', md: '260px' }}
                      borderRadius="xl"
                      overflow="hidden"
                      border="1px solid"
                      borderColor="gray.200"
                      cursor="pointer"
                      transition="all 0.2s"
                      _hover={{
                        borderColor: 'brand.500',
                        boxShadow: 'xl',
                        transform: 'translateY(-4px)',
                      }}
                    >
                      <Image
                        src={quartier.image}
                        alt={quartier.name}
                        position="absolute"
                        top={0}
                        left={0}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        zIndex={0}
                        loading="lazy"
                        decoding="async"
                      />
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        bgGradient="linear(to-b, rgba(2, 42, 104, 0.2), rgba(2, 42, 104, 0.82))"
                        zIndex={1}
                      />
                      <Stack
                        position="relative"
                        zIndex={2}
                        p={{ base: 4, md: 5 }}
                        h="100%"
                        justify="flex-end"
                        spacing={2}
                      >
                        <Box h={{ base: '52px', md: '56px' }} display="flex" alignItems="flex-start">
                          <HStack spacing={2} align="flex-start">
                            <Icon
                              as={FontAwesomeIcon}
                              icon={faMapMarkerAlt}
                              color="white"
                              boxSize={4}
                              mt="2px"
                            />
                            <Heading
                              as="h3"
                              fontSize={{ base: 'sm', md: 'md' }}
                              fontWeight="bold"
                              color="white"
                              lineHeight="1.3"
                            >
                              {quartier.name}
                            </Heading>
                          </HStack>
                        </Box>
                        <Text
                          fontSize={{ base: 'xs', md: 'sm' }}
                          color="whiteAlpha.900"
                          lineHeight="1.5"
                        >
                          {quartier.description}
                        </Text>
                        <HStack spacing={1} color="white" pt={1}>
                          <Text fontSize="xs" fontWeight="bold">
                            {isFr ? 'Voir le quartier' : 'View neighborhood'}
                          </Text>
                          <ArrowForwardIcon boxSize={3} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>

              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                textAlign="center"
                maxW="680px"
                mx="auto"
                fontStyle="italic"
              >
                {isFr
                  ? 'Aussi présents à Griffintown, Rosemont, Verdun, Saint-Henri, Ville Mont-Royal, Notre-Dame-de-Grâce et dans tous les quartiers de l\'île de Montréal.'
                  : 'Also present in Griffintown, Rosemont, Verdun, Saint-Henri, Ville Mont-Royal, Notre-Dame-de-Grace and in all neighborhoods of the island of Montreal.'}
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 5 - Pas certain de votre secteur? */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
          <Container maxW="800px" px={{ base: 4, md: 6 }}>
            <Stack spacing={6} textAlign="center" align="center">
              <Heading as="h2" size="section" color="gray.800">
                {isFr
                  ? 'Vous ne trouvez pas votre secteur\u00A0?'
                  : "Can't find your area?"}
              </Heading>
              <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7" maxW="600px">
                {isFr
                  ? 'Nous couvrons l\'ensemble du Grand Montréal et la région de Gatineau. Décrivez votre projet et nous confirmerons notre disponibilité dans votre quartier.'
                  : 'We cover all of Greater Montreal and the Gatineau region. Describe your project and we will confirm our availability in your neighborhood.'}
              </Text>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none' }}>
                <Button
                  rightIcon={<ArrowForwardIcon />}
                  bg="brand.500"
                  color="white"
                  borderRadius="full"
                  size="lg"
                  px={{ base: 8, md: 10 }}
                  _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                  transition="all 0.2s"
                  w={{ base: '100%', sm: 'auto' }}
                  maxW={{ base: '100%', sm: '420px' }}
                  whiteSpace="normal"
                  lineHeight="1.2"
                  h="auto"
                  minH="48px"
                >
                  {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
                </Button>
              </Link>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 6 - Liens internes de redistribution */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                <Heading as="h2" size="section" color="gray.800">
                  {isFr ? 'Nos services de peinture' : 'Our painting services'}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" maxW="580px" mx="auto">
                  {isFr
                    ? 'Découvrez nos services offerts dans toutes les régions desservies.'
                    : 'Discover our services available in all regions served.'}
                </Text>
              </Stack>

              <Stack
                spacing={3}
                maxW="560px"
                mx="auto"
                w="100%"
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    as={RouterLink}
                    to={link.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <HStack
                      spacing={3}
                      p={{ base: 3, md: 4 }}
                      borderRadius="lg"
                      border="1px solid"
                      borderColor="gray.200"
                      bg="white"
                      transition="all 0.2s"
                      _hover={{
                        borderColor: 'brand.500',
                        bg: 'brand.50',
                      }}
                    >
                      <ArrowForwardIcon color="brand.500" boxSize={4} flexShrink={0} />
                      <Text
                        fontWeight="medium"
                        color="gray.700"
                        fontSize={{ base: 'sm', md: 'md' }}
                      >
                        {link.label}
                      </Text>
                    </HStack>
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* SECTION 7 - CTA final */}
        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={
            isFr
              ? "Besoin d'un peintre dans votre secteur\u00A0?"
              : 'Need a painter in your area?'
          }
          subtitle={
            isFr
              ? 'Nos équipes interviennent rapidement dans toutes les villes et quartiers du Grand Montréal. Soumission gratuite en moins de 24h.'
              : 'Our teams serve quickly in all cities and neighborhoods of Greater Montreal. Free quote in less than 24h.'
          }
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
