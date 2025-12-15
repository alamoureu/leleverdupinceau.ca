import React, { useContext } from 'react';
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
    <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
      <Container maxW='1440px' px={{ base: 4, md: 6 }}>
        <Stack spacing={8} align='center'>
          <Stack spacing={{ base: 3, md: 4 }} textAlign='center'>
            <Heading
              as='h2'
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='gray.800'
              lineHeight='1.3'
              letterSpacing='-0.02em'
              mb={{ base: 2, md: 3 }}
            >
              {displayTitle}
            </Heading>
            {displaySubtitle && (
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                letterSpacing='0.01em'
              >
                {displaySubtitle}
              </Text>
            )}
          </Stack>

          <SimpleGrid
            columns={{ base: 2, sm: 4 }}
            spacing={6}
            w='100%'
            maxW='900px'
          >
            {sectorsToDisplay.map((sector, index) => {
              const InnerContent = (
                <Box
                  position='relative'
                  borderRadius='2xl'
                  overflow='hidden'
                  border='1px solid'
                  borderColor='gray.200'
                  cursor={disableLinks ? 'default' : 'pointer'}
                  transition='all 0.2s'
                  minH={{ base: '180px', md: '200px' }}
                  h='100%'
                  w='100%'
                  _hover={
                    disableLinks
                      ? {}
                      : {
                        borderColor: '#014CC4',
                        boxShadow: 'md',
                        transform: 'translateY(-2px)',
                      }
                  }
                >
                  <Image
                    src={sector.image}
                    alt={
                      isFr
                        ? `Secteur desservi : ${sector.name}${pageContext ? ' - ' + pageContext : ''
                        }`
                        : `Service area: ${sector.name}${pageContext ? ' - ' + pageContext : ''
                        }`
                    }
                    position='absolute'
                    top={0}
                    left={0}
                    w='100%'
                    h='100%'
                    objectFit='cover'
                    zIndex={0}
                  />
                  {/* Color Overlay Filter */}
                  <Box
                    position='absolute'
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient='linear(to-b, rgba(1, 76, 196, 0.55), rgba(1, 76, 196, 0.15))'
                    zIndex={1}
                  />

                  {/* Content */}
                  <Box
                    position='relative'
                    zIndex={2}
                    p={8}
                    h='100%'
                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Stack spacing={4} align='center'>
                      <Icon
                        as={FontAwesomeIcon}
                        icon={faMapMarkerAlt}
                        boxSize={6}
                        color='white'
                        filter='drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                      />
                      <Text
                        fontWeight='700'
                        color='white'
                        fontSize='xl'
                        letterSpacing='-0.02em'
                        lineHeight='1.4'
                        textShadow='0 2px 4px rgba(0,0,0,0.3)'
                      >
                        {sector.name}
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              );

              return (
                <Stack key={index} spacing={3} align='center' w='100%'>
                  {disableLinks ? (
                    <Box w='100%'>{InnerContent}</Box>
                  ) : (
                    <Link
                      as={RouterLink}
                      to={sector.link}
                      _hover={{ textDecoration: 'none' }}
                      w='100%'
                    >
                      {InnerContent}
                    </Link>
                  )}
                  {sector.subText && (
                    <Text
                      fontSize='sm'
                      textAlign='center'
                      color='gray.600'
                      lineHeight='1.4'
                      maxW='180px'
                      mx='auto'
                      fontWeight='normal'
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
                rightIcon={<ArrowForwardIcon />}
                variant='outline'
                colorScheme='blue'
                borderColor='#014CC4'
                color='#014CC4'
                borderRadius='full'
                fontSize={{ base: 'sm', md: 'md' }}
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
                _hover={{ bg: '#014CC4', color: 'white' }}
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
