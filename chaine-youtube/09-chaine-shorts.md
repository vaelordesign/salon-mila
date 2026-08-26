# Chaîne YouTube Shorts — stratégie de niche (26 août 2026)

Demande de Julien : une niche Shorts qui peut faire beaucoup de vues, produite avec
Higgsfield. Contrainte posée le même jour : **les crédits Higgsfield sont la ressource
rare** (~1200 crédits au moment d'écrire, plan Plus). La niche doit donc maximiser
les vues PAR CRÉDIT, pas juste les vues.

## Recommandation : « Anatomie d'une arnaque » en format Shorts

Réutiliser la niche déjà validée pour la chaîne longue (voir `00-niche.md`) en version
45–60 secondes : **une vraie arnaque racontée par Short, en 3 actes, en français.**

Pourquoi c'est le meilleur choix :

1. **La recherche est déjà faite.** L'EP01 (Shan Hanes / Heartland Tri-State) a déjà un
   dossier complet (`production/ep01/`), avec un `shorts.md` — les premiers Shorts
   sortent quasiment gratuitement du travail existant.
2. **True crime financier = rétention élevée** sur Shorts : une histoire avec une chute
   (« il a coulé sa propre banque »), pas un fait divers générique. C'est le format qui
   se termine — et le taux de complétion est LE signal de l'algorithme Shorts.
3. **Peu concurrentiel en français.** Le true crime classique est saturé; l'anatomie
   d'arnaques (pig butchering, fraude bancaire, Ponzi locaux) l'est beaucoup moins,
   surtout en français (Québec + France + Afrique francophone = grand bassin).
4. **Économe en crédits** (voir budget plus bas) : ce format vit très bien avec des
   images fixes cinématiques + 2-3 plans vidéo courts, pas besoin de 60 s de vidéo IA.
5. **Synergie totale** : les Shorts deviennent l'entonnoir de la future chaîne longue
   (même identité, `02-identite.md`), chaque Short pointe vers l'épisode complet.

### Format type (45–60 s)

- **0–3 s — hook** (la fin d'abord) : « Cet homme a volé 47 millions… à sa propre banque. »
- **3–40 s — mécanique** : comment l'arnaque fonctionne, étape par étape (c'est la
  valeur de la chaîne : on explique le MÉCANISME, pas juste le drame).
- **40–55 s — chute + leçon** : ce qui l'a trahi / comment ne pas se faire avoir.
- **CTA** : « L'histoire complète sur la chaîne. »

### Pipeline de production Higgsfield (budget par Short)

| Poste | Outil | Quantité | Coût estimé |
|---|---|---|---|
| Visuels cinématiques (9:16) | `generate_image_batch` (Soul/Recraft, ~1–1,5 crédit/image) | 8–10 images | ~10–15 crédits |
| Plans vidéo d'accroche | `generate_video` image-to-video, 5 s (générer UNE fois, hook seulement) | 1–2 clips | ~20–40 crédits |
| Narration française | `generate_audio` (TTS) ou la voix de Julien (0 crédit) | 60 s | 0–5 crédits |
| Montage (Ken Burns sur images, sous-titres, mix) | `sandbox_exec` (ffmpeg, GRATUIT) | 1 | 0 crédit |

**≈ 30–60 crédits par Short** → 20 à 40 Shorts avec le solde actuel. En mode
images-seules (zéro clip vidéo), ~15 crédits/Short → 80 Shorts possibles.

Règles d'économie :
- Le montage, les sous-titres, le format 9:16, la concat : TOUJOURS ffmpeg dans le
  sandbox (gratuit), jamais regénérer.
- Une image ratée se recadre/réutilise (`reframe`, `outpaint_image`) avant de regénérer.
- Les clips vidéo IA seulement pour le hook (les 3 premières secondes décident de tout);
  le reste en images + mouvement de caméra ffmpeg.
- `virality_predictor` sur le montage AVANT publication (analyse, pas de génération) —
  on itère sur le hook tant que le score de rétention est faible.

### Cadence et objectifs

- **3 Shorts/semaine** (lun-mer-ven), ~90–180 crédits/semaine.
- 30 premiers jours = calibration : on regarde le taux de complétion par variante de hook.
- Seuil de validation à 90 jours : des Shorts qui dépassent régulièrement 10 000 vues
  et un taux de complétion > 70 %. Ensuite seulement, lancer la chaîne longue (EP01 déjà prêt).

### Premiers épisodes (recherche déjà disponible ou rapide)

1. Shan Hanes — le PDG qui a coulé sa banque (3 Shorts tirés de `production/ep01/`)
2. Le « pig butchering » expliqué en 60 s (l'arnaque crypto la plus rentable au monde)
3. L'arnaque du faux conseiller bancaire (épidémie au Québec, très recherché)
4. Ponzi québécois classiques (Earl Jones) — fort ancrage local, peu couvert en Shorts
5. Les faux placements « garantis » sur Facebook Marketplace

### Alternatives considérées (et pourquoi non)

- **POV immersion historique** (« POV : tu es un paysan en 1350 ») : très viral, parfait
  pour Higgsfield, mais 100 % vidéo IA → 150–400 crédits/Short. Trop cher comme niche
  principale; possible en test ponctuel si un Short arnaque sur-performe.
- **Mini-docs luxe/fortunes perdues** : bon CPM, mais concurrence anglophone écrasante
  et pas de synergie avec le travail déjà fait.

## Prochaine étape concrète

Produire le Short pilote #1 (Shan Hanes, hook A vs hook B en 2 variantes de montage,
mêmes images) : ~40 crédits au total, et on a de quoi juger le format avant d'industrialiser.
