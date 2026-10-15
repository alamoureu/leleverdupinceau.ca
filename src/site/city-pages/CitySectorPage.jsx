import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  HStack,
  Image,
  SimpleGrid,
  Flex,
  Button,
  useDisclosure,
  Icon
} from '@chakra-ui/react';
import { FaArrowRight as ArrowForwardIcon } from 'react-icons/fa';
import appContext from '../../AppProvider';
import HeroSection from '../home-page/HeroSection';
import SubmissionModal from '../home-page/SubmissionModal';
import CityWhyUsSection from './CityWhyUsSection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ReviewsSection from '../home-page/ReviewsSection';
import ContactFormSection from '../home-page/ContactFormSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import ControlSection from '../home-page/ControlSection';
import SEOHead from '../seo/SEOHead';
import { SITE_URL } from '../seo/config';
import { COMPANY_PHONE_E164 } from '../constants/company';

/**
 * Template partagé pour les pages de ville / secteur (Site LP).
 * Réutilise HeroSection, CityWhyUsSection, BeforeAfterCarouselSection, FAQSection, FinalCTASection.
 */
export default function CitySectorPage({ config }) {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    localInsight,
    checkmarksTitle,
    checkmarksIntro,
    checkmarks,
    contextsTitle,
    contextsSubtitle,
    contexts = [],
    serviceCardsTitle,
    serviceCardsSubtitle,
    serviceCards = [],
    beforeAfterTitle,
    beforeAfterSubtitle,
    beforeAfterPairs = [],
    whyUsTitle,
    whyUsSubtitle,
    whyUsCards = [],
    control,
    sectorsTitle,
    sectorsSubtitle,
    sectors,
    sectorsNote,
    faqs = [],
    faqTitle,
    internalLinksTitle,
    internalLinksSubtitle,
    internalLinks = [],
    seoTitle,
    seoDescription,
    finalCtaSubtitle,
    areaServed = [],
  } = config;

  const canonicalPath = `/secteurs/${slug}`;
  const canonical = `${SITE_URL}${canonicalPath}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isFr ? 'Accueil' : 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isFr ? 'Secteurs desservis' : 'Service areas',
        item: `${SITE_URL}/secteurs`,
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
    telephone: COMPANY_PHONE_E164,
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
    to: ctx.to,
    linkLabel: ctx.linkLabel ? t(ctx.linkLabel) : null,
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

  const localizedServiceCards = serviceCards.map((card) => ({
    title: t(card.title),
    description: t(card.description),
    to: card.to,
    image: card.image,
    imageScale: card.imageScale,
  }));

  return (
    <Fragment>
      <SEOHead
        title={t(seoTitle)}
        description={t(seoDescription)}
        canonicalPath={canonicalPath}
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqPageSchema]}
      />

      <Box w="100%" minW={0} maxW="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={cityName}
          title={t(heroTitle)}
          subtitle={t(heroLead)}
          description={heroBody ? t(heroBody) : undefined}
          imageBackground={headerImage}
          imageAlt={t(headerAlt)}
          buttonText={isFr ? 'Soumission gratuite' : 'Free quote'}
          breadcrumb={[
            { label: isFr ? 'Accueil' : 'Home', to: '/' },
            { label: isFr ? 'Secteurs desservis' : 'Service areas', to: '/secteurs' },
            { label: cityName },
          ]}
        />

        <CityWhyUsSection
          cityName={cityName}
          customTitle={t(checkmarksTitle)}
          localInsight={t(localInsight)}
          whyUsIntroText={t(checkmarksIntro)}
          whyUsContent={checkmarks.map(t)}
        />

        <Container maxW="1440px" px={{ base: 4, md: 6 }}>
          <Stack spacing={0}>
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
                      display="flex"
                      flexDirection="column"
                    >
                      <Stack spacing={3} flex="1">
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
                      {ctx.to && (
                        <Link
                          as={RouterLink}
                          to={ctx.to}
                          mt={4}
                          _hover={{ textDecoration: 'none' }}
                        >
                          <Button
                            variant="ctaOutline"
                            rightIcon={<ArrowForwardIcon />}
                            borderRadius="full"
                            size="sm"
                            px={5}
                          >
                            {ctx.linkLabel || (isFr ? 'En savoir plus' : 'Learn more')}
                          </Button>
                        </Link>
                      )}
                    </Box>
                  ))}
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </Container>

        {localizedServiceCards.length > 0 && (
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
                    {t(serviceCardsTitle)}
                  </Heading>
                  {serviceCardsSubtitle && (
                    <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="680px" mx="auto">
                      {t(serviceCardsSubtitle)}
                    </Text>
                  )}
                </Stack>
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacing={{ base: 4, md: 6 }}
                  maxW="900px"
                  mx="auto"
                >
                  {localizedServiceCards.map((card) => (
                    <Box
                      key={card.to}
                      bg="white"
                      borderRadius="xl"
                      overflow="hidden"
                      border="1px solid"
                      borderColor="gray.200"
                      boxShadow="sm"
                      _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                      transition="all 0.2s"
                    >
                      {card.image && (
                        <Box overflow="hidden" aspectRatio="16/10">
                          <Image
                            src={card.image}
                            alt={card.title}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            transform={card.imageScale ? `scale(${card.imageScale})` : undefined}
                            loading="lazy"
                            decoding="async"
                          />
                        </Box>
                      )}
                      <Stack spacing={4} p={{ base: 5, md: 6 }}>
                        <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'md', md: 'lg' }}>
                          {card.title}
                        </Text>
                        <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.600" lineHeight="1.6">
                          {card.description}
                        </Text>
                        <Link as={RouterLink} to={card.to} _hover={{ textDecoration: 'none' }}>
                          <Button
                            variant="ctaOutline"
                            rightIcon={<ArrowForwardIcon />}
                            borderRadius="full"
                            size="sm"
                            px={5}
                          >
                            {isFr ? 'En savoir plus' : 'Learn more'}
                          </Button>
                        </Link>
                      </Stack>
                    </Box>
                  ))}
                </SimpleGrid>
              </Stack>
            </Container>
          </Box>
        )}

        <BeforeAfterCarouselSection
          isFr={isFr}
          title={t(beforeAfterTitle)}
          subtitle={t(beforeAfterSubtitle)}
          images={localizedBeforeAfter}
          sectionPaddingTop={{ base: 12, md: 16, lg: 20 }}
          sectionPaddingBottom={{ base: 12, md: 16, lg: 20 }}
        />

        {control ? (
          <ControlSection
            title={t(control.title)}
            subtitle={t(control.subtitle)}
            cards={control.cards.map((card) => ({
              title: t(card.title),
              subtitle: t(card.subtitle),
              description: t(card.description),
            }))}
            pt={{ base: 12, md: 16 }}
          />
        ) : (
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
        )}

        <ReviewsSection
          hideButton
          title={
            isFr
              ? `Ce que disent nos clients près de ${cityName}`
              : `What clients near ${cityName} say`
          }
          subtitle={
            isFr
              ? 'Avis Google vérifiés - les mêmes standards de chantier partout sur la Rive-Sud.'
              : 'Verified Google reviews - the same job-site standards across the South Shore.'
          }
          sectionBg="white"
        />

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
                <Flex
                  flexWrap="wrap"
                  gap={{ base: 3, md: 4 }}
                  justify="center"
                  maxW="700px"
                  mx="auto"
                >
                  {sectors.map((secteur) => (
                    <Box
                      key={secteur}
                      w={{ base: '100%', md: 'calc(33.333% - 11px)' }}
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
                </Flex>
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

        <ContactFormSection
          sectionPaddingTop={{ base: 12, md: 16 }}
          sectionPaddingBottom={{ base: 12, md: 16 }}
          sectionBg="gray.50"
        />

        <FAQSection
          faqsOverride={localizedFaqs}
          title={t(faqTitle)}
          emitSchema={false}
        />

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
                        <Icon as={ArrowForwardIcon} color="brand.500" boxSize={3} flexShrink={0} />
                      </HStack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={isFr ? `Obtenez votre soumission pour un projet de peinture à ${cityName}` : `Get your quote for a painting project in ${cityName}`}
          subtitle={
            finalCtaSubtitle
              ? t(finalCtaSubtitle)
              : isFr
                ? 'Nous offrons des services rapides, fiables et professionnels pour tous vos travaux de peinture résidentiels, commerciaux ou industriels.'
                : 'We offer fast, reliable and professional services for all your residential, commercial or industrial painting work.'
          }
        />
      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
