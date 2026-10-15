import React, { useContext } from 'react';
import { Button, Text } from '@chakra-ui/react';
import appContext from '../../AppProvider';

/** Fixed FR/EN control - bottom-right (landing ads pages). */
export default function FloatingLanguageToggle() {
  const { currentLang, setCurrentLang } = useContext(appContext);
  const label = currentLang === 'fr' ? 'Switch to English' : 'Passer en français';

  return (
    <Button
      type="button"
      position="fixed"
      bottom={4}
      right={4}
      bg="whiteAlpha.900"
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor="brand.500"
      borderRadius="full"
      boxShadow="lg"
      zIndex={1000}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minW="44px"
      minH="44px"
      w="44px"
      h="44px"
      p={0}
      aria-label={label}
      _hover={{
        boxShadow: 'xl',
        bg: 'white',
        borderColor: 'brand.600',
      }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'brand.500',
        outlineOffset: '2px',
      }}
      transition="all 0.2s"
      onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
    >
      <Text as="span" textStyle="nav" fontWeight="bold" color="brand.500" lineHeight="1">
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Text>
    </Button>
  );
}
