import React, { useMemo } from 'react';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';

import img7922 from '../images/Avant après landing Page/Copie de IMG_7922.jpg';
import img7924 from '../images/Avant après landing Page/Copie de IMG_7924.jpg';
import img7971 from '../images/Avant après landing Page/Copie de IMG_7971.jpg';
import img7974 from '../images/Avant après landing Page/Copie de IMG_7974.jpg';
import img7975 from '../images/Avant après landing Page/Copie de IMG_7975.jpg';
import img7985 from '../images/Avant après landing Page/Copie de IMG_7985.jpg';
import img7988 from '../images/Avant après landing Page/Copie de IMG_7988.jpg';
import img7990 from '../images/Avant après landing Page/Copie de IMG_7990.jpg';
import img7992 from '../images/Avant après landing Page/Copie de IMG_7992.jpg';
import img7994 from '../images/Avant après landing Page/Copie de IMG_7994.jpg';
import img7997 from '../images/Avant après landing Page/Copie de IMG_7997 2.jpg';
import img7999 from '../images/Avant après landing Page/Copie de IMG_7999 2.jpg';
import img6755 from '../images/Avant après landing Page/Copie de IMG_6755.jpg';
import img6757 from '../images/Avant après landing Page/Copie de IMG_6757.jpg';

const DEFAULT_PAIRS = [
  // Salon
  [img7924, img7922],
  // Escalier extérieur
  [img7975, img7974],
  // Sous-sol
  [img7990, img7988],
  // Cuisine (plafond / réparation)
  [img7992, img7994],
  // Boiseries & murs (rafraîchissement)
  [img7999, img7997],
  // Extérieur
  [img7971, img6755],
  // Industriel
  [img7985, img6757],
];

const DEFAULT_DESCRIPTIONS = [
  {
    fr: 'Salon – peinture murale (avant / après)',
    en: 'Living room – wall painting (before / after)',
  },
  {
    fr: 'Escalier extérieur – décapage et peinture',
    en: 'Outdoor staircase – stripping and painting',
  },
  {
    fr: 'Sous-sol – rafraîchissement complet',
    en: 'Basement – complete refresh',
  },
  {
    fr: 'Cuisine – réparation et finition',
    en: 'Kitchen – repair and finish',
  },
  {
    fr: 'Murs et boiseries – finition propre',
    en: 'Walls and trim – clean finish',
  },
  {
    fr: 'Maison – extérieur rafraîchi',
    en: 'Home – refreshed exterior',
  },
  {
    fr: 'Espace industriel – préparation et peinture',
    en: 'Industrial space – prep and painting',
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
    <Box pt={{ base: 8, md: 12, lg: 16 }} bg="white" overflowX="hidden">
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
                          top={{ base: 2, md: 3 }}
                          left={{ base: 2, md: 3 }}
                          bg="gray.900"
                          color="white"
                          px={{ base: 2, md: 3 }}
                          py={{ base: 0.5, md: 1 }}
                          borderRadius={{ base: 'sm', md: 'md' }}
                          fontSize={{ base: 'xs', md: 'sm' }}
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
                          top={{ base: 2, md: 3 }}
                          left={{ base: 2, md: 3 }}
                          bg="gray.900"
                          color="white"
                          px={{ base: 2, md: 3 }}
                          py={{ base: 0.5, md: 1 }}
                          borderRadius={{ base: 'sm', md: 'md' }}
                          fontSize={{ base: 'xs', md: 'sm' }}
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
                      maxW="320px"
                      mx="auto"
                      noOfLines={2}
                      lineHeight="1.3"
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
