import React, { Fragment } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Link,
  Icon,
  HStack,
  SimpleGrid,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaCalendarAlt,
  FaShieldAlt,
  FaBroom,
  FaHome,
  FaBuilding,
  FaDoorOpen,
  FaKey,
  FaUsers,
  FaHammer,
  FaLayerGroup,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';
import { servicePageSchema } from '../components/ServicePageSections';

import residentielleHeroImg from '../images/2-services/Page peinture résidentielle/Photo header/IMG_7844.webp';

import avantApresRes1a from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre professionnel Montréal, Le Lever du Pinceau a peint l_ensemble de cette maison centenaire de Montréal.webp';
import avantApresRes1b from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peintre Montréal, Le Lever du Pinceau a peinturé l_ensemble de cette maison plein de boiserie décorative à Westmount.webp';
import res0828 from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée avant.webp";
import res0829 from "../images/L2 Services principaux/Photo page -peinture-extérieure/+Photo avant après/Peinture extérieure Montréal, porte d'entrée après.webp";
import res0834 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, poutre d_acier avant.webp';
import res0835 from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, poutre d_acier après.webp';
import res0844 from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre avant.webp';
import res0845 from '../images/L2 Services principaux/Photo page -peinture-résidentielle/avant après/Peinture résidentielle Montréal, chambre après.webp';
import res5984 from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount avant.webp';
import res5982 from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/westmount après.webp';
import res7924 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7924 3.webp';
import res7922 from '../images/L3 Sous services/Photo page -peinture condo/avant apres/IMG_7922 2.webp';
import res7975 from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun avant.webp';
import res7974 from '../images/L3 Services X Villes/Photo page -peinture-extérieure-montréal/avant après/verdun après.webp';
import res7992 from '../images/3-ville/longueuil/avant-apres/IMG_7992 6.webp';
import res7994 from '../images/3-ville/longueuil/avant-apres/IMG_7994 6.webp';
import res7999 from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Notre-dame-de-grâce avant.webp';
import res7997 from '../images/L3 Services X Villes/Photo page -peinture-intérieure-montréal/Avant-après/Notre-dame-de-grâce après.webp';
import res8253 from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_8253.webp';
import res8252 from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_8252.webp';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture résidentielle' },
];

const CHECKMARKS = [
  {
    icon: FaHome,
    title: 'Maison, condo ou appartement : le plan change',
    text: 'Accès, voisinage, règles d\'immeuble et occupation du lieu ne sont pas les mêmes d\'un logement à l\'autre. On adapte la séquence et la logistique au type de propriété.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Travaux pendant que vous vivez sur place',
    text: 'Pièce par pièce, zones de vie préservées et créneaux réalistes. L\'objectif est de peindre sans bloquer cuisine, chambres ou passages plus longtemps que nécessaire.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection des meubles, planchers et passages',
    text: 'Dans un logement habité, chaque surface exposée compte. Toiles, masquage et déplacement soigné du mobilier pour protéger ce qui reste en place.',
  },
  {
    icon: FaLayerGroup,
    title: 'Préparation selon le bâti résidentiel',
    text: 'Gypse récent, plâtre ancien, boiseries usées ou petites réparations avant peinture : la préparation suit l\'état réel des murs, pas une méthode unique.',
  },
  {
    icon: FaBroom,
    title: 'Chantier propre dans un espace de vie',
    text: 'Nettoyage quotidien, sortie des déchets et rangement du matériel. Vous retrouvez un logement utilisable chaque soir, pas un chantier abandonné.',
  },
  {
    icon: FaKey,
    title: 'Avant vente, emménagement ou rafraîchissement',
    text: 'Logement vide avant les meubles, mise en marché ou simple renouvellement des murs : on cadre le scope pour livrer un résultat net au bon moment.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Maison unifamiliale',
    text: 'Intérieur complet, pièces sélectionnées ou rafraîchissement ciblé. Nous nous adaptons à vos besoins et à votre occupation du lieu.',
    link: '/services/peinture-residentielle/maison',
    linkLabel: 'Voir notre service maison',
    popular: true,
  },
  {
    icon: FaBuilding,
    title: 'Condo',
    text: 'Coordination avec la copropriété, protection des parties communes et chantier propre dans un espace compact.',
    link: '/services/peinture-residentielle/condo',
    linkLabel: 'Voir notre service condo',
    popular: true,
  },
  {
    icon: FaDoorOpen,
    title: 'Appartement',
    text: 'Peinture avant emménagement, entre deux locataires ou pour rafraîchir un espace. Travail rapide et résultat net.',
    link: '/services/peinture-residentielle/appartement',
    linkLabel: 'Voir notre service appartement',
  },
  {
    icon: FaKey,
    title: 'Logement locatif',
    text: 'Remise en état entre deux locataires, peinture blanche ou couleur neutre, travail efficace pour minimiser les pertes de loyer.',
    link: null,
  },
  {
    icon: FaUsers,
    title: 'Multi-logements',
    text: 'Duplex, triplex, immeubles à revenus. Gestion coordonnée de plusieurs logements avec un service structuré.',
    link: null,
  },
  {
    icon: FaHammer,
    title: 'Maison neuve ou rénovation',
    text: 'Premier entretien d\'une maison neuve ou peinture après rénovation majeure. Travail propre en fin de chantier.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Est-ce que je dois quitter ma maison pendant les travaux\u00A0?',
    answer: 'Non, dans la majorité des cas. Nous planifions les travaux pièce par pièce pour que vous puissiez continuer à utiliser votre espace. Selon l\'ampleur du projet et vos préférences, nous adaptons le déroulement pour minimiser les inconvénients.',
  },
  {
    question: 'Comment protégez-vous mes meubles et mes effets personnels\u00A0?',
    answer: 'Nous couvrons les planchers avec des toiles de protection, déplaçons les meubles légers si nécessaire, et utilisons du ruban de masquage professionnel pour protéger les surfaces qui ne doivent pas être peintes. Un nettoyage est effectué à la fin de chaque journée.',
  },
  {
    question: 'Combien de temps dure un projet résidentiel complet\u00A0?',
    answer: 'La durée varie selon la superficie, le nombre de pièces, l\'état des surfaces et le niveau de préparation requis. Une soumission détaillée inclut toujours un échéancier réaliste. La plupart des appartements et condos se réalisent en 1 à 3 jours. Les maisons complètes prennent généralement plus longtemps.',
  },
  {
    question: 'Donnez-vous une garantie sur vos travaux\u00A0?',
    answer:
      'Oui. Nous offrons une garantie satisfaction à 100 % : nous n\'arrêtons pas de travailler tant que vous n\'êtes pas 100 % satisfait des travaux. Si le résultat ne répond pas à vos attentes, nous corrigeons le tout sans frais supplémentaires.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Techniques, surfaces, finis et produits - tout ce qui touche à l\'application.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture extérieure',
    description: 'Revêtement, balcon, clôture et surfaces extérieures.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Peinture commerciale',
    description: 'Bureaux, commerces et restaurants - hors heures et selon vos contraintes.',
    to: '/services/peinture-commerciale',
  },
  {
    title: 'Peinture de condo',
    description: 'Coordination copropriété, protection parties communes, chantier propre.',
    to: '/services/peinture-residentielle/condo',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
];

export default function PeintureResidentiellePage() {
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
        name: 'Services',
        item: 'https://leleverdupinceau.ca/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Peinture résidentielle',
        item: 'https://leleverdupinceau.ca/services/peinture-residentielle',
      },
    ],
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

  const carouselImages = [
    {
      before: avantApresRes1b,
      after: avantApresRes1a,
      description: 'Peinture résidentielle - cage d\'escalier à Westmount',
    },
    { before: res0828, after: res0829, description: "Porte d'entrée - peinture extérieure" },
    { before: res0834, after: res0835, description: "Poutre d'acier - intérieur résidentiel" },
    { before: res0844, after: res0845, description: 'Chambre - rafraîchissement résidentiel' },
    { before: res5984, after: res5982, description: 'Pièce double - Westmount' },
    { before: res7924, after: res7922, description: 'Salon - Condo Griffintown' },
    { before: res7975, after: res7974, description: 'Escalier extérieur - Verdun' },
    { before: res7992, after: res7994, description: 'Maison - peinture résidentielle' },
    { before: res7999, after: res7997, description: 'Intérieur - Notre-Dame-de-Grâce' },
    { before: res8253, after: res8252, description: 'Corridor - rafraîchissement' },
];

  return (
    <Fragment>
      <SEOHead
        title="Peinture résidentielle à Montréal | Pour votre domicile | Le Lever du Pinceau"
        description="Peinture résidentielle clé en main à Montréal: protection des meubles, horaires flexibles, chantier propre. Hub maisons et logements. Licence RBQ. Soumission gratuite."
        canonicalPath="/services/peinture-residentielle"
        schemaArray={[
          breadcrumbSchema,
          faqSchema,
          servicePageSchema({
            name: 'Peinture résidentielle à Montréal',
            path: '/services/peinture-residentielle',
            description:
              'Peinture résidentielle clé en main à Montréal: protection des meubles, horaires flexibles, chantier propre. Hub maisons et logements. Licence RBQ.',
            serviceType: 'Peinture résidentielle',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture résidentielle'
          imageBackground={residentielleHeroImg}
          imageAlt='Peinture résidentielle à Montréal - peintre professionnel en action'
          overlayBg='rgba(0, 0, 0, 0.50)'
          title='Peinture résidentielle à Montréal'
          subtitle='Maison, condo, appartement'
          description='Un chantier propre, bien coordonné et respectueux de votre espace de vie.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS EXPÉRIENCE CLIENT ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Peinture chez vous, sans improviser la logistique"
          subtitle="Maison, condo ou appartement : occupation, accès et préparation dictent le plan de chantier"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
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
                  Tous les types de propriétés résidentielles
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Chaque type d&apos;habitation a ses contraintes - nous nous adaptons à toutes
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {SPECIALITES.map((item, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 6, md: 7 }}
                    boxShadow="sm"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md', transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                    display="flex"
                    flexDirection="column"
                    position="relative"
                  >
                    {item.popular && (
                      <Box
                        position="absolute"
                        top={3}
                        right={3}
                        bg="brand.500"
                        color="white"
                        fontSize="xs"
                        fontWeight="700"
                        px={2}
                        py={1}
                        borderRadius="full"
                      >
                        Populaire
                      </Box>
                    )}
                    <Stack spacing={3} flex={1}>
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="xl"
                        bg="brand.50"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Heading
                        as="h3"
                        fontSize={{ base: 'md', md: 'lg' }}
                        fontWeight="700"
                        color="gray.800"
                        lineHeight="1.3"
                      >
                        {item.title}
                      </Heading>
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7" flex={1}>
                        {item.text}
                      </Text>
                      {item.link && (
                        <Link
                          as={RouterLink}
                          to={item.link}
                          color="brand.500"
                          fontWeight="600"
                          fontSize="sm"
                          _hover={{ textDecoration: 'underline' }}
                          display="inline-flex"
                          alignItems="center"
                          gap={1}
                        >
                          {item.linkLabel} <ArrowForwardIcon boxSize={3} />
                        </Link>
                      )}
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 5 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Résultats de nos projets résidentiels"
          subtitle="Maisons, condos et appartements - des chantiers bien menés et des finitions soignées à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="Votre maison est votre espace. Nous la traitons avec soin et nous respectons votre vie quotidienne. Nous n'arrêtons pas de travailler tant que vous n'êtes pas 100 % satisfait des travaux."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture résidentielle"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Prêt à rafraîchir votre espace résidentiel\u00A0?'}
          subtitle={'Soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
