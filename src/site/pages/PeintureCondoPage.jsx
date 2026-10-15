import React from 'react';
import {
  FaBuilding,
  FaShieldAlt,
  FaHome,
  FaBroom,
  FaCalendarAlt,
  FaStar,
} from 'react-icons/fa';
import ResidentialSubServicePage from '../components/ResidentialSubServicePage';

import condoHeroImg from '../images/villes/montreal/ville-marie/header.webp';
import condoImg7924 from '../images/services-villes/peinture-interieure-montreal/avant-apres/Griffintown avant.webp';
import condoImg7922 from '../images/villes/montreal/avant-apres/IMG_7922.webp';
import condoImg7999 from '../images/sous-services/appartement/avant-apres/IMG_7999.webp';
import condoImg7997 from '../images/sous-services/appartement/avant-apres/IMG_7997.webp';
import condoImg8108 from '../images/services/platre/avant-apres/IMG_8108.webp';
import condoImg6031 from '../images/services/platre/avant-apres/IMG_6031.webp';

const CHECKMARKS = [
  {
    icon: FaBuilding,
    title: 'Coordination simple avec les règles de l\'immeuble',
    text: 'Heures permises, accès, réservation d\'ascenseur, stationnement de service ou consignes du syndicat : on planifie le chantier pour respecter le cadre de la copropriété.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection des parties communes et du trajet de chantier',
    text: 'Entrées, corridors, ascenseur et zones de passage sont protégés et respectés pour réduire les plaintes, les traces et les irritants.',
  },
  {
    icon: FaHome,
    title: 'Travaux adaptés à un espace occupé',
    text: 'En condo, l\'espace est souvent compact et chaque pièce compte. On séquence les travaux pour limiter l\'encombrement et préserver le confort au quotidien.',
  },
  {
    icon: FaBroom,
    title: 'Gestion propre des matériaux et du bruit',
    text: 'Transport du matériel, protections, contenants, circulation et nettoyage sont gérés avec discipline dans un environnement où tout se voit rapidement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair malgré les contraintes d\'immeuble',
    text: 'On tient compte des règles du bâtiment pour proposer un plan réaliste, sans improvisation de dernière minute.',
  },
  {
    icon: FaStar,
    title: 'Résultat net dans un espace très visible',
    text: 'Dans un condo, les finitions se remarquent tout de suite. L\'objectif est un résultat propre, lumineux et soigné dans un espace souvent plus exposé à la lumière.',
  },
];

const CONTROL_CARDS = [
  {
    title: 'Coordination avec le syndicat',
    subtitle: 'Règlements et accès réglés d\'avance',
    description: 'Plages horaires, ascenseur et stationnement : on valide tout avec la gestion avant le premier coup de pinceau.',
  },
  {
    title: 'Échéancier respecté',
    subtitle: 'Pas de chantier qui traîne',
    description: 'Vous savez quelles pièces seront touchées et quand, pour continuer à vivre dans votre condo sans surprise.',
  },
  {
    title: 'Finitions impeccables',
    subtitle: 'Sous un éclairage qui pardonne peu',
    description: 'Grandes fenêtres et murs lisses montrent tout : chaque ligne de coupe et chaque plafond est livré net.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous pouvez travailler dans un immeuble avec des règles strictes\u00A0?',
    answer: 'Oui. Nous nous adaptons aux consignes de la copropriété : plages horaires autorisées, réservation d\'ascenseur, accès, circulation et protection des zones communes.',
  },
  {
    question: 'Est-ce que je peux rester dans mon condo pendant les travaux\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous planifions les travaux pour limiter l\'impact sur votre quotidien et garder l\'espace le plus fonctionnel possible pendant le chantier.',
  },
  {
    question: 'Comment protégez-vous les corridors, l\'ascenseur et les parties communes\u00A0?',
    answer: 'Nous transportons le matériel proprement, protégeons le trajet de chantier au besoin et travaillons de manière ordonnée pour limiter les marques, les salissures et les irritants.',
  },
  {
    question: 'Combien de temps faut-il pour peindre un condo\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Une soumission permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Pouvez-vous peindre un condo avant une mise en vente ou avant mon emménagement\u00A0?',
    answer: 'Oui. Ce sont souvent deux des meilleurs moments pour intervenir rapidement et efficacement, avec moins de contraintes et un impact visuel immédiat.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture résidentielle',
    description: 'Page parente - maisons, condos, logements et multi-étages.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture intérieure',
    description: 'Complément technique : surfaces, finis, couches et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Peinture de maison unifamiliale',
    description: 'Plusieurs étages, boiseries et escaliers.',
    to: '/services/peinture-residentielle/maison',
  },
  {
    title: 'Peinture d\'appartement',
    description: 'Logement occupé ou entre deux locataires.',
    to: '/services/peinture-residentielle/appartement',
  },
  {
    title: 'Nos secteurs desservis',
    description: 'Montréal, Laval, Longueuil et la Rive-Sud.',
    to: '/secteurs',
  },
  {
    title: 'Pourquoi choisir un peintre professionnel\u00A0?',
    description: 'Licence RBQ, assurance, expertise - ce qui fait la différence.',
    to: '/peintre-professionnel',
  },
  {
    title: 'Voir nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité de finition.',
    to: '/realisations',
  },
];

const CAROUSEL_IMAGES = [
  { before: condoImg7924, after: condoImg7922, description: 'Salon - Condo Griffintown, Montréal' },
  { before: condoImg7999, after: condoImg7997, description: 'Rafraîchissement intérieur - Condo Montréal' },
  { before: condoImg6031, after: condoImg8108, description: 'Rénovation avant vente - Condo' },
];

export default function PeintureCondoPage() {
  return (
    <ResidentialSubServicePage
      slug="condo"
      seo={{
        title: 'Peinture de condo à Montréal | Chantier propre | Le Lever du Pinceau',
        description:
          'Peinture de condo à Montréal. Chantier propre, coordination avec la copropriété, protection des parties communes et échéancier clair. Soumission gratuite.',
      }}
      breadcrumbName="Peinture de condo"
      breadcrumbLabel="Condo"
      hero={{
        image: condoHeroImg,
        alt: 'Peinture de condo à Montréal - intérieur lumineux et soigné',
        width: 1600,
        height: 1067,
        title: 'Peinture de condo à Montréal',
        subtitle: 'Chantier propre et bien coordonné, adapté à la copropriété.',
        description: 'Protection des parties communes et entente avec le syndicat.',
      }}
      checkmarks={{
        title: 'Une exécution pensée pour la réalité d\'un condo',
        intro: 'Dans un immeuble occupé, la qualité du chantier se joue autant dans la coordination que dans la finition.',
        items: CHECKMARKS,
      }}
      control={{
        title: 'Quand tout est sous contrôle, votre condo reste vivable',
        subtitle: 'Ce qui rend un chantier en copropriété simple pour vous, vos voisins et la gestion.',
        cards: CONTROL_CARDS,
      }}
      carousel={{
        title: 'Avant / après de projets en condo',
        subtitle: 'Finitions soignées, espaces lumineux et chantiers propres dans des condos montréalais.',
        images: CAROUSEL_IMAGES,
      }}
      guarantee={{
        title: 'Un projet de condo bien géré évite beaucoup de friction',
        body: "En copropriété, la qualité d'un chantier ne se mesure pas seulement à la finition finale. Elle se mesure aussi à la propreté, à la coordination, au respect des consignes de l'immeuble et à la simplicité de l'expérience pour vous. Notre approche vise justement à rendre le projet fluide, propre et prévisible du début à la fin.",
      }}
      faqTitle="Questions fréquentes sur la peinture de condo"
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
      finalCtaTitle={"Besoin d'un chantier propre et bien coordonné dans votre condo\u00A0?"}
    />
  );
}
