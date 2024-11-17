import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import FreeQuotationForm from './FreeQuotationForm';
import SoumissionForm from './landing-page/SoumissionForm';

export default function FreeQuotationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex
      pt={{ base: '150px', md: '50px' }}
      pb={{ base: '80px', md: '50px' }}
      direction="column"
      w="100%"
      h="100%"
      display="flex"
      spacing="0px"
      gap="0"
      bg="gray.50"
    >
      <SoumissionForm />
    </Flex>
  );
}
