import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Link,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaArrowRight as ArrowForwardIcon } from 'react-icons/fa';
import { SITE_URL, LOCAL_BUSINESS_SCHEMA } from '../seo/config';

const SECTION_PY = { base: 16, md: 20, lg: 24 };
const H2_SIZE = { base: '2xl', md: '3xl', lg: '4xl' };

function SectionHeader({ title, subtitle }) {
  return (
    <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
      <Heading as="h2" fontSize={H2_SIZE} fontWeight="bold" color="gray.800">
        {title}
      </Heading>
      <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
        {subtitle}
      </Text>
    </Stack>
  );
}

function Section({ title, subtitle, bg, pt, children }) {
  return (
    <Box pt={pt ?? SECTION_PY} pb={SECTION_PY} bg={bg}>
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 10, md: 14 }}>
          <SectionHeader title={title} subtitle={subtitle} />
          {children}
        </Stack>
      </Container>
    </Box>
  );
}

/** Grille de spécialités ; `popular` affiche un badge, `link` + `linkLabel` un lien. */
export function SpecialitesSection({ title, subtitle, items }) {
  return (
    <Section title={title} subtitle={subtitle} bg="gray.50">
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
        {items.map((item) => (
          <Box
            key={item.title}
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={{ base: 6, md: 7 }}
            boxShadow="sm"
            _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
            display="flex"
            flexDirection="column"
            position="relative"
          >
            {item.popular && (
              <Box position="absolute" top={3} right={3} bg="brand.500" color="white" fontSize="xs" fontWeight="700" px={2} py={1} borderRadius="full">
                Populaire
              </Box>
            )}
            <Stack spacing={3} flex={1}>
              <Flex w="44px" h="44px" borderRadius="xl" bg="brand.50" align="center" justify="center" flexShrink={0}>
                <Icon as={item.icon} color="brand.500" boxSize={5} />
              </Flex>
              <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3">
                {item.title}
              </Heading>
              <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" flex={1}>
                {item.text}
              </Text>
              {item.link && (
                <Link
                  as={RouterLink}
                  to={item.link}
                  color="brand.500"
                  fontWeight="600"
                  fontSize="sm"
                  _hover={{ textDecoration: 'underline' }}
                  display="inline-flex"
                  alignItems="center"
                  gap={1}
                >
                  {item.linkLabel} <Icon as={ArrowForwardIcon} boxSize={3} />
                </Link>
              )}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
}

export function serviceBreadcrumbSchema(name, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** Service JSON-LD for service / sub-service pages (provider = org @id). */
export function servicePageSchema({ name, path, description, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    serviceType: serviceType || name,
    provider: { '@id': LOCAL_BUSINESS_SCHEMA['@id'] },
    areaServed: LOCAL_BUSINESS_SCHEMA.areaServed,
  };
}

export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}
