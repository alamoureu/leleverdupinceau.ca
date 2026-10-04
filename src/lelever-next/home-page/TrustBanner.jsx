import React, { useContext } from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import { HAPPY_CLIENTS_COUNT, RBQ_LICENSE } from '../constants/company';
import quebecLogo from '../images/rbqlogo.png';
import intactAssuranceFr from '../images/assurance-intact/Intact_Assurance_fr.svg';
import intactInsuranceEn from '../images/assurance-intact/Intact_Insurance_idn-HFcHKw_1.svg';

const translations = {
  fr: {
    rbqAlt: 'Régie du bâtiment du Québec',
    clients: 'Clients ravis',
    satisfaction: 'Satisfaction garantie',
    assurance: 'Assurance 5M$',
    intactAlt: 'Intact Assurance',
    intactLogo: intactAssuranceFr,
  },
  en: {
    rbqAlt: 'Quebec Building Authority',
    clients: 'Delighted Clients',
    satisfaction: 'Satisfaction Guaranteed',
    assurance: '$5M Insurance',
    intactAlt: 'Intact Insurance',
    intactLogo: intactInsuranceEn,
  },
};

/** Explicit height so the negative margins center the card exactly on the seam between two sections. */
export const CARD_HEIGHT = { base: 'clamp(160px, 46vw, 184px)', md: '120px', lg: '136px' };
const halfCard = (extra) =>
  Object.fromEntries(Object.entries(CARD_HEIGHT).map(([bp, h]) => [bp, `calc(${h} / 2 ${extra})`]));
const CARD_OVERLAP = halfCard('* -1');
const SECTION_CLEARANCE = halfCard('+ clamp(24px, 6vw, 48px)');

const ICON_H = { base: 'clamp(24px, 8vw, 34px)', md: '36px', lg: '40px' };

/**
 * Barre de confiance unique site-wide : carte blanche qui flotte à cheval entre deux sections.
 * La placer directement entre deux sections ; leurs paddings s'ajustent automatiquement.
 */
export default function TrustBanner() {
  const { currentLang } = useContext(appContext);
  const t = translations[currentLang] || translations.fr;

  const items = [
    { image: quebecLogo, alt: t.rbqAlt, label: RBQ_LICENSE, ratio: 500 / 198 },
    { value: `${HAPPY_CLIENTS_COUNT}+`, label: t.clients },
    { value: '100%', label: t.satisfaction },
    { image: t.intactLogo, alt: t.intactAlt, label: t.assurance, ratio: 111.4 / 48.5 },
  ];

  return (
    <Box
      position="relative"
      zIndex={2}
      px="clamp(12px, 4vw, 24px)"
      mt={CARD_OVERLAP}
      mb={CARD_OVERLAP}
      sx={{
        'body *:has(+ &)': { pb: SECTION_CLEARANCE },
        'body & + *': { pt: SECTION_CLEARANCE },
      }}
    >
      <Flex
        maxW="960px"
        h={CARD_HEIGHT}
        mx="auto"
        px={{ base: 2, md: 6 }}
        wrap={{ base: 'wrap', md: 'nowrap' }}
        align="center"
        alignContent="space-evenly"
        bg="white"
        borderRadius="2xl"
        border="1px solid"
        borderColor="gray.200"
        boxShadow="0 4px 20px rgba(0,0,0,0.08)"
      >
        {items.map((item, index) => (
          <React.Fragment key={item.label}>
            {index > 0 && (
              <Divider
                orientation="vertical"
                borderColor="gray.200"
                h={{ md: '56px', lg: '64px' }}
                display={{ base: 'none', md: 'block' }}
              />
            )}
            <Flex flex={{ base: '1 1 50%', md: '1 1 0' }} direction="column" align="center" gap={1}>
              {item.value ? (
                <Text
                  h={ICON_H}
                  display="flex"
                  alignItems="center"
                  fontSize={{ base: 'clamp(1.25rem, 6vw, 1.75rem)', md: '3xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  {item.value}
                </Text>
              ) : (
                <Image
                  src={item.image}
                  alt={item.alt}
                  h={ICON_H}
                  w="auto"
                  sx={{ aspectRatio: String(item.ratio) }}
                  objectFit="contain"
                />
              )}
              <Text
                fontSize={{ base: 'clamp(0.6875rem, 3.2vw, 0.875rem)', md: 'sm', lg: 'md' }}
                color="gray.600"
                fontWeight="medium"
                whiteSpace="nowrap"
              >
                {item.label}
              </Text>
            </Flex>
          </React.Fragment>
        ))}
      </Flex>
    </Box>
  );
}
