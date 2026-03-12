import React, { useMemo } from 'react';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';
import img5975 from '../images/before_after/IMG_5975.jpg';
import img5976 from '../images/before_after/IMG_5976.jpg';
import img5977 from '../images/before_after/IMG_5977.jpg';
import img5978 from '../images/before_after/IMG_5978.jpg';
import img5982 from '../images/before_after/IMG_5982.jpg';
import img5984 from '../images/before_after/IMG_5984.jpg';

// New staircase project images
import imgStaircaseBefore from '../images/IMG_7678.PNG';
import imgStaircaseAfter from '../images/IMG_5873.PNG';

const DEFAULT_PAIRS = [
  [img5969, img5970],
  [imgStaircaseBefore, imgStaircaseAfter], // Staircase project
  [img5973, img5974],
  [img5975, img5976],
  [img5977, img5978],
  [img5984, img5982], // inverted: before = unpainted, after = painted
];

const DEFAULT_DESCRIPTIONS = [
  {
    fr: 'Salon – murs plâtre et peinture',
    en: 'Living room – walls, plaster and paint',
  },
  {
    fr: 'Cage d’escalier – réparation légère et peinture',
    en: 'Staircase – light repair and painting',
  },
  {
    fr: 'Terrasse en bois – teinture et protection',
    en: 'Wood deck – stain and protection',
  },
  {
    fr: 'Cuisine – armoires peintes en blanc',
    en: 'Kitchen – cabinets painted white',
  },
  {
    fr: 'Espace industriel – plafond steel deck et murs peints',
    en: 'Industrial space – steel deck ceiling and walls painted',
  },
  {
    fr: 'Maison – murs rafraîchis (protection et peinture)',
    en: 'House – walls refreshed (protection and painting)',
  },
];

function buildDefaultImages(isFr) {
  return DEFAULT_PAIRS.map(([before, after], i) => ({
    before,
    after,
    description: isFr ? DEFAULT_DESCRIPTIONS[i].fr : DEFAULT_DESCRIPTIONS[i].en,
  }));
}

export default function BeforeAfterCarouselSection({
  isFr = true,
  title = 'Des transformations visibles dès le premier coup de pinceau',
  subtitle = 'Quelques-uns de nos projets récents à Montréal',
  images,
  kitchenPairOverride,
}) {
  const items = useMemo(() => {
    const base =
      images && images.length > 0 ? images : buildDefaultImages(isFr);
    if (
      kitchenPairOverride?.before &&
      kitchenPairOverride?.after &&
      base.length >= 2
    ) {
      const next = [...base];
      next[1] = {
        ...next[1],
        before: kitchenPairOverride.before,
        after: kitchenPairOverride.after,
      };
      return next;
    }
    return base;
  }, [images, isFr, kitchenPairOverride]);

  return (
    <Box py={{ base: 12, md: 16, lg: 20 }} bg="white" overflowX="hidden">
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 6, md: 8 }} align="center">
          <Stack spacing={{ base: 2, md: 3 }} textAlign="center" maxW="900px">
            <Heading
              as="h2"
              size="section"
              fontWeight="bold"
              color="gray.800"
              lineHeight="1.3"
            >
              {title}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {subtitle}
            </Text>
          </Stack>

          <Box
            w="100%"
            maxW="100%"
            minW={0}
            overflowX="auto"
            overflowY="hidden"
            pb={6}
            px={{ base: 4, md: 0 }}
            mx={{ base: -4, md: 0 }}
            sx={{
              '&::-webkit-scrollbar': { height: 2 },
              '&::-webkit-scrollbar-track': {
                bg: 'gray.100',
                borderRadius: 'full',
              },
              '&::-webkit-scrollbar-thumb': {
                bg: 'gray.300',
                borderRadius: 'full',
                _hover: { bg: 'gray.400' },
              },
              '-ms-overflow-style': 'auto',
              'scrollbar-width': 'auto',
            }}
          >
            <Flex
              direction="row"
              gap={{ base: 6, md: 8, lg: 10 }}
              w="max-content"
              minW="100%"
              pb={2}
            >
              {items.map((pair, index) => (
                <Box
                  key={index}
                  minW={{
                    base: '280px',
                    sm: '320px',
                    md: '340px',
                    lg: '360px',
                  }}
                  w={{ base: '280px', sm: '320px', md: '340px', lg: '360px' }}
                >
                  <Box
                    width="100%"
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="md"
                    _hover={{ boxShadow: 'lg' }}
                    transition="box-shadow 0.2s"
                    bg="white"
                  >
                    <Stack spacing={0}>
                      {/* Avant */}
                      <Box position="relative" w="100%">
                        <Box
                          as="img"
                          src={pair.before}
                          alt={isFr ? 'Avant' : 'Before'}
                          w="100%"
                          objectFit="cover"
                          style={{ aspectRatio: '3/2' }}
                        />
                        <Box
                          position="absolute"
                          top={3}
                          left={3}
                          bg="brand.500"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="md"
                          fontSize="sm"
                          fontWeight="bold"
                          boxShadow="sm"
                        >
                          {isFr ? 'AVANT' : 'BEFORE'}
                        </Box>
                      </Box>
                      {/* Après */}
                      <Box
                        position="relative"
                        w="100%"
                        borderTop="2px solid white"
                      >
                        <Box
                          as="img"
                          src={pair.after}
                          alt={isFr ? 'Après' : 'After'}
                          w="100%"
                          objectFit="cover"
                          style={{ aspectRatio: '3/2' }}
                        />
                        <Box
                          position="absolute"
                          top={3}
                          left={3}
                          bg="brand.500"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="md"
                          fontSize="sm"
                          fontWeight="bold"
                          boxShadow="sm"
                        >
                          {isFr ? 'APRÈS' : 'AFTER'}
                        </Box>
                      </Box>
                    </Stack>
                  </Box>
                  {pair.description && (
                    <Text
                      fontSize="sm"
                      color="gray.600"
                      textAlign="center"
                      mt={4}
                      fontWeight="medium"
                    >
                      {pair.description}
                    </Text>
                  )}
                </Box>
              ))}
            </Flex>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
