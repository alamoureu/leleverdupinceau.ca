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
import appContext from '../../../AppProvider';

export default function ServiceSubServicesSection({
  title,
  subtitle,
  subServices,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr
    ? 'Sous-services disponibles'
    : 'Available sub-services';

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
            {subtitle && (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
              >
                {subtitle}
              </Text>
            )}
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 8 }}
            maxW='800px'
          >
            {subServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  p={{ base: 6, md: 8 }}
                  bg='white'
                  borderRadius='xl'
                  border='1px solid'
                  borderColor='gray.200'
                  h='100%'
                  display='flex'
                  flexDirection='column'
                  _hover={{
                    borderColor: '#014CC4',
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                  }}
                  transition='all 0.2s'
                >
                  <Stack spacing={4} flex={1}>
                    <Heading
                      as='h3'
                      fontSize='xl'
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {service.title}
                    </Heading>
                    {service.description && (
                      <Text color='gray.600' fontSize='md' lineHeight='1.6'>
                        {service.description}
                      </Text>
                    )}
                    <HStack spacing={2} color='#014CC4' mt='auto'>
                      <Text fontSize='sm' fontWeight='medium'>
                        {service.linkText ||
                          (isFr ? 'Voir la page' : 'View page')}
                      </Text>
                      <ArrowForwardIcon boxSize={4} />
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
