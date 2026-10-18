import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
} from '@chakra-ui/react';
import { useTranslation } from '../i18n';
import { MOBILE_CENTERED_CARD_SX } from '../constants/responsiveGrid';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import ServiceCard from './ServiceCard';
import control1 from '../images/services/residentielle/header/IMG_7844.webp?responsive=card';
import control2 from '../images/home/control-2-min.webp?responsive=card';
import control3 from '../images/home/control-3.webp?responsive=card';
import { TRUST_BANNER_BELOW_PT } from './TrustBanner';

const cardImages = [control1, control2, control3];

// Sans props : version de l'accueil. Les autres pages passent leur propre texte (cards sans image = images de l'accueil).
export default function ControlSection({ title, subtitle, cards: customCards, pt }) {
  const { t } = useTranslation();
  const heading = title || t.controlTitle;
  const titleParts = heading.split(', ');
  const hasTwoParts = titleParts.length >= 2;

  const cards = (customCards || [1, 2, 3].map((n) => ({
    title: t[`controlCard${n}Title`],
    subtitle: t[`controlCard${n}Subtitle`],
    description: t[`controlCard${n}Desc`],
  }))).map((card, i) => ({ image: cardImages[i % cardImages.length], ...card }));

  return (
    <Box pt={pt ?? TRUST_BANNER_BELOW_PT} mt={0} pb={SECTION_PY} bg="white">
      <Container
        maxW="1440px"
        px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack
          spacing={TRUST_BANNER_AIR_SPACE}
          align="center"
          w="100%"
          maxW="100%"
          mx="auto"
        >
          <Stack
            spacing={{ base: 1, md: 2 }}
            textAlign="center"
            maxW={{ base: '100%', md: '900px', lg: '1100px', xl: '1200px' }}
            mx="auto"
            w="100%"
          >
            <Heading
              as="h2"
              size="section"
              fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
              fontWeight="bold"
              color="gray.800"
              whiteSpace={{ base: 'normal', lg: 'nowrap' }}
            >
              {hasTwoParts ? (
                <>
                  {titleParts[0]},{' '}
                  <Box as="span" display={{ base: 'block', md: 'inline' }}>
                    {titleParts.slice(1).join(', ')}
                  </Box>
                </>
              ) : (
                heading
              )}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {subtitle || t.controlSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 3, sm: 5, md: 6, lg: 8, xl: 12, '2xl': 14 }}
            w="100%"
            maxW={{
              base: '100%',
              md: '1100px',
              lg: '1200px',
              xl: '1280px',
              '2xl': '1320px',
            }}
            sx={MOBILE_CENTERED_CARD_SX}
          >
            {cards.map((card, index) => (
              <Box key={index} h="100%">
                <ServiceCard
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  stripText={card.description}
                  fluid
                  noHoverBorder
                  priority
                />
              </Box>
            ))}
          </SimpleGrid>

        </Stack>
      </Container>
    </Box>
  );
}
