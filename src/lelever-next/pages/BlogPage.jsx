import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Link,
  Button,
  HStack,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import heroImage from '../images/1-page-principale/blog hub/Peinture extérieure/IMG_6753.PNG';
import ResourcesSection from '../home-page/ResourcesSection';

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
    },
    {
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      link: '/services/peinture-commerciale',
    },
    {
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      link: '/services/peinture-interieure',
    },
    {
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      link: '/services/peinture-exterieure',
    },
    {
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      link: '/services/peinture-industrielle',
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Blog – Conseils et ressources sur la peinture | Le Lever du Pinceau'
            : 'Blog – Painting Tips and Resources | Le Lever du Pinceau'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? "Découvrez nos guides pratiques, conseils d'entretien et astuces pour réussir vos projets de peinture résidentielle, commerciale, intérieure ou extérieure. Articles rédigés par des peintres professionnels."
              : 'Discover our practical guides, maintenance tips and tricks to succeed in your residential, commercial, interior or exterior painting projects. Articles written by professional painters.'
          }
        />
        <link rel='canonical' href='https://leleverdupinceau.ca/blog' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 12, md: 16, lg: 20 }}
        >
          <Stack spacing={0}>
            <HStack
              spacing={3}
              textStyle='bodyLarge'
              color='gray.600'
              mb={{ base: 4, md: 6 }}
            >
              <Link href='/' _hover={{ textDecoration: 'underline' }} color='gray.600' textStyle='bodyLarge'>
                {isFr ? 'Accueil' : 'Home'}
              </Link>
              <Text textStyle='bodyLarge'>›</Text>
              <Text color='gray.800' fontWeight='medium' textStyle='bodyLarge'>
                {isFr ? 'Blog' : 'Blog'}
              </Text>
            </HStack>

            <Stack spacing={{ base: 4, md: 6 }} textAlign='left' mb={{ base: 12, md: 16 }}>
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
                          ? 'En savoir plus sur nos peintres professionnels'
                          : 'Learn more about our professional painters'}
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

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1200px'
                    mx='auto'
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          p={{ base: 6, md: 8 }}
                          bg='white'
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          textAlign='center'
                          _hover={{
                            borderColor: 'brand.500',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={3} align='center'>
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
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Container>

        <Box
          w='100%'
          py={{ base: 12, md: 16, lg: 20 }}
          bg='brand.700'
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
                    color='brand.700'
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
