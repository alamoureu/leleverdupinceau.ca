import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import { FaArrowRight as ArrowForwardIcon } from 'react-icons/fa';
import { useTranslation } from '../i18n';
import { SECTION_PY, SECTION_TITLE_MAX_W } from '../constants/sectionSpacing';
import {
  DESKTOP_THREE_PLUS_TWO_SX,
  MOBILE_CENTERED_CARD_SX,
} from '../constants/responsiveGrid';
import ServiceCard from './ServiceCard';
import { thumbnailForRoute } from '../constants/routeThumbnails';

const serviceImages = [
  thumbnailForRoute('/services/peinture-residentielle'),
  thumbnailForRoute('/services/peinture-commerciale'),
  thumbnailForRoute('/services/peinture-industrielle'),
  thumbnailForRoute('/services/peinture-interieure'),
  thumbnailForRoute('/services/peinture-exterieure'),
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

          <Box
            w="100%"
            maxW="1280px"
            pt={2}
            pb={{ base: 3, md: 4 }}
            display="grid"
            gridTemplateColumns={{
              base: '1fr',
              md: 'repeat(2, minmax(0, 1fr))',
            }}
            gap={{ base: 4, md: 5, lg: 7 }}
            sx={{
              ...MOBILE_CENTERED_CARD_SX,
              '@media screen and (min-width: 48em) and (max-width: 61.99em)': {
                '& > *:last-child:nth-of-type(odd)': {
                  gridColumn: '1 / -1',
                  width: '100%',
                  maxWidth: 'calc(50% - 0.625rem)',
                  mx: 'auto',
                },
              },
              ...DESKTOP_THREE_PLUS_TWO_SX,
            }}
          >
            {services.map((service) => (
              <ServiceLinkCard key={service.link} service={service} />
            ))}
          </Box>

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
            <Text fontSize="sm" color="gray.500">
              {t.servicesTrustFree} - {t.servicesTrustNoCommitment}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
