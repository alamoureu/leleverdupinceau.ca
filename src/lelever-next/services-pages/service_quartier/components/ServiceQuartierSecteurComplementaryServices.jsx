import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Link,
  Text,
  HStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../../../AppProvider';

export default function ServiceQuartierSecteurComplementaryServices({
  title,
  services,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? 'Services complémentaires'
    : 'Complementary services';

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
              {title || defaultTitle}
            </Heading>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  p={6}
                  bg='white'
                  borderRadius='xl'
                  border='1px solid'
                  borderColor='gray.200'
                  _hover={{
                    borderColor: '#014CC4',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition='all 0.2s'
                  h='100%'
                  display='flex'
                  flexDirection='column'
                >
                  <Stack spacing={3} flex={1}>
                    <Text fontWeight='600' color='gray.800' fontSize='lg'>
                      {service.title}
                    </Text>
                    <HStack spacing={2} color='#014CC4' mt='auto'>
                      <Text fontSize='sm' fontWeight='medium'>
                        {isFr ? 'Voir' : 'View'}
                      </Text>
                      <ArrowForwardIcon boxSize={3} />
                    </HStack>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

