import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Button,
  HStack,
  Image,
  Grid,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import heroImage from '../images/1-page-principale/blog hub/Peinture extérieure/IMG_6753.PNG';
import blogPhotoHeader from '../images/5-landing-page/Photo/Danny_Wraping.jpeg';
import ResourcesSection from '../home-page/ResourcesSection';
import imgResidentielle from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import imgCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import imgInterieure from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import imgExterieure from '../images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG';
import imgIndustrielle from '../images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG';

export default function BlogPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isFr ? 'Accueil' : 'Home',
        item: 'https://leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isFr ? 'Blog' : 'Blog',
        item: 'https://leleverdupinceau.ca/blog',
      },
    ],
  };

  const services = [
    {
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      link: '/services/peinture-residentielle',
      image: imgResidentielle,
    },
    {
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      link: '/services/peinture-commerciale',
      image: imgCommerciale,
    },
    {
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      link: '/services/peinture-interieure',
      image: imgInterieure,
    },
    {
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      link: '/services/peinture-exterieure',
      image: imgExterieure,
    },
    {
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      link: '/services/peinture-industrielle',
      image: imgIndustrielle,
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Blog peinture Montréal | Conseils, prix, erreurs à éviter – Le Lever du Pinceau' : 'Montreal painting blog | Tips, prices, mistakes to avoid – Le Lever du Pinceau'}
        description={isFr ? 'Conseils peinture par des professionnels à Montréal : prix au pied carré, choix du peintre, erreurs à éviter. Guides résidentiel et commercial.' : 'Painting advice from Montreal pros: price per sq ft, choosing a painter, mistakes to avoid. Residential and commercial guides.'}
        canonicalPath="/blog"
        schema={breadcrumbSchema}
      />

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Grid
            templateColumns={{ base: '1fr', md: '6fr 4fr' }}
            gap={{ base: 6, md: 8, lg: 10 }}
            mb={{ base: 12, md: 16 }}
            alignItems={{ md: 'flex-start' }}
          >
            <Stack spacing={0} minW={0}>
              <HStack
                spacing={3}
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                mb={{ base: 4, md: 6 }}
              >
                <Link
                  as={RouterLink}
                  to='/'
                  _hover={{ textDecoration: 'underline' }}
                  color='gray.600'
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Accueil' : 'Home'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Text
                  color='gray.800'
                  fontWeight='medium'
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Blog' : 'Blog'}
                </Text>
              </HStack>
              <Stack spacing={{ base: 4, md: 6 }} textAlign='left'>
                <Heading as='h1' size='page' color='gray.800'>
                  {isFr
                    ? 'Blog – Conseils et ressources sur la peinture'
                    : 'Blog – Painting Tips and Resources'}
                </Heading>
                <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px'>
                  {isFr
                    ? "Bienvenue sur le blog du Lever du Pinceau. Nos peintres professionnels partagent des guides pratiques, des conseils d'entretien et des astuces pour réussir vos projets résidentiels, commerciaux, intérieurs ou extérieurs. Ce hub regroupe tous nos articles afin de vous aider à mieux planifier vos travaux et à éviter les erreurs courantes."
                    : "Welcome to Le Lever du Pinceau's blog. Our professional painters share practical guides, maintenance tips and tricks to succeed in your residential, commercial, interior or exterior projects. This hub brings together all our articles to help you better plan your work and avoid common mistakes."}
                </Text>
                <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7' maxW='800px' fontWeight='500'>
                  {isFr
                    ? '👉 Parcourez nos articles pour découvrir les meilleures pratiques de peinture.'
                    : '👉 Browse our articles to discover the best painting practices.'}
                </Text>
              </Stack>
            </Stack>
            <Box
              w='100%'
              aspectRatio={{ base: '1', md: '4/3' }}
              borderRadius='xl'
              overflow='hidden'
              bg='gray.100'
            >
              <Image
                src={blogPhotoHeader}
                alt={isFr ? 'Blog – Le Lever du Pinceau' : 'Blog – Le Lever du Pinceau'}
                w='100%'
                h='100%'
                objectFit='cover'
                objectPosition='center'
                loading="lazy"
                decoding="async"
              />
            </Box>
          </Grid>
          <Stack spacing={0}>
            <ResourcesSection
              title={isFr ? 'Guides essentiels' : 'Essential Guides'}
            />

            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <SimpleGrid
                  columns={{ base: 1, md: 2 }}
                  spacing={{ base: 4, md: 6 }}
                  align='center'
                >
                  <Box>
                    <Image
                      src={heroImage}
                      alt={
                        isFr
                          ? 'conseils peinture Montréal'
                          : 'painting advice Montreal'
                      }
                      borderRadius='xl'
                      objectFit='cover'
                      w='100%'
                      maxH='400px'
                      loading="lazy"
                      decoding="async"
                    />
                  </Box>
                  <Stack spacing={6}>
                    <Stack spacing={{ base: 2, md: 3 }}>
                      <Heading as='h2' size='section' color='gray.800'>
                        {isFr
                          ? 'Des conseils rédigés par des peintres professionnels'
                          : 'Advice written by professional painters'}
                      </Heading>
                    </Stack>

                    <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
                      {isFr
                        ? 'Tous nos articles sont rédigés ou validés par des peintres professionnels expérimentés, afin de fournir des informations fiables, pratiques et adaptées aux projets de peinture du Grand Montréal.'
                        : 'All our articles are written or validated by experienced professional painters, to provide reliable, practical information adapted to painting projects in Greater Montreal.'}
                    </Text>

                    <Link
                      href='/peintre-professionnel'
                      _hover={{ textDecoration: 'none' }}
                      w={{ base: '100%', md: 'auto' }}
                    >
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        variant='outline'
                        borderColor='brand.500'
                        color='brand.500'
                        borderRadius='full'
                        textStyle='nav'
                        px={{ base: 5, md: 7 }}
                        py={{ base: 3, md: 4 }}
                        _hover={{ bg: 'brand.500', color: 'white' }}
                        whiteSpace='normal'
                        textAlign='center'
                        lineHeight='1.4'
                        h='auto'
                        minH='48px'
                      >
                        {isFr
                          ? 'En savoir plus'
                          : 'Learn more'}
                      </Button>
                    </Link>
                  </Stack>
                </SimpleGrid>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr
                        ? 'Vous recherchez un service de peinture ?'
                        : 'Looking for a painting service?'}
                    </Heading>
                  </Stack>

                  <Flex
                    maxW='1200px'
                    mx='auto'
                    wrap='wrap'
                    justify='center'
                    gap={{ base: 4, md: 6 }}
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        _hover={{ textDecoration: 'none' }}
                        w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                        maxW={{ lg: '380px' }}
                      >
                        <Box
                          h='100%'
                          bg='white'
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          overflow='hidden'
                          textAlign='center'
                          _hover={{
                            borderColor: 'brand.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          {service.image && (
                            <Box
                              w='100%'
                              h={{ base: '140px', md: '160px' }}
                              flexShrink={0}
                              overflow='hidden'
                              bg='gray.100'
                            >
                              <Image
                                src={service.image}
                                alt={service.title}
                                w='100%'
                                h='100%'
                                objectFit='cover'
                                objectPosition='center'
                                display='block'
                                loading="lazy"
                                decoding="async"
                              />
                            </Box>
                          )}
                          <Stack spacing={3} align='center' p={{ base: 6, md: 8 }} pt={service.image ? 4 : 6}>
                            <Text fontWeight='bold' color='gray.800' textStyle='bodyLarge'>
                              {service.title}
                            </Text>
                            <HStack spacing={2} color='brand.500'>
                              <Text textStyle='caption' fontWeight='medium'>
                                {isFr ? 'Voir' : 'View'}
                              </Text>
                              <ArrowForwardIcon boxSize={4} />
                            </HStack>
                          </Stack>
                        </Box>
                      </Link>
                    ))}
                  </Flex>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Container>

        <Box
          w='100%'
          py={{ base: 12, md: 16, lg: 20 }}
          bg='app.ctaBg'
          mt={{ base: 8, md: 12 }}
        >
          <Container maxW='1440px' px={{ base: 4, md: 6 }}>
            <Stack spacing={8} textAlign='center'>
              <Stack spacing={{ base: 2, md: 3 }}>
                <Heading as='h2' size='section' color='white'>
                  {isFr
                    ? 'Planifiez votre prochain projet de peinture'
                    : 'Plan your next painting project'}
                </Heading>
              </Stack>

              <Box>
                <Link
                  as={RouterLink}
                  to='/contact'
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    rightIcon={<ArrowForwardIcon />}
                    bg='white'
                    color='brand.500'
                    borderRadius='full'
                    textStyle='nav'
                    px={{ base: 5, md: 7 }}
                    py={{ base: 3, md: 4 }}
                    _hover={{ bg: 'gray.100' }}
                    size='lg'
                  >
                    {isFr ? 'Soumission gratuite' : 'Free quote'}
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Fragment>
  );
}
