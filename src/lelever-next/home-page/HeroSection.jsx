import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import heroImage from '../images/heroImage.webp';
import CtaButton from './CtaButton';

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
  /** Overlay on background image (CSS background value). Default: dark translucent. */
  overlayBg = 'rgba(0, 0, 0, 0.4)',
  children,
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
        md: 'max(440px, 52vh)',
        lg: 'max(480px, 55vh)',
        xl: 'max(680px, 85vh)',
        '2xl': 'max(750px, 85vh)',
      }}
      pb={{
        base: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 16,
        '2xl': 18,
      }}
      bgColor="gray.600"
      px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      overflow="visible"
    >
      <>
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
          htmlWidth={1920}
          htmlHeight={1266}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={overlayBg}
          zIndex={1}
        />
      </>
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
            base: '48px',
            md: '100px',
            xl: '116px',
            '2xl': '136px',
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

            {heroSubtitle && (
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
            )}

            {heroDescription && (
              <Text
                color="white"
                fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
                lineHeight="1.6"
                maxW={{ base: '560px', md: '640px', lg: '720px' }}
              >
                {heroDescription}
              </Text>
            )}

            <Box pt={{ base: 2, sm: 3, md: 4 }}>
              <CtaButton onClick={onSubmissionOpen}>{heroButton}</CtaButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
