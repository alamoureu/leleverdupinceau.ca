import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import appContext from '../../AppProvider';

export default function FloatingLanguageToggle() {
  const { currentLang, setCurrentLang } = useContext(appContext);

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setCurrentLang(newLang);
  };

  return (
    <Box
      position='fixed'
      bottom={{ base: '7px', md: '7px' }}
      right={{ base: '7px', md: '7px' }}
      bg='rgba(255, 255, 255, 0.05)'
      backdropFilter='blur(10px)'
      border='1px solid'
      borderColor='#014CC4'
      p={3}
      borderRadius='full'
      boxShadow='lg'
      zIndex='1000'
      cursor='pointer'
      display='flex'
      alignItems='center'
      justifyContent='center'
      w='40px'
      h='40px'
      _hover={{
        boxShadow: 'xl',
        bg: 'rgba(255, 255, 255, 0.95)',
        borderColor: '#0139A0',
        borderRadius: 'full',
      }}
      transition='all 0.2s'
      onClick={toggleLanguage}
    >
      <Text fontSize='xs' fontWeight='bold' color='#014CC4'>
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Text>
    </Box>
  );
}
