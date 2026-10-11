import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import { TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import { TRUST_BANNER_BELOW_PT } from './TrustBanner';
import ServiceCard from './ServiceCard';
import peintureInterieureImg from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import peintureExterieureImg from '../images/1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG';

const DEFAULT_SECTION_PB = {
  base: 10,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 20,
  '2xl': 24,
};

const translations = {
  fr: {
    heading: 'Besoin d\u2019un Peintre\u00A0?',
    subtitle: 'Des solutions pour chaque type de projet',
  },
  en: {
    heading: 'Need a Painter?',
    subtitle: 'Solutions for every type of project',
  },
};

export default function LandingServicesSection({ sectionPy, sectionPaddingTop }) {
  const { t, currentLang } = useTranslation();
  const pb = sectionPy ?? DEFAULT_SECTION_PB;
  const pt = sectionPaddingTop !== undefined ? sectionPaddingTop : TRUST_BANNER_BELOW_PT;
  const copy = translations[currentLang] || translations.fr;

  const services = [
    {
      image: peintureInterieureImg,
      title: t.serviceInterior,
      subtitle: t.serviceInteriorDesc,
      stripText: t.serviceInteriorStrip,
    },
    {
      image: peintureExterieureImg,
      title: t.serviceExterior,
      subtitle: t.serviceExteriorDesc,
      stripText: t.serviceExteriorStrip,
    },
  ];

  return (
    <Box bg="gray.50" pt={pt} pb={pb} w="100%">
      <Container maxW="1440px" px={{ base: 4, sm: 5, md: 6, lg: 8 }}>
        <Stack spacing={TRUST_BANNER_AIR_SPACE} align="center">
          <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
            <Heading
              as="h2"
              size="section"
              fontWeight="bold"
              color="gray.800"
              lineHeight="1.3"
            >
              {copy.heading}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {copy.subtitle}
            </Text>
          </Stack>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            gap={{ base: 5, md: 6, lg: 8 }}
            justify="center"
            align={{ base: 'center', md: 'stretch' }}
            w="100%"
            maxW={{ md: '780px', lg: '860px', xl: '920px' }}
            mx="auto"
          >
            {services.map((service, idx) => (
              <Box
                key={idx}
                w={{ base: '85%', sm: '300px', md: '50%' }}
                maxW={{ base: '340px', md: 'none' }}
                flex={{ md: '1 1 0' }}
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
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
}
