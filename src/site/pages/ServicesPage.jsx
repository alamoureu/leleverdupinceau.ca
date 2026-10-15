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
  useDisclosure,
  Icon
} from '@chakra-ui/react';
import { FaArrowRight as ArrowForwardIcon } from 'react-icons/fa';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import FinalCTASection from '../home-page/FinalCTASection';
import CtaButton from '../home-page/CtaButton';
import SubmissionModal from '../home-page/SubmissionModal';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import serviceHubPhotoHeader from '../images/home/control-3.webp';
import { thumbnailForRoute } from '../constants/routeThumbnails';

const imgResidentielle = thumbnailForRoute('/services/peinture-residentielle');
const imgCommerciale = thumbnailForRoute('/services/peinture-commerciale');
const imgInterieure = thumbnailForRoute('/services/peinture-interieure');
const imgExterieure = thumbnailForRoute('/services/peinture-exterieure');
const imgIndustrielle = thumbnailForRoute('/services/peinture-industrielle');
const imgTeinture = thumbnailForRoute('/services/teinture-exterieure');
const imgSurfaces = thumbnailForRoute('/services/preparation-de-surfaces');
const imgPistolet = thumbnailForRoute('/services/peinture-au-pistolet');
const imgPlatre = thumbnailForRoute('/services/reparation-de-platre-et-gypse');
const imgSinistre = thumbnailForRoute('/services/peinture-apres-sinistre');
const imgArmoires = thumbnailForRoute('/services/peinture-interieure/armoires-de-cuisine');
const imgMaison = thumbnailForRoute('/services/peinture-residentielle/maison');
const imgCondo = thumbnailForRoute('/services/peinture-residentielle/condo');
const imgAppartement = thumbnailForRoute('/services/peinture-residentielle/appartement');

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
            htmlWidth={1600}
            htmlHeight={1067}
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
          <Stack spacing={2}>
            {subLinks.map((item) => (
              <Link
                key={item.href}
                as={RouterLink}
                to={item.href}
                display="flex"
                alignItems="center"
                gap={2}
                fontSize="sm"
                fontWeight="medium"
                color="brand.500"
                _hover={{ textDecoration: 'underline', color: 'brand.600' }}
              >
                <Icon as={ArrowForwardIcon} boxSize={3} />
                {item.label}
              </Link>
            ))}
          </Stack>
        )}
        <Button
          variant="ctaOutline"
          as={RouterLink}
          to={buttonHref}
          borderRadius="full"
          size="md"
          w="100%"
          mt="auto"
          rightIcon={<ArrowForwardIcon />}
        >
          {buttonLabel}
        </Button>
      </Stack>
    </Box>
  );
}

function PhotoLinkCard({ image, title, description, href, isFr }) {
  return (
    <Link
      as={RouterLink}
      to={href}
      borderRadius="lg"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.200"
      bg="white"
      display="flex"
      flexDirection="column"
      h="100%"
      transition="border-color 0.2s, box-shadow 0.2s"
      _hover={{
        textDecoration: 'none',
        borderColor: 'brand.400',
        boxShadow: 'md',
      }}
    >
      {/* iOS Safari collapses <img> height when it is a direct flex-column child */}
      <Box
        w="100%"
        h={{ base: '180px', md: '200px' }}
        flexShrink={0}
        overflow="hidden"
      >
        <Image
          src={image}
          alt={title}
          w="100%"
          h="100%"
          objectFit="cover"
          display="block"
          loading="lazy"
          decoding="async"
        />
      </Box>
      <Stack spacing={1} p={{ base: 4, md: 5 }} flex={1} minH={0}>
        <Heading as="h3" size="subsection" color="gray.800">
          {title}
        </Heading>
        <Text fontSize="sm" color="gray.600" lineHeight="1.5">
          {description}
        </Text>
        <HStack color="brand.500" fontSize="sm" fontWeight="medium" pt={1} mt="auto">
          <Text>{isFr ? 'En savoir plus' : 'Learn more'}</Text>
          <Icon as={ArrowForwardIcon} boxSize={3} />
        </HStack>
      </Stack>
    </Link>
  );
}

function PhotoLinkSection({ title, subtitle, items, isFr }) {
  return (
    <Stack spacing={6} pt={{ base: 4, md: 8 }}>
      <Stack spacing={2} textAlign="center">
        <Heading as="h2" size="section" color="gray.800">
          {title}
        </Heading>
        <Text textStyle="bodyLarge" color="gray.600" maxW="720px" mx="auto">
          {subtitle}
        </Text>
      </Stack>
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={4}>
        {items.map((item) => (
          <PhotoLinkCard key={item.href} {...item} isFr={isFr} />
        ))}
      </SimpleGrid>
    </Stack>
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
    ? 'Nos services de peinture | Résidentiel, commercial, industriel | Le Lever du Pinceau'
    : 'Our painting services | Residential, commercial, industrial | Le Lever du Pinceau';
  const seoDescription = isFr
    ? 'Catalogue de nos services: peinture résidentielle, commerciale, industrielle, intérieure et extérieure. Grand Montréal et Rive-Sud. Peintres licenciés RBQ. Soumission gratuite.'
    : 'Our service catalog: residential, commercial, industrial, interior and exterior painting. Greater Montreal and South Shore. RBQ-licensed painters. Free quote.';

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
      buttonLabel: isFr ? 'Services résidentiels' : 'Residential services',
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
      buttonLabel: isFr ? 'Services commerciaux' : 'Commercial services',
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
      buttonLabel: isFr ? 'Services industriels' : 'Industrial services',
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
      buttonLabel: isFr ? 'Services intérieurs' : 'Interior services',
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
      buttonLabel: isFr ? 'Services extérieurs' : 'Exterior services',
      buttonHref: '/services/peinture-exterieure',
      imageAlt: isFr ? 'Peinture extérieure - Le Lever du Pinceau' : 'Exterior painting - Le Lever du Pinceau',
    },
  ];

  const specialized = isFr
    ? [
        {
          image: imgTeinture,
          title: 'Teinture extérieure',
          description: 'Patio, clôture, revêtement en bois.',
          href: '/services/teinture-exterieure',
        },
        {
          image: imgSurfaces,
          title: 'Préparation de surfaces',
          description: 'Sablage, plâtrage, calfeutrage, protection.',
          href: '/services/preparation-de-surfaces',
        },
        {
          image: imgPistolet,
          title: 'Peinture au pistolet',
          description: 'Application airless pour grands espaces.',
          href: '/services/peinture-au-pistolet',
        },
        {
          image: imgPlatre,
          title: 'Réparation de plâtre et gypse',
          description: 'Trous, fissures, joints avant peinture.',
          href: '/services/reparation-de-platre-et-gypse',
        },
        {
          image: imgSinistre,
          title: 'Peinture après sinistre',
          description: 'Dégât d\'eau, feu, moisissure.',
          href: '/services/peinture-apres-sinistre',
        },
        {
          image: imgArmoires,
          title: "Peinture d'armoires de cuisine",
          description: 'Armoires rafraîchies au pistolet, fini lisse et durable.',
          href: '/services/peinture-interieure/armoires-de-cuisine',
        },
      ]
    : [
        {
          image: imgTeinture,
          title: 'Exterior staining',
          description: 'Deck, fence, wood siding.',
          href: '/services/teinture-exterieure',
        },
        {
          image: imgSurfaces,
          title: 'Surface preparation',
          description: 'Sanding, plastering, caulking, protection.',
          href: '/services/preparation-de-surfaces',
        },
        {
          image: imgPistolet,
          title: 'Spray painting',
          description: 'Airless application for large areas.',
          href: '/services/peinture-au-pistolet',
        },
        {
          image: imgPlatre,
          title: 'Drywall and plaster repair',
          description: 'Holes, cracks and seams before paint.',
          href: '/services/reparation-de-platre-et-gypse',
        },
        {
          image: imgSinistre,
          title: 'Post-disaster painting',
          description: 'Water, fire or mould recovery.',
          href: '/services/peinture-apres-sinistre',
        },
        {
          image: imgArmoires,
          title: 'Kitchen cabinet painting',
          description: 'Spray-refinished cabinets with a smooth, durable finish.',
          href: '/services/peinture-interieure/armoires-de-cuisine',
        },
      ];

  const propertyTypes = isFr
    ? [
        {
          image: imgMaison,
          title: 'Maison unifamiliale',
          description: 'Intérieur complet ou pièces ciblées, maison occupée ou vide.',
          href: '/services/peinture-residentielle/maison',
        },
        {
          image: imgCondo,
          title: 'Condo',
          description: 'Coordination avec la copropriété et chantier propre.',
          href: '/services/peinture-residentielle/condo',
        },
        {
          image: imgAppartement,
          title: 'Appartement',
          description: 'Avant emménagement ou entre deux locataires.',
          href: '/services/peinture-residentielle/appartement',
        },
      ]
    : [
        {
          image: imgMaison,
          title: 'Single-family house',
          description: 'Full interior or selected rooms, occupied or empty.',
          href: '/services/peinture-residentielle/maison',
        },
        {
          image: imgCondo,
          title: 'Condo',
          description: 'Coordination with the condo board and a clean job site.',
          href: '/services/peinture-residentielle/condo',
        },
        {
          image: imgAppartement,
          title: 'Apartment',
          description: 'Before move-in or between tenants.',
          href: '/services/peinture-residentielle/appartement',
        },
      ];

  const internalMore = isFr
    ? [
        { label: 'Pourquoi engager un peintre professionnel?', href: '/peintre-professionnel' },
        { label: 'Nos secteurs desservis', href: '/secteurs' },
        { label: 'Voir nos réalisations', href: '/realisations' },
        { label: 'Peinture extérieure à Montréal', href: '/services/peinture-exterieure' },
        { label: 'Peinture intérieure à Montréal', href: '/services/peinture-interieure' },
      ]
    : [
        { label: 'Why hire a professional painter?', href: '/peintre-professionnel' },
        { label: 'Areas we serve', href: '/secteurs' },
        { label: 'View our portfolio', href: '/realisations' },
        { label: 'Exterior painting in Montreal', href: '/services/peinture-exterieure' },
        { label: 'Interior painting in Montreal', href: '/services/peinture-interieure' },
      ];

  const heroTitle = isFr ? 'Nos services de peinture' : 'Our painting services';
  const heroSubtitle = isFr
    ? 'Résidentiel, commercial et industriel dans le Grand Montréal.'
    : 'Residential, commercial and industrial across Greater Montreal.';
  const heroDescription = isFr
    ? 'Intérieur, extérieur, préparation ou spécialisé - chaque page détaille la méthode adaptée à votre type de projet.'
    : 'Interior, exterior, prep or specialized - each page details the method suited to your type of project.';

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
          description={heroDescription}
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
          imageBackground={serviceHubPhotoHeader}
          breadcrumb={[
            { label: isFr ? 'Accueil' : 'Home', to: '/' },
            { label: isFr ? 'Services' : 'Services' },
          ]}
        />

        <Container
          maxW="1440px"
          px={{ base: 4, md: 6 }}
          pt={TRUST_BANNER_BELOW_PT}
          pb={SECTION_PY}
        >
          <Stack spacing={TRUST_BANNER_AIR_SPACE}>
            <Stack spacing={3} textAlign="center" maxW="1100px" mx="auto">
              <Heading as="h2" size="section" color="gray.800">
                {isFr
                  ? 'Choisissez le service qui correspond à votre projet'
                  : 'Choose the service that fits your project'}
              </Heading>
            </Stack>

            <Flex wrap="wrap" justify="center" gap={8}>
              {[...rowOne, ...rowTwo].map((s) => (
                <Box
                  key={s.key}
                  w={{ base: '100%', md: 'calc((100% - 2rem) / 2)', xl: 'calc((100% - 4rem) / 3)' }}
                >
                  <MainHubCard {...s} />
                </Box>
              ))}
            </Flex>

            <PhotoLinkSection
              title={isFr ? 'Services spécialisés' : 'Specialized services'}
              subtitle={
                isFr
                  ? 'Des solutions complémentaires pour un résultat complet'
                  : 'Complementary solutions for a complete result'
              }
              items={specialized}
              isFr={isFr}
            />

            <PhotoLinkSection
              title={isFr ? 'Type de propriété' : 'Property type'}
              subtitle={
                isFr
                  ? 'Un service adapté à votre maison, votre condo ou votre appartement'
                  : 'A service tailored to your house, condo or apartment'
              }
              items={propertyTypes}
              isFr={isFr}
            />
          </Stack>
        </Container>

        <Box bg="gray.50" py={{ base: 10, md: 14 }} w="100%">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack
              spacing={5}
              align="center"
              textAlign="center"
              maxW={{ base: '100%', md: '960px', lg: '1100px' }}
              mx="auto"
              w="100%"
            >
              <Heading as="h2" size="section" color="gray.800">
                {isFr ? 'Pas certain quel service choisir?' : 'Not sure which service you need?'}
              </Heading>
              <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                {isFr
                  ? 'Décrivez-nous votre projet et nos experts vous orienteront vers la meilleure solution. Soumission gratuite, réponse en moins de 24h.'
                  : 'Describe your project and our team will point you to the right solution. Free quote, response in under 24 hours.'}
              </Text>
              <CtaButton as={RouterLink} to="/contact" rightIcon={<ArrowForwardIcon />}>
                {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
              </CtaButton>
            </Stack>
          </Container>
        </Box>

        <Container maxW="1440px" px={{ base: 4, md: 6 }} py={SECTION_PY}>
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
