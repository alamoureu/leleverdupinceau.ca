import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function ServiceQuartierSecteurRoomsSection({
  title,
  rooms,
  expertise,
}) {
  return (
    <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='left'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {title}
            </Heading>
          </Stack>

          <Stack spacing={6}>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              lineHeight='1.7'
              textAlign='left'
            >
              Nous peignons :
            </Text>

            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3 }}
              spacing={{ base: 3, md: 4 }}
            >
              {rooms.map((room, index) => (
                <Flex
                  key={index}
                  align='start'
                  gap={3}
                  p={3}
                  bg='white'
                  borderRadius='lg'
                  border='1px solid'
                  borderColor='gray.200'
                  _hover={{
                    borderColor: '#014CC4',
                    boxShadow: 'sm',
                  }}
                  transition='all 0.2s ease'
                >
                  <Icon
                    as={FontAwesomeIcon}
                    icon={faCheckCircle}
                    color='#014CC4'
                    boxSize={4}
                    mt={0.5}
                    flexShrink={0}
                  />
                  <Text
                    fontSize='md'
                    color='gray.700'
                    lineHeight='1.6'
                    fontWeight='500'
                    textAlign='left'
                  >
                    {room}
                  </Text>
                </Flex>
              ))}
            </SimpleGrid>

            {expertise && expertise.length > 0 && (
              <Box mt={4}>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.700'
                  fontWeight='600'
                  mb={3}
                  textAlign='left'
                >
                  Expertise particulière pour :
                </Text>
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacing={3}
                >
                  {expertise.map((item, index) => (
                    <Flex
                      key={index}
                      align='start'
                      gap={3}
                      p={3}
                      bg='gray.50'
                      borderRadius='lg'
                      border='1px solid'
                      borderColor='gray.200'
                    >
                      <Icon
                        as={FontAwesomeIcon}
                        icon={faCheckCircle}
                        color='#014CC4'
                        boxSize={4}
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Text
                        fontSize='sm'
                        color='gray.600'
                        lineHeight='1.6'
                        textAlign='left'
                      >
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </SimpleGrid>
              </Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

