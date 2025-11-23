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
import SubmissionForm from '../home-page/SubmissionForm';
import SubmissionModal from '../home-page/SubmissionModal';
import SectorsSection from '../home-page/SectorsSection';

export default function ContactPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onClose } = useDisclosure();

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

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
      value: '2175 Saint-Patrick O, H3K 1B4',
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
        streetAddress: '2175 Saint-Patrick O',
        addressLocality: 'Montréal',
        addressRegion: 'QC',
        postalCode: 'H3K 1B4',
        addressCountry: 'CA',
      },
    },
  };

  return (
    <Fragment>
      <Helmet>
        <title>
          {isFr
            ? 'Contactez Le Lever du Pinceau | Peinture Montréal'
            : 'Contact Le Lever du Pinceau | Painting Montreal'}
        </title>
        <meta
          name='description'
          content={
            isFr
              ? 'Contactez notre équipe de peintres professionnels à Montréal Obtenez une soumission gratuite pour votre projet de peinture résidentielle ou commerciale Réponse rapide garantie'
              : 'Contact our team of professional painters in Montreal Get a free quote for your residential or commercial painting project Fast response guaranteed'
          }
        />
        <link rel='canonical' href='https://leleverdupinceau.ca/contact' />
        <meta name='robots' content='noindex, nofollow' />
        <meta name='googlebot' content='noindex, nofollow' />
        <script type='application/ld+json'>
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type='application/ld+json'>
          {JSON.stringify(contactPageSchema)}
        </script>
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
                Contact
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
                  ? 'Contactez Le Lever du Pinceau'
                  : 'Contact Le Lever du Pinceau'}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color='gray.600'
                lineHeight='1.7'
                maxW='800px'
              >
                {isFr
                  ? 'Vous souhaitez rafraîchir votre intérieur, moderniser vos espaces ou obtenir une soumission rapide pour votre projet de peinture ? Notre équipe de peintres professionnels est disponible partout dans le Grand Montréal, Montréal, Laval, Longueuil, Brossard et tous les quartiers environnants. Nous répondons rapidement, offrons des soumissions claires et précises, et garantissons un service professionnel du début à la fin. Remplissez le formulaire ci-dessous ou contactez-nous directement, nous serons ravis de vous aider.'
                  : 'Would you like to refresh your interior, modernize your spaces, or get a quick quote for your painting project? Our team of professional painters is available throughout Greater Montreal, Montreal, Laval, Longueuil, Brossard and all surrounding neighborhoods. We respond quickly, offer clear and accurate quotes, and guarantee professional service from start to finish. Fill out the form below or contact us directly, we will be happy to help you.'}
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
                        ? 'Obtenez votre soumission gratuite'
                        : 'Get your free quote'}
                    </Heading>
                  </Stack>

                  <Box
                    bg='white'
                    p={{ base: 6, md: 8 }}
                    borderRadius='xl'
                    border='1px solid'
                    borderColor='gray.200'
                    w={{ base: '100%', md: '600px' }}
                    mx='auto'
                  >
                    <SubmissionForm onSubmit={handleSubmit} />
                  </Box>
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
                            color='#014CC4'
                          />
                          <Text
                            fontSize='sm'
                            color='gray.600'
                            fontWeight='medium'
                          >
                            {info.label}
                          </Text>
                          {info.href ? (
                            <Link
                              href={info.href}
                              color='gray.800'
                              fontSize='md'
                              fontWeight='medium'
                              _hover={{
                                textDecoration: 'underline',
                                color: '#014CC4',
                              }}
                            >
                              {info.value}
                            </Link>
                          ) : (
                            <Text
                              color='gray.800'
                              fontSize='md'
                              fontWeight='medium'
                            >
                              {info.value}
                            </Text>
                          )}
                        </Stack>
                      </Box>
                    ))}
                  </SimpleGrid>

                  <Box
                    bg='#F5F6F8'
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
                        color='#014CC4'
                      />
                      <Text fontWeight='bold' color='gray.800' fontSize='lg'>
                        {isFr ? "Heures d'ouverture" : 'Opening hours'}
                      </Text>
                      <Stack spacing={1}>
                        <Text color='gray.700' fontSize='sm'>
                          {isFr
                            ? 'Lundi au vendredi 5h30 – 23h30'
                            : 'Monday to Friday: 5:30 AM – 11:30 PM'}
                        </Text>
                        <Text color='gray.700' fontSize='sm'>
                          {isFr
                            ? 'Samedi et Dimanche 5h30 – 23h30'
                            : 'Saturday and Sunday: 5:30 AM – 11:30 PM'}
                        </Text>
                      </Stack>
                      <Text color='gray.600' fontSize='xs' mt={2}>
                        {isFr
                          ? 'Disponible pour projets urgents sur demande'
                          : 'Available for urgent projects upon request'}
                      </Text>
                    </Stack>
                  </Box>
                </Stack>
              </Container>
            </Box>

            <SectorsSection />

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
                        ? 'Un service rapide, professionnel et fiable'
                        : 'A fast, professional and reliable service'}
                    </Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600'>
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
                          color='#014CC4'
                          boxSize={5}
                          mt={1}
                          flexShrink={0}
                        />
                        <Text color='gray.700' fontSize='md' lineHeight='1.6'>
                          {benefit}
                        </Text>
                      </Flex>
                    ))}
                  </SimpleGrid>

                  <Box textAlign='center' pt={4}>
                    <Link
                      href='/new-home#reviews'
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
                        {isFr ? 'Voir les avis' : 'View reviews'}
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
                          <Text
                            fontWeight='bold'
                            color='gray.800'
                            fontSize='lg'
                          >
                            {faq.question}
                          </Text>
                          <Text color='gray.600' fontSize='md' lineHeight='1.6'>
                            {faq.answer}
                          </Text>
                        </Stack>
                      </Box>
                    ))}
                  </Stack>

                  <Box textAlign='center' pt={4}>
                    <Text color='gray.600' fontSize='md' mb={4}>
                      {isFr
                        ? 'Vous souhaitez en savoir plus sur notre équipe?'
                        : 'Would you like to know more about our team?'}
                    </Text>
                    <Link
                      href='/new-home#team'
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
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
