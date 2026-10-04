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
import { LANDING_MAIN_CONTENT_PT } from '../landing/constants';
import CtaButton from './CtaButton';
import { CARD_HEIGHT as TRUST_CARD_HEIGHT } from './TrustBanner';

/** V en bas du hero : la pointe s'arrête juste au-dessus de la carte TrustBanner (à cheval sur le bas de la section). */
const V_DEPTH = 'clamp(40px, 9vw, 120px)';
const V_TIP_GAP = 'clamp(10px, 2.5vw, 24px)';
const CLIP_POLYGON = Object.fromEntries(
  Object.entries(TRUST_CARD_HEIGHT).map(([bp, h]) => {
    const tip = `calc(100% - ${h} / 2 - ${V_TIP_GAP})`;
    const side = `calc(100% - ${h} / 2 - ${V_TIP_GAP} - ${V_DEPTH})`;
    return [bp, `polygon(0 0, 100% 0, 100% ${side}, 50% ${tip}, 0 ${side})`];
  })
);

/**
 * Hero landing : clip en V en bas. Nav fixe → `pt` + `pb` symétriques.
 * Le bloc contenu est centré dans le hero ; titre, texte et CTA restent alignés à gauche dans ce bloc.
 */
export default function LandingHeroSection({
  onSubmissionOpen,
  pageContext = '',
  title,
  titleSecondLine = '',
  subtitle,
  buttonText,
  imageBackground,
  contentPt,
  children,
}) {
  const { t } = useTranslation();
  const heroTitle = title ?? t.heroTitle;
  const heroTitleSecondLine = titleSecondLine ?? t.heroTitleSecondLine;
  const heroSubtitle = subtitle ?? t.heroSubtitle;
  const heroButton = buttonText ?? t.heroButton;

  /** pb plus grand que pt pour compenser le clip en V (~20 % du bas coupé) → remonte le contenu vers le centre visuel. */
  const heroPb = {
    base: '9rem',
    sm: '9.5rem',
    md: '12rem',
    lg: '13rem',
    xl: '14rem',
    '2xl': '14rem',
  };

  return (
    <Box
      as="section"
      position="relative"
      w="100%"
      minW={0}
      bg="gray.50"
      overflow="hidden"
    >
      {/* Couvre aussi le pb ajouté par TrustBanner, pour que la pointe du V descende jusqu'à la carte */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={0}
        clipPath={CLIP_POLYGON}
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
          htmlWidth={1600}
          htmlHeight={1067}
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

      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        minH={{
          base: 'min(76vh, 440px)',
          sm: 'min(74vh, 460px)',
          md: 'min(88vh, 700px)',
          lg: 'min(92vh, 820px)',
          xl: 'min(94vh, 920px)',
          '2xl': 'min(96vh, 1020px)',
        }}
        h={{
          base: 'min(76vh, 520px)',
          sm: 'min(74vh, 540px)',
          md: '92vh',
          lg: '100vh',
          xl: '100vh',
          '2xl': '100vh',
        }}
        w="100%"
      >
        <Container
          maxW="1440px"
          position="relative"
          zIndex={2}
          minW={0}
          flex="1"
          display="flex"
          flexDirection="column"
          minH="0"
          px={{ base: 4, sm: 4, md: 6, lg: 8 }}
          pt={contentPt ?? LANDING_MAIN_CONTENT_PT}
          pb={heroPb}
        >
          <Box
            flex="1"
            minH={0}
            minW={0}
            w="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Stack
              spacing={{ base: 3, sm: 4, md: 7, lg: 8, xl: 8 }}
              minW={0}
              maxW={{ base: '100%', md: '900px', lg: '960px', xl: '1100px' }}
              w="100%"
              align="flex-start"
              alignSelf="center"
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
                lineHeight={{ base: '1.08', md: '1.1', lg: '1.12' }}
                minW={0}
                textAlign="left"
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
                textAlign="left"
                textShadow="0 1px 12px rgba(0,0,0,0.35)"
              >
                {heroSubtitle}
              </Text>

              <Box pt={{ base: 2, sm: 3, md: 2, lg: 2, xl: 3 }} w="100%">
                <CtaButton onClick={onSubmissionOpen}>{heroButton}</CtaButton>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
