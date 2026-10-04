import React from 'react';
import { Container, Text } from '@chakra-ui/react';

/** Texte d'intro placé juste sous TrustBanner : le héros ne garde qu'une phrase courte. */
export default function PageIntro({ children }) {
  return (
    <Container maxW="840px" px={{ base: 4, md: 6 }} pb={{ base: 2, md: 4 }}>
      <Text textStyle="bodyLarge" color="gray.700" lineHeight="1.7" textAlign="center">
        {children}
      </Text>
    </Container>
  );
}
