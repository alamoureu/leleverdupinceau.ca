import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Link,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../../AppProvider';

export default function ServiceCitiesSection({
  serviceName,
  serviceSlug,
  title,
  subtitle,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const cities = [
    { name: 'Montréal', slug: 'montreal' },
    { name: 'Laval', slug: 'laval' },
    { name: 'Longueuil', slug: 'longueuil' },
    { name: 'Brossard', slug: 'brossard' },
  ];

  const defaultTitle = isFr
    ? 'Disponible dans tout le Grand Montréal'
    : 'Available throughout Greater Montreal';

  return (
    <Box py={{ base: 16, md: 20 }} mb={{ base: 8, md: 12 }} bg='gray.50'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={12}>
          <Stack spacing={4} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.900'
              letterSpacing='-0.02em'
            >
              {title || defaultTitle}
            </Heading>
            {subtitle && (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                maxW='800px'
                mx='auto'
                lineHeight='1.7'
              >
                {subtitle}
              </Text>
            )}
          </Stack>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 4 }}
            spacing={{ base: 4, md: 6, lg: 8 }}
            w='100%'
            templateColumns={{
              base: '1fr',
              sm: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
          >
            {cities.map((city, index) => (
              <Link
                key={index}
                as={RouterLink}
                to={`/services/${serviceSlug}/${city.slug}`}
                _hover={{ textDecoration: 'none' }}
                display='block'
                w='100%'
              >
                <Box
                  p={{ base: 6, md: 7, lg: 8 }}
                  bg='white'
                  borderRadius='xl'
                  border='1px solid'
                  borderColor='gray.200'
                  h='100%'
                  minH={{ base: 'auto', md: '200px' }}
                  display='flex'
                  flexDirection='column'
                  position='relative'
                  overflow='visible'
                  transition='all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                  w='100%'
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    bg: 'linear-gradient(90deg, #014CC4 0%, #0066FF 100%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                  }}
                  _hover={{
                    borderColor: '#014CC4',
                    transform: 'translateY(-4px)',
                    boxShadow: 'xl',
                    _before: {
                      opacity: 1,
                    },
                    '.arrow-icon': {
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <VStack
                    spacing={5}
                    align='stretch'
                    flex={1}
                    justify='space-between'
                  >
                    <VStack spacing={3} align='flex-start' flex={1} w='100%'>
                      <Text
                        fontWeight='800'
                        color='gray.900'
                        fontSize={{ base: 'xl', md: '2xl' }}
                        letterSpacing='-0.03em'
                        lineHeight='1.3'
                        w='100%'
                      >
                        {city.name}
                      </Text>
                      {serviceName && (
                        <Text
                          fontSize={{ base: 'sm', md: 'md' }}
                          color='gray.500'
                          fontWeight='500'
                          lineHeight='1.6'
                          w='100%'
                          wordBreak='break-word'
                        >
                          {serviceName}
                        </Text>
                      )}
                    </VStack>

                    <HStack
                      spacing={2}
                      color='#014CC4'
                      mt='auto'
                      pt={5}
                      borderTop='1px solid'
                      borderColor='gray.100'
                    >
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        fontWeight='600'
                        letterSpacing='0.01em'
                        transition='color 0.3s ease'
                      >
                        {isFr ? 'Voir les services' : 'View services'}
                      </Text>
                      <Box
                        as={ArrowForwardIcon}
                        boxSize={4}
                        transition='transform 0.3s ease'
                        className='arrow-icon'
                      />
                    </HStack>
                  </VStack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
