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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';

export default function CityServicesSection({ cityName, citySlug, serviceDescriptions }) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const services = [
    {
      key: 'residential',
      name: isFr
        ? `Peinture résidentielle ${cityName}`
        : `Residential painting ${cityName}`,
      link: `/services/peinture-residentielle/${citySlug}`,
      description: serviceDescriptions?.residential,
    },
    {
      key: 'commercial',
      name: isFr
        ? `Peinture commerciale ${cityName}`
        : `Commercial painting ${cityName}`,
      link: `/services/peinture-commerciale/${citySlug}`,
      description: serviceDescriptions?.commercial,
    },
    {
      key: 'interior',
      name: isFr
        ? `Peinture intérieure ${cityName}`
        : `Interior painting ${cityName}`,
      link: `/services/new-peinture-interieure/${citySlug}`,
      description: serviceDescriptions?.interior,
    },
    {
      key: 'exterior',
      name: isFr
        ? `Peinture extérieure ${cityName}`
        : `Exterior painting ${cityName}`,
      link: `/services/new-peinture-exterieure/${citySlug}`,
      description: serviceDescriptions?.exterior,
    },
    {
      key: 'industrial',
      name: isFr
        ? `Peinture industrielle ${cityName}`
        : `Industrial painting ${cityName}`,
      link: `/services/peinture-industrielle/${citySlug}`,
      description: serviceDescriptions?.industrial,
    },
  ];

  return (
    <Box
      py={{ base: 12, md: 16 }}
      bg='gray.50'
      borderRadius='xl'
      mb={{ base: 8, md: 12 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8}>
          <Stack spacing={3} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {isFr
                ? `Services de peinture offerts à ${cityName}`
                : `Painting services offered in ${cityName}`}
            </Heading>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 4, md: 6 }}
            maxW='1000px'
            mx='auto'
          >
            {services.map((service, index) => (
              <Link
                key={index}
                as={RouterLink}
                to={service.link}
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  bg='white'
                  p={{ base: 4, md: 6 }}
                  borderRadius='xl'
                  border='1px solid'
                  borderColor='gray.200'
                  textAlign='center'
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
                  <Stack spacing={2} align='center' flex={1} justify='center'>
                    <Text fontWeight='bold' color='gray.800' fontSize='lg'>
                      {service.name}
                    </Text>
                    {service.description && (
                      <Text fontSize='sm' color='gray.600' mt={1}>
                        {service.description}
                      </Text>
                    )}
                    <HStack spacing={2} color='#014CC4' mt={2}>
                      <Text fontSize='sm' fontWeight='medium'>
                        {isFr ? 'Voir' : 'View'}
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
