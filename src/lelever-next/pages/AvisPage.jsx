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
  Grid,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import { GOOGLE_REVIEWS, GOOGLE_REVIEWS_URL } from '../constants/googleReviews';
import { LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import PageIntro from '../components/PageIntro';
import ReviewsSection from '../home-page/ReviewsSection';
import GoogleReviewBadge from '../home-page/GoogleReviewBadge';
import TrustBanner from '../home-page/TrustBanner';
import BeforeAfterCarouselSection, { buildDefaultImages } from '../home-page/BeforeAfterCarouselSection';
import FinalCTASection from '../home-page/FinalCTASection';
import avisPhotoHeader from '../images/Moses&Dany_Wraping.jpeg';
import imgInterieure from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import imgExterieure from '../images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG';
import imgResidentielle from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import imgCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import imgPeintresPro from '../images/5-landing-page/Photo/spray man 3000.jpeg';

const AVIS_PHOTOS = import.meta.glob('../images/1-page-principale/avis/avant-apres/*.jpg', {
  eager: true,
  import: 'default',
});
const avisPhoto = (n) => AVIS_PHOTOS[`../images/1-page-principale/avis/avant-apres/IMG_${n}.jpg`];

/** [avant, après, fr, en] */
const AVIS_PAIRS = [
  ['0828', '0829', "Porte d'entrée - décapage et peinture bleu marine", 'Front door - stripping and navy blue paint'],
  ['0855', '0856', "Hall d'entrée - murs et boiseries rafraîchis", 'Entrance hall - walls and trim refreshed'],
  ['0848', '0849', 'Maison - revêtement extérieur repeint', 'House - exterior siding repainted'],
  ['0842', '0843', 'Chambre - papier peint retiré et murs repeints', 'Bedroom - wallpaper removed and walls repainted'],
  ['0826', '0827', 'Salle à manger - murs bleus repeints gris foncé', 'Dining room - blue walls repainted dark grey'],
  ['0834', '0835', "Poutre d'acier - rouille traitée et peinture noire", 'Steel beam - rust treated and black paint'],
  ['0807', '0808', 'Salle de bain - murs repeints gris', 'Bathroom - walls repainted grey'],
  ['0830', '0831', 'Revêtement extérieur - grattage et peinture', 'Exterior siding - scraping and painting'],
  ['0844', '0845', 'Chambre - papier peint retiré, murs verts', 'Bedroom - wallpaper removed, green walls'],
  ['0838', '0839', 'Terrasse en bois - teinture', 'Wood deck - stain'],
  ['0852', '0853', 'Chambre - papier peint fleuri remplacé par la peinture', 'Bedroom - floral wallpaper replaced with paint'],
  ['0822', '0823', 'Escalier extérieur - teinture du bois', 'Outdoor stairs - wood stain'],
  ['0832', '0833', 'Chambre - murs repeints gris pâle', 'Bedroom - walls repainted light grey'],
  ['1405', '1406', 'Clôture en bois - teinture', 'Wood fence - stain'],
  ['0846', '0847', 'Chambre - murs repeints en blanc', 'Bedroom - walls repainted white'],
  ['0836', '0837', 'Cadrage de fenêtre - plâtre et peinture', 'Window frame - plaster and paint'],
  ['0859', '0860', 'Fenêtre - peinture écaillée réparée', 'Window - peeling paint repaired'],
  ['0818', '0819', 'Corridor - coin de mur réparé et repeint', 'Hallway - wall corner repaired and repainted'],
  ['0861', '0862', 'Plinthe - réparation et peinture', 'Baseboard - repair and paint'],
  ['0863', '0864', "Plafond - tache d'eau réparée", 'Ceiling - water stain repaired'],
];

export default function AvisPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const whyRecommend = [
    isFr ? 'Finition très soignée' : 'Very careful finish',
    isFr ? 'Grande propreté du chantier' : 'Great cleanliness of the site',
    isFr ? 'Rapidité et ponctualité' : 'Speed and punctuality',
    isFr
      ? 'Protection minutieuse des surfaces'
      : 'Meticulous surface protection',
    isFr
      ? 'Politesse & communication claire'
      : 'Politeness & clear communication',
    isFr
      ? 'Produits de qualité professionnelle'
      : 'Professional quality products',
    isFr ? 'Soumission rapide et précise' : 'Fast and accurate quote',
    isFr ? 'Respect des délais' : 'Respect of deadlines',
  ];

  const services = [
    {
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      link: '/services/peinture-interieure',
      image: imgInterieure,
    },
    {
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      link: '/services/peinture-exterieure',
      image: imgExterieure,
    },
    {
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      link: '/services/peinture-residentielle',
      image: imgResidentielle,
    },
    {
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      link: '/services/peinture-commerciale',
      image: imgCommerciale,
    },
    {
      title: isFr ? 'Peintres professionnels' : 'Professional painters',
      link: '/peintre-professionnel',
      image: imgPeintresPro,
    },
  ];

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
        name: isFr ? 'Avis' : 'Reviews',
        item: 'https://leleverdupinceau.ca/avis-clients',
      },
    ],
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': LOCAL_BUSINESS_SCHEMA['@type'],
    '@id': LOCAL_BUSINESS_SCHEMA['@id'],
    name: LOCAL_BUSINESS_SCHEMA.name,
    url: LOCAL_BUSINESS_SCHEMA.url,
    aggregateRating: LOCAL_BUSINESS_SCHEMA.aggregateRating,
    review: GOOGLE_REVIEWS.slice(0, 5).map(({ name, content }) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name },
      reviewBody: content[currentLang],
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
    })),
  };

  const beforeAfterPairs = [
    ...buildDefaultImages(isFr),
    ...AVIS_PAIRS.map(([before, after, fr, en]) => ({
      before: avisPhoto(before),
      after: avisPhoto(after),
      description: isFr ? fr : en,
    })),
  ];

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Avis clients peinture Montréal | Témoignages – Le Lever du Pinceau' : 'Painting reviews Montreal | Client testimonials – Le Lever du Pinceau'}
        description={isFr ? 'Avis et témoignages de clients à Montréal, Laval, Longueuil. Peinture résidentielle et commerciale. Photos avant/après, évaluations 5 étoiles. Peintre recommandé Montréal.' : 'Reviews and testimonials in Montreal, Laval, Longueuil. Residential and commercial painting. Before/after photos, 5-star ratings. Recommended painter Montreal.'}
        canonicalPath="/avis-clients"
        schemaArray={[breadcrumbSchema, reviewSchema]}
      />

      <Box w="100%" bg="white" overflowX="hidden">
        <Container
          maxW="1440px"
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Grid
            templateColumns={{ base: '1fr', md: '6fr 4fr' }}
            gap={{ base: 6, md: 8, lg: 10 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              <HStack
                spacing={3}
                textStyle="bodyLarge"
                color="gray.600"
                mb={{ base: 3, md: 6 }}
              >
                <Link
                  as={RouterLink}
                  to="/"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.600"
                  textStyle="bodyLarge"
                >
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text textStyle="bodyLarge">›</Text>
                <Text color="gray.800" fontWeight="medium" textStyle="bodyLarge">
                  {isFr ? 'Avis' : 'Reviews'}
                </Text>
              </HStack>
              <Stack spacing={{ base: 4, md: 6 }} textAlign="left">
                <Heading as="h1" size="page" color="gray.800">
                  {isFr ? 'Avis de nos clients' : 'Client Reviews'}
                </Heading>
                <Text
                  textStyle="bodyLarge"
                  color="gray.600"
                  lineHeight="1.7"
                  maxW="800px"
                  fontWeight="medium"
                >
                  {isFr
                    ? 'Découvrez leurs témoignages, leurs photos avant/après et leurs évaluations complètes.'
                    : 'Discover their testimonials, before/after photos and complete evaluations.'}
                </Text>
                <Box>
                  <Link href={GOOGLE_REVIEWS_URL} rel="nofollow" target="_blank" _hover={{ textDecoration: 'none' }}>
                    <Button
                      variant="cta"
                      rightIcon={<ArrowForwardIcon />}
                      borderRadius="full"
                      textStyle="nav"
                      px={{ base: 5, md: 7 }}
                      py={{ base: 3, md: 4 }}
                    >
                      {isFr ? 'Laisser un avis Google' : 'Leave a Google review'}
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Stack>
            <Box
              position="relative"
              w="100%"
              aspectRatio={{ base: '1', md: '4/3' }}
              borderRadius="xl"
              overflow="hidden"
              bg="gray.100"
            >
              <GoogleReviewBadge top={{ base: 3, md: 4 }} right={{ base: 3, md: 4 }} />
              <Image
                src={avisPhotoHeader}
                alt={isFr ? 'Avis clients – Le Lever du Pinceau' : 'Client reviews – Le Lever du Pinceau'}
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
                decoding="async"
            htmlWidth={1600}
            htmlHeight={1067}
              />
            </Box>
          </Grid>
        </Container>
        <TrustBanner />
        <Container maxW="1440px" px={{ base: 4, md: 6 }}>
          <Stack spacing={0}>
            <PageIntro>
              {isFr
                ? 'Chez Le Lever du Pinceau, la satisfaction de nos clients est au cœur de tout ce que nous faisons. Résidentiel, commercial, intérieur ou extérieur - toutes nos interventions sont réalisées avec précision, propreté et un souci du détail irréprochable. Cette page rassemble les avis authentiques laissés par nos clients de Montréal, Laval, Longueuil, Brossard et tous les quartiers que nous desservons.'
                : 'At Le Lever du Pinceau, customer satisfaction is at the heart of everything we do. Residential, commercial, interior or exterior - all our work is carried out with precision, cleanliness and impeccable attention to detail. This page brings together authentic reviews from our clients in Montreal, Laval, Longueuil, Brossard and all the neighborhoods we serve.'}
            </PageIntro>
            <ReviewsSection hideButton />

            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={{ base: 4, md: 6 }}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                    <Heading as="h2" size="section" color="gray.800">
                      {isFr
                        ? 'Qualité, précision et service irréprochable'
                        : 'Quality, precision and impeccable service'}
                    </Heading>
                    <Text textStyle="bodyLarge" color="gray.600">
                      {isFr
                        ? 'Nos clients mentionnent le plus souvent'
                        : 'Our clients most often mention'}
                    </Text>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 3, md: 6 }}
                    maxW="1000px"
                    mx="auto"
                  >
                    {whyRecommend.map((item, index) => (
                      <Flex key={index} align="start" gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color="brand.500"
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text
                          color="gray.700"
                          textStyle="body"
                          lineHeight="1.6"
                        >
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            <BeforeAfterCarouselSection
              isFr={isFr}
              title={isFr ? 'Des transformations impressionnantes' : 'Impressive transformations'}
              subtitle={
                isFr
                  ? 'Avant/après de projets réalisés pour nos clients : intérieur, extérieur, plâtre, teinture et rénovations résidentielles.'
                  : 'Before/after of projects completed for our clients: interior, exterior, plaster, stain and residential renovations.'
              }
              images={beforeAfterPairs}
              sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
              sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
            />

            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg="gray.50"
              borderRadius="xl"
            >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
                <Stack spacing={{ base: 4, md: 6 }}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
                    <Heading as="h2" size="section" color="gray.800">
                      {isFr
                        ? 'Services les plus appréciés'
                        : 'Most appreciated services'}
                    </Heading>
                  </Stack>

                  <Flex
                    maxW="1000px"
                    mx="auto"
                    wrap="wrap"
                    justify="center"
                    gap={{ base: 3, md: 6 }}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        _hover={{ textDecoration: 'none' }}
                        w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                        maxW={{ lg: '320px' }}
                      >
                        <Box
                          h="100%"
                          bg="white"
                          borderRadius="xl"
                          border="1px solid"
                          borderColor="gray.200"
                          overflow="hidden"
                          textAlign="center"
                          _hover={{
                            borderColor: 'brand.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition="all 0.2s"
                        >
                          {service.image && (
                            <Box
                              w="100%"
                              h={{ base: '140px', md: '160px' }}
                              overflow="hidden"
                              bg="gray.100"
                            >
                              <Image
                                src={service.image}
                                alt={service.title}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                objectPosition="center"
                                loading="lazy"
                                decoding="async"
            htmlWidth={1600}
            htmlHeight={1067}
                              />
                            </Box>
                          )}
                          <Stack spacing={2} align="center" p={{ base: 3, md: 6 }}>
                            <Text
                              fontWeight="bold"
                              color="gray.800"
                              textStyle="bodyLarge"
                            >
                              {service.title}
                            </Text>
                            <HStack spacing={2} color="brand.500">
                              <Text textStyle="body" fontWeight="medium">
                                {isFr ? 'Voir' : 'View'}
                              </Text>
                              <ArrowForwardIcon boxSize={4} />
                            </HStack>
                          </Stack>
                        </Box>
                      </Link>
                    ))}
                  </Flex>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Container>

        <FinalCTASection
          title={isFr
            ? 'Une équipe de peintres professionnels recommandée partout dans le Grand Montréal'
            : 'A team of professional painters recommended throughout Greater Montreal'}
          subtitle={isFr
            ? 'Des centaines de clients nous ont fait confiance. Obtenez votre propre transformation.'
            : 'Hundreds of clients have trusted us. Get your own transformation.'}
        />
      </Box>
    </Fragment>
  );
}
