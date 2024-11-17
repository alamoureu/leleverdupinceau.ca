import React, { useContext, useEffect } from 'react';
import { Flex, Stack, Text } from '@chakra-ui/react';
import SoumissionForm from '../landing-page/SoumissionForm';
import appContext from '../AppProvider';

export default function SoumissionPage() {
  const { currentLang } = useContext(appContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Flex
      pt={{ base: '150px', md: '50px' }}
      pb={{ base: '80px', md: '50px' }}
      direction="column"
      w="100%"
      display="flex"
      spacing="0px"
      gap="0"
      bg="white"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        w="100%"
        alignItems="center"
        id="soumission"
        px={{ base: '20px', md: '30px' }}
      >
        <Text
          fontSize={{ base: '25px', md: '40px' }}
          fontWeight="bold"
          borderRadius="md"
          color="#0056D2"
          pb="4"
        >
          {currentLang === 'fr'
            ? 'OBTENIR UNE SOUMISSION GRATUITE'
            : 'GET A FREE QUOTE'}
        </Text>

        <Stack w={{ base: '100%', md: '400px' }}>
          <SoumissionForm />
        </Stack>
      </Stack>
    </Flex>
  );
}
