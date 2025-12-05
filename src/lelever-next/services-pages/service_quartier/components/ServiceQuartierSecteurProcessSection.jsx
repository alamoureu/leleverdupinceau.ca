import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';

export default function ServiceQuartierSecteurProcessSection({
  title,
  steps,
}) {
  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='gray.50'
      borderRadius='xl'
      mb={{ base: 8, md: 12 }}
    >
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

          <Stack spacing={4}>
            {steps.map((step, index) => (
              <Flex
                key={index}
                align='start'
                gap={4}
                p={5}
                bg='white'
                borderRadius='lg'
                border='1px solid'
                borderColor='gray.200'
                _hover={{
                  borderColor: '#014CC4',
                  boxShadow: 'sm',
                  transform: 'translateX(4px)',
                }}
                transition='all 0.2s ease'
              >
                <Box
                  minW='32px'
                  h='32px'
                  borderRadius='full'
                  bg='#014CC4'
                  color='white'
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                  fontWeight='bold'
                  fontSize='lg'
                  flexShrink={0}
                >
                  {index + 1}
                </Box>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.700'
                  lineHeight='1.7'
                  fontWeight='500'
                  textAlign='left'
                >
                  {step}
                </Text>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

