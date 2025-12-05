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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import ResourcesSection from '../home-page/ResourcesSection';
import CustomProjectsSection from '../city-pages/CustomProjectsSection';
import ServiceCitiesSectorsSection from './components/ServiceCitiesSectorsSection';

export default function PeintureCommercialePage() {
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
        name: isFr ? 'Peinture commerciale' : 'Commercial painting',
        item: 'https://leleverdupinceau.ca/services/peinture-commerciale',
      },
    ],
  };

  const whyUsContent = isFr
    ? [
        "Planification des travaux en dehors des heures d'ouverture si nécessaire",
        'Protection complète des sols, meubles et équipements',
        'Respect strict des délais et du calendrier convenu',
        'Utilisation de produits adaptés aux environnements commerciaux (faible odeur, séchage rapide, résistance accrue)',
        'Communication claire du début à la fin du projet',
      ]
    : [
        'Planning work outside opening hours if necessary',
        'Complete protection of floors, furniture and equipment',
        'Strict respect of deadlines and agreed schedule',
        'Use of products adapted to commercial environments (low odor, fast drying, increased resistance)',
        'Clear communication from start to finish of the project',
      ];

  const commercialProjects = isFr
    ? [
        {
          id: 1,
          images: [],
          title: 'Rafraîchissement complet de bureaux',
          description:
            "Transformation complète d'espaces de bureaux avec une finition professionnelle et durable. Planification flexible pour minimiser les interruptions.",
        },
        {
          id: 2,
          images: [],
          title: 'Mise à jour de commerces de détail',
          description:
            "Rénovation de commerces avec des couleurs modernes qui reflètent votre image de marque. Travail effectué en dehors des heures d'ouverture.",
        },
        {
          id: 3,
          images: [],
          title: 'Peinture de restaurants et cafés',
          description:
            "Création d'ambiances chaleureuses pour vos établissements avec des finitions résistantes aux taches. Produits adaptés aux environnements alimentaires.",
        },
        {
          id: 4,
          images: [],
          title: 'Rénovation de corridors et espaces communs',
          description:
            "Rafraîchissement des espaces communs d'immeubles avec des produits adaptés au trafic élevé. Finitions durables qui résistent à l'usure quotidienne.",
        },
        {
          id: 5,
          images: [],
          title: "Rafraîchissement d'entrées commerciales et façades",
          description:
            "Amélioration de l'image extérieure de votre commerce avec des finitions durables. Produits résistants aux intempéries et au climat québécois.",
        },
      ]
    : [
        {
          id: 1,
          images: [],
          title: 'Complete office refresh',
          description:
            'Complete transformation of office spaces with professional and durable finish. Flexible planning to minimize interruptions.',
        },
        {
          id: 2,
          images: [],
          title: 'Retail store updates',
          description:
            'Store renovation with modern colors that reflect your brand image. Work done outside opening hours to avoid disrupting your sales.',
        },
        {
          id: 3,
          images: [],
          title: 'Restaurant and café painting',
          description:
            'Creating warm atmospheres for your establishments with finishes resistant to stains. Products adapted to food environments.',
        },
        {
          id: 4,
          images: [],
          title: 'Corridor and common area renovation',
          description:
            'Refreshing building common areas with products adapted to high traffic. Durable finishes that resist daily wear.',
        },
        {
          id: 5,
          images: [],
          title: 'Commercial entrance and facade refresh',
          description:
            'Improving the exterior image of your business with durable finishes. Products resistant to weather and Quebec climate.',
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
            ? 'Peinture commerciale – Le Lever du Pinceau | Services professionnels pour entreprises'
            : 'Commercial painting – Le Lever du Pinceau | Professional services for businesses'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Le Lever du Pinceau offre des services de peinture commerciale pour bureaux, commerces, restaurants et immeubles dans le Grand Montréal. Peintres professionnels, planification efficace, finition durable.'
              : 'Le Lever du Pinceau offers commercial painting services for offices, stores, restaurants and buildings in Greater Montreal. Professional painters, efficient planning, durable finish.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/services/peinture-commerciale'
        />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
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
                {isFr ? 'Peinture commerciale' : 'Commercial painting'}
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
                  ? 'Peinture commerciale – Le Lever du Pinceau'
                  : 'Commercial painting – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='900px'
              >
                {isFr
                  ? "La peinture commerciale demande une organisation efficace, des délais respectés et un résultat professionnel qui renforce l'image de votre entreprise. Le Lever du Pinceau accompagne commerces, bureaux, restaurants, cliniques, immeubles et bâtiments commerciaux dans tout le Grand Montréal. Nos peintres professionnels planifient les travaux pour minimiser l'impact sur vos opérations, tout en livrant une finition propre, durable et adaptée à votre environnement. Pour rafraîchir vos locaux, moderniser votre espace client ou rénover un immeuble complet, notre équipe de peinture commerciale est prête à intervenir."
                  : "Commercial painting requires efficient organization, respected deadlines and a professional result that strengthens your company's image. Le Lever du Pinceau accompanies stores, offices, restaurants, clinics, buildings and commercial buildings throughout Greater Montreal. Our professional painters plan the work to minimize the impact on your operations, while delivering a clean, durable finish adapted to your environment. To refresh your premises, modernize your customer space or renovate a complete building, our commercial painting team is ready to intervene."}
              </Text>
            </Stack>

            {/* Section 1 — Pourquoi choisir notre service */}
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
                        ? 'Une équipe organisée pour vos espaces commerciaux'
                        : 'An organized team for your commercial spaces'}
                    </Heading>
                    <Text
                      fontSize={{ base: 'md', md: 'lg' }}
                      color='gray.600'
                      lineHeight='1.7'
                    >
                      {isFr
                        ? 'Nous adaptons nos interventions à la réalité des entreprises :'
                        : 'We adapt our interventions to the reality of businesses:'}
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
                      ? "Nous intervenons dans : bureaux, commerces de détail, restaurants, cabinets, cliniques, centres de services, espaces communs d'immeubles, etc."
                      : 'We work in: offices, retail stores, restaurants, practices, clinics, service centers, common areas of buildings, etc.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            {/* Section 2 — Sous-services */}
            <Box py={{ base: 12, md: 16 }} mb={{ base: 8, md: 12 }}>
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
                        ? 'Peinture commerciale intérieure et extérieure'
                        : 'Interior and exterior commercial painting'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 6, md: 8 }}
                    maxW='800px'
                  >
                    <Link
                      as={RouterLink}
                      to='/services/peinture-commerciale/interieure'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={6}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                        _hover={{
                          borderColor: '#014CC4',
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                        transition='all 0.2s'
                      >
                        <Stack spacing={3} flex={1}>
                          <Heading
                            as='h3'
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.800'
                          >
                            {isFr
                              ? 'Peinture commerciale intérieure'
                              : 'Interior commercial painting'}
                          </Heading>
                          <Text fontSize='md' color='gray.600' lineHeight='1.6'>
                            {isFr
                              ? "Bureaux, salles de réunion, espaces clients, corridors, cages d'escaliers."
                              : 'Offices, meeting rooms, customer spaces, corridors, stairwells.'}
                          </Text>
                          <HStack spacing={2} color='#014CC4' mt='auto'>
                            <Text fontSize='sm' fontWeight='medium'>
                              {isFr ? 'Voir la page' : 'View page'}
                            </Text>
                            <ArrowForwardIcon boxSize={4} />
                          </HStack>
                        </Stack>
                      </Box>
                    </Link>

                    <Link
                      as={RouterLink}
                      to='/services/peinture-commerciale/exterieure'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={6}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                        _hover={{
                          borderColor: '#014CC4',
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                        transition='all 0.2s'
                      >
                        <Stack spacing={3} flex={1}>
                          <Heading
                            as='h3'
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.800'
                          >
                            {isFr
                              ? 'Peinture commerciale extérieure'
                              : 'Exterior commercial painting'}
                          </Heading>
                          <Text fontSize='md' color='gray.600' lineHeight='1.6'>
                            {isFr
                              ? 'Façades, entrées commerciales, structures extérieures, enseignes, revêtements.'
                              : 'Facades, commercial entrances, exterior structures, signs, coatings.'}
                          </Text>
                          <HStack spacing={2} color='#014CC4' mt='auto'>
                            <Text fontSize='sm' fontWeight='medium'>
                              {isFr ? 'Voir la page' : 'View page'}
                            </Text>
                            <ArrowForwardIcon boxSize={4} />
                          </HStack>
                        </Stack>
                      </Box>
                    </Link>
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            {/* Section 3 — Peinture commerciale par ville */}
            <ServiceCitiesSectorsSection
              title={
                isFr
                  ? 'Peinture commerciale dans votre ville'
                  : 'Commercial painting in your city'
              }
              serviceName={
                isFr ? 'Peinture commerciale' : 'Commercial painting'
              }
              serviceSlug='peinture-commerciale'
              cities={cities}
            />

            {/* Section 4 — Exemples de projets */}
            <CustomProjectsSection
              title={
                isFr
                  ? 'Réalisations en peinture commerciale'
                  : 'Commercial painting achievements'
              }
              subtitle={
                isFr
                  ? 'Exemples de projets réalisés :'
                  : 'Examples of completed projects:'
              }
              projects={commercialProjects}
            />

            {/* Section 5 — À propos de nos peintres professionnels */}
            <Box
              py={{ base: 12, md: 16 }}
              bg='gray.50'
              borderRadius='xl'
              mb={{ base: 8, md: 12 }}
            >
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6} textAlign='left'>
                  <Heading
                    as='h2'
                    fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                    fontWeight='bold'
                    color='gray.800'
                  >
                    {isFr
                      ? 'Des peintres commerciaux expérimentés'
                      : 'Experienced commercial painters'}
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    lineHeight='1.7'
                  >
                    {isFr
                      ? "Nos peintres professionnels ont l'habitude de travailler dans des environnements commerciaux, avec des contraintes de temps, d'image de marque et d'achalandage."
                      : 'Our professional painters are used to working in commercial environments, with time constraints, brand image and traffic.'}
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

            <ResourcesSection />
          </Stack>
        </Container>

        {/* Section 7 — CTA final */}
        <Box
          w='100%'
          py={{ base: 12, md: 16 }}
          bg='#014CC4'
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
                    ? 'Obtenez une soumission pour votre projet commercial'
                    : 'Get a quote for your commercial project'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Que ce soit pour des bureaux, un commerce, un restaurant ou un immeuble, nous vous proposons une estimation claire et un plan de travail adapté.'
                    : "Whether it's for offices, a store, a restaurant or a building, we offer you a clear estimate and an adapted work plan."}
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
                    color='#014CC4'
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
