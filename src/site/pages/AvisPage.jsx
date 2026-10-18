import React, { Fragment, useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  HStack,
  Flex,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { FaArrowRight as ArrowForwardIcon, FaCheckCircle } from 'react-icons/fa';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import { GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS } from '../constants/googleReviews';
import { AVIS_AVANT_APRES_PAIRS } from '../constants/avisAvantApres';
import { avisPhoto } from '../constants/avantApresById';
import { LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import HeroSection from '../home-page/HeroSection';
import SubmissionModal from '../home-page/SubmissionModal';
import ReviewsSection from '../home-page/ReviewsSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FinalCTASection from '../home-page/FinalCTASection';
import avisPhotoHeader from '../images/home/moses-dany-wrapping.webp';
import { thumbnailForRoute } from '../constants/routeThumbnails';
import ResponsiveImage from '../components/ResponsiveImage';

const imgInterieure = thumbnailForRoute('/services/peinture-interieure');
const imgExterieure = thumbnailForRoute('/services/peinture-exterieure');
const imgResidentielle = thumbnailForRoute('/services/peinture-residentielle');
const imgCommerciale = thumbnailForRoute('/services/peinture-commerciale');
const imgPeintresPro = thumbnailForRoute('/peintre-professionnel');

export default function AvisPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isFr = currentLang === 'fr';

  const whyRecommend = [
    isFr ? 'Finition très soignée' : 'Very careful finish',
    isFr ? 'Grande propreté du chantier' : 'Great cleanliness of the site',
    isFr ? 'Rapidité et ponctualité' : 'Speed and punctuality',
    isFr
      ? 'Protection minutieuse des surfaces'
      : 'Meticulous surface protection',
    isFr
      ? 'Politesse et communication claire'
      : 'Politeness and clear communication',
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

  const beforeAfterPairs = AVIS_AVANT_APRES_PAIRS.map(({ before, after, fr, en }) => ({
    before: avisPhoto(before),
    after: avisPhoto(after),
    description: isFr ? fr : en,
  }));

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Avis clients | Témoignages et notes Google | Le Lever du Pinceau' : 'Client reviews | Testimonials and Google ratings | Le Lever du Pinceau'}
        description={isFr ? `Avis vérifiés et témoignages clients. Photos avant/après et ${GOOGLE_REVIEW_COUNT}+ évaluations 5 étoiles sur Google. Lisez ce que nos clients disent avant de nous contacter.` : `Verified reviews and client testimonials. Before/after photos and ${GOOGLE_REVIEW_COUNT}+ 5-star Google ratings. Read what clients say before you contact us.`}
        canonicalPath="/avis-clients"
        schemaArray={[breadcrumbSchema, reviewSchema]}
      />

      <Box w="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={isFr ? 'Avis clients' : 'Client reviews'}
          title={isFr ? 'Avis de nos clients' : 'Client Reviews'}
          subtitle={
            isFr
              ? 'Témoignages, photos avant/après et évaluations complètes.'
              : 'Testimonials, before/after photos and complete evaluations.'
          }
          description={
            isFr
              ? 'Retours authentiques à Montréal, Laval, Longueuil et Rive-Sud.'
              : 'Authentic feedback in Montreal, Laval, Longueuil and South Shore.'
          }
          buttonText={isFr ? 'Soumission gratuite' : 'Free quote'}
          imageBackground={avisPhotoHeader}
          imageAlt={isFr ? 'Avis clients - Le Lever du Pinceau' : 'Client reviews - Le Lever du Pinceau'}
          breadcrumb={[
            { label: isFr ? 'Accueil' : 'Home', to: '/' },
            { label: isFr ? 'Avis' : 'Reviews' },
          ]}
        />
        <ReviewsSection hideButton sectionPaddingTop={TRUST_BANNER_BELOW_PT} />

        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50" w="100%">
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

              <Flex
                flexWrap="wrap"
                justifyContent="center"
                gap={{ base: 3, md: 6 }}
                maxW="1000px"
                mx="auto"
              >
                {whyRecommend.map((item, index) => (
                  <Flex
                    key={index}
                    align="start"
                    gap={3}
                    flex="0 0 auto"
                    w={{
                      base: '100%',
                      md: 'calc((100% - 24px) / 2)',
                      lg: 'calc((100% - 48px) / 3)',
                    }}
                  >
                    <Icon as={FaCheckCircle}
                      color="brand.500"
                      boxSize={5}
                      mt={1}
                      flexShrink={0}
                    />
                    <Text color="gray.700" textStyle="body" lineHeight="1.6">
                      {item}
                    </Text>
                  </Flex>
                ))}
              </Flex>
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

        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50" w="100%">
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
                          <ResponsiveImage
                            image={service.image}
                          sizes="(min-width: 48em) 380px, 85vw"
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
                        <Text fontWeight="bold" color="gray.800" textStyle="bodyLarge">
                          {service.title}
                        </Text>
                        <HStack spacing={2} color="brand.500">
                          <Text textStyle="body" fontWeight="medium">
                            {isFr ? 'Voir' : 'View'}
                          </Text>
                          <Icon as={ArrowForwardIcon} boxSize={4} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr
            ? 'Une équipe de peintres professionnels recommandée partout dans le Grand Montréal'
            : 'A team of professional painters recommended throughout Greater Montreal'}
          subtitle={isFr
            ? 'Des centaines de clients nous ont fait confiance. Obtenez votre propre transformation.'
            : 'Hundreds of clients have trusted us. Get your own transformation.'}
        />
      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
