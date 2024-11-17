import { Divider, Stack, Text, Icon, Image } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';
import { FiChevronDown, FiEdit, FiLock, FiPlusSquare } from 'react-icons/fi';
import { BiChat, BiPaperPlane } from 'react-icons/bi';
import { CgDetailsMore } from 'react-icons/cg';

export const SideBar = (props) => {
  return (
    <Stack role="complementary" h="100%" width="full" py="2">
      <Stack
        direction="row"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        px="4"
      >
        <Text fontSize="xl" fontWeight="bold" pl="2">
          DAZZM
        </Text>
        <Stack direction="row" gap="4">
          <Icon as={CgDetailsMore} />
          <Icon as={FiEdit} />
        </Stack>
      </Stack>
      <Divider w="100%" borderColor="gray.400" />
      <Stack p="2">
        <Stack pb="3">
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="2"
            py="0.5"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={BiChat} fontSize="md" />
            <Text fontSize="sm">Fil de discussion</Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="2"
            py="0.5"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={BiPaperPlane} fontSize="md" />
            <Text fontSize="sm">Brouillon et envoy...</Text>
          </Stack>
        </Stack>

        <Stack>
          <Stack direction="row" alignItems="center" gap="2" px="2">
            <Icon as={FiChevronDown} fontSize="md" />
            <Text fontSize="sm" fontWeight="semibold">
              Canaux
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm" fontWeight="bold">
              dev
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm" fontWeight="bold">
              dev-itsm
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm" fontWeight="bold">
              general
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FiLock} fontSize="md" />
            <Text fontSize="sm" fontWeight="bold">
              itsm
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm">marketing</Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm">marketing</Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FiLock} fontSize="md" />
            <Text fontSize="sm">octopus-2024</Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm">operations</Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm" fontWeight="bold">
              random
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm">service</Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            borderRadius="md"
            py="0.5"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FaHashtag} fontSize="md" />
            <Text fontSize="sm" fontWeight="bold">
              support
            </Text>
          </Stack>
          <Stack
            direction="row"
            gap="2"
            alignItems="center"
            px="5"
            py="1"
            borderRadius="md"
            cursor="pointer"
            _hover={{ bg: '#658286' }}
          >
            <Icon as={FiPlusSquare} fontSize="md" />
            <Text fontSize="sm">Ajouteur des canaux</Text>
          </Stack>
          <Stack direction="row" alignItems="center" gap="2" px="2">
            <Icon as={FiChevronDown} fontSize="md" />
            <Text fontSize="sm" fontWeight="semibold">
              Messages directs
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center" gap="2" px="2">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              h="22px"
              bg="white"
              borderRadius="md"
              p="0.2"
              fontSize="md"
            />
            <Text fontSize="sm" fontWeight="semibold">
              Antoine Lamoureux
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center" gap="2" px="2">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              h="22px"
              bg="white"
              borderRadius="md"
              p="0.2"
              fontSize="md"
            />
            <Text fontSize="sm" fontWeight="semibold">
              Robert Dinero
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center" gap="2" px="2">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              h="22px"
              bg="white"
              borderRadius="md"
              p="0.2"
              fontSize="md"
            />
            <Text fontSize="sm" fontWeight="semibold">
              Jean Luc
            </Text>
          </Stack>
          <Stack direction="row" alignItems="center" gap="2" px="2">
            <Image
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
              h="22px"
              bg="white"
              borderRadius="md"
              p="0.2"
              fontSize="md"
            />
            <Text fontSize="sm" fontWeight="normal">
              Luc Archambourd
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
