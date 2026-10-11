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
  FaPaintBrush,
  FaLayerGroup,
  FaCut,
  FaPalette,
  FaBox,
  FaShieldAlt,
  FaHome,
  FaUtensils,
  FaBath,
  FaBorderAll,
  FaArrowsAlt,
  FaBuilding,
  FaWarehouse,
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

import interieureHeroImg from '../images/2-services/Page peinture intérieure/Photo header/Rolling_Door.jpeg';

import chambreVerteAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, chambre murs verts avant.jpg';
import chambreVerteApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, chambre murs verts après.jpg';

import hallEntreeAvant from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, hall d_entrée avant.jpg';
import hallEntreeApres from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peinture intérieure Montréal, hall d_entrée après.jpg';

import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture intérieure' },
];

const CHECKMARKS = [
  {
    icon: FaPaintBrush,
    title: 'Préparation minutieuse de chaque surface',
    text: 'Sablage, rebouchage, apprêt adapté au type de mur (gypse, plâtre, béton) - le résultat final dépend de la préparation.',
  },
  {
    icon: FaLayerGroup,
    title: 'Application uniforme en 2-3 couches',
    text: 'Sablage léger entre les couches pour une finition parfaitement lisse, sans traces de rouleau ni démarcations.',
  },
  {
    icon: FaCut,
    title: 'Découpes nettes au plafond et aux moulures',
    text: 'Technique de découpe à la main, pas juste du ruban. C\'est ce qui distingue un travail professionnel d\'un travail amateur.',
  },
  {
    icon: FaPalette,
    title: 'Finis adaptés à chaque pièce',
    text: 'Mat pour les plafonds, perle/velours pour les murs, semi-brillant pour les boiseries et salles d\'eau. Le bon produit au bon endroit.',
  },
  {
    icon: FaBox,
    title: 'Produits de qualité professionnelle',
    text: 'Nous travaillons principalement avec Bétonel Dulux (gammes VIP, Diamond, Lifemaster) et Benjamin Moore pour des résultats durables.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète de vos planchers et meubles',
    text: 'Toiles, ruban de masquage professionnel, nettoyage quotidien. Votre espace est respecté du début à la fin du chantier.',
  },
];

const SPECIALITES = [
  {
    icon: FaHome,
    title: 'Murs et plafonds',
    text: 'Le coeur de la peinture intérieure. Minimum 2 couches avec sablage entre chaque pour un fini parfaitement uniforme.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Armoires de cuisine',
    text: 'Alternative économique au remplacement. Démontage, sablage, apprêt, 2-3 couches de peinture alkyde hybride, remontage.',
    link: '/services/peinture-interieure/armoires-de-cuisine',
    linkLabel: 'Voir notre service armoires',
    popular: true,
  },
  {
    icon: FaUtensils,
    title: 'Cuisine (murs)',
    text: 'Peinture résistante à la graisse et à l\'humidité. Fini lavable recommandé : perle ou semi-brillant. Coordination couleurs murs-armoires.',
    link: null,
  },
  {
    icon: FaBath,
    title: 'Salle de bain',
    text: 'Fini semi-brillant anti-humidité obligatoire. Traitement anti-moisissure si nécessaire. Ventilation vérifiée avant application.',
    link: null,
  },
  {
    icon: FaBorderAll,
    title: 'Boiseries, moulures et portes',
    text: 'Sablage, apprêt, peinture alkyde ou latex en fini semi-brillant. Découpes précises à la main. Le travail qui distingue un pro.',
    link: null,
  },
  {
    icon: FaArrowsAlt,
    title: 'Escaliers et cage d\'escalier',
    text: 'Équipement spécialisé pour les hauteurs. Peinture et/ou teinture des marches, contremarches, rampes et murs.',
    link: null,
  },
  {
    icon: FaBuilding,
    title: 'Plafonds hauts et cathédrales',
    text: 'Échafaudage professionnel et pistolet airless pour les plafonds hors d\'atteinte. Expertise en sécurité.',
    link: null,
  },
  {
    icon: FaWarehouse,
    title: 'Sous-sol',
    text: 'Gestion de l\'humidité, murs de fondation, plancher de béton. Couleurs claires recommandées pour compenser l\'éclairage limité.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Combien de temps dure un projet de peinture intérieure\u00A0?',
    answer: 'La durée dépend surtout du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Un projet simple peut prendre 1 à 2 jours, tandis qu\'un projet plus complet avec réparations, sablage et plusieurs couches peut prendre plus longtemps. Une soumission détaillée permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Est-ce que vous protégez les meubles et les planchers avant de peindre\u00A0?',
    answer: 'Oui, toujours. La protection des surfaces fait partie intégrante de notre processus. Nous couvrons les planchers, protégeons les meubles et utilisons les bons matériaux pour éviter les éclaboussures, les traces ou les dommages pendant les travaux. Le chantier est également nettoyé à la fin de chaque journée.',
  },
  {
    question: 'Combien de couches de peinture faut-il pour un bon résultat\u00A0?',
    answer: 'Dans la majorité des cas, deux couches sont recommandées pour obtenir un fini uniforme, durable et professionnel. Selon la couleur existante, le type de surface ou le changement de teinte, une couche d\'apprêt peut aussi être nécessaire. Le bon nombre de couches dépend toujours de l\'état réel des murs et du résultat recherché.',
  },
  {
    question: 'Peinturez-vous aussi les armoires, boiseries et moulures\u00A0?',
    answer: 'Oui. Nous réalisons aussi la peinture d\'armoires de cuisine, de moulures, de portes, de cadrages et d\'autres boiseries intérieures. Ces éléments demandent souvent une préparation plus minutieuse et des produits adaptés pour assurer une finition durable, nette et résistante à l\'usure.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure à Montréal',
    description: 'Page locale - intérieur résidentiel et commercial dans la métropole.',
    to: '/peinture-interieure-montreal',
  },
  {
    title: 'Peinture extérieure',
    description: 'Revêtement, balcon, clôture et surfaces extérieures.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Service complet pour maisons, condos et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, rebouchage, calfeutrage et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Trous, fissures, joints - surfaces remises en état avant finition.',
    to: '/services/reparation-de-platre-et-gypse',
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

export default function PeintureInterieurePage() {
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
        name: 'Peinture intérieure',
        item: 'https://leleverdupinceau.ca/services/peinture-interieure',
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
      before: chambreVerteAvant,
      after: chambreVerteApres,
      description: 'Chambre - murs verts repeints en blanc, Montréal',
    },
    {
      before: hallEntreeAvant,
      after: hallEntreeApres,
      description: 'Hall d\'entrée - murs, plafond et portes, Montréal',
    },
];

  return (
    <Fragment>
      <SEOHead
        title="Peinture intérieure | Murs, plafonds et boiseries | Le Lever du Pinceau"
        description="Service de peinture intérieure: murs, plafonds, boiseries et finitions. Préparation soignée, chantier propre, licence RBQ. Grand Montréal. Soumission gratuite."
        canonicalPath="/services/peinture-interieure"
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture intérieure'
          imageBackground={interieureHeroImg}
          imageAlt='Peinture intérieure - peintre professionnel au travail'
          overlayBg='rgba(0, 0, 0, 0.50)'
          title='Peinture intérieure'
          subtitle='Murs, plafonds, baies vitrées, boiseries.'
          description='Techniques et finitions impeccables pour chaque pièce.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS TECHNIQUES ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Ce qui distingue notre peinture intérieure"
          subtitle="Des techniques maîtrisées pour chaque surface de votre intérieur"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - SPÉCIALITÉS PAR PIÈCE ===== */}
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
                  Chaque pièce mérite une attention particulière
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Nous adaptons nos techniques et nos produits selon l&apos;espace à peindre
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
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
          title="Résultats de nos projets de peinture intérieure"
          subtitle="Finitions soignées, surfaces préparées et projets intérieurs réalisés à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <ServiceGuaranteeSection
          body="Chaque projet est réalisé avec les bons produits, les bonnes techniques et le niveau de soin que vous méritez. Si le résultat ne vous convient pas, nous revenons corriger sans frais supplémentaires."
          onCtaClick={onOpen}
        />

        <FAQSection
          title="Questions fréquentes sur la peinture intérieure"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services connexes"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Prêt à transformer votre intérieur\u00A0?'}
          subtitle={'Soumission gratuite en moins de 24h'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
