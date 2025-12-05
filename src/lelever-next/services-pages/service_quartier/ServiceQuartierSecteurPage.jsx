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
  Image,
  SimpleGrid,
} from '@chakra-ui/react';
import appContext from '../../../AppProvider';
import ServiceWhyUsSection from '../components/ServiceWhyUsSection';
import ServiceQuartierSecteurComplementaryServices from './components/ServiceQuartierSecteurComplementaryServices';
import ServiceQuartierSecteurRoomsSection from './components/ServiceQuartierSecteurRoomsSection';
import ServiceQuartierSecteurProcessSection from './components/ServiceQuartierSecteurProcessSection';
import ServiceQuartierGuidesSection from '../service_ville/components/ServiceQuartierGuidesSection';
import ServiceQuartierAboutSection from '../service_ville/components/ServiceQuartierAboutSection';
import ServiceCTASection from '../components/ServiceCTASection';
import { getServiceQuartierSecteurData } from './index';

export default function ServiceQuartierSecteurPage() {
  const { serviceSlug, citySlug, neighborhoodSlug } = useParams();
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  // Get data for this service-city-neighborhood combination
  const pageData = getServiceQuartierSecteurData(
    serviceSlug,
    citySlug,
    neighborhoodSlug
  );

  // If data doesn't exist, redirect to services page
  if (!pageData) {
    return <Navigate to='/services' replace />;
  }

  const { service, city, neighborhood } = pageData;
  const serviceName = service.name[isFr ? 'fr' : 'en'];
  const cityName = city.name[isFr ? 'fr' : 'en'] || city.name;
  // Use neighborhood name from data if available, otherwise format from slug
  const neighborhoodName =
    neighborhood.name?.[isFr ? 'fr' : 'en'] ||
    neighborhood.name ||
    neighborhoodSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

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
      {
        '@type': 'ListItem',
        position: 5,
        name: neighborhoodName,
        item: `https://leleverdupinceau.ca/services/${serviceSlug}/${citySlug}/${neighborhoodSlug}`,
      },
    ],
  };

  // Build meta description from introduction
  const metaDescription = neighborhood.introduction
    ? typeof neighborhood.introduction === 'string'
      ? neighborhood.introduction.substring(0, 155) + '...'
      : neighborhood.introduction[isFr ? 'fr' : 'en']?.substring(0, 155) + '...'
    : isFr
    ? `${serviceName} à ${neighborhoodName} - Le Lever du Pinceau`
    : `${serviceName} in ${neighborhoodName} - Le Lever du Pinceau`;

  return (
    <Fragment>
      <Helmet>
        <title>
          {typeof neighborhood.h1 === 'string'
            ? neighborhood.h1
            : neighborhood.h1?.[isFr ? 'fr' : 'en'] ||
              (isFr
                ? `${serviceName} à ${neighborhoodName} – Le Lever du Pinceau`
                : `${serviceName} in ${neighborhoodName} – Le Lever du Pinceau`)}{' '}
          | Le Lever du Pinceau
        </title>
        <meta name='description' content={metaDescription} />
        <link
          rel='canonical'
          href={
            neighborhood.canonical ||
            `https://leleverdupinceau.ca/services/${serviceSlug}/${citySlug}/${neighborhoodSlug}`
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
              <Link
                as={RouterLink}
                to={`/services/${serviceSlug}/${citySlug}`}
                _hover={{ textDecoration: 'underline' }}
                color='gray.600'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='normal'
              >
                {cityName}
              </Link>
              <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
              <Text
                color='gray.800'
                fontWeight='bold'
                fontSize={{ base: 'md', md: 'lg' }}
                whiteSpace='nowrap'
              >
                {neighborhoodName}
              </Text>
            </Flex>

            {/* H1 et Introduction */}
            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
              <Heading
                as='h1'
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
                lineHeight='1.2'
              >
                {typeof neighborhood.h1 === 'string'
                  ? neighborhood.h1
                  : neighborhood.h1?.[isFr ? 'fr' : 'en'] ||
                    (isFr
                      ? `${serviceName} à ${neighborhoodName} – Le Lever du Pinceau`
                      : `${serviceName} in ${neighborhoodName} – Le Lever du Pinceau`)}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {typeof neighborhood.introduction === 'string'
                  ? neighborhood.introduction
                  : neighborhood.introduction?.[isFr ? 'fr' : 'en'] ||
                    neighborhood.introduction}
              </Text>
            </Stack>

            {/* Images Section */}
            {neighborhood.images && neighborhood.images.length > 0 && (
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={{ base: 4, md: 6 }}
                mt={{ base: 8, md: 12 }}
                mb={{ base: 8, md: 12 }}
              >
                {neighborhood.images.map((img, index) => (
                  <Box
                    key={index}
                    borderRadius='lg'
                    overflow='hidden'
                    boxShadow='md'
                    _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
                    transition='all 0.3s ease'
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || 'peinture intérieure Griffintown'}
                      w='100%'
                      h={{ base: '200px', md: '250px', lg: '300px' }}
                      objectFit='cover'
                    />
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Stack>
        </Container>

        {/* Section 1 - Why Us */}
        {neighborhood.whyUs && (
          <ServiceWhyUsSection
            title={
              typeof neighborhood.whyUs.title === 'string'
                ? neighborhood.whyUs.title
                : neighborhood.whyUs.title?.[isFr ? 'fr' : 'en'] ||
                  neighborhood.whyUs.title
            }
            content={
              Array.isArray(neighborhood.whyUs.content)
                ? neighborhood.whyUs.content.map((item) =>
                    typeof item === 'string'
                      ? item
                      : item?.[isFr ? 'fr' : 'en'] || item
                  )
                : typeof neighborhood.whyUs.content === 'object' &&
                  neighborhood.whyUs.content
                ? neighborhood.whyUs.content[isFr ? 'fr' : 'en'] || []
                : []
            }
            introText={
              neighborhood.whyUs.introText
                ? typeof neighborhood.whyUs.introText === 'string'
                  ? neighborhood.whyUs.introText
                  : neighborhood.whyUs.introText[isFr ? 'fr' : 'en']
                : null
            }
            outroText={
              neighborhood.whyUs.outroText
                ? typeof neighborhood.whyUs.outroText === 'string'
                  ? neighborhood.whyUs.outroText
                  : neighborhood.whyUs.outroText[isFr ? 'fr' : 'en']
                : null
            }
          />
        )}

        {/* Section 2 - Complementary Services */}
        {neighborhood.complementaryServices && (
          <ServiceQuartierSecteurComplementaryServices
            title={
              typeof neighborhood.complementaryServices.title === 'string'
                ? neighborhood.complementaryServices.title
                : neighborhood.complementaryServices.title?.[
                    isFr ? 'fr' : 'en'
                  ] || neighborhood.complementaryServices.title
            }
            services={neighborhood.complementaryServices.services.map(
              (service) => ({
                title:
                  typeof service.title === 'string'
                    ? service.title
                    : service.title?.[isFr ? 'fr' : 'en'] || service.title,
                href: service.href,
              })
            )}
          />
        )}

        {/* Section 3 - Rooms */}
        {neighborhood.rooms && (
          <ServiceQuartierSecteurRoomsSection
            title={
              typeof neighborhood.rooms.title === 'string'
                ? neighborhood.rooms.title
                : neighborhood.rooms.title?.[isFr ? 'fr' : 'en'] ||
                  neighborhood.rooms.title
            }
            rooms={
              Array.isArray(neighborhood.rooms.rooms)
                ? neighborhood.rooms.rooms.map((room) =>
                    typeof room === 'string'
                      ? room
                      : room?.[isFr ? 'fr' : 'en'] || room
                  )
                : []
            }
            expertise={
              Array.isArray(neighborhood.rooms.expertise)
                ? neighborhood.rooms.expertise.map((exp) =>
                    typeof exp === 'string'
                      ? exp
                      : exp?.[isFr ? 'fr' : 'en'] || exp
                  )
                : []
            }
          />
        )}

        {/* Section 4 - Process */}
        {neighborhood.process && (
          <ServiceQuartierSecteurProcessSection
            title={
              typeof neighborhood.process.title === 'string'
                ? neighborhood.process.title
                : neighborhood.process.title?.[isFr ? 'fr' : 'en'] ||
                  neighborhood.process.title
            }
            steps={
              Array.isArray(neighborhood.process.steps)
                ? neighborhood.process.steps.map((step) =>
                    typeof step === 'string'
                      ? step
                      : step?.[isFr ? 'fr' : 'en'] || step
                  )
                : []
            }
          />
        )}

        {/* Section 5 - Guides */}
        {neighborhood.guides && neighborhood.guides.length > 0 && (
          <ServiceQuartierGuidesSection
            title={
              neighborhood.guidesTitle
                ? typeof neighborhood.guidesTitle === 'string'
                  ? neighborhood.guidesTitle
                  : neighborhood.guidesTitle[isFr ? 'fr' : 'en']
                : isFr
                ? 'Bien préparer votre projet de peinture'
                : 'Prepare your painting project well'
            }
            guides={neighborhood.guides.map((guide) =>
              typeof guide === 'string'
                ? { title: guide, href: '#' }
                : {
                    title:
                      typeof guide.title === 'string'
                        ? guide.title
                        : guide.title?.[isFr ? 'fr' : 'en'] || guide.title,
                    href: guide.href,
                  }
            )}
          />
        )}

        {/* Section 6 - About */}
        {neighborhood.about && (
          <ServiceQuartierAboutSection
            title={
              typeof neighborhood.about.title === 'string'
                ? neighborhood.about.title
                : neighborhood.about.title?.[isFr ? 'fr' : 'en'] ||
                  neighborhood.about.title
            }
            description={
              neighborhood.about.description
                ? typeof neighborhood.about.description === 'string'
                  ? neighborhood.about.description
                  : neighborhood.about.description[isFr ? 'fr' : 'en']
                : null
            }
            buttonText={
              neighborhood.about.buttonText
                ? typeof neighborhood.about.buttonText === 'string'
                  ? neighborhood.about.buttonText
                  : neighborhood.about.buttonText[isFr ? 'fr' : 'en']
                : null
            }
            buttonLink={neighborhood.about.buttonLink || null}
          />
        )}

        {/* Section 7 - CTA */}
        {neighborhood.cta && (
          <ServiceCTASection
            title={
              typeof neighborhood.cta.title === 'string'
                ? neighborhood.cta.title
                : neighborhood.cta.title?.[isFr ? 'fr' : 'en'] ||
                  neighborhood.cta.title
            }
            description={
              neighborhood.cta.description
                ? typeof neighborhood.cta.description === 'string'
                  ? neighborhood.cta.description
                  : neighborhood.cta.description[isFr ? 'fr' : 'en']
                : null
            }
            buttonText={
              neighborhood.cta.buttonText
                ? typeof neighborhood.cta.buttonText === 'string'
                  ? neighborhood.cta.buttonText
                  : neighborhood.cta.buttonText[isFr ? 'fr' : 'en']
                : null
            }
          />
        )}
      </Box>
    </Fragment>
  );
}
