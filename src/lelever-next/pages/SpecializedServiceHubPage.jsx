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

const SLUG_CONFIG = {
  'teinture-exterieure': {
    title: {
      fr: 'Teinture extérieure',
      en: 'Exterior staining',
    },
    intro: {
      fr: 'Patio, clôture et revêtement en bois : pénétration, produits adaptés au climat québécois et finis durables.',
      en: 'Deck, fence and wood siding: penetration, products suited to the Quebec climate and durable finishes.',
    },
    canonicalPath: '/services/teinture-exterieure',
  },
  'preparation-de-surfaces': {
    title: {
      fr: 'Préparation de surfaces',
      en: 'Surface preparation',
    },
    intro: {
      fr: 'Sablage, rebouchage, plâtre et calfeutrage avant peinture pour un résultat net et durable.',
      en: 'Sanding, patching, plaster and caulking before painting for a clean, lasting result.',
    },
    canonicalPath: '/services/preparation-de-surfaces',
  },
  'peinture-au-pistolet': {
    title: {
      fr: 'Peinture au pistolet',
      en: 'Spray painting',
    },
    intro: {
      fr: 'Application airless pour grands espaces : rendement élevé et fini uniforme.',
      en: 'Airless application for large spaces: high productivity and an even finish.',
    },
    canonicalPath: '/services/peinture-au-pistolet',
  },
  'reparation-de-platre-et-gypse': {
    title: {
      fr: 'Réparation de plâtre et gypse',
      en: 'Plaster and drywall repair',
    },
    intro: {
      fr: 'Trous, fissures et joints avant peinture pour une surface prête à finir.',
      en: 'Holes, cracks and seams before painting so surfaces are ready to finish.',
    },
    canonicalPath: '/services/reparation-de-platre-et-gypse',
  },
  'peinture-apres-sinistre': {
    title: {
      fr: 'Peinture après sinistre',
      en: 'Post-disaster painting',
    },
    intro: {
      fr: 'Dégât d\'eau, feu ou moisissure : reprise des surfaces et finition après réparation.',
      en: 'Water, fire or mould damage: surface recovery and finishing after repairs.',
    },
    canonicalPath: '/services/peinture-apres-sinistre',
  },
};

export default function SpecializedServiceHubPage({ slug }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const cfg = SLUG_CONFIG[slug];
  if (!cfg) return null;

  const title = cfg.title[isFr ? 'fr' : 'en'];
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
        name: title,
        item: `https://leleverdupinceau.ca${cfg.canonicalPath}`,
      },
    ],
  };

  const seoTitle = isFr
    ? `${title} | Le Lever du Pinceau`
    : `${title} | Le Lever du Pinceau`;
  const seoDescription = isFr
    ? `${cfg.intro.fr} Soumission gratuite, équipes RBQ.`
    : `${cfg.intro.en} Free quote, RBQ-licensed crews.`;

  return (
    <Fragment>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
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
              {title}
            </Text>
          </Flex>

          <Stack spacing={6} maxW="900px">
            <Heading as="h1" size="page" color="gray.900">
              {title}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.700" lineHeight="1.8">
              {cfg.intro[isFr ? 'fr' : 'en']}
            </Text>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.8">
              {isFr
                ? 'Cette page sera enrichie prochainement. En attendant, décrivez votre projet : nous vous orientons vers la bonne équipe et la bonne solution.'
                : 'This page will be expanded soon. In the meantime, describe your project and we will point you to the right team and approach.'}
            </Text>
            <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={2}>
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
                {isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
              </Button>
              <Button
                as={RouterLink}
                to="/services"
                variant="outline"
                borderColor="brand.500"
                color="brand.500"
                borderRadius="full"
                px={8}
                _hover={{ bg: 'brand.50' }}
              >
                {isFr ? 'Retour au hub Services' : 'Back to Services hub'}
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Fragment>
  );
}
