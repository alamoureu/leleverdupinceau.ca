import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Image,
  Button,
  Link,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import peintureResidentielleImg from '../images/peinture_residentielle.PNG';
import peintureCommercialeImg from '../images/peinture_commercial.jpg';
import peintureInterieurImg from '../images/peinture_interieur.jpg';

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      image: peintureResidentielleImg,
      title: t.serviceResidential,
      description: t.serviceResidentialDesc,
      link: '/services/peinture-residentielle',
    },
    {
      image: peintureCommercialeImg,
      title: t.serviceCommercial,
      description: t.serviceCommercialDesc,
      link: '/services/peinture-commerciale',
    },
    {
      image: peintureInterieurImg,
      title: t.serviceInterior,
      description: t.serviceInteriorDesc,
      link: '/services/peinture-interieure',
    },
  ];
  return (
    <Box
      bg='white'
      position='relative'
      pt={{ base: '90px', sm: '90px', md: '100px', lg: '135px', xl: '175px' }}
      pb={{ base: 8, md: 12, lg: 16 }}
    >
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={{ base: 4, md: 6, lg: 8 }} align='center'>
          <Stack
            spacing={1}
            textAlign='center'
            maxW={{ base: '100%', md: '800px' }}
          >
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
            >
              {t.servicesTitle}
            </Heading>
            <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
              {t.servicesSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 4, md: 5, lg: 6 }}
            w='100%'
            justifyItems={{ base: 'center', md: 'stretch' }}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                as={RouterLink}
                to={service.link}
                _hover={{ textDecoration: 'none' }}
                w={{ base: '280px', md: '100%' }}
                maxW={{ base: '280px', md: 'none' }}
                mx={{ base: 'auto', md: 0 }}
              >
                <Box
                  bg='white'
                  borderRadius='xl'
                  overflow='hidden'
                  border='1px solid'
                  borderColor='gray.200'
                  textAlign='center'
                  cursor='pointer'
                  w='100%'
                  h='100%'
                  transition='transform 0.2s, box-shadow 0.2s'
                  _hover={{
                    transform: 'translateY(-5px)',
                    boxShadow: 'xl',
                    borderColor: '#014CC4',
                  }}
                >
                  <Box
                    position='relative'
                    overflow='hidden'
                    h={{ base: '140px', md: '180px', lg: '240px' }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      w='100%'
                      h='100%'
                      objectFit='cover'
                      transition='transform 0.3s ease'
                      _hover={{ transform: 'scale(1.05)' }}
                    />
                  </Box>
                  <Stack
                    p={{ base: 3, md: 5, lg: 6 }}
                    spacing={{ base: 1.5, md: 2, lg: 3 }}
                  >
                    <Heading
                      as='h3'
                      fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
                      fontWeight='bold'
                      color='gray.800'
                      lineHeight='1.2'
                    >
                      {service.title}
                    </Heading>
                    <Text
                      fontSize={{ base: 'xs', md: 'sm', lg: 'sm' }}
                      color='gray.600'
                      lineHeight='1.5'
                    >
                      {service.description}
                    </Text>
                  </Stack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          <Button
            as={RouterLink}
            to='/services'
            variant='outline'
            borderColor='#014CC4'
            color='#014CC4'
            borderRadius='full'
            fontSize={{ base: 'sm', md: 'md' }}
            px={{ base: 5, md: 7 }}
            py={{ base: 3, md: 4 }}
            rightIcon={<ArrowForwardIcon />}
            _hover={{ bg: '#014CC4', color: 'white' }}
          >
            {t.viewAllServices}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
