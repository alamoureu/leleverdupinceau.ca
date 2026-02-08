import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import ServiceCard from './ServiceCard';
import peintureResidentielleImg from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import peintureCommercialeImg from '../images/1-page-principale/service hub/Peinture commerciale/IMG_6766.PNG';
import peintureInterieurImg from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';

const serviceImages = [
  peintureResidentielleImg,
  peintureCommercialeImg,
  peintureInterieurImg,
];

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      image: serviceImages[0],
      title: t.serviceResidential,
      subtitle: t.serviceResidentialDesc,
      link: '/services/peinture-residentielle',
    },
    {
      image: serviceImages[1],
      title: t.serviceCommercial,
      subtitle: t.serviceCommercialDesc,
      link: '/services/peinture-commerciale',
    },
    {
      image: serviceImages[2],
      title: t.serviceInterior,
      subtitle: t.serviceInteriorDesc,
      link: '/services/peinture-interieure',
    },
  ];

  return (
    <Box
      bg="white"
      position="relative"
      pt={{ base: 16, sm: 20, md: 28, lg: 36, xl: 52, '2xl': 60 }}
      pb={{ base: 8, md: 12, lg: 16 }}
    >
      <Container
        maxW="1440px"
        px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack
          spacing={{ base: 4, md: 6 }}
          align="center"
          w="100%"
          maxW={{
            base: '280px',
            sm: '300px',
            md: '100%',
          }}
          mx="auto"
        >
          <Stack
            spacing={{ base: 2, md: 3 }}
            textAlign="center"
            maxW={{
              base: '100%',
              md: '100%',
              lg: '1100px',
              xl: '1200px',
              '2xl': '1280px',
            }}
            w="100%"
          >
            <Heading
              as="h2"
              size="section"
              color="gray.800"
              whiteSpace={{ base: 'normal', md: 'nowrap' }}
            >
              {t.servicesTitle}
            </Heading>
            <Text
              textStyle="bodyLarge"
              color="gray.600"
            >
              {t.servicesSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 4, md: 6 }}
            w="100%"
            maxW={{
              base: '280px',
              sm: '300px',
              md: '1100px',
              lg: '1200px',
              xl: '1280px',
              '2xl': '1320px',
            }}
          >
            {services.map((service, index) => (
              <Box
                key={index}
                as={RouterLink}
                to={service.link}
                _hover={{ textDecoration: 'none' }}
                w="100%"
                display="block"
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  subtitle={service.subtitle}
                  noHoverBorder
                />
              </Box>
            ))}
          </SimpleGrid>

          <Stack
            spacing={2}
            align="center"
            pt={{ base: 4, md: 6 }}
            w="100%"
          >
            <Button
              as={RouterLink}
              to="/services"
              variant="outline"
              borderColor="brand.500"
              color="brand.500"
              borderRadius="full"
              textStyle="nav"
              px={{ base: 5, md: 7 }}
              py={{ base: 3, md: 4 }}
              rightIcon={<ArrowForwardIcon />}
              _hover={{ bg: 'brand.500', color: 'white' }}
            >
              {t.viewAllServices}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
