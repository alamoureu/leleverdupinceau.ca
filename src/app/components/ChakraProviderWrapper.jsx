'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/theme';
import { AppProvider } from '@/AppProvider';

export default function ChakraProviderWrapper({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        {children}
      </AppProvider>
    </ChakraProvider>
  );
}
