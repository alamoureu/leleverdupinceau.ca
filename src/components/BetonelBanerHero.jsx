import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

export default function BetonelBanerHero({ isMobile, lang }) {
  return (
    <Stack pb={{ base: '50px', md: '100px' }} mt="20px">
      <Image
        src={
          isMobile
            ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannerSm.png'
            : lang === 'fr'
            ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannner-desktop.png'
            : 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/sdsd.png'
        }
      />
    </Stack>
  );
}
