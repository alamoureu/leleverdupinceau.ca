import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  HStack,
  Image,
  Grid,
  SimpleGrid,
  Flex,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import TrustBanner from '../home-page/TrustBanner';
import CityWhyUsSection from './CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import CityCTASection from './CityCTASection';

/**
 * Template partagé pour les pages de ville / secteur (Site LP).
 * Réutilise TrustBanner, CityWhyUsSection, BeforeAfterCarouselSection, FAQSection, CityCTASection.
 */
export default function CitySectorPage({ config }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const t = (value) => (typeof value === 'string' ? value : value?.[isFr ? 'fr' : 'en']);

  const {
    cityName,
    slug,
    headerImage,
    headerAlt,
    heroTitle,
    heroLead,
    heroBody,
    checkmarksTitle,
    checkmarksIntro,
    checkmarks,
    contextsTitle,
    contextsSubtitle,
    contexts,
    beforeAfterTitle,
    beforeAfterSubtitle,
    beforeAfterPairs,
    whyUsTitle,
    whyUsSubtitle,
    whyUsCards,
    sectorsTitle,
    sectorsSubtitle,
    sectors,
    sectorsNote,
    faqs,
    faqTitle,
    internalLinksTitle,
    internalLinksSubtitle,
    internalLinks,
    seoTitle,
    seoDescription,
    areaServed = [],
  } = config;

  const canonical = `https://www.leleverdupinceau.ca/secteurs/${slug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isFr ? 'Accueil' : 'Home',
        item: 'https://www.leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isFr ? 'Secteurs desservis' : 'Service areas',
        item: 'https://www.leleverdupinceau.ca/secteurs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cityName,
        item: canonical,
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Painter',
    name: `Le Lever du Pinceau - ${cityName}`,
    url: canonical,
    telephone: '+14388680772',
    areaServed: [
      { '@type': 'City', name: cityName },
      ...areaServed.map((name) => ({ '@type': 'Neighborhood', name })),
    ],
  };

  const localizedFaqs = faqs.map((faq) => ({
    question: t(faq.question),
    answer: t(faq.answer),
  }));

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: localizedFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const localizedContexts = contexts.map((ctx) => ({
    number: ctx.number,
    title: t(ctx.title),
    description: t(ctx.description),
  }));

  const localizedWhyUs = whyUsCards.map((card) => ({
    number: card.number,
    title: t(card.title),
    description: t(card.description),
  }));

  const localizedLinks = internalLinks.map((link) => ({
    to: link.to,
    label: t(link.label),
  }));

  const localizedBeforeAfter = beforeAfterPairs.map((pair) => ({
    before: pair.before,
    after: pair.after,
    description: t(pair.description),
  }));

  return (
    <Fragment>
      <Helmet>
        <title>{t(seoTitle)}</title>
        <meta name="description" content={t(seoDescription)} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema)}</script>
      </Helmet>

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 12, md: 16, lg: 20 }}>
          <Grid
            templateColumns={{ base: '1fr', md: '6fr 4fr' }}
            gap={{ base: 6, md: 8, lg: 10 }}
            mb={{ base: 16, md: 20 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              <HStack
                spacing={3}
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.600"
                mb={{ base: 4, md: 6 }}
                flexWrap="wrap"
              >
                <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }} color="gray.600">
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text>›</Text>
                <Link
                  as={RouterLink}
                  to="/secteurs"
                  _hover={{ textDecoration: 'underline' }}
                  color="gray.600"
                >
                  {isFr ? 'Secteurs desservis' : 'Service areas'}
                </Link>
                <Text>›</Text>
                <Text color="gray.800" fontWeight="medium">
                  {cityName}
                </Text>
              </HStack>

              <Stack spacing={5} textAlign="left">
                <Heading
                  as="h1"
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {t(heroTitle)}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {t(heroLead)}
                </Text>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7" maxW="900px">
                  {t(heroBody)}
                </Text>
                <HStack spacing={4} pt={2} flexWrap="wrap">
                  <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none' }}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      bg="brand.500"
                      color="white"
                      borderRadius="full"
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 6, md: 8 }}
                      size="lg"
                      _hover={{ bg: 'brand.600' }}
                    >
                      {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
                    </Button>
                  </Link>
                  <Link as={RouterLink} to="/realisations" _hover={{ textDecoration: 'none' }}>
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant="outline"
                      borderColor="brand.500"
                      color="brand.500"
                      borderRadius="full"
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 6, md: 8 }}
                      size="lg"
                      _hover={{ bg: 'brand.500', color: 'white' }}
                    >
                      {isFr ? 'Voir nos réalisations' : 'View our projects'}
                    </Button>
                  </Link>
                </HStack>
              </Stack>
            </Stack>

            <Box
              w="100%"
              aspectRatio={{ base: '1', md: '4/3' }}
              borderRadius="xl"
              overflow="hidden"
              bg="gray.100"
            >
              <Image
                src={headerImage}
                alt={t(headerAlt)}
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

        <Box
          bg="gray.50"
          borderTop="1px solid"
          borderTopColor="gray.200"
          borderBottom="1px solid"
          borderBottomColor="gray.200"
        >
          <TrustBanner />
        </Box>

        <Container maxW="1440px" px={{ base: 4, md: 6 }} pt={{ base: 10, md: 14, lg: 16 }}>
          <Stack spacing={0}>
            <CityWhyUsSection
              cityName={cityName}
              customTitle={t(checkmarksTitle)}
              whyUsIntroText={t(checkmarksIntro)}
              whyUsContent={checkmarks.map(t)}
            />

            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Stack spacing={8}>
                <Stack spacing={3} textAlign="center">
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="gray.800"
                  >
                    {t(contextsTitle)}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {t(contextsSubtitle)}
                  </Text>
                </Stack>
                <Flex
                  flexWrap="wrap"
                  gap={{ base: 4, md: 6 }}
                  justify="center"
                  maxW="1000px"
                  mx="auto"
                >
                  {localizedContexts.map((ctx) => (
                    <Box
                      key={ctx.number}
                      w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                      bg="white"
                      p={{ base: 5, md: 6 }}
                      borderRadius="xl"
                      border="1px solid"
                      borderColor="gray.200"
                      boxShadow="sm"
                    >
                      <Stack spacing={3}>
                        <Text fontSize="2xl" fontWeight="bold" color="brand.100" lineHeight="1">
                          {ctx.number}
                        </Text>
                        <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                          {ctx.title}
                        </Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                          {ctx.description}
                        </Text>
                      </Stack>
                    </Box>
                  ))}
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </Container>

        <BeforeAfterCarouselSection
          isFr={isFr}
          title={t(beforeAfterTitle)}
          subtitle={t(beforeAfterSubtitle)}
          images={localizedBeforeAfter}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={3} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {t(whyUsTitle)}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                  {t(whyUsSubtitle)}
                </Text>
              </Stack>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }} maxW="1000px" mx="auto">
                {localizedWhyUs.map((card) => (
                  <Box
                    key={card.number}
                    bg="white"
                    p={{ base: 5, md: 6 }}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                  >
                    <Stack spacing={3}>
                      <Text fontSize="2xl" fontWeight="bold" color="brand.100" lineHeight="1">
                        {card.number}
                      </Text>
                      <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                        {card.title}
                      </Text>
                      <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                        {card.description}
                      </Text>
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {sectors?.length > 0 && (
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Stack spacing={8}>
                <Stack spacing={3} textAlign="center">
                  <Heading
                    as="h2"
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight="bold"
                    color="gray.800"
                  >
                    {t(sectorsTitle)}
                  </Heading>
                  <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                    {t(sectorsSubtitle)}
                  </Text>
                </Stack>
                <SimpleGrid
                  columns={{ base: 1, md: Math.min(3, sectors.length) }}
                  spacing={{ base: 3, md: 4 }}
                  maxW="700px"
                  mx="auto"
                >
                  {sectors.map((secteur) => (
                    <Box
                      key={secteur}
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={{ base: 4, md: 5 }}
                      textAlign="center"
                      boxShadow="sm"
                      minH={{ base: '60px', md: '70px' }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'sm', md: 'md' }}>
                        {secteur}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>
                {sectorsNote && (
                  <Text
                    fontSize={{ base: 'sm', md: 'md' }}
                    color="gray.500"
                    textAlign="center"
                    maxW="580px"
                    mx="auto"
                  >
                    {t(sectorsNote)}
                  </Text>
                )}
              </Stack>
            </Box>
          </Container>
        )}

        <FAQSection faqsOverride={localizedFaqs} title={t(faqTitle)} />

        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={3} textAlign="center">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {t(internalLinksTitle)}
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="580px" mx="auto">
                  {t(internalLinksSubtitle)}
                </Text>
              </Stack>
              <SimpleGrid
                columns={{ base: 1, sm: 2, md: 3 }}
                spacing={{ base: 3, md: 4 }}
                maxW="900px"
                mx="auto"
              >
                {localizedLinks.map((link) => (
                  <Link key={link.to} as={RouterLink} to={link.to} _hover={{ textDecoration: 'none' }}>
                    <Box
                      px={{ base: 4, md: 5 }}
                      py={{ base: 4, md: 5 }}
                      bg="gray.50"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      textAlign="center"
                      h="100%"
                      minH={{ base: '60px', md: '68px' }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _hover={{ borderColor: 'brand.500', bg: 'brand.50' }}
                      transition="all 0.2s"
                    >
                      <HStack spacing={2} justify="center" align="center">
                        <Text
                          fontWeight="medium"
                          color="gray.700"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.4"
                        >
                          {link.label}
                        </Text>
                        <ArrowForwardIcon color="brand.500" boxSize={3} flexShrink={0} />
                      </HStack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        <CityCTASection cityName={cityName} />
      </Box>
    </Fragment>
  );
}
