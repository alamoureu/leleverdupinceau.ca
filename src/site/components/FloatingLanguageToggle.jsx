import React, { useContext } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import appContext from '../../AppProvider';
import { LANDING_LOCALE_PAIRS } from '../landing/paths';

/** Fixed FR/EN control - bottom-right (landing ads + STLP pages). */
export default function FloatingLanguageToggle() {
  const { currentLang, setCurrentLang } = useContext(appContext);
  const navigate = useNavigate();
  const location = useLocation();
  const label = currentLang === 'fr' ? 'Switch to English' : 'Passer en français';

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    const targetPath = LANDING_LOCALE_PAIRS[location.pathname];
    setCurrentLang(newLang);
    if (targetPath) navigate(targetPath);
  };

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
      onClick={toggleLanguage}
    >
      <Text as="span" textStyle="nav" fontWeight="bold" color="brand.500" lineHeight="1">
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Text>
    </Button>
  );
}
