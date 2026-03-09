import React from 'react';
import { Link as RouterLink } from '@/lib/next-router';
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
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from '../i18n';
import montrealSecteur from '../images/mtl.png';
import lavalSecteur from '../images/laval.png';
import longueuilSecteur from '../images/longueuil.png';
import brossardSecteur from '../images/brossard.png';
import { toImageSrc } from '@/lib/imageSrc';

// Export images for reuse
export { montrealSecteur, lavalSecteur, longueuilSecteur, brossardSecteur };

const defaultSectors = [
  {
    name: 'Montréal',
    link: '/secteurs-desservis/montreal',
    image: montrealSecteur,
  },
  {
    name: 'Laval',
    link: '/secteurs-desservis/laval',
    image: lavalSecteur,
  },
  {
    name: 'Longueuil',
    link: '/secteurs-desservis/longueuil',
    image: longueuilSecteur,
  },
  {
    name: 'Brossard',
    link: '/secteurs-desservis/brossard',
    image: brossardSecteur,
  },
];

export default function SectorsSection({
  title,
  subtitle,
  sectors,
  showButton = true,
  buttonText,
  buttonLink = '/secteurs-desservis',
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
    <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50" borderRadius="xl">
      <Container maxW="1440px" px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align="center">
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
            columns={{ base: 2, sm: 4 }}
            spacing={6}
            w="100%"
            maxW="900px"
          >
            {sectorsToDisplay.map((sector, index) => {
              const InnerContent = (
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="gray.200"
                  cursor={disableLinks ? 'default' : 'pointer'}
                  transition="all 0.2s"
                  minH={{ base: '180px', md: '200px' }}
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
                  <Image
                    src={toImageSrc(sector.image)}
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
                    top={sector.name === 'Montréal' ? '-20px' : 0}
                    left={0}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    zIndex={0}
                    transform={
                      sector.name === 'Montréal' ? 'scale(1.25)' : 'none'
                    }
                    loading="lazy"
                    decoding="async"
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
                    p={8}
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Stack spacing={4} align="center">
                      <Icon
                        as={FontAwesomeIcon}
                        icon={faMapMarkerAlt}
                        boxSize={6}
                        color="white"
                        filter="drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
                      />
                      <Text fontWeight="700" color="white" textStyle="bodyLarge" as="span" letterSpacing="-0.02em" lineHeight="1.4" textShadow="0 2px 4px rgba(0,0,0,0.3)">
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
                    <Text textStyle="caption" textAlign="center" color="gray.600" lineHeight="1.4" maxW="180px" mx="auto" fontWeight="normal">
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
                rightIcon={<ArrowForwardIcon />}
                variant="outline"
                borderColor="brand.500"
                color="brand.500"
                borderRadius="full"
                textStyle="nav"
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: 'brand.500', color: 'white' }}
              >
                {displayButtonText}
              </Button>
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
