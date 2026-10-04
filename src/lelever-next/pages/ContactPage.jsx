import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
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
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faClock,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import SectorsSection from '../home-page/SectorsSection';
import FinalCTASection from '../home-page/FinalCTASection';
import contactPhotoHeader from '../images/hero/contact-hero.webp';

export default function ContactPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isFr = currentLang === 'fr';

  const contactInfo = [
    {
      icon: faEnvelope,
      label: isFr ? 'Courriel' : 'Email',
      value: 'leleverdupinceau@gmail.com',
      href: 'mailto:leleverdupinceau@gmail.com',
    },
    {
      icon: faPhone,
      label: isFr ? 'Téléphone' : 'Phone',
      value: '(438) 868-0772',
      href: 'tel:4388680772',
    },
    {
      icon: faMapMarkerAlt,
      label: isFr ? 'Lieu' : 'Location',
      value: '2175 Rue Saint-Patrick, Montréal, QC H3K 1B4',
      href: null,
    },
  ];

  const benefits = [
    isFr ? 'Soumission rapide et précise' : 'Fast and accurate quote',
    isFr
      ? 'Communication simple & transparente'
      : 'Simple & transparent communication',
    isFr ? 'Respect des délais' : 'Respect of deadlines',
    isFr ? 'Finition impeccable' : 'Impeccable finish',
    isFr ? 'Protection totale des surfaces' : 'Total surface protection',
    isFr ? 'Produits premium et durables' : 'Premium and durable products',
    isFr
      ? 'Service professionnel du début à la fin'
      : 'Professional service from start to finish',
  ];

  const faqs = [
    {
      question: isFr
        ? 'Quel est le délai pour obtenir une soumission ?'
        : 'What is the turnaround time for a quote?',
      answer: isFr
        ? 'En général en moins de 24 heures'
        : 'Generally within 24 hours',
    },
    {
      question: isFr
        ? 'Vous déplacez-vous partout dans Montréal ?'
        : 'Do you travel throughout Montreal?',
      answer: isFr
        ? 'Oui, incluant tous les quartiers (Rosemont, Villeray, NDG, Plateau, Griffintown, etc)'
        : 'Yes, including all neighborhoods (Rosemont, Villeray, NDG, Plateau, Griffintown, etc)',
    },
    {
      question: isFr
        ? 'Quels types de projets faites-vous ?'
        : 'What types of projects do you do?',
      answer: isFr
        ? 'Résidentiel, commercial, intérieur, extérieur'
        : 'Residential, commercial, interior, exterior',
    },
    {
      question: isFr
        ? 'Offrez-vous une garantie ?'
        : 'Do you offer a guarantee?',
      answer: isFr
        ? 'Oui, garantie de satisfaction + garantie sur la finition'
        : 'Yes, satisfaction guarantee + finish guarantee',
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
        name: 'Contact',
        item: 'https://leleverdupinceau.ca/contact',
      },
    ],
  };

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact',
    url: 'https://leleverdupinceau.ca/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Le Lever du Pinceau',
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
    },
  };

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Devis peinture gratuit Montréal | Contact – Le Lever du Pinceau' : 'Free painting quote Montreal | Contact – Le Lever du Pinceau'}
        description={isFr ? 'Obtenez votre soumission gratuite à Montréal, Laval, Longueuil. Peintres professionnels pour peinture résidentielle et commerciale. Réponse rapide au (438) 868-0772.' : 'Get your free quote in Montreal, Laval, Longueuil. Professional painters for residential and commercial painting. Fast response (438) 868-0772.'}
        canonicalPath="/contact"
        schemaArray={[breadcrumbSchema, contactPageSchema]}
      />

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={isFr ? 'Page Contact' : 'Contact Page'}
          title={isFr ? 'Contactez Le Lever du Pinceau' : 'Contact Le Lever du Pinceau'}
          subtitle={isFr ? 'Soumission gratuite en moins de 24 h.' : 'Free quote in less than 24 h.'}
          buttonText={isFr ? 'Disponible pour projets urgents sur demande' : 'Available for urgent projects on demand'}
          imageBackground={contactPhotoHeader}
          overlayBg='linear-gradient(155deg, rgba(18, 38, 74, 0.92) 0%, rgba(18, 38, 74, 0.7) 45%, rgba(18, 38, 74, 0.5) 100%)'
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
            <Text color='white' fontWeight='medium'>Contact</Text>
          </HStack>
        </HeroSection>

        <TrustBanner />

        <Container maxW='1440px' px={{ base: 4, md: 6 }}>
          <Stack spacing={0}>
            <ContactFormSection />

            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr ? 'Nos coordonnées' : 'Our contact information'}
                    </Heading>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 3 }}
                    spacing={{ base: 6, md: 8 }}
                  >
                    {contactInfo.map((info, index) => (
                      <Box
                        key={index}
                        p={{ base: 6, md: 8 }}
                        bg='white'
                        borderRadius='xl'
                        border='1px solid'
                        borderColor='gray.200'
                        textAlign='center'
                      >
                        <Stack spacing={3} align='center'>
                          <Icon
                            as={FontAwesomeIcon}
                            icon={info.icon}
                            boxSize={6}
                            color='brand.500'
                          />
                          <Text textStyle='caption' color='gray.600' fontWeight='medium'>
                            {info.label}
                          </Text>
                          {info.href ? (
                            <Link
                              href={info.href}
                              color='gray.800'
                              textStyle='body'
                              fontWeight='medium'
                              _hover={{
                                textDecoration: 'underline',
                                color: 'brand.500',
                              }}
                            >
                              {info.value}
                            </Link>
                          ) : (
                            <Text color='gray.800' textStyle='body' fontWeight='medium'>
                              {info.value}
                            </Text>
                          )}
                        </Stack>
                      </Box>
                    ))}
                  </SimpleGrid>

                  <Box
                    bg='gray.50'
                    p={{ base: 6, md: 8 }}
                    borderRadius='xl'
                    textAlign='center'
                    maxW='600px'
                    mx='auto'
                    border='1px solid'
                    borderColor='gray.200'
                  >
                    <Stack spacing={3} align='center'>
                      <Icon
                        as={FontAwesomeIcon}
                        icon={faClock}
                        boxSize={6}
                        color='brand.500'
                      />
                      <Text fontWeight='bold' color='gray.800' textStyle='bodyLarge'>
                        {isFr ? "Heures d'ouverture" : 'Opening hours'}
                      </Text>
                      <Stack spacing={1}>
                        <Text color='gray.700' textStyle='body'>
                          {isFr
                            ? 'Lundi au vendredi 5h30 – 23h30'
                            : 'Monday to Friday: 5:30 AM – 11:30 PM'}
                        </Text>
                        <Text color='gray.700' textStyle='body'>
                          {isFr
                            ? 'Samedi et Dimanche 5h30 – 23h30'
                            : 'Saturday and Sunday: 5:30 AM – 11:30 PM'}
                        </Text>
                      </Stack>
                      <Box
                        mt={4}
                        p={3}
                        bg='brand.500'
                        borderRadius='md'
                        border='1px solid'
                        borderColor='brand.500'
                      >
                        <Text color='white' textStyle='body' fontWeight='bold' textAlign='center'>
                          {isFr
                            ? 'Disponible pour projets urgents sur demande'
                            : 'Available for urgent projects upon request'}
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Container>
            </Box>

            <SectorsSection
              title={
                isFr
                  ? 'Nous servons tout le Grand Montréal'
                  : 'We serve all of Greater Montreal'
              }
              subtitle={
                isFr
                  ? 'Montréal, Laval, Longueuil, Brossard - tous les quartiers desservis'
                  : 'Montreal, Laval, Longueuil, Brossard - all neighborhoods served'
              }
              pageContext={isFr ? 'Page Contact' : 'Contact Page'}
              disableLinks={true}
              showButton={true}
              buttonLink='/secteurs'
              buttonText={isFr ? 'Voir les secteurs' : 'View service areas'}
            />

            <Box py={{ base: 12, md: 16, lg: 20 }}>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr
                        ? 'Un service rapide, professionnel et fiable'
                        : 'A fast, professional and reliable service'}
                    </Heading>
                    <Text textStyle='bodyLarge' color='gray.600'>
                      {isFr
                        ? 'Nos clients apprécient'
                        : 'Our clients appreciate'}
                    </Text>
                  </Stack>

                  <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 3 }}
                    spacing={{ base: 4, md: 6 }}
                    maxW='1000px'
                    mx='auto'
                  >
                    {benefits.map((benefit, index) => (
                      <Flex key={index} align='start' gap={3}>
                        <Icon
                          as={FontAwesomeIcon}
                          icon={faCheckCircle}
                          color='brand.500'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text color='gray.700' textStyle='body' lineHeight='1.6'>
                          {benefit}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>

                  <Box textAlign='center' pt={4}>
                    <Link
                      as={RouterLink}
                      to='/avis-clients'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant='ctaOutline'
                        rightIcon={<ArrowForwardIcon />}
                        borderRadius='full'
                        textStyle='nav'
                        px={{ base: 5, md: 7 }}
                        py={{ base: 3, md: 4 }}
                      >
                        {isFr ? 'Voir les avis' : 'View reviews'}
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Container>
            </Box>

            <Box py={{ base: 12, md: 16, lg: 20 }} bg='gray.50' borderRadius='xl'>
              <Container maxW='1440px' px={{ base: 4, md: 6 }}>
                <Stack spacing={8}>
                  <Stack spacing={{ base: 2, md: 3 }} textAlign='center'>
                    <Heading as='h2' size='section' color='gray.800'>
                      {isFr
                        ? 'Questions fréquentes avant de nous contacter'
                        : 'Frequently asked questions before contacting us'}
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
                          <Text fontWeight='bold' color='gray.800' textStyle='bodyLarge'>
                            {faq.question}
                          </Text>
                          <Text color='gray.600' textStyle='body' lineHeight='1.6'>
                            {faq.answer}
                          </Text>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>

                  <Box textAlign='center' pt={4}>
                    <Text color='gray.600' textStyle='body' mb={4}>
                      {isFr
                        ? 'Vous souhaitez en savoir plus sur notre équipe?'
                        : 'Would you like to know more about our team?'}
                    </Text>
                    <Link
                      as={RouterLink}
                      to='/peintre-professionnel'
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Button
                        variant='ctaOutline'
                        rightIcon={<ArrowForwardIcon />}
                        borderRadius='full'
                        textStyle='nav'
                        px={{ base: 5, md: 7 }}
                        py={{ base: 3, md: 4 }}
                      >
                        {isFr
                          ? 'Découvrez nos peintres professionnels'
                          : 'Discover our professional painters'}
                      </Button>
                    </Link>
                  </Box>
                </Stack>
              </Container>
            </Box>
          </Stack>
        </Container>

        <FinalCTASection
          title={isFr ? 'Prêt à commencer votre projet de peinture ?' : 'Ready to start your painting project?'}
          subtitle={isFr
            ? 'Nous répondons rapidement, évaluons votre projet et vous envoyons une soumission claire et détaillée.'
            : 'We respond quickly, assess your project and send you a clear and detailed quote.'}
          buttonText={isFr ? 'Obtenir ma soumission' : 'Get my quote'}
          onSubmissionOpen={onOpen}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
