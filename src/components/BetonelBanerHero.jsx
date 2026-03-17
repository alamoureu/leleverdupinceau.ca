import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

export default function BetonelBanerHero({ isMobile, lang }) {
  return (
    <Stack>
      <Image
        loading="lazy"
        decoding="async"
        alt="Banner Le lever du pinceau"
        src={
          isMobile
            ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannerSm+(1).png'
            : lang === 'fr'
              ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannner-desktop+(1).png'
              : 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/sdsd+(1).png'
        }
        w="100%"
        maxW="100%"
        h={isMobile ? '140px' : 'auto'}
        objectFit="contain"
      />
    </Stack>
  );
}
