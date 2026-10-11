import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useTranslation } from '../i18n';
import { SECTION_PY, SECTION_TITLE_MAX_W } from '../constants/sectionSpacing';
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

function ServiceLinkCard({ service }) {
  return (
    <Box
      as={RouterLink}
      to={service.link}
      role="group"
      display="block"
      h="100%"
      textDecoration="none"
      outline="none"
      _hover={{ textDecoration: 'none' }}
      _focus={{ outline: 'none', boxShadow: 'none' }}
      _focusVisible={{
        outline: '2px solid',
        outlineColor: 'brand.500',
        outlineOffset: '3px',
        borderRadius: 'xl',
      }}
    >
      <ServiceCard
        image={service.image}
        title={service.title}
        subtitle={service.subtitle}
        titleInStrip
        fillHeight
        fluid
        noHoverBorder
      />
    </Box>
  );
}

export default function ServicesSection({
  sectionPy = SECTION_PY,
  sectionBg = 'gray.50',
}) {
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
      title: t.serviceIndustrial,
      subtitle: t.serviceIndustrialDesc,
      link: '/services/peinture-industrielle',
    },
    {
      image: serviceImages[3],
      title: t.serviceInterior,
      subtitle: t.serviceInteriorDesc,
      link: '/services/peinture-interieure',
    },
    {
      image: serviceImages[4],
      title: t.serviceExterior,
      subtitle: t.serviceExteriorDesc,
      link: '/services/peinture-exterieure',
    },
  ];

  const primary = services.slice(0, 3);
  const secondary = services.slice(3);

  return (
    <Box bg={sectionBg} py={sectionPy}>
      <Container maxW="1440px" px={{ base: 4, sm: 5, md: 6, lg: 8 }}>
        <Stack spacing={{ base: 8, md: 10 }} align="center" w="100%">
          <Stack
            spacing={{ base: 2, md: 3 }}
            textAlign="center"
            maxW={SECTION_TITLE_MAX_W}
            w="100%"
          >
            <Heading
              as="h2"
              size="section"
              lineHeight="1.25"
              fontWeight="bold"
              color="gray.800"
              scrollMarginTop="6rem"
              whiteSpace={{ base: 'normal', lg: 'nowrap' }}
            >
              {t.servicesTitle}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {t.servicesSubtitle}
            </Text>
          </Stack>

          <Stack
            spacing={{ base: 5, md: 6, lg: 7 }}
            w="100%"
            maxW="1280px"
            pt={1}
            pb={3}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 3 }}
              spacing={{ base: 5, md: 6, lg: 7 }}
              w="100%"
            >
              {primary.map((service) => (
                <ServiceLinkCard key={service.link} service={service} />
              ))}
            </SimpleGrid>
            <SimpleGrid
              columns={{ base: 1, md: 2 }}
              spacing={{ base: 5, md: 6, lg: 7 }}
              w="100%"
              maxW={{ md: '840px', lg: '860px' }}
              mx="auto"
            >
              {secondary.map((service) => (
                <ServiceLinkCard key={service.link} service={service} />
              ))}
            </SimpleGrid>
          </Stack>

          <Stack spacing={2} align="center" w="100%">
            <Button
              variant="ctaOutline"
              as={RouterLink}
              to="/services"
              borderRadius="full"
              textStyle="nav"
              size="md"
              px={{ base: 5, md: 6 }}
              rightIcon={<ArrowForwardIcon />}
            >
              {t.viewAllServices}
            </Button>
            <Text
              as="span"
              display="inline-flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              color="gray.500"
            >
              {t.servicesTrustFree}
              <Box
                as="span"
                w="3px"
                h="3px"
                borderRadius="full"
                bg="currentColor"
                flexShrink={0}
                aria-hidden
              />
              {t.servicesTrustNoCommitment}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
