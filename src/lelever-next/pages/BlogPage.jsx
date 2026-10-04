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
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import ReviewsSection from '../home-page/ReviewsSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import heroImage from '../images/1-page-principale/blog hub/Peinture extérieure/IMG_6753.PNG';
import blogPhotoHeader from '../images/5-landing-page/Photo/Danny_Wraping.jpeg';
import imgArmoiresCuisine from '../images/1-page-principale/blog hub/blog-armoires-cuisine.jpg';
import imgComparatifPeinture from '../images/1-page-principale/blog hub/blog-comparatif-peinture.jpg';
import ResourcesSection from '../home-page/ResourcesSection';
import imgResidentielle from '../images/1-page-principale/service hub/Peinture résidentielle/IMG_6768.PNG';
import imgCommerciale from '../images/2-services/Page peinture commerciale/1. réalisations/IMG_6760.PNG';
import imgInterieure from '../images/1-page-principale/service hub/Peinture intérieure/IMG_6758.PNG';
import imgExterieure from '../images/2-services/Page peinture extérieure/1. réalisations/IMG_6755.PNG';
import imgIndustrielle from '../images/1-page-principale/service hub/Peinture industrielle/IMG_6757.PNG';

export default function BlogPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        name: 'Blog',
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

  const latestArticles = [
    {
      href: '/blog/peinture-armoires-cuisine-guide',
      image: imgArmoiresCuisine,
      category: isFr ? 'Guide pratique' : 'Practical guide',
      readTime: isFr ? '9 min de lecture' : '9 min read',
      title: isFr
        ? 'Peindre ses armoires de cuisine, guide complet 2026'
        : 'Painting kitchen cabinets, complete guide 2026',
      excerpt: isFr
        ? "Étapes, coûts, erreurs à éviter et DIY vs professionnel. Tout ce qu'il faut savoir avant de peindre vos armoires à Montréal."
        : 'Steps, costs, mistakes to avoid and DIY vs professional. Everything you need to know before painting your cabinets in Montreal.',
    },
    {
      href: '/blog/betonel-vs-benjamin-moore',
      image: imgComparatifPeinture,
      category: isFr ? 'Comparatif' : 'Comparison',
      readTime: isFr ? '7 min de lecture' : '7 min read',
      title: isFr
        ? 'Bétonel vs Benjamin Moore : quelle peinture choisir ?'
        : 'Bétonel vs Benjamin Moore: which paint to choose?',
      excerpt: isFr
        ? 'Comparatif complet sur les prix, la qualité des produits, les palettes de couleurs et les avis des peintres professionnels.'
        : 'Complete comparison on prices, product quality, color palettes and professional painter reviews.',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Blog peinture Montréal | Conseils, prix, erreurs à éviter | Le Lever du Pinceau' : 'Montreal painting blog | Tips, prices, mistakes to avoid | Le Lever du Pinceau'}
        description={isFr ? 'Conseils peinture par des professionnels à Montréal : prix au pied carré, choix du peintre, erreurs à éviter. Guides résidentiel et commercial.' : 'Painting advice from Montreal pros: price per sq ft, choosing a painter, mistakes to avoid. Residential and commercial guides.'}
        canonicalPath="/blog"
        schema={breadcrumbSchema}
      />

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Blog'
          title='Blog'
          subtitle={isFr ? 'Conseils et ressources sur la peinture' : 'Painting tips and resources'}
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
          imageBackground={blogPhotoHeader}
          overlayBg='linear-gradient(155deg, rgba(18, 38, 74, 0.92) 0%, rgba(18, 38, 74, 0.62) 42%, rgba(18, 38, 74, 0.38) 100%)'
        >
          <HStack
            spacing={3}
            textStyle='bodyLarge'
            color='whiteAlpha.900'
            mb={{ base: 2, md: 4 }}
            flexWrap='wrap'
          >
            <Link as={RouterLink} to='/' _hover={{ textDecoration: 'underline', color: 'white' }}>
              {isFr ? 'Accueil' : 'Home'}
            </Link>
            <Text color='white' opacity={0.9}>›</Text>
            <Text color='white' fontWeight='medium'>Blog</Text>
          </HStack>
        </HeroSection>

        <TrustBanner />

        <Container maxW='1440px' px={{ base: 4, md: 6 }}>
          <Stack spacing={0}>
            <ResourcesSection
              title={isFr ? 'Guides essentiels' : 'Essential Guides'}
              hideButton
            />

            <Box py={{ base: 12, md: 16, lg: 20 }} bg='white'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' fontWeight='bold' color='gray.800' lineHeight='1.3'>
                      {isFr ? 'Derniers articles' : 'Latest articles'}
                    </Heading>
                    <Text textStyle='bodyLarge' color='gray.600' lineHeight='1.7'>
                      {isFr
                        ? 'Guides pratiques publiés récemment par notre équipe.'
                        : 'Practical guides recently published by our team.'}
                    </Text>
                  </Stack>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
                    {latestArticles.map((article) => (
                      <Link key={article.href} as={RouterLink} to={article.href} _hover={{ textDecoration: 'none' }}>
                        <Box
                          bg='white'
                          borderRadius='xl'
                          overflow='hidden'
                          border='1px solid'
                          borderColor='gray.200'
                          h='100%'
                          display='flex'
                          flexDirection='column'
                          _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'md' }}
                          transition='all 0.2s'
                        >
                          <Box h={{ base: '200px', md: '240px' }} bg='gray.100' overflow='hidden'>
                            <Image
                              src={article.image}
                              alt={article.title}
                              w='100%'
                              h='100%'
                              objectFit='cover'
                              loading='lazy'
                              decoding='async'
                              htmlWidth={1024}
                              htmlHeight={576}
                            />
                          </Box>
                          <Stack p={6} spacing={3} flex={1}>
                            <HStack spacing={2}>
                              <Text fontSize='xs' fontWeight='bold' color='brand.500' textTransform='uppercase' letterSpacing='wide'>
                                {article.category}
                              </Text>
                              <Text fontSize='xs' color='gray.400'>·</Text>
                              <Text fontSize='xs' color='gray.500'>{article.readTime}</Text>
                            </HStack>
                            <Text fontWeight='bold' color='gray.800' textStyle='bodyLarge' lineHeight='1.5' letterSpacing='-0.01em'>
                              {article.title}
                            </Text>
                            <Text fontSize='sm' color='gray.600' lineHeight='1.6' noOfLines={3}>
                              {article.excerpt}
                            </Text>
                            <Box display='flex' alignItems='center' color='brand.500' fontWeight='semibold' fontSize='sm' mt='auto' pt={2}>
                              <Text mr={2}>{isFr ? 'Lire l\'article' : 'Read article'}</Text>
                              <ArrowForwardIcon boxSize={4} />
                            </Box>
                          </Stack>
                        </Box>
                      </Link>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Container>
            </Box>

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
            htmlWidth={1600}
            htmlHeight={1067}
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
            htmlWidth={1600}
            htmlHeight={1067}
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

        <ReviewsSection />

        <FinalCTASection
          title={isFr ? 'Planifiez votre prochain projet de peinture' : 'Plan your next painting project'}
          onSubmissionOpen={onOpen}
        />
      </Box>
      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
