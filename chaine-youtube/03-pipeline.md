# Le pipeline de production

## Budget horaire par vidéo

| Étape | Temps | Ce qui s'y joue |
|---|---|---|
| 1. Sélection du sujet | 0,5 h | Le sujet doit avoir une source primaire **et** un signal identifiable |
| 2. Recherche | 3–5 h | C'est ici que vit l'originalité. On ne compresse pas. |
| 3. Écriture | 2–3 h | Le script est le produit. Tout le reste est de l'exécution. |
| 4. Narration ElevenLabs | 0,5 h | Génération, réécoute, reprises ponctuelles |
| 5. Collecte visuelle | 1–1,5 h | Captures, archive.org, Street View, reconstitutions |
| 6. Montage | 3–4 h | Ken Burns, surlignages, chronologies, sous-titres |
| 7. Packaging | 1 h | Miniature, titre, description, chapitres |
| **Total** | **11–15 h** | Soit deux bonnes journées, ou quatre demi-journées |

**C'est la contrainte réelle du projet.** Un long-format par semaine, c'est déjà 11 à 15 heures prises sur des semaines qui contiennent des clients. Le calendrier (`07-calendrier.md`) est construit là-dessus et pas sur un optimisme de départ.

## Étape 1 — Sélection du sujet

Un sujet n'entre en production que s'il coche **les trois** :

1. **Une source primaire consultable** — communiqué DOJ, plainte SEC ou FTC, dossier PACER, jugement. Un article de presse seul ne suffit pas : il sert à trouver le dossier, pas à le remplacer.
2. **Un signal identifiable** — un moment précis, montrable, où ça pouvait s'arrêter. Sans lui, il n'y a pas de vidéo, il n'y a qu'un fait divers.
3. **Une victime dont l'histoire est racontable** — assez de détails pour reconstituer une chronologie, assez d'anonymat pour ne blesser personne.

Si l'un des trois manque, le sujet retourne dans la réserve. Il n'est pas « adapté ».

## Étape 2 — Recherche

Ordre de travail, du plus fiable au moins fiable :

1. **Le communiqué officiel** (DOJ / SEC / FTC / FBI) — donne les noms, les montants, les dates, la peine.
2. **Le dossier judiciaire** — acte d'accusation et surtout **mémoire de sentence**, qui contient presque toujours la chronologie détaillée et parfois les déclarations de victimes. C'est la mine.
3. **La presse locale** — le détail humain que le dossier n'a pas : le métier, le quartier, ce que la personne voulait faire avec cet argent.
4. **archive.org** — le site de l'arnaque tel qu'il était. Souvent la meilleure pièce visuelle de toute la vidéo.
5. **Registres d'entreprises** — la société-écran, sa date d'immatriculation, son adresse.

**Livrable de l'étape** : un fichier de recherche par vidéo, avec chaque fait suivi de sa source. Un fait sans source ne passe pas à l'écriture. Voir `04-sources.md` pour les points d'entrée précis.

## Étape 3 — Écriture

Le script suit la structure en six blocs de `01-format.md`.

Trois contrôles avant de passer à la narration :

- **Contrôle de sourçage** : chaque affirmation factuelle du script pointe vers une ligne du fichier de recherche.
- **Contrôle de rythme** : lire le script à voix haute avec un chronomètre. Toute plage de plus de 12 secondes sans information nouvelle est réécrite.
- **Contrôle de posture** : chercher « you should », « make sure to », « always ». Chaque occurrence est une formulation de conseil à convertir en observation (`08-conformite.md`).

## Étape 4 — Narration

Réglages dans `02-identite.md`. Générer par blocs, pas d'un seul tenant : une reprise sur un bloc de 90 secondes coûte moins qu'une reprise sur 15 minutes.

Écouter en entier une fois, au casque, sans rien faire d'autre. C'est le seul moment où les erreurs de prononciation sur les noms propres et les montants se détectent.

## Étape 5 — Collecte visuelle

Un plan visuel par tranche de 8 à 12 secondes de narration, soit 70 à 100 éléments pour une vidéo de 15 minutes. Ça paraît énorme ; en pratique un même document sert 3 ou 4 plans avec des cadrages différents.

Nommer les fichiers par horodatage du script (`0312-releve-virement.png`) — ça fait gagner une heure au montage.

## Étape 6 — Montage

Ordre : narration posée en premier, puis les visuels calés dessus, puis les surlignages, puis la musique, puis les sous-titres.

- **Musique** : nappe discrète, jamais mélodique, coupée net dans les 10 secondes qui précèdent le signal. Le silence est l'outil de rétention le plus sous-utilisé.
- **Sous-titres** : incrustés. Une part importante de l'audience regarde sans son.
- **Les trois Shorts se découpent ici**, pendant que le projet est ouvert et les éléments à portée. Les faire plus tard coûte le double.

## Étape 7 — Packaging

Miniature, titre, description, chapitres — le système complet est dans `05-packaging.md`.

**Règle de séquence** : le titre et la miniature s'écrivent **avant** le script, et se révisent après. Si on ne sait pas quelle miniature promet la vidéo, c'est que le sujet n'est pas clair.

## Fabrication par lots

Une fois le format stabilisé (à partir de la vidéo 5 environ), regrouper par nature de tâche plutôt que par vidéo :

| Jour | Tâche | Pour |
|---|---|---|
| Lundi | Recherche | 2 vidéos |
| Mardi | Écriture | 2 vidéos |
| Mercredi | Narration + collecte | 2 vidéos |
| Jeudi / vendredi | Montage | 1 vidéo + 3 Shorts |

L'objectif est d'atteindre **deux vidéos d'avance**. Sans cette réserve, la première semaine chargée en clients casse la régularité de publication — et la régularité est ce que l'algorithme et l'audience mesurent réellement.
