import React from 'react';
import { HStack, Image, Spacer, Text } from '@chakra-ui/react';

export default function LandingPageHeader() {
  return (
    <HStack gap="0" w="100%" top="0" bg="white" px="25px" maxH="90px">
      <Image
        src={
          'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/logo-pinceau.png'
        }
        h="130px"
        w="100px"
        objectFit="cover"
      />
      <Spacer />
      <a href="tel:4388680772">
        <Text
          fontWeight="semibold"
          fontSize="lg"
          color="#0056D2"
          _hover={{ cursor: 'pointer', textDecor: 'underline' }}
        >
          (438) 868-0772
        </Text>
      </a>
    </HStack>
  );
}
