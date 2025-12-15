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
  Icon,
  Image,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import CustomProjectsSection from '../city-pages/CustomProjectsSection';
import ResourcesSection from '../home-page/ResourcesSection';
import SectorsSection, {
  montrealSecteur,
  lavalSecteur,
  longueuilSecteur,
  brossardSecteur,
} from '../home-page/SectorsSection';
import img5969 from '../images/before_after/IMG_5969.jpg';
import img5970 from '../images/before_after/IMG_5970.jpg';
import img5971 from '../images/before_after/IMG_5971.jpg';
import img5972 from '../images/before_after/IMG_5972.jpg';
import img5973 from '../images/before_after/IMG_5973.jpg';
import img5974 from '../images/before_after/IMG_5974.jpg';

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

  const industrialProjects = isFr
    ? [
      {
        id: 1,
        images: [],
        title: 'Protection anticorrosive de structures métalliques',
        description:
          'Application de revêtements spécialisés pour protéger les structures métalliques contre la corrosion. Traitement de surfaces en acier, poutres et équipements industriels.',
      },
      {
        id: 2,
        images: [],
        title: 'Peinture de planchers industriels haute résistance',
        description:
          'Revêtement de planchers en béton avec des produits époxy ou polyuréthane résistants aux charges lourdes. Finition durable pour entrepôts et usines.',
      },
      {
        id: 3,
        images: [],
        title: "Rafraîchissement intérieur d'entrepôts",
        description:
          "Peinture complète d'entrepôts et centres logistiques avec des produits adaptés aux grandes surfaces. Planification efficace pour minimiser les interruptions.",
      },
      {
        id: 4,
        images: [],
        title: "Peinture extérieure d'usines",
        description:
          'Rénovation de façades industrielles avec des revêtements résistants aux intempéries. Protection contre les éléments.',
      },
      {
        id: 5,
        images: [],
        title: 'Revêtement spécialisé pour conduits et poutres',
        description:
          'Peinture de conduits de ventilation, poutres métalliques et structures complexes. Amélioration de la sécurité et de la durabilité.',
      },
    ]
    : [
      {
        id: 1,
        images: [],
        title: 'Anti-corrosion protection of metal structures',
        description:
          'Application of specialized coatings to protect metal structures against corrosion. Treatment of steel surfaces, beams and industrial equipment.',
      },
      {
        id: 2,
        images: [],
        title: 'High resistance industrial floor painting',
        description:
          'Concrete floor coating with epoxy or polyurethane products resistant to heavy loads. Durable finish for warehouses and factories.',
      },
      {
        id: 3,
        images: [],
        title: 'Interior warehouse refresh',
        description:
          'Complete painting of warehouses and logistics centers with products adapted to large surfaces. Efficient planning to minimize interruptions.',
      },
      {
        id: 4,
        images: [],
        title: 'Factory exterior painting',
        description:
          'Industrial facade renovation with weather-resistant coatings. Protection against the elements.',
      },
      {
        id: 5,
        images: [],
        title: 'Specialized coating for ducts and beams',
        description:
          'Painting of ventilation ducts, metal beams and complex structures. Improvement of safety and durability.',
      },
    ];

  const cities = [
    { name: isFr ? 'Montréal' : 'Montreal', slug: 'montreal' },
    { name: 'Laval', slug: 'laval' },
    { name: 'Longueuil', slug: 'longueuil' },
    { name: 'Brossard', slug: 'brossard' },
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
        <meta name='robots' content='noindex, nofollow' />
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
          pt={{ base: 8, md: 12 }}
        >
          <Stack spacing={0}>
            {/* Breadcrumb */}
            <HStack
              spacing={3}
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
            >
              <Link
                as={RouterLink}
                to='/new-home'
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

            {/* H1 et Introduction */}
            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
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

            {/* Images Section */}
            <Box mb={{ base: 12, md: 16 }}>
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3 }}
                spacing={4}
                maxW='1200px'
              >
                {[
                  { src: img5969, alt: 'Projet industriel 1' },
                  { src: img5970, alt: 'Projet industriel 2' },
                  { src: img5971, alt: 'Projet industriel 3' },
                  { src: img5972, alt: 'Projet industriel 4' },
                  { src: img5973, alt: 'Projet industriel 5' },
                  { src: img5974, alt: 'Projet industriel 6' },
                ].map((img, index) => (
                  <Image
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    borderRadius='lg'
                    w='100%'
                    h={{ base: '200px', md: '250px' }}
                    objectFit='cover'
                  />
                ))}
              </SimpleGrid>
            </Box>

            {/* Section 1 — Pourquoi choisir notre service industriel */}
            <Box
              py={{ base: 12, md: 16 }}
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
                          borderColor: '#014CC4',
                          boxShadow: 'sm',
                          transform: 'translateX(4px)',
                        }}
                        transition='all 0.2s ease'
                      >
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
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


            {/* Section 3 — Peinture industrielle par ville */}
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
            <CustomProjectsSection
              title={
                isFr
                  ? 'Projets industriels réalisés'
                  : 'Completed industrial projects'
              }
              subtitle={
                isFr
                  ? 'Exemples de projets industriels :'
                  : 'Examples of industrial projects:'
              }
              projects={industrialProjects}
            />

            <ResourcesSection />

            {/* Section 5 — À propos de nos peintres professionnels */}
            <Box
              py={{ base: 12, md: 16 }}
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
                      borderColor='#014CC4'
                      color='#014CC4'
                      borderRadius='full'
                      fontSize={{ base: 'sm', md: 'md' }}
                      px={{ base: 5, md: 7 }}
                      py={{ base: 3, md: 4 }}
                      _hover={{ bg: '#014CC4', color: 'white' }}
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
          py={{ base: 12, md: 16 }}
          bg='#022A68'
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
                    color='#022A68'
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
