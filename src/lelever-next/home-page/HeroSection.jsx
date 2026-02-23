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
import TrustBanner from './TrustBanner';

export default function HeroSection({ onSubmissionOpen, pageContext = '' }) {
  const { t, currentLang } = useTranslation();

  return (
    <Box
      position="relative"
      w="100%"
      minW={0}
      minH={{ base: '280px', sm: '320px', md: '420px', lg: '520px', xl: '640px', '2xl': '720px' }}
      h={{ base: '300px', sm: '340px', md: '450px', lg: '585px', xl: '750px', '2xl': '820px' }}
      pb={{ base: 8, sm: 10, md: 0 }}
      bgColor="gray.600"
      px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      overflow="visible"
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
        loading="eager"
        fetchPriority="high"
        decoding="async"
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
      <Container maxW='1440px' h='100%' position='relative' zIndex={2} px={{ base: 4, sm: 4, md: 6, lg: 8 }} minW={0}>
        <Stack
          h="100%"
          minW={0}
          pt={{
            base: '52px',
            sm: '56px',
            md: '80px',
            lg: '100px',
            xl: '140px',
            '2xl': '160px',
          }}
        >
          <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6 }} minW={0}>
            <Heading
              as="h1"
              size="page"
              fontWeight='700'
              color='white'
              lineHeight='1.1'
              minW={0}
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
              textStyle="bodyLarge"
              color="white"
              fontWeight="thin"
              minW={0}
              overflowWrap="break-word"
              wordBreak="break-word"
            >
              {t.heroSubtitle}
            </Text>

            <Box pt={{ base: 2, sm: 3, md: 4 }}>
              <Button
                onClick={onSubmissionOpen}
                bg="brand.500"
                color="white"
                textStyle="nav"
                px={{ base: 8, sm: 10, md: 12, lg: 14, xl: 16 }}
                py={{ base: 3, sm: 4, md: 5, lg: 6 }}
                minH={{
                  base: '48px',
                  sm: '52px',
                  md: '56px',
                  lg: '64px',
                  xl: '72px',
                  '2xl': '76px',
                }}
                h="auto"
                w={{ base: '100%', sm: '280px', md: '320px', lg: '360px', xl: '380px', '2xl': '400px' }}
                minW="280px"
                maxW={{ base: '280px', sm: 'unset' }}
                borderRadius='full'
                boxShadow='lg'
                _hover={{ bg: 'brand.600' }}
                whiteSpace="nowrap"
              >
                {t.heroButton}
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <TrustBanner />
    </Box>
  );
}
