import React, { useContext } from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import quebecLogo from '../images/rbqlogo.png';
import trushieldLogo from '../images/trushieldlogo.png';

/** Évite un bandeau trop étiré sur grands écrans (accueil = flottant ; landing = compact + inline). */
const TRUST_BANNER_MAX_W_COMPACT = '820px';
const TRUST_BANNER_MAX_W_FULL = '960px';

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

export default function TrustBanner({ compact = false, inline = false }) {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang] || translations.fr;
  const landingInline = compact && inline;

  const TRUST_ITEMS = [
    {
      image: quebecLogo,
      alt: t.rbqAlt,
      text: t.rbqText,
      imageHeight: landingInline
        ? { base: '30px', sm: '32px', md: '36px', lg: '40px' }
        : compact
        ? { base: '26px', sm: '28px', md: '32px', lg: '36px' }
        : {
            base: '20px',
            sm: '22px',
            md: '24px',
            lg: '28px',
            xl: '30px',
            '2xl': '32px',
          },
    },
    {
      isMetric: true,
      value: '800+',
      label: t.clientsSatisfaits,
    },
    {
      image: trushieldLogo,
      alt: t.trushieldAlt,
      text: t.assurance,
      imageHeight: landingInline
        ? { base: '26px', sm: '28px', md: '32px', lg: '36px' }
        : compact
        ? { base: '22px', sm: '24px', md: '28px', lg: '32px' }
        : {
            base: '18px',
            sm: '20px',
            md: '22px',
            lg: '26px',
            xl: '28px',
            '2xl': '30px',
          },
    },
  ];

  const paddingY = landingInline
    ? { base: 7, sm: 8, md: 9, lg: 10, xl: 10, '2xl': 12 }
    : compact
      ? { base: 5, sm: 6, md: 7 }
      : { base: 4, md: 5 };
  const paddingX = landingInline
    ? { base: 5, sm: 7, md: 11, lg: 14 }
    : compact
      ? { base: 4, sm: 6, md: 10, lg: 12 }
      : { base: 6, sm: 6, md: 8, lg: 10 };
  const gap = landingInline
    ? { base: 4, sm: 7, md: 11, lg: 14 }
    : compact
      ? { base: 3, sm: 6, md: 10, lg: 12 }
      : {
          base: 4,
          sm: 5,
          md: 6,
          lg: 8,
          xl: 10,
          '2xl': 12,
        };

  const floatingLayout = !inline;

  return (
    <Box
      position={floatingLayout ? 'absolute' : 'relative'}
      left={floatingLayout ? '50%' : 'auto'}
      bottom={floatingLayout ? 0 : 'auto'}
      transform={
        floatingLayout
          ? {
              base: 'translate(-50%, 50%)',
              md: 'translate(-50%, calc(50% + 1.25rem))',
              xl: 'translate(-50%, calc(50% + 1.25rem))',
              '2xl': 'translate(-50%, calc(50% + 1.25rem))',
            }
          : 'none'
      }
      mx={inline ? 'auto' : undefined}
      maxW={compact ? TRUST_BANNER_MAX_W_COMPACT : TRUST_BANNER_MAX_W_FULL}
      w={
        inline
          ? {
              /** Pleine largeur du parent sur mobile (évite double marge avec le Container). */
              base: '100%',
              sm: '100%',
              md: `min(${TRUST_BANNER_MAX_W_COMPACT}, calc(100% - 48px))`,
            }
          : compact
            ? {
                base: 'calc(100% - 32px)',
                sm: 'calc(100% - 32px)',
                md: `min(720px, calc(100% - 48px))`,
                lg: `min(${TRUST_BANNER_MAX_W_COMPACT}, calc(100% - 64px))`,
              }
            : {
                base: 'calc(100% - 32px)',
                sm: 'calc(100% - 32px)',
                md: 'calc(100% - 48px)',
                lg: 'calc(100% - 80px)',
                xl: 'calc(100% - 96px)',
                '2xl': 'calc(100% - 120px)',
              }
      }
      zIndex={floatingLayout ? 10 : 1}
      bg="white"
      borderRadius={compact ? 'xl' : '2xl'}
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      py={paddingY}
      px={paddingX}
    >
      <Flex
        direction="row"
        align="center"
        justify={{ base: 'space-evenly', sm: 'space-between' }}
        gap={gap}
        wrap="nowrap"
        minW={0}
        overflowX={{ base: 'auto', md: 'visible' }}
        sx={{ WebkitOverflowScrolling: 'touch' }}
      >
        {TRUST_ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <Flex
              flex="1 0 auto"
              minW="max-content"
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              gap={landingInline ? 1.5 : compact ? 1 : 2}
            >
              {item.isMetric ? (
                <Text
                  fontSize={
                    landingInline
                      ? { base: 'xl', sm: '2xl', md: '3xl' }
                      : compact
                        ? { base: 'lg', sm: 'xl', md: '2xl' }
                        : { base: 'md', md: 'lg' }
                  }
                  fontWeight="bold"
                  lineHeight="1"
                  color="gray.800"
                  textAlign="center"
                  whiteSpace="nowrap"
                >
                  {item.value}
                </Text>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  h={item.imageHeight}
                  w="auto"
                  objectFit="contain"
                  display="block"
                  loading="lazy"
                  decoding="async"
                  flexShrink={0}
                />
              )}
              <Text
                fontSize={
                  landingInline
                    ? { base: 'sm', sm: 'md', md: 'lg' }
                    : compact
                      ? { base: 'xs', sm: 'sm', md: 'md' }
                      : { base: 'xs', sm: 'sm' }
                }
                color="gray.700"
                fontWeight="medium"
                lineHeight="1.25"
                textAlign="center"
                whiteSpace="nowrap"
                mt={item.isMetric ? 1 : 0}
              >
                {item.isMetric ? item.label : item.text}
              </Text>
            </Flex>
            {index < TRUST_ITEMS.length - 1 && (
              <Divider
                orientation="vertical"
                borderColor="gray.200"
                flexShrink={0}
                display={{ base: 'none', sm: 'block' }}
                h={
                  landingInline
                    ? { base: '48px', sm: '56px', md: '64px' }
                    : compact
                      ? { base: '40px', sm: '48px', md: '56px' }
                      : {
                          base: '36px',
                          sm: '44px',
                          md: '48px',
                          lg: '52px',
                          xl: '56px',
                          '2xl': '60px',
                        }
                }
                alignSelf="center"
              />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
