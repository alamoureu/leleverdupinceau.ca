import React, { Fragment, useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Link,
  Button,
  Icon,
  HStack,
  Flex,
  useDisclosure,
  SimpleGrid,
  Divider,
} from '@chakra-ui/react';
import {
  CheckCircleIcon,
  WarningTwoIcon,
} from '@chakra-ui/icons';
import appContext from '../../AppProvider';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import TrustBanner from '../home-page/TrustBanner';
import FAQSection from '../home-page/FAQSection';
import ReviewsSection from '../home-page/ReviewsSection';
import SubmissionModal from '../home-page/SubmissionModal';
import ServiceCard from '../home-page/ServiceCard';
import peintreProPhotoHeader from '../images/1-page-principale/service hub/Photo header/IMG_6771.PNG';
import peintreProResidentielle from '../images/1-page-principale/peintre pro/Peinture résidentielle/IMG_6763.PNG';
import peintreProCommerciale from '../images/1-page-principale/peintre pro/Peinture commerciale/IMG_6751.PNG';
import peintreProInterieure from '../images/1-page-principale/peintre pro/Peinture intérieure/IMG_6764.PNG';
import peintreProExterieure from '../images/1-page-principale/peintre pro/Peinture extérieure/IMG_6753.PNG';

export default function PeintreProfessionnelPage() {
  const { currentLang } = useContext(appContext);
  const isFr = currentLang === 'fr';
  const { isOpen, onOpen, onClose } = useDisclosure();

  const title = isFr
    ? 'Pourquoi faire appel à un peintre professionnel à Montréal?'
    : 'Why hire a professional painter in Montreal?';

  const subtitle = isFr
    ? 'Les avantages concrets d’engager un vrai professionnel pour vos travaux de peinture.'
    : 'The concrete benefits of hiring a true professional for your painting work.';

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
        name: isFr ? 'Peintre professionnel' : 'Professional Painter',
        item: 'https://leleverdupinceau.ca/peintre-professionnel',
      },
    ],
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: isFr
      ? 'Pourquoi engager un peintre professionnel licencié RBQ? Découvrez les avantages, les risques d’engager au noir, et comment vérifier un peintre avant de signer. Guide complet.'
      : 'Why hire an RBQ licensed professional painter? Discover the benefits, risks of under the table hiring, and how to verify a painter before signing. Complete guide.',
    publisher: {
      '@type': 'Organization',
      name: 'Le Lever du Pinceau',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.leleverdupinceau.ca/logo192.png'
      }
    }
  };

  const getWhyHirePro = () => [
    {
      title: isFr ? "Une préparation que personne ne voit, mais que tout le monde remarque" : "Preparation that no one sees, but everyone notices",
      text: isFr ? "Un peintre professionnel consacre 60 à 70% du temps à la préparation : réparation des fissures, sablage, apprêt, protection des surfaces. C’est cette étape invisible qui fait la différence entre une peinture qui dure 2 ans et une qui dure 10 ans." : "A professional painter dedicates 60 to 70% of the time to preparation: crack repair, sanding, primer, surface protection. This invisible step is the difference between paint that lasts 2 years and one that lasts 10."
    },
    {
      title: isFr ? "Des produits choisis pour votre situation, pas les moins chers" : "Products chosen for your situation, not the cheapest",
      text: isFr ? "Chaque pièce a ses exigences : fini lavable pour la cuisine, zéro COV pour la chambre de bébé, anti-humidité pour la salle de bain. Un professionnel sait quel produit utiliser où, et pourquoi." : "Every room has its requirements: washable finish for the kitchen, zero VOC for the nursery, anti-humidity for the bathroom. A professional knows what product to use where, and why."
    },
    {
      title: isFr ? "Des lignes nettes et une finition uniforme" : "Sharp lines and a uniform finish",
      text: isFr ? "Les découpes au plafond, le long des moulures, autour des fenêtres, c’est le travail de précision qui distingue un professionnel d’un amateur. Pas de ruban qui arrache la peinture, pas de coulisses." : "Cutting in at the ceiling, along moldings, around windows, is the precision work that distinguishes a professional from an amateur. No tape ripping off paint, no runs."
    },
    {
      title: isFr ? "Un chantier propre du début à la fin" : "A clean worksite from start to finish",
      text: isFr ? "Protection complète de vos planchers, meubles et accessoires. Nettoyage quotidien. Vous retrouvez votre espace propre à la fin de chaque journée de travail." : "Complete protection of your floors, furniture, and accessories. Daily cleaning. You return to a clean space at the end of each workday."
    },
    {
      title: isFr ? "Une garantie sur les travaux" : "A warranty on the work",
      text: isFr ? "Un peintre licencié RBQ est légalement responsable de son travail. Si un problème survient, vous avez un recours. Avec un peintre au noir, vous n’avez rien." : "An RBQ licensed painter is legally responsible for their work. If a problem arises, you have recourse. With an under-the-table painter, you have nothing."
    }
  ];

  const getRisks = () => [
    isFr ? "Si le peintre abime votre plancher, brise un luminaire ou cause un dégât d’eau, vous payez de votre poche." : "If the painter damages your floor, breaks a fixture or causes water damage, you pay out of pocket.",
    isFr ? "Si la peinture écaille après 3 mois, vous n’avez aucun recours légal." : "If the paint peels after 3 months, you have no legal recourse.",
    isFr ? "Au Québec, faire exécuter des travaux par un entrepreneur sans licence RBQ peut entraîner des amendes pour le client aussi." : "In Quebec, having work done by an unlicensed contractor can result in fines for the client as well.",
    isFr ? "Aucun contrat = aucune obligation de terminer. Il peut disparaître avec votre acompte." : "No contract = no obligation to finish. They can disappear with your deposit."
  ];

  const getCertifications = () => [
    {
      title: isFr ? "Licence RBQ #5864-1481-01" : "RBQ License #5864-1481-01",
      text: isFr ? "La Régie du bâtiment du Québec exige que tout entrepreneur en peinture détienne une licence valide. Cette licence confirme que nous respectons les normes de l’industrie, que nos peintres sont qualifiés et que nous sommes imputables de notre travail." : "The Régie du bâtiment du Québec requires all painting contractors to hold a valid license. This license confirms that we meet industry standards, that our painters are qualified, and that we are accountable for our work."
    },
    {
      title: isFr ? "Assurance responsabilité civile de 5 millions $" : "$5 million civil liability insurance",
      text: isFr ? "En cas de dommage accidentel à votre propriété pendant les travaux, vous êtes couvert. Notre assurance protège autant vous que notre équipe. C’est une sécurité que les peintres non licenciés ne peuvent pas offrir." : "In case of accidental damage to your property during the work, you are covered. Our insurance protects both you and our team. It's a security that unlicensed painters cannot offer."
    },
    {
      title: isFr ? "Des peintres de métier, pas des étudiants" : "Tradesmen painters, not students",
      text: isFr ? "Chaque peintre de notre équipe a au minimum 10 ans d’expérience sur le terrain. Ils connaissent les techniques, les produits et les défis spécifiques au climat québécois." : "Every painter on our team has a minimum of 10 years of field experience. They know the techniques, products, and specific challenges of the Quebec climate."
    }
  ];

  const getQuestionsToAsk = () => [
    { q: isFr ? "Est-ce qu’il détient une licence RBQ valide?" : "Do they hold a valid RBQ license?", a: isFr ? "Vérifiez sur le site de la RBQ. Sans licence, les travaux ne sont pas protégés." : "Check the RBQ website. Without a license, work is not protected." },
    { q: isFr ? "Est-ce qu’il est assuré?" : "Are they insured?", a: isFr ? "Demandez une preuve d’assurance responsabilité civile. En cas de dommage, c’est votre protection." : "Ask for proof of civil liability insurance. In case of damage, this is your protection." },
    { q: isFr ? "Fournit-il une soumission détaillée par écrit?" : "Do they provide a detailed written quote?", a: isFr ? "Un devis verbal ne vaut rien. Exigez un document détaillé avec le détail des travaux, produits et prix." : "A verbal quote is worthless. Demand a detailed document detailing work, products, and prices." },
    { q: isFr ? "A-t-il des avis vérifiés?" : "Do they have verified reviews?", a: isFr ? "Regardez ses avis Google, pas seulement son site web. Des vrais avis de vrais clients." : "Look at their Google reviews, not just their website. Real reviews from real clients." },
    { q: isFr ? "Peut-il montrer des photos de projets récents?" : "Can they show photos of recent projects?", a: isFr ? "Un portfolio de projets réels prouve la qualité de son travail." : "A portfolio of real projects proves the quality of their work." },
    { q: isFr ? "Offre-t-il une garantie écrite?" : "Do they offer a written warranty?", a: isFr ? "Sans garantie, vous n’avez aucun recours si le travail se détériore rapidement." : "Without a warranty, you have no recourse if the work deteriorates quickly." },
    { q: isFr ? "Est-ce qu’il utilise des peintures de qualité?" : "Do they use quality paints?", a: isFr ? "Les marques comme Betonel et Sherwin Williams coûtent plus cher mais durent plus longtemps. Méfiez-vous des « prix très bas »." : "Brands like Betonel and Sherwin Williams cost more but last longer. Beware of 'very low prices'." },
  ];

  const expertiseReviews = [
    {
      name: "Marc-André R.",
      time: isFr ? "Il y a 2 mois" : "2 months ago",
      content: isFr ? "Une préparation de surface incroyable. Ils ont pris le temps de réparer chaque petite imperfection avant de peindre. Le résultat final est sans défaut, digne de vrais professionnels." : "Incredible surface preparation. They took the time to repair every little imperfection before painting. The final result is flawless, worthy of true professionals."
    },
    {
      name: "Sophie L.",
      time: isFr ? "Il y a 3 mois" : "3 months ago",
      content: isFr ? "Chantier d'une propreté exemplaire de A à Z. Planchers bâchés, meubles protégés, et un grand ménage fait chaque soir avant leur départ. C'est la première fois que j'ai affaire à des peintres si respectueux." : "Exemplary clean site from A to Z. Floors tarped, furniture protected, and a big cleanup done every evening before they left. First time dealing with such respectful painters."
    },
    {
      name: "David M.",
      time: isFr ? "Il y a 1 mois" : "1 month ago",
      content: isFr ? "L'équipe est arrivée exactement à l'heure convenue et a terminé selon l'échéancier promis. La communication était excellente tout au long du projet. C'est rassurant de faire affaire avec des gens si bien organisés." : "The team arrived exactly at the agreed time and finished on the promised schedule. Communication was excellent throughout the project. It's reassuring to deal with such well-organized people."
    },
    {
      name: "Élaine B.",
      time: isFr ? "Il y a 4 mois" : "4 months ago",
      content: isFr ? "Je recommande fortement. On voit les 10 ans d'expérience dans la qualité de la finition, surtout au niveau des découpes du plafond et des moulures. Qualité premium." : "I highly recommend. You can see the 10 years of experience in the quality of the finish, especially in the cutting of the ceiling and moldings. Premium quality."
    }
  ];

  const proFaqs = [
    {
      question: isFr ? "Quelle est la différence entre un peintre professionnel et un amateur?" : "What is the difference between a professional painter and an amateur?",
      answer: isFr ? "Un peintre professionnel détient une licence RBQ, possède une assurance responsabilité, utilise des produits de qualité professionnelle et maîtrise les techniques de préparation qui assurent un résultat durable. Un amateur peut offrir un prix plus bas, mais sans garantie, sans assurance et souvent avec un résultat qui ne tient pas dans le temps." : "A professional painter holds an RBQ license, has liability insurance, uses professional-quality products, and masters preparation techniques that ensure an enduring result. An amateur may offer a lower price, but without warranty, insurance, and often with a result that does not hold up over time."
    },
    {
      question: isFr ? "C’est quoi une licence RBQ et pourquoi c’est important?" : "What is an RBQ license and why is it important?",
      answer: isFr ? "La licence RBQ (Régie du bâtiment du Québec) est une certification obligatoire pour tout entrepreneur en construction au Québec. Elle garantit que l’entreprise respecte les normes de l’industrie, possède les qualifications requises et est imputable en cas de problème. Engager un peintre sans licence vous expose à des risques légaux et financiers." : "The RBQ (Régie du bâtiment du Québec) license is a mandatory certification for any construction contractor in Quebec. It guarantees that the company meets industry standards, possesses the required qualifications, and is accountable if problems arise. Hiring an unlicensed painter exposes you to legal and financial risks."
    },
    {
      question: isFr ? "Est-ce que ça vaut la peine de payer plus cher pour un peintre professionnel?" : "Is it worth paying more for a professional painter?",
      answer: isFr ? "Oui. Un peintre professionnel utilise de meilleurs produits, prépare les surfaces correctement et garantit son travail. Le résultat dure 2 à 3 fois plus longtemps qu’un travail amateur. À moyen terme, vous économisez en évitant les reprises et retouches fréquentes." : "Yes. A professional painter uses better products, correctly prepares surfaces, and guarantees their work. The result lasts 2 to 3 times longer than an amateur's work. In the medium term, you save money by avoiding frequent touch-ups."
    },
    {
      question: isFr ? "Comment savoir si un peintre est vraiment licencié?" : "How do I know if a painter is truly licensed?",
      answer: isFr ? "Vous pouvez vérifier la licence de n’importe quel entrepreneur sur le site de la RBQ (rbq.gouv.qc.ca). Entrez le numéro de licence ou le nom de l’entreprise. Notre licence est le #5864-1481-01." : "You can check any contractor's license on the RBQ website (rbq.gouv.qc.ca). Enter the license number or company name. Our license is #5864-1481-01."
    },
    {
      question: isFr ? "Travaillez-vous sur des projets commerciaux?" : "Do you work on commercial projects?",
      answer: isFr ? "Oui, nous sommes spécialisés dans les projets commerciaux et comprenons les exigences spécifiques des entreprises. Nous intervenons dans les bureaux, commerces, restaurants, cliniques, écoles, halls d’immeubles. Nous offrons des horaires flexibles (soirs et fins de semaine) pour minimiser l’impact sur vos opérations." : "Yes, we specialize in commercial projects and understand the specific requirements of businesses. We work in offices, retail stores, restaurants, clinics, schools, and building halls. We offer flexible hours (evenings and weekends) to minimize the impact on your operations."
    },
    {
      question: isFr ? "Est-ce que vous protégez les surfaces avant de peindre?" : "Do you protect surfaces before painting?",
      answer: isFr ? "Oui, absolument. La protection fait partie intégrante de notre processus professionnel. Nous couvrons systématiquement les planchers avec des toiles protectrices, protégeons tous les meubles et objets, masquons les cadres de portes et fenêtres, et utilisons du ruban de masquage de qualité professionnelle pour garantir des lignes nettes. Nous nettoyons également entièrement après chaque journée de travail." : "Yes, absolutely. Protection is an integral part of our professional process. We systematically cover floors with protective cloths, protect all furniture and objects, mask door and window frames, and use professional-quality masking tape to ensure clean lines. We also thoroughly clean up after each workday."
    },
    {
      question: isFr ? "Combien coûte un peintre professionnel?" : "How much does a professional painter cost?",
      answer: isFr ? "Le coût d’un peintre professionnel varie selon plusieurs facteurs : la surface à peindre, l’état des murs, la préparation nécessaire et les produits utilisés. À Montréal, la peinture intérieure résidentielle se situe généralement entre 2 $ et 4 $ par pied carré, incluant la préparation, l’application et le nettoyage. Les projets extérieurs ou spécialisés peuvent varier davantage. Une soumission détaillée permet d’obtenir un prix précis basé sur votre espace." : "The cost of a professional painter varies depending on several factors: the area to paint, the condition of walls, the necessary preparation, and products used. In Montreal, residential interior painting generally ranges between $2 and $4 per square foot, including preparation, application, and cleaning. Exterior or specialized projects may vary more. A detailed quote allows you to obtain a precise price based on your space."
    }
  ];

  return (
    <Fragment>
      <SEOHead
        title={isFr ? 'Peintre professionnel à Montréal | Pourquoi engager un pro | Le Lever du Pinceau' : 'Professional Painter in Montreal | Why hire a pro | Le Lever du Pinceau'}
        description={isFr ? 'Pourquoi engager un peintre professionnel licencié RBQ? Découvrez les avantages, les risques d’engager au noir, et comment vérifier un peintre avant de signer. Guide complet par Le Lever du Pinceau.' : 'Why hire an RBQ licensed professional painter? Discover the benefits, risks of hiring under the table, and how to verify a painter before signing. Complete guide by Le Lever du Pinceau.'}
        canonicalPath="/peintre-professionnel"
        schemaArray={[breadcrumbSchema, articleSchema]}
      />

      <Box w="100%" bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="professionnel"
          title={title}
          titleSecondLine=""
          subtitle={subtitle}
          buttonText={isFr ? "Obtenir ma soumission gratuite →" : "Get my free quote →"}
          imageBackground={peintreProPhotoHeader}
          compactTrustBanner
        >
          <HStack
            spacing={3}
            textStyle="bodyLarge"
            color="whiteAlpha.800"
            mb={{ base: 4, md: 6 }}
          >
            <Link as={RouterLink} to="/" _hover={{ textDecoration: 'underline' }}>
              {isFr ? 'Accueil' : 'Home'}
            </Link>
            <Text>›</Text>
            <Text color="white" fontWeight="medium">
              {isFr ? 'Peintre professionnel' : 'Professional Painter'}
            </Text>
          </HStack>
        </HeroSection>

        {/* Pourquoi engager un peintre pro */}
        <Box pt={{ base: 20, sm: 24, md: 24, lg: 24, xl: 28, '2xl': 28 }} pb={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1000px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Stack spacing={3} textAlign="center">
                <Heading as="h2" size="section" fontWeight="bold" color="gray.800">
                  {isFr ? "Ce que vous obtenez en engageant un peintre professionnel" : "What you get when hiring a professional painter"}
                </Heading>
                <Text textStyle="bodyLarge" color="gray.600" lineHeight="1.7">
                  {isFr ? "Engager un peintre professionnel à Montréal ne garantit pas seulement un résultat esthétique. Cela garantit aussi que les travaux sont réalisés selon les normes de l’industrie, avec des produits adaptés et par des professionnels formés. Dans ce guide, découvrez pourquoi faire appel à un peintre licencié RBQ fait toute la différence pour la durabilité, la sécurité et la qualité du résultat." : "Hiring a professional painter in Montreal doesn't just guarantee an aesthetic result. It also guarantees that the work is carried out according to industry standards, with adapted products, and by trained professionals. In this guide, discover why hiring an RBQ licensed painter makes all the difference for durability, safety, and quality."}
                </Text>
              </Stack>

              <Stack spacing={4} mt={6}>
                {getWhyHirePro().map((item, idx) => (
                  <Flex
                    key={idx}
                    p={6}
                    bg="white"
                    borderRadius="lg"
                    border="1px solid"
                    borderColor="gray.200"
                    boxShadow="sm"
                    gap={4}
                    _hover={{ borderColor: 'brand.500', boxShadow: 'md' }}
                    transition="all 0.2s"
                  >
                    <Icon as={CheckCircleIcon} color="brand.500" boxSize={6} mt={1} />
                    <Box>
                      <Text fontWeight="bold" fontSize="lg" color="gray.800" mb={2}>
                        {item.title}
                      </Text>
                      <Text color="gray.600" lineHeight="1.6">
                        {item.text}
                      </Text>
                    </Box>
                  </Flex>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        {/* Section risques */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="orange.50">
          <Container maxW="1000px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8}>
              <Heading as="h2" size="section" fontWeight="bold" color="gray.800" textAlign="center">
                {isFr ? "Les risques réels d’engager un peintre sans licence" : "The real risks of hiring an unlicensed painter"}
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {getRisks().map((text, idx) => (
                  <Flex
                    key={idx}
                    p={5}
                    bg="white"
                    borderRadius="md"
                    borderLeft="4px solid"
                    borderColor="orange.400"
                    boxShadow="sm"
                    align="center"
                    gap={4}
                  >
                    <Icon as={WarningTwoIcon} color="orange.400" boxSize={6} flexShrink={0} />
                    <Text color="gray.700" fontWeight="medium">{text}</Text>
                  </Flex>
                ))}
              </SimpleGrid>

              <Box textAlign="center" mt={4}>
                <Button
                  as={Link}
                  href="https://www.pes.rbq.gouv.qc.ca/RegistreLicences/FicheDetenteur/5864148101?mode=Entreprise"
                  isExternal
                  variant="outline"
                  bg="white"
                  borderColor="gray.300"
                  color="gray.700"
                  _hover={{ bg: 'gray.100' }}
                  size="lg"
                  fontWeight="bold"
                  whiteSpace="normal"
                  height="auto"
                  minH="48px"
                  py={3}
                >
                  {isFr ? "Vérifiez notre licence RBQ: #5864-1481-01" : "Verify our RBQ license: #5864-1481-01"}
                </Button>
              </Box>
            </Stack>
          </Container>
        </Box>

        {/* Certifications */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="white">
          <Container maxW="1200px" px={{ base: 4, md: 6 }}>
            <Stack spacing={10}>
              <Heading as="h2" size="section" fontWeight="bold" color="gray.800" textAlign="center">
                {isFr ? "Notre expertise, vérifiable et garantie" : "Our expertise, verifiable and guaranteed"}
              </Heading>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
                {getCertifications().map((cert, idx) => (
                  <Box
                    key={idx}
                    p={8}
                    bg="gray.50"
                    borderRadius="xl"
                    textAlign="center"
                    border="1px solid"
                    borderColor="gray.100"
                  >
                    <Box
                      w="64px"
                      h="64px"
                      mx="auto"
                      bg="brand.100"
                      color="brand.600"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mb={4}
                    >
                      <Icon as={CheckCircleIcon} boxSize={8} />
                    </Box>
                    <Text fontWeight="bold" fontSize="xl" color="gray.900" mb={3}>
                      {cert.title}
                    </Text>
                    <Text color="gray.600" lineHeight="1.6">
                      {cert.text}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* 7 questions checklist */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="gray.50">
          <Container maxW="900px" px={{ base: 4, md: 6 }}>
            <Box bg="white" p={{ base: 6, md: 10 }} borderRadius="2xl" boxShadow="xl">
              <Stack spacing={8}>
                <Stack spacing={2} textAlign="center">
                  <Heading as="h2" size="section" fontWeight="bold" color="gray.800">
                    {isFr ? "7 questions à poser avant d’engager un peintre" : "7 questions to ask before hiring a painter"}
                  </Heading>
                  <Text textStyle="bodyLarge" color="brand.500" fontWeight="medium">
                    {isFr ? "Un guide rapide pour éviter les mauvaises surprises" : "A quick guide to avoid bad surprises"}
                  </Text>
                </Stack>
                <Stack spacing={5}>
                  {getQuestionsToAsk().map((q, idx) => (
                    <Box key={idx} pl={2}>
                      <Flex align="flex-start" gap={3}>
                        <Icon as={CheckCircleIcon} color="green.500" boxSize={5} mt={1} />
                        <Box>
                          <Text fontWeight="bold" color="gray.800" fontSize="lg">{q.q}</Text>
                          <Text color="gray.600" mt={1}>{q.a}</Text>
                        </Box>
                      </Flex>
                      {idx < 6 && <Divider mt={5} borderColor="gray.100" />}
                    </Box>
                  ))}
                </Stack>
                <Box textAlign="center" pt={4}>
                  <Text fontWeight="bold" mb={4} color="gray.700">
                    {isFr ? "Le Lever du Pinceau coche toutes ces cases. Vérifiez par vous-même." : "Le Lever du Pinceau checks all these boxes. Verify for yourself."}
                  </Text>
                  <Button
                    onClick={onOpen}
                    bg="brand.500"
                    color="white"
                    size="lg"
                    borderRadius="full"
                    px={8}
                    _hover={{ bg: 'brand.600' }}
                  >
                    {isFr ? "Obtenir ma soumission gratuite →" : "Get my free quote →"}
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Avis d'experts */}
        <ReviewsSection
          title={isFr ? "Ce que nos clients disent de notre professionnalisme" : "What our clients say about our professionalism"}
          subtitle={isFr ? "Des avis réels mettant en lumière la qualité de notre processus" : "Real reviews highlighting the quality of our process"}
          reviewsOverride={expertiseReviews}
        />

        {/* FAQ Spécifique Pro */}
        <FAQSection title={isFr ? "Questions fréquentes sur les peintres professionnels" : "Frequently asked questions about professional painters"} faqsOverride={proFaqs} />

        {/* CTA Final */}
        <Box py={{ base: 12, md: 16, lg: 20 }} bg="app.ctaBg" textAlign="center">
          <Container maxW="800px" px={{ base: 4, md: 6 }}>
            <Stack spacing={8} align="center" mb={{ base: 12, md: 16 }}>
              <Stack spacing={4}>
                <Heading as="h2" size="xl" fontWeight="bold" color="white">
                  {isFr ? "Prêt à travailler avec des professionnels?" : "Ready to work with professionals?"}
                </Heading>
                <Text fontSize="xl" color="whiteAlpha.900">
                  {isFr ? "Obtenez votre soumission gratuite en moins de 24h" : "Get your free quote in less than 24h"}
                </Text>
              </Stack>
              <Button
                onClick={onOpen}
                bg="white"
                color="brand.500"
                size="lg"
                height="60px"
                px={10}
                fontSize="lg"
                borderRadius="full"
                _hover={{ bg: 'gray.100', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                boxShadow="xl"
              >
                {isFr ? "Obtenir ma soumission gratuite →" : "Get my free quote →"}
              </Button>
            </Stack>
          </Container>

          <Container maxW="1200px" px={{ base: 4, md: 6 }}>
            {/* Internal links */}
            <Box w="100%">
              <Text color="whiteAlpha.800" fontWeight="bold" mb={8} textTransform="uppercase" letterSpacing="wider" fontSize="sm">
                {isFr ? "Explorez nos services" : "Explore our services"}
              </Text>

              <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 4, md: 6 }} w="100%" mx="auto" mb={10}>
                <Box as={RouterLink} to="/services/peinture-interieure" _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }} transition="all 0.2s">
                  <ServiceCard image={peintreProInterieure} title={isFr ? "Peinture intérieure" : "Interior painting"} noHoverBorder compact />
                </Box>
                <Box as={RouterLink} to="/services/peinture-exterieure" _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }} transition="all 0.2s">
                  <ServiceCard image={peintreProExterieure} title={isFr ? "Peinture extérieure" : "Exterior painting"} noHoverBorder compact />
                </Box>
                <Box as={RouterLink} to="/services/peinture-residentielle" _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }} transition="all 0.2s">
                  <ServiceCard image={peintreProResidentielle} title={isFr ? "Peinture résidentielle" : "Residential painting"} noHoverBorder compact />
                </Box>
                <Box as={RouterLink} to="/services/peinture-commerciale" _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }} transition="all 0.2s">
                  <ServiceCard image={peintreProCommerciale} title={isFr ? "Peinture commerciale" : "Commercial painting"} noHoverBorder compact />
                </Box>
              </SimpleGrid>

              <Flex flexWrap="wrap" justify="center" gap={{ base: 4, md: 8 }}>
                <Link as={RouterLink} to="/secteurs" color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Nos secteurs desservis →" : "Our operated sectors →"}
                </Link>
                <Link as={RouterLink} to="/realisations" color="white" fontWeight="bold" _hover={{ textDecoration: 'underline' }}>
                  {isFr ? "Nos réalisations →" : "Our portfolio →"}
                </Link>
              </Flex>
            </Box>
          </Container>
        </Box>

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
