import React, { useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import { SECTION_TITLE_MAX_W, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import {
  DESKTOP_THREE_PLUS_TWO_SX,
  GRID_HOVER_PAD,
  MOBILE_CENTERED_CARD_SX,
  columnsForCount,
} from '../constants/responsiveGrid';
import FadedScroller from '../components/FadedScroller';
import CardCaptionStrip from './CardCaptionStrip';

import img7922 from '../images/Avant après landing Page/Copie de IMG_7922.jpg';
import img7924 from '../images/Avant après landing Page/Copie de IMG_7924.jpg';
import img7971 from '../images/Avant après landing Page/Copie de IMG_7971.jpg';
import img7974 from '../images/Avant après landing Page/Copie de IMG_7974.webp';
import img7975 from '../images/Avant après landing Page/Copie de IMG_7975.webp';
import img7985 from '../images/Avant après landing Page/Copie de IMG_7985.jpg';
import img7988 from '../images/Avant après landing Page/Copie de IMG_7988.jpg';
import img7990 from '../images/Avant après landing Page/Copie de IMG_7990.jpg';
import img7992 from '../images/Avant après landing Page/Copie de IMG_7992.jpg';
import img7994 from '../images/Avant après landing Page/Copie de IMG_7994.jpg';
import img7997 from '../images/Avant après landing Page/Copie de IMG_7997 2.jpg';
import img7999 from '../images/Avant après landing Page/Copie de IMG_7999 2.jpg';
import img6755 from '../images/Avant après landing Page/Copie de IMG_6755.jpg';
import img6757 from '../images/Avant après landing Page/Copie de IMG_6757.jpg';

// Old before_after set
import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';
import img5975 from '../images/before_after/IMG_5975.jpg';
import img5976 from '../images/before_after/IMG_5976.jpg';
import img5977 from '../images/before_after/IMG_5977.jpg';
import img5978 from '../images/before_after/IMG_5978.jpg';
import img5982 from '../images/before_after/IMG_5982.jpg';
import img5984 from '../images/before_after/IMG_5984.jpg';
import imgStaircaseBefore from '../images/IMG_7678.PNG';
import imgStaircaseAfter from '../images/IMG_5873.PNG';

function splitCaption(description) {
  if (!description) return { title: '', subtitle: '' };
  const parts = description.split(/\s+[–-]\s+/);
  if (parts.length >= 2) {
    return { title: parts[0].trim(), subtitle: parts.slice(1).join(' - ').trim() };
  }
  return { title: description.trim(), subtitle: '' };
}

const DEFAULT_PAIRS = [
  // Old before_after set (first)
  [img5969, img5970],
  [imgStaircaseBefore, imgStaircaseAfter],
  [img5973, img5974],
  [img5975, img5976],
  [img5977, img5978],
  [img5984, img5982],
  // New landing page set
  [img7924, img7922],
  [img7975, img7974],
  [img7990, img7988],
  [img7992, img7994],
  [img7999, img7997],
  [img7971, img6755],
  [img7985, img6757],
];

const DEFAULT_DESCRIPTIONS = [
  // Old list (first)
  { fr: 'Salon - murs plâtre et peinture', en: 'Living room - walls, plaster and paint' },
  { fr: 'Cage d\'escalier - réparation légère et peinture', en: 'Staircase - light repair and painting' },
  { fr: 'Terrasse en bois - teinture et protection', en: 'Wood deck - stain and protection' },
  { fr: 'Cuisine - armoires peintes en blanc', en: 'Kitchen - cabinets painted white' },
  { fr: 'Espace industriel - plafond steel deck et murs peints', en: 'Industrial space - steel deck ceiling and walls painted' },
  { fr: 'Maison - murs rafraîchis (protection et peinture)', en: 'House - walls refreshed (protection and painting)' },
  // New landing page set
  { fr: 'Salon - peinture murale (avant / après)', en: 'Living room - wall painting (before / after)' },
  { fr: 'Escalier extérieur - décapage et peinture', en: 'Outdoor staircase - stripping and painting' },
  { fr: 'Sous-sol - dégâts d\'eau et rafraîchissement', en: 'Basement - water damage and refresh' },
  { fr: 'Cuisine - réparation et finition', en: 'Kitchen - repair and finish' },
  { fr: 'Murs et boiseries - finition propre', en: 'Walls and trim - clean finish' },
  { fr: 'Maison - extérieur rafraîchi', en: 'Home - refreshed exterior' },
  { fr: 'Espace industriel - préparation et peinture', en: 'Industrial space - prep and painting' },
];

export function buildDefaultImages(isFr) {
  return DEFAULT_PAIRS.map(([before, after], i) => ({
    before,
    after,
    description: isFr ? DEFAULT_DESCRIPTIONS[i].fr : DEFAULT_DESCRIPTIONS[i].en,
  }));
}

/**
 * 6 paires sélectionnées pour la landing page.
 * La cuisine mur bleu-gris est remplacée par la cage d'escalier (drive).
 */
export function buildLandingPagePairs(isFr) {
  const pairs = [
    { before: img7924, after: img7922, fr: 'Salon - peinture murale (avant / après)', en: 'Living room - wall painting (before / after)' },
    { before: img7975, after: img7974, fr: 'Escalier extérieur - décapage et peinture', en: 'Outdoor staircase - stripping and painting' },
    { before: img7990, after: img7988, fr: 'Sous-sol - dégâts d\'eau et rafraîchissement', en: 'Basement - water damage and refresh' },
    { before: imgStaircaseBefore, after: imgStaircaseAfter, fr: 'Cage d\'escalier - réparation légère et peinture', en: 'Staircase - light repair and painting' },
    { before: img7999, after: img7997, fr: 'Murs et boiseries - finition propre', en: 'Walls and trim - clean finish' },
    { before: img7971, after: img6755, fr: 'Maison - extérieur rafraîchi', en: 'Home - refreshed exterior' },
  ];
  return pairs.map(({ before, after, fr, en }) => ({
    before,
    after,
    description: isFr ? fr : en,
  }));
}

const DEFAULT_SECTION_PY = { base: 8, md: 12, lg: 16 };

function BeforeAfterPairCard({ pair, isFr, t }) {
  const hasPair = Boolean(pair?.before && pair?.after);
  const placeholderBody = isFr
    ? 'Visuels avant/après à dédier à cette page uniquement, sans réutiliser une photo déjà affichée sur un autre service.'
    : 'Before/after visuals to add for this page only, without reusing a photo already shown on another service.';
  const caption = splitCaption(pair.description);

  return (
    <Box
      width="100%"
      h="100%"
      position="relative"
      borderRadius="xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 2px 12px rgba(0,0,0,0.06)"
      _hover={{
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        transform: 'translateY(-2px)',
        zIndex: 1,
      }}
      transition="box-shadow 0.2s ease, transform 0.2s ease"
      bg="white"
    >
      {hasPair ? (
        <Box overflow="hidden" borderTopRadius="xl">
          <Stack spacing={0}>
            <Box position="relative" w="100%">
              <img
                src={pair.before}
                alt={t.beforeAfterAltBefore}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block' }}
              />
              <Box
                position="absolute"
                top={{ base: 2, md: 3 }}
                left={{ base: 2, md: 3 }}
                bg="gray.900"
                color="white"
                px={{ base: 2, md: 3 }}
                py={{ base: 0.5, md: 1 }}
                borderRadius={{ base: 'sm', md: 'md' }}
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="bold"
                boxShadow="sm"
              >
                {t.beforeAfterLabelBefore}
              </Box>
            </Box>
            <Box
              position="relative"
              w="100%"
              borderTop="2px solid white"
            >
              <img
                src={pair.after}
                alt={t.beforeAfterAltAfter}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', aspectRatio: '3 / 2', objectFit: 'cover', display: 'block' }}
              />
              <Box
                position="absolute"
                top={{ base: 2, md: 3 }}
                left={{ base: 2, md: 3 }}
                bg="gray.900"
                color="white"
                px={{ base: 2, md: 3 }}
                py={{ base: 0.5, md: 1 }}
                borderRadius={{ base: 'sm', md: 'md' }}
                fontSize={{ base: 'xs', md: 'sm' }}
                fontWeight="bold"
                boxShadow="sm"
              >
                {t.beforeAfterLabelAfter}
              </Box>
            </Box>
          </Stack>
        </Box>
      ) : (
        <Flex
          direction="column"
          align="center"
          justify="center"
          minH={{ base: '280px', md: '300px' }}
          px={4}
          py={8}
          bg="gray.50"
          borderWidth="2px"
          borderStyle="dashed"
          borderColor="gray.300"
          borderTopRadius="xl"
          overflow="hidden"
        >
          <Text
            fontSize="sm"
            color="gray.600"
            textAlign="center"
            lineHeight="1.6"
            maxW="280px"
          >
            {placeholderBody}
          </Text>
        </Flex>
      )}
      {(caption.title || caption.subtitle) && (
        <CardCaptionStrip
          title={caption.title}
          subtitle={caption.subtitle}
          compact
        />
      )}
    </Box>
  );
}

export default function BeforeAfterCarouselSection({
  isFr: isFrProp,
  title: titleProp,
  subtitle: subtitleProp,
  images,
  sectionPy,
  sectionPaddingTop,
  sectionPaddingBottom,
  sectionBg = 'white',
  layout = 'carousel',
  hideCta = false,
}) {
  const { t, currentLang } = useTranslation();
  const isFr = isFrProp ?? currentLang === 'fr';
  const title = titleProp ?? t.beforeAfterTitle;
  const subtitle = subtitleProp === undefined ? t.beforeAfterSubtitle : subtitleProp;
  const isGrid = layout === 'grid';

  const items = useMemo(() => {
    const raw = images && images.length > 0 ? images : buildDefaultImages(isFr);
    const seen = new Set();
    return raw.filter((pair) => {
      if (!pair?.before || !pair?.after) return false;
      const key = `${pair.before}::${pair.after}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [images, isFr]);

  const fallbackPy = sectionPy ?? (isGrid ? { base: 4, md: 6 } : DEFAULT_SECTION_PY);
  const pt = sectionPaddingTop !== undefined ? sectionPaddingTop : fallbackPy;
  const pb = sectionPaddingBottom !== undefined ? sectionPaddingBottom : fallbackPy;

  const gridColumns = columnsForCount(items.length);
  const gridSx = {
    ...GRID_HOVER_PAD,
    ...MOBILE_CENTERED_CARD_SX,
    ...(items.length === 5 ? DESKTOP_THREE_PLUS_TWO_SX : {}),
  };

  return (
    <Box pt={pt} pb={pb} bg={sectionBg} overflowX="hidden">
      <Container
        maxW={isGrid ? '100%' : '1440px'}
        px={isGrid ? 0 : { base: 4, sm: 5, md: 6, lg: 8 }}
      >
        <Stack spacing={TRUST_BANNER_AIR_SPACE} align="center">
          {(title || subtitle) && (
            <Stack
              spacing={{ base: 2, md: 3 }}
              textAlign="center"
              maxW={SECTION_TITLE_MAX_W}
              w="100%"
            >
              {title && (
                <Heading
                  as="h2"
                  size="section"
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="1.25"
                  scrollMarginTop="6rem"
                  whiteSpace={{ base: 'normal', lg: 'nowrap' }}
                >
                  {title}
                </Heading>
              )}
              {subtitle ? (
                <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                  {subtitle}
                </Text>
              ) : null}
            </Stack>
          )}

          {isGrid ? (
            <SimpleGrid
              columns={gridColumns}
              spacing={{ base: 4, md: 5, lg: 6 }}
              w="100%"
              sx={gridSx}
            >
              {items.map((pair, i) => (
                <BeforeAfterPairCard
                  key={`grid-${i}`}
                  pair={pair}
                  isFr={isFr}
                  t={t}
                />
              ))}
            </SimpleGrid>
          ) : (
            <FadedScroller
              axis="horizontal"
              autoScroll
              speed={0.35}
              fadeFrom={sectionBg}
              w="100%"
              maxW="100%"
              mx={{ base: -4, md: -2 }}
              scrollerProps={{
                pt: 5,
                pb: 10,
                px: 7,
              }}
            >
              <Flex
                direction="row"
                gap={{ base: 3, md: 4 }}
                w="max-content"
                minW="100%"
                align="stretch"
              >
                {items.map((pair, i) => (
                  <Box
                    key={`ba-${i}-${pair.before}-${pair.after}`}
                    minW={{
                      base: 'min(80vw, 300px)',
                      md: '320px',
                      lg: '360px',
                    }}
                    w={{
                      base: 'min(80vw, 300px)',
                      md: '320px',
                      lg: '360px',
                    }}
                    flexShrink={0}
                  >
                    <BeforeAfterPairCard pair={pair} isFr={isFr} t={t} />
                  </Box>
                ))}
              </Flex>
            </FadedScroller>
          )}

          {!hideCta && (
            <Link
              as={RouterLink}
              to="/realisations"
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                variant="ctaOutline"
                rightIcon={<ArrowForwardIcon />}
                borderRadius="full"
                textStyle="nav"
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                minW={{ base: '269px', md: '285px' }}
              >
                {isFr ? 'Voir toutes nos réalisations' : 'View all our projects'}
              </Button>
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
