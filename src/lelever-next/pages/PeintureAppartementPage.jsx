import React from 'react';
import { FaKey, FaCouch, FaTag, FaBroom, FaBuilding } from 'react-icons/fa';
import ResidentialSubServicePage from '../components/ResidentialSubServicePage';

import appartHeroImg from '../images/L3 Sous services/Photo page appartement/header.webp';
import chambreAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_0844.webp';
import chambreApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_0845.webp';
import corridorAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_8253.webp';
import corridorApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_8252.webp';
import escalierPlexAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7975.webp';
import escalierPlexApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7974.webp';
import porteAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_0828.webp';
import porteApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_0829.webp';
import pieceAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_5984.webp';
import pieceApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_5982.webp';
import mouluresAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7999.webp';
import mouluresApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7997.webp';
import cuisineAvant from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7992.webp';
import cuisineApres from '../images/L3 Sous services/Photo page appartement/Avant après/IMG_7994.webp';

const SITUATIONS = [
  {
    icon: FaKey,
    title: 'Appartement entre deux locataires',
    text: 'C\'est souvent le moment idéal pour intervenir vite, avec un espace plus libre et une priorité claire : remettre le logement propre et attrayant pour la relocation.',
  },
  {
    icon: FaCouch,
    title: 'Appartement encore occupé',
    text: 'Quand le locataire est sur place ou qu\'une partie du logement reste utilisée, le chantier doit être séquencé avec ordre, rapidité et respect de l\'espace.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en vente',
    text: 'Un appartement fraîchement peint aide à corriger l\'impression d\'usure, uniformiser les murs et augmenter la valeur perçue dès les visites.',
  },
  {
    icon: FaBroom,
    title: 'Logement locatif avec traces d\'usure',
    text: 'Marques, trous, frottements, reprises visibles et zones fatiguées exigent une vraie remise au propre avant peinture pour que le logement reparte sur une base saine.',
  },
  {
    icon: FaBuilding,
    title: 'Petit appartement ou espace très compact',
    text: 'Studio, 3½ ou 4½ : plus l\'espace est restreint, plus la gestion du matériel, des protections et de la circulation doit être maîtrisée.',
  },
];

const FAQS = [
  {
    question: 'Est-ce que vous pouvez peindre un appartement entre deux locataires\u00A0?',
    answer: 'Oui. C\'est souvent l\'un des contextes les plus simples pour intervenir rapidement. Le logement peut être remis au propre efficacement avant relocation, avec un résultat net et un échéancier plus facile à respecter.',
  },
  {
    question: 'Pouvez-vous travailler dans un appartement encore occupé\u00A0?',
    answer: 'Oui, dans la majorité des cas. Nous séquençons les travaux pour limiter l\'impact sur le quotidien et garder l\'espace aussi fonctionnel que possible pendant le chantier.',
  },
  {
    question: 'Est-ce que vous réparez aussi les trous, fissures et marques avant de peindre\u00A0?',
    answer: 'Oui. Un bon résultat passe par une remise en état minimale ou plus complète selon le niveau d\'usure du logement. Les défauts visibles sont corrigés avant l\'application de la finition.',
  },
  {
    question: 'Combien de temps faut-il pour peindre un appartement\u00A0?',
    answer: 'Cela dépend de la superficie, du nombre de pièces, de l\'état des surfaces et du niveau de préparation requis. Une soumission permet d\'établir un échéancier clair dès le départ.',
  },
  {
    question: 'Est-ce que la peinture peut aider à relouer ou vendre plus facilement un appartement\u00A0?',
    answer: 'Oui. Un appartement fraîchement peint paraît généralement plus propre, plus lumineux et mieux entretenu, ce qui améliore la première impression dès la visite.',
  },
];

const INTERNAL_LINKS = [
  {
    title: 'Peinture résidentielle',
    description: 'Page parente - maisons, condos, logements et appartements.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture intérieure',
    description: 'Complément technique : surfaces, finis, couches et préparation.',
    to: '/services/peinture-interieure',
  },
  {
    title: 'Réparation de plâtre et gypse',
    description: 'Remise en état des murs avant peinture.',
    to: '/services/reparation-de-platre-et-gypse',
  },
  {
    title: 'Peinture après-sinistre',
    description: 'Remise en état suite à dégât d\'eau, incendie ou moisissures.',
    to: '/services/peinture-apres-sinistre',
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
  {
    title: 'Voir nos réalisations',
    description: 'Avant / après de projets réels pour juger la qualité de finition.',
    to: '/realisations',
  },
];

const CAROUSEL_IMAGES = [
  {
    before: chambreAvant,
    after: chambreApres,
    description: 'Chambre - papier peint retiré, murs repeints et moulures rafraîchies',
  },
  {
    before: corridorAvant,
    after: corridorApres,
    description: 'Corridor et rampe d\'escalier - murs réparés et boiseries repeintes',
  },
  {
    before: escalierPlexAvant,
    after: escalierPlexApres,
    description: 'Escalier extérieur en colimaçon - plex, peinture neuve',
  },
  {
    before: porteAvant,
    after: porteApres,
    description: 'Porte d\'entrée - décapage et peinture bleu marine',
  },
  {
    before: pieceAvant,
    after: pieceApres,
    description: 'Pièce avec baie vitrée - remise au propre et finition nette',
  },
  {
    before: mouluresAvant,
    after: mouluresApres,
    description: 'Moulures et murs - fissures réparées, blanc uniforme',
  },
  {
    before: cuisineAvant,
    after: cuisineApres,
    description: 'Cuisine - reprise de plafond après dégât d\'eau',
  },
];

export default function PeintureAppartementPage() {
  return (
    <ResidentialSubServicePage
      slug="appartement"
      seo={{
        title: "Peinture d'appartement à Montréal | Remise en état | Le Lever du Pinceau",
        description:
          "Peinture d'appartement à Montréal pour logement occupé, remise en état entre locataires ou rafraîchissement avant vente. Soumission gratuite en 24h.",
      }}
      breadcrumbName="Peinture d'appartement"
      breadcrumbLabel="Appartement"
      hero={{
        image: appartHeroImg,
        alt: 'Peinture appartement Montréal - intérieur propre et lumineux remis au goût du jour',
        width: 1600,
        height: 1067,
        title: "Peinture d'appartement à Montréal",
        subtitle: 'Remise au propre rapide pour logement occupé ou mise en location.',
        description: 'Turnover locatif, avant vente ou entre deux locataires.',
      }}
      situations={{
        title: 'Une approche différente selon la situation du logement',
        intro:
          'Un appartement occupé, un logement à relouer ou un rafraîchissement avant vente ne se planifient pas de la même façon.',
        items: SITUATIONS,
      }}
      showMethodAndForm
      carousel={{
        title: 'Avant / après de projets en appartement',
        subtitle:
          'Espaces compacts remis au propre, logements lumineux et finitions nettes dans des appartements montréalais.',
        images: CAROUSEL_IMAGES,
        bg: 'gray.50',
      }}
      guarantee={{
        title: 'Un appartement bien repeint se loue et se présente beaucoup mieux',
        body: "Dans un appartement, la perception visuelle change très vite avec une peinture propre et uniforme. Que l'objectif soit de remettre un logement en état, de le relouer plus facilement, de le vendre ou simplement de l'habiter dans de meilleures conditions, le chantier doit être rapide, propre et bien organisé. Notre approche vise justement à créer ce résultat sans ajouter de friction inutile.",
      }}
      faqTitle="Questions fréquentes sur la peinture d'appartement"
      faqs={FAQS}
      internalLinks={INTERNAL_LINKS}
      finalCtaTitle={'Besoin de remettre un appartement au propre rapidement\u00A0?'}
    />
  );
}
