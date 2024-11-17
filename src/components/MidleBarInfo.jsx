import React from 'react';
import { Icon, Stack, Flex, Text } from '@chakra-ui/react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

export default function MiddleBarInfo() {
  return (
    <Flex
      display="flex"
      justifyContent="flex-end"
      w="100%"
      bg="gray.200"
      p="5px"
      py="50px"
      zIndex="tooltip"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        w="100%"
      >
        <Icon
          as={AiOutlineMail}
          color="black"
          fontSize="30px"
          onClick={() =>
            (window.location = 'mailto:leleverdupinceau@gmail.com')
          }
        />
        <Stack direction="row">
          <Icon as={AiOutlinePhone} color="black" fontSize="30px" />
          <a href="tel:4388680772">
            <Text fontSize="20px" color="black" fontWeight="semibold">
              (438) 868-0772
            </Text>
          </a>
        </Stack>
      </Stack>
    </Flex>
  );
}
