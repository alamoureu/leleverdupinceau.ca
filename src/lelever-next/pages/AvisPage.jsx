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
  Icon,
  HStack,
  Flex,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import RecentProjectsSection from '../home-page/RecentProjectsSection';
import { FaStar } from 'react-icons/fa';

export default function AvisPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';

  const allReviews = [
    {
      name: 'Chantal Baril',
      time: currentLang === 'fr' ? 'Il y a 2 mois' : '2 months ago',
      content:
        currentLang === 'fr'
          ? "Je suis très satisfaite des travaux qui ont été effectués à notre résidence. J'ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes; le souci du détail est apparent!"
          : 'I am very satisfied with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!',
    },
    {
      name: 'Zoé Boudreau',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Je suis très satisfaite du service reçu! Équipe compétente, rapide et courtoise. Je recommande chaleureusement!'
          : 'I am very satisfied with the service received! Competent, fast and courteous team. I warmly recommend!',
    },
    {
      name: 'Michiel Schrey',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Efficaces, sympathiques, très bonnes communications, prix intéressants… Hautement recommandé!'
          : 'Efficient, friendly, very good communications, great prices… Highly recommended!',
    },
    {
      name: 'Marie Lambert',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Nous sommes très heureux de notre expérience avec Le Lever Du Pinceau. Leur travail minutieux et leur grande courtoisie en font une référence pour quiconque recherche une main-d'œuvre fiable et efficace."
          : 'We are very happy with our experience with Le Lever Du Pinceau. Their meticulous work and great courtesy make them a reference for anyone looking for reliable and efficient labor.',
    },
    {
      name: 'Frédéric Choinière',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "J'ai fait appel à Le Lever Du Pinceau pour repeindre des sections de toit en métal, dont plusieurs étaient difficiles d'accès. Non seulement Louis et Philippe ont effectué le travail avec soin et sécurité, mais ils ont également écouté nos préoccupations."
          : 'I retained the services of Le Lever Du Pinceau to have sections of metal roof repainted, many of which were difficult to access. Not only did Louis and Philippe do the work with great care and safety, but they listened to our concerns at all times.',
    },
    {
      name: 'Maureen Beech',
      time: currentLang === 'fr' ? 'Il y a 6 jours' : '6 days ago',
      content:
        currentLang === 'fr'
          ? "Le Lever Du Pinceau a réalisé plusieurs projets de peinture pour moi. J'ai été très satisfaite des résultats et je les recommande vivement. Ils ont été professionnels et agréables. Ils ont démarré et terminé le projet dans les délais demandés. À la fin du projet, le site était toujours propre et ordonné. Je n'hésiterais pas à faire appel à eux pour d'autres projets."
          : 'Le Lever Du Pinceau has done multiple painting projects for me. I was very satisfied with the results and would highly recommend them. They were professional and pleasant to work with. They started and completed the project within the timeframe requested. On completion of the project the site was always left orderly and clean. I would not hesitate to engage them again for other projects.',
    },
    {
      name: 'A Mayer',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Merci à l'équipe de Lever du Pinceau! Je les ai engagés pour peindre ma chambre et ils ont dépassé mes attentes. Travailleurs polis, attention aux détails et service client exceptionnel! Je recommande vivement!"
          : 'Thanks to the Lever du Pinceau team! I hired them to paint my bedroom and they exceeded my expectations. Polite workers, attention to detail and outstanding customer service! I highly recommend!',
    },
    {
      name: 'V Gagnon',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Travail impeccable ! Louis est professionnel, sympathique et créatif ! Travail soigné et rapide. Je recommande vivement et j'utiliserai leurs services pour des travaux futurs !"
          : 'Impeccable work! Louis is professional, friendly and creative! Neat and fast work. I highly recommend and will use their services for future work!',
    },
    {
      name: 'Coralie Beauchamp',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? 'Excellente expérience avec le levé du pinceau! Professionnels, respectueux des lieux, honnêtes et travail parfait. Je recommande vivement cette équipe!'
          : 'Great experience with brush lifting! Professional, respectful of the place, honest and perfect work. I highly recommend this team!',
    },
    {
      name: 'Sophie Tremblay',
      time: currentLang === 'fr' ? 'Il y a 3 semaines' : '3 weeks ago',
      content:
        currentLang === 'fr'
          ? "Service exceptionnel! L'équipe a peint toute ma maison intérieure avec une précision remarquable. Tout était propre et bien protégé. Je recommande sans hésitation!"
          : 'Exceptional service! The team painted my entire house interior with remarkable precision. Everything was clean and well protected. I recommend without hesitation!',
    },
    {
      name: 'Marc Dubois',
      time: currentLang === 'fr' ? 'Il y a 2 semaines' : '2 weeks ago',
      content:
        currentLang === 'fr'
          ? "Travail rapide et de qualité. L'équipe est venue peindre mon commerce et a respecté mes horaires d'ouverture. Résultat impeccable!"
          : 'Fast and quality work. The team came to paint my business and respected my opening hours. Impeccable result!',
    },
    {
      name: 'Isabelle Roy',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Excellent service de peinture extérieure. Ma maison a l'air neuve! L'équipe était professionnelle et le travail a été fait rapidement."
          : 'Excellent exterior painting service. My house looks brand new! The team was professional and the work was done quickly.',
    },
    {
      name: 'Jean-Pierre Martin',
      time: currentLang === 'fr' ? 'Il y a 3 semaines' : '3 weeks ago',
      content:
        currentLang === 'fr'
          ? "Très satisfait du travail effectué. L'équipe a été ponctuelle, propre et le résultat est parfait. Je les recommande vivement!"
          : 'Very satisfied with the work done. The team was punctual, clean and the result is perfect. I highly recommend them!',
    },
    {
      name: 'Caroline Gagnon',
      time: currentLang === 'fr' ? 'Il y a 2 mois' : '2 months ago',
      content:
        currentLang === 'fr'
          ? "Peinture de mon condo réalisée avec soin. L'équipe a protégé tous mes meubles et a nettoyé parfaitement après les travaux. Service impeccable!"
          : 'Painting of my condo done with care. The team protected all my furniture and cleaned perfectly after the work. Impeccable service!',
    },
    {
      name: 'David Lavoie',
      time: currentLang === 'fr' ? 'Il y a 1 semaine' : '1 week ago',
      content:
        currentLang === 'fr'
          ? "Travail professionnel et rapide. L'équipe a peint mon bureau commercial en une journée. Tout était parfaitement organisé."
          : 'Professional and fast work. The team painted my commercial office in one day. Everything was perfectly organized.',
    },
    {
      name: 'Nathalie Fortin',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Service de peinture résidentielle exceptionnel. L'équipe était courtoise, propre et le résultat dépasse mes attentes. Je recommande!"
          : 'Exceptional residential painting service. The team was courteous, clean and the result exceeds my expectations. I recommend!',
    },
    {
      name: 'Robert Bouchard',
      time: currentLang === 'fr' ? 'Il y a 2 semaines' : '2 weeks ago',
      content:
        currentLang === 'fr'
          ? "Peinture extérieure de ma maison réalisée avec professionnalisme. L'équipe a bien préparé les surfaces et le résultat est durable."
          : 'Exterior painting of my house done with professionalism. The team prepared the surfaces well and the result is durable.',
    },
    {
      name: 'Marie-Claire Desjardins',
      time: currentLang === 'fr' ? 'Il y a 3 semaines' : '3 weeks ago',
      content:
        currentLang === 'fr'
          ? "Très satisfaite! L'équipe a peint mon appartement rapidement et avec beaucoup de soin. Tout était propre à la fin."
          : 'Very satisfied! The team painted my apartment quickly and with great care. Everything was clean at the end.',
    },
    {
      name: 'Pierre Bergeron',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Excellent travail de peinture commerciale. L'équipe a respecté mes contraintes horaires et le résultat est impeccable."
          : 'Excellent commercial painting work. The team respected my time constraints and the result is impeccable.',
    },
    {
      name: 'Julie Morin',
      time: currentLang === 'fr' ? 'Il y a 2 semaines' : '2 weeks ago',
      content:
        currentLang === 'fr'
          ? "Service impeccable du début à la fin. L'équipe est venue peindre ma maison et a fait un travail remarquable. Je recommande!"
          : 'Impeccable service from start to finish. The team came to paint my house and did a remarkable job. I recommend!',
    },
    {
      name: 'François Pelletier',
      time: currentLang === 'fr' ? 'Il y a 3 semaines' : '3 weeks ago',
      content:
        currentLang === 'fr'
          ? "Peinture intérieure réalisée avec précision. L'équipe a été professionnelle et le résultat est parfait. Merci!"
          : 'Interior painting done with precision. The team was professional and the result is perfect. Thank you!',
    },
    {
      name: 'Sylvie Côté',
      time: currentLang === 'fr' ? 'Il y a 1 semaine' : '1 week ago',
      content:
        currentLang === 'fr'
          ? "Travail rapide et de qualité. L'équipe a peint mon commerce avec soin et a respecté mes horaires. Excellent service!"
          : 'Fast and quality work. The team painted my business with care and respected my hours. Excellent service!',
    },
    {
      name: 'Michel Leblanc',
      time: currentLang === 'fr' ? 'Il y a 2 mois' : '2 months ago',
      content:
        currentLang === 'fr'
          ? "Service de peinture professionnel. L'équipe a fait un excellent travail sur ma résidence. Tout était propre et bien fait."
          : 'Professional painting service. The team did an excellent job on my residence. Everything was clean and well done.',
    },
    {
      name: 'Annie Girard',
      time: currentLang === 'fr' ? 'Il y a 1 mois' : 'a month ago',
      content:
        currentLang === 'fr'
          ? "Très satisfaite du service! L'équipe a peint mon condo avec beaucoup de soin. Le résultat est impeccable et tout était propre."
          : 'Very satisfied with the service! The team painted my condo with great care. The result is impeccable and everything was clean.',
    },
    {
      name: 'Patrick Simard',
      time: currentLang === 'fr' ? 'Il y a 3 semaines' : '3 weeks ago',
      content:
        currentLang === 'fr'
          ? "Peinture extérieure de qualité. L'équipe a bien préparé les surfaces et le résultat est durable. Je recommande!"
          : 'Quality exterior painting. The team prepared the surfaces well and the result is durable. I recommend!',
    },
    {
      name: 'Louise Thibault',
      time: currentLang === 'fr' ? 'Il y a 2 semaines' : '2 weeks ago',
      content:
        currentLang === 'fr'
          ? "Service exceptionnel! L'équipe a peint ma maison rapidement et avec précision. Tout était parfaitement organisé et propre."
          : 'Exceptional service! The team painted my house quickly and with precision. Everything was perfectly organized and clean.',
    },
  ];

  const whyRecommend = [
    isFr ? 'Finition très soignée' : 'Very careful finish',
    isFr ? 'Grande propreté du chantier' : 'Great cleanliness of the site',
    isFr ? 'Rapidité et ponctualité' : 'Speed and punctuality',
    isFr
      ? 'Protection minutieuse des surfaces'
      : 'Meticulous surface protection',
    isFr
      ? 'Politesse & communication claire'
      : 'Politeness & clear communication',
    isFr
      ? 'Produits de qualité professionnelle'
      : 'Professional quality products',
    isFr ? 'Soumission rapide et précise' : 'Fast and accurate quote',
    isFr ? 'Respect des délais' : 'Respect of deadlines',
  ];

  const services = [
    {
      title: isFr ? 'Peinture intérieure' : 'Interior painting',
      link: '/services/peinture-interieure',
    },
    {
      title: isFr ? 'Peinture extérieure' : 'Exterior painting',
      link: '/services/peinture-exterieure',
    },
    {
      title: isFr ? 'Peinture résidentielle' : 'Residential painting',
      link: '/services/peinture-residentielle',
    },
    {
      title: isFr ? 'Peinture commerciale' : 'Commercial painting',
      link: '/services/peinture-commerciale',
    },
    {
      title: isFr ? 'Peintres professionnels' : 'Professional painters',
      link: '/peintre-professionnel',
    },
  ];

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
        name: isFr ? 'Avis' : 'Reviews',
        item: 'https://leleverdupinceau.ca/avis',
      },
    ],
  };

  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca',
    telephone: '+14388680772',
    email: 'leleverdupinceau@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2175 Rue Saint-Patrick',
      addressLocality: 'Montréal',
      addressRegion: 'QC',
      postalCode: 'H3K 1B4',
      addressCountry: 'CA',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Chantal Baril',
        },
        reviewBody: isFr
          ? "Je suis très satisfaite des travaux qui ont été effectués à notre résidence. J'ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes; le souci du détail est apparent!"
          : 'I am very satisfied with the work that was done at our residence. I received a quote quickly, and the work started as agreed, despite inclement weather. The result exceeded my expectations; the attention to detail is evident!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Zoé Boudreau',
        },
        reviewBody: isFr
          ? 'Je suis très satisfaite du service reçu! Équipe compétente, rapide et courtoise. Je recommande chaleureusement!'
          : 'I am very satisfied with the service received! Competent, fast and courteous team. I warmly recommend!',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
        },
      },
    ],
  };

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Avis de nos clients – Le Lever du Pinceau | Peinture Montréal'
            : 'Client Reviews – Le Lever du Pinceau | Painting Montreal'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Découvrez les avis authentiques de nos clients de Montréal, Laval, Longueuil et Brossard. Témoignages, photos avant/après et évaluations complètes de nos services de peinture professionnelle'
              : 'Discover authentic reviews from our clients in Montreal, Laval, Longueuil and Brossard. Testimonials, before/after photos and complete evaluations of our professional painting services'
          }
        />
        <link rel='canonical' href='https://leleverdupinceau.ca/avis' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type='application/ld+json'>
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>

      <Box w='100%' bg='white' overflowX='hidden'>
        <Container
          maxW='1440px'
          px={{ base: 4, md: 6 }}
          pt={{ base: 8, md: 12 }}
        >
          <Stack spacing={0}>
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
              <Text
                color='gray.800'
                fontWeight='medium'
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {isFr ? 'Avis' : 'Reviews'}
              </Text>
            </HStack>

            <Stack spacing={4} textAlign='left' mb={{ base: 12, md: 16 }}>
              <Heading
                as='h1'
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                fontWeight='bold'
                color='gray.800'
              >
                {isFr
                  ? 'Avis de nos clients – Le Lever du Pinceau'
                  : 'Client Reviews – Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='800px'
              >
                {isFr
                  ? 'Chez Le Lever du Pinceau, la satisfaction de nos clients est au cœur de tout ce que nous faisons. Résidentiel, commercial, intérieur ou extérieur, toutes nos interventions sont réalisées avec précision, propreté et un souci du détail irréprochable. Cette page rassemble les avis authentiques laissés par nos clients de Montréal, Laval, Longueuil, Brossard et tous les quartiers que nous desservons. Découvrez leurs témoignages, leurs photos avant/après et leurs évaluations complètes.'
                  : 'At Le Lever du Pinceau, customer satisfaction is at the heart of everything we do. Residential, commercial, interior or exterior, all our interventions are carried out with precision, cleanliness and impeccable attention to detail. This page brings together authentic reviews left by our clients from Montreal, Laval, Longueuil, Brossard and all the neighborhoods we serve. Discover their testimonials, their before/after photos and their complete evaluations.'}
              </Text>
            </Stack>

            <Box py={{ base: 12, md: 16 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8} align='center'>
                  <Stack spacing={3} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Ce que nos clients disent de nous'
                        : 'What our clients say about us'}
                    </Heading>
                  </Stack>

                  <Box textAlign='center' pb={6}>
                    <Link
                      href='https://www.google.com/search?sca_esv=04ccc06d6a14a3bd&cs=0&output=search&kgmid=/g/11ldw9sdvg&q=Le+Lever+Du+Pinceau&shndl=30&shem=uaasic&source=sh/x/loc/uni/m1/1&kgs=a53523f1a2b1d98f#lrd=0x68f987b7d3c06763:0xde27a613b1baf982,3,,,,'
                      rel='nofollow'
                      target='_blank'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Button
                        rightIcon={<ArrowForwardIcon />}
                        bg='#014CC4'
                        color='white'
                        borderRadius='full'
                        fontSize={{ base: 'sm', md: 'md' }}
                        px={{ base: 5, md: 7 }}
                        py={{ base: 3, md: 4 }}
                        _hover={{ bg: '#0139A0' }}
                      >
                        {isFr
                          ? 'Laisser un avis Google'
                          : 'Leave a Google review'}
                      </Button>
                    </Link>
                  </Box>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    w='100%'
                  >
                    {allReviews.map((review, index) => (
                      <Box
                        key={index}
                        bg='white'
                        p={{ base: 4, md: 6 }}
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        h='100%'
                        display='flex'
                        flexDirection='column'
                        _hover={{
                          borderColor: '#014CC4',
                          boxShadow: 'md',
                        }}
                        transition='all 0.2s'
                      >
                        <Stack spacing={3} flex={1}>
                          <Box>
                            <Text
                              fontWeight='bold'
                              fontSize={{ base: 'md', md: 'lg' }}
                              color='gray.800'
                            >
                              {review.name}
                            </Text>
                            <Text fontSize='sm' color='gray.500' mt={0.5}>
                              {review.time}
                            </Text>
                          </Box>
                          <Box display='flex' alignItems='center' gap={0.5}>
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                as={FaStar}
                                color='#EAA82E'
                                boxSize={4}
                              />
                            ))}
                          </Box>
                          <Text
                            fontSize={{ base: 'sm', md: 'md' }}
                            color='gray.700'
                            lineHeight='1.6'
                            flex={1}
                          >
                            {review.content}
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
                        ? 'Qualité, précision et service irréprochable'
                        : 'Quality, precision and impeccable service'}
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
                      {isFr
                        ? 'Nos clients mentionnent le plus souvent'
                        : 'Our clients most often mention'}
                    </Text>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {whyRecommend.map((item, index) => (
                      <Flex key={index} align='start' gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='#014CC4'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                          {item}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={6} mb={8}>
                  <Stack spacing={2} textAlign='center'>
                    <Heading
                      as='h2'
                      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                      fontWeight='bold'
                      color='gray.800'
                    >
                      {isFr
                        ? 'Des transformations impressionnantes'
                        : 'Impressive transformations'}
                    </Heading>
                  </Stack>
                </Stack>
              </Container>
              <RecentProjectsSection />
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
                        ? 'Ils nous font confiance pour tous leurs projets'
                        : 'They trust us for all their projects'}
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
                      {isFr
                        ? 'Services les plus appréciés'
                        : 'Most appreciated services'}
                    </Text>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.link}
                        _hover={{ textDecoration: 'none' }}
                      >
                        <Box
                          bg='white'
                          p={{ base: 4, md: 6 }}
                          borderRadius='xl'
                          border='1px solid'
                          borderColor='gray.200'
                          textAlign='center'
                          _hover={{
                            borderColor: '#014CC4',
                            transform: 'translateY(-2px)',
                            boxShadow: 'md',
                          }}
                          transition='all 0.2s'
                        >
                          <Stack spacing={2} align='center'>
                            <Text
                              fontWeight='bold'
                              color='gray.800'
                              fontSize='lg'
                            >
                              {service.title}
                            </Text>
                            <HStack spacing={2} color='#014CC4'>
                              <Text fontSize='sm' fontWeight='medium'>
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
                    ? 'Une équipe de peintres professionnels recommandée partout dans le Grand Montréal'
                    : 'A team of professional painters recommended throughout Greater Montreal'}
                </Heading>
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color='whiteAlpha.900'
                  maxW='800px'
                  mx='auto'
                >
                  {isFr
                    ? 'Des centaines de clients nous ont fait confiance. Obtenez votre propre transformation.'
                    : 'Hundreds of clients have trusted us. Get your own transformation.'}
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
