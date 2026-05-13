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
    imageHeight: { base: '30px', sm: '32px', md: '36px', lg: '40px' },
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
    imageHeight: { base: '26px', sm: '28px', md: '32px', lg: '36px' },
  };

  const TRUST_ITEMS = showSatisfactionGuarantee
    ? [rbqItem, clientsItem, satisfactionItem, trushieldItem]
    : [rbqItem, clientsItem, trushieldItem];

  const paddingY = { base: 7, sm: 8, md: 9, lg: 10 };
  const paddingX = { base: 5, sm: 7, md: 11, lg: 14 };
  const gap = { base: 4, sm: 7, md: 11, lg: 14 };

  return (
    <Box w="100%" py={paddingY} px={paddingX}>
      <Flex
        direction="row"
        align="center"
        justify={{ base: 'space-evenly', sm: 'space-around', md: 'center' }}
        gap={gap}
        wrap={{ base: 'wrap', sm: 'nowrap' }}
        minW={0}
        maxW="1200px"
        mx="auto"
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
            >
              {item.isMetric ? (
                <Text
                  fontSize={{ base: 'xl', sm: '2xl', md: '3xl' }}
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
                fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="medium"
                lineHeight="1.3"
                textAlign="center"
                whiteSpace={{ base: 'normal', sm: 'nowrap' }}
                mt={item.isMetric ? 0.5 : 0}
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
