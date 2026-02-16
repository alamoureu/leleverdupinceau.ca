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
  Flex,
  Grid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../home-page/SectorsSection';
import heroImage from '../images/hero/service-hero.png';
// Only from Page peinture industrielle folder
import imgInd1 from '../images/2-services/Page peinture industrielle/1. réalisations/IMG_6752.PNG';
import imgInd2 from '../images/2-services/Page peinture industrielle/2. réalisations/IMG_6757.PNG';
import imgInd3 from '../images/2-services/Page peinture industrielle/3. réalisations/IMG_5978.PNG';
// Header image removed as per folder structure rule

export default function PeintureIndustriellePage() {
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
        name: isFr ? 'Services' : 'Services',
        item: 'https://leleverdupinceau.ca/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isFr ? 'Peinture industrielle' : 'Industrial painting',
        item: 'https://leleverdupinceau.ca/services/peinture-industrielle',
      },
    ],
  };

  const whyUsContent = isFr
    ? [
      "Résistance aux chocs, à l'humidité et aux produits chimiques",
      'Protection anticorrosion (revêtements spécialisés)',
      'Produits à faible odeur ou à séchage rapide selon le site',
      "Application conforme aux normes d'environnement industriel",
      'Sécurité renforcée sur le chantier',
      'Équipe formée pour environnements complexes',
    ]
    : [
      'Resistance to shocks, humidity and chemicals',
      'Anti-corrosion protection (specialized coatings)',
      'Low odor or fast drying products depending on the site',
      'Application compliant with industrial environment standards',
      'Enhanced safety on site',
      'Team trained for complex environments',
    ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peinture industrielle – Le Lever du Pinceau | Services professionnels pour industries'
            : 'Industrial painting – Le Lever du Pinceau | Professional services for industries'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture industrielle pour usines, entrepôts, centres logistiques et bâtiments industriels dans le Grand Montréal. Revêtements résistants, protection anticorrosion, équipe formée.'
              : 'Le Lever du Pinceau offers industrial painting services for factories, warehouses, logistics centers and industrial buildings in Greater Montreal. Resistant coatings, anti-corrosion protection, trained team.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/services/peinture-industrielle'
        />
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
          <Grid
            templateColumns="1fr"
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
                <Link
                  as={RouterLink}
                  to='/services'
                  _hover={{ textDecoration: 'underline' }}
                  color='gray.600'
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Services' : 'Services'}
                </Link>
                <Text fontSize={{ base: 'md', md: 'lg' }}>›</Text>
                <Text
                  color='gray.800'
                  fontWeight='medium'
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  {isFr ? 'Peinture industrielle' : 'Industrial painting'}
                </Text>
              </HStack>
              <Stack spacing={4} textAlign='left'>
                <Heading
                  as='h1'
                  fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                  fontWeight='bold'
                  color='gray.800'
                >
                  {isFr
                    ? 'Peinture industrielle – Le Lever du Pinceau'
                    : 'Industrial painting – Le Lever du Pinceau'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  maxW='900px'
                >
                  {isFr
                    ? 'La peinture industrielle requiert des produits robustes, une préparation rigoureuse et des techniques adaptées aux environnements exigeants. Le Lever du Pinceau intervient dans les usines, entrepôts, centres logistiques, bâtiments industriels et équipements spécialisés à Montréal, Laval, Longueuil et Brossard.'
                    : 'Industrial painting requires robust products, rigorous preparation and techniques adapted to demanding environments. Le Lever du Pinceau works in factories, warehouses, logistics centers, industrial buildings and specialized equipment in Montreal, Laval, Longueuil and Brossard.'}
                </Text>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='gray.600'
                  lineHeight='1.7'
                  maxW='900px'
                  mt={2}
                  fontWeight='medium'
                >
                  {isFr
                    ? '👉 Nos peintres professionnels utilisent des revêtements industriels résistants, adaptés aux surfaces métalliques, béton, acier, structures extérieures et environnements à forte circulation. Pour protéger vos surfaces industrielles et améliorer la durabilité de vos installations, notre équipe est prête à intervenir rapidement.'
                    : '👉 Our professional painters use resistant industrial coatings, adapted to metal surfaces, concrete, steel, exterior structures and high-traffic environments. To protect your industrial surfaces and improve the durability of your installations, our team is ready to intervene quickly.'}
                </Text>
              </Stack>
            </Stack>
          </Grid>
          <Stack spacing={0}>

            {/* Section 1 — Pourquoi choisir notre service industriel */}
            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg='gray.50'
              borderRadius='xl'
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='left'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Résistance, durabilité et conformité industrielle'
                        : 'Resistance, durability and industrial compliance'}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                    >
                      {isFr
                        ? 'Nos services de peinture industrielle sont conçus pour offrir :'
                        : 'Our industrial painting services are designed to offer:'}
                    </Text>
                  </Stack>

                  <Stack spacing={3}>
                    {whyUsContent.map((item, index) => (
                      <Flex
                        key={index}
                        align='start'
                        gap={4}
                        p={4}
                        bg='white'
                        borderRadius='lg'
                        border='1px solid'
                        borderColor='gray.200'
                        _hover={{
                          borderColor: 'brand.500',
                          boxShadow: 'sm',
                          transform: 'translateX(4px)',
                        }}
                        transition='all 0.2s ease'
                      >
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='brand.500'
                          boxSize={5}
                          mt={0.5}
                          flexShrink={0}
                        />
                        <Text
                          fontSize='md'
                          color='gray.700'
                          lineHeight='1.6'
                          fontWeight='500'
                          textAlign='left'
                        >
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                    mt={4}
                  >
                    {isFr
                      ? 'Nous travaillons sur des bâtiments, planchers industriels, poutres, structures métalliques, équipements, conduits, docks et aires de chargement.'
                      : 'We work on buildings, industrial floors, beams, metal structures, equipment, ducts, docks and loading areas.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            {/* Section 2 — Peinture industrielle par ville */}
            <SectorsSection
              title={
                isFr
                  ? 'Disponible dans toutes les zones industrielles du Grand Montréal'
                  : 'Available in all industrial areas of Greater Montreal'
              }
              sectors={[
                {
                  name: 'Montréal',
                  link: '/services/peinture-industrielle/montreal',
                  image: montrealSecteur,
                },
                {
                  name: 'Laval',
                  link: '/services/peinture-industrielle/laval',
                  image: lavalSecteur,
                },
                {
                  name: 'Longueuil',
                  link: '/services/peinture-industrielle/longueuil',
                  image: longueuilSecteur,
                },
                {
                  name: 'Brossard',
                  link: '/services/peinture-industrielle/brossard',
                  image: brossardSecteur,
                },
              ]}
            />

            {/* Section 4 — Exemples de projets industriels */}
            <Box mt={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6}>
                  <Stack spacing={3} textAlign='left'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Projets industriels réalisés'
                        : 'Completed industrial projects'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={4}
                    maxW='1200px'
                  >
                    {[
                      { src: imgInd1, alt: isFr ? 'Peinture de la tôle et teinture de la brique de cette usine sur la rive nord' : 'Painting of the metal siding and brick staining of this factory on the North Shore' },
                      { src: imgInd2, alt: isFr ? 'Peinture des murs et du steel deck de ce local industriel dans Montréal-Est' : 'Painting of the walls and steel deck of this industrial space in Montreal East' },
                      { src: imgInd3, alt: isFr ? 'Peinture du steel deck de cette usine dans le Sud Ouest de l\'île' : 'Painting of the steel deck of this factory in the Southwest of the island' },
                    ].map((img, index) => (
                      <Stack key={index} spacing={2}>
                        <Image
                          src={img.src}
                          alt={img.alt}
                          borderRadius='lg'
                          w='100%'
                          h={{ base: '200px', md: '250px' }}
                          objectFit='cover'
                        />
                        <Text fontSize="sm" color="gray.600" lineHeight="1.5" textAlign="left">
                          {img.alt}
                        </Text>
                      </Stack>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            {/* Section 5 — Guides & ressources */}
            <ResourcesSection
              title={
                isFr
                  ? 'Conseils pour projets industriels'
                  : 'Tips for industrial projects'
              }
            />

            {/* Section 6 — À propos de nos peintres professionnels */}
            <Box
              py={{ base: 12, md: 16, lg: 20 }}
              bg='gray.50'
              borderRadius='xl'
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6} textAlign='center' align='center'>
                  <Heading
                    as='h2'
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight='bold'
                    color='gray.800'
                  >
                    {isFr
                      ? 'Une équipe formée pour les environnements industriels'
                      : 'A team trained for industrial environments'}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                  >
                    {isFr
                      ? 'Nos peintres industriels sont formés pour travailler dans des environnements techniques, avec des risques spécifiques (hauteur, machinerie, matériaux spécialisés).'
                      : 'Our industrial painters are trained to work in technical environments, with specific risks (height, machinery, specialized materials).'}
                  </Text>
                  <Link
                    as={RouterLink}
                    to='/peintre-professionnel'
                    _hover={{ textDecoration: 'none' }}
                    w={{ base: '100%', md: 'auto' }}
                  >
                    <Button
                      rightIcon={<ArrowForwardIcon />}
                      variant='outline'
                      borderColor='brand.500'
                      color='brand.500'
                      borderRadius='full'
                      fontSize={{ base: 'sm', md: 'md' }}
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
              </Container>
            </Box>
          </Stack>
        </Container>

        {/* Section 7 — CTA final */}
        <Box
          w='100%'
          py={{ base: 12, md: 16, lg: 20 }}
          bg='brand.700'
          mt={{ base: 8, md: 12 }}
        >
          <Container maxW='1440px' px={{ base: 4, md: 6 }}>
            <Stack spacing={8} textAlign='center'>
              <Stack spacing={3}>
                <Heading
                  as='h2'
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight='bold'
                  color='white'
                >
                  {isFr
                    ? 'Obtenez une soumission pour votre projet industriel'
                    : 'Get a quote for your industrial project'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Nous offrons des solutions adaptées aux besoins industriels : durabilité, sécurité et efficacité.'
                    : 'We offer solutions adapted to industrial needs: durability, safety and efficiency.'}
                </Text>
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
                    fontSize={{ base: 'sm', md: 'md' }}
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
