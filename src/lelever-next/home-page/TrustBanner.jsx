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

export default function TrustBanner({ compact = false }) {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang];

  const TRUST_ITEMS = [
    {
      image: quebecLogo,
      alt: t.rbqAlt,
      text: t.rbqText,
      imageHeight: compact
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
      imageHeight: compact
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

  const paddingY = compact ? { base: 5, sm: 6, md: 7 } : { base: 4, md: 5 };
  const paddingX = compact ? { base: 6, sm: 8, md: 10, lg: 12 } : { base: 6, sm: 6, md: 8, lg: 10 };
  const gap = compact ? { base: 6, sm: 8, md: 10, lg: 12 } : { base: 4, sm: 5, md: 8, lg: 10 };

  return (
    <Box
      position="absolute"
      left="50%"
      bottom={0}
      transform="translate(-50%, 50%)"
      maxW={compact ? '820px' : '1440px'}
      w={
        compact
          ? { base: 'calc(100% - 32px)', sm: 'calc(100% - 32px)', md: 'min(720px, calc(100% - 48px))', lg: 'min(820px, calc(100% - 64px))' }
          : {
              base: 'calc(100% - 32px)',
              sm: 'calc(100% - 32px)',
              md: 'calc(100% - 48px)',
              lg: 'calc(100% - 80px)',
              xl: 'calc(100% - 96px)',
              '2xl': 'calc(100% - 120px)',
            }
      }
      zIndex={10}
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
        minW={0}
      >
        {TRUST_ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <Flex
              flex={1}
              minW={0}
              direction="column"
              align="center"
              justify="center"
              textAlign="center"
              gap={compact ? 1 : 2}
            >
              {item.isMetric ? (
                <Text
                  fontSize={compact ? { base: 'lg', sm: 'xl', md: '2xl' } : { base: 'md', md: 'lg' }}
                  fontWeight="bold"
                  lineHeight="1"
                  color="gray.800"
                  textAlign="center"
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
                />
              )}
              <Text
                fontSize={compact ? { base: 'xs', sm: 'sm', md: 'md' } : { base: 'xs', sm: 'sm' }}
                color="gray.700"
                fontWeight="medium"
                lineHeight="1.2"
                textAlign="center"
                w="100%"
              >
                {item.isMetric ? item.label : item.text}
              </Text>
            </Flex>
            {index < TRUST_ITEMS.length - 1 && (
              <Divider
                orientation="vertical"
                borderColor="gray.200"
                flexShrink={0}
                h={compact ? { base: '40px', sm: '48px', md: '56px' } : { base: '36px', sm: '44px' }}
                alignSelf="center"
              />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
