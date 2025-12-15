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
      position='relative'
      w='100%'
      h={{ base: '300px', md: '450px', lg: '585px', xl: '750px' }}
      bgColor='gray.600'
      px={{ base: '0px', md: '20px', lg: '75px', xl: '20px' }}
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
          h='100%'
          pt={{
            base: '55px',
            sm: '55px',
            md: '85px',
            lg: '110px',
            xl: '170px',
          }}
        >
          <Stack spacing={{ base: '15px', sm: '15px', md: '20px' }}>
            <Heading
              as='h1'
              fontSize={{
                base: '24px',
                sm: '28px',
                md: '40px',
                lg: '55px',
                xl: '65px',
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
              fontSize={{ base: 'md', md: 'lg' }}
              color='white'
              fontWeight='thin'
            >
              {t.heroSubtitle}
            </Text>

            <Box pt={{ base: 1, sm: 2, md: 2 }}>
              <Button
                onClick={onSubmissionOpen}
                bg='#014CC4'
                color='white'
                fontSize={{
                  base: 'sm',
                  sm: 'md',
                  md: 'md',
                  lg: 'lg',
                  xl: 'xl',
                }}
                px={{ base: 8, md: 10 }}
                h={{
                  base: '45px',
                  sm: '50px',
                  md: '55px',
                  lg: '70px',
                  xl: '80px',
                }}
                w={{
                  base: '250px',
                  sm: '275px',
                  md: '325px',
                  lg: '365px',
                  xl: '375px',
                }}
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
