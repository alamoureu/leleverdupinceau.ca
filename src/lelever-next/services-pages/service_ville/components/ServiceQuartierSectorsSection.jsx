import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Link,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import appContext from '../../../../AppProvider';

export default function ServiceQuartierSectorsSection({
  title,
  sectors,
  serviceSlug,
  citySlug,
}) {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const defaultTitle = isFr ? 'Secteurs desservis' : 'Served sectors';

  // IMPORTANT: Only "peinture intérieure" has neighborhood pages (service × quartier)
  // Other services (commercial, extérieur, industriel, résidentiel) do NOT have neighborhood pages
  // Therefore, only make sectors clickable for peinture intérieure
  const isInteriorPainting =
    serviceSlug === 'new-peinture-interieure' ||
    serviceSlug === 'peinture-interieure';

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

          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4 }}
            spacing={{ base: 4, md: 6 }}
            maxW='1000px'
            mx='auto'
          >
            {sectors.map((sector, index) => {
              const sectorName =
                typeof sector.name === 'object'
                  ? sector.name[isFr ? 'fr' : 'en']
                  : sector.name;

              const sectorLink = isInteriorPainting
                ? `/services/${serviceSlug}/${citySlug}/${sector.slug}`
                : null;

              const SectorBox = (
                <Box
                  p={6}
                  bg='white'
                  borderRadius='lg'
                  textAlign='center'
                  border='1px solid'
                  borderColor='gray.200'
                  h='100%'
                  minH={{ base: '100px', md: '120px' }}
                  display='flex'
                  flexDirection='column'
                  justifyContent='center'
                  alignItems='center'
                  {...(isInteriorPainting && {
                    _hover: {
                      borderColor: '#014CC4',
                      transform: 'translateY(-2px)',
                      boxShadow: 'md',
                    },
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  })}
                >
                  <Text
                    fontWeight='600'
                    color={isInteriorPainting ? '#014CC4' : 'gray.800'}
                    fontSize={{ base: 'sm', md: 'md' }}
                    lineHeight='1.4'
                    noOfLines={2}
                  >
                    {sectorName}
                  </Text>
                </Box>
              );

              if (isInteriorPainting && sectorLink) {
                return (
                  <Link
                    key={index}
                    as={RouterLink}
                    to={sectorLink}
                    _hover={{ textDecoration: 'none' }}
                  >
                    {SectorBox}
                  </Link>
                );
              }

              return <Box key={index}>{SectorBox}</Box>;
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}
