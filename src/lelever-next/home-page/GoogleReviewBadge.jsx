import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';

// Chakra breakpoints: base <480px, sm 480+, md 768+, lg 992+, xl 1280+
// Badge tuned per breakpoint so it never overflows (especially sm 480–767px).
export default function GoogleReviewBadge() {
  const { t } = useTranslation();

  return (
    <Box
      position='absolute'
      top={{ base: '80px', sm: '80px', md: '100px', lg: '100px', xl: '100px' }}
      right={{ base: 2, sm: 2, md: 6, lg: 8, xl: 10 }}
      left={{ base: 'auto', sm: 'auto' }}
      zIndex={4}
      bg='white'
      borderRadius='lg'
      boxShadow='0 4px 15px rgba(0,0,0,0.15)'
      display='flex'
      alignItems='center'
      justifyContent='center'
      width='max-content'
      maxW={{ base: 'calc(100% - 24px)', sm: 'calc(100% - 24px)', md: 'none' }}
      minW={0}
      flexShrink={1}
      px={{ base: 2.5, sm: 2.5, md: 3, lg: 3, xl: 4 }}
      py={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2.5 }}
      overflow='hidden'
    >
      <Flex
        align='center'
        gap={{ base: 2, sm: 2, md: 2, lg: 2, xl: 2.5 }}
        flexWrap='nowrap'
        flexShrink={0}
        minW={0}
      >
        <Text
          fontSize={{ base: '2xs', sm: '2xs', md: 'xs', lg: 'sm', xl: 'sm' }}
          color='gray.600'
          fontWeight='600'
          lineHeight='1'
          whiteSpace='nowrap'
          flexShrink={0}
        >
          {t.googleReviews}
        </Text>
        <Flex align='center' gap={0.5} flexWrap='nowrap' alignItems='center' flexShrink={0}>
          <Text
            fontWeight='700'
            fontSize={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
            color='gray.800'
            lineHeight='1'
          >
            {t.googleRating}
          </Text>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color='#FBBC04'
              boxSize={{ base: 2.5, sm: 2.5, md: 3, lg: 3, xl: 3.5 }}
            />
          ))}
        </Flex>
        <Image
          src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
          alt='Google'
          h={{ base: 7, sm: 7, md: 6, lg: 5, xl: 5 }}
          w={{ base: 7, sm: 7, md: 6, lg: 5, xl: 5 }}
          minW={{ base: 7, sm: 7, md: 6, lg: 5, xl: 5 }}
          minH={{ base: 7, sm: 7, md: 6, lg: 5, xl: 5 }}
          objectFit='contain'
          flexShrink={0}
          loading="lazy"
          decoding="async"
        />
      </Flex>
    </Box>
  );
}
