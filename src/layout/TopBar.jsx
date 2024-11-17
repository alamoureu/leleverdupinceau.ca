import React from 'react';
import {
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Flex,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FiArrowLeft, FiArrowRight, FiClock, FiSearch } from 'react-icons/fi';

export default function TopBar() {
  return (
    <Flex w="100%" h="75px" pl="25px" pr="10px">
      <Stack
        justify="space-between"
        alignItems="center"
        direction="row"
        w="100%"
      >
        <Stack direction="row" alignItems="center" gap="4">
          <Logo />
          <Stack w="100%" direction="row" alignItems="center" gap="4">
            <Stack direction="row" gap="6">
              <Icon as={FiArrowLeft} />
              <Icon as={FiArrowRight} />
            </Stack>
            <Icon as={FiClock} />
            <InputGroup>
              <InputRightElement>
                <Icon as={FiSearch} mb="3" />
              </InputRightElement>
              <Input
                borderRadius="md"
                borderColor="transparent"
                _placeholder={{ textColor: 'black' }}
                type="text"
                w="1000px"
                h="27px"
                bg="rgba(255, 255, 255, 0.2)"
                size="sm"
                placeholder="Rechercer dans octopus-itsm"
              />
            </InputGroup>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

function Logo() {
  return <Image src="./logo_jpeg.jpg" />;
}
