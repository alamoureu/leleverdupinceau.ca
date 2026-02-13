import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
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
      pt={{ base: 20, sm: 20, md: 24, lg: 24, xl: 28, '2xl': 28 }}
      pb={{ base: 12, md: 16, lg: 20 }}
      bg="white"
    >
      <Container
        maxW="1440px"
        px={{ base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }}
      >
        <Stack
          spacing={{ base: 5, sm: 5, md: 7, lg: 9, xl: 14, '2xl': 16 }}
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
            spacing={{ base: 1, sm: 2, md: 3 }}
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
              fontSize={{
                base: 'lg',
                sm: 'xl',
                md: '2xl',
                lg: '3xl',
                xl: '3xl',
                '2xl': '4xl',
              }}
              fontWeight="bold"
              color="gray.800"
              whiteSpace={{ base: 'normal', md: 'nowrap' }}
            >
              {t.controlTitle}
            </Heading>
            <Text
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
              color="gray.600"
              fontWeight="medium"
            >
              {t.controlSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 5, sm: 6, md: 6, lg: 8, xl: 12, '2xl': 14 }}
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

          <Stack
            spacing={2}
            align="center"
            pt={{ base: 3, sm: 4, md: 8, lg: 10, xl: 12 }}
            w="100%"
          >
            <Button
              onClick={onSubmissionOpen}
              bg="brand.500"
              color="white"
              fontSize={{ base: 'md', sm: 'lg', md: 'lg' }}
              fontWeight="semibold"
              px={{ base: 6, sm: 8, md: 10 }}
              py={{ base: 3, sm: 3, md: 4 }}
              h="auto"
              minH={{ base: '44px', sm: '46px', md: '52px' }}
              w="fit-content"
              maxW={{ base: '220px', sm: '240px', md: 'none' }}
              borderRadius="full"
              boxShadow="md"
              _hover={{ bg: 'brand.600', boxShadow: 'lg' }}
            >
              {t.freeSubmission}
            </Button>
            <Text
              fontSize={{ base: 'sm', md: 'lg' }}
              color="gray.600"
              fontWeight="medium"
            >
              {t.ctaSubtitle}
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
