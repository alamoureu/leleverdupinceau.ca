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
  Button,
  VStack,
  HStack,
  Icon,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../../AppProvider';
import ServiceWhyUsSection from '../components/ServiceWhyUsSection';
import ServiceSubServicesSection from '../components/ServiceSubServicesSection';
import CustomProjectsSection from '../../city-pages/CustomProjectsSection';
import ServiceQuartierGuidesSection from '../service_ville/components/ServiceQuartierGuidesSection';
import ServiceQuartierAboutSection from '../service_ville/components/ServiceQuartierAboutSection';
import ServiceQuartierSectorsSection from '../service_ville/components/ServiceQuartierSectorsSection';
import ServiceCTASection from '../components/ServiceCTASection';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../../home-page/SectorsSection';
import { getSousServiceData } from './index';
import { getServiceQuartierData } from '../service_ville/index';

export default function SousServicePage() {
  const { serviceSlug, subServiceSlug } = useParams();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Check if subServiceSlug is actually a city slug (montreal, laval, longueuil, brossard)
  // This can happen because React Router matches :serviceSlug/:subServiceSlug before :serviceSlug/:citySlug
  const cityData = getServiceQuartierData(serviceSlug, subServiceSlug);
  if (cityData) {
    // Use cityData instead - treat subServiceSlug as citySlug for this page
    const citySlug = subServiceSlug;
    const { service, city } = cityData;
    const serviceName = service.name[isFr ? 'fr' : 'en'];
    const cityName = city.name[isFr ? 'fr' : 'en'] || city.name;

    // Build breadcrumb schema for city page
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
          name: cityName,
          item: `https://leleverdupinceau.ca/services/${serviceSlug}/${citySlug}`,
        },
      ],
    };

    // Build guides array
    const guides = city.guides
      ? city.guides.map((guide) => ({
          title: guide.title[isFr ? 'fr' : 'en'],
          href: guide.href,
        }))
      : [
          {
            title: isFr
              ? 'Comment choisir un peintre professionnel ?'
              : 'How to choose a professional painter?',
            href: '/blog/comment-choisir-un-peintre-professionnel',
          },
          {
            title: isFr
              ? "Prix peinture Montréal / Rive-Sud – ce qu'il faut savoir"
              : 'Painting prices Montreal / South Shore – what you need to know',
            href: '/blog/prix-peinture-montreal',
          },
          {
            title: isFr
              ? 'Erreurs à éviter avant des travaux dans un commerce'
              : 'Mistakes to avoid before work in a business',
            href: '/blog/erreurs-a-eviter-peinture-interieure',
          },
        ];

    // Build sub-services array
    const subServices = city.subServices
      ? city.subServices.interior && city.subServices.exterior
        ? [
            {
              title: city.subServices.interior.title[isFr ? 'fr' : 'en'],
              link: city.subServices.interior.link,
              linkText: city.subServices.interior.linkText[isFr ? 'fr' : 'en'],
            },
            {
              title: city.subServices.exterior.title[isFr ? 'fr' : 'en'],
              link: city.subServices.exterior.link,
              linkText: city.subServices.exterior.linkText[isFr ? 'fr' : 'en'],
            },
          ]
        : city.subServices.residential && city.subServices.commercial
        ? [
            {
              title: city.subServices.residential.title[isFr ? 'fr' : 'en'],
              link: city.subServices.residential.link,
              linkText:
                city.subServices.residential.linkText[isFr ? 'fr' : 'en'],
            },
            {
              title: city.subServices.commercial.title[isFr ? 'fr' : 'en'],
              link: city.subServices.commercial.link,
              linkText:
                city.subServices.commercial.linkText[isFr ? 'fr' : 'en'],
            },
          ]
        : []
      : [];

    // Render city page content
    return (
      <Fragment>
        <Helmet>
          <title>
            {isFr
              ? `${serviceName} à ${cityName} – Le Lever du Pinceau`
              : `${serviceName} in ${cityName} – Le Lever du Pinceau`}
          </title>
          <meta
            name='description'
            content={
              isFr
                ? `Le Lever du Pinceau offre un service complet de ${serviceName.toLowerCase()} à ${cityName}. Peintres professionnels, service rapide et propre.`
                : `Le Lever du Pinceau offers a complete ${serviceName.toLowerCase()} service in ${cityName}. Professional painters, fast and clean service.`
            }
          />
          <link
            rel='canonical'
            href={
              city.canonical ||
              `https://leleverdupinceau.ca/services/${serviceSlug}/${citySlug}`
            }
          />
          <meta name='robots' content='noindex, nofollow' />
          <meta name='googlebot' content='noindex, nofollow' />
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
                    ? `${serviceName} à ${cityName} – Le Lever du Pinceau`
                    : `${serviceName} in ${cityName} – Le Lever du Pinceau`}
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
            </Stack>
          </Container>

          {/* Section 1 — Pourquoi choisir notre service */}
          <ServiceWhyUsSection
            title={city.whyUsTitle[isFr ? 'fr' : 'en']}
            content={city.whyUsContent[isFr ? 'fr' : 'en']}
            introText={city.whyUsIntro[isFr ? 'fr' : 'en']}
            outroText={
              city.whyUsOutro ? city.whyUsOutro[isFr ? 'fr' : 'en'] : null
            }
            borderRadius='0'
          />

          <Container maxW='1440px' px={{ base: 4, md: 6 }}>
            <Stack spacing={0}>
              {/* Section 2 — Sous-services (only if subServices exist) */}
              {subServices.length > 0 && (
                <ServiceSubServicesSection
                  title={city.subServicesTitle[isFr ? 'fr' : 'en']}
                  subServices={subServices}
                />
              )}

              {/* Section 3 — Exemples de projets */}
              {city.projects && city.projects[isFr ? 'fr' : 'en'] && (
                <CustomProjectsSection
                  title={city.projectsTitle[isFr ? 'fr' : 'en']}
                  subtitle={isFr ? 'Exemples :' : 'Examples:'}
                  projects={city.projects[isFr ? 'fr' : 'en']}
                />
              )}

              {/* Section 4 — Guides utiles */}
              <ServiceQuartierGuidesSection
                title={city.guidesTitle[isFr ? 'fr' : 'en']}
                guides={guides}
              />

              {/* Section 5 — À propos de nos peintres */}
              <ServiceQuartierAboutSection
                title={city.aboutTitle[isFr ? 'fr' : 'en']}
                description={city.aboutDescription[isFr ? 'fr' : 'en']}
              />

              {/* Section 6 — Secteurs desservis (only if sectors exist) */}
              {city.sectors && city.sectors.length > 0 && (
                <ServiceQuartierSectorsSection
                  title={
                    isFr
                      ? `Secteurs desservis à ${cityName}`
                      : `Served sectors in ${cityName}`
                  }
                  sectors={city.sectors}
                  serviceSlug={serviceSlug}
                  citySlug={citySlug}
                />
              )}
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
                  fontWeight='medium'
                >
                  {pageData.introFingerText[isFr ? 'fr' : 'en']}
                </Text>
              )}
            </Stack>

            {/* Images */}
            {pageData.images && pageData.images.length > 0 && (
              <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={4}
                mb={{ base: 8, md: 12 }}
              >
                {pageData.images
                  .filter((img) => img.src)
                  .map((img, index) => (
                    <Box
                      key={index}
                      borderRadius='lg'
                      overflow='hidden'
                      h={{ base: '250px', md: '300px' }}
                      boxShadow='md'
                    >
                      <Image
                        src={img.src}
                        alt={img.alt || 'Projet peinture'}
                        w='100%'
                        h='100%'
                        objectFit='cover'
                      />
                    </Box>
                  ))}
              </SimpleGrid>
            )}

            {/* Why Us Section */}
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

            {/* CTA below Why Us (if configured) */}
            {pageData.ctaBelowWhyUs && (
              <Box mt={8} mb={{ base: 8, md: 12 }} textAlign='center'>
                <Link
                  as={RouterLink}
                  to='/peintre-professionnel'
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    variant='outline'
                    borderColor='#014CC4'
                    color='#014CC4'
                    borderRadius='full'
                    fontSize={{ base: 'sm', md: 'md' }}
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: '#014CC4', color: 'white' }}
                  >
                    {isFr
                      ? 'En savoir plus sur nos peintres professionnels'
                      : 'Learn more about our professional painters'}
                  </Button>
                </Link>
              </Box>
            )}

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

            {/* Services/Surfaces List Section (e.g. for Commercial Interior) */}
            {pageData.surfacesTitle && pageData.surfaces && (
              <Box
                py={{ base: 12, md: 16 }}
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
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
                      {pageData.surfaces[isFr ? 'fr' : 'en'].map(
                        (surface, index) => (
                          <Box
                            key={index}
                            p={6}
                            bg='white'
                            borderRadius='lg'
                            border='1px solid'
                            borderColor='gray.200'
                            boxShadow='sm'
                          >
                            <Text
                              color='gray.700'
                              fontSize='md'
                              fontWeight='500'
                            >
                              {surface}
                            </Text>
                          </Box>
                        )
                      )}
                    </SimpleGrid>

                    {/* Optional button below surfaces */}
                    {pageData.aboutButtonLink && pageData.aboutButtonText && (
                      <Box textAlign='center' mt={8}>
                        <Link
                          as={RouterLink}
                          to={pageData.aboutButtonLink}
                          _hover={{ textDecoration: 'none' }}
                        >
                          <Button
                            rightIcon={<ArrowForwardIcon />}
                            variant='outline'
                            borderColor='#014CC4'
                            color='#014CC4'
                            borderRadius='full'
                            fontSize={{ base: 'sm', md: 'md' }}
                            px={{ base: 5, md: 7 }}
                            py={{ base: 3, md: 4 }}
                            _hover={{ bg: '#014CC4', color: 'white' }}
                          >
                            {pageData.aboutButtonText[isFr ? 'fr' : 'en']}
                          </Button>
                        </Link>
                      </Box>
                    )}
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
