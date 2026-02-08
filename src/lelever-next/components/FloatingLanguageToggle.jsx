import React, { useContext } from 'react';
import { Button, Text } from '@chakra-ui/react';
import appContext from '../../AppProvider';

export default function FloatingLanguageToggle() {
  const { currentLang, setCurrentLang } = useContext(appContext);

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setCurrentLang(newLang);
  };

  const label = currentLang === 'fr' ? 'Switch to English' : 'Passer en français';

  return (
    <Button
      position='fixed'
      bottom={{ base: 4, md: 4 }}
      right={{ base: 4, md: 4 }}
      bg='whiteAlpha.900'
      backdropFilter='blur(10px)'
      border='1px solid'
      borderColor='brand.500'
      borderRadius='full'
      boxShadow='lg'
      zIndex='1000'
      display='flex'
      alignItems='center'
      justifyContent='center'
      minW={{ base: '44px', md: '44px' }}
      minH={{ base: '44px', md: '44px' }}
      w={{ base: '44px', md: '44px' }}
      h={{ base: '44px', md: '44px' }}
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
      transition='all 0.2s'
      onClick={toggleLanguage}
    >
      <Text textStyle='nav' fontWeight='bold' color='brand.500'>
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Text>
    </Button>
  );
}
