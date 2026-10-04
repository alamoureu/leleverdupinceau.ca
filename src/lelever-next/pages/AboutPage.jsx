import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faFileInvoiceDollar, faBroom, faComments } from '@fortawesome/free-solid-svg-icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import { SITE_URL, LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import { HAPPY_CLIENTS_COUNT, RBQ_LICENSE } from '../constants/company';
import { GOOGLE_RATING_LABEL, GOOGLE_REVIEW_COUNT } from '../constants/googleReviews';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import ReviewsSection from '../home-page/ReviewsSection';
import SectorsSection from '../home-page/SectorsSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import aProposPhotoHeader from '../images/1-page-principale/a propos/Photo header/IMG_6772.PNG';

function InlineLink({ to, children }) {
  return (
    <Link as={RouterLink} to={to} color='brand.500' fontWeight='semibold' textDecoration='underline' textUnderlineOffset='3px'>
      {children}
    </Link>
  );
}

const content = {
  fr: {
    home: 'Accueil',
    breadcrumb: 'À propos',
    title: 'À propos de Le Lever du Pinceau',
    tagline: 'Peinture résidentielle et commerciale dans le Grand Montréal.',
    description:
      'Le Lever du Pinceau est une entreprise de peinture résidentielle et commerciale basée à Montréal. Nos peintres professionnels transforment maisons, condos, commerces et bureaux partout dans le Grand Montréal, avec une préparation minutieuse, un chantier propre et une finition durable.',
    pills: ['Respect des délais', 'Soumission en 24 h', 'Chantier propre', 'Communication claire'],
    pillsText:
      "Chaque projet suit un échéancier clair, établi avec vous dès la soumission. Notre équipe arrive à l'heure, avance selon le plan et vous tient informé à chaque étape, jusqu'à la remise de vos lieux propres, à la date convenue.",
    sections: [
      {
        title: 'Qui est Le Lever du Pinceau ?',
        body: [
          "Le Lever du Pinceau est une entreprise de peinture professionnelle établie au 2175, rue Saint-Patrick, à Montréal. Nous réalisons des projets de peinture intérieure et extérieure pour les propriétaires, les copropriétés, les gestionnaires immobiliers, les commerces et les entrepreneurs du Grand Montréal.",
          <>
            Nous détenons une licence de la Régie du bâtiment du Québec (RBQ {RBQ_LICENSE}) et une assurance responsabilité de 5 M$ auprès d'Intact Assurance. Plus de {HAPPY_CLIENTS_COUNT} clients nous ont confié leur projet, et notre note Google est de {GOOGLE_RATING_LABEL.fr}/5 sur plus de {GOOGLE_REVIEW_COUNT}{' '}
            <InlineLink to='/avis-clients'>avis clients</InlineLink>.
          </>,
          "Notre mission est simple : offrir la meilleure expérience de peinture au Québec, du premier appel jusqu'à la dernière couche.",
        ],
      },
      {
        title: 'Quels services de peinture offrons-nous ?',
        body: [
          <>
            Nous couvrons l'ensemble des besoins en peinture, de la petite retouche à la rénovation complète. Nos services principaux sont la{' '}
            <InlineLink to='/services/peinture-interieure'>peinture intérieure</InlineLink>, la{' '}
            <InlineLink to='/services/peinture-exterieure'>peinture extérieure</InlineLink>, la{' '}
            <InlineLink to='/services/peinture-residentielle'>peinture résidentielle</InlineLink>, la{' '}
            <InlineLink to='/services/peinture-commerciale'>peinture commerciale</InlineLink> et la{' '}
            <InlineLink to='/services/peinture-industrielle'>peinture industrielle</InlineLink>.
          </>,
          <>
            Nous offrons aussi des services spécialisés : la{' '}
            <InlineLink to='/services/preparation-de-surfaces'>préparation de surfaces</InlineLink>, la{' '}
            <InlineLink to='/services/reparation-de-platre-et-gypse'>réparation de plâtre et de gypse</InlineLink>, la{' '}
            <InlineLink to='/services/peinture-apres-sinistre'>peinture après sinistre</InlineLink>, la{' '}
            <InlineLink to='/services/teinture-exterieure'>teinture extérieure</InlineLink>, la{' '}
            <InlineLink to='/services/peinture-au-pistolet'>peinture au pistolet</InlineLink> et la{' '}
            <InlineLink to='/services/peinture-interieure/armoires-de-cuisine'>peinture d'armoires de cuisine</InlineLink>. Les murs d'accent, les finitions décoratives, les conversions et les rénovations complètes font aussi partie de nos projets courants.
          </>,
        ],
      },
      {
        title: 'Comment se déroule un projet avec nous ?',
        body: [
          "Tout commence par une soumission claire et détaillée, généralement envoyée en moins de 24 heures. Elle précise les surfaces à peindre, les produits, le prix et l'échéancier, pour que vous sachiez exactement à quoi vous attendre.",
          "Le jour des travaux, nous protégeons planchers, meubles et accessoires avant de toucher à un mur. Nous réparons les fissures et les trous, sablons et appliquons un apprêt au besoin : c'est cette préparation qui assure une finition durable. Nous utilisons uniquement des produits de qualité professionnelle et des techniques éprouvées.",
          'Chaque projet se termine par une inspection finale avec vous et un nettoyage complet. Nous ne quittons jamais avant que tout soit parfait.',
        ],
      },
      {
        title: 'Qui sont nos peintres ?',
        body: [
          'Notre équipe est composée de peintres professionnels expérimentés, formés aux meilleures techniques du métier. Ils travaillent autant sur les surfaces modernes que sur le plâtre et les boiseries des maisons anciennes, très présents à Montréal.',
          <>
            Habitués aux logements habités, ils travaillent proprement et discrètement, en respectant votre espace et votre horaire. Petits ou grands projets, nos clients les reconnaissent pour leur minutie, leur courtoisie et leur efficacité.{' '}
            <InlineLink to='/peintre-professionnel'>Découvrir nos peintres professionnels</InlineLink>.
          </>,
        ],
      },
      {
        title: 'Quelles garanties offrons-nous ?',
        body: [
          "Nous offrons une garantie de satisfaction à 100 % ainsi qu'une garantie sur la finition. Concrètement : un résultat impeccable, un chantier propre, une équipe professionnelle, une communication claire et une finition qui dure.",
          'Ces engagements reposent sur cinq principes qui guident chaque projet : la qualité, la propreté, la transparence, le respect et des finitions impeccables. Des soumissions claires, un prix honnête et le respect de vos lieux, de votre temps et de vos attentes, c\'est notre façon de travailler.',
        ],
      },
      {
        title: 'Où intervenons-nous ?',
        body: [
          <>
            Nous desservons tout le Grand Montréal : <InlineLink to='/secteurs/montreal'>Montréal</InlineLink> et ses quartiers (Plateau-Mont-Royal, Ville-Marie, Outremont, Westmount, Rosemont, Verdun, Griffintown, Notre-Dame-de-Grâce et plus),{' '}
            <InlineLink to='/secteurs/laval'>Laval</InlineLink>, <InlineLink to='/secteurs/longueuil'>Longueuil</InlineLink>,{' '}
            <InlineLink to='/secteurs/brossard'>Brossard</InlineLink>, <InlineLink to='/secteurs/st-lambert'>Saint-Lambert</InlineLink> et{' '}
            <InlineLink to='/secteurs/laprairie'>La Prairie</InlineLink>.
          </>,
        ],
      },
    ],
    sectorsTitle: 'Nous servons tout le Grand Montréal',
    sectorsSubtitle: 'Tous les quartiers & secteurs desservis',
    pageContext: 'Page À propos',
    ctaTitle: 'Prêt à commencer votre projet de peinture ?',
    ctaSubtitle: 'Parlez-nous de votre projet et recevez une soumission claire et détaillée en moins de 24 heures.',
  },
  en: {
    home: 'Home',
    breadcrumb: 'About',
    title: 'About Le Lever du Pinceau',
    tagline: 'Residential and commercial painting in Greater Montreal.',
    description:
      'Le Lever du Pinceau is a residential and commercial painting company based in Montreal. Our professional painters transform houses, condos, stores and offices throughout Greater Montreal, with meticulous preparation, a clean worksite and a durable finish.',
    pills: ['On-time delivery', 'Quote within 24 h', 'Clean worksite', 'Clear communication'],
    pillsText:
      'Every project follows a clear schedule, set with you from the quote. Our team arrives on time, works according to plan and keeps you informed at every step, until your space is handed back clean, on the agreed date.',
    sections: [
      {
        title: 'Who is Le Lever du Pinceau?',
        body: [
          'Le Lever du Pinceau is a professional painting company located at 2175 Saint-Patrick Street in Montreal. We handle interior and exterior painting projects for homeowners, condo associations, property managers, businesses and contractors throughout Greater Montreal.',
          <>
            We hold a Régie du bâtiment du Québec license (RBQ {RBQ_LICENSE}) and $5M liability insurance with Intact Insurance. Over {HAPPY_CLIENTS_COUNT} clients have trusted us with their project, and our Google rating is {GOOGLE_RATING_LABEL.en}/5 across more than {GOOGLE_REVIEW_COUNT}{' '}
            <InlineLink to='/avis-clients'>client reviews</InlineLink>.
          </>,
          'Our mission is simple: to offer the best painting experience in Quebec, from the first call to the last coat.',
        ],
      },
      {
        title: 'What painting services do we offer?',
        body: [
          <>
            We cover every painting need, from small touch-ups to complete renovations. Our main services are{' '}
            <InlineLink to='/services/peinture-interieure'>interior painting</InlineLink>,{' '}
            <InlineLink to='/services/peinture-exterieure'>exterior painting</InlineLink>,{' '}
            <InlineLink to='/services/peinture-residentielle'>residential painting</InlineLink>,{' '}
            <InlineLink to='/services/peinture-commerciale'>commercial painting</InlineLink> and{' '}
            <InlineLink to='/services/peinture-industrielle'>industrial painting</InlineLink>.
          </>,
          <>
            We also offer specialized services:{' '}
            <InlineLink to='/services/preparation-de-surfaces'>surface preparation</InlineLink>,{' '}
            <InlineLink to='/services/reparation-de-platre-et-gypse'>plaster and drywall repair</InlineLink>,{' '}
            <InlineLink to='/services/peinture-apres-sinistre'>post-disaster painting</InlineLink>,{' '}
            <InlineLink to='/services/teinture-exterieure'>exterior staining</InlineLink>,{' '}
            <InlineLink to='/services/peinture-au-pistolet'>spray painting</InlineLink> and{' '}
            <InlineLink to='/services/peinture-interieure/armoires-de-cuisine'>kitchen cabinet painting</InlineLink>. Accent walls, decorative finishes, conversions and complete renovations are also part of our everyday projects.
          </>,
        ],
      },
      {
        title: 'How does a project with us work?',
        body: [
          'Everything starts with a clear, detailed quote, usually sent within 24 hours. It specifies the surfaces to paint, the products, the price and the schedule, so you know exactly what to expect.',
          'On the day of the work, we protect floors, furniture and fixtures before touching a single wall. We repair cracks and holes, sand and prime as needed: this preparation is what ensures a durable finish. We use only professional-grade products and proven techniques.',
          'Every project ends with a final walkthrough with you and a complete cleanup. We never leave until everything is perfect.',
        ],
      },
      {
        title: 'Who are our painters?',
        body: [
          'Our team is made up of experienced professional painters, trained in the best techniques of the trade. They work on modern surfaces as well as the plaster and woodwork of older homes, so common in Montreal.',
          <>
            Used to working in occupied homes, they work cleanly and discreetly, respecting your space and your schedule. Small or large projects, our clients recognize them for their attention to detail, courtesy and efficiency.{' '}
            <InlineLink to='/peintre-professionnel'>Meet our professional painters</InlineLink>.
          </>,
        ],
      },
      {
        title: 'What guarantees do we offer?',
        body: [
          'We offer a 100% satisfaction guarantee as well as a finish guarantee. In practice: an impeccable result, a clean worksite, a professional team, clear communication and a finish that lasts.',
          'These commitments rest on five principles that guide every project: quality, cleanliness, transparency, respect and impeccable finishes. Clear quotes, honest pricing and respect for your premises, your time and your expectations, that is how we work.',
        ],
      },
      {
        title: 'Where do we work?',
        body: [
          <>
            We serve all of Greater Montreal: <InlineLink to='/secteurs/montreal'>Montreal</InlineLink> and its neighborhoods (Plateau-Mont-Royal, Ville-Marie, Outremont, Westmount, Rosemont, Verdun, Griffintown, Notre-Dame-de-Grâce and more),{' '}
            <InlineLink to='/secteurs/laval'>Laval</InlineLink>, <InlineLink to='/secteurs/longueuil'>Longueuil</InlineLink>,{' '}
            <InlineLink to='/secteurs/brossard'>Brossard</InlineLink>, <InlineLink to='/secteurs/st-lambert'>Saint-Lambert</InlineLink> and{' '}
            <InlineLink to='/secteurs/laprairie'>La Prairie</InlineLink>.
          </>,
        ],
      },
    ],
    sectorsTitle: 'We serve all of Greater Montreal',
    sectorsSubtitle: 'All neighborhoods & service areas',
    pageContext: 'About Page',
    ctaTitle: 'Ready to start your painting project?',
    ctaSubtitle: 'Tell us about your project and receive a clear, detailed quote within 24 hours.',
  },
};

const PILL_ICONS = [faClock, faFileInvoiceDollar, faBroom, faComments];

export default function AboutPage() {
  const { currentLang } = useContext(appContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isFr = currentLang === 'fr';
  const c = content[currentLang] || content.fr;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: c.home, item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `${SITE_URL}/a-propos` },
    ],
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: c.title,
    description: c.description,
    url: `${SITE_URL}/a-propos`,
    mainEntity: { '@id': LOCAL_BUSINESS_SCHEMA['@id'] },
  };

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'À propos | Équipe peinture Montréal – Le Lever du Pinceau' : 'About | Montreal painting team – Le Lever du Pinceau'}
        description={isFr ? 'Équipe de peintres professionnels à Montréal, Laval, Longueuil. Mission, valeurs, engagement qualité. Peinture résidentielle et commerciale dans le Grand Montréal.' : 'Professional painting team in Montreal, Laval, Longueuil. Mission, values, quality commitment. Residential and commercial painting in Greater Montreal.'}
        canonicalPath="/a-propos"
        schemaArray={[breadcrumbSchema, aboutPageSchema]}
      />

      <Box w='100%' minW={0} maxW='100%' bg='white' overflowX='hidden'>
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext={c.pageContext}
          title={c.title}
          subtitle={c.tagline}
          imageBackground={aProposPhotoHeader}
          overlayBg='linear-gradient(155deg, rgba(18, 38, 74, 0.94) 0%, rgba(18, 38, 74, 0.78) 45%, rgba(18, 38, 74, 0.6) 100%)'
        >
          <HStack
            spacing={3}
            textStyle='bodyLarge'
            color='whiteAlpha.900'
            mb={{ base: 2, md: 4 }}
            flexWrap='wrap'
          >
            <Link as={RouterLink} to='/' _hover={{ textDecoration: 'underline', color: 'white' }}>
              {c.home}
            </Link>
            <Text color='white' opacity={0.9}>›</Text>
            <Text color='white' fontWeight='medium'>{c.breadcrumb}</Text>
          </HStack>
        </HeroSection>

        <TrustBanner />

        <Container maxW='1440px' px={{ base: 4, md: 6 }} pb={{ base: 4, md: 6 }}>
          <Stack spacing={{ base: 4, md: 5 }} align='center' textAlign='center'>
            <Text textStyle='bodyLarge' color='gray.700' lineHeight='1.7' maxW='800px'>
              {c.description}
            </Text>
            <Flex wrap='wrap' justify='center' gap={{ base: 2, md: 3 }}>
              {c.pills.map((pill, index) => (
                <HStack
                  key={pill}
                  spacing={2}
                  px={{ base: 3, md: 4 }}
                  py={{ base: 1.5, md: 2 }}
                  bg='brand.50'
                  border='1px solid'
                  borderColor='brand.100'
                  borderRadius='full'
                >
                  <Icon as={FontAwesomeIcon} icon={PILL_ICONS[index]} color='brand.500' boxSize={{ base: 3.5, md: 4 }} />
                  <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight='semibold' color='gray.800' whiteSpace='nowrap'>
                    {pill}
                  </Text>
                </HStack>
              ))}
            </Flex>
            <Text textStyle='body' color='gray.600' lineHeight='1.7' maxW='680px'>
              {c.pillsText}
            </Text>
          </Stack>
        </Container>

        <Container maxW='1100px' px={{ base: 4, md: 6 }} py={{ base: 10, md: 16 }}>
          <Stack spacing={{ base: 10, md: 14 }} divider={<Divider borderColor='gray.200' />}>
            {c.sections.map((section, index) => (
              <Grid
                key={section.title}
                as='section'
                templateColumns={{ base: '1fr', lg: '4fr 7fr' }}
                gap={{ base: 4, lg: 12 }}
              >
                <Stack spacing={2}>
                  <Text fontSize='sm' fontWeight='bold' color='brand.500' letterSpacing='wider'>
                    {String(index + 1).padStart(2, '0')}
                  </Text>
                  <Heading as='h2' size='section' color='gray.800' lineHeight='1.25'>
                    {section.title}
                  </Heading>
                </Stack>
                <Stack spacing={4}>
                  {section.body.map((paragraph, i) => (
                    <Text key={i} textStyle='bodyLarge' color='gray.700' lineHeight='1.8'>
                      {paragraph}
                    </Text>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Stack>
        </Container>

        <Container maxW='1440px' px={{ base: 4, md: 6 }}>
          <SectorsSection title={c.sectorsTitle} subtitle={c.sectorsSubtitle} pageContext={c.pageContext} />
        </Container>

        <ReviewsSection sectionBg='white' />

        <FinalCTASection onSubmissionOpen={onOpen} title={c.ctaTitle} subtitle={c.ctaSubtitle} />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
