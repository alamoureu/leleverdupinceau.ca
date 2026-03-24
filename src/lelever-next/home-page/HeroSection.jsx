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

export default function HeroSection({
  onSubmissionOpen,
  pageContext = '',
  title,
  titleSecondLine,
  subtitle,
  description,
  buttonText,
  titleFontWeight,
  titleFontSize,
  contentMaxW,
  contentPr,
  imageBackground,
  children,
  compactTrustBanner,
}) {
  const { t } = useTranslation();
  const heroTitle = title ?? t.heroTitle;
  const heroTitleSecondLine = titleSecondLine ?? t.heroTitleSecondLine;
  const heroSubtitle = subtitle ?? t.heroSubtitle;
  const heroDescription = description ?? null;
  const heroButton = buttonText ?? t.heroButton;
  const heroTitleFontWeight = titleFontWeight ?? '700';
  const heroTitleFontSize = titleFontSize ?? undefined;
  const heroContentMaxW = contentMaxW ?? undefined;
  const heroContentPr = contentPr ?? undefined;

  return (
    <Box
      position="relative"
      w="100%"
      minW={0}
      minH={{
        base: '320px',
        sm: '350px',
        md: '440px',
        lg: '480px',
        xl: '680px',
        '2xl': '750px',
      }}
      h={{
        base: 'auto',
        sm: 'auto',
        md: '52vh',
        lg: '55vh',
        xl: '85vh',
        '2xl': '85vh',
      }}
      pb={{
        base: 24,
        sm: 32,
        md: 28,
        lg: 32,
        xl: 0,
        '2xl': 0,
      }}
      bgColor="gray.600"
      px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      overflow="visible"
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
        zIndex={0}
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
        zIndex={1}
      />
      <Container
        maxW="1440px"
        h="100%"
        position="relative"
        zIndex={2}
        px={{ base: 4, sm: 4, md: 6, lg: 8 }}
        minW={0}
      >
        <Stack
          h="100%"
          minW={0}
          pt={{
            base: '62px',
            sm: '62px',
            md: '120px',
            lg: '120px',
            xl: '140px',
            '2xl': '160px',
          }}
        >
          <Stack
            spacing={{ base: 3, sm: 4, md: 5, lg: 6 }}
            minW={0}
            maxW={heroContentMaxW}
            pr={heroContentPr}
          >
            {children}
            <Heading
              as="h1"
              size="page"
              fontWeight={heroTitleFontWeight}
              fontSize={
                heroTitleFontSize ?? {
                  base: '2xl',
                  sm: '3xl',
                  md: '4xl',
                  lg: '5xl',
                  xl: '6xl',
                  '2xl': '7xl',
                }
              }
              color="white"
              lineHeight="1.05"
              minW={0}
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
              {heroTitleSecondLine && (
                <>
                  {typeof heroTitle === 'string' &&
                  heroTitle.trimEnd().endsWith(',') ? (
                    <br />
                  ) : (
                    ' '
                  )}
                  {heroTitleSecondLine}
                </>
              )}
            </Heading>

            <Text
              textStyle="bodyLarge"
              fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
              color="white"
              fontWeight="thin"
              minW={0}
              overflowWrap="break-word"
              wordBreak="break-word"
            >
              {heroSubtitle}
            </Text>

            {heroDescription && (
              <Text
                color="whiteAlpha.800"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                lineHeight="1.6"
                maxW={{ base: '560px', md: '640px', lg: '720px' }}
              >
                {heroDescription}
              </Text>
            )}

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
        </Stack>
      </Container>
      <TrustBanner compact={compactTrustBanner} />
    </Box>
  );
}
