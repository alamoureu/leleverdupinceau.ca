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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  FaTools,
  FaSearch,
  FaLayerGroup,
  FaShieldAlt,
  FaClock,
  FaBrush,
  FaSprayCan,
  FaWind,
  FaRuler,
  FaTachometerAlt,
  FaBuilding,
  FaHome,
  FaHammer,
  FaWater,
  FaFire,
  FaFileAlt,
  FaHandshake,
  FaCheckCircle,
  FaSyncAlt,
  FaCut,
  FaFlask,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import TrustBanner from '../home-page/TrustBanner';
import SubmissionModal from '../home-page/SubmissionModal';

import imgPreparation from '../images/L2 Services principaux/peinture interieure/Photo mur & plafond/Peintre intérieur Montréal, Le Lever du Pinceau a peint les murs et plafonds de cette chambres avec une belle découpe dans le quartier de Hampstead, Montréal.jpg';
import imgPistolet from '../images/L2 Services principaux/Photo page -peinture-industrielle/Peintre industrielle à Montréal, Le Lever du Pinceau a peinturé au spray ce plafond en steel deck à Montréal.jpg';
import imgPlatre from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre et plâtre Montréal, Le Lever du Pinceau a plâtré et peint cette cusine après un dégat d_eau qui a coulé du plafond de cette propriété à Montréal.jpg';
import imgSinistre from '../images/L2 Services principaux/peinture interieure/+avant apres -peinture intérieure/Peintre Montréal, Le Lever du Pinceau a changé le gypse, plâtré et peinturé l_ensemble de ce sous-sol après un sinistre à Montréal.jpg';

const SLUG_CONFIG = {
  'preparation-de-surfaces': {
    seoTitle: 'Préparation de surfaces avant peinture à Montréal | Le Lever du Pinceau',
    seoDescription: 'Service de préparation de surfaces à Montréal. Sablage, rebouchage, calfeutrage et apprêt. 80% du résultat final dépend de la préparation. Licence RBQ. Soumission gratuite.',
    canonicalPath: '/services/preparation-de-surfaces',
    heroImage: imgPreparation,
    heroAlt: 'Préparation de surfaces avant peinture à Montréal',
    breadcrumb: 'Préparation de surfaces',
    h1: 'Préparation de surfaces avant peinture à Montréal',
    subtitle: '80% du résultat final dépend de la préparation - pas de la peinture.',
    ctaTitle: 'Prêt à démarrer votre projet sur de bonnes bases\u00A0?',
    faqTitle: 'Questions fréquentes sur la préparation de surfaces',
    checkmarks: [
      {
        icon: FaSearch,
        title: 'Évaluation de l\'état des surfaces',
        text: 'Avant tout travail, nous évaluons la condition des murs, plafonds ou surfaces extérieures pour déterminer le niveau de préparation requis.',
      },
      {
        icon: FaTools,
        title: 'Sablage et ponçage',
        text: 'Lissage des irrégularités, élimination des bosses, ancienne peinture écaillée ou rugosité de surface avant apprêt.',
      },
      {
        icon: FaHammer,
        title: 'Rebouchage des trous et fissures',
        text: 'Mastic, composé à joints ou plâtre selon la profondeur et la nature des dommages. Séchage complet avant sablage.',
      },
      {
        icon: FaCut,
        title: 'Calfeutrage des joints et cadres',
        text: 'Étanchéité des joints entre moulures, cadres de fenêtres, plinthes et murs pour un fini propre et continu.',
      },
      {
        icon: FaLayerGroup,
        title: 'Application d\'apprêt adapté',
        text: 'Primer sceleur pour les taches, apprêt d\'adhérence pour les surfaces lisses, apprêt latex ou alkyde selon le substrat.',
      },
      {
        icon: FaShieldAlt,
        title: 'Résultat durable garanti',
        text: 'Une peinture appliquée sur une surface mal préparée pèle, craque ou s\'use prématurément. La bonne préparation protège votre investissement.',
      },
    ],
    specialites: [
      {
        icon: FaTools,
        title: 'Sablage manuel et mécanique',
        text: 'Ponçage des surfaces pour éliminer les imperfections, l\'ancienne peinture en mauvais état et les aspérités avant apprêt.',
      },
      {
        icon: FaHammer,
        title: 'Rebouchage et réparations légères',
        text: 'Trous de vis, impacts, petites fissures et imperfections de surface. Mastic, composé de finition ou plâtre de finition.',
      },
      {
        icon: FaCut,
        title: 'Calfeutrage et étanchéité',
        text: 'Joints entre cadres et murs, jonctions plinthes-plancher, angles de plafond. Calfeutrant de qualité peinturable.',
      },
      {
        icon: FaLayerGroup,
        title: 'Apprêt et primer',
        text: 'Primer sceleur pour les taches de nicotine ou d\'eau, apprêt d\'adhérence pour les surfaces difficiles, primer alkyde pour le bois.',
      },
      {
        icon: FaSearch,
        title: 'Décapage de l\'ancienne peinture',
        text: 'Retrait mécanique ou chimique de l\'ancienne finition en mauvais état avant reprise complète de la surface.',
      },
      {
        icon: FaFlask,
        title: 'Traitement anti-moisissure',
        text: 'Application d\'un fongicide ou d\'un primer anti-moisissure sur les surfaces affectées avant peinture.',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi la préparation de surfaces est-elle si importante\u00A0?',
        answer: 'La peinture ne corrige pas les imperfections - elle les amplifie. Une surface mal préparée donnera un résultat inégal, une adhérence insuffisante et une durée de vie réduite. La préparation représente la majorité du temps de travail sur un chantier bien exécuté.',
      },
      {
        question: 'Est-ce que vous faites la préparation en même temps que la peinture\u00A0?',
        answer: 'Oui, dans la très grande majorité des cas. La préparation fait partie intégrante de notre processus et est incluse dans notre soumission. Si les réparations sont plus importantes (plâtrage majeur, installation de gypse), nous pouvons établir un plan en deux étapes.',
      },
      {
        question: 'Comment déterminez-vous le niveau de préparation nécessaire\u00A0?',
        answer: 'Lors de la visite de soumission, nous évaluons visuellement l\'état des surfaces : présence de fissures, écaillage, humidité, taches, irrégularités ou joints décollés. Cela nous permet d\'inclure le bon niveau de préparation dans notre estimation.',
      },
      {
        question: 'Peut-on repeindre par-dessus une ancienne peinture sans préparer la surface\u00A0?',
        answer: 'Parfois, si l\'ancienne peinture est en bon état, bien adhérente et compatible avec le nouveau produit. Mais si la surface montre des signes de décollement, de cloquage ou de dégradation, la préparer correctement est la seule façon d\'assurer que la nouvelle peinture tiendra durablement.',
      },
    ],
    internalLinks: [
      { title: 'Peinture intérieure', description: 'Murs, plafonds, boiseries et armoires.', to: '/services/peinture-interieure' },
      { title: 'Peinture extérieure', description: 'Revêtement, balcon, clôture et surfaces extérieures.', to: '/services/peinture-exterieure' },
      { title: 'Réparation de plâtre et gypse', description: 'Trous, fissures et joints - réparations avant peinture.', to: '/services/reparation-de-platre-et-gypse' },
      { title: 'Pourquoi choisir un peintre professionnel\u00A0?', description: 'Licence RBQ, assurance, expertise.', to: '/peintre-professionnel' },
    ],
  },

  'peinture-au-pistolet': {
    seoTitle: 'Peinture au pistolet (airless) à Montréal | Le Lever du Pinceau',
    seoDescription: 'Service de peinture au pistolet airless à Montréal. Application uniforme sur grandes surfaces, plafonds steel deck, entrepôts et espaces commerciaux. Licence RBQ. Soumission gratuite.',
    canonicalPath: '/services/peinture-au-pistolet',
    heroImage: imgPistolet,
    heroAlt: 'Peinture au pistolet airless à Montréal - plafond industriel',
    breadcrumb: 'Peinture au pistolet',
    h1: 'Peinture au pistolet (airless) à Montréal',
    subtitle: 'Application uniforme, rendement élevé et fini régulier pour les grandes surfaces.',
    ctaTitle: 'Vous avez un grand espace à peindre\u00A0?',
    faqTitle: 'Questions fréquentes sur la peinture au pistolet',
    checkmarks: [
      {
        icon: FaTachometerAlt,
        title: 'Rendement élevé sur grandes surfaces',
        text: 'Un pistolet airless couvre en quelques minutes ce qu\'un rouleau prendrait des heures à faire. Idéal pour les entrepôts, plafonds hauts et murs de béton.',
      },
      {
        icon: FaLayerGroup,
        title: 'Fini uniforme et sans traces de rouleau',
        text: 'L\'application au pistolet donne un fini parfaitement uniforme sur les surfaces texturées, les plafonds steel deck et les structures irrégulières.',
      },
      {
        icon: FaRuler,
        title: 'Contrôle précis de l\'épaisseur de couche',
        text: 'Le pistolet airless permet d\'appliquer une épaisseur de film précise et constante, ce qui est essentiel pour les systèmes de peinture industrielle multicouches.',
      },
      {
        icon: FaWind,
        title: 'Protection rigoureuse du chantier',
        text: 'La peinture au pistolet génère de la surpulvérisation. Nous protégeons rigoureusement toutes les surfaces non peintes, équipements et ouvertures avant toute application.',
      },
      {
        icon: FaShieldAlt,
        title: 'Équipement professionnel entretenu',
        text: 'Nos pistolets airless sont entretenus et calibrés pour assurer une pression constante, un jet régulier et l\'absence de fuites pendant l\'application.',
      },
      {
        icon: FaClock,
        title: 'Respect des délais sur les grands chantiers',
        text: 'Sur les projets industriels ou commerciaux où le temps est critique, la vitesse d\'exécution au pistolet permet de respecter des fenêtres d\'intervention serrées.',
      },
    ],
    specialites: [
      {
        icon: FaBuilding,
        title: 'Plafonds steel deck et béton',
        text: 'Application idéale sur les plafonds industriels structuraux - les surfaces irrégulières du steel deck se couvrent uniformément au pistolet.',
      },
      {
        icon: FaHome,
        title: 'Murs de gypse en construction neuve',
        text: 'En construction neuve avant installation des luminaires et planchers, le pistolet permet de peindre rapidement l\'ensemble des murs.',
      },
      {
        icon: FaSprayCan,
        title: 'Portes et armoires',
        text: 'Peinture au pistolet pour les armoires de cuisine et les portes intérieures - fini lisse sans marques de pinceau ou de rouleau.',
      },
      {
        icon: FaBuilding,
        title: 'Grands espaces commerciaux',
        text: 'Hall d\'entrée, espace de vente, entrepôt ou garage : le pistolet est la méthode la plus efficace pour les grandes surfaces ouvertes.',
      },
      {
        icon: FaLayerGroup,
        title: 'Bâtiments industriels extérieurs',
        text: 'Application de revêtements extérieurs sur les facades de bâtiments industriels et commerciaux de grande surface.',
      },
      {
        icon: FaTools,
        title: 'Structures métalliques',
        text: 'Peinture de charpentes, colonnes et structures métalliques - l\'application au pistolet couvre les surfaces complexes uniformément.',
      },
    ],
    faqs: [
      {
        question: 'Quand vaut-il mieux utiliser un pistolet plutôt qu\'un rouleau\u00A0?',
        answer: 'Le pistolet est plus adapté pour les grandes surfaces ouvertes, les plafonds hauts, les surfaces texturées comme le steel deck, et les armoires ou portes où l\'on veut un fini parfaitement lisse. Le rouleau reste préférable dans les espaces habités ou encombrés où la surpulvérisation est difficile à contrôler.',
      },
      {
        question: 'Est-ce que la peinture au pistolet nécessite plus de préparation\u00A0?',
        answer: 'Oui. Avant toute application au pistolet, nous devons protéger rigoureusement toutes les surfaces, équipements et ouvertures qui ne doivent pas être peintes. Cette étape de masquage et de protection est plus importante qu\'avec un rouleau.',
      },
      {
        question: 'La peinture au pistolet donne-t-elle un meilleur résultat\u00A0?',
        answer: 'Sur les bonnes surfaces et dans les bonnes conditions, le pistolet donne un fini plus uniforme et sans texture que le rouleau. Pour les armoires et portes, c\'est la méthode qui donne le résultat le plus lisse. Sur les murs habituels, un rouleau bien utilisé donne aussi d\'excellents résultats.',
      },
      {
        question: 'Peut-on utiliser le pistolet dans un espace habité\u00A0?',
        answer: 'C\'est possible mais plus délicat. La surpulvérisation nécessite une protection très complète et une bonne ventilation. En général, le pistolet est moins pratique dans un espace occupé et nous recommandons le rouleau dans ce contexte.',
      },
    ],
    internalLinks: [
      { title: 'Peinture commerciale', description: 'Bureaux, restaurants et espaces commerciaux.', to: '/services/peinture-commerciale' },
      { title: 'Peinture industrielle', description: 'Entrepôt, usine, époxy et marquage au sol.', to: '/services/peinture-industrielle' },
      { title: 'Peinture intérieure', description: 'Murs, plafonds, boiseries et armoires.', to: '/services/peinture-interieure' },
      { title: 'Pourquoi choisir un peintre professionnel\u00A0?', description: 'Licence RBQ, assurance, expertise.', to: '/peintre-professionnel' },
    ],
  },

  'reparation-de-platre-et-gypse': {
    seoTitle: 'Réparation de plâtre et gypse avant peinture à Montréal | Le Lever du Pinceau',
    seoDescription: 'Service de réparation de plâtre et gypse à Montréal. Trous, fissures, joints, dégâts d\'eau - surfaces remises en état avant peinture. Clé en main. Licence RBQ. Soumission gratuite.',
    canonicalPath: '/services/reparation-de-platre-et-gypse',
    heroImage: imgPlatre,
    heroAlt: 'Réparation de plâtre et gypse à Montréal - remise en état avant peinture',
    breadcrumb: 'Réparation de plâtre et gypse',
    h1: 'Réparation de plâtre et gypse avant peinture à Montréal',
    subtitle: 'Trous, fissures, dégâts d\'eau - surfaces remises en état, prêtes à peindre.',
    ctaTitle: 'Surfaces abîmées à remettre en état\u00A0?',
    faqTitle: 'Questions fréquentes sur la réparation de plâtre et gypse',
    checkmarks: [
      {
        icon: FaSearch,
        title: 'Diagnostic de la cause avant réparation',
        text: 'Une fissure récurrente ou une tache d\'humidité peut signaler un problème structurel ou d\'infiltration. On identifie la cause avant de colmater le symptôme.',
      },
      {
        icon: FaHammer,
        title: 'Réparations adaptées au type de dommage',
        text: 'Mastic pour les petits trous, composé à joints pour les fissures, plâtre ou gypse de remplacement pour les dommages importants.',
      },
      {
        icon: FaLayerGroup,
        title: 'Finition lisse et prête à peindre',
        text: 'Sablage, feathering et apprêt après réparation pour que la zone réparée se fonde parfaitement dans le reste de la surface.',
      },
      {
        icon: FaSyncAlt,
        title: 'Service clé en main',
        text: 'Nous faisons les réparations et la peinture dans le même projet. Vous n\'avez pas à coordonner un plâtrier puis un peintre séparément.',
      },
      {
        icon: FaShieldAlt,
        title: 'Garantie sur les travaux',
        text: 'Les réparations sont couvertes par notre garantie. Si une fissure réapparaît rapidement après notre intervention, nous revenons évaluer et corriger.',
      },
      {
        icon: FaClock,
        title: 'Intervention rapide pour les urgences',
        text: 'Un dégât d\'eau ou une fissure importante peut nécessiter une intervention rapide pour limiter les dommages et éviter les moisissures.',
      },
    ],
    specialites: [
      {
        icon: FaTools,
        title: 'Trous et impacts dans le gypse',
        text: 'De la petite marque de vis au trou de porte-poignée, nous réparons tous les formats avec le bon matériau et la bonne technique.',
      },
      {
        icon: FaCut,
        title: 'Fissures dans les murs et plafonds',
        text: 'Fissures linéaires, fissures d\'angle ou fissures en éventail - chacune a sa cause et sa méthode de réparation.',
      },
      {
        icon: FaWater,
        title: 'Dommages liés à l\'humidité ou aux dégâts d\'eau',
        text: 'Plafond bombé, gypse ramolli, joints décollés. Remplacement du matériau endommagé une fois la source d\'eau résolue.',
      },
      {
        icon: FaHammer,
        title: 'Remplacement de panneaux de gypse',
        text: 'Pour les dommages importants, nous découpons et remplaçons la section endommagée avant jointoiement et finition.',
      },
      {
        icon: FaLayerGroup,
        title: 'Joints et coins abîmés',
        text: 'Coins arqués, joints décollés, coins métalliques endommagés. Remise en état complète avec finition lisse.',
      },
      {
        icon: FaFlask,
        title: 'Traitement avant peinture sur plâtre ancien',
        text: 'Les vieilles maisons ont du plâtre au lieu du gypse. Différentes techniques de réparation et d\'apprêt sont requises.',
      },
    ],
    faqs: [
      {
        question: 'Faites-vous les réparations et la peinture dans le même contrat\u00A0?',
        answer: 'Oui, c\'est souvent la meilleure façon de procéder. Nous intégrons les réparations nécessaires dans la soumission de peinture, ce qui vous évite de coordonner deux équipes différentes et assure une continuité entre la réparation et la finition finale.',
      },
      {
        question: 'Comment savoir si une fissure est grave ou simplement cosmétique\u00A0?',
        answer: 'Une fissure fine et superficielle est généralement cosmétique - souvent liée aux mouvements saisonniers de la maison. Une fissure large, en escalier, qui traverse le plafond ou qui réapparaît régulièrement peut indiquer un problème de fondation ou de structure. Dans le doute, nous pouvons évaluer lors de la visite de soumission.',
      },
      {
        question: 'Peut-on peindre directement par-dessus une réparation fraîche\u00A0?',
        answer: 'Non, pas immédiatement. Le composé à joints et le plâtre doivent sécher complètement avant ponçage et application d\'apprêt. Peindre sur du plâtre encore humide donne un résultat inégal et peut causer des problèmes d\'adhérence.',
      },
      {
        question: 'Intervenez-vous après un dégât d\'eau pour réparer et repeindre\u00A0?',
        answer: 'Oui. Nous offrons un service de remise en état après sinistre qui inclut le remplacement du gypse endommagé, le traitement si nécessaire, le jointoiement, l\'apprêt et la peinture finale. La source d\'eau doit cependant être résolue avant notre intervention.',
      },
    ],
    internalLinks: [
      { title: 'Préparation de surfaces', description: 'Sablage, calfeutrage, apprêt - fondation du travail.', to: '/services/preparation-de-surfaces' },
      { title: 'Peinture intérieure', description: 'Murs, plafonds, boiseries et armoires.', to: '/services/peinture-interieure' },
      { title: 'Peinture après sinistre', description: 'Dégât d\'eau, feu - remise en état complète.', to: '/services/peinture-apres-sinistre' },
      { title: 'Pourquoi choisir un peintre professionnel\u00A0?', description: 'Licence RBQ, assurance, expertise.', to: '/peintre-professionnel' },
    ],
  },

  'peinture-apres-sinistre': {
    seoTitle: 'Peinture après sinistre (dégât d\'eau, feu) à Montréal | Le Lever du Pinceau',
    seoDescription: 'Service de peinture après sinistre à Montréal. Dégât d\'eau, incendie, moisissure. Collaboration avec les assureurs, documentation de réclamation et remise en état complète. Licence RBQ.',
    canonicalPath: '/services/peinture-apres-sinistre',
    heroImage: imgSinistre,
    heroAlt: 'Peinture après sinistre à Montréal - remise en état après dégât d\'eau',
    breadcrumb: 'Peinture après sinistre',
    h1: 'Peinture après sinistre (dégât d\'eau, feu) à Montréal',
    subtitle: 'Remise en état complète de vos espaces après un sinistre - en collaboration avec votre assureur.',
    ctaTitle: 'Vous faites face à un sinistre\u00A0?',
    faqTitle: 'Questions fréquentes sur la peinture après sinistre',
    checkmarks: [
      {
        icon: FaClock,
        title: 'Intervention rapide pour limiter les dommages',
        text: 'Après un dégât d\'eau ou un incendie, chaque heure compte. Une intervention rapide limite la propagation des moisissures et réduit l\'étendue des dommages.',
      },
      {
        icon: FaFileAlt,
        title: 'Documentation pour votre réclamation d\'assurance',
        text: 'Photos, inventaire des dommages et rapport détaillé pour appuyer votre réclamation. Nous travaillons en collaboration avec votre assureur.',
      },
      {
        icon: FaHandshake,
        title: 'Collaboration avec les assureurs',
        text: 'Nous sommes familiers avec le processus de réclamation. Nos soumissions détaillées sont formatées pour répondre aux exigences des experts en sinistres.',
      },
      {
        icon: FaCheckCircle,
        title: 'Remise en état complète clé en main',
        text: 'Démolition des matériaux endommagés, réparation structurelle légère, gypse, plâtre, peinture. Du début à la fin.',
      },
      {
        icon: FaShieldAlt,
        title: 'Traitement préventif anti-moisissure',
        text: 'Après un dégât d\'eau, le traitement des surfaces avant refermeture est essentiel pour éviter le développement de moisissures derrière les murs.',
      },
      {
        icon: FaBrush,
        title: 'Finitions soignées pour retrouver un état impeccable',
        text: 'L\'objectif est que votre espace retrouve exactement son état d\'avant sinistre - ou mieux. Pas de différence visible entre les zones réparées et les zones intactes.',
      },
    ],
    specialites: [
      {
        icon: FaWater,
        title: 'Dégât d\'eau',
        text: 'Infiltration, tuyau éclaté, dégat venant du voisin du dessus. Séchage, démolition du matériau endommagé, reconstruction et peinture.',
      },
      {
        icon: FaFire,
        title: 'Dommages liés à un incendie',
        text: 'Fumée, suie et dommages thermiques. Nettoyage, encapsulation des odeurs de fumée, remplacement des matériaux et finition.',
      },
      {
        icon: FaFlask,
        title: 'Moisissure et contamination',
        text: 'Traitement fongicide, remplacement des matériaux contaminés et apprêt anti-moisissure avant peinture finale.',
      },
      {
        icon: FaHammer,
        title: 'Réparation du gypse et du plâtre endommagés',
        text: 'Remplacement des panneaux détériorés, jointoiement, finition et peinture pour retrouver un état intact.',
      },
      {
        icon: FaLayerGroup,
        title: 'Traitement des taches et odeurs',
        text: 'Apprêts sceleurs pour bloquer les taches d\'humidité, de fumée ou de nicotine avant l\'application de la couleur finale.',
      },
      {
        icon: FaFileAlt,
        title: 'Documentation et rapport d\'état',
        text: 'Photos avant/pendant/après, liste détaillée des travaux et factures conformes pour votre dossier d\'assurance.',
      },
    ],
    faqs: [
      {
        question: 'Travaillez-vous directement avec les assureurs\u00A0?',
        answer: 'Oui. Nous connaissons le processus de réclamation et nous pouvons travailler directement avec votre assureur ou votre expert en sinistres. Nos soumissions sont détaillées et formatées pour répondre aux exigences des compagnies d\'assurance.',
      },
      {
        question: 'Dois-je attendre l\'approbation de mon assurance avant de commencer les travaux\u00A0?',
        answer: 'En cas de dégât actif (eau qui coule, risque de moisissures), des mesures préventives rapides peuvent être nécessaires même avant l\'approbation formelle. Nous pouvons vous aider à documenter les dommages et à prioriser les interventions urgentes tout en respectant le processus de votre assureur.',
      },
      {
        question: 'Comment évitez-vous que les moisissures se développent après un dégât d\'eau\u00A0?',
        answer: 'Le séchage complet des structures est la première étape. Si des matériaux ont été mouillés trop longtemps, ils doivent être remplacés plutôt que simplement séchés. Nous appliquons aussi un traitement fongicide sur les surfaces concernées avant de les recouvrir.',
      },
      {
        question: 'Pouvez-vous remettre une propriété en état après un incendie partiel\u00A0?',
        answer: 'Oui. Les dommages liés à la fumée et à la suie sont souvent plus étendus que les dommages directs du feu. Nous évaluons l\'étendue des dommages, traitons les odeurs de fumée, remplaçons les matériaux nécessaires et réalisons la finition peinture pour retrouver un espace propre et habitable.',
      },
    ],
    internalLinks: [
      { title: 'Peinture résidentielle', description: 'Service complet pour maisons, condos et appartements.', to: '/services/peinture-residentielle' },
      { title: 'Peinture commerciale', description: 'Sinistre en milieu commercial - intervention coordonnée.', to: '/services/peinture-commerciale' },
      { title: 'Réparation de plâtre et gypse', description: 'Trous, fissures et dommages structurels légers.', to: '/services/reparation-de-platre-et-gypse' },
      { title: 'Pourquoi choisir un peintre professionnel\u00A0?', description: 'Licence RBQ, assurance, expertise.', to: '/peintre-professionnel' },
    ],
  },
};

export default function SpecializedServiceHubPage({ slug }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cfg = SLUG_CONFIG[slug];
  if (!cfg) return null;

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
        name: cfg.breadcrumb,
        item: `https://leleverdupinceau.ca${cfg.canonicalPath}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cfg.faqs.map((faq) => ({
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
        title={cfg.seoTitle}
        description={cfg.seoDescription}
        canonicalPath={cfg.canonicalPath}
        schemaArray={[breadcrumbSchema, faqSchema]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">

        {/* ===== SECTION 1 - HERO ===== */}
        <Box
          position="relative"
          w="100%"
          minW={0}
          minH={{ base: '320px', sm: '350px', md: '440px', lg: '480px', xl: '580px' }}
          h={{ base: 'auto', sm: 'auto', md: '52vh', lg: '55vh', xl: '75vh' }}
          pb={{ base: 24, sm: 32, md: 28, lg: 32 }}
          bgColor="gray.700"
          overflow="visible"
          px={{ base: 0, sm: 3, md: 5, lg: 8, xl: 10 }}
        >
          <Image
            src={cfg.heroImage}
            alt={cfg.heroAlt}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            objectFit="cover"
            zIndex={0}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="rgba(0, 0, 0, 0.55)"
            zIndex={1}
          />
          <Container
            maxW="1440px"
            h="100%"
            position="relative"
            zIndex={2}
            px={{ base: 4, sm: 4, md: 6, lg: 8 }}
            minW={0}
          >
            <Stack
              h="100%"
              minW={0}
              pt={{ base: '62px', sm: '62px', md: '120px', lg: '120px', xl: '140px' }}
            >
              <Stack spacing={{ base: 3, sm: 4, md: 5, lg: 6 }} minW={0}>
                <HStack spacing={2} fontSize={{ base: 'sm', md: 'md' }} flexWrap="wrap">
                  <Link
                    as={RouterLink}
                    to="/"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Accueil
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Link
                    as={RouterLink}
                    to="/services"
                    color="whiteAlpha.800"
                    _hover={{ color: 'white', textDecoration: 'underline' }}
                  >
                    Services
                  </Link>
                  <Text color="whiteAlpha.600">›</Text>
                  <Text color="white" fontWeight="medium">
                    {cfg.breadcrumb}
                  </Text>
                </HStack>

                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl', xl: '6xl' }}
                  fontWeight="700"
                  color="white"
                  lineHeight="1.05"
                  minW={0}
                >
                  {cfg.h1}
                </Heading>

                <Text
                  fontSize={{ base: 'sm', md: 'lg', lg: 'xl', xl: '2xl' }}
                  color="white"
                  fontWeight="300"
                  maxW={{ base: '100%', md: '680px', lg: '780px' }}
                  lineHeight="1.5"
                >
                  {cfg.subtitle}
                </Text>

                <Box pt={{ base: 2, md: 3 }}>
                  <Button
                    size={{ base: 'md', md: 'lg' }}
                    bg="brand.500"
                    color="white"
                    _hover={{ bg: 'brand.600' }}
                    rightIcon={<ArrowForwardIcon />}
                    onClick={onOpen}
                    borderRadius="full"
                    px={{ base: 6, md: 8 }}
                    fontWeight="600"
                  >
                    Obtenir ma soumission gratuite
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Container>

          <TrustBanner compact showSatisfactionGuarantee={false} />
        </Box>

        {/* ===== SECTION 3 - CHECKMARKS ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} pt={{ base: 20, md: 24, lg: 28 }} bg="white">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Notre approche
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Ce qui guide notre façon de travailler sur chaque projet
                </Text>
              </Stack>

              <Flex wrap="wrap" justify="center" gap={5}>
                {cfg.checkmarks.map((item, i) => (
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
                    w={{ base: '100%', md: 'calc(50% - 10px)', lg: 'calc(33.333% - 14px)' }}
                    maxW={{ lg: '420px' }}
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
              </Flex>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 4 - SPÉCIALITÉS ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 10, md: 14 }}>
              <Stack spacing={4} textAlign="center" maxW="800px" mx="auto">
                <Heading
                  as="h2"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="bold"
                  color="gray.800"
                >
                  Ce que nous faisons
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" lineHeight="1.7">
                  Les interventions couvertes par ce service
                </Text>
              </Stack>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
                {cfg.specialites.map((item, i) => (
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
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 6 - GARANTIE + CTA MID-PAGE ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="orange.50">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Flex
                w="64px"
                h="64px"
                borderRadius="full"
                bg="brand.500"
                align="center"
                justify="center"
              >
                <Icon as={FaShieldAlt} color="white" boxSize={7} />
              </Flex>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
              >
                Garantie satisfaction 100%
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="gray.700"
                lineHeight="1.8"
                maxW="720px"
              >
                Chaque intervention est réalisée avec soin et professionnalisme. Si le résultat ne vous satisfait pas, nous revenons corriger sans frais supplémentaires.
              </Text>
              <Button
                size={{ base: 'md', md: 'lg' }}
                bg="brand.500"
                color="white"
                _hover={{ bg: 'brand.600' }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onOpen}
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                fontWeight="600"
              >
                Obtenir ma soumission gratuite
              </Button>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 7 - FAQ ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="white">
          <Container maxW="900px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                {cfg.faqTitle}
              </Heading>

              <Accordion allowMultiple>
                {cfg.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    border="1px solid"
                    borderColor="gray.200"
                    borderRadius="lg"
                    mb={3}
                    overflow="hidden"
                  >
                    <AccordionButton
                      py={{ base: 4, md: 5 }}
                      px={{ base: 5, md: 6 }}
                      _hover={{ bg: 'gray.50' }}
                      _expanded={{ bg: 'gray.50' }}
                    >
                      <Box flex="1" textAlign="left">
                        <Text
                          fontWeight="600"
                          color="gray.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.4"
                        >
                          {faq.question}
                        </Text>
                      </Box>
                      <AccordionIcon color="brand.500" />
                    </AccordionButton>
                    <AccordionPanel
                      pb={{ base: 4, md: 5 }}
                      px={{ base: 5, md: 6 }}
                      pt={0}
                      bg="gray.50"
                    >
                      <Text color="gray.600" fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.8">
                        {faq.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 8 - LIENS INTERNES ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="gray.50">
          <Container maxW="1440px" px={{ base: 4, md: 6 }}>
            <Stack spacing={{ base: 8, md: 12 }}>
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
              >
                Services connexes
              </Heading>

              <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
                {cfg.internalLinks.map((link, i) => (
                  <Link
                    key={i}
                    as={RouterLink}
                    to={link.to}
                    _hover={{ textDecoration: 'none' }}
                  >
                    <Box
                      bg="white"
                      border="1px solid"
                      borderColor="gray.200"
                      borderRadius="xl"
                      p={5}
                      h="100%"
                      display="flex"
                      flexDirection="column"
                      _hover={{
                        borderColor: 'brand.500',
                        transform: 'translateY(-2px)',
                        boxShadow: 'md',
                      }}
                      transition="all 0.2s"
                    >
                      <Stack spacing={3} flex={1} justify="space-between">
                        <Text
                          fontWeight="600"
                          color="gray.800"
                          fontSize={{ base: 'sm', md: 'md' }}
                          lineHeight="1.3"
                        >
                          {link.title}
                        </Text>
                        <Text color="gray.500" fontSize="sm" lineHeight="1.6">
                          {link.description}
                        </Text>
                        <HStack spacing={1} color="brand.500">
                          <Text fontSize="sm" fontWeight="medium">Voir</Text>
                          <ArrowForwardIcon boxSize={3} />
                        </HStack>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* ===== SECTION 9 - CTA FINAL ===== */}
        <Box py={{ base: 16, md: 20, lg: 24 }} bg="app.ctaBg">
          <Container maxW="900px" px={{ base: 4, md: 6 }} textAlign="center">
            <Stack spacing={6} align="center">
              <Heading
                as="h2"
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight="bold"
                color="white"
              >
                {cfg.ctaTitle}
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.900"
                lineHeight="1.7"
              >
                Soumission gratuite en moins de 24h
              </Text>
              <Button
                size={{ base: 'md', md: 'lg' }}
                bg="white"
                color="brand.500"
                _hover={{ bg: 'gray.100' }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onOpen}
                borderRadius="full"
                px={{ base: 6, md: 8 }}
                fontWeight="700"
              >
                Obtenir ma soumission gratuite
              </Button>
            </Stack>
          </Container>
        </Box>

      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
