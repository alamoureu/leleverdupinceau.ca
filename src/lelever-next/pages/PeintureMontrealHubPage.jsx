import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';

const VARIANTS = {
  interieur: {
    canonicalPath: '/peinture-interieure-montreal',
    h1: {
      fr: 'Peinture intérieure à Montréal',
      en: 'Interior painting in Montreal',
    },
    intro: {
      fr: 'Projets intérieurs sur l\'île : condos, plex, maisons et espaces commerciaux. Préparation, finitions et respect des délais.',
      en: 'Interior projects on the island: condos, plexes, houses and commercial spaces. Prep, finishes and timeline discipline.',
    },
    seoTitle: {
      fr: 'Peinture intérieure à Montréal - Service professionnel | Le Lever du Pinceau',
      en: 'Interior painting in Montreal | Le Lever du Pinceau',
    },
    seoDesc: {
      fr: 'Peinture intérieure professionnelle à Montréal : murs, plafonds, boiseries et armoires. RBQ, soumission gratuite.',
      en: 'Professional interior painting in Montreal: walls, ceilings, trim and cabinets. RBQ, free quote.',
    },
  },
  exterieur: {
    canonicalPath: '/peinture-exterieure-montreal',
    h1: {
      fr: 'Peinture extérieure à Montréal',
      en: 'Exterior painting in Montreal',
    },
    intro: {
      fr: 'Revêtements, bois, métal et surfaces vulnérables au gel et aux UV. Nous planifions selon la saison et les produits adaptés.',
      en: 'Siding, wood, metal and surfaces exposed to freeze-thaw and UV. We plan around season and the right products.',
    },
    seoTitle: {
      fr: 'Peinture extérieure à Montréal - Revêtement et teinture | Le Lever du Pinceau',
      en: 'Exterior painting in Montreal | Le Lever du Pinceau',
    },
    seoDesc: {
      fr: 'Peinture et teinture extérieure à Montréal : protection durable contre le climat québécois. Soumission gratuite.',
      en: 'Exterior painting and staining in Montreal: lasting protection for the Quebec climate. Free quote.',
    },
  },
};

export default function PeintureMontrealHubPage({ variant }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const cfg = VARIANTS[variant];
  if (!cfg) return null;

  const lang = isFr ? 'fr' : 'en';
  const h1 = cfg.h1[lang];
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
        name: h1,
        item: `https://leleverdupinceau.ca${cfg.canonicalPath}`,
      },
    ],
  };

  return (
    <Fragment>
      <SEOHead
        title={cfg.seoTitle[lang]}
        description={cfg.seoDesc[lang]}
        canonicalPath={cfg.canonicalPath}
        schema={breadcrumbSchema}
      />
      <Box w="100%" minW={0} bg="white" overflowX="hidden">
        <Container maxW="1440px" px={{ base: 4, md: 6 }} py={{ base: 12, md: 16 }}>
          <Flex
            wrap="wrap"
            gap={2}
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.600"
            mb={{ base: 6, md: 8 }}
            alignItems="center"
          >
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }} color="gray.600">
              {isFr ? 'Accueil' : 'Home'}
            </Link>
            <Text>›</Text>
            <Link as={RouterLink} to="/services" _hover={{ textDecoration: 'underline' }} color="gray.600">
              {isFr ? 'Services' : 'Services'}
            </Link>
            <Text>›</Text>
            <Text color="gray.800" fontWeight="medium">
              {h1}
            </Text>
          </Flex>

          <Stack spacing={6} maxW="900px">
            <Heading as="h1" size="page" color="gray.900">
              {h1}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.700" lineHeight="1.8">
              {cfg.intro[lang]}
            </Text>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.8">
              {isFr
                ? 'Cette page sera enrichie avec quartiers et exemples de chantiers. Pour une estimation rapide, envoyez les détails de votre projet.'
                : 'This page will be expanded with neighbourhoods and job examples. For a fast estimate, send your project details.'}
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2}>
              <Button
                as={RouterLink}
                to="/secteurs/montreal"
                variant="outline"
                borderColor="brand.500"
                color="brand.500"
                borderRadius="full"
                px={8}
                _hover={{ bg: 'brand.50' }}
              >
                {isFr ? 'Peintre à Montréal' : 'Painter in Montreal'}
              </Button>
              <Button
                as={RouterLink}
                to={
                  variant === 'interieur'
                    ? '/services/peinture-interieure'
                    : '/services/peinture-exterieure'
                }
                variant="outline"
                borderColor="gray.300"
                color="gray.700"
                borderRadius="full"
                px={8}
              >
                {isFr ? 'Hub service détaillé' : 'Full service hub'}
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                rightIcon={<ArrowForwardIcon />}
                bg="brand.500"
                color="white"
                borderRadius="full"
                px={8}
                _hover={{ bg: 'brand.600' }}
              >
                {isFr ? 'Soumission gratuite' : 'Free quote'}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
