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
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaPaintBrush, FaBroom, FaSprayCan, FaToolbox, FaHouseDamage } from 'react-icons/fa';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import FinalCTASection from '../home-page/FinalCTASection';
import SubmissionModal from '../home-page/SubmissionModal';
import serviceHubPhotoHeader from '../images/5-landing-page/Photo/spray man 3000.jpeg';
import imgResidentielle from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import imgCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import imgInterieure from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import imgExterieure from '../images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG';
import imgIndustrielle from '../images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG';

function MainHubCard({
  image,
  title,
  description,
  titleHref,
  subLinks,
  buttonLabel,
  buttonHref,
  imageAlt,
}) {
  return (
    <Box
      borderRadius="xl"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      bg="white"
      boxShadow="0 2px 12px rgba(0,0,0,0.06)"
      h="100%"
      display="flex"
      flexDirection="column"
      transition="box-shadow 0.2s, border-color 0.2s"
      _hover={{ boxShadow: '0 8px 24px rgba(0,0,0,0.1)', borderColor: 'brand.400' }}
    >
      <Link as={RouterLink} to={titleHref} _hover={{ textDecoration: 'none' }}>
        <Box position="relative" h={{ base: '200px', md: '220px', lg: '240px' }} overflow="hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            w="100%"
            h="100%"
            objectFit="cover"
            objectPosition="center"
            loading="lazy"
            decoding="async"
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-br, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 40%, transparent 72%)"
          />
          <Heading
            as="h3"
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            p={{ base: 4, md: 5 }}
            size="card"
            color="white"
            lineHeight="1.15"
          >
            {title}
          </Heading>
        </Box>
      </Link>
      <Stack spacing={4} p={{ base: 5, md: 6 }} flex={1}>
        <Text textStyle="body" color="gray.700" lineHeight="1.6">
          {description}
        </Text>
        {subLinks && subLinks.length > 0 && (
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacingX={4} spacingY={2}>
            {subLinks.map((item) => (
              <Link
                key={item.href}
                as={RouterLink}
                to={item.href}
                fontSize="sm"
                fontWeight="medium"
                color="brand.500"
                _hover={{ textDecoration: 'underline', color: 'brand.600' }}
              >
                {item.label}
              </Link>
            ))}
          </SimpleGrid>
        )}
        <Box pt={1} mt="auto">
          <Button
            as={RouterLink}
            to={buttonHref}
            variant="outline"
            borderColor="brand.500"
            color="brand.500"
            borderRadius="full"
            size="md"
            rightIcon={<ArrowForwardIcon />}
            _hover={{ bg: 'brand.500', color: 'white' }}
          >
            {buttonLabel}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

function SpecializedRow({ icon, title, description, href, isFr }) {
  return (
    <Link
      as={RouterLink}
      to={href}
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.200"
      bg="white"
      p={{ base: 4, md: 5 }}
      display="block"
      transition="border-color 0.2s, box-shadow 0.2s"
      _hover={{
        textDecoration: 'none',
        borderColor: 'brand.400',
        boxShadow: 'md',
      }}
    >
      <HStack align="flex-start" spacing={4}>
        <Flex
          flexShrink={0}
          w="44px"
          h="44px"
          borderRadius="lg"
          bg="brand.50"
          align="center"
          justify="center"
          color="brand.500"
        >
          <Icon as={icon} boxSize={5} />
        </Flex>
        <Stack spacing={1} minW={0}>
          <Heading as="h3" size="subsection" color="gray.800">
            {title}
          </Heading>
          <Text fontSize="sm" color="gray.600" lineHeight="1.5">
            {description}
          </Text>
          <HStack color="brand.500" fontSize="sm" fontWeight="medium" pt={1}>
            <Text>{isFr ? 'En savoir plus' : 'Learn more'}</Text>
            <ArrowForwardIcon boxSize={3} />
          </HStack>
        </Stack>
      </HStack>
    </Link>
  );
}

export default function ServicesPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pageContext = isFr ? 'Services' : 'Services';

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

  const seoTitle = isFr
    ? 'Services de peinture à Montréal et Gatineau | Le Lever du Pinceau'
    : 'Painting services in Montreal and Gatineau | Le Lever du Pinceau';
  const seoDescription = isFr
    ? 'Découvrez nos services de peinture résidentielle, commerciale, industrielle, intérieure et extérieure à Montréal et Gatineau. Peintres professionnels licenciés RBQ. Soumission gratuite.'
    : 'Explore residential, commercial, industrial, interior and exterior painting in Montreal and Gatineau. RBQ-licensed professional painters. Free quote.';

  const rowOne = [
    {
      key: 'residentielle',
      image: imgResidentielle,
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      description: isFr
        ? 'Maisons, condos, appartements, logements locatifs et multi-étages.'
        : 'Houses, condos, apartments, rentals and multi-storey buildings.',
      titleHref: '/services/peinture-residentielle',
      subLinks: isFr
        ? [
            { label: 'Peinture de maison', href: '/services/peinture-residentielle/maison' },
            { label: 'Peinture de condo', href: '/services/peinture-residentielle/condo' },
            {
              label: "Peinture d'appartement",
              href: '/services/peinture-residentielle/appartement',
            },
          ]
        : [
            { label: 'House painting', href: '/services/peinture-residentielle/maison' },
            { label: 'Condo painting', href: '/services/peinture-residentielle/condo' },
            { label: 'Apartment painting', href: '/services/peinture-residentielle/appartement' },
          ],
      buttonLabel: isFr ? 'Voir tous les services résidentiels' : 'All residential services',
      buttonHref: '/services/peinture-residentielle',
      imageAlt: isFr ? 'Peinture résidentielle - Le Lever du Pinceau' : 'Residential painting - Le Lever du Pinceau',
    },
    {
      key: 'commerciale',
      image: imgCommerciale,
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      description: isFr
        ? 'Bureaux, restaurants, commerces, halls d\'entrée et garderies.'
        : 'Offices, restaurants, retail, lobbies and daycares.',
      titleHref: '/services/peinture-commerciale',
      subLinks: [],
      buttonLabel: isFr ? 'Voir tous les services commerciaux' : 'All commercial services',
      buttonHref: '/services/peinture-commerciale',
      imageAlt: isFr ? 'Peinture commerciale - Le Lever du Pinceau' : 'Commercial painting - Le Lever du Pinceau',
    },
    {
      key: 'industrielle',
      image: imgIndustrielle,
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      description: isFr
        ? 'Entrepôts, usines, stationnements. Époxy et revêtements spécialisés.'
        : 'Warehouses, factories, parking areas. Epoxy and specialized coatings.',
      titleHref: '/services/peinture-industrielle',
      subLinks: [],
      buttonLabel: isFr ? 'En savoir plus' : 'Learn more',
      buttonHref: '/services/peinture-industrielle',
      imageAlt: isFr ? 'Peinture industrielle - Le Lever du Pinceau' : 'Industrial painting - Le Lever du Pinceau',
    },
  ];

  const rowTwo = [
    {
      key: 'interieure',
      image: imgInterieure,
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      description: isFr
        ? 'Murs, plafonds, boiseries, armoires. Finitions nettes et durables.'
        : 'Walls, ceilings, trim, cabinets. Clean, durable finishes.',
      titleHref: '/services/peinture-interieure',
      subLinks: isFr
        ? [{ label: 'Armoires de cuisine', href: '/services/peinture-interieure/armoires-de-cuisine' }]
        : [{ label: 'Kitchen cabinets', href: '/services/peinture-interieure/armoires-de-cuisine' }],
      buttonLabel: isFr ? 'Voir tous les services intérieurs' : 'All interior services',
      buttonHref: '/services/peinture-interieure',
      imageAlt: isFr ? 'Peinture intérieure - Le Lever du Pinceau' : 'Interior painting - Le Lever du Pinceau',
    },
    {
      key: 'exterieure',
      image: imgExterieure,
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      description: isFr
        ? 'Revêtement, balcon, clôture, fondation. Protection contre le climat québécois.'
        : 'Siding, deck, fence, foundation. Protection built for Quebec weather.',
      titleHref: '/services/peinture-exterieure',
      subLinks: [],
      buttonLabel: isFr ? 'Voir tous les services extérieurs' : 'All exterior services',
      buttonHref: '/services/peinture-exterieure',
      imageAlt: isFr ? 'Peinture extérieure - Le Lever du Pinceau' : 'Exterior painting - Le Lever du Pinceau',
    },
  ];

  const specialized = isFr
    ? [
        {
          icon: FaPaintBrush,
          title: 'Teinture extérieure',
          description: 'Patio, clôture, revêtement en bois.',
          href: '/services/teinture-exterieure',
        },
        {
          icon: FaBroom,
          title: 'Préparation de surfaces',
          description: 'Sablage, rebouchage, plâtre, calfeutrage.',
          href: '/services/preparation-de-surfaces',
        },
        {
          icon: FaSprayCan,
          title: 'Peinture au pistolet',
          description: 'Application airless pour grands espaces.',
          href: '/services/peinture-au-pistolet',
        },
        {
          icon: FaToolbox,
          title: 'Réparation de plâtre et gypse',
          description: 'Trous, fissures, joints avant peinture.',
          href: '/services/reparation-de-platre-et-gypse',
        },
        {
          icon: FaHouseDamage,
          title: 'Peinture après sinistre',
          description: 'Dégât d\'eau, feu, moisissure.',
          href: '/services/peinture-apres-sinistre',
        },
      ]
    : [
        {
          icon: FaPaintBrush,
          title: 'Exterior staining',
          description: 'Deck, fence, wood siding.',
          href: '/services/teinture-exterieure',
        },
        {
          icon: FaBroom,
          title: 'Surface preparation',
          description: 'Sanding, patching, plaster, caulking.',
          href: '/services/preparation-de-surfaces',
        },
        {
          icon: FaSprayCan,
          title: 'Spray painting',
          description: 'Airless application for large areas.',
          href: '/services/peinture-au-pistolet',
        },
        {
          icon: FaToolbox,
          title: 'Drywall and plaster repair',
          description: 'Holes, cracks and seams before paint.',
          href: '/services/reparation-de-platre-et-gypse',
        },
        {
          icon: FaHouseDamage,
          title: 'Post-disaster painting',
          description: 'Water, fire or mould recovery.',
          href: '/services/peinture-apres-sinistre',
        },
      ];

  const internalMore = isFr
    ? [
        { label: 'Pourquoi engager un peintre professionnel?', href: '/peintre-professionnel' },
        { label: 'Nos secteurs desservis', href: '/secteurs' },
        { label: 'Voir nos réalisations', href: '/realisations' },
        { label: 'Peinture extérieure à Montréal', href: '/peinture-exterieure-montreal' },
        { label: 'Peinture intérieure à Montréal', href: '/peinture-interieure-montreal' },
      ]
    : [
        { label: 'Why hire a professional painter?', href: '/peintre-professionnel' },
        { label: 'Areas we serve', href: '/secteurs' },
        { label: 'View our portfolio', href: '/realisations' },
        { label: 'Exterior painting in Montreal', href: '/peinture-exterieure-montreal' },
        { label: 'Interior painting in Montreal', href: '/peinture-interieure-montreal' },
      ];

  const heroTitle = isFr
    ? 'Nos services de peinture à Montréal et Gatineau'
    : 'Our painting services in Montreal and Gatineau';
  const heroSubtitle = isFr
    ? 'Peinture résidentielle, commerciale et industrielle. Intérieure et extérieure. Choisissez votre service ci-dessous.'
    : 'Residential, commercial and industrial painting. Interior and exterior. Choose your service below.';

  return (
    <Fragment>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath="/services"
        schema={breadcrumbSchema}
      />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={pageContext}
          title={heroTitle}
          subtitle={heroSubtitle}
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
          imageBackground={serviceHubPhotoHeader}
          overlayBg="linear-gradient(155deg, rgba(18, 38, 74, 0.92) 0%, rgba(18, 38, 74, 0.62) 42%, rgba(18, 38, 74, 0.38) 100%)"
        >
          <HStack
            spacing={3}
            textStyle="bodyLarge"
            color="whiteAlpha.900"
            mb={{ base: 2, md: 4 }}
            flexWrap="wrap"
          >
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline', color: 'white' }}>
              {isFr ? 'Accueil' : 'Home'}
            </Link>
            <Text opacity={0.9}>›</Text>
            <Text color="white" fontWeight="medium">
              {isFr ? 'Services' : 'Services'}
            </Text>
          </HStack>
        </HeroSection>

        <Box
          bg="gray.50"
          borderTop="1px solid"
          borderTopColor="gray.200"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
        >
          <TrustBanner />
        </Box>

        <Container maxW="1440px" px={{ base: 4, md: 6 }} py={{ base: 12, md: 16, lg: 20 }}>
          <Stack spacing={{ base: 10, md: 14 }}>
            <Stack spacing={3} textAlign="center" maxW="1100px" mx="auto">
              <Heading as="h2" size="section" color="gray.800">
                {isFr
                  ? 'Choisissez le service qui correspond à votre projet'
                  : 'Choose the service that fits your project'}
              </Heading>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 8, md: 8 }}>
              {rowOne.map((s) => (
                <MainHubCard key={s.key} {...s} />
              ))}
            </SimpleGrid>

            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 8, md: 8 }}
              maxW={{ md: '920px' }}
              mx="auto"
            >
              {rowTwo.map((s) => (
                <MainHubCard key={s.key} {...s} />
              ))}
            </SimpleGrid>

            <Stack spacing={6} pt={{ base: 4, md: 8 }}>
              <Stack spacing={2} textAlign="center">
                <Heading as="h2" size="section" color="gray.800">
                  {isFr ? 'Services spécialisés' : 'Specialized services'}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" maxW="720px" mx="auto">
                  {isFr
                    ? 'Des solutions complémentaires pour un résultat complet'
                    : 'Complementary solutions for a complete result'}
                </Text>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {specialized.map((item) => (
                  <SpecializedRow key={item.href} {...item} isFr={isFr} />
                ))}
              </SimpleGrid>
            </Stack>

            <Box bg="gray.50" borderRadius="xl" py={{ base: 10, md: 14 }} px={{ base: 6, md: 10 }}>
              <Stack spacing={5} align="center" textAlign="center" maxW="720px" mx="auto">
                <Heading as="h2" size="section" color="gray.800">
                  {isFr ? 'Pas certain quel service choisir?' : 'Not sure which service you need?'}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                  {isFr
                    ? 'Décrivez-nous votre projet et nos experts vous orienteront vers la meilleure solution. Soumission gratuite, réponse en moins de 24h.'
                    : 'Describe your project and our team will point you to the right solution. Free quote, response in under 24 hours.'}
                </Text>
                <Button
                  as={RouterLink}
                  to="/contact"
                  rightIcon={<ArrowForwardIcon />}
                  bg="brand.500"
                  color="white"
                  borderRadius="full"
                  size="lg"
                  px={10}
                  _hover={{ bg: 'brand.600' }}
                >
                  {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
                </Button>
              </Stack>
            </Box>

            <Stack spacing={5}>
              <Heading as="h2" size="section" color="gray.800">
                {isFr ? 'En savoir plus' : 'Learn more'}
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                {internalMore.map((item) => (
                  <Link
                    key={item.href}
                    as={RouterLink}
                    to={item.href}
                    fontWeight="medium"
                    color="brand.500"
                    fontSize="md"
                    _hover={{ textDecoration: 'underline', color: 'brand.600' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Container>

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr ? 'Prêt à commencer votre projet?' : 'Ready to start your project?'}
          subtitle={isFr ? 'Soumission gratuite en moins de 24h' : 'Free quote in under 24 hours'}
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
