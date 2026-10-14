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
} from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import ContactFormSection from '../home-page/ContactFormSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import SectorsSection from '../home-page/SectorsSection';
import FAQSection from '../home-page/FAQSection';
import FinalCTASection from '../home-page/FinalCTASection';
import FullWidthSection from '../components/FullWidthSection';
import { SECTION_PY, SECTION_TITLE_MAX_W, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import { LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import contactPhotoHeader from '../images/L3 Sous services/Photo page appartement/header.webp';

const BUSINESS_EMAIL = LOCAL_BUSINESS_SCHEMA.email;
const BUSINESS_PHONE_DISPLAY = '(438) 868-0772';
const BUSINESS_PHONE_TEL = LOCAL_BUSINESS_SCHEMA.telephone;
const BUSINESS_ADDRESS = `${LOCAL_BUSINESS_SCHEMA.address.streetAddress}, ${LOCAL_BUSINESS_SCHEMA.address.addressLocality}, ${LOCAL_BUSINESS_SCHEMA.address.addressRegion} ${LOCAL_BUSINESS_SCHEMA.address.postalCode}`;

function ContactDetailCard({ icon, label, value, href }) {
  const content = (
    <Stack spacing={3} align="center" h="100%">
      <Flex
        w="52px"
        h="52px"
        borderRadius="xl"
        bg="brand.50"
        align="center"
        justify="center"
      >
        <Icon as={FontAwesomeIcon} icon={icon} boxSize={5} color="brand.500" />
      </Flex>
      <Text textStyle="caption" color="gray.500" fontWeight="600" letterSpacing="0.04em" textTransform="uppercase">
        {label}
      </Text>
      <Text
        color="gray.800"
        textStyle="body"
        fontWeight="semibold"
        lineHeight="1.45"
        wordBreak="break-word"
      >
        {value}
      </Text>
    </Stack>
  );

  const sharedProps = {
    p: { base: 5, md: 6 },
    bg: 'white',
    borderRadius: 'xl',
    border: '1px solid',
    borderColor: 'gray.200',
    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
    textAlign: 'center',
    h: '100%',
    transition: 'all 0.2s',
  };

  if (href) {
    return (
      <Link
        href={href}
        _hover={{ textDecoration: 'none' }}
        h="100%"
        display="block"
      >
        <Box
          {...sharedProps}
          _hover={{
            borderColor: 'brand.500',
            boxShadow: 'md',
            transform: 'translateY(-2px)',
          }}
        >
          {content}
        </Box>
      </Link>
    );
  }

  return <Box {...sharedProps}>{content}</Box>;
}

export default function ContactPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isFr = currentLang === 'fr';

  const contactInfo = [
    {
      icon: faEnvelope,
      label: isFr ? 'Courriel' : 'Email',
      value: BUSINESS_EMAIL,
      href: `mailto:${BUSINESS_EMAIL}`,
    },
    {
      icon: faPhone,
      label: isFr ? 'Téléphone' : 'Phone',
      value: BUSINESS_PHONE_DISPLAY,
      href: `tel:${BUSINESS_PHONE_TEL}`,
    },
    {
      icon: faMapMarkerAlt,
      label: isFr ? 'Lieu' : 'Location',
      value: BUSINESS_ADDRESS,
      href: null,
    },
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
    url: `${LOCAL_BUSINESS_SCHEMA.url}/contact`,
    mainEntity: {
      '@id': LOCAL_BUSINESS_SCHEMA['@id'],
      '@type': 'LocalBusiness',
      name: LOCAL_BUSINESS_SCHEMA.name,
      telephone: BUSINESS_PHONE_TEL,
      email: BUSINESS_EMAIL,
      address: LOCAL_BUSINESS_SCHEMA.address,
      url: LOCAL_BUSINESS_SCHEMA.url,
      geo: LOCAL_BUSINESS_SCHEMA.geo,
      areaServed: LOCAL_BUSINESS_SCHEMA.areaServed,
      aggregateRating: LOCAL_BUSINESS_SCHEMA.aggregateRating,
      hasCredential: LOCAL_BUSINESS_SCHEMA.hasCredential,
      sameAs: LOCAL_BUSINESS_SCHEMA.sameAs,
    },
  };

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Soumission gratuite | Contactez-nous | Le Lever du Pinceau' : 'Free quote | Contact us | Le Lever du Pinceau'}
        description={isFr ? 'Demandez votre soumission gratuite en moins de 24 h. Réponse rapide au (438) 868-0772. Grand Montréal: Montréal, Laval, Longueuil et Rive-Sud.' : 'Request your free quote within 24 h. Fast response at (438) 868-0772. Greater Montreal: Montreal, Laval, Longueuil and South Shore.'}
        canonicalPath="/contact"
        schemaArray={[breadcrumbSchema, contactPageSchema]}
      />

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={isFr ? 'Page Contact' : 'Contact Page'}
          title={isFr ? 'Contactez Le\u00A0Lever du\u00A0Pinceau' : 'Contact Le\u00A0Lever du\u00A0Pinceau'}
          subtitle={isFr ? 'Soumission gratuite en moins de\u00A024\u00A0h.' : 'Free quote in less than\u00A024\u00A0h.'}
          description={
            isFr
              ? 'Résidentiel et commercial à Montréal, Laval et\u00A0Longueuil.'
              : 'Residential and commercial in Montreal, Laval and\u00A0Longueuil.'
          }
          buttonText={isFr ? 'Obtenir ma soumission gratuite' : 'Get my free quote'}
          imageBackground={contactPhotoHeader}
          overlayBg='linear-gradient(155deg, rgba(18, 38, 74, 0.92) 0%, rgba(18, 38, 74, 0.7) 45%, rgba(18, 38, 74, 0.5) 100%)'
          breadcrumb={[
            { label: isFr ? 'Accueil' : 'Home', to: '/' },
            { label: 'Contact' },
          ]}
        />

        <ContactFormSection sectionPaddingTop={TRUST_BANNER_BELOW_PT} />

        <FullWidthSection bg="gray.50" py={SECTION_PY}>
          <Stack spacing={TRUST_BANNER_AIR_SPACE}>
            <Stack
              spacing={{ base: 2, md: 3 }}
              textAlign="center"
              maxW={SECTION_TITLE_MAX_W}
              mx="auto"
            >
              <Heading as="h2" size="section" color="gray.800">
                {isFr ? 'Nos coordonnées' : 'Our contact information'}
              </Heading>
              <Text
                color="gray.600"
                textStyle="body"
                maxW={{ base: '100%', md: '720px' }}
                mx="auto"
                sx={{ textWrap: 'pretty' }}
              >
                {isFr
                  ? 'Écrivez-nous, appelez-nous ou passez nous voir. Réponse rapide\u00A0garantie.'
                  : 'Email us, call us, or stop by. Fast response\u00A0guaranteed.'}
              </Text>
            </Stack>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
              {contactInfo.map((info) => (
                <ContactDetailCard
                  key={info.label}
                  icon={info.icon}
                  label={info.label}
                  value={info.value}
                  href={info.href}
                />
              ))}
            </SimpleGrid>

            <Box
              bg="white"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.200"
              boxShadow="0 2px 12px rgba(0,0,0,0.05)"
              overflow="hidden"
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                align={{ base: 'stretch', md: 'center' }}
                gap={{ base: 5, md: 8 }}
                p={{ base: 5, md: 7 }}
              >
                <Flex align="center" gap={4} minW={{ md: '220px' }}>
                  <Flex
                    w="52px"
                    h="52px"
                    borderRadius="xl"
                    bg="brand.50"
                    align="center"
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon
                      as={FontAwesomeIcon}
                      icon={faClock}
                      boxSize={5}
                      color="brand.500"
                    />
                  </Flex>
                  <Text fontWeight="bold" color="gray.800" textStyle="bodyLarge">
                    {isFr ? "Heures d'ouverture" : 'Opening hours'}
                  </Text>
                </Flex>

                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacing={{ base: 3, sm: 6 }}
                  flex="1"
                >
                  <Box>
                    <Text textStyle="caption" color="gray.500" fontWeight="600" mb={1}>
                      {isFr ? 'Lundi au vendredi' : 'Monday to Friday'}
                    </Text>
                    <Text color="gray.800" textStyle="body" fontWeight="semibold">
                      {isFr ? '5h30 - 23h30' : '5:30 AM - 11:30 PM'}
                    </Text>
                  </Box>
                  <Box>
                    <Text textStyle="caption" color="gray.500" fontWeight="600" mb={1}>
                      {isFr ? 'Samedi et dimanche' : 'Saturday and Sunday'}
                    </Text>
                    <Text color="gray.800" textStyle="body" fontWeight="semibold">
                      {isFr ? '5h30 - 23h30' : '5:30 AM - 11:30 PM'}
                    </Text>
                  </Box>
                </SimpleGrid>

                <Box
                  px={4}
                  py={2.5}
                  bg="brand.50"
                  borderRadius="full"
                  border="1px solid"
                  borderColor="brand.100"
                  flexShrink={0}
                  alignSelf={{ base: 'stretch', md: 'center' }}
                  textAlign="center"
                >
                  <Text color="brand.700" textStyle="caption" fontWeight="bold">
                    {isFr
                      ? 'Projets urgents sur demande'
                      : 'Urgent projects on request'}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </FullWidthSection>

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
          buttonLink="/secteurs"
          buttonText={isFr ? 'Voir les secteurs' : 'View service areas'}
        />

        <FAQSection
          faqsOverride={faqs}
          title={
            isFr
              ? 'Questions fréquentes avant de nous contacter'
              : 'Frequently asked questions before contacting us'
          }
        />

        <Box py={{ base: 8, md: 10 }} textAlign="center">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Text color="gray.600" textStyle="body" mb={4}>
              {isFr
                ? 'Vous souhaitez en savoir plus sur notre équipe?'
                : 'Would you like to know more about our team?'}
            </Text>
            <Link
              as={RouterLink}
              to="/peintre-professionnel"
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                variant="ctaOutline"
                rightIcon={<ArrowForwardIcon />}
                borderRadius="full"
                textStyle="nav"
                px={{ base: 5, md: 7 }}
                py={{ base: 3, md: 4 }}
              >
                {isFr
                  ? 'Découvrez nos peintres professionnels'
                  : 'Discover our professional painters'}
              </Button>
            </Link>
          </Container>
        </Box>

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
