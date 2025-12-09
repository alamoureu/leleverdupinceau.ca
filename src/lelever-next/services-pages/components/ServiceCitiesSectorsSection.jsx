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
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../../AppProvider';

const defaultCities = [
  { name: 'Montréal', slug: 'montreal' },
  { name: 'Laval', slug: 'laval' },
  { name: 'Longueuil', slug: 'longueuil' },
  { name: 'Brossard', slug: 'brossard' },
];

export default function ServiceCitiesSectorsSection({
  title,
  serviceName,
  serviceSlug,
  cities = defaultCities,
  showViewLink = true,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='gray.50'
      borderRadius='xl'
      mb={{ base: 8, md: 12 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center'>
          <Stack spacing={{ base: 3, md: 4 }} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
              lineHeight='1.3'
              letterSpacing='-0.02em'
            >
              {title}
            </Heading>
          </Stack>

          <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={6} w='100%'>
            {cities.map((city, index) => {
              const to = city.href || `/services/${serviceSlug}/${city.slug}`;
              return (
                <Link
                  key={index}
                  as={RouterLink}
                  to={to}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    p={8}
                    bg='white'
                    borderRadius='2xl'
                    textAlign='center'
                    border='1px solid'
                    borderColor='gray.200'
                    cursor='pointer'
                    h='100%'
                    minH={{ base: '180px', md: '200px' }}
                    display='flex'
                    flexDirection='column'
                    _hover={{
                      borderColor: '#014CC4',
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    }}
                    transition='all 0.2s'
                  >
                    <Stack
                      spacing={4}
                      align='center'
                      flex={1}
                      justify='space-between'
                      w='100%'
                    >
                      <Icon
                        as={FontAwesomeIcon}
                        icon={faMapMarkerAlt}
                        boxSize={6}
                        color='#014CC4'
                        flexShrink={0}
                      />
                      <Text
                        fontWeight='700'
                        color='gray.800'
                        fontSize='xl'
                        letterSpacing='-0.02em'
                        lineHeight='1.4'
                        minH={{ base: '48px', md: '56px' }}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                        textAlign='center'
                        w='100%'
                      >
                        {serviceName
                          ? `${serviceName} ${city.name}`
                          : city.name}
                      </Text>
                      {showViewLink && (
                        <HStack
                          spacing={2}
                          color='#014CC4'
                          justify='center'
                          flexShrink={0}
                        >
                          <Text fontSize='sm' fontWeight='medium'>
                            {isFr ? 'Voir' : 'View'}
                          </Text>
                          <ArrowForwardIcon boxSize={4} />
                        </HStack>
                      )}
                    </Stack>
                  </Box>
                </Link>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
