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
import ServiceSubServicesSection from '../components/ServiceSubServicesSection';
import CustomProjectsSection from '../../city-pages/CustomProjectsSection';
import ServiceQuartierGuidesSection from './components/ServiceQuartierGuidesSection';
import ServiceQuartierAboutSection from './components/ServiceQuartierAboutSection';
import ServiceQuartierSectorsSection from './components/ServiceQuartierSectorsSection';
import ServiceCTASection from '../components/ServiceCTASection';
import { getServiceQuartierData } from './index';

export default function ServiceQuartierPage() {
  const { serviceSlug, citySlug } = useParams();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Get data for this service-city combination
  const pageData = getServiceQuartierData(serviceSlug, citySlug);

  // If data doesn't exist, redirect to 404 page
  if (!pageData) {
    return <Navigate to='/404' replace />;
  }

  const { service, city } = pageData;
  const serviceName = service.name[isFr ? 'fr' : 'en'];
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
        name: cityName,
        item: `https://leleverdupinceau.ca/services/${serviceSlug}/${citySlug}`,
      },
    ],
  };

  // Build guides array from data or use defaults
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

  // Build sub-services array (handle both interior/exterior and residential/commercial structures)
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
            linkText: city.subServices.residential.linkText[isFr ? 'fr' : 'en'],
          },
          {
            title: city.subServices.commercial.title[isFr ? 'fr' : 'en'],
            link: city.subServices.commercial.link,
            linkText: city.subServices.commercial.linkText[isFr ? 'fr' : 'en'],
          },
        ]
      : []
    : [];

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
              {city.introduction && (
                <>
                  {Array.isArray(city.introduction[isFr ? 'fr' : 'en']) ? (
                    city.introduction[isFr ? 'fr' : 'en'].map(
                      (paragraph, index) => (
                        <Text
                          key={index}
                          fontSize={{ base: 'md', md: 'lg' }}
                          color='gray.600'
                          lineHeight='1.7'
                          maxW='900px'
                        >
                          {paragraph}
                        </Text>
                      )
                    )
                  ) : (
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                      maxW='900px'
                    >
                      {city.introduction[isFr ? 'fr' : 'en']}
                    </Text>
                  )}
                </>
              )}
              {city.introFingerText &&
                city.introFingerText[isFr ? 'fr' : 'en'] && (
                  <Text
                    fontSize={{ base: 'lg', md: 'xl' }}
                    fontWeight='bold'
                    color='gray.800'
                    maxW='900px'
                  >
                    {city.introFingerText[isFr ? 'fr' : 'en']}
                  </Text>
                )}
            </Stack>

            {/* Images Section */}
            {city.images && city.images.length > 0 && (
              <Box mb={{ base: 12, md: 16 }}>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 3 }}
                  spacing={4}
                  maxW='1200px'
                >
                  {city.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img.src}
                      alt={img.alt}
                      borderRadius='lg'
                      w='100%'
                      h={{ base: '200px', md: '250px' }}
                      objectFit='cover'
                    />
                  ))}
                </SimpleGrid>
              </Box>
            )}
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
