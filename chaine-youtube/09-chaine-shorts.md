# Chaîne YouTube Shorts — LA niche (v2, 26 août 2026)

Première proposition (« anatomie d'une arnaque » en Shorts) refusée par Julien le jour même.
Ses trois critères : (1) la meilleure niche en vues brutes, (2) un sujet qu'il comprend
même si Claude gère la production, (3) un contenu sur lequel on tombe naturellement
dans le feed. Contrainte inchangée : les crédits Higgsfield sont la ressource rare.

## La niche : le vlog d'une créature IA (personnage récurrent)

**Un animal/créature ultra-réaliste qui vlogue sa vie comme un influenceur**, caméra
selfie/GoPro à la patte. C'est LE format IA le plus poussé par les feeds depuis
mi-2025 (la vague « Bigfoot/gorille vlogueur », partie d'un TikTok Veo 3 en juin 2025,
devenue une catégorie à part entière en 2026) et il coche les trois critères :

1. **Vues brutes / feed** : format natif du feed — 8 à 20 secondes, hook visuel
   immédiat (une créature qui te parle face caméra), taux de complétion et de repartage
   énormes. C'est exactement le contenu que Shorts/TikTok distribuent à froid à des
   gens qui ne sont abonnés à rien.
2. **Sujet compréhensible en une phrase** : « un animal qui se filme comme un
   youtubeur ». Julien peut juger chaque épisode en 10 secondes, proposer des idées,
   valider les blagues — aucune recherche à comprendre.
3. **Un PERSONNAGE, pas des clips jetables** : contrairement à l'ASMR ou aux clips
   satisfaisants, un personnage récurrent construit des abonnés, des blagues
   récurrentes, une marque — la chaîne a une identité et survit aux modes.

Bonus production : le style selfie/GoPro **pardonne les imperfections de l'IA**
(caméra qui bouge, gros plan, flou de mouvement) — c'est le format le moins risqué
en vidéo générée.

### Le personnage (proposition, à valider par Julien)

Un **raton laveur québécois** qui vit sa vie de raton comme un vlogueur lifestyle :
il « déménage » dans une poubelle neuve, teste la poutine trouvée dans une ruelle,
survit à l'hiver, se plaint du déneigement. Différenciation forte : la vague
Bigfoot/gorille est anglophone; un animal iconique + humour québécois = zéro
concurrence directe dans le feed francophone, et le personnage est doublable en
anglais plus tard (outil `dubbing` de Higgsfield) pour une chaîne miroir EN si ça marche.

Alternatives de personnage si le raton ne plaît pas : un orignal, un castor, un
Bigfoot des Laurentides. Le principe reste identique.

### Format type (8–20 s — plus court = moins cher ET mieux distribué)

- 0–2 s : face caméra, phrase d'accroche (« Aujourd'hui je déménage. »)
- 2–15 s : 1 à 2 plans de la « mission », narration continue du personnage
- fin : chute sèche (pas de CTA parlé — la boucle doit repartir sans friction)

### Pipeline Higgsfield (budget par Short)

| Poste | Outil | Coût estimé |
|---|---|---|
| Référence personnage (UNE fois, réutilisée partout) | `generate_image` + workflow character-sheet | ~10 crédits une seule fois |
| 1–2 clips vidéo 5 s, 9:16, style selfie | `generate_video` (image-to-video depuis la référence) | ~30–60 crédits |
| Voix du personnage (français) | `generate_audio` TTS (ou voix de Julien pitchée, 0 crédit) | 0–5 crédits |
| Montage, sous-titres, boucle, mix | `sandbox_exec` / ffmpeg | 0 crédit |

**≈ 35–65 crédits par Short** → 18 à 30 Shorts avec le solde actuel (~1200 crédits).
Règles d'économie : jamais plus de 2 générations vidéo par Short; un clip raté se
sauve au montage avant de regénérer; `virality_predictor` (gratuit en crédits de
génération) sur chaque montage avant publication pour itérer le hook.

### Cadence et validation

- 1 personnage, **3 Shorts/semaine**, publiés Shorts + TikTok (outil `tiktok_publish`
  déjà connecté) — double distribution pour le même coût de production.
- Ce qui se mesure : complétion > 90 % (format court), repartages, et si un épisode
  sur-performe → décliner immédiatement en série (l'algorithme adore les suites).
- Décision à 20 Shorts (~6 semaines) : on garde, on ajuste le personnage, ou on pivote.

### Niche secondaire (machine à vues d'appoint, si Julien veut tester)

**ASMR IA « fruits de verre »** (découpe d'objets impossibles) : zéro langue, zéro
personnage, le contenu feed le plus pur — mais jetable, sans abonnés fidèles, et
dépendant d'une mode. 1 clip de 5–8 s en boucle ≈ 20–40 crédits. À utiliser comme
test A/B de distribution, pas comme chaîne principale.

### Pourquoi pas les niches « rentables » des listicles

Les listes 2026 poussent finance/make-money (RPM élevé) : c'est de la rentabilité par
vue, pas des vues — l'inverse du brief de Julien, et des sujets qu'il ne veut pas
gérer. Le RPM se réglera plus tard (le levier réel d'une chaîne personnage : marque,
sponsors, produits dérivés).

## Prochaine étape

Créer la fiche personnage du raton (≈10 crédits) + le Short pilote #1
(« Je déménage ») ≈ 50 crédits au total. Julien valide le personnage sur la fiche
AVANT toute génération vidéo.
