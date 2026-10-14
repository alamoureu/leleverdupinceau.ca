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
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaPaintBrush,
  FaFlask,
  FaRuler,
  FaBroom,
  FaAward,
  FaExclamationTriangle,
  FaTimesCircle,
  FaGavel,
  FaBan,
  FaCertificate,
  FaShieldAlt,
  FaUserTie,
  FaCheckSquare,
  FaClipboardList,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import { TRUST_BANNER_AIR_SPACE } from '../constants/sectionSpacing';
import ReviewsSection from '../home-page/ReviewsSection';
import FAQSection from '../home-page/FAQSection';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import CtaButton from '../home-page/CtaButton';
import ServiceCard from '../home-page/ServiceCard';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import peintreProPhotoHeader from '../images/1-page-principale/service hub/Photo header/IMG_6771.webp';
import peintreProResidentielle from '../images/1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.webp';
import peintreProCommerciale from '../images/1-page-principale/peintre pro/Peinture commerciale/IMG_6751.webp';
import peintreProInterieure from '../images/1-page-principale/peintre pro/Peinture intérieure/IMG_6764.webp';
import peintreProExterieure from '../images/1-page-principale/peintre pro/Peinture extérieure/IMG_6753.webp';
import peintreProIndustrielle from '../images/1-page-principale/peintre pro/Peinture industrielle/IMG_6752.webp';

const WHY_PROFESSIONAL = [
  {
    icon: FaPaintBrush,
    title: 'Une préparation que personne ne voit, mais que tout le monde remarque',
    text: 'Un peintre professionnel consacre 60\u00A0à\u00A070\u00A0% du temps à la préparation : réparation des fissures, sablage, apprêt, protection des surfaces. C\'est cette étape invisible qui fait la différence entre une peinture qui dure 2\u00A0ans et une qui dure 10\u00A0ans.',
  },
  {
    icon: FaFlask,
    title: 'Des produits choisis pour votre situation, pas les moins chers',
    text: 'Chaque pièce a ses exigences : fini lavable pour la cuisine, zéro COV pour la chambre de bébé, anti-humidité pour la salle de bain. Un professionnel sait quel produit utiliser où, et pourquoi.',
  },
  {
    icon: FaRuler,
    title: 'Des lignes nettes et une finition uniforme',
    text: 'Les découpes au plafond, le long des moulures, autour des fenêtres, c\'est le travail de précision qui distingue un professionnel d\'un amateur. Pas de ruban qui arrache la peinture, pas de coulisses.',
  },
  {
    icon: FaBroom,
    title: 'Un chantier propre du début à la fin',
    text: 'Protection complète de vos planchers, meubles et accessoires. Nettoyage quotidien. Vous retrouvez votre espace propre à la fin de chaque journée de travail.',
  },
  {
    icon: FaAward,
    title: 'Une garantie sur les travaux',
    text: 'Un peintre licencié RBQ est légalement responsable de son travail. Si un problème survient, vous avez un recours. Avec un peintre au noir, vous n\'avez rien.',
  },
  {
    icon: FaClipboardList,
    title: 'Gestion des travaux',
    text: 'Un peintre professionnel arrive avec une équipe et un gestionnaire de projet qui s\'occupe de vos travaux de A à Z. Vous savez où en est le chantier à chaque étape, grâce à une communication claire du début à la fin.',
  },
];

const RISKS = [
  {
    icon: FaExclamationTriangle,
    title: 'Aucune assurance en cas de dommage',
    text: 'Si le peintre abime votre plancher, brise un luminaire ou cause un dégât d\'eau, vous payez de votre poche.',
  },
  {
    icon: FaTimesCircle,
    title: 'Aucun recours si le travail est bâclé',
    text: 'Si la peinture écaille après 3 mois, vous n\'avez aucun recours légal.',
  },
  {
    icon: FaGavel,
    title: 'Risques légaux pour le client',
    text: 'Au Québec, faire exécuter des travaux par un entrepreneur sans licence RBQ peut entraîner des amendes pour le client aussi.',
  },
  {
    icon: FaBan,
    title: 'Aucun contrat, aucune obligation',
    text: 'Aucun contrat signifie aucune obligation de terminer. Il peut disparaître avec votre acompte.',
  },
];

const CERTIFICATIONS = [
  {
    icon: FaCertificate,
    title: 'Licence RBQ #5864\u20111481\u201101',
    text: 'La Régie du bâtiment du Québec exige que tout entrepreneur en peinture détienne une licence valide. Cette licence confirme que nous respectons les normes de l\'industrie, que nos peintres sont qualifiés et que nous sommes imputables de notre travail.',
  },
  {
    icon: FaShieldAlt,
    title: 'Assurance responsabilité civile de 5\u00A0millions\u00A0$',
    text: 'En cas de dommage accidentel à votre propriété pendant les travaux, vous êtes couvert. Notre assurance protège autant vous que notre équipe. C\'est une sécurité que les peintres non licenciés ne peuvent pas offrir.',
  },
  {
    icon: FaUserTie,
    title: 'Des peintres de métier, pas des étudiants',
    text: 'Chaque peintre de notre équipe a au minimum 10 ans d\'expérience sur le terrain. Ils connaissent les techniques, les produits et les défis spécifiques au climat québécois.',
  },
];

const CHECKLIST = [
  {
    question: 'Est-ce qu\'il détient une licence RBQ valide\u00A0?',
    answer: 'Vérifiez sur le site de la RBQ. Sans licence, les travaux ne sont pas protégés.',
  },
  {
    question: 'Est-ce qu\'il est assuré\u00A0?',
    answer: 'Demandez une preuve d\'assurance responsabilité civile. En cas de dommage, c\'est votre protection.',
  },
  {
    question: 'Fournit-il une soumission détaillée par écrit\u00A0?',
    answer: 'Un devis verbal ne vaut rien. Exigez un document détaillé avec le détail des travaux, produits et prix.',
  },
  {
    question: 'A-t-il des avis vérifiés\u00A0?',
    answer: 'Regardez ses avis Google, pas seulement son site web. Des vrais avis de vrais clients.',
  },
  {
    question: 'Peut-il montrer des photos de projets récents\u00A0?',
    answer: 'Un portfolio de projets réels prouve la qualité de son travail.',
  },
  {
    question: 'Offre-t-il une garantie écrite\u00A0?',
    answer: 'Sans garantie, vous n\'avez aucun recours si le travail se détériore rapidement.',
  },
  {
    question: 'Est-ce qu\'il utilise des peintures de qualité\u00A0?',
    answer: 'Les marques comme Betonel et Sherwin Williams coûtent plus cher mais durent plus longtemps. Méfiez-vous des « prix très bas ».',
  },
];

const EXPERTISE_REVIEWS = [
  {
    name: 'Chantal Baril',
    time: 'Il y a 2 mois',
    content: 'Je suis très ravie des travaux qui ont été effectués à notre résidence. J\'ai reçu un devis rapidement et les travaux ont débuté tel que convenu, malgré une météo inclémente. Le résultat a dépassé mes attentes\u00A0; le souci du détail est apparent\u00A0!',
  },
  {
    name: 'Maureen Beech',
    time: 'Il y a 6 jours',
    content: 'Très ravie des résultats\u00A0! Équipe professionnelle et agréable. Projets livrés dans les délais et lieux laissés impeccables.',
  },
  {
    name: 'Marie Lambert',
    time: 'Il y a 1 mois',
    content: 'Nous sommes très heureux de notre expérience avec Le Lever Du Pinceau. Leur travail minutieux et leur grande courtoisie en font une référence pour quiconque recherche une main-d\'oeuvre fiable et efficace.',
  },
  {
    name: 'Frédéric Choinière',
    time: 'Il y a 1 mois',
    content: 'J\'ai fait appel à l\'équipe pour des toits difficiles d\'accès. Ils ont fait un travail minutieux, sécuritaire et à l\'écoute\u00A0!',
  },
  {
    name: 'Mike S',
    time: 'Il y a 1 mois',
    content: 'Excellente expérience. Très bons communicateurs. Super facile de travailler avec eux. Ils sont arrivés à l\'heure, ont fourni un devis raisonnable, ont travaillé efficacement et ont fait un excellent travail (plâtre et peinture). Je les engagerai sans hésiter à nouveau.',
  },
];

const FAQS = [
  {
    question: 'Quelle est la différence entre un peintre professionnel et un peintre amateur\u00A0?',
    answer: 'Un peintre professionnel détient une licence RBQ, possède une assurance responsabilité, utilise des produits de qualité professionnelle et maîtrise les techniques de préparation qui assurent un résultat durable. Un amateur peut offrir un prix plus bas, mais sans garantie, sans assurance et souvent avec un résultat qui ne tient pas dans le temps.',
  },
  {
    question: 'C\'est quoi une licence RBQ et pourquoi c\'est important\u00A0?',
    answer: 'La licence RBQ (Régie du bâtiment du Québec) est une certification obligatoire pour tout entrepreneur en construction au Québec. Elle garantit que l\'entreprise respecte les normes de l\'industrie, possède les qualifications requises et est imputable en cas de problème. Engager un peintre sans licence vous expose à des risques légaux et financiers.',
  },
  {
    question: 'Est-ce que ça vaut la peine de payer plus cher pour un peintre professionnel\u00A0?',
    answer: 'Oui. Un peintre professionnel utilise de meilleurs produits, prépare les surfaces correctement et garantit son travail. Le résultat dure 2 à 3 fois plus longtemps qu\'un travail amateur. À moyen terme, vous économisez en évitant les reprises et retouches fréquentes.',
  },
  {
    question: 'Comment savoir si un peintre est vraiment licencié\u00A0?',
    answer: 'Vous pouvez vérifier la licence de n\'importe quel entrepreneur sur le site de la RBQ (rbq.gouv.qc.ca). Entrez le numéro de licence ou le nom de l\'entreprise. Notre licence est le\u00A0#5864\u20111481\u201101.',
  },
  {
    question: 'Travaillez-vous sur des projets commerciaux\u00A0?',
    answer: 'Oui, nous sommes spécialisés dans les projets commerciaux et comprenons les exigences spécifiques des entreprises. Nous intervenons dans les bureaux, commerces, restaurants, cliniques, écoles, halls d\'immeubles. Nous offrons des horaires flexibles (soirs et fins de semaine) pour minimiser l\'impact sur vos opérations.',
  },
  {
    question: 'Est-ce que vous protégez les surfaces avant de peindre\u00A0?',
    answer: 'Oui, absolument. La protection fait partie intégrante de notre processus professionnel. Nous couvrons systématiquement les planchers avec des toiles protectrices, protégeons tous les meubles et objets, masquons les cadres de portes et fenêtres, et utilisons du ruban de masquage de qualité professionnelle pour garantir des lignes nettes. Nous nettoyons également entièrement après chaque journée de travail.',
  },
  {
    question: 'Quel est le prix d\'un peintre professionnel à Montréal\u00A0?',
    answer: 'Le coût d\'un peintre professionnel varie selon plusieurs facteurs : la surface à peindre, l\'état des murs, la préparation nécessaire et les produits utilisés. À Montréal, la peinture intérieure résidentielle se situe généralement entre 2\u00A0$ et 4\u00A0$ par pied carré, incluant la préparation, l\'application et le nettoyage. Les projets extérieurs ou spécialisés peuvent varier davantage. Une soumission détaillée permet d\'obtenir un prix précis basé sur votre espace, vos besoins et les conditions réelles du projet.',
  },
];

const INTERNAL_LINKS = [
  {
    image: peintreProInterieure,
    title: 'Peinture intérieure',
    description: 'Murs, plafonds, portes, escaliers.',
    link: '/services/peinture-interieure',
  },
  {
    image: peintreProExterieure,
    title: 'Peinture extérieure',
    description: 'Revêtements, clôtures, bois, brique, aluminium.',
    link: '/services/peinture-exterieure',
  },
  {
    image: peintreProResidentielle,
    title: 'Peinture résidentielle',
    description: 'Maisons, condos, logements, multi-étages.',
    link: '/services/peinture-residentielle',
  },
  {
    image: peintreProCommerciale,
    title: 'Peinture commerciale',
    description: 'Bureaux, commerces, restaurants, immeubles.',
    link: '/services/peinture-commerciale',
  },
  {
    image: peintreProIndustrielle,
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et Rive-Sud.',
    link: '/secteurs',
  },
];

const HERO_BREADCRUMB = [
  { label: 'Accueil', to: '/' },
  { label: 'Peintre professionnel' },
];

export default function PeintreProfessionnelPage() {
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
        name: 'Peintre professionnel',
        item: 'https://leleverdupinceau.ca/peintre-professionnel',
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pourquoi faire appel à un peintre professionnel à Montréal?',
    description:
      'Guide complet sur les avantages d\'engager un peintre professionnel licencié RBQ à Montréal, les risques d\'engager au noir et comment vérifier un peintre.',
    author: {
      '@type': 'Organization',
      name: 'Le Lever du Pinceau',
      url: 'https://leleverdupinceau.ca',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Le Lever du Pinceau',
      url: 'https://leleverdupinceau.ca',
    },
    url: 'https://leleverdupinceau.ca/peintre-professionnel',
  };

  return (
    <Fragment>
      <SEOHead
        title="Pourquoi engager un peintre pro | RBQ | Le Lever du Pinceau"
        description="Avantages d'un peintre licencié RBQ, risques du travail au noir, et critères pour vérifier un peintre avant de signer. Page informative par Le Lever du Pinceau."
        canonicalPath="/peintre-professionnel"
        schemaArray={[breadcrumbSchema, faqSchema, articleSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext='Peintre professionnel'
          imageBackground={peintreProPhotoHeader}
          imageAlt='Peintre professionnel en action - Le Lever du Pinceau'
          overlayBg='rgba(0, 0, 0, 0.45)'
          title='Pourquoi un peintre professionnel ?'
          subtitle="Licence RBQ, assurance et garanties."
          description='Un chantier géré de A à Z.'
          buttonText='Obtenir ma soumission gratuite'
          breadcrumb={HERO_BREADCRUMB}
        />
{/* ===== SECTION 3 - POURQUOI UN PEINTRE PROFESSIONNEL ===== */}
        <Box
          pt={TRUST_BANNER_BELOW_PT}
          pb={{ base: 14, md: 18, lg: 20 }}
          bg="white"
        >
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={TRUST_BANNER_AIR_SPACE}>
              <Stack spacing={{ base: 2, md: 3 }} maxW="900px">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                  Ce que vous obtenez en engageant un peintre professionnel
                    </Heading>
                <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                  Engager un peintre professionnel à Montréal ne garantit pas seulement un résultat esthétique. Cela garantit aussi que les travaux sont réalisés selon les normes de l'industrie, avec des produits adaptés et par des professionnels formés. Dans ce guide, découvrez pourquoi faire appel à un peintre licencié RBQ fait toute la différence pour la durabilité, la sécurité et la qualité du résultat.
                    </Text>
                  </Stack>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
                {WHY_PROFESSIONAL.map((item, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 5, md: 6 }}
                    boxShadow="0 2px 12px rgba(0,0,0,0.05)"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                  >
                    <HStack spacing={4} mb={3} align="center">
                      <Flex
                        w="44px"
                        h="44px"
                        borderRadius="lg"
                        bg="brand.50"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <Icon as={item.icon} color="brand.500" boxSize={5} />
                      </Flex>
                      <Text
                        fontWeight="bold"
                        color="gray.800"
                        fontSize={{ base: 'sm', md: 'md' }}
                        lineHeight="1.3"
                      >
                        {item.title}
                      </Text>
                    </HStack>
                    <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.7">
                      {item.text}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
                </Stack>
              </Container>
            </Box>

        {/* ===== SECTION 4 - RISQUES D'ENGAGER AU NOIR ===== */}
        <Box py={{ base: 14, md: 18, lg: 20 }} bg="gray.50">
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Stack spacing={3} maxW="800px">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                  Les risques réels d'engager un peintre sans licence
                    </Heading>
                  </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
                {RISKS.map((risk, i) => (
                  <Box
                    key={i}
                    bg="white"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="xl"
                    p={{ base: 5, md: 6 }}
                    boxShadow="0 2px 8px rgba(0,0,0,0.04)"
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                  >
                  <Flex
                      w="44px"
                      h="44px"
                      borderRadius="lg"
                      bg="brand.700"
                      align="center"
                    justify="center"
                      mb={3}
                    >
                      <Icon as={risk.icon} color="white" boxSize={5} />
                    </Flex>
                    <Text fontWeight="bold" color="gray.800" mb={2} fontSize={{ base: 'sm', md: 'md' }}>
                      {risk.title}
                    </Text>
                    <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.6">
                      {risk.text}
                    </Text>
                      </Box>
                    ))}
              </SimpleGrid>

              <Box
                bg="white"
                border="1px solid"
                borderColor="brand.200"
                borderRadius="xl"
                p={{ base: 5, md: 6 }}
                display="inline-flex"
                alignItems={{ base: 'flex-start', md: 'center' }}
                gap={3}
                flexDirection={{ base: 'column', md: 'row' }}
              >
                <Text color="gray.700" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
                  Vérifiez notre licence RBQ :
                  <Text as="span" fontWeight="bold" color="brand.600" mx={1} whiteSpace="nowrap">
                    #5864-1481-01
                  </Text>
                </Text>
                <Link
                  href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/5864148101?mode=Entreprise"
                  isExternal
                      color="brand.500"
                  fontWeight="bold"
                  fontSize={{ base: 'sm', md: 'md' }}
                  _hover={{ textDecoration: 'underline' }}
                  flexShrink={0}
                >
                  Consulter le registre RBQ
                  <ArrowForwardIcon ml={1} />
                </Link>
                  </Box>
                </Stack>
              </Container>
            </Box>

        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de nos peintres professionnels"
          subtitle="Voici des exemples de ce que nos peintres professionnels ont réalisé à Montréal et dans les environs."
        />

        {/* ===== SECTION 5 - NOS CERTIFICATIONS ===== */}
        <Box py={{ base: 14, md: 18, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Heading
                as="h2"
                size="section"
                fontWeight="bold"
                color="gray.800"
                maxW="600px"
              >
                Notre expertise, vérifiable et garantie
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                {CERTIFICATIONS.map((cert, i) => (
                  <Box
                    key={i}
                    bg="gray.50"
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="2xl"
                    p={{ base: 6, md: 8 }}
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                  >
                    <Flex
                      w="56px"
                      h="56px"
              borderRadius="xl"
                      bg="brand.500"
                      align="center"
                      justify="center"
                      mb={4}
                    >
                      <Icon as={cert.icon} color="white" boxSize={6} />
                    </Flex>
                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" color="gray.800" mb={3}>
                      {cert.title}
                    </Heading>
                    <Text color="gray.600" lineHeight="1.7" fontSize={{ base: 'sm', md: 'md' }}>
                      {cert.text}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 6 - CHECKLIST 7 QUESTIONS ===== */}
        <Box py={{ base: 14, md: 18, lg: 20 }} bg="gray.50">
              <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10} align="center">
              <Stack spacing={3} maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto" textAlign="center">
                    <Heading
                      as="h2"
                      size="section"
                      fontWeight="bold"
                      color="gray.800"
                    >
                  7 questions à poser avant d'engager un peintre
                    </Heading>
                <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                  Un guide rapide pour éviter les mauvaises surprises
                </Text>
              </Stack>

              <Box
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="2xl"
                p={{ base: 5, md: 8 }}
                boxShadow="0 2px 16px rgba(0,0,0,0.05)"
                maxW="800px"
                mx="auto"
                w="100%"
              >
                <Stack spacing={5}>
                  {CHECKLIST.map((item, i) => (
                    <Flex key={i} gap={4} align="flex-start">
                      <Icon
                        as={FaCheckSquare}
                        color="brand.500"
                        boxSize={5}
                        mt={0.5}
                        flexShrink={0}
                      />
                      <Box>
                        <Text fontWeight="bold" color="gray.800" fontSize={{ base: 'sm', md: 'md' }} mb={0.5}>
                          {item.question}
                        </Text>
                        <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.6">
                          {item.answer}
                        </Text>
                      </Box>
                    </Flex>
                  ))}
                </Stack>
              </Box>

              <Box textAlign="center" maxW={{ base: '100%', md: '960px', lg: '1100px' }} mx="auto" w="100%">
                    <Text
                      textStyle="bodyLarge"
                  fontWeight="medium"
                  color="gray.700"
                  mb={4}
                    >
                  Le Lever du Pinceau coche toutes ces cases. Vérifiez par vous-même.
                    </Text>
                <CtaButton onClick={onOpen} rightIcon={<ArrowForwardIcon />}>
                  Obtenir ma soumission gratuite
                </CtaButton>
              </Box>
                </Stack>
              </Container>
            </Box>

        {/* ===== SECTION 7 - TEMOIGNAGES (orientés expertise) ===== */}
        <ReviewsSection
          title="Ce que nos clients disent de notre professionnalisme"
          subtitle="Des avis qui reflètent notre rigueur, notre propreté et notre respect des délais."
          reviewsOverride={EXPERTISE_REVIEWS}
          sectionBg="white"
        />

        <FAQSection
          title="Questions fréquentes sur les peintres professionnels"
          faqsOverride={FAQS}
          emitSchema={false}
        />

        {/* ===== LIENS INTERNES ===== */}
        <Box py={{ base: 14, md: 18, lg: 20 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Heading
                as="h2"
                size="section"
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                Explorez nos services
              </Heading>

              <Flex
                maxW="1200px"
                mx="auto"
                w="100%"
                wrap="wrap"
                justify="center"
                gap={{ base: 4, md: 6 }}
              >
                {INTERNAL_LINKS.map((item, index) => (
                  <Box
                    key={index}
                    as={RouterLink}
                    to={item.link}
                    _hover={{ textDecoration: 'none' }}
                    w={{ base: '100%', md: 'calc(50% - 12px)', lg: 'calc(33.333% - 16px)' }}
                    maxW={{ lg: '380px' }}
                    display="block"
                  >
                    <ServiceCard
                      image={item.image}
                      title={item.title}
                      subtitle={item.description}
                      stripText={item.description}
                      noHoverBorder
                      fillHeight
                    />
                  </Box>
                ))}
              </Flex>

              <Box textAlign="center" pt={2}>
                <Link
                  as={RouterLink}
                  to="/realisations"
                  _hover={{ textDecoration: 'none' }}
                  display="inline-block"
                >
                  <Button
                    variant="ctaOutline"
                    borderRadius="full"
                    px={{ base: 6, md: 8 }}
                    whiteSpace="nowrap"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    {'Nos\u00A0réalisations'}
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Container>
        </Box>

        <FinalCTASection
          title={'Prêt à travailler avec des professionnels\u00A0?'}
          subtitle="Obtenez votre soumission gratuite en moins de 24h"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
