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
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../../AppProvider';
import {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../../home-page/SectorsSection';

const defaultCities = [
  { name: 'Montréal', slug: 'montreal', image: montrealSecteur },
  { name: 'Laval', slug: 'laval', image: lavalSecteur },
  { name: 'Longueuil', slug: 'longueuil', image: longueuilSecteur },
  { name: 'Brossard', slug: 'brossard', image: brossardSecteur },
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

  // Merge default images if not provided in cities prop
  const citiesWithImages = cities.map((city) => {
    const defaultCity = defaultCities.find((c) => c.slug === city.slug);
    return {
      ...city,
      image: city.image || (defaultCity ? defaultCity.image : montrealSecteur),
    };
  });

  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='#022A68'
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
              color='white'
              lineHeight='1.3'
              letterSpacing='-0.02em'
            >
              {title}
            </Heading>
          </Stack>

          <SimpleGrid columns={{ base: 2, sm: 4 }} spacing={6} w='100%'>
            {citiesWithImages.map((city, index) => {
              const to = city.href || `/services/${serviceSlug}/${city.slug}`;
              return (
                <Link
                  key={index}
                  as={RouterLink}
                  to={to}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    position='relative'
                    borderRadius='2xl'
                    overflow='hidden'
                    border='1px solid'
                    borderColor='gray.200'
                    cursor='pointer'
                    transition='all 0.2s'
                    minH={{ base: '180px', md: '200px' }}
                    h='100%'
                    w='100%'
                    _hover={{
                      borderColor: '#014CC4',
                      boxShadow: 'md',
                      transform: 'translateY(-2px)',
                    }}
                  >
                    <Image
                      src={city.image}
                      alt={
                        serviceName ? `${serviceName} ${city.name}` : city.name
                      }
                      position='absolute'
                      top={0}
                      left={0}
                      w='100%'
                      h='100%'
                      objectFit='cover'
                      zIndex={0}
                    />
                    {/* Color Overlay Filter */}
                    <Box
                      position='absolute'
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient='linear(to-b, rgba(1, 76, 196, 0.55), rgba(1, 76, 196, 0.15))'
                      zIndex={1}
                    />

                    {/* Content */}
                    <Box
                      position='relative'
                      zIndex={2}
                      p={4}
                      h='100%'
                      display='flex'
                      flexDirection='column'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Stack spacing={3} align='center'>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faMapMarkerAlt}
                          boxSize={6}
                          color='white'
                          filter='drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                        />
                        <Text
                          fontWeight='700'
                          color='white'
                          fontSize={{ base: 'lg', md: 'xl' }}
                          letterSpacing='-0.02em'
                          lineHeight='1.3'
                          textShadow='0 2px 4px rgba(0,0,0,0.3)'
                          textAlign='center'
                        >
                          {serviceName
                            ? `${serviceName} ${city.name}`
                            : city.name}
                        </Text>
                      </Stack>
                    </Box>
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
