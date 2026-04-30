# 02 — Pages à Supprimer + Redirections 301

> **RÈGLE:** Toute URL supprimée doit avoir une redirection 301 vers la page la plus pertinente.  
> Ne jamais laisser de 404 sur une URL qui a existé.

---

## URLS À SUPPRIMER (demandées explicitement)

Ces URLs n'auront AUCUNE page dans le nouveau site. Implémenter une redirect 301.

### Pages Commerciales
| URL à supprimer | Redirect 301 vers | Raison |
|---|---|---|
| `/commerciale/intérieure` | `/services/peinture-commerciale` | Page fusionnée |
| `/commerciale/extérieure` | `/services/peinture-commerciale` | Page fusionnée |
| `/commerciale/montréal` | `/secteurs/montreal` | Redondant |
| `/commerciale/laval` | `/secteurs/laval` | Redondant |
| `/commerciale/longueuil` | `/secteurs/longueuil` | Redondant |
| `/commerciale/brossard` | `/secteurs/rive-sud` | Redondant |
| `/commerciale/intérieure/montréal` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/intérieure/laval` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/intérieure/longueil` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/intérieure/brossard` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/extérieure/montréal` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/extérieure/laval` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/extérieure/longueil` | `/services/peinture-commerciale` | Trop granulaire |
| `/commerciale/extérieure/brossard` | `/services/peinture-commerciale` | Trop granulaire |

### Pages Résidentielles
| URL à supprimer | Redirect 301 vers | Raison |
|---|---|---|
| `/résidentiel/intérieure` | `/services/peinture-residentielle` | Page fusionnée |
| `/résidentiel/extérieure` | `/services/peinture-residentielle` | Page fusionnée |
| `/résidentiel/montréal` | `/secteurs/montreal` | Redondant |
| `/résidentiel/laval` | `/secteurs/laval` | Redondant |
| `/résidentiel/longueuil` | `/secteurs/longueuil` | Redondant |
| `/résidentiel/brossard` | `/secteurs/rive-sud` | Redondant |
| `/résidentiel/intérieure/montréal` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/intérieure/laval` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/intérieure/longueil` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/intérieure/brossard` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/extérieure/montréal` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/extérieure/laval` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/extérieure/longueil` | `/services/peinture-residentielle` | Trop granulaire |
| `/résidentiel/extérieure/brossard` | `/services/peinture-residentielle` | Trop granulaire |

### Pages Industrielles
| URL à supprimer | Redirect 301 vers | Raison |
|---|---|---|
| `/industriel/montréal` | `/services/peinture-industrielle` | Redondant |
| `/industriel/laval` | `/services/peinture-industrielle` | Redondant |
| `/industriel/longueuil` | `/services/peinture-industrielle` | Redondant |
| `/industriel/brossard` | `/services/peinture-industrielle` | Redondant |

### Pages Intérieure par ville
| URL à supprimer | Redirect 301 vers | Raison |
|---|---|---|
| `/intérieure/laval` | `/secteurs/laval` | Redondant |
| `/intérieure/longueuil` | `/secteurs/longueuil` | Redondant |
| `/intérieure/brossard` | `/secteurs/rive-sud` | Redondant |

### Pages Extérieure par ville
| URL à supprimer | Redirect 301 vers | Raison |
|---|---|---|
| `/extérieure/laval` | `/secteurs/laval` | Redondant |
| `/extérieure/longueuil` | `/secteurs/longueuil` | Redondant |
| `/extérieure/brossard` | `/secteurs/rive-sud` | Redondant |

### Ville Brossard (remplacée par Rive-Sud)
| URL à supprimer | Redirect 301 vers | Raison |
|---|---|---|
| `/brossard` | `/secteurs/rive-sud` | Brossard devient Rive-Sud |

---

## ROUTES ACTUELLES DANS APP.JSX À RENOMMER

Ces routes existent dans le code et doivent être renommées + redirect 301 ajoutée.

| URL actuelle | Nouvelle URL | Composant | Action dans App.jsx |
|---|---|---|---|
| `/secteurs-desservis` | `/secteurs` | `SecteursDesservisPage` | Changer route + redirect `/secteurs-desservis` → `/secteurs` |
| `/secteurs-desservis/montreal` | `/secteurs/montreal` | `MontrealCityPage` | Changer route + redirect |
| `/secteurs-desservis/laval` | `/secteurs/laval` | `LavalCityPage` | Changer route + redirect |
| `/secteurs-desservis/longueuil` | `/secteurs/longueuil` | `LongueuilCityPage` | Changer route + redirect |
| `/secteurs-desservis/brossard` | `/secteurs/rive-sud` | `BrossardCityPage` | Supprimer page + redirect vers `/secteurs/rive-sud` |
| `/avis` | `/avis-clients` | `AvisPage` | Changer route + redirect `/avis` → `/avis-clients` |
| `/soumission` | `/contact` | `SoumissionPage` | Unifier sous ContactPage + redirect |
| `/politiques/confidentialite` | `/politique-de-confidentialite` | `PrivacyPolicyPage` | Changer route + redirect |
| `/politiques/termes-conditions` | `/mentions-legales` | `ThermOfUse` | Changer route + redirect |

---

## ROUTES DYNAMIQUES À SUPPRIMER (App.jsx)

Les routes dynamiques suivantes génèrent des pages à trop hauts axes (service × sous-service × ville) qui ne font plus partie du nouveau sitemap.

| Pattern dynamique | Pages générées | Action |
|---|---|---|
| `/services/:serviceSlug/:param2/:param3` (SmartServiceRouter) | ~16 URLs (ex: `/services/peinture-commerciale/interieure/montreal`) | Supprimer le pattern ET les pages générées. Redirect chacune vers le service L2 correspondant. |
| `/services/:serviceSlug/:subServiceSlug` (SousServicePage) | 4 URLs (commerciale/intérieure, commerciale/extérieure, résidentielle/intérieure, résidentielle/extérieure) | Supprimer. Redirect vers service parent. |
| `/services/:serviceSlug/:citySlug` (ServiceQuartierPage) | ~20 URLs (ex: `/services/peinture-interieure/montreal`) | Supprimer. Redirect vers `/secteurs/[ville]`. |

> ⚠️ **EXCEPTION:** Les routes dynamiques de type `/services/peinture-interieure/armoires-de-cuisine`, `/services/peinture-residentielle/condo`, et `/services/peinture-residentielle/appartement` sont des L3 à CONSERVER/CRÉER. S'assurer que le pattern dynamique restant les inclut correctement.

---

## COMPOSANTS À SUPPRIMER OU ARCHIVER

| Composant | Fichier | Action |
|---|---|---|
| `BrossardCityPage` | `src/lelever-next/pages/BrossardCityPage.jsx` | Supprimer (contenu fusionné dans future page Rive-Sud) |
| `SousServicePage` | `src/lelever-next/services-pages/sous_service/SousServicePage.jsx` | Vérifier si réutilisable pour L3 — sinon supprimer |
| `SousServiceVillePage` | `src/lelever-next/services-pages/sous_service_ville/SousServiceVillePage.jsx` | Supprimer |
| `ServiceQuartierPage` | `src/lelever-next/services-pages/service_ville/ServiceQuartierPage.jsx` | Supprimer |
| `ServiceQuartierSecteurPage` | `src/lelever-next/services-pages/service_quartier/ServiceQuartierSecteurPage.jsx` | Supprimer |
| `SmartServiceRouter` | `src/lelever-next/services-pages/SmartServiceRouter.jsx` | Supprimer |
| `SoumissionPage` | `src/pages/SoumissionPage.jsx` | Supprimer (fusionnée dans ContactPage) |

---

## IMPLÉMENTATION DES REDIRECTS 301 (dans App.jsx)

Ajouter ces `<Navigate>` dans App.jsx pour les anciennes URLs:

```jsx
// Anciennes URLs secteurs
<Route path="/secteurs-desservis" element={<Navigate to="/secteurs" replace />} />
<Route path="/secteurs-desservis/montreal" element={<Navigate to="/secteurs/montreal" replace />} />
<Route path="/secteurs-desservis/laval" element={<Navigate to="/secteurs/laval" replace />} />
<Route path="/secteurs-desservis/longueuil" element={<Navigate to="/secteurs/longueuil" replace />} />
<Route path="/secteurs-desservis/brossard" element={<Navigate to="/secteurs/rive-sud" replace />} />

// Anciennes URLs légales
<Route path="/politiques/confidentialite" element={<Navigate to="/politique-de-confidentialite" replace />} />
<Route path="/politiques/termes-conditions" element={<Navigate to="/mentions-legales" replace />} />

// Autres
<Route path="/avis" element={<Navigate to="/avis-clients" replace />} />
<Route path="/soumission" element={<Navigate to="/contact" replace />} />
<Route path="/brossard" element={<Navigate to="/secteurs/rive-sud" replace />} />
```
