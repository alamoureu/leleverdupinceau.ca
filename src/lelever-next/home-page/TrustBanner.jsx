import React, { useContext } from 'react';
import { Box, Flex, Text, Image, Divider, Stack } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import quebecLogo from '../images/rbqlogo.png';
import trushieldLogo from '../images/trushieldlogo.png';

const translations = {
  fr: {
    rbqAlt: 'Régie du bâtiment du Québec',
    rbqText: 'RBQ 5864-1481-01',
    clientsSatisfaits: 'Clients ravis',
    assurance: 'Assurance 5M$',
    trushieldAlt: 'TruShield Insurance',
  },
  en: {
    rbqAlt: 'Quebec Building Authority',
    rbqText: 'RBQ 5864-1481-01',
    clientsSatisfaits: 'Delighted Clients',
    assurance: '$5M Insurance',
    trushieldAlt: 'TruShield Insurance',
  },
};

export default function TrustBanner() {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang];

  const TRUST_ITEMS = [
    {
      image: quebecLogo,
      alt: t.rbqAlt,
      text: t.rbqText,
      imageHeight: {
        base: '24px',
        sm: '26px',
        md: '28px',
        lg: '34px',
        xl: '44px',
        '2xl': '52px',
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
      imageHeight: {
        base: '22px',
        sm: '26px',
        md: '28px',
        lg: '34px',
        xl: '44px',
        '2xl': '52px',
      },
    },
  ];

  return (
    <Box
      position="absolute"
      left="50%"
      maxW="1440px"
      w={{
        base: 'calc(100% - 24px)',
        sm: 'calc(100% - 32px)',
        md: 'calc(100% - 48px)',
        lg: 'calc(100% - 80px)',
        xl: 'calc(100% - 96px)',
        '2xl': 'calc(100% - 120px)',
      }}
      bottom={{ base: '-28px', sm: '-32px', md: '-36px', lg: '-40px', xl: '-44px' }}
      transform="translate(-50%, 0)"
      zIndex={10}
      bg="white"
      borderRadius="2xl"
      border="1px solid"
      borderColor="gray.200"
      boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      py={{ base: 4, md: 5, lg: 6, xl: 6, '2xl': 7 }}
      px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
    >
      <Flex
        direction="row"
        align="flex-end"
        justify="space-between"
        gap={{ base: 3, sm: 4, md: 5, lg: 6, xl: 8, '2xl': 10 }}
        minW={0}
      >
        {TRUST_ITEMS.map((item, index) => (
          <React.Fragment key={index}>
            <Stack
              flex={1}
              minW={0}
              spacing={{ base: 1, md: 2 }}
              align="center"
              justify="flex-end"
              textAlign="center"
            >
              {item.isMetric ? (
                <Text
                  fontSize={{ base: '16px', sm: '18px', md: 'xl', lg: '2xl', xl: '3xl', '2xl': '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                  lineHeight="1"
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
                  mx="auto"
                />
              )}
              <Text
                fontSize={{ base: 'xs', sm: 'xs', md: 'sm', lg: 'md', xl: 'md' }}
                color="gray.700"
                fontWeight="medium"
                lineHeight="1.2"
              >
                {item.isMetric ? item.label : item.text}
              </Text>
            </Stack>
            {index < TRUST_ITEMS.length - 1 && (
              <Divider
                orientation="vertical"
                borderColor="gray.200"
                h="auto"
                alignSelf="stretch"
                minH="40px"
              />
            )}
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
