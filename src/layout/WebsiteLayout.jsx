import React, { useContext } from 'react';
import {
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  Flex,
  Image,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import NavBar from './navigation/WebsiteNavBar';
import FloatingLanguageToggle from '../components/FloatingLanguageToggle';
import appContext from '../AppProvider';
export default function WebsiteLayout() {
  const { currentLang, setCurrentLang } = useContext(appContext);
  return (
    <Flex
      direction="column"
      overflow="hidden"
      h="100%"
      px="0"
      spacing="0"
      flex="1"
    >
      <Stack pos="fixed" gap="0" w="100%" top="0" bg="black" zIndex={3}>
        <NavBar />
      </Stack>

      <Stack
        gap="0"
        overflowY="auto"
        h="100%"
        css={{
          '&::-webkit-scrollbar': {
            width: '2px',
          },
          '&::-webkit-scrollbar-track': {
            width: '2px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'gray',
          },
        }}
      >
        <Outlet />
      </Stack>

      <Stack
        position="static"
        bottom="0"
        w="100%"
        spacing={{ base: '4', md: '5' }}
        bg="#004BA8"
        py={{ base: '12', md: '10' }}
        px={{ base: '10%', md: '30px' }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <Image
            src={
              'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png'
            }
            h="60px"
          />
          <ButtonGroup variant="tertiary.accent">
            <IconButton
              as="a"
              textColor="white"
              href="https://www.instagram.com/leleverdupinceau/"
              aria-label="Instagram"
              fontSize="20px"
              icon={<FaInstagram />}
            />
            <IconButton
              as="a"
              href="#"
              textColor="white"
              fontSize="20px"
              aria-label="Facebook"
              icon={<FaFacebook />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" textColor="white" pb="30px">
          &copy; {new Date().getFullYear()} Le Lever Du Pinceau, Tout les droits
          réservés
        </Text>
      </Stack>
      <FloatingLanguageToggle
        currentLang={currentLang}
        onToggleLang={setCurrentLang}
      />
    </Flex>
  );
}
