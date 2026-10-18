import { FaArrowRight as ArrowForwardIcon, FaBroom, FaShieldAlt, FaStar, FaClock, FaComments, FaHome, FaCouch, FaBuilding, FaKey, FaPaintBrush, FaBriefcase } from 'react-icons/fa';
import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Link,
  Icon,
  HStack,
  SimpleGrid,
  useDisclosure,
} from '@chakra-ui/react';
import SEOHead from '../seo/SEOHead';
import { LOCAL_BUSINESS_SCHEMA } from '../seo/config';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import { SECTION_PY, TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import ResourcesSection from '../home-page/ResourcesSection';
import { RBQ_LICENSE } from '../constants/company';

import heroImg from '../images/villes/montreal/outremont/header.webp';
import prisePossessionImg from '../images/sous-services/appartement/header.webp';
import remiseEnEtatImg from '../images/sous-services/appartement/avant-apres/IMG_5982.webp';
import cuisineAvant from '../images/villes/montreal/outremont/avant-apres/IMG_5971.webp';
import cuisineApres from '../images/villes/montreal/outremont/avant-apres/IMG_5972.webp';
import ouAdd1b from '../images/villes/montreal/avant-apres/IMG_0818.webp';
import ouAdd1a from '../images/villes/montreal/avant-apres/IMG_0819.webp';
import ouAdd2b from '../images/villes/brossard/avant-apres/IMG_0826.webp';
import ouAdd2a from '../images/villes/brossard/avant-apres/IMG_0827.webp';
import ouAdd3b from '../images/villes/st-lambert/avant-apres/IMG_0842.webp';
import ouAdd3a from '../images/villes/st-lambert/avant-apres/IMG_0843.webp';
import ouAdd4b from '../images/villes/brossard/avant-apres/IMG_0846.webp';
import ouAdd4a from '../images/villes/brossard/avant-apres/IMG_0847.webp';
import ouAdd5b from '../images/villes/brossard/avant-apres/IMG_0855.webp';
import ouAdd5a from '../images/villes/brossard/avant-apres/IMG_0856.webp';
import ouAdd6b from '../images/villes/laprairie/avant-apres/IMG_0861.webp';
import ouAdd6a from '../images/villes/laprairie/avant-apres/IMG_0862.webp';
import ouAdd7b from '../images/villes/montreal/avant-apres/IMG_1405.webp';
import ouAdd7a from '../images/villes/montreal/avant-apres/IMG_1406.webp';
import { thumbnailForRoute } from '../constants/routeThumbnails';
import ResponsiveImage from '../components/ResponsiveImage';

const maisonImg = thumbnailForRoute('/services/peinture-residentielle');
const condoImg = thumbnailForRoute('/services/peinture-residentielle/condo');
const commercialImg = thumbnailForRoute('/services/peinture-commerciale');
const interieureImg = thumbnailForRoute('/services/peinture-interieure');
const exterieureImg = thumbnailForRoute('/services/peinture-exterieure');

const CAROUSEL_IMAGES = [
  { before: cuisineAvant, after: cuisineApres, description: 'Cuisine - murs repeints sous les moulures d\'origine' },

  { before: ouAdd1b, after: ouAdd1a, description: 'Réparation de plâtre' },
  { before: ouAdd2b, after: ouAdd2a, description: 'Escalier extérieur - peinture' },
  { before: ouAdd3b, after: ouAdd3a, description: 'Chambre - retrait de papier peint' },
  { before: ouAdd4b, after: ouAdd4a, description: 'Salon - murs et boiseries' },
  { before: ouAdd5b, after: ouAdd5a, description: 'Pièce intérieure - finition nette' },
  { before: ouAdd6b, after: ouAdd6a, description: 'Plinthe et murs - finition' },
  { before: ouAdd7b, after: ouAdd7a, description: 'Clôture en bois - teinture' },
];

const BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Secteurs', to: '/secteurs' },
  { label: 'Montréal', to: '/secteurs/montreal' },
  { label: 'Outremont' },
];

const CHECKMARKS = [
  {
    icon: FaBroom,
    title: 'Chantier discret et respectueux',
    text: 'Dans un secteur calme et résidentiel, la façon de travailler compte. Le chantier reste propre, ordonné et peu dérangeant pour les lieux et le voisinage.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection rigoureuse des lieux',
    text: 'Planchers, moulures, mobilier, circulation et zones de vie sont protégés avec sérieux du début à la fin. Rien n\'est laissé au hasard.',
  },
  {
    icon: FaStar,
    title: 'Finitions nettes dans des espaces soignés',
    text: 'Les détails ressortent davantage dans les propriétés bien entretenues. Les lignes, reprises et transitions doivent être impeccables pour être à la hauteur.',
  },
  {
    icon: FaClock,
    title: 'Échéancier clair pour projets sensibles',
    text: 'Avant emménagement, avant mise en marché ou en occupation continue - le calendrier est établi dès le départ et tenu tout au long du chantier.',
  },
  {
    icon: FaComments,
    title: 'Communication simple et professionnelle',
    text: 'Le client veut savoir où le projet en est, sans devoir gérer le chantier au quotidien. On informe, on coordonne et on avance.',
  },
  {
    icon: FaHome,
    title: 'Habitués aux propriétés résidentielles de qualité',
    text: 'Maisons, condos et immeubles soignés exigent une exécution à la hauteur du cadre. Le standard d\'Outremont est intégré à notre façon de travailler.',
  },
];

const CONTEXTES = [
  {
    icon: FaCouch,
    title: 'Maison familiale occupée',
    text: 'Protection maximale, progression par zones, coordination simple pour que la vie continue pendant les travaux. Pas de compromis sur la propreté au quotidien.',
    image: maisonImg,
    to: '/services/peinture-residentielle',
    linkLabel: 'Peinture résidentielle',
  },
  {
    icon: FaBuilding,
    title: 'Condo ou unité haut de gamme',
    text: 'Accès, voisinage, propreté et discrétion sont essentiels. Le chantier doit être contrôlé et propre à tout moment, du premier jour à la remise des lieux.',
    image: condoImg,
    to: '/services/peinture-residentielle/condo',
    linkLabel: 'Peinture de condo',
  },
  {
    icon: FaKey,
    title: 'Rafraîchissement avant prise de possession',
    text: 'Projet à exécuter vite, proprement et dans un calendrier serré avant l\'installation. Un espace propre et bien peint est prêt à recevoir son nouvel occupant.',
    image: prisePossessionImg,
  },
  {
    icon: FaPaintBrush,
    title: 'Remise en état légère d\'un espace soigné',
    text: 'Le client ne veut pas tout refaire - il veut redonner de l\'éclat à un espace déjà beau, sans complications ni surprises en cours de route.',
    image: remiseEnEtatImg,
  },
  {
    icon: FaBriefcase,
    title: 'Projet commercial ou bureau de proximité',
    text: 'Travaux planifiés avec méthode pour limiter l\'impact sur l\'activité et l\'image du lieu. Chantier propre, intervention discrète et résultat net.',
    image: commercialImg,
    to: '/services/peinture-commerciale',
    linkLabel: 'Peinture commerciale',
  },
];

const SERVICES = [
  {
    title: 'Peinture intérieure à Montréal',
    text: 'Pour les maisons et condos d\'Outremont où la finition intérieure, la protection et la coordination comptent autant que le résultat.',
    to: '/services/peinture-interieure',
    cta: 'Voir la page',
    image: interieureImg,
  },
  {
    title: 'Peinture extérieure à Montréal',
    text: 'Pour les façades, boiseries extérieures, balcons et surfaces exposées au climat montréalais.',
    to: '/services/peinture-exterieure',
    cta: 'Voir la page',
    image: exterieureImg,
  },
  {
    title: 'Peinture résidentielle',
    text: 'Pour un chantier simple à vivre, bien coordonné et sans stress dans votre maison ou appartement.',
    to: '/services/peinture-residentielle',
    cta: 'Voir la page',
    image: maisonImg,
  },
  {
    title: 'Peinture condo',
    text: 'Pour les condos et unités en copropriété où l\'accès, la coordination et la propreté du chantier sont essentiels.',
    to: '/services/peinture-residentielle/condo',
    cta: 'Voir la page',
    image: condoImg,
  },
];

const FAQS = [
  {
    question: 'Ma maison a des moulures et des corniches décoratives, travaillez-vous au pistolet ou au pinceau\u00A0?',
    answer: 'Sur les détails ouvragés comme les corniches et moulures, courants dans les grandes résidences d\'Outremont, nous privilégions le pinceau et le rouleau pour bien remplir les creux et préserver le relief, même si c\'est plus long que l\'application au pistolet.',
  },
  {
    question: 'Comment protégez-vous les boiseries et planchers pendant un chantier dans une grande résidence\u00A0?',
    answer: 'Dans les maisons d\'Outremont, la protection vise autant les moulures et corniches que les planchers et le mobilier. On masque les détails décoratifs avant de peindre les murs, on couvre les surfaces sensibles et on avance par zones pour éviter les éclaboussures sur des éléments difficiles à remplacer.',
  },
  {
    question: 'Faites-vous aussi les duplex et triplex à Outremont\u00A0?',
    answer: 'Oui. Beaucoup de projets hors des grandes résidences unifamiliales concernent des plex. On adapte l\'accès, la circulation du matériel dans les escaliers et la protection des espaces partagés pour garder un chantier propre entre les unités.',
  },
  {
    question: 'Peut-on peindre seulement les boiseries et laisser les murs tels quels\u00A0?',
    answer: 'Oui, si c\'est ce que le projet demande. Sur les résidences d\'Outremont, on intervient souvent sur les moulures, portes et cadrages seuls, avec une préparation plus fine que sur un mur plat, pour un fini durable qui respecte le relief existant.',
  },
];

export default function OutremontPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://leleverdupinceau.ca/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Secteurs',
        item: 'https://leleverdupinceau.ca/secteurs',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Montréal',
        item: 'https://leleverdupinceau.ca/secteurs/montreal',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Outremont',
        item: 'https://leleverdupinceau.ca/secteurs/montreal/outremont',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Le Lever du Pinceau',
    url: 'https://leleverdupinceau.ca',
    telephone: LOCAL_BUSINESS_SCHEMA.telephone,
    areaServed: [
      { '@type': 'City', name: 'Outremont' },
      { '@type': 'City', name: 'Montréal' },
    ],
    hasCredential: `RBQ #${RBQ_LICENSE}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Fragment>
      <SEOHead
        title="Peintre à Outremont | Maisons, condos et projets soignés | Le Lever du Pinceau"
        description="Peintre à Outremont pour maisons, condos et projets résidentiels soignés. Travaux propres, finitions nettes, communication claire et soumission gratuite."
        canonicalPath="/secteurs/montreal/outremont"
        schemaArray={[breadcrumbSchema, localBusinessSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Outremont"
          imageBackground={heroImg}
          title="Peintre à Outremont"
          subtitle="Peintres de métier pour maisons et condos soignés."
          description="Chantier propre, communication claire et échéancier respecté."
          buttonText="Obtenir ma soumission gratuite"
          breadcrumb={BREADCRUMB}
        />

        <BeforeAfterCarouselSection
          isFr={true}
          title="Quelques réalisations récentes près d'Outremont"
          subtitle="Des projets montréalais comparables au niveau d'exigence du quartier."
          images={CAROUSEL_IMAGES}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 16, md: 20, lg: 24 }}
        />
        {/* ===== SECTION 3 - CHECKMARKS OUTREMONT ===== */}
        <Box pt={TRUST_BANNER_BELOW_PT} pb={0} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Une approche adaptée aux propriétés d'Outremont
              </Heading>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">Dans un quartier où l'on remarque les détails, la qualité du chantier compte autant que le résultat final.</Text>
              <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">{"Outremont partage avec Westmount sa position à flanc du mont Royal, mais son caractère architectural est différent : de grandes résidences du début du 20e siècle en stuc ou en brique, avec des corniches et des moulures ouvragées plutôt que la pierre grise typique de Westmount. Ces détails décoratifs demandent un travail au pinceau minutieux dans les creux et les reliefs, là où le pistolet uniformise trop et efface le détail. C'est une des raisons pour lesquelles on garde une bonne partie de ce type de travail en finition manuelle."}</Text>
            </Stack>
          </Container>
        </Box>
        <FeatureCardsSection
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
          sectionPaddingTop={TRUST_BANNER_AIR_SPACE}
          sectionPaddingBottom={SECTION_PY}
        />

        {/* ===== SECTION 4 - CONTEXTES FRÉQUENTS À OUTREMONT ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Des besoins différents selon le type de propriété à Outremont
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Une maison familiale, un condo haut de gamme ou un immeuble bien entretenu ne se gèrent pas exactement de la même manière.
                </Text>
              </Stack>

              <Flex wrap="wrap" justify="center" gap={6}>
                {CONTEXTES.map((item) => (
                  <Box
                    key={item.title}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    overflow="hidden"
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                    display="flex"
                    flexDirection="column"
                  >
                    <ResponsiveImage
                      image={item.image}
                          sizes="(min-width: 48em) 380px, 85vw"
                      alt={`${item.title} - peinture à Outremont`}
                      w="100%"
                      h={{ base: '180px', md: '200px' }}
                      objectFit="cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <Stack spacing={4} p={{ base: 6, md: 7 }} flex={1}>
                      <Flex w="48px" h="48px" borderRadius="xl" bg="brand.50" align="center" justify="center">
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3">
                        {item.title}
                      </Heading>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                        {item.text}
                      </Text>
                      {item.to && (
                        <Link as={RouterLink} to={item.to} color="brand.500" fontWeight="600" fontSize="sm">
                          {item.linkLabel} <Icon as={ArrowForwardIcon} boxSize={3} />
                        </Link>
                      )}
                    </Stack>
                  </Box>
                ))}
              </Flex>
            </Stack>
          </Container>
        </Box>

        <ContactFormSection sectionPaddingTop={{ base: 12, md: 16 }} sectionPaddingBottom={{ base: 12, md: 16 }} />

        {/* ===== SECTION 5 - SERVICES LES PLUS PERTINENTS POUR OUTREMONT ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Les services les plus demandés à Outremont
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Trouvez rapidement le bon service selon votre type de projet.
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {SERVICES.map((service, i) => (
                  <Link key={i} as={RouterLink} to={service.to} _hover={{ textDecoration: 'none' }}>
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      overflow="hidden"
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{ borderColor: 'brand.500', transform: 'translateY(-2px)', boxShadow: 'md' }}
                      transition="all 0.2s"
                    >
                      <ResponsiveImage
                        image={service.image}
                          sizes="(min-width: 48em) 380px, 85vw"
                        alt={`${service.title} - Outremont`}
                        w="100%"
                        h="180px"
                        objectFit="cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <Stack spacing={4} flex={1} justify="space-between" p={{ base: 6, md: 7 }}>
                        <Box>
                          <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} fontWeight="700" color="gray.800" lineHeight="1.3" mb={3}>
                            {service.title}
                          </Heading>
                          <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                            {service.text}
                          </Text>
                        </Box>
                        <HStack spacing={1} color="brand.500">
                          <Text fontSize="sm" fontWeight="600">{service.cta}</Text>
                          <Icon as={ArrowForwardIcon} boxSize={3} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        <FAQSection
          title="Questions fréquentes sur nos services de peinture à Outremont"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
         emitSchema={false} />

        <ResourcesSection
          title="Conseils avant votre projet de peinture à Outremont"
          sectionBg="gray.50"
        />

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <FinalCTASection
          title={'Un projet de peinture à Outremont\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h."
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
