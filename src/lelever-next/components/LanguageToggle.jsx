import React, { useContext } from 'react';
import { Button } from '@chakra-ui/react';
import appContext from '../../AppProvider';

/**
 * Bascule FR/EN. Variante `bar` : texte discret dans la top bar noire.
 */
export default function LanguageToggle({ variant = 'bar', ...props }) {
  const { currentLang, setCurrentLang } = useContext(appContext);
  const isBar = variant === 'bar';

  const label = currentLang === 'fr' ? 'Switch to English' : 'Passer en français';

  if (isBar) {
    return (
      <Button
        type="button"
        aria-label={label}
        onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
        variant="unstyled"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
        minW="28px"
        h="18px"
        minH="18px"
        maxH="18px"
        px={1.5}
        py={0}
        borderRadius="full"
        border="none"
        bg="white"
        color="black"
        fontWeight="800"
        fontSize="11px"
        lineHeight="1"
        letterSpacing="0.04em"
        _hover={{ bg: 'gray.100' }}
        _focusVisible={{
          outline: '2px solid',
          outlineColor: 'white',
          outlineOffset: '1px',
        }}
        {...props}
      >
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Button>
    );
  }


  return (
    <Button
      type="button"
      aria-label={label}
      onClick={() => setCurrentLang(currentLang === 'fr' ? 'en' : 'fr')}
      variant="ghost"
      size="sm"
      minW="auto"
      h={{ base: '22px', md: '20px' }}
      px={2}
      py={0}
      borderRadius="md"
      border="1px solid"
      borderColor="brand.500"
      color="brand.500"
      fontWeight="bold"
      textStyle="nav"
      lineHeight="1"
      _hover={{
        bg: 'brand.50',
        borderColor: 'brand.600',
      }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'brand.500',
        outlineOffset: '2px',
      }}
      {...props}
    >
      {currentLang === 'fr' ? 'EN' : 'FR'}
    </Button>
  );
}
