import React, { useState, useEffect } from 'react';
import { Box, Grid, GridItem, Stack, Heading } from '@chakra-ui/react';
import ReactCompareImage from 'react-compare-image';

export default function BeforeAfter({ images, title, isFr }) {
  const [isInteracting, setIsInteracting] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  // Cleanup on unmount
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
    <Box w='100%' py={{ base: 8, md: 12 }}>
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
                position='relative'
                borderRadius='lg'
                overflow='hidden'
                boxShadow='md'
                _hover={{ boxShadow: 'lg' }}
                transition='box-shadow 0.2s'
                style={{
                  aspectRatio: '3/2',
                }}
                sx={{
                  '& > div': {
                    width: '100% !important',
                    height: '100% !important',
                    position: 'relative !important',
                  },
                  '& .react-compare-image': {
                    width: '100% !important',
                    height: '100% !important',
                  },
                  '& .react-compare-image > div': {
                    width: '100% !important',
                    height: '100% !important',
                  },
                  '& .react-compare-image img': {
                    width: '100% !important',
                    height: '100% !important',
                    objectFit: 'cover !important',
                  },
                }}
              >
                <ReactCompareImage
                  leftImage={pair.before}
                  rightImage={pair.after}
                  aspectRatio='wider'
                  vertical={pair.vertical || false}
                  leftImageLabel={isFr ? 'AVANT' : 'BEFORE'}
                  rightImageLabel={isFr ? 'APRÈS' : 'AFTER'}
                />
              </Box>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
