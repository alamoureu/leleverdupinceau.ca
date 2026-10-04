import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';

/** Bulle « avis Google » à superposer sur une image (parent en position relative). */
export default function GoogleReviewBadge(props) {
  const { t } = useTranslation();

  return (
    <Box
      position='absolute'
      zIndex={4}
      bg='white'
      borderRadius='lg'
      boxShadow='0 4px 15px rgba(0,0,0,0.15)'
      maxW='calc(100% - 24px)'
      px={{ base: 2.5, md: 3, xl: 4 }}
      py={{ base: 2, xl: 2.5 }}
      {...props}
    >
      <Flex align='center' gap={{ base: 2, xl: 2.5 }} flexWrap='nowrap'>
        <Text
          fontSize={{ base: 'xs', lg: 'sm' }}
          color='gray.600'
          fontWeight='600'
          lineHeight='1'
          whiteSpace='nowrap'
        >
          {t.googleReviews}
        </Text>
        <Flex align='center' gap={0.5}>
          <Text fontWeight='700' fontSize={{ base: 'sm', lg: 'md', xl: 'lg' }} color='gray.800' lineHeight='1'>
            {t.googleRating}
          </Text>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} color='#FBBC04' boxSize={{ base: 3, xl: 3.5 }} />
          ))}
        </Flex>
        <Image
          src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
          alt='Google'
          boxSize={{ base: 5, xl: 6 }}
          flexShrink={0}
          loading='lazy'
          decoding='async'
          htmlWidth={128}
          htmlHeight={128}
        />
      </Flex>
    </Box>
  );
}
