import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function FloatingLanguageToggle({ currentLang, onToggleLang }) {
  return (
    <Box
      position="fixed"
      bottom={{ base: '7px', md: '7px' }}
      right={{ base: '7px', md: '7px' }}
      bg="gray.800"
      p={3}
      borderRadius="md"
      boxShadow="lg"
      zIndex="1000"
      cursor="pointer"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      _hover={{ boxShadow: 'xl' }}
      onClick={() => onToggleLang(currentLang === 'fr' ? 'en' : 'fr')}
    >
      <Text fontSize="xs" fontWeight="bold" color="white">
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </Text>
    </Box>
  );
}
