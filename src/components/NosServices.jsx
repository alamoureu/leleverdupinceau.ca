/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FiCheckCircle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import appContext from '../AppProvider';

export default function NosServices({ lang }) {
  const navigate = useNavigate();
  const { setCurrentLang } = useContext(appContext);

  useEffect(() => {
    setCurrentLang(lang);
  }, []);

  return (
    <Stack
      position="relative"
      bgPosition="center"
      bgRepeat="no-repeat"
      display="flex"
      alignItems="center"
      px={{ base: '0px', md: '100px' }}
    >
      <Box textAlign="center" my={4} px={{ base: 4, md: 0 }}>
        <Heading
          as="h2"
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight="bold"
          color="rgba(1, 42, 104, 1)"
          mb={2}
          position="relative"
          display="inline-block"
          _after={{
            content: '""',
            position: 'absolute',
            width: '60%',
            height: '3px',
            backgroundColor: 'blue.500',
            bottom: '-4px',
            left: '20%',
          }}
        >
          {lang === 'fr' ? 'Nos Services' : 'Our Services'}
        </Heading>

        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" mt={2}>
          {lang === 'fr'
            ? 'Découvrez nos offres complètes pour répondre à tous vos besoins en peinture.'
            : 'Discover our complete range of offers to meet all your painting needs.'}
        </Text>
      </Box>
      <Flex direction="column" align="center" p={4}>
        <Box align="center">
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} mb={6}>
            <Center>
              <Box
                position="relative"
                borderRadius="2xl"
                boxShadow="xl"
                overflow="hidden"
                w={{ base: '95%', md: '350px' }}
                h={{ base: '300px', md: '400px' }}
                onClick={() => navigate('/services/peinture-interieure')}
              >
                <Image
                  src={
                    'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/service1.jpg'
                  }
                  alt={
                    lang === 'fr' ? 'Peinture intérieure' : 'Interior Painting'
                  }
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))"
                  color="white"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  textAlign="left"
                  borderRadius="2xl"
                >
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="extrabold"
                    mb={4}
                    lineHeight="1.2"
                    textAlign="left"
                  >
                    {lang === 'fr'
                      ? 'Peinture intérieure'
                      : 'Interior Painting'}
                  </Text>
                  <List spacing={2} fontSize="lg" textAlign="left" w="100%">
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Peinture' : 'Painting'}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Plâtre' : 'Plaster'}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Calfeutrage' : 'Caulking'}
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Center>
            <Center>
              <Box
                position="relative"
                borderRadius="2xl"
                boxShadow="xl"
                overflow="hidden"
                w={{ base: '95%', md: '500px' }}
                h="400px"
                onClick={() => navigate('/services/peinture-exterieure')}
              >
                <Image
                  src={
                    'https://leleverdupinceau-file-system.s3.us-east-2.amazonaws.com/service2.jpg'
                  }
                  alt={
                    lang === 'fr' ? 'Peinture extérieure' : 'Exterior Painting'
                  }
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  w="100%"
                  h="100%"
                  bg="linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7))"
                  color="white"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  textAlign="left"
                  borderRadius="2xl"
                >
                  <Text
                    fontSize={{ base: '2xl', md: '3xl' }}
                    fontWeight="extrabold"
                    mb={4}
                    lineHeight="1.2"
                    textAlign="left"
                  >
                    {lang === 'fr'
                      ? 'Peinture et Teinture extérieure'
                      : 'Exterior Painting and Staining'}
                  </Text>
                  <List spacing={2} fontSize="lg" textAlign="left" w="100%">
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Corniche' : 'Eaves'}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Porte & fenêtre' : 'Doors & Windows'}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Balcon' : 'Balcony'}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Patio' : 'Patio'}
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                      <ListIcon
                        as={FiCheckCircle}
                        color="rgba(1, 42, 104, 1)"
                        mr={2}
                      />
                      {lang === 'fr' ? 'Fer forgé' : 'Wrought Iron'}
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Center>
          </Flex>
        </Box>
      </Flex>
    </Stack>
  );
}
