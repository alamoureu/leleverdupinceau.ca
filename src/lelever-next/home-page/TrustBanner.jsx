import React, { useContext } from 'react';
import { Box, Flex, Text, Image, Divider } from '@chakra-ui/react';
import appContext from '../../AppProvider';
import { HAPPY_CLIENTS_COUNT, RBQ_LICENSE } from '../constants/company';
import { TRUST_BANNER_AIR } from '../constants/sectionSpacing';
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
export const CARD_HEIGHT = { base: 'clamp(112px, 30vw, 124px)', md: '120px', lg: '136px' };
/** md+ uses the md air token (CARD_HEIGHT also has lg; do not fall back to base). */
const airFor = (bp) => (bp === 'base' ? TRUST_BANNER_AIR.base : TRUST_BANNER_AIR.md);
const halfCard = (extraFn) =>
  Object.fromEntries(
    Object.entries(CARD_HEIGHT).map(([bp, h]) => [bp, `calc(${h} / 2 ${extraFn(bp)})`])
  );
/** Half card height - optically center hero content above the overlapping TrustBanner. */
export const CARD_HALF_HEIGHT = Object.fromEntries(
  Object.entries(CARD_HEIGHT).map(([bp, h]) => [bp, `calc(${h} / 2)`])
);
const CARD_OVERLAP = halfCard(() => '* -1');
/** Air between hero CTA and the card top - set as pb on the section above TrustBanner. */
export const TRUST_BANNER_ABOVE_PB = halfCard((bp) => `+ ${airFor(bp)}`);
/** Air between the card bottom and the next section title (same as above + title→content). */
export const TRUST_BANNER_BELOW_PT = halfCard((bp) => `+ ${airFor(bp)}`);

const ICON_H = { base: 'clamp(18px, 5vw, 24px)', md: '36px', lg: '40px' };

/**
 * Barre de confiance unique site-wide : carte blanche à cheval entre deux sections.
 * Section au-dessus : pb={TRUST_BANNER_ABOVE_PB} (HeroSection le fait par défaut).
 * Section en dessous : pt={TRUST_BANNER_BELOW_PT} (pas de CSS auto - évite le double padding).
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
    <Box position="relative" zIndex={2} px="clamp(12px, 4vw, 24px)" mt={CARD_OVERLAP} mb={CARD_OVERLAP}>
      <Flex
        maxW="960px"
        h={CARD_HEIGHT}
        mx="auto"
        px={{ base: 2, md: 6 }}
        py={{ base: 2, md: 0 }}
        wrap={{ base: 'wrap', md: 'nowrap' }}
        align="center"
        alignContent="center"
        rowGap={{ base: 1.5, md: 0 }}
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
                  fontSize={{ base: 'clamp(1rem, 4.5vw, 1.25rem)', md: '3xl' }}
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
                fontSize={{ base: 'clamp(0.5625rem, 2.5vw, 0.75rem)', md: 'sm', lg: 'md' }}
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
