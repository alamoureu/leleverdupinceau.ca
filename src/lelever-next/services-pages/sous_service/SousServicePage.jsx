import React, { Fragment, useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
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
import ServiceQuartierGuidesSection from '../service_ville/components/ServiceQuartierGuidesSection';
import ServiceQuartierAboutSection from '../service_ville/components/ServiceQuartierAboutSection';
import ServiceCTASection from '../components/ServiceCTASection';
import ServiceCitiesSectorsSection from '../components/ServiceCitiesSectorsSection';
import { getSousServiceData } from './index';

export default function SousServicePage() {
  const { serviceSlug, subServiceSlug } = useParams();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Get data for this service-subService combination
  const pageData = getSousServiceData(serviceSlug, subServiceSlug);

  // If data doesn't exist, redirect to services page
  if (!pageData) {
    return <Navigate to='/services' replace />;
  }

  const subServiceName = pageData.name[isFr ? 'fr' : 'en'];
  const serviceName =
    serviceSlug === 'peinture-commerciale'
      ? isFr
        ? 'Peinture commerciale'
        : 'Commercial painting'
      : isFr
      ? 'Peinture résidentielle'
      : 'Residential painting';

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
            ? `${subServiceName} – Le Lever du Pinceau`
            : `${subServiceName} – Le Lever du Pinceau`}
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
                href='/'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {isFr ? 'Accueil' : 'Home'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Link
                href='/services'
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {isFr ? 'Services' : 'Services'}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Link
                href={`/services/${serviceSlug}`}
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {serviceName}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Text
                color='gray.900'
                fontWeight='500'
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
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color='gray.700'
              lineHeight='1.8'
              mb={{ base: 8, md: 12 }}
              maxW='900px'
            >
              {pageData.introduction[isFr ? 'fr' : 'en']}
            </Text>

            {/* Images */}
            {pageData.images && pageData.images.length > 0 && (
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={4}
                mb={{ base: 8, md: 12 }}
              >
                {pageData.images.map((img, index) => (
                  <Box
                    key={index}
                    borderRadius='lg'
                    w='100%'
                    h={{ base: '250px', md: '300px' }}
                    border='2px dashed'
                    borderColor='gray.300'
                    bg='gray.50'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    color='gray.500'
                    fontSize='sm'
                  >
                    {isFr ? 'Image manquante' : 'Missing image'}
                  </Box>
                ))}
              </SimpleGrid>
            )}

            {/* Why Us Section */}
            <ServiceWhyUsSection
              title={pageData.whyUsTitle[isFr ? 'fr' : 'en']}
              introText={pageData.whyUsIntro[isFr ? 'fr' : 'en']}
              content={pageData.whyUsContent[isFr ? 'fr' : 'en']}
              outroText={pageData.whyUsOutro[isFr ? 'fr' : 'en']}
            />

            {/* Complementary Services Section */}
            {pageData.complementaryServices && (
              <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
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
                    <SimpleGrid
                      columns={{ base: 1, md: 3 }}
                      spacing={6}
                      maxW='1000px'
                    >
                      {pageData.complementaryServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
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
                              borderColor: '#014CC4',
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
                              <HStack spacing={2} color='#014CC4' mt='auto'>
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

            {/* Cities Section */}
            {pageData.cities && (
              <ServiceCitiesSectorsSection
                title={pageData.citiesTitle[isFr ? 'fr' : 'en']}
                serviceSlug={serviceSlug}
                cities={pageData.cities.map((city) => ({
                  name:
                    typeof city.name === 'object'
                      ? city.name[isFr ? 'fr' : 'en']
                      : city.name,
                  slug: city.href.split('/').pop(),
                  href: city.href,
                }))}
                showViewLink={false}
              />
            )}

            {/* Projects Section */}
            {pageData.projects && (
              <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
                <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                  <Stack spacing={8}>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {pageData.projectsTitle[isFr ? 'fr' : 'en']}
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                      {pageData.projects[isFr ? 'fr' : 'en'].map(
                        (project, index) => (
                          <Box
                            key={index}
                            p={6}
                            bg='gray.50'
                            borderRadius='lg'
                            border='1px solid'
                            borderColor='gray.200'
                          >
                            <HStack spacing={3}>
                              <Icon
                                as={FontAwesomeIcon}
                                icon={faCheckCircle}
                                color='#014CC4'
                                boxSize={5}
                              />
                              <Text color='gray.700' fontSize='md'>
                                {project}
                              </Text>
                            </HStack>
                          </Box>
                        )
                      )}
                    </SimpleGrid>
                  </Stack>
                </Container>
              </Box>
            )}

            {/* Process Section (if exists) */}
            {pageData.processTitle && pageData.processSteps && (
              <Box
                py={{ base: 12, md: 16 }}
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

            {/* Surfaces Section (if exists) */}
            {pageData.surfacesTitle && pageData.surfaces && (
              <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
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
                              color='#014CC4'
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

            {/* Guides Section */}
            {guides.length > 0 && (
              <ServiceQuartierGuidesSection
                title={pageData.guidesTitle[isFr ? 'fr' : 'en']}
                guides={guides}
              />
            )}

            {/* About Section */}
            <ServiceQuartierAboutSection
              title={pageData.aboutTitle[isFr ? 'fr' : 'en']}
              description={pageData.aboutDescription[isFr ? 'fr' : 'en']}
              buttonText={pageData.aboutButtonText[isFr ? 'fr' : 'en']}
              buttonLink={pageData.aboutButtonLink}
            />
          </Stack>
        </Container>

        {/* CTA Section - Full Width */}
        <ServiceCTASection
          title={pageData.ctaTitle[isFr ? 'fr' : 'en']}
          description={pageData.ctaDescription[isFr ? 'fr' : 'en']}
        />
      </Box>
    </Fragment>
  );
}
