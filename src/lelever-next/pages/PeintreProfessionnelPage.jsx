import React, { Fragment, useContext } from 'react';
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
  Icon,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import RecentProjectsSection from '../home-page/RecentProjectsSection';
import SectorsSection from '../home-page/SectorsSection';
import ResourcesSection from '../home-page/ResourcesSection';

export default function PeintreProfessionnelPage() {
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
        name: isFr ? 'Peintres professionnels' : 'Professional Painters',
        item: 'https://leleverdupinceau.ca/peintre-professionnel',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    description: isFr
      ? 'Peintres professionnels à Montréal spécialisés en peinture résidentielle, commerciale, intérieure et extérieure dans tout le Grand Montréal'
      : 'Professional painters in Montreal specialized in residential, commercial, interior and exterior painting throughout Greater Montreal',
    url: 'https://leleverdupinceau.ca/peintre-professionnel',
    telephone: '+14388680772',
    email: 'leleverdupinceau@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2175 Saint-Patrick O',
      addressLocality: 'Montréal',
      addressRegion: 'QC',
      postalCode: 'H3K 1B4',
      addressCountry: 'CA',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Montréal',
      },
      {
        '@type': 'City',
        name: 'Laval',
      },
      {
        '@type': 'City',
        name: 'Longueuil',
      },
      {
        '@type': 'City',
        name: 'Brossard',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: isFr
          ? 'Quel est le délai pour obtenir une soumission ?'
          : 'What is the turnaround time for a quote?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? 'En général sous 24 heures.'
            : 'Generally within 24 hours.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Combien coûte un peintre professionnel à Montréal ?'
          : 'How much does a professional painter cost in Montreal?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? 'Selon le type de surface, la préparation requise et les produits utilisés. Voir notre article sur les prix.'
            : 'Depending on the type of surface, required preparation and products used. See our article on pricing.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Est-ce que vous protégez les surfaces avant de peindre ?'
          : 'Do you protect surfaces before painting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr ? 'Oui, toujours.' : 'Yes, always.',
        },
      },
      {
        '@type': 'Question',
        name: isFr
          ? 'Travaillez-vous sur des projets commerciaux ?'
          : 'Do you work on commercial projects?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: isFr
            ? 'Oui : bureaux, commerces, restaurants, immeubles.'
            : 'Yes: offices, businesses, restaurants, buildings.',
        },
      },
    ],
  };

  const whyChooseProfessional = [
    isFr
      ? 'Une préparation adéquate des surfaces'
      : 'Adequate surface preparation',
    isFr
      ? 'Une application uniforme et durable'
      : 'Uniform and durable application',
    isFr
      ? 'Des produits adaptés (intérieur, extérieur, industriel)'
      : 'Appropriate products (interior, exterior, industrial)',
    isFr
      ? 'Un chantier propre, sécurisé et organisé'
      : 'A clean, secure and organized worksite',
    isFr
      ? 'Une finition soignée sans reprises'
      : 'A careful finish without touch-ups',
  ];

  const processSteps = [
    {
      title: isFr
        ? 'Évaluation rapide et estimation gratuite'
        : 'Quick evaluation and free quote',
      description: isFr
        ? 'Inspection du projet + recommandation des produits appropriés.'
        : 'Project inspection + recommendation of appropriate products.',
    },
    {
      title: isFr
        ? 'Préparation complète des surfaces'
        : 'Complete surface preparation',
      description: isFr
        ? 'Réparation, nettoyage, ponçage, calfeutrage, protection des zones.'
        : 'Repair, cleaning, sanding, caulking, area protection.',
    },
    {
      title: isFr ? 'Application professionnelle' : 'Professional application',
      description: isFr
        ? 'Méthodes précises, produits de qualité et finition uniforme.'
        : 'Precise methods, quality products and uniform finish.',
    },
    {
      title: isFr ? 'Inspection finale' : 'Final inspection',
      description: isFr
        ? 'Nous livrons un résultat impeccable et validé avec vous.'
        : 'We deliver an impeccable result validated with you.',
    },
  ];

  const services = [
    {
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      description: isFr
        ? 'Maisons, condos, logements, multi-étages.'
        : 'Houses, condos, dwellings, multi-story buildings.',
      link: '/services/peinture-residentielle',
    },
    {
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      description: isFr
        ? 'Bureaux, commerces, restaurants, immeubles.'
        : 'Offices, businesses, restaurants, buildings.',
      link: '/services/peinture-commerciale',
    },
    {
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      description: isFr
        ? 'Murs, plafonds, portes, escaliers.'
        : 'Walls, ceilings, doors, stairs.',
      link: '/services/peinture-interieure',
    },
    {
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      description: isFr
        ? 'Revêtements, clôtures, bois, brique, aluminium.'
        : 'Coatings, fences, wood, brick, aluminum.',
      link: '/services/peinture-exterieure',
    },
    {
      title: isFr ? 'Peinture industrielle' : 'Industrial painting',
      description: isFr
        ? 'Entrepôts, usines, bâtiments spécialisés.'
        : 'Warehouses, factories, specialized buildings.',
      link: '/services/peinture-industrielle',
    },
  ];

  const faqs = [
    {
      question: isFr
        ? 'Quel est le délai pour obtenir une soumission ?'
        : 'What is the turnaround time for a quote?',
      answer: isFr
        ? 'En général sous 24 heures.'
        : 'Generally within 24 hours.',
    },
    {
      question: isFr
        ? 'Combien coûte un peintre professionnel à Montréal ?'
        : 'How much does a professional painter cost in Montreal?',
      answer: isFr
        ? 'Selon le type de surface, la préparation requise et les produits utilisés. Voir notre article sur les prix.'
        : 'Depending on the type of surface, required preparation and products used. See our article on pricing.',
      link: isFr
        ? '/blog/prix-peinture-montreal'
        : '/blog/prix-peinture-montreal',
    },
    {
      question: isFr
        ? 'Est-ce que vous protégez les surfaces avant de peindre ?'
        : 'Do you protect surfaces before painting?',
      answer: isFr ? 'Oui, toujours.' : 'Yes, always.',
    },
    {
      question: isFr
        ? 'Travaillez-vous sur des projets commerciaux ?'
        : 'Do you work on commercial projects?',
      answer: isFr
        ? 'Oui : bureaux, commerces, restaurants, immeubles.'
        : 'Yes: offices, businesses, restaurants, buildings.',
    },
  ];

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Peintres professionnels à Montréal – Le Lever du Pinceau'
            : 'Professional Painters in Montreal – Le Lever du Pinceau'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Peintres professionnels à Montréal, Laval et Longueuil. Expertise technique, finition impeccable et service rapide pour tous vos projets de peinture résidentielle, commerciale, intérieure et extérieure.'
              : 'Professional painters in Montreal, Laval and Longueuil. Technical expertise, impeccable finish and fast service for all your residential, commercial, interior and exterior painting projects.'
          }
        />
        <link
          rel='canonical'
          href='https://leleverdupinceau.ca/peintre-professionnel'
        />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type='application/ld+json'>
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 8, md: 12 }}
        >
          <Stack spacing={{ base: 8, md: 12 }}>
            <HStack
              spacing={3}
              fontSize={{ base: 'md', md: 'lg' }}
              color='gray.600'
              mb={{ base: 4, md: 6 }}
            >
              <Link
                href='/new-home'
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
                {isFr ? 'Peintres professionnels' : 'Professional Painters'}
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
                  ? 'Peintres professionnels à Montréal – Le Lever du Pinceau'
                  : 'Professional Painters in Montreal – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='800px'
              >
                {isFr
                  ? 'Chez Le Lever du Pinceau, nos peintres professionnels accompagnent propriétaires, commerces et immeubles dans tous leurs projets de peinture à Montréal, Laval et Longueuil. Nous combinons expertise technique, finition impeccable et service rapide pour offrir des résultats durables et esthétiques. Sur cette page, vous trouverez notre approche professionnelle, les services disponibles, les zones desservies et les réponses essentielles pour choisir le bon peintre. Pour des services résidentiels, commerciaux, intérieurs et extérieurs, vous êtes au bon endroit.'
                  : 'At Le Lever du Pinceau, our professional painters accompany homeowners, businesses and buildings in all their painting projects in Montreal, Laval and Longueuil. We combine technical expertise, impeccable finish and fast service to deliver durable and aesthetic results. On this page, you will find our professional approach, available services, service areas and essential answers to choose the right painter. For residential, commercial, interior and exterior services, you are in the right place.'}
              </Text>
            </Stack>

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Expertise, précision et résultats garantis'
                        : 'Expertise, precision and guaranteed results'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.700'
                    textAlign='center'
                    mb={4}
                  >
                    {isFr
                      ? "Faire appel à un peintre professionnel, c'est obtenir :"
                      : 'Calling on a professional painter means getting:'}
                  </Text>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {whyChooseProfessional.map((point, index) => (
                      <Flex key={index} align='start' gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text
                          color='gray.700'
                          fontSize='md'
                          lineHeight='1.6'
                          textAlign='left'
                        >
                          {point}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    textAlign='center'
                    mt={4}
                  >
                    {isFr
                      ? "Nos peintres sont formés aux meilleures techniques du marché et interviennent dans tous les types d'environnements : maisons, condos, commerces, bureaux, immeubles et bâtiments extérieurs."
                      : 'Our painters are trained in the best market techniques and work in all types of environments: houses, condos, businesses, offices, buildings and exterior structures.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Un processus simple, efficace et orienté qualité'
                        : 'A simple, efficient and quality-oriented process'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 6, md: 8 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {processSteps.map((step, index) => (
                      <Box
                        key={index}
                        p={{ base: 6, md: 8 }}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                      >
                        <Stack spacing={3}>
                          <HStack spacing={3}>
                            <Box
                              bg='#014CC4'
                              color='white'
                              borderRadius='full'
                              w='40px'
                              h='40px'
                              display='flex'
                              alignItems='center'
                              justifyContent='center'
                              fontWeight='bold'
                              fontSize='lg'
                              flexShrink={0}
                            >
                              {index + 1}
                            </Box>
                            <Heading
                              as='h3'
                              fontSize='xl'
                              fontWeight='bold'
                              color='gray.800'
                            >
                              {step.title}
                            </Heading>
                          </HStack>
                          <Text color='gray.600' fontSize='md' lineHeight='1.6'>
                            {step.description}
                          </Text>
                        </Stack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Services offerts par nos peintres professionnels'
                        : 'Services offered by our professional painters'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1200px'
                    mx='auto'
                  >
                    {services.map((service, index) => (
                      <Box
                        key={index}
                        p={{ base: 6, md: 8 }}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        _hover={{
                          borderColor: '#014CC4',
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                        transition='all 0.2s'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                      >
                        <Stack spacing={4} flex={1}>
                          <Heading
                            as='h3'
                            fontSize='xl'
                            fontWeight='bold'
                            color='gray.800'
                          >
                            {service.title}
                          </Heading>
                          <Text
                            color='gray.600'
                            fontSize='md'
                            lineHeight='1.6'
                            flex={1}
                          >
                            {service.description}
                          </Text>
                          <Link
                            href={service.link}
                            _hover={{ textDecoration: 'none' }}
                            color='#014CC4'
                            fontWeight='medium'
                            fontSize='sm'
                            mt='auto'
                          >
                            {isFr ? 'Voir le service' : 'View service'} →
                          </Link>
                        </Stack>
                      </Box>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Nos peintres professionnels se déplacent partout dans le Grand Montréal'
                        : 'Our professional painters travel throughout Greater Montreal'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    textAlign='center'
                    mb={4}
                  >
                    {isFr
                      ? 'Nos équipes interviennent rapidement dans les villes suivantes :'
                      : 'Our teams serve quickly in the following cities:'}
                  </Text>

                  <SectorsSection />

                  <Box textAlign='center' pt={4}>
                    <Link
                      href='/secteurs-desservis'
                      _hover={{ textDecoration: 'none' }}
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
                      >
                        {isFr
                          ? 'Voir toutes les zones desservies'
                          : 'View all service areas'}
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Résultats de peintres professionnels à Montréal'
                        : 'Results from professional painters in Montreal'}
                    </Heading>
                  </Stack>

                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color='gray.600'
                    textAlign='center'
                    mb={4}
                  >
                    {isFr
                      ? 'Nous avons réalisé des centaines de projets résidentiels, commerciaux et extérieurs dans la région. Des avant/après pour chaque type de surface peuvent être ajoutés ici.'
                      : 'We have completed hundreds of residential, commercial and exterior projects in the region. Before/after photos for each type of surface can be added here.'}
                  </Text>
                </Stack>
              </Container>
            </Box>

            <RecentProjectsSection />

            <ResourcesSection />

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Questions fréquentes sur nos peintres professionnels'
                        : 'Frequently asked questions about our professional painters'}
                    </Heading>
                  </Stack>

                  <Stack spacing={4} maxW='800px' mx='auto'>
                    {faqs.map((faq, index) => (
                      <Box
                        key={index}
                        bg='white'
                        p={{ base: 6, md: 8 }}
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                      >
                        <Stack spacing={2}>
                          <Text
                            fontWeight='bold'
                            color='gray.800'
                            fontSize='lg'
                          >
                            {faq.question}
                          </Text>
                          <Text color='gray.600' fontSize='md' lineHeight='1.6'>
                            {faq.answer}
                            {faq.link && (
                              <Link
                                href={faq.link}
                                color='#014CC4'
                                ml={1}
                                _hover={{ textDecoration: 'underline' }}
                              >
                                {isFr
                                  ? 'Voir notre article sur les prix.'
                                  : 'See our article on pricing.'}
                              </Link>
                            )}
                          </Text>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Container>

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
                    ? 'Obtenez votre soumission gratuite'
                    : 'Get your free quote'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Nos peintres professionnels sont disponibles rapidement pour vos projets intérieurs, extérieurs, résidentiels et commerciaux.'
                    : 'Our professional painters are quickly available for your interior, exterior, residential and commercial projects.'}
                </Text>
              </Stack>

              <Box>
                <Link
                  href='/new-home/contact'
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
