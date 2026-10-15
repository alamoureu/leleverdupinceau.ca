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
  FaSprayCan,
  FaBolt,
  FaLayerGroup,
  FaSlidersH,
  FaDoorOpen,
  FaUtensils,
  FaBuilding,
  FaExpand,
  FaTh,
  FaTools,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import { servicePageSchema } from '../components/ServicePageSections';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import ContactFormSection from '../home-page/ContactFormSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';

import pistoletHeroImg from '../images/L2 Services specialise/Photo page -pistolet/header-spray-le-lever.webp';
import pistoletAvant1 from '../images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_5977 3.webp';
import pistoletApres1 from '../images/L2 Services specialise/Photo page -pistolet/photo avant-après/IMG_5978 3.webp';
import revetementAvant from '../images/3-ville/longueuil/avant-apres/IMG_0830.webp';
import revetementApres from '../images/3-ville/longueuil/avant-apres/IMG_0831.webp';
import armoiresBlanchesAvant from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5975.webp';
import armoiresBlanchesApres from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_5976.webp';
import armoiresGrisesAvant from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8114.webp';
import armoiresGrisesApres from '../images/L3 Sous services/Photo page armoires de cuisine/Avant après/IMG_8120.webp';

import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Peinture au pistolet' },
];

const CHECKMARKS = [
  {
    icon: FaSprayCan,
    title: 'Finition plus uniforme sur grandes surfaces',
    text: 'Le pistolet permet une application régulière sur de larges murs, plafonds ouverts, portes multiples ou surfaces répétitives où l\'uniformité du fini compte.',
  },
  {
    icon: FaBuilding,
    title: 'Méthode idéale pour plafonds ouverts, structures et reliefs',
    text: 'Sur des poutres, conduits peints, cages d\'escalier, plafonds techniques ou surfaces texturées, le rouleau n\'est pas toujours la meilleure option.',
  },
  {
    icon: FaBolt,
    title: 'Rapidité d\'exécution sur les bons types de projets',
    text: 'Quand la configuration s\'y prête, le pistolet permet d\'avancer plus vite sans compromettre la qualité du fini.',
  },
  {
    icon: FaTools,
    title: 'Masquage et protection plus exigeants, mais mieux contrôlés',
    text: 'Le vrai travail se joue avant la pulvérisation : protection, confinement, séquençage et contrôle de l\'overspray. C\'est là que la rigueur fait la différence.',
  },
  {
    icon: FaDoorOpen,
    title: 'Application adaptée aux portes, boiseries et éléments finis',
    text: 'Pour certains éléments comme les portes, cadrages, armoires ou boiseries, le pistolet peut offrir un fini plus lisse et plus régulier qu\'une application au rouleau ou au pinceau.',
  },
  {
    icon: FaSlidersH,
    title: 'Choix de méthode selon le support, pas par automatisme',
    text: 'Le pistolet n\'est pas toujours la bonne réponse. Nous le choisissons seulement quand il améliore réellement le résultat, la vitesse ou l\'uniformité.',
  },
];

const SURFACES_CONTEXTES = [
  {
    icon: FaDoorOpen,
    title: 'Portes, moulures et boiseries',
    text: 'Quand le projet demande une finition lisse et régulière sur plusieurs éléments finis, la pulvérisation peut offrir un meilleur rendu visuel qu\'une application traditionnelle.',
    link: null,
  },
  {
    icon: FaUtensils,
    title: 'Armoires et éléments fabriqués',
    text: 'Le pistolet est souvent la bonne méthode pour des armoires, vanités ou panneaux qui demandent une finition uniforme et sans traces de rouleau.',
    link: '/services/peinture-interieure/armoires-de-cuisine',
    linkLabel: 'Voir notre service armoires',
  },
  {
    icon: FaBuilding,
    title: 'Plafonds ouverts et structures visibles',
    text: 'Conduits, poutres, cages d\'escalier ouvertes, plafonds de sous-sol ou plafonds commerciaux ouverts se prêtent bien à la pulvérisation lorsqu\'un rendu homogène est recherché.',
    link: null,
  },
  {
    icon: FaExpand,
    title: 'Grandes surfaces répétitives',
    text: 'Quand la configuration du chantier le permet, le pistolet accélère l\'application sur des surfaces larges ou répétitives où l\'uniformité est prioritaire.',
    link: null,
  },
  {
    icon: FaTh,
    title: 'Surfaces texturées ou reliefs',
    text: 'Certaines textures, détails architecturaux ou supports irréguliers reçoivent mieux la peinture au pistolet qu\'au rouleau pour obtenir une couverture homogène.',
    link: null,
  },
  {
    icon: FaLayerGroup,
    title: 'Projets où le contrôle du chantier est essentiel',
    text: 'La pulvérisation demande un masquage rigoureux. Le site doit être bien préparé, protégé et séquencé pour éviter l\'overspray et garder un chantier propre.',
    link: null,
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre peindre au pistolet et au rouleau\u00A0?',
    answer: 'Le pistolet pulvérise la peinture de façon plus uniforme sur certaines surfaces, surtout les grandes zones, les plafonds ouverts, les portes ou les éléments détaillés. Le rouleau et le pinceau restent toutefois préférables dans plusieurs contextes. La bonne méthode dépend du support, de l\'accès et du résultat recherché.',
  },
  {
    question: 'Est-ce que la peinture au pistolet fait plus de dégâts\u00A0?',
    answer: 'Elle demande surtout une meilleure préparation. Le contrôle de l\'overspray passe par un masquage rigoureux, la protection des surfaces, le séquençage du chantier et la bonne technique d\'application. Bien exécutée, la méthode reste propre et très efficace.',
  },
  {
    question: 'Quelles surfaces se prêtent le mieux à la peinture au pistolet\u00A0?',
    answer: 'Les portes, moulures, armoires, plafonds ouverts, structures visibles et certaines grandes surfaces répétitives sont souvent de bons candidats. Nous évaluons chaque projet pour confirmer si le pistolet est réellement la meilleure option.',
  },
  {
    question: 'Peut-on peindre un plafond ouvert ou un sous-sol au pistolet\u00A0?',
    answer: 'Oui, c\'est même souvent l\'un des meilleurs cas d\'usage. Sur des poutres, conduits, tuyaux ou plafonds irréguliers, le pistolet permet une couverture plus régulière et une exécution plus rapide que les méthodes traditionnelles.',
  },
  {
    question: 'Est-ce que vous utilisez aussi le pistolet pour les armoires ou boiseries\u00A0?',
    answer: 'Oui. Pour des armoires, portes, boiseries ou éléments fabriqués, la pulvérisation peut offrir un fini plus lisse et plus uniforme. Le résultat dépend toutefois de la préparation, du sablage, de l\'apprêt et du produit utilisé.',
  },
  {
    question: 'La peinture au pistolet est-elle toujours le meilleur choix\u00A0?',
    answer: 'Non. Nous utilisons le pistolet quand il améliore réellement le résultat, la vitesse ou l\'uniformité. Sur certains projets, le rouleau et le pinceau restent plus appropriés. La méthode est choisie selon le support, le chantier et l\'objectif final.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture intérieure',
    description: 'Application, finis, couches et techniques pour l\'intérieur.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture industrielle',
    description: 'Entrepôt, usine, stationnement - époxy et revêtements résistants.',
    to: '/services/peinture-industrielle',
  },
  {
    title: 'Préparation de surfaces',
    description: 'Sablage, rebouchage, calfeutrage et apprêt avant peinture.',
    to: '/services/preparation-de-surfaces',
  },
  {
    title: 'Armoires de cuisine',
    description: 'Transformation au pistolet pour un fini laqué professionnel.',
    to: '/services/peinture-interieure/armoires-de-cuisine',
  },
  {
    title: 'Pourquoi engager un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
  {
    title: 'Nos réalisations',
    description: 'Projets complétés au pistolet et autres techniques - avant/après.',
    to: '/realisations',
  },
];

export default function PeintureAuPistoletPage() {
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
        name: 'Peinture au pistolet',
        item: 'https://leleverdupinceau.ca/services/peinture-au-pistolet',
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
      before: pistoletAvant1,
      after: pistoletApres1,
      description: 'Peinture au pistolet - finition uniforme',
    },
    {
      before: revetementAvant,
      after: revetementApres,
      description: 'Revêtement extérieur écaillé remis à neuf au pistolet - avant / après',
    },
    {
      before: armoiresBlanchesAvant,
      after: armoiresBlanchesApres,
      description: 'Armoires de cuisine en chêne peintes en blanc au pistolet - avant / après',
    },
    {
      before: armoiresGrisesAvant,
      after: armoiresGrisesApres,
      description: 'Armoires de cuisine en bois peintes en gris au pistolet - avant / après',
    },
  ];

  return (
    <Fragment>
      <SEOHead
        title="Peinture au pistolet à Montréal | Finition uniforme | Le Lever du Pinceau"
        description="Service de peinture au pistolet à Montréal pour plafonds ouverts, boiseries, portes, armoires et grandes surfaces. Finition uniforme, masquage rigoureux et soumission gratuite."
        canonicalPath="/services/peinture-au-pistolet"
        schemaArray={[
          breadcrumbSchema,
          faqSchema,
          servicePageSchema({
            name: 'Peinture au pistolet à Montréal',
            path: '/services/peinture-au-pistolet',
            description:
              'Service de peinture au pistolet à Montréal pour plafonds ouverts, boiseries, portes, armoires et grandes surfaces. Finition uniforme, masquage rigoureux et soumission gratuite.',
            serviceType: 'Peinture au pistolet',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peinture au pistolet'
          imageBackground={pistoletHeroImg}
          imageAlt='Peinture au pistolet à Montréal - application professionnelle sur chantier contrôlé'
          title='Peinture au pistolet à Montréal'
          subtitle='Fini uniforme et rapide pour grandes surfaces, portes et boiseries.'
          description='Masquage rigoureux pour un rendu uniforme et contrôlé.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - CHECKMARKS MÉTHODE D'APPLICATION ===== */}
        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Quand le pistolet est la bonne méthode, le résultat se voit"
          subtitle="Une application plus uniforme, plus rapide et mieux adaptée à certaines surfaces, à condition que la préparation et le masquage soient rigoureux"
          items={CHECKMARKS}
          variant="inline"
          sectionBg="white"
        />

        {/* ===== SECTION 4 - AVANT / APRÈS ===== */}
        <BeforeAfterCarouselSection
          isFr={true}
          title="Des projets où la méthode fait toute la différence"
          subtitle="Revêtements, armoires, boiseries et grandes surfaces - avant et après application au pistolet à Montréal."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />
        <ContactFormSection sectionPaddingTop={{ base: 12, md: 16 }} sectionPaddingBottom={{ base: 12, md: 16 }} />

        {/* ===== SECTION 5 - SURFACES ET CONTEXTES ADAPTÉS ===== */}
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
                  Une méthode adaptée à certaines surfaces, pas à toutes
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Le pistolet excelle quand le support, l&apos;accès et le niveau de finition recherché s&apos;y prêtent
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {SURFACES_CONTEXTES.map((item, i) => (
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
                  >
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

        {/* ===== SECTION 6 - GARANTIE ===== */}
        <ServiceGuaranteeSection
          title="Une méthode rapide ne veut pas dire un chantier bâclé"
          body="Le pistolet donne d'excellents résultats seulement quand la préparation, le masquage et la séquence d'application sont bien exécutés. Nous ne quittons pas le chantier tant que le résultat n'est pas propre, uniforme et conforme aux attentes."
        />

        <FAQSection
          title="Questions fréquentes sur la peinture au pistolet"
          faqsOverride={FAQS}
          sectionBg="white"
          sectionPy={{ base: 16, md: 20, lg: 24 }}
          maxW="900px"
          emitSchema={false}
        />

        <InternalLinksSection
          title="Services complémentaires"
          links={INTERNAL_LINKS}
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        />

        <FinalCTASection
          onSubmissionOpen={onOpen}
          title={'Un projet qui se prête bien à la peinture au pistolet\u00A0?'}
          subtitle={'Obtenez une soumission gratuite et voyons si cette méthode est la meilleure pour votre chantier'}
          buttonText={'Obtenir ma soumission gratuite'}
        />

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
