import React from 'react';
import { Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import ReactCompareImage from 'react-compare-image';

export default function BeforeNAfter({ lang }) {
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
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/iteriorbefore.jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/interior1.jpg',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/before1interiorr.jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after1interior.jpg',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67204865.JPG',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67212545.JPG',
            vertical: false,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67225601.JPG',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67206657.JPG',
            vertical: true,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67209217.JPG',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67231745.JPG',
            vertical: true,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67209217.JPG',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67231745.JPG',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after+1.jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/beffore1.jpg',
            vertical: true,
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/before+2.jpg',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/after+2.jpg',
          },
          {
            leftImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67513345.JPG',
            rightImage:
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/image_67237633.JPG',
          },
        ].map((pair, index) => (
          <GridItem key={index}>
            <Stack
              alignItems="center"
              justifyContent="center"
              gap="1"
              w="250px"
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
