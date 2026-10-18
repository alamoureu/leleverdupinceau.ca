import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaArrowRight as ArrowForwardIcon, FaMapMarkerAlt } from 'react-icons/fa';
import { useTranslation } from '../i18n';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import ResponsiveImage from '../components/ResponsiveImage';
import montrealSecteur from '../images/shared/city-thumbs/montreal.webp?responsive=sector';
import lavalSecteur from '../images/shared/city-thumbs/laval.webp?responsive=sector';
import longueuilSecteur from '../images/shared/city-thumbs/longueuil.webp?responsive=sector';
import brossardSecteur from '../images/shared/city-thumbs/brossard.webp?responsive=sector';
import stLambertSecteur from '../images/shared/city-thumbs/st-lambert.webp?responsive=sector';
import laprairieSecteur from '../images/shared/city-thumbs/laprairie.webp?responsive=sector';
// Export images for reuse
export { montrealSecteur, lavalSecteur, longueuilSecteur, brossardSecteur };

/**
 * Cadrage des tuiles secteurs. `focus` (en % de l'image) centre la zone
 * surlignée dans la tuile via object-position (cover sans trou).
 */
function sectorTileImageProps(sector) {
  if (sector.imageTransform) return sector.imageTransform;
  if (sector.focus) {
    return {
      objectFit: 'cover',
      objectPosition: `${sector.focus.x}% ${sector.focus.y}%`,
    };
  }
  if (sector.name === 'Montréal') {
    return { top: '-20px', transform: 'scale(1.25)' };
  }
  return {};
}

const defaultSectors = [
  {
    name: 'Montréal',
    link: '/secteurs/montreal',
    image: montrealSecteur,
  },
  {
    name: 'Laval',
    link: '/secteurs/laval',
    image: lavalSecteur,
  },
  {
    name: 'Longueuil',
    link: '/secteurs/longueuil',
    image: longueuilSecteur,
  },
  {
    name: 'Brossard',
    link: '/secteurs/brossard',
    image: brossardSecteur,
  },
  {
    name: 'Saint-Lambert',
    link: '/secteurs/st-lambert',
    image: stLambertSecteur,
    // Cartes quasi carrées dans une tuile large : seul Y décale la zone bleue sous le pin
    focus: { x: 50, y: 87 },
  },
  {
    name: 'La Prairie',
    link: '/secteurs/laprairie',
    image: laprairieSecteur,
    focus: { x: 50, y: 85 },
  },
];

export default function SectorsSection({
  title,
  subtitle,
  sectors,
  showButton = true,
  buttonText,
  buttonLink = '/secteurs',
  pageContext = '',
  disableLinks = false,
}) {
  const { t, currentLang } = useTranslation();
  const sectorsToDisplay = sectors || defaultSectors;
  const displayTitle = title || t.sectorsTitle;
  const displaySubtitle = subtitle || t.sectorsSubtitle;
  const displayButtonText = buttonText || t.viewAllSectors;
  const isFr = currentLang === 'fr';

  return (
    <Box py={SECTION_PY} bg="gray.50" w="100%">
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={TRUST_BANNER_AIR_SPACE} align="center">
          <Stack spacing={{ base: 2, md: 3 }} textAlign="center">
            <Heading
              as="h2"
              size="section"
              fontWeight="bold"
              color="gray.800"
              lineHeight="1.3"
            >
              {displayTitle}
            </Heading>
            {displaySubtitle && (
              <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                {displaySubtitle}
              </Text>
            )}
          </Stack>

          <SimpleGrid
            columns={{ base: 2, md: 3 }}
            spacing={5}
            w="100%"
            maxW={{ base: '600px', md: '900px' }}
          >
            {sectorsToDisplay.map((sector, index) => {
              const imgProps = sectorTileImageProps(sector);

              const InnerContent = (
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gray.200"
                  cursor={disableLinks ? 'default' : 'pointer'}
                  transition="all 0.2s"
                  minH={{ base: '150px', md: '170px' }}
                  h="100%"
                  w="100%"
                  _hover={
                    disableLinks
                      ? {}
                      : {
                          borderColor: 'brand.500',
                          boxShadow: 'md',
                          transform: 'translateY(-2px)',
                        }
                  }
                >
                  <ResponsiveImage
                    image={sector.image}
                    alt={
                      isFr
                        ? `Secteur desservi : ${sector.name}${
                            pageContext ? ' - ' + pageContext : ''
                          }`
                        : `Service area: ${sector.name}${
                            pageContext ? ' - ' + pageContext : ''
                          }`
                    }
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    zIndex={0}
                    transformOrigin="center center"
                    {...imgProps}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 62em) 610px, (min-width: 30em) 45vw, 90vw"
                    htmlWidth={600}
                    htmlHeight={400}
                  />
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient="linear(to-b, rgba(2, 42, 104, 0.3), rgba(2, 42, 104, 0.85))"
                    zIndex={1}
                  />

                  {/* Content */}
                  <Box
                    position="relative"
                    zIndex={2}
                    p={{ base: 5, md: 6 }}
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack spacing={3} align="center">
                      <Icon as={FaMapMarkerAlt}
                        boxSize={5}
                        color="white"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                      />
                      <Text
                        fontWeight="700"
                        color="white"
                        textStyle="bodyLarge"
                        as="span"
                        letterSpacing="-0.02em"
                        lineHeight="1.4"
                        textShadow="0 2px 4px rgba(0,0,0,0.3)"
                      >
                        {sector.name}
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              );

              return (
                <Stack key={index} spacing={3} align="center" w="100%">
                  {disableLinks ? (
                    <Box w="100%">{InnerContent}</Box>
                  ) : (
                    <Link
                      as={RouterLink}
                      to={sector.link}
                      _hover={{ textDecoration: 'none' }}
                      w="100%"
                    >
                      {InnerContent}
                    </Link>
                  )}
                  {sector.subText && (
                    <Text
                      textStyle="caption"
                      textAlign="center"
                      color="gray.600"
                      lineHeight="1.4"
                      maxW="180px"
                      mx="auto"
                      fontWeight="normal"
                    >
                      {sector.subText}
                    </Text>
                  )}
                </Stack>
              );
            })}
          </SimpleGrid>

          {showButton && (
            <Link
              as={RouterLink}
              to={buttonLink}
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                variant="ctaOutline"
                rightIcon={<ArrowForwardIcon />}
                borderRadius="full"
                textStyle="nav"
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
              >
                {displayButtonText}
              </Button>
            </Link>
          )}

          <Text
            textStyle="bodyLarge"
            color="gray.600"
            textAlign="center"
            mt={4}
          >
            {isFr
              ? 'Et dans plus de 20 quartiers de Montréal: Griffintown, Plateau, Rosemont, Verdun, Outremont, Westmount, Notre-Dame-de-Grâce... '
              : 'And in over 20 Montreal neighborhoods: Griffintown, Plateau, Rosemont, Verdun, Outremont, Westmount, Notre-Dame-de-Grâce... '}
            <Link
              as={RouterLink}
              to="/secteurs"
              color="brand.500"
              fontWeight="bold"
            >
              {isFr ? 'Voir tous les quartiers →' : 'View all neighborhoods →'}
            </Link>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
