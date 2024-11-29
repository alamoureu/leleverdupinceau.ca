import React, { useState } from 'react';
import { Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import ReactCompareImage from 'react-compare-image';

export default function BeforeNAfter({ lang }) {
  const [isInteracting, setIsInteracting] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

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
    <Stack w="100%" alignItems="center">
      <Box
        justifyContent="center"
        textAlign="center"
        mb={8}
        px={{ base: 4, md: 0 }}
      >
        <Box
          display="inline-flex"
          alignItems="center"
          px={4}
          borderRadius="md"
          position="relative"
        >
          <Text
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="bold"
            color="rgba(1, 42, 104, 1)"
            fontStyle="italic"
          >
            {lang === 'fr'
              ? 'Exemples de nos réalisations'
              : 'Examples of Our Work'}
          </Text>
        </Box>
      </Box>

      <Grid
        templateColumns={{
          base: '1fr',
          md: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)',
        }}
        gap="8"
        pb="100px"
      >
        {[
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/iteriorbefore+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/interior1+(1).jpg',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/before1interiorr+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after1interior+(1).jpg',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67204865+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67212545+(1).jpg',
            vertical: false,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67225601+(2)+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67206657+(2)+(1).jpg',
            vertical: true,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67209217+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67231745+(1).jpg',
            vertical: true,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after%2B1+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/beffore1+(1).jpg',
            vertical: true,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/before%2B2+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after%2B2+(1).jpg',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67513345%2B(1)+(1).jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67237633%2B(1)+(1).jpg',
          },
        ].map((pair, index) => (
          <GridItem key={index}>
            <Stack
              alignItems="center"
              justifyContent="center"
              gap="1"
              w="250px"
              onMouseDown={handleInteractionStart}
              onTouchStart={handleInteractionStart}
              onMouseUp={handleInteractionEnd}
              onTouchEnd={handleInteractionEnd}
            >
              <ReactCompareImage
                leftImage={pair.leftImage}
                rightImage={pair.rightImage}
                aspectRatio="taller"
                vertical={pair.vertical || false}
                leftImageLabel={lang === 'fr' ? 'AVANT' : 'BEFORE'}
                rightImageLabel={lang === 'fr' ? 'APRÈS' : 'AFTER'}
              />
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
}
