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
  Image,
} from '@chakra-ui/react';
import appContext from '../../../AppProvider';
import ServiceWhyUsSection from '../components/ServiceWhyUsSection';
import ServiceQuartierGuidesSection from '../service_ville/components/ServiceQuartierGuidesSection';
import ServiceQuartierAboutSection from '../service_ville/components/ServiceQuartierAboutSection';
import ServiceCTASection from '../components/ServiceCTASection';
import { getSousServiceVilleData } from './index';

export default function SousServiceVillePage() {
  const { serviceSlug, subServiceSlug, citySlug } = useParams();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Get data for this service-subService-city combination
  const pageData = getSousServiceVilleData(
    serviceSlug,
    subServiceSlug,
    citySlug
  );

  // If data doesn't exist, redirect to services page
  if (!pageData) {
    return <Navigate to='/services' replace />;
  }

  const { service, subService, city } = pageData;
  const serviceName = service.name[isFr ? 'fr' : 'en'];
  const subServiceName = subService.name[isFr ? 'fr' : 'en'];
  const cityName = city.name[isFr ? 'fr' : 'en'] || city.name;

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
      {
        '@type': 'ListItem',
        position: 5,
        name: cityName,
        item: `https://leleverdupinceau.ca/services/${serviceSlug}/${subServiceSlug}/${citySlug}`,
      },
    ],
  };

  // Build guides array from data
  const guides = city.guides
    ? city.guides.map((guide) => ({
        title: guide.title[isFr ? 'fr' : 'en'],
        href: guide.href,
      }))
    : [];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? `${subServiceName} à ${cityName} – Le Lever du Pinceau`
            : `${subServiceName} in ${cityName} – Le Lever du Pinceau`}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? `Le Lever du Pinceau offre un service complet de ${subServiceName.toLowerCase()} à ${cityName}. Peintres professionnels, service rapide et propre.`
              : `Le Lever du Pinceau offers a complete ${subServiceName.toLowerCase()} service in ${cityName}. Professional painters, fast and clean service.`
          }
        />
        <link
          rel='canonical'
          href={
            city.canonical ||
            `https://leleverdupinceau.ca/services/${serviceSlug}/${subServiceSlug}/${citySlug}`
          }
        />
        <meta name='robots' content='noindex, nofollow' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 8, md: 12 }}
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
                to='/new-home'
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
                whiteSpace='normal'
              >
                {serviceName}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Link
                as={RouterLink}
                to={`/services/${serviceSlug}/${subServiceSlug}`}
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='normal'
              >
                {subServiceName}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Text
                color='gray.800'
                fontWeight='medium'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {cityName}
              </Text>
            </Flex>

            {/* H1 et Introduction */}
            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
              <Heading
                as='h1'
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {city.h1
                  ? city.h1[isFr ? 'fr' : 'en']
                  : isFr
                  ? `${subServiceName} à ${cityName} – Le Lever du Pinceau`
                  : `${subServiceName} in ${cityName} – Le Lever du Pinceau`}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {city.introduction[isFr ? 'fr' : 'en']}
              </Text>
            </Stack>

            {/* Images if available */}
            {city.images && city.images.length > 0 && (
              <Box mb={{ base: 12, md: 16 }}>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={4}
                  maxW='1200px'
                >
                  {city.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      borderRadius='lg'
                      w='100%'
                      h={{ base: '200px', md: '250px' }}
                      objectFit='cover'
                    />
                  ))}
                </SimpleGrid>
              </Box>
            )}

            {/* Section 1 — Pourquoi choisir notre service */}
            <ServiceWhyUsSection
              title={city.whyUsTitle[isFr ? 'fr' : 'en']}
              content={city.whyUsContent[isFr ? 'fr' : 'en']}
              introText={city.whyUsIntro[isFr ? 'fr' : 'en']}
              outroText={
                city.whyUsOutro ? city.whyUsOutro[isFr ? 'fr' : 'en'] : null
              }
            />

            {/* Section 2 — Services complémentaires */}
            {city.complementaryServices &&
              city.complementaryServices.length > 0 && (
                <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
                  <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                    <Stack spacing={6}>
                      <Heading
                        as='h2'
                        fontSize={{ base: '2xl', md: '3xl' }}
                        fontWeight='bold'
                        color='gray.800'
                      >
                        {city.complementaryServicesTitle[isFr ? 'fr' : 'en']}
                      </Heading>
                      <Stack spacing={3}>
                        {city.complementaryServices.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            color='#014CC4'
                            fontWeight='500'
                            fontSize={{ base: 'md', md: 'lg' }}
                            _hover={{ textDecoration: 'underline' }}
                          >
                            {service.title[isFr ? 'fr' : 'en']} →
                          </Link>
                        ))}
                      </Stack>
                    </Stack>
                  </Container>
                </Box>
              )}

            {/* Section 3 — Types de surfaces */}
            {city.surfaces && city.surfaces[isFr ? 'fr' : 'en'] && (
              <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
                <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                  <Stack spacing={6}>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {city.surfacesTitle[isFr ? 'fr' : 'en']}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      mb={4}
                    >
                      {isFr
                        ? 'Nous peignons et rénovons :'
                        : 'We paint and renovate:'}
                    </Text>
                    <Stack spacing={2}>
                      {city.surfaces[isFr ? 'fr' : 'en'].map(
                        (surface, index) => (
                          <Text
                            key={index}
                            fontSize={{ base: 'md', md: 'lg' }}
                            color='gray.700'
                            pl={4}
                            position='relative'
                            _before={{
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: '#014CC4',
                              fontWeight: 'bold',
                            }}
                          >
                            {surface}
                          </Text>
                        )
                      )}
                    </Stack>
                  </Stack>
                </Container>
              </Box>
            )}

            {/* Section 4 — Processus */}
            {city.processSteps && city.processSteps[isFr ? 'fr' : 'en'] && (
              <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
                <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                  <Stack spacing={6}>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {city.processTitle[isFr ? 'fr' : 'en']}
                    </Heading>
                    <Stack spacing={3}>
                      {city.processSteps[isFr ? 'fr' : 'en'].map(
                        (step, index) => (
                          <Flex key={index} align='flex-start' gap={4}>
                            <Box
                              minW='32px'
                              h='32px'
                              borderRadius='full'
                              bg='#014CC4'
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
                              fontSize={{ base: 'md', md: 'lg' }}
                              color='gray.700'
                              flex={1}
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

            {/* Section 5 — Guides utiles */}
            {guides.length > 0 && (
              <ServiceQuartierGuidesSection
                title={city.guidesTitle[isFr ? 'fr' : 'en']}
                guides={guides}
              />
            )}

            {/* Section 6 — À propos de nos peintres */}
            <ServiceQuartierAboutSection
              title={city.aboutTitle[isFr ? 'fr' : 'en']}
              description={city.aboutDescription[isFr ? 'fr' : 'en']}
              buttonText={city.aboutButtonText?.[isFr ? 'fr' : 'en']}
              buttonLink={city.aboutButtonLink}
            />
          </Stack>
        </Container>

        {/* Section 7 — CTA final */}
        <ServiceCTASection
          title={city.ctaTitle[isFr ? 'fr' : 'en']}
          description={city.ctaDescription[isFr ? 'fr' : 'en']}
        />
      </Box>
    </Fragment>
  );
}
