import { Stack } from '@chakra-ui/react';
import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
export default function ImageSlider() {
  const images = [
    {
      url: 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/dreamstime_xxl_94133634.jpg',
    },
    {
      url: 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/dreamstime_xxl_116914.jpg',
    },
    {
      url: 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/photo_lever_1.jpg',
    },
  ];

  return (
    <Stack position="absolute" w="100%">
      <SimpleImageSlider
        width="100%"
        height="100vh"
        images={images}
        autoPlay={true}
        autoPlayDelay={3}
      />
    </Stack>
  );
}
