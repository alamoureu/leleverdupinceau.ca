import { Image, Stack } from '@chakra-ui/react';
import React from 'react';

export default function BetonelBanerHero({ isMobile, lang }) {
  return (
    <Stack pb={{ base: '50px', md: '100px' }} mt="20px">
      <Image
        loading="lazy"
        src={
          isMobile
            ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannerSm+(1).png'
            : lang === 'fr'
            ? 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/bannner-desktop+(1).png'
            : 'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/sdsd+(1).png'
        }
      />
    </Stack>
  );
}
