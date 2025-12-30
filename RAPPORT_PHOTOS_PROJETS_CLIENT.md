# 📸 Rapport détaillé - Photos de projets

**Date:** 30 décembre 2025  
**Client:** Le Lever du Pinceau  
**Objet:** État actuel et recommandations pour les photos de projets

---

## 📋 Résumé exécutif

Ce rapport détaille l'état actuel des photos utilisées dans les sections de projets du site web, identifie les images manquantes ou à améliorer, et fournit des recommandations techniques pour optimiser l'expérience visuelle.

**Statut global:** ✅ **Toutes les images principales sont présentes**  
**Recommandation:** ⚠️ **Amélioration de la qualité et diversité des images recommandée**

---

## 🎯 Section 1: Page d'accueil - "Projets récents"

### Images actuellement utilisées

| #   | Image                 | Fichier                      | Statut      | Description                                  |
| --- | --------------------- | ---------------------------- | ----------- | -------------------------------------------- |
| 1   | Projet résidentiel #1 | `peinture_residentielle.jpg` | ✅ Présente | Utilisée pour le premier projet résidentiel  |
| 2   | Projet commercial #1  | `projet_commercial.jpg`      | ✅ Présente | Utilisée pour le premier projet commercial   |
| 3   | Projet intérieur      | `projet_residentielle.jpg`   | ✅ Présente | Utilisée pour les projets intérieurs         |
| 4   | Projet extérieur      | `projet_exterieur.jpg`       | ✅ Présente | Utilisée pour les projets extérieurs         |
| 5   | Projet résidentiel #2 | `projet_residentielle_2.jpg` | ✅ Présente | Utilisée pour le deuxième projet résidentiel |
| 6   | Projet commercial #2  | `projet_commercial_2.jpg`    | ✅ Présente | Utilisée pour le deuxième projet commercial  |

### Évaluation de la qualité actuelle

**Points forts:**

- ✅ Toutes les images sont présentes et chargent correctement
- ✅ Format approprié (JPG)
- ✅ Ratio d'aspect maintenu (16:9)

**Points à améliorer:**

- ⚠️ **Diversité visuelle:** Les images pourraient mieux représenter la variété des projets
- ⚠️ **Qualité professionnelle:** Certaines images pourraient être remplacées par des photos de meilleure qualité
- ⚠️ **Contexte local:** Ajouter des images avec des éléments reconnaissables de Montréal/Québec

### Recommandations pour cette section

1. **Remplacement progressif (optionnel):**

   - Remplacer les images génériques par des photos de projets réels réalisés par l'entreprise
   - Inclure des avant/après pour montrer la transformation
   - Ajouter des images avec des clients satisfaits (avec permission)

2. **Spécifications techniques recommandées:**
   - **Résolution:** Minimum 1920x1080 pixels (16:9)
   - **Format:** JPG (qualité 85-90%) ou WebP pour meilleures performances
   - **Poids:** Maximum 300-500 KB par image
   - **Orientation:** Paysage (horizontal)
   - **Focus:** Images nettes, bien éclairées, avec bon contraste

---

## 🏙️ Section 2: Pages de villes (Montréal, Laval, Longueuil, Brossard)

### Images actuellement utilisées

Chaque page de ville utilise **9 images** dans la section "Projets":

| #   | Image                | Fichier                         | Statut       | Utilisation                   |
| --- | -------------------- | ------------------------------- | ------------ | ----------------------------- |
| 1   | Projets résidentiels | `Projets résidentiels.PNG`      | ✅ Présente  | Image générique résidentielle |
| 2   | Projet extérieur     | `projet_exterieur.jpg`          | ✅ Présente  | Projets extérieurs            |
| 3   | Projets commerciaux  | `Projets commerciaux.PNG`       | ✅ Présente  | Image générique commerciale   |
| 4-9 | Avant/Après          | `IMG_5969.jpg` à `IMG_5974.jpg` | ✅ Présentes | 6 images avant/après          |

**Total:** 9 images par ville × 4 villes = **36 emplacements d'images**

### Évaluation de la qualité actuelle

**Points forts:**

- ✅ Toutes les images sont présentes
- ✅ Bonne variété avec images avant/après
- ✅ Images spécifiques aux projets réalisés

**Points à améliorer:**

- ⚠️ **Images génériques:** Les fichiers PNG (`Projets résidentiels.PNG`, `Projets commerciaux.PNG`) sont des images génériques qui pourraient être remplacées par des photos réelles
- ⚠️ **Diversité par ville:** Toutes les villes utilisent les mêmes images - idéalement, chaque ville devrait avoir des images spécifiques à ses projets locaux
- ⚠️ **Format PNG:** Les fichiers PNG sont plus lourds que JPG pour les photos - conversion recommandée

### Recommandations pour cette section

#### Priorité 1: Images spécifiques par ville (recommandé)

**Objectif:** Chaque ville devrait avoir au moins 2-3 images uniques de projets réalisés dans cette ville.

**Exemples:**

- **Montréal:** Photos de projets dans des quartiers spécifiques (Plateau, Verdun, etc.)
- **Laval:** Photos de projets résidentiels et commerciaux à Laval
- **Longueuil:** Photos de projets dans le secteur
- **Brossard:** Photos de projets dans les secteurs résidentiels et commerciaux

**Spécifications:**

- **Format:** JPG (qualité 85-90%)
- **Résolution:** 1920x1080 pixels minimum
- **Poids:** Maximum 400 KB par image
- **Contenu:** Photos de qualité professionnelle montrant le travail réalisé

#### Priorité 2: Remplacement des images génériques

Les fichiers suivants sont des images génériques qui pourraient être remplacées:

- `Projets résidentiels.PNG` → Photo réelle d'un projet résidentiel
- `Projets commerciaux.PNG` → Photo réelle d'un projet commercial

**Avantages:**

- Meilleure crédibilité
- Plus authentique
- Meilleure conversion

---

## 📊 Section 3: Analyse technique des images existantes

### Images dans le dossier `src/lelever-next/images/`

#### Images de projets (présentes):

- ✅ `peinture_residentielle.jpg`
- ✅ `projet_residentielle.jpg`
- ✅ `projet_residentielle_2.jpg`
- ✅ `projet_commercial.jpg`
- ✅ `projet_commercial_2.jpg`
- ✅ `projet_exterieur.jpg`
- ✅ `Projets résidentiels.PNG`
- ✅ `Projets commerciaux.PNG`

#### Images avant/après (présentes):

- ✅ `before_after/IMG_5969.jpg`
- ✅ `before_after/IMG_5970.jpg`
- ✅ `before_after/IMG_5971.jpg`
- ✅ `before_after/IMG_5972.jpg`
- ✅ `before_after/IMG_5973.jpg`
- ✅ `before_after/IMG_5974.jpg`
- ✅ `before_after/IMG_5975.jpg`
- ✅ `before_after/IMG_5976.jpg`
- ✅ `before_after/IMG_5977.jpg`
- ✅ `before_after/IMG_5978.jpg`
- ✅ `before_after/IMG_5982.jpg`
- ✅ `before_after/IMG_5984.jpg`

**Total d'images avant/après disponibles:** 12 images  
**Total d'images avant/après utilisées:** 6 images  
**Images disponibles mais non utilisées:** 6 images (IMG_5975, IMG_5976, IMG_5977, IMG_5978, IMG_5982, IMG_5984)

### Recommandation: Utiliser les images supplémentaires

**Action recommandée:** Intégrer les 6 images avant/après supplémentaires pour:

- Diversifier le contenu visuel
- Montrer plus de projets réalisés
- Améliorer l'expérience utilisateur

---

## 🎨 Section 4: Spécifications techniques pour nouvelles images

### Standards de qualité requis

#### Résolution et dimensions

- **Ratio d'aspect:** 16:9 (paysage/horizontal)
- **Résolution minimale:** 1920 × 1080 pixels
- **Résolution recommandée:** 2560 × 1440 pixels (pour écrans haute résolution)
- **Résolution maximale:** 3840 × 2160 pixels (4K - optionnel)

#### Format de fichier

- **Format principal:** JPG (JPEG)
- **Qualité:** 85-90% (bon équilibre qualité/poids)
- **Alternative:** WebP (meilleure compression, support moderne)

#### Poids des fichiers

- **Maximum recommandé:** 300-500 KB par image
- **Optimal:** 200-400 KB par image
- **Pour mobile:** Considérer des versions optimisées < 200 KB

#### Contenu photographique

**Éléments à inclure:**

- ✅ Travail de peinture de qualité professionnelle
- ✅ Espaces propres et bien éclairés
- ✅ Avant/après pour montrer la transformation
- ✅ Détails de finition (moulures, portes, cadres)
- ✅ Différents types de projets (résidentiel, commercial, industriel)

**Éléments à éviter:**

- ❌ Photos floues ou mal cadrées
- ❌ Espaces en désordre ou non finis
- ❌ Personnes identifiables sans autorisation
- ❌ Logos ou marques de concurrents
- ❌ Images avec filigranes ou copyrights

#### Optimisation pour le web

**Avant l'envoi, chaque image doit être:**

1. **Recadrée** au ratio 16:9
2. **Optimisée** pour le web (compression)
3. **Nommée** de manière descriptive (ex: `projet_residentiel_plateau_2024.jpg`)
4. **Vérifiée** pour la netteté et la qualité

---

## 📝 Section 5: Plan d'action recommandé

### Phase 1: Amélioration immédiate (optionnel)

**Actions:**

1. ✅ **Utiliser les images avant/après supplémentaires** (6 images disponibles)

   - Temps estimé: 1-2 heures
   - Impact: Diversité visuelle améliorée

2. ⚠️ **Convertir les PNG en JPG** (si possible)
   - `Projets résidentiels.PNG` → JPG optimisé
   - `Projets commerciaux.PNG` → JPG optimisé
   - Temps estimé: 30 minutes
   - Impact: Meilleures performances de chargement

### Phase 2: Amélioration à moyen terme (recommandé)

**Actions:**

1. 📸 **Photographier 2-3 projets réels par ville**

   - Montréal: 2-3 projets spécifiques
   - Laval: 2-3 projets spécifiques
   - Longueuil: 2-3 projets spécifiques
   - Brossard: 2-3 projets spécifiques
   - **Total:** 8-12 nouvelles images
   - **Temps estimé:** 1-2 jours de photographie + retouches

2. 📸 **Remplacer les images génériques**
   - Remplacer `Projets résidentiels.PNG` par une photo réelle
   - Remplacer `Projets commerciaux.PNG` par une photo réelle
   - **Temps estimé:** 1 jour de photographie

### Phase 3: Optimisation continue (long terme)

**Actions:**

1. 📸 **Créer une banque d'images de projets**

   - Photographier chaque nouveau projet terminé
   - Stocker dans un dossier organisé par type/ville
   - **Objectif:** 20-30 images de qualité par année

2. 📸 **Créer des séries avant/après**
   - Photographier systématiquement avant/après
   - Créer des montages côte à côte
   - **Objectif:** 10-15 séries avant/après par année

---

## ✅ Section 6: Checklist pour nouvelles photos

### Avant la prise de photo

- [ ] Vérifier l'autorisation du client pour photographier
- [ ] Préparer l'équipement (caméra, éclairage si nécessaire)
- [ ] Planifier les angles de vue (large, détail, avant/après)
- [ ] S'assurer que l'espace est propre et présentable

### Pendant la prise de photo

- [ ] Prendre des photos en format paysage (16:9)
- [ ] S'assurer d'une bonne luminosité
- [ ] Photographier les détails (moulures, finitions)
- [ ] Prendre des photos avant/après si possible
- [ ] Varier les angles (vue d'ensemble, détails, ambiance)

### Après la prise de photo

- [ ] Sélectionner les meilleures photos (netteté, composition)
- [ ] Recadrer au ratio 16:9
- [ ] Optimiser la compression (JPG 85-90%)
- [ ] Nommer les fichiers de manière descriptive
- [ ] Vérifier le poids des fichiers (< 500 KB)

---

## 📞 Section 7: Contact et questions

### Pour toute question concernant ce rapport:

**Points à clarifier:**

- Souhaitez-vous remplacer les images génériques par des photos réelles?
- Avez-vous des photos de projets récents à partager?
- Préférez-vous une approche progressive ou un remplacement complet?

### Prochaines étapes suggérées:

1. **Révision de ce rapport** par l'équipe
2. **Décision sur les priorités** (Phase 1, 2, ou 3)
3. **Planification de la photographie** si nécessaire
4. **Intégration des nouvelles images** dans le site

---

## 📊 Résumé des statistiques

| Catégorie                          | Nombre            | Statut                           |
| ---------------------------------- | ----------------- | -------------------------------- |
| **Images page d'accueil**          | 6                 | ✅ Toutes présentes              |
| **Images pages villes**            | 36 (9 × 4 villes) | ✅ Toutes présentes              |
| **Images avant/après utilisées**   | 6                 | ✅ Présentes                     |
| **Images avant/après disponibles** | 12                | ✅ 6 supplémentaires disponibles |
| **Images génériques à remplacer**  | 2                 | ⚠️ Recommandé                    |
| **Images spécifiques par ville**   | 0                 | ⚠️ Recommandé (8-12 images)      |

**Total d'images actuellement utilisées:** 42  
**Total d'images disponibles:** 48  
**Images manquantes critiques:** 0  
**Images à améliorer (recommandé):** 10-14

---

## 🎯 Conclusion

**État actuel:** ✅ **Toutes les images nécessaires sont présentes et fonctionnelles**

**Recommandation principale:**

- Le site fonctionne correctement avec les images actuelles
- Des améliorations sont possibles pour une meilleure expérience visuelle et une meilleure crédibilité
- L'ajout d'images spécifiques par ville et le remplacement des images génériques sont recommandés mais non critiques

**Priorité:** Les améliorations sont **optionnelles** et peuvent être faites progressivement selon vos priorités et disponibilités.

---

**Document préparé par:** Équipe de développement  
**Date:** 30 décembre 2025  
**Version:** 1.0
