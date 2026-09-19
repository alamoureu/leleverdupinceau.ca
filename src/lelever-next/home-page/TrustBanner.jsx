import React, { useContext } from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import quebecLogo from '../images/rbqlogo.png';
import trushieldLogo from '../images/trushieldlogo.png';

const translations = {
  fr: {
    rbqAlt: 'Régie du bâtiment du Québec',
    rbqText: '5864-1481-01',
    clientsSatisfaits: 'Clients ravis',
    assurance: 'Assurance 5M$',
    trushieldAlt: 'TruShield Insurance',
  },
  en: {
    rbqAlt: 'Quebec Building Authority',
    rbqText: '5864-1481-01',
    clientsSatisfaits: 'Delighted Clients',
    assurance: '$5M Insurance',
    trushieldAlt: 'TruShield Insurance',
  },
};

/** Explicit CSS sizes (h × intrinsic ratio) so logos never expand on decode (mobile CLS). */
function logoBoxSize(intrinsicW, intrinsicH, heights) {
  const ratio = intrinsicW / intrinsicH;
  const width = {};
  Object.entries(heights).forEach(([bp, h]) => {
    width[bp] = `${Math.round(h * ratio)}px`;
  });
  const height = {};
  Object.entries(heights).forEach(([bp, h]) => {
    height[bp] = `${h}px`;
  });
  return { width, height };
}

const RBQ_HEIGHTS = { base: 30, sm: 32, md: 36, lg: 40 };
const TRUSHIELD_HEIGHTS = { base: 26, sm: 28, md: 32, lg: 36 };
const RBQ_BOX = logoBoxSize(500, 198, RBQ_HEIGHTS);
const TRUSHIELD_BOX = logoBoxSize(590, 181, TRUSHIELD_HEIGHTS);

/**
 * Bandeau de confiance unique site-wide : RBQ, volume clients, assurance.
 * `showSatisfactionGuarantee` : ajoute la pastille « 100 % satisfaction garantie » (défaut false ; passer true si besoin sur une page).
 * Placer dans un conteneur `bg="gray.50"` + bordures si besoin (voir pages ville / services).
 */
export default function TrustBanner({ showSatisfactionGuarantee = false }) {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang] || translations.fr;

  const rbqItem = {
    image: quebecLogo,
    alt: t.rbqAlt,
    text: t.rbqText,
    intrinsicWidth: 500,
    intrinsicHeight: 198,
    box: RBQ_BOX,
  };
  const clientsItem = {
    isMetric: true,
    value: '850+',
    label: t.clientsSatisfaits,
  };
  const satisfactionItem = {
    isMetric: true,
    value: '100%',
    label: currentLang === 'en' ? 'satisfaction guaranteed' : 'satisfaction garantie',
  };
  const trushieldItem = {
    image: trushieldLogo,
    alt: t.trushieldAlt,
    text: t.assurance,
    intrinsicWidth: 590,
    intrinsicHeight: 181,
    box: TRUSHIELD_BOX,
  };

  const TRUST_ITEMS = showSatisfactionGuarantee
    ? [rbqItem, clientsItem, satisfactionItem, trushieldItem]
    : [rbqItem, clientsItem, trushieldItem];

  const paddingY = { base: 7, sm: 8, md: 9, lg: 10 };
  const paddingX = { base: 5, sm: 7, md: 11, lg: 14 };
  const gap = { base: 4, sm: 7, md: 11, lg: 14 };

  return (
    <Box
      w="100%"
      py={paddingY}
      px={paddingX}
      // Reserve two-row wrap height on mobile so items don't push the page when logos paint
      minH={{ base: '168px', sm: '112px', md: '128px', lg: '140px' }}
      boxSizing="border-box"
    >
      <Flex
        direction="row"
        align="center"
        justify={{ base: 'space-evenly', sm: 'space-around', md: 'center' }}
        gap={gap}
        wrap={{ base: 'wrap', sm: 'nowrap' }}
        minW={0}
        maxW="1200px"
        mx="auto"
        minH={{ base: '112px', sm: '64px', md: '72px', lg: '80px' }}
      >
        {TRUST_ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <Flex
              flex={{ base: '1 1 40%', sm: '1 0 auto' }}
              minW={{ base: 0, sm: 'max-content' }}
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              gap={1.5}
              py={{ base: 2, sm: 0 }}
              // Stable column height: logo slot + label (avoids vertical CLS on wrap)
              minH={{ base: '72px', sm: '64px', md: '72px', lg: '80px' }}
            >
              {item.isMetric ? (
                <Text
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
                  fontWeight="bold"
                  lineHeight="1"
                  color="gray.800"
                  textAlign="center"
                  whiteSpace="nowrap"
                  h={{ base: '30px', sm: '32px', md: '36px', lg: '40px' }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {item.value}
                </Text>
              ) : (
                <Box
                  w={item.box.width}
                  h={item.box.height}
                  flexShrink={0}
                  overflow="hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    htmlWidth={item.intrinsicWidth}
                    htmlHeight={item.intrinsicHeight}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                    display="block"
                    loading="eager"
                    decoding="async"
                    fetchPriority="low"
                  />
                </Box>
              )}
              <Text
                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="medium"
                lineHeight="1.3"
                textAlign="center"
                whiteSpace={{ base: 'normal', sm: 'nowrap' }}
                mt={item.isMetric ? 0.5 : 0}
                minH={{ base: '2.6em', sm: '1.3em' }}
              >
                {item.isMetric ? item.label : item.text}
              </Text>
            </Flex>
            {index < TRUST_ITEMS.length - 1 && (
              <Divider
                orientation="vertical"
                borderColor="gray.300"
                flexShrink={0}
                display={{ base: 'none', sm: 'block' }}
                h={{ base: '48px', sm: '56px', md: '64px' }}
                alignSelf="center"
              />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
