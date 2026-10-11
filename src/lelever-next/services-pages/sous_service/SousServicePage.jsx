import React, { Fragment, useContext } from 'react';
import { useParams, Navigate, Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Link,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../../AppProvider';
import ServiceWhyUsSection from '../components/ServiceWhyUsSection';
import ServiceGuidesSection from '../components/ServiceGuidesSection';
import ServiceAboutSection from '../components/ServiceAboutSection';
import FinalCTASection from '../../home-page/FinalCTASection';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../../home-page/SectorsSection';
import { getSousServiceData } from './index';

const CITY_TO_SECTEUR = {
  montreal: '/secteurs/montreal',
  laval: '/secteurs/laval',
  longueuil: '/secteurs/longueuil',
  brossard: '/secteurs/brossard',
};

export default function SousServicePage() {
  const { serviceSlug, subServiceSlug } = useParams();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  if (CITY_TO_SECTEUR[subServiceSlug]) {
    return <Navigate to={CITY_TO_SECTEUR[subServiceSlug]} replace />;
  }

  // Get data for this service-subService combination
  const pageData = getSousServiceData(serviceSlug, subServiceSlug);

  // If data doesn't exist, redirect to 404 page
  if (!pageData) {
    return <Navigate to='/404' replace />;
  }

  const subServiceName = pageData.name[isFr ? 'fr' : 'en'];
  const serviceSlugLabels = {
    'peinture-commerciale': {
      fr: 'Peinture commerciale',
      en: 'Commercial painting',
    },
    'peinture-residentielle': {
      fr: 'Peinture résidentielle',
      en: 'Residential painting',
    },
    'peinture-interieure': {
      fr: 'Peinture intérieure',
      en: 'Interior painting',
    },
    'peinture-exterieure': {
      fr: 'Peinture extérieure',
      en: 'Exterior painting',
    },
    'peinture-industrielle': {
      fr: 'Peinture industrielle',
      en: 'Industrial painting',
    },
  };
  const serviceName =
    serviceSlugLabels[serviceSlug]?.[isFr ? 'fr' : 'en'] ||
    (isFr ? 'Services' : 'Services');

  // Build breadcrumb schema
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
      {
        '@type': 'ListItem',
        position: 3,
        name: serviceName,
        item: `https://leleverdupinceau.ca/services/${serviceSlug}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: subServiceName,
        item: `https://leleverdupinceau.ca/services/${serviceSlug}/${subServiceSlug}`,
      },
    ],
  };

  // Build guides array from data
  const guides = pageData.guides
    ? pageData.guides.map((guide) => ({
      title: guide.title[isFr ? 'fr' : 'en'],
      href: guide.href,
    }))
    : [];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? `${subServiceName} - Le Lever du Pinceau`
            : `${subServiceName} - Le Lever du Pinceau`}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? `Le Lever du Pinceau offre un service complet de ${subServiceName.toLowerCase()}. Peintres professionnels, service rapide et propre dans le Grand Montréal.`
              : `Le Lever du Pinceau offers a complete ${subServiceName.toLowerCase()} service. Professional painters, fast and clean service in Greater Montreal.`
          }
        />
        <link
          rel='canonical'
          href={
            pageData.canonical ||
            `https://leleverdupinceau.ca/services/${serviceSlug}/${subServiceSlug}`
          }
        />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Stack spacing={0}>
            {/* Breadcrumb */}
            <Flex
              wrap='wrap'
              gap={2}
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
              alignItems='center'
            >
              <Link
                as={RouterLink}
                to='/'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {isFr ? 'Accueil' : 'Home'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Link
                as={RouterLink}
                to='/services'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {isFr ? 'Services' : 'Services'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Link
                as={RouterLink}
                to={`/services/${serviceSlug}`}
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {serviceName}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Text
                color='gray.800'
                fontWeight='medium'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {subServiceName}
              </Text>
            </Flex>

            {/* H1 */}
            <Heading
              as='h1'
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight='bold'
              color='gray.900'
              mb={{ base: 6, md: 8 }}
              lineHeight='1.2'
            >
              {pageData.h1[isFr ? 'fr' : 'en']}
            </Heading>

            {/* Introduction */}
            <Stack spacing={4} mb={{ base: 8, md: 12 }} maxW='900px'>
              {Array.isArray(pageData.introduction[isFr ? 'fr' : 'en']) ? (
                pageData.introduction[isFr ? 'fr' : 'en'].map((para, i) => (
                  <Text
                    key={i}
                    fontSize={{ base: 'lg', md: 'xl' }}
                    color='gray.700'
                    lineHeight='1.8'
                  >
                    {para}
                  </Text>
                ))
              ) : (
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color='gray.700'
                  lineHeight='1.8'
                >
                  {pageData.introduction[isFr ? 'fr' : 'en']}
                </Text>
              )}

              {pageData.introFingerText && (
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color='gray.700'
                  lineHeight='1.8'
                >
                  {pageData.introFingerText[isFr ? 'fr' : 'en']}
                </Text>
              )}
            </Stack>

            {/* Section 1 - Pourquoi choisir notre service */}
            <ServiceWhyUsSection
              title={pageData.whyUsTitle[isFr ? 'fr' : 'en']}
              introText={
                pageData.whyUsIntro
                  ? pageData.whyUsIntro[isFr ? 'fr' : 'en']
                  : null
              }
              content={pageData.whyUsContent[isFr ? 'fr' : 'en']}
              outroText={
                pageData.whyUsOutro
                  ? pageData.whyUsOutro[isFr ? 'fr' : 'en']
                  : null
              }
            />

            {/* Section 2 - Sous-service parent + services reliés */}
            {pageData.complementaryServices && (
              <Box py={{ base: 12, md: 16, lg: 20 }}>
                <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                  <Stack spacing={8}>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {pageData.complementaryServicesTitle[isFr ? 'fr' : 'en']}
                    </Heading>

                    {pageData.complementaryServicesIntro && (
                      <Text fontSize='md' color='gray.600'>
                        {
                          pageData.complementaryServicesIntro[
                          isFr ? 'fr' : 'en'
                          ]
                        }
                      </Text>
                    )}

                    <SimpleGrid
                      columns={{ base: 1, md: 3 }}
                      spacing={6}
                      maxW='1000px'
                    >
                      {pageData.complementaryServices.map((service, index) => (
                        <Link
                          key={index}
                          as={RouterLink}
                          to={service.href}
                          _hover={{ textDecoration: 'none' }}
                        >
                          <Box
                            p={6}
                            bg='white'
                            borderRadius='xl'
                            border='1px solid'
                            borderColor='gray.200'
                            h='100%'
                            display='flex'
                            flexDirection='column'
                            _hover={{
                              borderColor: 'brand.500',
                              transform: 'translateY(-2px)',
                              boxShadow: 'md',
                            }}
                            transition='all 0.2s'
                          >
                            <VStack
                              spacing={3}
                              align='flex-start'
                              flex={1}
                              justify='space-between'
                            >
                              <Text
                                fontWeight='600'
                                color='gray.800'
                                fontSize='lg'
                              >
                                {service.title[isFr ? 'fr' : 'en']}
                              </Text>
                              <HStack spacing={2} color='brand.500' mt='auto'>
                                <Text fontSize='sm' fontWeight='medium'>
                                  {isFr ? 'Voir' : 'View'}
                                </Text>
                                <ArrowForwardIcon boxSize={3} />
                              </HStack>
                            </VStack>
                          </Box>
                        </Link>
                      ))}
                    </SimpleGrid>
                  </Stack>
                </Container>
              </Box>
            )}

            {/* Section 3 - Types de surfaces (for Commercial Interior only) */}
            {pageData.surfacesTitle &&
              pageData.surfaces &&
              serviceSlug === 'peinture-commerciale' &&
              subServiceSlug === 'interieure' && (
                <Box
                  py={{ base: 12, md: 16, lg: 20 }}
                  mb={{ base: 8, md: 12 }}
                  bg='gray.50'
                  borderRadius='xl'
                >
                  <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                    <Stack spacing={8}>
                      <Heading
                        as='h2'
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontWeight='bold'
                        color='gray.800'
                      >
                        {pageData.surfacesTitle[isFr ? 'fr' : 'en']}
                      </Heading>
                      <SimpleGrid
                        columns={{ base: 1, md: 2 }}
                        spacing={4}
                        maxW='900px'
                      >
                        {pageData.surfaces[isFr ? 'fr' : 'en'].map(
                          (surface, index) => (
                            <Flex key={index} align='center' gap={3}>
                              <Icon
                                as={FontAwesomeIcon}
                                icon={faCheckCircle}
                                color='brand.500'
                                boxSize={4}
                              />
                              <Text color='gray.700' fontSize='md'>
                                {surface}
                              </Text>
                            </Flex>
                          )
                        )}
                      </SimpleGrid>
                    </Stack>
                  </Container>
                </Box>
              )}

            {/* Section 4 - Processus (for Commercial Interior only) */}
            {pageData.processTitle &&
              pageData.processSteps &&
              serviceSlug === 'peinture-commerciale' &&
              subServiceSlug === 'interieure' && (
                <Box
                  py={{ base: 12, md: 16, lg: 20 }}
                  mb={{ base: 8, md: 12 }}
                  bg='gray.50'
                >
                  <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                    <Stack spacing={8}>
                      <Heading
                        as='h2'
                        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                        fontWeight='bold'
                        color='gray.800'
                      >
                        {pageData.processTitle[isFr ? 'fr' : 'en']}
                      </Heading>
                      <Stack spacing={4}>
                        {pageData.processSteps[isFr ? 'fr' : 'en'].map(
                          (step, index) => (
                            <Flex key={index} align='flex-start' gap={4}>
                              <Box
                                minW='32px'
                                h='32px'
                                borderRadius='full'
                                bg='brand.500'
                                color='white'
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                fontWeight='bold'
                                fontSize='sm'
                                flexShrink={0}
                              >
                                {index + 1}
                              </Box>
                              <Text
                                color='gray.700'
                                fontSize='md'
                                lineHeight='1.7'
                              >
                                {step}
                              </Text>
                            </Flex>
                          )
                        )}
                      </Stack>
                    </Stack>
                  </Container>
                </Box>
              )}

            {/* Section 3/5 - Par ville (Section 3 for others, Section 5 for Commercial Interior) */}
            {pageData.cities && (
              <SectorsSection
                title={pageData.citiesTitle[isFr ? 'fr' : 'en']}
                subtitle={
                  pageData.citiesSubtitle
                    ? pageData.citiesSubtitle[isFr ? 'fr' : 'en']
                    : null
                }
                showButton={false}
                sectors={pageData.cities.map((city) => {
                  const citySlug = city.href.split('/').pop();
                  const cityImage =
                    citySlug === 'montreal'
                      ? montrealSecteur
                      : citySlug === 'laval'
                        ? lavalSecteur
                        : citySlug === 'longueuil'
                          ? longueuilSecteur
                          : citySlug === 'brossard'
                            ? brossardSecteur
                            : null;

                  return {
                    name:
                      typeof city.name === 'object'
                        ? city.name[isFr ? 'fr' : 'en']
                        : city.name,
                    link: city.href,
                    image: cityImage,
                    subText: city.subText
                      ? city.subText[isFr ? 'fr' : 'en']
                      : null,
                  };
                })}
              />
            )}

            {/* Section 4 - Guides & ressources */}
            {guides.length > 0 && (
              <ServiceGuidesSection
                title={pageData.guidesTitle[isFr ? 'fr' : 'en']}
                guides={guides}
              />
            )}

            {/* Section 6 - À propos de nos peintres professionnels */}
            <ServiceAboutSection
              title={pageData.aboutTitle[isFr ? 'fr' : 'en']}
              description={pageData.aboutDescription[isFr ? 'fr' : 'en']}
              buttonText={pageData.aboutButtonText[isFr ? 'fr' : 'en']}
              buttonLink={pageData.aboutButtonLink}
            />
          </Stack>
        </Container>

        {/* CTA Section - Full Width */}
        <FinalCTASection
          title={pageData.ctaTitle[isFr ? 'fr' : 'en']}
          subtitle={pageData.ctaDescription[isFr ? 'fr' : 'en']}
        />
      </Box>
    </Fragment>
  );
}
