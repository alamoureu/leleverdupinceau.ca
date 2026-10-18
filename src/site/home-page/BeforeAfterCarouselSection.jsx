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
import { FaArrowRight as ArrowForwardIcon } from 'react-icons/fa';
import { useTranslation } from '../i18n';
import { SECTION_TITLE_MAX_W, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import {
  DESKTOP_THREE_PLUS_TWO_SX,
  GRID_HOVER_PAD,
  MOBILE_CENTERED_CARD_SX,
  columnsForCount,
} from '../constants/responsiveGrid';
import { AVIS_AVANT_APRES_PAIRS } from '../constants/avisAvantApres';
import { avisPhoto } from '../constants/avantApresById';
import FadedScroller from '../components/FadedScroller';
import CardCaptionStrip from './CardCaptionStrip';
import ResponsiveImage, { imageKey } from '../components/ResponsiveImage';

import img7922 from '../images/villes/montreal/avant-apres/IMG_7922.webp?responsive=ba';
import img7924 from '../images/home/avant-apres/IMG_7924.webp?responsive=ba';
import img7971 from '../images/home/avant-apres/IMG_7971.webp?responsive=ba';
import img7974 from '../images/sous-services/appartement/avant-apres/IMG_7974.webp?responsive=ba';
import img7975 from '../images/sous-services/appartement/avant-apres/IMG_7975.webp?responsive=ba';
import img7985 from '../images/home/avant-apres/IMG_7985.webp?responsive=ba';
import img7988 from '../images/services/apres-sinistre/avant-apres/IMG_7988.webp?responsive=ba';
import img7990 from '../images/services/apres-sinistre/avant-apres/IMG_7990.webp?responsive=ba';
import img7992 from '../images/sous-services/appartement/avant-apres/IMG_7992.webp?responsive=ba';
import img7994 from '../images/sous-services/appartement/avant-apres/IMG_7994.webp?responsive=ba';
import img7997 from '../images/sous-services/appartement/avant-apres/IMG_7997.webp?responsive=ba';
import img7999 from '../images/sous-services/appartement/avant-apres/IMG_7999.webp?responsive=ba';
import img6755 from '../images/home/avant-apres/IMG_6755.webp?responsive=ba';
import img6757 from '../images/home/avant-apres/IMG_6757.webp?responsive=ba';

import img5969 from '../images/home/avant-apres/IMG_5969.webp?responsive=ba';
import img5970 from '../images/home/avant-apres/IMG_5970.webp?responsive=ba';
import img5973 from '../images/services/teinture/avant-apres/IMG_5973.webp?responsive=ba';
import img5974 from '../images/services/teinture/avant-apres/IMG_5974.webp?responsive=ba';
import img5975 from '../images/sous-services/armoires/avant-apres/IMG_5975.webp?responsive=ba';
import img5976 from '../images/sous-services/armoires/avant-apres/IMG_5976.webp?responsive=ba';
import img5977 from '../images/services/pistolet/avant-apres/IMG_5977.webp?responsive=ba';
import img5978 from '../images/services/pistolet/avant-apres/IMG_5978.webp?responsive=ba';
import img5982 from '../images/sous-services/appartement/avant-apres/IMG_5982.webp?responsive=ba';
import img5984 from '../images/sous-services/appartement/avant-apres/IMG_5984.webp?responsive=ba';
import imgStaircaseBefore from '../images/sous-services/maison/avant-apres/IMG_7678.webp?responsive=ba';
import imgStaircaseAfter from '../images/sous-services/maison/avant-apres/IMG_5873.webp?responsive=ba';
import home0855 from '../images/villes/brossard/avant-apres/IMG_0855.webp?responsive=ba';
import home0856 from '../images/villes/brossard/avant-apres/IMG_0856.webp?responsive=ba';
import home0861 from '../images/villes/laprairie/avant-apres/IMG_0861.webp?responsive=ba';
import home0862 from '../images/villes/laprairie/avant-apres/IMG_0862.webp?responsive=ba';
import home0842 from '../images/villes/st-lambert/avant-apres/IMG_0842.webp?responsive=ba';
import home0843 from '../images/villes/st-lambert/avant-apres/IMG_0843.webp?responsive=ba';
import armoiresMileEndAvant from '../images/sous-services/armoires/avant-apres/IMG_8114.webp?responsive=ba';
import armoiresMileEndApres from '../images/sous-services/armoires/avant-apres/IMG_8120.webp?responsive=ba';

function splitCaption(description) {
  if (!description) return { title: '', subtitle: '' };
  const parts = description.split(/\s+-\s+/);
  if (parts.length >= 2) {
    return { title: parts[0].trim(), subtitle: parts.slice(1).join(' - ').trim() };
  }
  return { title: description.trim(), subtitle: '' };
}

/** Paires déjà sur l'accueil (ordre conservé). IDs avis déjà couverts pour éviter les doublons. */
const CURATED_AVIS_IDS = new Set(['0855', '0861', '0842']);

/**
 * Dedupes by image URL: neither before nor after may repeat in the same list.
 * Exported for tests / build checks. Callers must still avoid defining dupes.
 */
export function dedupeBeforeAfterPairs(pairs) {
  const seen = new Set();
  const out = [];
  let dropped = 0;
  for (const pair of pairs) {
    if (!pair?.before || !pair?.after) {
      dropped += 1;
      continue;
    }
    const beforeKey = imageKey(pair.before);
    const afterKey = imageKey(pair.after);
    if (seen.has(beforeKey) || seen.has(afterKey)) {
      dropped += 1;
      continue;
    }
    seen.add(beforeKey);
    seen.add(afterKey);
    out.push(pair);
  }
  if (dropped > 0 && typeof console !== 'undefined') {
    console.warn(
      `[BeforeAfter] dropped ${dropped} pair(s) with missing or duplicate images`,
    );
  }
  return out;
}

const CURATED_PAIRS = [
  [img5969, img5970, { fr: 'Salon - murs plâtre et peinture', en: 'Living room - walls, plaster and paint' }],
  [imgStaircaseBefore, imgStaircaseAfter, { fr: 'Cage d\'escalier - réparation légère et peinture', en: 'Staircase - light repair and painting' }],
  [img5973, img5974, { fr: 'Terrasse en bois - teinture et protection', en: 'Wood deck - stain and protection' }],
  [img5975, img5976, { fr: 'Cuisine - armoires peintes en blanc', en: 'Kitchen - cabinets painted white' }],
  [img5977, img5978, { fr: 'Espace industriel - plafond steel deck et murs peints', en: 'Industrial space - steel deck ceiling and walls painted' }],
  [img5984, img5982, { fr: 'Maison - murs rafraîchis (protection et peinture)', en: 'House - walls refreshed (protection and painting)' }],
  [img7924, img7922, { fr: 'Salon - peinture murale', en: 'Living room - wall painting' }],
  [img7975, img7974, { fr: 'Escalier extérieur - décapage et peinture', en: 'Outdoor staircase - stripping and painting' }],
  [img7990, img7988, { fr: 'Sous-sol - dégâts d\'eau et rafraîchissement', en: 'Basement - water damage and refresh' }],
  [img7992, img7994, { fr: 'Cuisine - réparation et finition', en: 'Kitchen - repair and finish' }],
  [img7999, img7997, { fr: 'Murs et boiseries - finition propre', en: 'Walls and trim - clean finish' }],
  [img7971, img6755, { fr: 'Maison - extérieur rafraîchi', en: 'Home - refreshed exterior' }],
  [img7985, img6757, { fr: 'Espace industriel - préparation et peinture', en: 'Industrial space - prep and painting' }],
  [home0855, home0856, { fr: "Hall d'entrée - murs et boiseries rafraîchis", en: 'Entrance hall - walls and trim refreshed' }],
  [home0861, home0862, { fr: 'Plinthe - réparation et peinture', en: 'Baseboard - repair and paint' }],
  [home0842, home0843, { fr: 'Chambre - papier peint retiré et murs repeints', en: 'Bedroom - wallpaper removed and walls repainted' }],
];

const EXTRA_FEATURED = [
  [
    armoiresMileEndAvant,
    armoiresMileEndApres,
    {
      fr: 'Cuisine - armoires peintes (Mile-End)',
      en: 'Kitchen - cabinets painted (Mile-End)',
    },
  ],
];

export function buildDefaultImages(isFr) {
  const curated = CURATED_PAIRS.map(([before, after, labels]) => ({
    before,
    after,
    description: isFr ? labels.fr : labels.en,
  }));

  const fromAvis = AVIS_AVANT_APRES_PAIRS.filter(
    (pair) => !CURATED_AVIS_IDS.has(pair.before),
  ).map((pair) => ({
    before: avisPhoto(pair.before),
    after: avisPhoto(pair.after),
    description: isFr ? pair.fr : pair.en,
  }));

  const featured = EXTRA_FEATURED.map(([before, after, labels]) => ({
    before,
    after,
    description: isFr ? labels.fr : labels.en,
  }));

  return dedupeBeforeAfterPairs([...curated, ...fromAvis, ...featured]);
}

/**
 * 6 paires sélectionnées pour la landing page.
 * La cuisine mur bleu-gris est remplacée par la cage d'escalier (drive).
 */
export function buildLandingPagePairs(isFr) {
  const pairs = [
    { before: img7924, after: img7922, fr: 'Salon - peinture murale', en: 'Living room - wall painting' },
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

function BeforeAfterPairCard({ pair, isFr, t, priority = false }) {
  const hasPair = Boolean(pair?.before && pair?.after);
  const placeholderBody = isFr
    ? 'Visuels avant/après à dédier à cette page uniquement, sans réutiliser une photo déjà affichée sur un autre service.'
    : 'Before/after visuals to add for this page only, without reusing a photo already shown on another service.';
  const caption = splitCaption(pair.description);
  const imgLoading = priority ? 'eager' : 'lazy';
  const beforeAlt = caption.title
    ? `${t.beforeAfterAltBefore} - ${caption.title}`
    : t.beforeAfterAltBefore;
  const afterAlt = caption.title
    ? `${t.beforeAfterAltAfter} - ${caption.title}`
    : t.beforeAfterAltAfter;

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
              <ResponsiveImage
                as="img"
                image={pair.before}
                alt={beforeAlt}
                width={1200}
                height={800}
                loading={imgLoading}
                decoding="async"
                sizes="(min-width: 48em) 600px, 90vw"
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
                aria-hidden="true"
              >
                {t.beforeAfterLabelBefore}
              </Box>
            </Box>
            <Box
              position="relative"
              w="100%"
              borderTop="2px solid white"
            >
              <ResponsiveImage
                as="img"
                image={pair.after}
                alt={afterAlt}
                width={1200}
                height={800}
                loading={imgLoading}
                decoding="async"
                sizes="(min-width: 48em) 600px, 90vw"
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
                aria-hidden="true"
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

function PairSlide({ pair, isFr, t, priority }) {
  return (
    <Box
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
      <BeforeAfterPairCard
        pair={pair}
        isFr={isFr}
        t={t}
        priority={priority}
      />
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
    return dedupeBeforeAfterPairs(raw);
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
                  priority={i < 3}
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
                  <PairSlide
                    key={`ba-${i}-${pair.before}`}
                    pair={pair}
                    isFr={isFr}
                    t={t}
                    priority={i < 6}
                  />
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
