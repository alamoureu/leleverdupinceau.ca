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
import {
  LANDING_HERO_MOBILE_PT_COMPENSATION,
  LANDING_MAIN_CONTENT_PT,
} from '../landing/constants';

/** Même V qu’MainHero / ancienne v1 (bas du hero). */
const CLIP_POLYGON = 'polygon(0 0, 100% 0, 100% 80%, 50% 90%, 0 80%)';

/**
 * Hero landing : hauteurs proches de HeroSection (accueil), clip en V en bas.
 * Le dégagement nav (texte à gauche) est dans le Container (`LANDING_MAIN_CONTENT_PT`) ;
 * `#main` landing est en pt:0 pour que la marge négative ne soit pas nécessaire.
 */
export default function LandingHeroSection({
  onSubmissionOpen,
  pageContext = '',
  title,
  titleSecondLine = '',
  subtitle,
  buttonText,
  imageBackground,
  children,
}) {
  const { t } = useTranslation();
  const heroTitle = title ?? t.heroTitle;
  const heroTitleSecondLine = titleSecondLine ?? t.heroTitleSecondLine;
  const heroSubtitle = subtitle ?? t.heroSubtitle;
  const heroButton = buttonText ?? t.heroButton;

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      minW={0}
      bg="white"
      overflow="hidden"
    >
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        minH={{
          base: '430px',
          sm: '450px',
          md: '560px',
          lg: '620px',
          xl: '790px',
          '2xl': '790px',
        }}
        h={{
          base: 'auto',
          sm: 'min(64vh, 480px)',
          md: 'min(82vh, 760px)',
          lg: 'min(86vh, 820px)',
          xl: 'min(88vh, 900px)',
          '2xl': 'min(90vh, 960px)',
        }}
        w="100%"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={0}
          style={{ clipPath: CLIP_POLYGON }}
          overflow="hidden"
          aria-hidden
        >
          <Image
            src={imageBackground || heroImage}
            alt={`${t.heroImageAlt}${pageContext ? ' - ' + pageContext : ''}`}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.4)"
          />
        </Box>

        <Container
          maxW="1440px"
          position="relative"
          zIndex={2}
          minW={0}
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          minH="0"
          px={{ base: 4, sm: 4, md: 6, lg: 8 }}
          pt={LANDING_MAIN_CONTENT_PT}
          pb={{ base: 5, sm: 6, md: 14, lg: 16, xl: 18, '2xl': 20 }}
        >
          <Stack
            spacing={{ base: 2, sm: 3, md: 5, lg: 6 }}
            minW={0}
            justify="flex-start"
            flexShrink={0}
          >
            {children}
            <Heading
              as="h1"
              size="page"
              fontWeight="800"
              fontSize={{
                base: '2xl',
                sm: '3xl',
                md: '4xl',
                lg: '5xl',
                xl: '6xl',
                '2xl': '7xl',
              }}
              color="white"
              lineHeight="1.05"
              minW={0}
              textShadow="0 2px 24px rgba(0,0,0,0.35)"
            >
              {typeof heroTitle === 'string'
                ? heroTitle.includes(', ') && heroTitle === t.heroTitle
                  ? heroTitle.split(', ').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        {idx === 0 && (
                          <>
                            ,<br />
                          </>
                        )}
                      </React.Fragment>
                    ))
                  : heroTitle.split('\n').map((line, idx) => (
                      <React.Fragment key={idx}>
                        {idx > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))
                : heroTitle}
              {heroTitleSecondLine ? (
                <>
                  {typeof heroTitle === 'string' &&
                  heroTitle.trimEnd().endsWith(',') ? (
                    <br />
                  ) : (
                    ' '
                  )}
                  {heroTitleSecondLine}
                </>
              ) : null}
            </Heading>

            <Text
              textStyle="bodyLarge"
              fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
              color="white"
              fontWeight="thin"
              minW={0}
              overflowWrap="break-word"
              wordBreak="break-word"
              textShadow="0 1px 12px rgba(0,0,0,0.35)"
            >
              {heroSubtitle}
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
                w="100%"
                maxW={{ base: '280px', sm: '320px', md: '360px', lg: '380px' }}
                borderRadius="full"
                boxShadow="lg"
                _hover={{ bg: 'brand.600' }}
                whiteSpace="normal"
                lineHeight="1.15"
              >
                {heroButton}
              </Button>
            </Box>
          </Stack>
          <Box
            aria-hidden
            flexGrow={{ base: 0, md: 1 }}
            minH={{
              ...LANDING_HERO_MOBILE_PT_COMPENSATION,
              md: 0,
              lg: 0,
              xl: 0,
              '2xl': 0,
            }}
            minW={0}
          />
        </Container>
      </Box>
    </Box>
  );
}
