import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from '../i18n';
import heroImage from '../images/shared/heroImage.webp';
import CtaButton from './CtaButton';
import HeroBreadcrumb from '../components/HeroBreadcrumb';
import TrustBanner, { TRUST_BANNER_ABOVE_PB } from './TrustBanner';
import { showsNavReviewBadge } from '../constants/navReviewBadge';
import {
  PAGE_HERO_MIN_H,
  PAGE_HERO_STACK_SPACING,
  PAGE_HERO_TITLES_SPACING,
} from '../constants/sectionSpacing';

/** Fade bleu marque partagé par tous les héros photo. */
export const HERO_OVERLAY_BG =
  'linear-gradient(155deg, rgba(18, 38, 74, 0.92) 0%, rgba(18, 38, 74, 0.62) 42%, rgba(18, 38, 74, 0.38) 100%)';

/**
 * Photo hero partagé (accueil, villes, services, landings).
 * Inclut TrustBanner par défaut pour un espacement mobile cohérent partout.
 * Un seul CTA primaire - jamais de second bouton dans le héros.
 *
 * @param {{
 *   onSubmissionOpen?: () => void,
 *   pageContext?: string,
 *   title?: React.ReactNode,
 *   titleSecondLine?: React.ReactNode,
 *   subtitle?: React.ReactNode,
 *   description?: React.ReactNode,
 *   buttonText?: string,
 *   imageBackground?: string,
 *   imageAlt?: string,
 *   overlayBg?: string,
 *   breadcrumb?: Array<{ label: string, to?: string, href?: string }>,
 *   showTrustBanner?: boolean,
 *   children?: React.ReactNode,
 * }} props
 */
export default function HeroSection({
  onSubmissionOpen,
  pageContext = '',
  title,
  titleSecondLine,
  subtitle,
  description,
  buttonText,
  hideCta = false,
  imageBackground,
  imageAlt,
  imagePosition = 'center',
  /** Overlay on background image (CSS background value). Default: brand blue fade. */
  overlayBg = HERO_OVERLAY_BG,
  /** Optional breadcrumb items for HeroBreadcrumb (preferred over children). */
  breadcrumb,
  /** Carte de confiance sous le hero (défaut: oui). */
  showTrustBanner = true,
  children,
}) {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const clearBadge = showsNavReviewBadge(pathname);
  const heroTitle = title ?? t.heroTitle;
  const heroTitleSecondLine = titleSecondLine ?? t.heroTitleSecondLine;
  const heroSubtitle = subtitle ?? t.heroSubtitle;
  const heroDescription = description ?? null;
  const heroButton = buttonText ?? t.heroButton;
  const resolvedAlt =
    imageAlt ||
    `${t.heroImageAlt}${pageContext ? ' - ' + pageContext : ''}`;
  const heroSrc = imageBackground || heroImage;

  return (
    <>
    <Helmet>
      <link rel="preload" href={heroSrc} as="image" fetchpriority="high" />
    </Helmet>
    <Box
      position="relative"
      w="100%"
      minW={0}
      minH={PAGE_HERO_MIN_H}
      display="flex"
      alignItems="center"
      bgColor="gray.600"
      px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      pb={showTrustBanner ? TRUST_BANNER_ABOVE_PB : { base: 10, md: 14 }}
      overflow="visible"
    >
      <>
        <Image
          src={heroSrc}
          alt={resolvedAlt}
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          objectFit="cover"
          objectPosition={imagePosition}
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
      {/* Left-aligned; vertically centered in the hero (mobile + desktop). */}
      <Container
        maxW="1440px"
        position="relative"
        zIndex={2}
        w="100%"
        px={{ base: 3, sm: 4, md: 6, lg: 8 }}
        pt={0}
        pb={0}
        minW={0}
      >
        <Stack
          spacing={PAGE_HERO_STACK_SPACING}
          minW={0}
          w="100%"
          maxW={{ base: '100%', md: '960px', lg: '1040px', xl: '1160px' }}
          align="flex-start"
          textAlign="left"
        >
          {(breadcrumb?.length > 0 || children) && (
            <Box
              w="100%"
              minW={0}
              layerStyle={clearBadge ? 'clearReviewBadge' : undefined}
            >
              {breadcrumb?.length > 0 ? (
                <HeroBreadcrumb items={breadcrumb} />
              ) : (
                children
              )}
            </Box>
          )}
          <Heading
            as="h1"
            size="hero"
            color="white"
            minW={0}
            w="100%"
            textAlign="left"
            layerStyle={clearBadge ? 'clearReviewBadge' : undefined}
            sx={{ textWrap: 'balance' }}
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

          {(heroSubtitle || heroDescription) && (
            <Stack
              spacing={PAGE_HERO_TITLES_SPACING}
              minW={0}
              w="100%"
              maxW={{ base: '100%', md: '820px', lg: '900px' }}
            >
              {heroSubtitle && (
                <Text
                  variant="heroSubtitle"
                  color="white"
                  minW={0}
                  overflowWrap="break-word"
                  textAlign="left"
                  sx={{ textWrap: 'pretty' }}
                >
                  {heroSubtitle}
                </Text>
              )}
              {heroDescription && (
                <Text
                  variant="heroDescription"
                  color="whiteAlpha.900"
                  textAlign="left"
                  sx={{ textWrap: 'pretty' }}
                >
                  {heroDescription}
                </Text>
              )}
            </Stack>
          )}

          {!hideCta && (
          <Flex
            gap={{ base: 2, md: 3 }}
            pt={{ base: 1, sm: 2, md: 4 }}
            align="center"
            direction="row"
            flexWrap="nowrap"
            w="100%"
            minW={0}
            alignSelf="stretch"
          >
            <CtaButton size="large" align="start" onClick={onSubmissionOpen}>
              {heroButton}
            </CtaButton>
          </Flex>
          )}
        </Stack>
      </Container>
    </Box>
    {showTrustBanner ? <TrustBanner /> : null}
    </>
  );
}
