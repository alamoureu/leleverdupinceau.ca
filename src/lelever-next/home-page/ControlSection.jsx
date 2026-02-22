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
import ServiceCard from './ServiceCard';
import control1 from '../images/new-landing/control-1.jpeg';
import control2 from '../images/new-landing/control-2.png';
import control3 from '../images/new-landing/control-3.jpeg';

const cardImages = [control1, control2, control3];

export default function ControlSection({ onSubmissionOpen }) {
  const { t } = useTranslation();

  const cards = [
    {
      image: cardImages[0],
      title: t.controlCard1Title,
      subtitle: t.controlCard1Subtitle,
      description: t.controlCard1Desc,
    },
    {
      image: cardImages[1],
      title: t.controlCard2Title,
      subtitle: t.controlCard2Subtitle,
      description: t.controlCard2Desc,
    },
    {
      image: cardImages[2],
      title: t.controlCard3Title,
      subtitle: t.controlCard3Subtitle,
      description: t.controlCard3Desc,
    },
  ];

  return (
    <Box
      pt={{ base: 20, sm: 24, md: 24, lg: 24, xl: 28, '2xl': 28 }}
      mt={0}
      pb={{ base: 12, md: 16, lg: 20 }}
      bg="white"
    >
      <Container
        maxW="1440px"
        px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack
          spacing={{ base: 3, sm: 4, md: 7, lg: 9, xl: 14, '2xl': 16 }}
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
            spacing={{ base: 0.5, sm: 1, md: 3 }}
            textAlign="center"
            maxW={{
              base: '100%',
              md: '100%',
              lg: '1100px',
              xl: '1200px',
              '2xl': '1280px',
            }}
            w="100%"
            mb={{ base: 0, md: 4 }}
            pt={{ base: 0, sm: 1, md: 7, lg: 10, xl: 16, '2xl': 20 }}
          >
            <Heading
              as="h2"
              size="section"
              lineHeight="1.3"
              fontWeight="bold"
              color="gray.800"
              whiteSpace={{ base: 'normal', md: 'nowrap' }}
            >
              {t.controlTitle}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {t.controlSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 3, sm: 5, md: 6, lg: 8, xl: 12, '2xl': 14 }}
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
            {cards.map((card, index) => (
              <ServiceCard
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                stripText={card.description}
                noHoverBorder
              />
            ))}
          </SimpleGrid>

        </Stack>
      </Container>
    </Box>
  );
}
