import React, { Fragment } from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import {
  FaBuilding,
  FaTruck,
  FaCalendarAlt,
  FaShieldAlt,
  FaStar,
  FaComments,
  FaHome,
  FaKey,
  FaTag,
  FaPaintBrush,
  FaLayerGroup,
  FaCut,
  FaPalette,
  FaBox,
  FaUtensils,
  FaBath,
  FaBorderAll,
  FaArrowsAlt,
  FaWarehouse,
} from 'react-icons/fa';
import SEOHead from '../seo/SEOHead';
import HeroSection from '../home-page/HeroSection';
import { TRUST_BANNER_BELOW_PT } from '../home-page/TrustBanner';
import FAQSection from '../home-page/FAQSection';
import FeatureCardsSection from '../components/FeatureCardsSection';
import InternalLinksSection from '../components/InternalLinksSection';
import {
  SpecialitesSection,
  serviceBreadcrumbSchema,
  servicePageSchema,
  faqPageSchema,
} from '../components/ServicePageSections';
import SubmissionModal from '../home-page/SubmissionModal';
import FinalCTASection from '../home-page/FinalCTASection';
import BeforeAfterCarouselSection from '../home-page/BeforeAfterCarouselSection';
import ServiceGuaranteeSection from '../home-page/ServiceGuaranteeSection';

import heroImg from '../images/villes/montreal/ville-marie/header.webp';
import griffintownAvant from '../images/services-villes/peinture-interieure-montreal/avant-apres/Griffintown avant.webp';
import griffintownApres from '../images/services-villes/peinture-interieure-montreal/avant-apres/Griffintown après.webp';
import plateauAvant from '../images/services-villes/peinture-interieure-montreal/avant-apres/plateau avant.webp';
import plateauApres from '../images/services-villes/peinture-interieure-montreal/avant-apres/plateau après.webp';
import westmountAvant from '../images/sous-services/appartement/avant-apres/IMG_5984.webp';
import westmountApres from '../images/sous-services/appartement/avant-apres/IMG_5982.webp';
import ndgAvant from '../images/sous-services/appartement/avant-apres/IMG_7999.webp';
import ndgApres from '../images/sous-services/appartement/avant-apres/IMG_7997.webp';
import armoiresMileEndAvant from '../images/sous-services/armoires/avant-apres/IMG_8114.webp';
import armoiresMileEndApres from '../images/sous-services/armoires/avant-apres/IMG_8120.webp';
import armoiresBlanchesAvant from '../images/sous-services/armoires/avant-apres/IMG_5975.webp';
import armoiresBlanchesApres from '../images/sous-services/armoires/avant-apres/IMG_5976.webp';
import escalierWestmountAvant from '../images/services/residentielle/avant-apres/Peintre Montréal, Le Lever du Pinceau a peinturé l_ensemble de cette maison plein de boiserie décorative à Westmount.webp';
import escalierWestmountApres from '../images/services/residentielle/avant-apres/Peintre professionnel Montréal, Le Lever du Pinceau a peint l_ensemble de cette maison centenaire de Montréal.webp';
import couloirPlateauAvant from '../images/services/platre/avant-apres/IMG_6031.webp';
import couloirPlateauApres from '../images/services/platre/avant-apres/IMG_8108.webp';
import chambrePapierPeintAvant from '../images/villes/st-lambert/avant-apres/IMG_0842.webp';
import chambrePapierPeintApres from '../images/villes/st-lambert/avant-apres/IMG_0843.webp';
import chambreVerteAvant from '../images/villes/brossard/avant-apres/IMG_0846.webp';
import chambreVerteApres from '../images/villes/brossard/avant-apres/IMG_0847.webp';
import chambreFleurieAvant from '../images/villes/laprairie/avant-apres/IMG_0852.webp';
import chambreFleurieApres from '../images/villes/laprairie/avant-apres/IMG_0853.webp';
import hallEntreeAvant from '../images/villes/brossard/avant-apres/IMG_0855.webp';
import hallEntreeApres from '../images/villes/brossard/avant-apres/IMG_0856.webp';
import cadrageFenetreAvant from '../images/villes/st-lambert/avant-apres/IMG_0836.webp';
import cadrageFenetreApres from '../images/villes/st-lambert/avant-apres/IMG_0837.webp';
import moulureAvant from '../images/villes/laprairie/avant-apres/IMG_0861.webp';
import moulureApres from '../images/villes/laprairie/avant-apres/IMG_0862.webp';
import poutreAcierAvant from '../images/sous-services/maison/avant-apres/IMG_0834.webp';
import poutreAcierApres from '../images/sous-services/maison/avant-apres/IMG_0835.webp';

const CHECKMARKS_LOCAUX = [
  {
    icon: FaBuilding,
    title: 'Habitués aux condos, plex et maisons de quartier',
    text: 'Centre-ville, Plateau, Outremont, Ville-Marie ou Westmount : les contraintes ne sont pas les mêmes d\'un projet à l\'autre.',
  },
  {
    icon: FaTruck,
    title: 'Logistique simple en milieu urbain',
    text: 'Accès, stationnement, immeuble occupé, ascenseur, circulation du matériel : on planifie le chantier pour que tout se passe proprement.',
  },
  {
    icon: FaCalendarAlt,
    title: 'Échéancier clair pour les projets sensibles',
    text: 'Avant emménagement, avant vente, avant retour au bureau ou entre deux occupations : on comprend l\'importance du timing.',
  },
  {
    icon: FaShieldAlt,
    title: 'Protection complète des espaces habités',
    text: 'Dans un condo ou un appartement occupé, chaque pièce compte. Le chantier doit rester propre, structuré et rassurant.',
  },
  {
    icon: FaStar,
    title: 'Finition nette dans des espaces très visibles',
    text: 'En ville, les pièces sont souvent plus compactes et les détails sautent aux yeux. Le niveau de finition doit être impeccable.',
  },
  {
    icon: FaComments,
    title: 'Communication simple du début à la fin',
    text: 'Quand le projet se fait vite et dans un espace occupé, la clarté de communication compte autant que l\'exécution.',
  },
];

const CONTEXTES = [
  {
    icon: FaBuilding,
    title: 'Condo centre-ville ou tour résidentielle',
    text: 'Accès, ascenseur, stationnement limité, heures de travaux et espace compact : tout doit être coordonné proprement.',
  },
  {
    icon: FaHome,
    title: 'Plex, triplex et immeubles montréalais',
    text: 'Escaliers, circulation verticale, murs plus anciens, petites zones communes et voisinage rapproché demandent une exécution respectueuse et bien protégée.',
  },
  {
    icon: FaHome,
    title: 'Maison unifamiliale en quartier résidentiel',
    text: 'Les familles veulent un chantier rapide, propre et prévisible, sans que la maison soit désorganisée plus longtemps que nécessaire.',
  },
  {
    icon: FaTag,
    title: 'Rafraîchissement avant mise en marché',
    text: 'Peindre avant de vendre permet souvent de rendre l\'espace plus lumineux, propre et projetable pour les visites.',
  },
  {
    icon: FaKey,
    title: 'Travaux avant emménagement ou prise de possession',
    text: 'C\'est souvent la meilleure fenêtre pour peindre rapidement l\'intérieur avant de replacer les meubles et reprendre la routine.',
  },
];

const CHECKMARKS_TECHNIQUES = [
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
  },
  {
    icon: FaBath,
    title: 'Salle de bain',
    text: 'Fini semi-brillant anti-humidité obligatoire. Traitement anti-moisissure si nécessaire. Ventilation vérifiée avant application.',
  },
  {
    icon: FaBorderAll,
    title: 'Boiseries, moulures et portes',
    text: 'Sablage, apprêt, peinture alkyde ou latex en fini semi-brillant. Découpes précises à la main. Le travail qui distingue un pro.',
  },
  {
    icon: FaArrowsAlt,
    title: 'Escaliers et cage d\'escalier',
    text: 'Équipement spécialisé pour les hauteurs. Peinture et/ou teinture des marches, contremarches, rampes et murs.',
  },
  {
    icon: FaBuilding,
    title: 'Plafonds hauts et cathédrales',
    text: 'Échafaudage professionnel et pistolet airless pour les plafonds hors d\'atteinte. Expertise en sécurité.',
  },
  {
    icon: FaWarehouse,
    title: 'Sous-sol',
    text: 'Gestion de l\'humidité, murs de fondation, plancher de béton. Couleurs claires recommandées pour compenser l\'éclairage limité.',
  },
];

const FAQS = [
  {
    question: 'Intervenez-vous dans quels quartiers de Montréal\u00A0?',
    answer: 'Oui. Nous desservons Montréal et plusieurs quartiers comme le Plateau Mont-Royal, Ville-Marie, Outremont, Westmount, Griffintown, Rosemont et d\'autres secteurs du Grand Montréal.',
  },
  {
    question: 'Faites-vous la peinture intérieure de condos à Montréal\u00A0?',
    answer: 'Oui. Nous réalisons régulièrement des projets en condo, y compris dans des immeubles occupés ou avec contraintes d\'accès. Nous adaptons le chantier aux règles de l\'immeuble et à l\'espace disponible.',
  },
  {
    question: 'Pouvez-vous peindre avant un emménagement ou une mise en marché\u00A0?',
    answer: 'Oui. C\'est l\'un des contextes les plus fréquents. Nous planifions les travaux pour que l\'espace soit prêt dans le bon délai, avant l\'arrivée des meubles ou des visites.',
  },
  {
    question: 'Comment gérez-vous l\'accès, le stationnement ou l\'ascenseur dans les immeubles montréalais\u00A0?',
    answer: 'Ces éléments sont intégrés à la planification du chantier. L\'objectif est de limiter les imprévus, protéger les zones de passage et garder une exécution fluide malgré les contraintes de l\'immeuble.',
  },
  {
    question: 'Faites-vous aussi la peinture d\'armoires, de condos et d\'appartements\u00A0?',
    answer: 'Oui. Selon le projet, nous pouvons aussi intervenir sur des armoires de cuisine, des condos et des appartements. Ces services ont aussi leurs pages dédiées dans le site.',
  },
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
    title: 'Peinture extérieure',
    description: 'Revêtement, balcon, clôture et surfaces extérieures.',
    to: '/services/peinture-exterieure',
  },
  {
    title: 'Peinture résidentielle',
    description: 'Maisons, condos, logements et appartements à Montréal.',
    to: '/services/peinture-residentielle',
  },
  {
    title: 'Peinture condo',
    description: 'Projets spécialisés en condo : accès, contraintes et finition.',
    to: '/services/peinture-residentielle/condo',
  },
  {
    title: 'Peinture appartement',
    description: 'Remise en état locative, logement occupé ou rafraîchissement.',
    to: '/services/peinture-residentielle/appartement',
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
    title: 'Nos secteurs desservis à Montréal',
    description: 'Plateau, Ville-Marie, Outremont, Westmount et Grand Montréal.',
    to: '/secteurs/montreal',
  },
  {
    title: 'Nos réalisations',
    description: 'Avant / après de projets réels pour juger la finition.',
    to: '/realisations',
  },
];

const carouselImages = [
  { before: griffintownAvant, after: griffintownApres, description: 'Peinture intérieure - Condo Griffintown' },
  { before: plateauAvant, after: plateauApres, description: 'Rafraîchissement complet - Plateau Mont-Royal' },
  { before: westmountAvant, after: westmountApres, description: 'Murs et plafonds - Westmount' },
  { before: ndgAvant, after: ndgApres, description: 'Peinture intérieure - Notre-Dame-de-Grâce' },
  { before: armoiresMileEndAvant, after: armoiresMileEndApres, description: 'Peinture d\'armoires de cuisine - Mile-End, Montréal' },
  { before: escalierWestmountAvant, after: escalierWestmountApres, description: 'Peinture intérieure murs et plafonds - Westmount, Montréal' },
  { before: armoiresBlanchesAvant, after: armoiresBlanchesApres, description: 'Armoires de cuisine en bois peintes en blanc - Montréal' },
  { before: couloirPlateauAvant, after: couloirPlateauApres, description: 'Réparation de plâtre et peinture du couloir - Plateau, Montréal' },
  { before: chambrePapierPeintAvant, after: chambrePapierPeintApres, description: 'Chambre - retrait du papier peint et peinture des murs, Montréal' },
  { before: chambreVerteAvant, after: chambreVerteApres, description: 'Chambre - murs verts repeints en blanc, Montréal' },
  { before: chambreFleurieAvant, after: chambreFleurieApres, description: 'Chambre - papier peint fleuri remplacé par une peinture neuve, Montréal' },
  { before: hallEntreeAvant, after: hallEntreeApres, description: 'Hall d\'entrée - murs, plafond et portes, Montréal' },
  { before: cadrageFenetreAvant, after: cadrageFenetreApres, description: 'Cadrage de fenêtre - réparation de plâtre et peinture, Montréal' },
  { before: moulureAvant, after: moulureApres, description: 'Moulure - retouches et peinture de finition, Montréal' },
  { before: poutreAcierAvant, after: poutreAcierApres, description: 'Poutre d\'acier rouillée - préparation et peinture, Montréal' },
];

export default function PeintureInterieurePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <SEOHead
        title="Peinture intérieure à Montréal | Peintres professionnels | Le Lever du Pinceau"
        description="Peinture intérieure à Montréal pour condos, plex et maisons : murs, plafonds, boiseries et armoires. Chantier propre, licence RBQ, soumission gratuite."
        canonicalPath="/services/peinture-interieure"
        schemaArray={[
          serviceBreadcrumbSchema('Peinture intérieure', '/services/peinture-interieure'),
          faqPageSchema(FAQS),
          servicePageSchema({
            name: 'Peinture intérieure à Montréal',
            path: '/services/peinture-interieure',
            description:
              'Service de peinture intérieure à Montréal pour condos, plex et maisons : murs, plafonds, boiseries et armoires. Chantier propre, finition impeccable, équipe RBQ.',
            serviceType: 'Peinture intérieure',
          }),
        ]}
      />

      <Box w="100%" minW={0} bg="white" overflowX="hidden">
        <HeroSection
          onSubmissionOpen={onOpen}
          pageContext="Peinture intérieure"
          imageBackground={heroImg}
          imageAlt="Peinture intérieure à Montréal - condo lumineux et impeccable après travaux"
          title="Peinture intérieure à Montréal"
          subtitle="Murs, plafonds, boiseries et armoires"
          description="Des projets propres, rapides et impeccables dans les condos, plex et maisons du Grand Montréal."
          buttonText="Obtenir ma soumission gratuite"
          breadcrumb={[
            { label: 'Accueil', to: '/' },
            { label: 'Services', to: '/services' },
            { label: 'Peinture intérieure' },
          ]}
        />

        <FeatureCardsSection
          sectionPaddingTop={TRUST_BANNER_BELOW_PT}
          title="Une exécution pensée pour les réalités d'un projet intérieur à Montréal"
          subtitle="Le bon résultat ne dépend pas seulement de la peinture, mais aussi du contexte dans lequel le chantier se déroule."
          items={CHECKMARKS_LOCAUX}
          variant="inline"
        />

        <FeatureCardsSection
          title="Une approche différente selon le type de projet à Montréal"
          subtitle="Un condo à Griffintown, un plex à Rosemont ou une maison à Outremont ne se planifient pas de la même façon."
          items={CONTEXTES}
          variant="stacked"
          sectionBg="gray.50"
          columns={{ base: 1, sm: 2, md: 3 }}
        />

        <BeforeAfterCarouselSection
          isFr={true}
          title="Avant / après de projets intérieurs à Montréal"
          subtitle="Des réalisations qui montrent le niveau de finition, mais aussi la diversité des contextes locaux."
          images={carouselImages}
          sectionPaddingTop={{ base: 16, md: 20, lg: 24 }}
          sectionPaddingBottom={{ base: 6, md: 8 }}
        />

        <ServiceGuaranteeSection
          body="Chaque projet est réalisé avec les bons produits, les bonnes techniques et le niveau de soin que vous méritez. Si le résultat ne vous convient pas, nous revenons corriger sans frais supplémentaires."
          onCtaClick={onOpen}
          note="Réponse généralement en moins de 24h"
        />

        <FeatureCardsSection
          title="Ce qui distingue notre peinture intérieure à Montréal"
          subtitle="Des techniques maîtrisées pour chaque surface de votre intérieur"
          items={CHECKMARKS_TECHNIQUES}
          variant="inline"
        />

        <SpecialitesSection
          title="Chaque pièce mérite une attention particulière"
          subtitle="Nous adaptons nos techniques et nos produits selon l'espace à peindre"
          items={SPECIALITES}
        />

        <FAQSection title="Questions fréquentes sur la peinture intérieure à Montréal" faqsOverride={FAQS} emitSchema={false} />

        <InternalLinksSection title="Services connexes" links={INTERNAL_LINKS} />

        <FinalCTASection
          title={'Prêt à rafraîchir votre intérieur à Montréal\u00A0?'}
          subtitle="Obtenez une soumission gratuite pour votre projet de peinture intérieure à Montréal"
          buttonText="Obtenir ma soumission gratuite"
          onSubmissionOpen={onOpen}
        />
      </Box>

      <SubmissionModal isOpen={isOpen} onClose={onClose} />
    </Fragment>
  );
}
