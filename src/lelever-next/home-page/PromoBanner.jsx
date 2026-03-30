import React, { useMemo } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import appContext from '../../AppProvider';

/**
 * Height of the promo banner at each breakpoint.
 * Consumed by WebsiteNavBar (shifts itself down) and LandingPageV2 (page-top offset).
 */
export const PROMO_BANNER_HEIGHT = {
  base: '36px',
  sm: '36px',
  md: '40px',
  lg: '40px',
  xl: '40px',
  '2xl': '40px',
};

function getTomorrow(lang) {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const locale = lang === 'en' ? 'en-CA' : 'fr-CA';
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
}

/**
 * Thin promo bar pinned at the very top of the viewport (above the fixed navbar).
 * Rendered directly in LandingPageV2 (not inside WebsiteNavBar).
 */
export default function PromoBanner() {
  const { currentLang } = useContext(appContext);
  const tomorrow = useMemo(() => getTomorrow(currentLang), [currentLang]);

  const text =
    currentLang === 'en'
      ? `🏷️\u00A010\u00A0% off — fill out the form before ${tomorrow}`
      : `🏷️\u00A010\u00A0% de rabais — remplissez le formulaire avant le ${tomorrow}`;

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={10000}
      h={PROMO_BANNER_HEIGHT}
      bgGradient="linear(to-r, brand.700, brand.600)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
      w="100%"
    >
      <Text
        textAlign="center"
        fontSize={{ base: '11px', sm: 'xs', md: 'sm' }}
        fontWeight="semibold"
        lineHeight="1.3"
        noOfLines={1}
        px={{ base: 4, md: 8 }}
      >
        {text}
      </Text>
    </Box>
  );
}
