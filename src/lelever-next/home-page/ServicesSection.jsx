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
import peintureCommercialeImg from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import peintureInterieureImg from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import peintureExterieureImg from '../images/1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG';
import peintureIndustrielleImg from '../images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG';

const serviceImages = [
  peintureResidentielleImg,
  peintureCommercialeImg,
  peintureIndustrielleImg,
  peintureInterieureImg,
  peintureExterieureImg,
];

export default function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      image: serviceImages[3],
      title: t.serviceInterior,
      subtitle: t.serviceInteriorDesc,
      stripText: t.serviceInteriorStrip,
      link: '/services/peinture-interieure',
    },
    {
      image: serviceImages[4],
      title: t.serviceExterior,
      subtitle: t.serviceExteriorDesc,
      stripText: t.serviceExteriorStrip,
      link: '/services/peinture-exterieure',
    },
    {
      image: serviceImages[0],
      title: t.serviceResidential,
      subtitle: t.serviceResidentialDesc,
      stripText: t.serviceResidentialStrip,
      link: '/services/peinture-residentielle',
    },
    {
      image: serviceImages[1],
      title: t.serviceCommercial,
      subtitle: t.serviceCommercialDesc,
      stripText: t.serviceCommercialStrip,
      link: '/services/peinture-commerciale',
    },
    {
      image: serviceImages[2],
      title: t.serviceIndustrial,
      subtitle: t.serviceIndustrialDesc,
      stripText: t.serviceIndustrialStrip,
      link: '/services/peinture-industrielle',
    },
  ];

  return (
    <Box
      bg="white"
      position="relative"
      py={{ base: 12, md: 16, lg: 20 }}
    >
      <Container
        maxW="1440px"
        px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack
          spacing={{ base: 2, md: 6 }}
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
            spacing={{ base: 1, md: 3 }}
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
              lineHeight="1.3"
              fontWeight="bold"
              color="gray.800"
              whiteSpace={{ base: 'normal', md: 'nowrap' }}
            >
              {t.servicesTitle}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {t.servicesSubtitle}
            </Text>
          </Stack>

          <Box
            w="100%"
            maxW={{
              base: '100vw',
              sm: '300px',
              md: '1100px',
              lg: '1200px',
              xl: '1280px',
              '2xl': '1320px',
            }}
            overflowX={{ base: 'auto', md: 'visible' }}
            sx={{
              '&::-webkit-scrollbar': { display: 'none' },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <Stack
              direction={{ base: 'row', md: 'column' }}
              spacing={{ base: 3, md: 6 }}
              px={{ base: 4, md: 0 }}
              pb={{ base: 4, md: 0 }}
            >
              <SimpleGrid
                columns={{ base: 5, md: 3 }}
                spacing={{ base: 3, md: 6 }}
                w="100%"
                minWidth={{ base: '1400px', md: 'auto' }}
              >
                {services.slice(0, 3).map((service, index) => (
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
                      stripText={service.stripText}
                      noHoverBorder
                    />
                  </Box>
                ))}
              </SimpleGrid>

              <SimpleGrid
                columns={{ base: 2, md: 2 }}
                spacing={{ base: 3, md: 6 }}
                w={{ base: '560px', md: '66%' }}
                mx={{ md: 'auto' }}
                display={{ base: 'none', md: 'grid' }}
              >
                {services.slice(3, 5).map((service, index) => (
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
                      stripText={service.stripText}
                      noHoverBorder
                    />
                  </Box>
                ))}
              </SimpleGrid>

              {/* Mobile rendering for the last 2 items (in the same scroll container) */}
              <Stack direction="row" spacing={3} display={{ base: 'flex', md: 'none' }}>
                {services.slice(3, 5).map((service, index) => (
                  <Box
                    key={index}
                    as={RouterLink}
                    to={service.link}
                    _hover={{ textDecoration: 'none' }}
                    w="280px"
                    display="block"
                    flexShrink={0}
                  >
                    <ServiceCard
                      image={service.image}
                      title={service.title}
                      subtitle={service.subtitle}
                      stripText={service.stripText}
                      noHoverBorder
                    />
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Box>

          <Stack spacing={2} align="center" pt={{ base: 4, md: 6 }} w="100%">
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
