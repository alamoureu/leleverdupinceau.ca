import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Link,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { useTranslation } from '../i18n';
import heroImage from '../images/heroImage.webp';
import CtaButton from './CtaButton';
import HeroBreadcrumb from '../components/HeroBreadcrumb';
import TrustBanner, { TRUST_BANNER_ABOVE_PB } from './TrustBanner';
import {
  PAGE_HERO_CONTENT_PT,
  PAGE_HERO_MIN_H,
  PAGE_HERO_STACK_SPACING,
  PAGE_HERO_TITLES_SPACING,
} from '../constants/sectionSpacing';

/**
 * Photo hero partagé (accueil, villes, services, landings).
 * Inclut TrustBanner par défaut pour un espacement mobile cohérent partout.
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
 *   secondaryCta?: { label: string, to: string, as?: 'button' | 'link' },
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
  imageBackground,
  imageAlt,
  /** Overlay on background image (CSS background value). Default: dark translucent. */
  overlayBg = 'rgba(0, 0, 0, 0.4)',
  /** Optional breadcrumb items for HeroBreadcrumb (preferred over children). */
  breadcrumb,
  /** Optional secondary CTA: outline button or text link next to the primary CTA. */
  secondaryCta,
  /** Carte de confiance sous le hero (défaut: oui). */
  showTrustBanner = true,
  children,
}) {
  const { t } = useTranslation();
  const heroTitle = title ?? t.heroTitle;
  const heroTitleSecondLine = titleSecondLine ?? t.heroTitleSecondLine;
  const heroSubtitle = subtitle ?? t.heroSubtitle;
  const heroDescription = description ?? null;
  const heroButton = buttonText ?? t.heroButton;
  const resolvedAlt =
    imageAlt ||
    `${t.heroImageAlt}${pageContext ? ' - ' + pageContext : ''}`;
  const secondaryIsExternal =
    secondaryCta?.to && /^https?:\/\//i.test(secondaryCta.to);

  return (
    <>
    <Box
      position="relative"
      w="100%"
      minW={0}
      minH={PAGE_HERO_MIN_H}
      display="flex"
      alignItems="flex-start"
      bgColor="gray.600"
      px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10, '2xl': 12 }}
      pb={showTrustBanner ? TRUST_BANNER_ABOVE_PB : { base: 10, md: 14 }}
      overflow="visible"
    >
      <>
        <Image
          src={imageBackground || heroImage}
          alt={resolvedAlt}
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
      {/* Top-aligned content; hero pb reserves the TrustBanner overlap seam */}
      <Container
        maxW="1440px"
        position="relative"
        zIndex={2}
        w="100%"
        px={{ base: 4, sm: 4, md: 6, lg: 8 }}
        pt={PAGE_HERO_CONTENT_PT}
        pb={0}
        minW={0}
      >
        <Stack
          spacing={PAGE_HERO_STACK_SPACING}
          minW={0}
          maxW={{ base: '100%', md: '900px', lg: '960px', xl: '1100px' }}
          align="flex-start"
          textAlign="left"
          layerStyle="clearReviewBadge"
        >
          {(breadcrumb?.length > 0 || children) && (
            breadcrumb?.length > 0 ? (
              <HeroBreadcrumb items={breadcrumb} />
            ) : (
              children
            )
          )}
          <Heading
            as="h1"
            size="hero"
            color="white"
            minW={0}
            textAlign="left"
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
            <Stack spacing={PAGE_HERO_TITLES_SPACING} minW={0} maxW={{ base: '560px', md: '640px' }}>
              {heroSubtitle && (
                <Text
                  variant="heroSubtitle"
                  color="white"
                  minW={0}
                  overflowWrap="break-word"
                  textAlign="left"
                >
                  {heroSubtitle}
                </Text>
              )}
              {heroDescription && (
                <Text
                  variant="heroDescription"
                  color="whiteAlpha.900"
                  textAlign="left"
                >
                  {heroDescription}
                </Text>
              )}
            </Stack>
          )}

          <Flex
            gap={3}
            pt={{ base: 1, sm: 2, md: 4 }}
            align="center"
            direction="row"
            flexWrap="wrap"
            w="100%"
            minW={0}
            alignSelf="stretch"
          >
            {secondaryCta?.label && secondaryCta?.to ? (
              <>
                <CtaButton
                  align="start"
                  onClick={onSubmissionOpen}
                  rightIcon={<ArrowForwardIcon />}
                >
                  {heroButton}
                </CtaButton>
                {secondaryCta.as === 'link' ? (
                  <Link
                    {...(secondaryIsExternal
                      ? { href: secondaryCta.to, isExternal: true, rel: 'nofollow noopener noreferrer' }
                      : { as: RouterLink, to: secondaryCta.to })}
                    color="whiteAlpha.900"
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="600"
                    flexShrink={0}
                    maxW="100%"
                    whiteSpace="normal"
                    alignSelf="center"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    {secondaryCta.label}
                  </Link>
                ) : secondaryIsExternal ? (
                  <Button
                    as={Link}
                    href={secondaryCta.to}
                    isExternal
                    rel="nofollow noopener noreferrer"
                    variant="ctaOutlineLight"
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="full"
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="600"
                    px={{ base: 5, md: 6 }}
                    minH={{ base: '44px', md: '48px' }}
                    h="auto"
                    w="auto"
                    maxW="22rem"
                    flexShrink={1}
                    whiteSpace="normal"
                    textAlign="center"
                    lineHeight="1.25"
                    py={2}
                    overflow="hidden"
                    _hover={{ textDecoration: 'none' }}
                  >
                    {secondaryCta.label}
                  </Button>
                ) : (
                  <Button
                    variant="ctaOutlineLight"
                    as={RouterLink}
                    to={secondaryCta.to}
                    rightIcon={<ArrowForwardIcon />}
                    borderRadius="full"
                    fontSize={{ base: 'sm', md: 'md' }}
                    fontWeight="600"
                    px={{ base: 5, md: 6 }}
                    minH={{ base: '44px', md: '48px' }}
                    h="auto"
                    w="auto"
                    maxW="22rem"
                    flexShrink={1}
                    whiteSpace="normal"
                    textAlign="center"
                    lineHeight="1.25"
                    py={2}
                    overflow="hidden"
                  >
                    {secondaryCta.label}
                  </Button>
                )}
              </>
            ) : (
              <CtaButton align="start" onClick={onSubmissionOpen}>
                {heroButton}
              </CtaButton>
            )}
          </Flex>
        </Stack>
      </Container>
    </Box>
    {showTrustBanner ? <TrustBanner /> : null}
    </>
  );
}
