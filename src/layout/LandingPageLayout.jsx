import React from 'react';
import {
  Flex,
  Stack,
  Image,
  ButtonGroup,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { Outlet } from 'react-router-dom';
import Header from './LandingPageHeader';

export default function LandingPageLayout({ lang }) {
  return (
    <Flex
      direction="column"
      overflow="hidden"
      h="100%"
      px="0"
      spacing="0"
      flex="1"
      maxW="1920px"
      margin="0 auto"
    >
      <Header />
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
        spacing={{ base: '3', md: '3' }}
        bg="rgba(1, 42, 104, 1)"
        py={{ base: '12', md: '10' }}
        px={{ base: '5%', md: '30px' }}
      >
        <Stack justify="space-between" direction="row" align="center">
          <Image
            loading="lazy"
            h="60px"
            src="https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/whitelogo.png"
          />
          <ButtonGroup variant="tertiary.accent">
            <IconButton
              as="a"
              fontSize={25}
              textColor="white"
              href="https://www.instagram.com/leleverdupinceau/"
              aria-label="Instagram"
              icon={<FaInstagram />}
            />
            <IconButton
              as="a"
              href="#"
              fontSize={25}
              textColor="white"
              aria-label="Facebook"
              icon={<FaFacebook />}
            />
            <IconButton
              as="a"
              href="mailto:leleverdupinceau@gmail.com"
              fontSize={25}
              textColor="white"
              aria-label="Email"
              icon={<FaEnvelope />}
            />
            <IconButton
              as="a"
              href="tel:+14388680772"
              fontSize={25}
              textColor="white"
              aria-label="Phone"
              icon={<FaPhone />}
            />
          </ButtonGroup>
        </Stack>
        <Stack spacing="0px" fontSize="md" textColor="white">
          <Text _hover={{ textDecor: 'underline', cursor: 'pointer' }}>
            {lang === 'fr'
              ? 'Peintre en bâtiment Montréal'
              : 'Building Painter in Montreal'}
          </Text>
          <Text _hover={{ textDecor: 'underline', cursor: 'pointer' }}>
            {lang === 'fr'
              ? 'Peintre en bâtiment rive sud'
              : 'Building Painter South Shore'}
          </Text>
          <Text _hover={{ textDecor: 'underline', cursor: 'pointer' }}>
            {lang === 'fr'
              ? 'Peintre en bâtiment rive nord'
              : 'Building Painter North Shore'}
          </Text>
        </Stack>
        <Text fontSize="sm" textColor="white" pb="30px">
          &copy; {new Date().getFullYear()} Le Lever Du Pinceau,{' '}
          {lang === 'fr' ? 'Tous les droits réservés' : 'All Rights Reserved'}
        </Text>
      </Stack>
    </Flex>
  );
}
