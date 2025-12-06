import React from 'react';
import { Box, Flex, Text, Stack, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';

export default function GoogleReviewBadge() {
  const { t } = useTranslation();
  return (
    <Box
      position='absolute'
      top={{ base: '80px', md: '100px' }}
      right={{ base: '20px', md: '40px', lg: '60px' }}
      zIndex={4}
      bg='white'
      borderTopRadius='lg'
      borderBottomRadius='150px'
      p={{ base: 3, md: 4 }}
      boxShadow='0 4px 15px rgba(0,0,0,0.15)'
      minW='90px'
      maxW='90px'
    >
      <Stack spacing={2} align='center'>
        <Text fontSize='xs' color='gray.600' fontWeight='600'>
          {t.googleReviews}
        </Text>
        <Flex align='center' gap={1}>
          <Text fontWeight='700' fontSize='2xl' color='gray.800'>
            {t.googleRating}
          </Text>
          <Flex gap={0.5}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} color='#FBBC04' boxSize={4} />
            ))}
          </Flex>
        </Flex>
        <Image
          src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
          alt='Google'
          h='22px'
          w='22px'
        />
      </Stack>
    </Box>
  );
}
