import React, { useState, useEffect, useMemo } from 'react';
import { Box, Grid, GridItem, Stack, Heading, Text } from '@chakra-ui/react';

// Single source of truth: all before/after images live in the component
import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import img5971 from '../images/before_after/IMG_5971.jpg';
import img5972 from '../images/before_after/IMG_5972.jpg';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';
import img5975 from '../images/before_after/IMG_5975.jpg';
import img5976 from '../images/before_after/IMG_5976.jpg';
import img5977 from '../images/before_after/IMG_5977.jpg';
import img5978 from '../images/before_after/IMG_5978.jpg';
import img5982 from '../images/before_after/IMG_5982.jpg';
import img5984 from '../images/before_after/IMG_5984.jpg';

// Single source of truth: pairs + descriptions (same everywhere the section is used)
const DEFAULT_PAIRS = [
  [img5969, img5970],
  [img5971, img5972],
  [img5973, img5974],
  [img5975, img5976],
  [img5977, img5978],
  [img5984, img5982], // inverted: before = unpainted, after = painted
];

const DESCRIPTIONS = [
  { fr: 'Salon – murs plâtre et peinture', en: 'Living room – walls, plaster and paint' },
  { fr: 'Cuisine – murs repeints (teinte contemporaine)', en: 'Kitchen – walls repainted (contemporary shade)' },
  { fr: 'Terrasse en bois – teinture et protection', en: 'Wood deck – stain and protection' },
  { fr: 'Cuisine – armoires peintes en blanc', en: 'Kitchen – cabinets painted white' },
  { fr: 'Espace industriel – plafond steel deck et murs peints', en: 'Industrial space – steel deck ceiling and walls painted' },
  { fr: 'Maison – murs rafraîchis (protection et peinture)', en: 'House – walls refreshed (protection and painting)' },
];

function buildDefaultImages(isFr) {
  return DEFAULT_PAIRS.map(([before, after], i) => ({
    before,
    after,
    description: isFr ? DESCRIPTIONS[i].fr : DESCRIPTIONS[i].en,
  }));
}

export default function BeforeAfter({ images: imagesProp, title, isFr }) {
  const [isInteracting, setIsInteracting] = useState(false);

  const images = useMemo(
    () => (imagesProp && imagesProp.length > 0 ? imagesProp : buildDefaultImages(isFr ?? true)),
    [imagesProp, isFr]
  );

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  useEffect(() => {
    return () => {
      unlockScroll();
    };
  }, []);

  const handleInteractionStart = () => {
    if (!isInteracting) {
      setIsInteracting(true);
      lockScroll();
    }
  };

  const handleInteractionEnd = () => {
    if (isInteracting) {
      setIsInteracting(false);
      unlockScroll();
    }
  };

  return (
    <Box w='100%' py={{ base: 12, md: 16, lg: 20 }}>
      {title && (
        <Box textAlign='center' mb={{ base: 6, md: 8 }} px={{ base: 4, md: 0 }}>
          <Heading
            fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
            fontWeight='bold'
            color='gray.800'
          >
            {title}
          </Heading>
        </Box>
      )}

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap={{ base: 6, md: 8 }}
        px={{ base: 4, md: 0 }}
      >
        {images.map((pair, index) => (
          <GridItem key={index}>
            <Stack
              alignItems='center'
              justifyContent='center'
              gap='1'
              width='100%'
              maxW='400px'
              mx='auto'
              style={{ touchAction: 'none' }}
              onMouseDown={handleInteractionStart}
              onTouchStart={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchEnd={handleInteractionEnd}
              onMouseLeave={handleInteractionEnd}
            >
              <Box
                width='100%'
                borderRadius='xl'
                overflow='hidden'
                boxShadow='md'
                _hover={{ boxShadow: 'lg' }}
                transition='box-shadow 0.2s'
                bg="white"
              >
                <Stack spacing={0}>
                  {/* Avant */}
                  <Box position="relative" w="100%">
                    <Box as="img" src={pair.before} alt={isFr ? "Avant" : "Before"} w="100%" objectFit="cover" style={{ aspectRatio: '3/2' }} />
                    <Box position="absolute" top={3} left={3} bg="brand.500" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="bold" boxShadow="sm">
                      {isFr ? 'AVANT' : 'BEFORE'}
                    </Box>
                  </Box>
                  {/* Après */}
                  <Box position="relative" w="100%" borderTop="2px solid white">
                    <Box as="img" src={pair.after} alt={isFr ? "Après" : "After"} w="100%" objectFit="cover" style={{ aspectRatio: '3/2' }} />
                    <Box position="absolute" top={3} left={3} bg="brand.500" color="white" px={3} py={1} borderRadius="md" fontSize="sm" fontWeight="bold" boxShadow="sm">
                      {isFr ? 'APRÈS' : 'AFTER'}
                    </Box>
                  </Box>
                </Stack>
              </Box>
              {pair.description && (
                <Text
                  fontSize='sm'
                  color='gray.600'
                  textAlign='center'
                  mt={2}
                  fontWeight='medium'
                >
                  {pair.description}
                </Text>
              )}
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
