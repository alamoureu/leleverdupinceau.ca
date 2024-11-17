import React from 'react';
import { Center, Stack, Text } from '@chakra-ui/react';

export default function AddValueHero({ lang }) {
  return (
    <Stack pt={{ base: '15px', md: '75px' }}>
      <Center>
        <Stack spacing="20px" position="relative">
          <Text
            textAlign="center"
            fontSize={{ base: 'md', md: '2xl' }}
            fontWeight="semibold"
          >
            {lang === 'fr'
              ? 'Augmentez la valeur de votre maison'
              : 'Increase Your Home Value'}
            <br />
            <span style={{ fontWeight: 'normal' }}>
              {lang === 'fr' ? 'sans effort de votre part' : 'Effortlessly'}
            </span>
          </Text>
        </Stack>
      </Center>
    </Stack>
  );
}
