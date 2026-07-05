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
import control1 from '../images/IMG_7844.PNG';
import control2 from '../images/control-2-min.png';
import control3 from '../images/new-landing/control-3.jpeg';

const defaultCardImages = [control1, control2, control3];

export default function ControlSection({
  onSubmissionOpen,
  cardImages = defaultCardImages,
  cardImagePositions,
  showCta = false,
  compactTop = false,
  landingLayout = false,
  sectionPy,
}) {
  const { t } = useTranslation();
  const titleParts = t.controlTitle.split(', ');
  const hasTwoParts = titleParts.length >= 2;

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
      pt={
        compactTop
          ? sectionPy ?? { base: 8, md: 12, lg: 16 }
          : { base: 24, sm: 28, md: 32, lg: 32, xl: 40, '2xl': 40 }
      }
      mt={0}
      pb={sectionPy ?? { base: 12, md: 16, lg: 20 }}
      bg="white"
    >
      <Container
        maxW="1440px"
        px={
          landingLayout
            ? { base: 3, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }
            : { base: 4, sm: 5, md: 6, lg: 8, xl: 10, '2xl': 12 }
        }
      >
        <Stack
          spacing={{ base: 3, sm: 4, md: 7, lg: 9, xl: 14, '2xl': 16 }}
          align="center"
          w="100%"
          maxW={
            landingLayout
              ? '100%'
              : {
                  base: '280px',
                  sm: '300px',
                  md: '100%',
                }
          }
          mx="auto"
        >
          <Stack
            spacing={{ base: 1, md: 2 }}
            textAlign="center"
            maxW={{ base: '100%', md: '900px', lg: '1100px', xl: '1200px' }}
            mx="auto"
            mb={{ base: 2, md: 3 }}
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
                t.controlTitle
              )}
            </Heading>
            <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
              {t.controlSubtitle}
            </Text>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 3, sm: 5, md: 6, lg: 8, xl: 12, '2xl': 14 }}
            w="100%"
            alignItems="stretch"
            maxW={
              landingLayout
                ? { base: '100%', md: '1100px', lg: '1200px', xl: '1280px' }
                : {
                    base: '280px',
                    sm: '300px',
                    md: '1100px',
                    lg: '1200px',
                    xl: '1280px',
                    '2xl': '1320px',
                  }
            }
          >
            {cards.map((card, index) => (
              <ServiceCard
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                stripText={card.description}
                noHoverBorder
                fillColumn={landingLayout}
                expandImage={landingLayout}
                imageObjectPosition={
                  cardImagePositions?.[index] ?? 'center center'
                }
              />
            ))}
          </SimpleGrid>

          {showCta && onSubmissionOpen && (
            <Stack spacing={3} align="center" pt={{ base: 4, md: 6 }} w="100%">
              <Button
                onClick={onSubmissionOpen}
                bg="brand.500"
                color="white"
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="semibold"
                px={{ base: 8, md: 12 }}
                py={{ base: 4, md: 5 }}
                h="auto"
                minH={{ base: '52px', md: '56px' }}
                borderRadius="full"
                boxShadow="md"
                _hover={{ bg: 'brand.600', boxShadow: 'lg' }}
              >
                {t.freeSubmission}
              </Button>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.600"
                fontWeight="medium"
              >
                {t.ctaSubtitle}
              </Text>
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
