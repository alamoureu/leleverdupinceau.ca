import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import heroImage from '../images/heroImage.png';

export default function HeroSection({ onSubmissionOpen, pageContext = '' }) {
  const { t, currentLang } = useTranslation();

  return (
    <Box
      position="relative"
      w="100%"
      minH={{ base: '280px', sm: '320px', md: '420px', lg: '520px', xl: '640px', '2xl': '720px' }}
      h={{ base: '300px', sm: '340px', md: '450px', lg: '585px', xl: '750px', '2xl': '820px' }}
      bgColor="gray.600"
      px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      overflow="hidden"
    >
      <Image
        src={heroImage}
        alt={
          currentLang === 'fr'
            ? `Services de peinture résidentielle et commerciale${pageContext ? ' - ' + pageContext : ''}`
            : `Residential and commercial painting services${pageContext ? ' - ' + pageContext : ''}`
        }
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        objectFit="cover"
        zIndex={0}
      />
      <Box
        position='absolute'
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg='rgba(0, 0, 0, 0.4)'
        zIndex={1}
      />
      <Container maxW='1440px' h='100%' position='relative' zIndex={2}>
        <Stack
          h="100%"
          pt={{
            base: '52px',
            sm: '56px',
            md: '80px',
            lg: '100px',
            xl: '140px',
            '2xl': '160px',
          }}
        >
          <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6 }}>
            <Heading
              as="h1"
              fontSize={{
                base: '22px',
                sm: '26px',
                md: '36px',
                lg: '48px',
                xl: '60px',
                '2xl': '68px',
              }}
              fontWeight='700'
              color='white'
              lineHeight='1.1'
            >
              {t.heroTitle}
              {t.heroTitleSecondLine && (
                <>
                  <br />
                  {t.heroTitleSecondLine}
                </>
              )}
            </Heading>

            <Text
              fontSize={{ base: 'sm', sm: 'md', md: 'lg', lg: 'lg', xl: 'xl' }}
              color="white"
              fontWeight="thin"
            >
              {t.heroSubtitle}
            </Text>

            <Box pt={{ base: 2, sm: 3, md: 4 }}>
              <Button
                onClick={onSubmissionOpen}
                bg="#014CC4"
                color="white"
                fontSize={{
                  base: 'sm',
                  sm: 'md',
                  md: 'md',
                  lg: 'lg',
                  xl: 'xl',
                  '2xl': 'xl',
                }}
                px={{ base: 6, sm: 8, md: 10, lg: 12 }}
                h={{
                  base: '44px',
                  sm: '48px',
                  md: '52px',
                  lg: '64px',
                  xl: '72px',
                  '2xl': '76px',
                }}
                w={{ base: '100%', sm: '260px', md: '300px', lg: '340px', xl: '360px', '2xl': '380px' }}
                maxW={{ base: '280px', sm: 'unset' }}
                borderRadius='full'
                boxShadow='lg'
                _hover={{ bg: '#0139A0' }}
              >
                {t.heroButton}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
