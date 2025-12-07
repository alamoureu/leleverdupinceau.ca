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
      boxShadow='0 4px 15px rgba(0,0,0,0.15)'
      w={{ base: '90px', md: '110px', lg: '130px' }}
      aspectRatio='1/1.4'
      display='flex'
      alignItems='center'
      justifyContent='center'
      p='8%'
    >
      <Stack spacing='3%' align='center' w='100%' h='100%' justify='center'>
        <Text
          fontSize='clamp(7px, 8.5%, 11px)'
          color='gray.600'
          fontWeight='600'
          lineHeight='1.2'
          textAlign='center'
        >
          {t.googleReviews}
        </Text>
        <Flex align='center' gap='2%' flexWrap='nowrap' justify='center'>
          <Text
            fontWeight='700'
            fontSize='clamp(20px, 24%, 34px)'
            color='gray.800'
            lineHeight='1'
          >
            {t.googleRating}
          </Text>
          <Flex gap='1%'>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                color='#FBBC04'
                boxSize='clamp(3.5px, 5%, 6.5px)'
              />
            ))}
          </Flex>
        </Flex>
        <Image
          src='https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
          alt='Google'
          h='clamp(20px, 24%, 34px)'
          w='clamp(20px, 24%, 34px)'
          objectFit='contain'
        />
      </Stack>
    </Box>
  );
}
