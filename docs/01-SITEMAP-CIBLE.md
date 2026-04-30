# 01 — Sitemap Cible (Source de vérité)

> **34 pages — Batch 1 (lancement)**  
> Ce fichier est la référence absolue pour la structure du site. Ne pas créer de pages hors de cette liste sans mise à jour ici.

---

## CORRESPONDANCE ROUTES ACTUELLES → NOUVELLES

| URL actuelle (App.jsx) | URL cible | Action |
|---|---|---|
| `/` | `/` | Conserver (nouveau contenu) |
| `/contact` | `/contact` = `/soumission` | Conserver, formulaire unifié |
| `/soumission` | Rediriger → `/contact` | Redirect 301 |
| `/peintre-professionnel` | `/peintre-professionnel` | Conserver |
| `/services` | `/services` | Conserver |
| `/services/peinture-interieure` | `/services/peinture-interieure` | Conserver |
| `/services/peinture-exterieure` | `/services/peinture-exterieure` | Conserver |
| `/services/peinture-residentielle` | `/services/peinture-residentielle` | Conserver |
| `/services/peinture-commerciale` | `/services/peinture-commerciale` | Conserver |
| `/services/peinture-industrielle` | `/services/peinture-industrielle` | Conserver |
| `/secteurs-desservis` | `/secteurs` | Renommer + redirect 301 |
| `/secteurs-desservis/montreal` | `/secteurs/montreal` | Renommer + redirect 301 |
| `/secteurs-desservis/laval` | `/secteurs/laval` | Renommer + redirect 301 |
| `/secteurs-desservis/longueuil` | `/secteurs/longueuil` | Renommer + redirect 301 |
| `/secteurs-desservis/brossard` | SUPPRIMER | Redirect → `/secteurs/rive-sud` |
| `/avis` | `/avis-clients` | Renommer + redirect 301 |
| `/blog` | `/blog` | Conserver |
| `/a-propos` | `/a-propos` | Conserver (phase 2 enrichi) |
| `/politiques/confidentialite` | `/politique-de-confidentialite` | Renommer + redirect 301 |
| `/politiques/termes-conditions` | `/mentions-legales` | Renommer + redirect 301 |

---

## BATCH 1 — 34 PAGES (à lancer)

### PAGES PILIERS (L0/L1)

#### #1 — Homepage `/`
- **Title Tag:** `Peintre Montréal | Peinture résidentielle & commerciale | Le Lever du Pinceau`
- **H1:** `Peintre professionnel à Montréal`
- **Mot-clé principal:** `peintre montréal`
- **Intention:** Transactionnelle
- **Priorité:** Critique
- **Composant actuel:** `NewHomePage`
- **Angle (anti-cannibalisation):** MARQUE + CONVERSION. Qui on est, 100+ avis 4.9★, RBQ, assurance. Sections courtes services + CTA. NE PAS détailler les services.
- **Liens internes requis:** Tous les L1 + soumission + avis + réalisations

---

#### #2 — `/peintre-professionnel`
- **Title Tag:** `Pourquoi faire appel à un peintre professionnel?`
- **H1:** `Pourquoi faire appel à un peintre professionnel?`
- **Mot-clé principal:** `peintre professionnel`
- **Intention:** Informationnelle
- **Priorité:** Critique
- **Composant actuel:** `PeintreProfessionnelPage`
- **Angle:** E-E-A-T: Pourquoi un pro vs amateur/au noir. RBQ, assurance, risques, checklist 7 questions. NE PAS lister les services. REDISTRIBUTEUR de jus SEO vers tout le site.
- **Liens internes requis:** Homepage + Services + Secteurs + Soumission + Réalisations

---

#### #3 — `/services`
- **Title Tag:** `Nos services de peinture à Montréal et Gatineau`
- **H1:** `Nos services de peinture à Montréal et Gatineau`
- **Mot-clé principal:** `services peinture montréal`
- **Intention:** Navigationnelle
- **Priorité:** Critique
- **Composant actuel:** `ServicesPage`
- **Angle:** HUB NAVIGATION. Cartes enrichies avec sous-services visibles en liens. Courtes descriptions. Carrefour, pas article.
- **Liens internes requis:** Tous les L2 services + 3 sous-services L3 + soumission

---

#### #4 — `/secteurs`
- **Title Tag:** `Secteurs desservis – Peintre Grand Montréal et Gatineau`
- **H1:** `Secteurs desservis – Peintre Grand Montréal et Gatineau`
- **Mot-clé principal:** `peintre grand montréal`
- **Intention:** Navigationnelle
- **Priorité:** Critique
- **Composant actuel:** `SecteursDesservisPage` (à renommer/déplacer vers `/secteurs`)
- **Angle:** HUB GÉOGRAPHIQUE. Carte + liste villes/quartiers avec liens. NE PAS écrire sur les services.
- **Liens internes requis:** Toutes villes + 4 quartiers

---

### SERVICES L2 — PRINCIPAUX (5)

#### #5 — `/services/peinture-interieure`
- **Title Tag:** `Peinture intérieure à Montréal – Murs, plafonds, boiseries`
- **H1:** `Peinture intérieure à Montréal`
- **Mot-clé principal:** `peinture intérieure montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `PeintureInterieurePage`
- **Angle:** TECHNIQUE: surfaces (gypse, plâtre, bois), finis (mat/satiné/semi-brillant), préparation, application. H2 par pièce. NE PAS parler expérience client résidentielle.
- **Liens internes requis:** Armoires L3 + Extérieure + Soumission + Peintre pro

---

#### #6 — `/services/peinture-exterieure`
- **Title Tag:** `Peinture extérieure à Montréal – Revêtement, balcon, clôture`
- **H1:** `Peinture extérieure à Montréal`
- **Mot-clé principal:** `peinture extérieure montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `PeintureExterieurePage`
- **Angle:** TECHNIQUE: revêtements (bois, alu, vinyle), climat québécois (gel/dégel, UV), saison (mai-oct). NE PAS parler expérience résidentielle.
- **Liens internes requis:** Teinture + Intérieure + Soumission + Peintre pro

---

#### #7 — `/services/peinture-residentielle`
- **Title Tag:** `Peinture résidentielle à Montréal – Maison, condo, appartement`
- **H1:** `Peinture résidentielle à Montréal`
- **Mot-clé principal:** `peinture résidentielle montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `PeintureResidentiellePage`
- **Angle:** EXPÉRIENCE CLIENT: respect espace, protection meubles, horaires flexibles, garantie. NE PAS détailler techniques de peinture.
- **Liens internes requis:** Condo L3 + Appart L3 + Intérieure + Soumission

---

#### #8 — `/services/peinture-commerciale`
- **Title Tag:** `Peinture commerciale à Montréal – Bureau, restaurant, commerce`
- **H1:** `Peinture commerciale à Montréal`
- **Mot-clé principal:** `peinture commerciale montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `PeintureCommercialePage`
- **Angle:** BESOINS BUSINESS: hors heures, normes commerciales, échéancier serré, types espaces. NE PAS copier contenu résidentiel.
- **Liens internes requis:** Industrielle + Soumission + Peintre pro

---

#### #9 — `/services/peinture-industrielle`
- **Title Tag:** `Peinture industrielle à Montréal – Entrepôt, usine, stationnement`
- **H1:** `Peinture industrielle à Montréal`
- **Mot-clé principal:** `peinture industrielle montréal`
- **Intention:** Transactionnelle
- **Priorité:** Moyenne
- **Composant actuel:** `PeintureIndustriellePage`
- **Angle:** SPÉCIALISATION: époxy, revêtements résistants, marquage sol, structures métalliques.
- **Liens internes requis:** Commerciale + Pistolet + Soumission

---

### SERVICES L2 — SPÉCIALISÉS (5) ← À CRÉER

#### #10 — `/services/teinture-exterieure`
- **Title Tag:** `Teinture extérieure à Montréal – Bois, patio, clôture`
- **H1:** `Teinture extérieure à Montréal`
- **Mot-clé principal:** `teinture extérieure montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** Teinture ≠ peinture. Pénétration bois, semi-transparente vs opaque, produits, fréquence.
- **Liens internes requis:** Extérieure + Soumission

---

#### #11 — `/services/preparation-de-surfaces`
- **Title Tag:** `Préparation de surfaces avant peinture à Montréal`
- **H1:** `Préparation de surfaces avant peinture`
- **Mot-clé principal:** `préparation surfaces peinture`
- **Intention:** Informationnelle+
- **Priorité:** Moyenne
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** 80% du résultat = préparation. Sablage, rebouchage, calfeutrage, apprêt.
- **Liens internes requis:** Intérieure + Extérieure + Plâtre

---

#### #12 — `/services/peinture-au-pistolet`
- **Title Tag:** `Peinture au pistolet (airless) à Montréal`
- **H1:** `Peinture au pistolet (airless) à Montréal`
- **Mot-clé principal:** `peinture au pistolet montréal`
- **Intention:** Transactionnelle
- **Priorité:** Moyenne
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** Technologie: avantages, quand utiliser vs rouleau, équipement pro.
- **Liens internes requis:** Commerciale + Industrielle

---

#### #13 — `/services/reparation-de-platre-et-gypse`
- **Title Tag:** `Réparation de plâtre et gypse avant peinture`
- **H1:** `Réparation de plâtre et gypse`
- **Mot-clé principal:** `réparation plâtre gypse montréal`
- **Intention:** Transactionnelle
- **Priorité:** Moyenne
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** Trous, fissures, joints, dégâts d'eau. Réparation AVANT peinture = clé en main.
- **Liens internes requis:** Préparation + Intérieure

---

#### #14 — `/services/peinture-apres-sinistre`
- **Title Tag:** `Peinture après sinistre (dégât d'eau, feu)`
- **H1:** `Peinture après sinistre`
- **Mot-clé principal:** `peinture après sinistre montréal`
- **Intention:** Transactionnelle
- **Priorité:** Moyenne
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** Urgence + assurance. Collaboration assureurs, documentation réclamation.
- **Liens internes requis:** Résidentielle + Commerciale

---

### SOUS-SERVICES L3 — PRIORITAIRES (3) ← À CRÉER

#### #15 — `/services/peinture-interieure/armoires-de-cuisine`
- **Title Tag:** `Peinture d'armoires de cuisine à Montréal`
- **H1:** `Peinture d'armoires de cuisine à Montréal`
- **Mot-clé principal:** `peinture armoires cuisine montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer (L3 sous peinture-interieure)
- **Angle:** Alternative au remplacement. Processus (démontage, sablage, apprêt, 2-3 couches). Alkyde hybride. Coût vs remplacement. Service DISTINCT.
- **Liens internes requis:** Intérieure + Résidentielle + Soumission

---

#### #16 — `/services/peinture-residentielle/condo`
- **Title Tag:** `Peinture de condo à Montréal`
- **H1:** `Peinture de condo à Montréal`
- **Mot-clé principal:** `peinture condo montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer (L3 sous peinture-residentielle)
- **Angle:** Contraintes condo: copropriété, ascenseur, bruit, horaires, petits espaces. TRÈS recherché à Montréal.
- **Liens internes requis:** Résidentielle (parent) + Intérieure + Westmount + Ville-Marie (quartiers condo) + Griffintown (phase 2) + Soumission

---

#### #17 — `/services/peinture-residentielle/appartement`
- **Title Tag:** `Peinture d'appartement à Montréal`
- **H1:** `Peinture d'appartement à Montréal`
- **Mot-clé principal:** `peinture appartement montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer (L3 sous peinture-residentielle)
- **Angle:** Contexte locatif: déménagement, 1er juillet, responsabilités locataire vs proprio, budgets 3½/4½/5½. Cible aussi propriétaires bailleurs.
- **Liens internes requis:** Résidentielle (parent) + Intérieure + Plateau-Mont-Royal (quartier locatif) + Soumission

---

### SERVICE × VILLE (2) ← À CRÉER

#### #18 — `/peinture-interieure-montreal`
- **Title Tag:** `Peinture intérieure à Montréal – Service professionnel`
- **H1:** `Peinture intérieure à Montréal`
- **Mot-clé principal:** `peinture intérieure montréal`
- **Intention:** Transactionnelle
- **Priorité:** Critique
- **Composant actuel:** ❌ N'existe pas (différent de `/services/peinture-interieure`)
- **Angle:** SERVICE + VILLE. Projets intérieurs réalisés à MTL, quartiers, témoignages locaux, photos. DIFFÉRENT de `/services/peinture-interieure` (qui est général sans ville).
- **Liens internes requis:** Intérieure + Montréal + Soumission + Quartiers + Armoires

---

#### #19 — `/peinture-exterieure-montreal`
- **Title Tag:** `Peinture extérieure à Montréal – Revêtement et teinture`
- **H1:** `Peinture extérieure à Montréal`
- **Mot-clé principal:** `peinture extérieure montréal`
- **Intention:** Transactionnelle
- **Priorité:** Critique
- **Composant actuel:** ❌ N'existe pas (différent de `/services/peinture-exterieure`)
- **Angle:** SERVICE + VILLE. Projets extérieurs MTL, climat montréalais spécifiquement, quartiers, saison. DIFFÉRENT de `/services/peinture-exterieure` (général).
- **Liens internes requis:** Extérieure + Montréal + Teinture + Soumission

---

### SECTEURS — VILLES (5)

#### #20 — `/secteurs/montreal`
- **Title Tag:** `Peintre à Montréal – Service de peinture sur l'île`
- **H1:** `Peintre à Montréal`
- **Mot-clé principal:** `peintre à montréal`
- **Intention:** Transactionnelle
- **Priorité:** Critique
- **Composant actuel:** `MontrealCityPage` (URL actuelle: `/secteurs-desservis/montreal`)
- **Angle:** Page locale RICHE. Projets MTL (3-5 photos), quartiers avec liens, témoignages. Liée au Google Business Profile. H2 par service COURTS (pas copier les pages services).
- **Liens internes requis:** 4 quartiers + Services + Soumission + Avis

---

#### #21 — `/secteurs/laval`
- **Title Tag:** `Peintre à Laval – Peinture résidentielle et commerciale`
- **H1:** `Peintre à Laval`
- **Mot-clé principal:** `peintre laval`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `LavalCityPage` (URL actuelle: `/secteurs-desservis/laval`)
- **Angle:** Quartiers Laval (Vimont, Chomedey, Duvernay), projets réalisés. Contenu UNIQUE.
- **Liens internes requis:** Services (5 catégories) + Soumission + Avis clients

---

#### #22 — `/secteurs/longueuil`
- **Title Tag:** `Peintre à Longueuil`
- **H1:** `Peintre à Longueuil`
- **Mot-clé principal:** `peintre longueuil`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `LongueuilCityPage` (URL actuelle: `/secteurs-desservis/longueuil`)
- **Angle:** Vieux-Longueuil, secteurs résidentiels. NE PAS copier la page Rive-Sud.
- **Liens internes requis:** Services (5 catégories) + Rive-Sud + Soumission + Avis clients

---

#### #23 — `/secteurs/rive-sud`
- **Title Tag:** `Peintre Rive-Sud de Montréal`
- **H1:** `Peintre Rive-Sud de Montréal`
- **Mot-clé principal:** `peintre rive-sud montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** HUB RÉGIONAL. Couvre Longueuil, Brossard, St-Lambert, St-Bruno. Linke vers Longueuil. NE PAS être une copie de Longueuil (angle: toute la région).
- **Liens internes requis:** Longueuil + Services (5 catégories) + Soumission + Avis clients

---

#### #24 — `/secteurs/gatineau`
- **Title Tag:** `Peintre à Gatineau`
- **H1:** `Peintre à Gatineau`
- **Mot-clé principal:** `peintre gatineau`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** Franchise. Quartiers (Hull, Aylmer, Buckingham). Liée au GBP Gatineau. Contenu 100% unique.
- **Liens internes requis:** Services (5 catégories) + Soumission + Avis clients

---

### QUARTIERS MONTRÉAL (4) ← À CRÉER

#### #25 — `/secteurs/montreal/westmount`
- **Title Tag:** `Peintre à Westmount – Service haut de gamme`
- **H1:** `Peintre à Westmount`
- **Mot-clé principal:** `peintre westmount`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** PREMIUM. Grandes maisons historiques, boiseries d'époque, clientèle anglophone. Plus gros average ticket de MTL.
- **Liens internes requis:** Montréal + Résidentielle + Soumission

---

#### #26 — `/secteurs/montreal/outremont`
- **Title Tag:** `Peintre à Outremont – Peinture résidentielle de qualité`
- **H1:** `Peintre à Outremont`
- **Mot-clé principal:** `peintre outremont`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** PRESTIGE francophone. Maisons de prestige, finitions soignées, clientèle exigeante.
- **Liens internes requis:** Montréal + Résidentielle + Soumission

---

#### #27 — `/secteurs/montreal/plateau-mont-royal`
- **Title Tag:** `Peintre au Plateau-Mont-Royal`
- **H1:** `Peintre au Plateau-Mont-Royal`
- **Mot-clé principal:** `peintre plateau mont-royal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** PLUS GROS VOLUME. Triplex, duplex patrimoniaux, escaliers extérieurs, moulures d'époque. Densité résidentielle max.
- **Liens internes requis:** Montréal + Résidentielle + Soumission

---

#### #28 — `/secteurs/montreal/ville-marie`
- **Title Tag:** `Peintre à Ville-Marie et Centre-Ville`
- **H1:** `Peintre à Ville-Marie et Centre-Ville`
- **Mot-clé principal:** `peintre ville-marie centre-ville`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** MIX RÉSIDENTIEL + COMMERCIAL. Condos de luxe tours + bureaux + restaurants centre-ville. Moins ciblé par compétiteurs.
- **Liens internes requis:** Montréal + Commerciale + Condo + Soumission

---

### BLOG + PAGES CLASSIQUES + LÉGAL (6)

#### #29 — `/blog`
- **Title Tag:** `Blog – Conseils et ressources en peinture`
- **H1:** `Conseils et ressources en peinture`
- **Mot-clé principal:** `blog peinture montréal`
- **Intention:** Informationnelle
- **Priorité:** Haute
- **Composant actuel:** `BlogPage` ✅ Existe
- **Angle:** Hub blog. Structure prête, articles en phase 2. Prioriser: prix, choisir peintre, armoires.

---

#### #30 — `/avis-clients`
- **Title Tag:** `Avis clients – Ce que nos clients disent de nous`
- **H1:** `Avis clients`
- **Mot-clé principal:** `avis peintre montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** `AvisPage` (URL actuelle: `/avis` → redirect 301 vers `/avis-clients`)
- **Angle:** Preuve sociale. Avis Google + photos. Classés par type de projet ET par quartier.
- **Liens internes requis:** Soumission + Services + Peintre pro

---

#### #31 — `/contact` (= `/soumission`)
- **Title Tag:** `Soumission gratuite – Estimation en 24h`
- **H1:** `Demandez votre soumission gratuite`
- **Mot-clé principal:** `soumission peinture montréal`
- **Intention:** Transactionnelle
- **Priorité:** Critique
- **Composant actuel:** `ContactPage` + `SoumissionPage` → unifier sous `/contact`
- **Angle:** CONVERSION. Formulaire simplifié (nom, tél, email, description optionnelle). `/soumission` redirige vers `/contact`.
- **Liens internes requis:** Services + Secteurs (footer links uniquement)

---

#### #32 — `/realisations`
- **Title Tag:** `Nos réalisations – Portfolio de projets`
- **H1:** `Nos réalisations`
- **Mot-clé principal:** `réalisations peinture montréal`
- **Intention:** Transactionnelle
- **Priorité:** Haute
- **Composant actuel:** ❌ N'existe pas — À créer
- **Angle:** Portfolio visuel. Avant/après. Chaque réalisation linke vers service + quartier correspondant.
- **Liens internes requis:** Services + Quartiers + Avis + Soumission

---

#### #33 — `/mentions-legales`
- **Title Tag:** `Mentions légales`
- **Intention:** —
- **Priorité:** Basse
- **Composant actuel:** `ThermOfUse` (URL actuelle: `/politiques/termes-conditions`)

---

#### #34 — `/politique-de-confidentialite`
- **Title Tag:** `Politique de confidentialité`
- **Intention:** —
- **Priorité:** Basse
- **Composant actuel:** `PrivacyPolicyPage` (URL actuelle: `/politiques/confidentialite`)

---

## BATCH 2 — PHASE 2 (après lancement)

### Articles Blog — Priorité #1 (1-3 mois)
| # | URL | Déclencheur |
|---|-----|-------------|
| 1 | `/blog/prix-peinture-montreal` | Page CONVERSION #1. Plus gros volume. Créer en premier! ✅ Existe déjà |
| 2 | `/blog/comment-choisir-un-peintre-professionnel` | Renforce /peintre-professionnel. Gros volume. ✅ Existe déjà |
| 3 | `/blog/peinture-armoires-cuisine-guide` | Très recherché. Renforce la page L3 armoires. |
| 4 | `/blog/combien-coute-peindre-condo` | Renforce la page L3 condo. |
| 5 | `/blog/combien-coute-peindre-appartement` | Renforce la page L3 appartement. |
| 6 | `/blog/peinture-demenagement-1er-juillet` | Saisonnier. Publier en mai pour le pic de juin-juillet. |
| 7 | `/blog/couleurs-tendance-peinture-2026` | Mettre à jour chaque année. |

### Service × Ville — selon données GSC
| # | URL | Condition |
|---|-----|-----------|
| 8 | `/peinture-residentielle-montreal` | Si impressions élevées + CTR < 5% |
| 9 | `/peinture-interieure-laval` | Même logique |
| 10 | `/peinture-interieure-gatineau` | Même logique |
| 11 | `/peinture-exterieure-laval` | Même logique |

### Sous-Services L3 restants (3-6 mois)
| # | URL |
|---|-----|
| 12 | `/services/peinture-interieure/murs-et-plafonds` |
| 13 | `/services/peinture-interieure/cuisine` |
| 14 | `/services/peinture-interieure/salle-de-bain` |
| 15 | `/services/peinture-exterieure/revetement` |
| 16 | `/services/peinture-exterieure/balcon-et-patio` |
| 17 | `/services/peinture-residentielle/maison` |
| 18 | `/services/peinture-residentielle/logement-locatif` |

### Quartiers additionnels (quand contenu réel disponible)
| # | URL | Condition |
|---|-----|-----------|
| 19 | `/secteurs/montreal/griffintown` | 3+ projets avec photos |
| 20 | `/secteurs/montreal/rosemont` | 3+ projets avec photos |
| 21 | `/secteurs/montreal/verdun` | 6+ mois |
| 22 | `/secteurs/montreal/saint-henri` | 6+ mois |
| 23 | `/secteurs/montreal/cote-des-neiges` | 6+ mois |
| 24 | `/secteurs/montreal/ahuntsic` | 6+ mois |

### Pages Entreprise (3-6 mois)
| # | URL | Note |
|---|-----|------|
| 25 | `/a-propos` | E-E-A-T. Histoire, mission, valeurs. Enrichir existant. |
| 26 | `/notre-equipe` | E-E-A-T. Photos + bios peintres. |
| 27 | `/faq` | Page FAQ dédiée pour rich snippets supplémentaires. |
| 28 | `/carrieres` | Recrutement. Bonus SEO: emploi peintre montréal. |

---

## RÉSUMÉ BATCH 1

| Catégorie | Nb pages | État |
|-----------|----------|------|
| Pages piliers | 4 | 4 existent (à modifier) |
| Services L2 principaux | 5 | 5 existent (à modifier) |
| Services L2 spécialisés | 5 | 0 existent — 5 à créer |
| Sous-services L3 prioritaires | 3 | 0 existent — 3 à créer |
| Pages service × ville | 2 | 0 existent — 2 à créer |
| Villes | 5 | 4 existent, 2 à créer (Rive-Sud, Gatineau) |
| Quartiers Montréal | 4 | 0 existent — 4 à créer |
| Blog hub | 1 | ✅ Existe |
| Pages classiques | 3 | 1 existe (Avis), 2 à créer (Réalisations) |
| Légal | 2 | 2 existent (à renommer) |
| **TOTAL BATCH 1** | **34** | **16 existent, 18 à créer/modifier** |
