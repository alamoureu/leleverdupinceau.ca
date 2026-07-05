import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import ServiceCard from './ServiceCard';
import ShakeButton from './ShakeButton';
import peintureInterieureImg from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import peintureExterieureImg from '../images/1-page-principale/service hub/Peinture extérieure/IMG_6767.PNG';

const DEFAULT_SECTION_PY = {
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
    cta: 'Soumission Gratuite en 24h',
  },
  en: {
    heading: 'Need a Painter?',
    subtitle: 'Solutions for every type of project',
    cta: 'Free Quote in 24h',
  },
};

export default function LandingServicesSection({
  onSubmissionOpen,
  sectionPy,
  hideCta = false,
  fillCards = false,
  compactCards = false,
  compactMobile = false,
}) {
  const { t, currentLang } = useTranslation();
  const py = sectionPy ?? DEFAULT_SECTION_PY;
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
    <Box bg="gray.50" py={py} w="100%">
      <Container
        maxW="1440px"
        px={
          compactMobile
            ? { base: 3, sm: 5, md: 6, lg: 8 }
            : { base: 4, sm: 5, md: 6, lg: 8 }
        }
      >
        <Stack spacing={{ base: 6, md: 10 }} align="center">
          <Stack spacing={{ base: 1, md: 3 }} textAlign="center">
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
                w={fillCards ? '100%' : { base: '85%', sm: '300px', md: '50%' }}
                maxW={fillCards ? 'none' : { base: '340px', md: 'none' }}
                flex={{ md: '1 1 0' }}
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  subtitle={service.subtitle}
                  stripText={service.stripText}
                  noHoverBorder
                  fillColumn={fillCards}
                  compact={compactCards}
                />
              </Box>
            ))}
          </Flex>

          {!hideCta && (
            <ShakeButton style={{ display: 'inline-block', width: 'auto' }}>
              <Button
                onClick={onSubmissionOpen}
                bg="brand.500"
                color="white"
                borderRadius="full"
                px={{ base: 8, md: 12 }}
                py={{ base: 3, md: 5 }}
                minH={{ base: '52px', md: '60px' }}
                h="auto"
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                boxShadow="md"
                _hover={{ bg: 'brand.600' }}
                whiteSpace="normal"
                lineHeight="1.15"
              >
                {copy.cta}
              </Button>
            </ShakeButton>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
