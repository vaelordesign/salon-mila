# 🦝 CRITTER DIARIES — Le projet YouTube

**Le document unique du projet.** Tout ce qui concerne la chaîne est ici; à mettre à
jour à chaque épisode. (Créé le 26 août 2026, jour du lancement.)

---

## 1. La chaîne

| | |
|---|---|
| **Nom** | Critter Diaries |
| **Handle** | `@CritterDiaries` |
| **Description** | Tiny animals. Big drama. Every critter has a story — new episode Monday, Wednesday, Friday. 🦝 |
| **Concept** | Anthologie : des animaux ultra-réalistes qui vloguent leur vie comme des influenceurs. Chaque animal = une série. |
| **Langue** | Anglais (bassin de vues ~15× le français) |
| **Cadence** | 3 Shorts/semaine (lundi-mercredi-vendredi), publiés entre 17 h et 21 h (heure de l'Est) |
| **Avatar** | [Randy à la GoPro, 1024×1024](https://d8j0ntlcm91z4.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/hf_20260826_164813_954cb97a-b4b2-4592-997b-03335416028d.png) |

**Pourquoi cette niche** (validée par Julien le 26 août) : le format « créature qui
vlogue » est le contenu IA le plus poussé par les feeds depuis la vague Bigfoot/gorille
(juin 2025). Sujet compréhensible en une phrase, personnages récurrents = abonnés,
style GoPro/selfie qui pardonne les défauts de l'IA.

## 2. Les règles du format (exigences de Julien)

1. **Très bon hook** : la première phrase est un choc/conflit, face caméra, seconde 1.
   Bandeau « wait for the ending... » pour ouvrir la boucle.
2. **Une vraie histoire** : problème → quête avec obstacle → **payoff à la DERNIÈRE
   seconde**. Jamais une suite de gags sans fil conducteur — le viewer doit avoir une
   raison d'aller au bout.
3. **Cliffhanger sérialisé** : chaque fin est le hook de l'épisode suivant
   (« Part 2 tomorrow. ») — et on TIENT la promesse le lendemain.
4. 15–25 secondes. Sous-titres incrustés gros et lisibles (la majorité regarde sans son).

## 3. Le personnage canon — Randy (série 1)

- **Randy**, trash panda. Ton : indigné mais attachant. Univers : drame immobilier de
  ruelle (poubelles = condos), bouffe trouvée, survie urbaine.
- **Image de référence à réutiliser pour TOUS les clips** (rôle `start_image`) :
  job Higgsfield `39c6aaa5-13eb-44b9-9308-5fa9bd8efcb6`
  (réserve non utilisée : `3676b0ca-38fd-4bdd-8fc6-7380f660ea58`)
- Prochains personnages possibles (série 2+) : pigeon, écureuil, opossum, orignal.

## 4. Épisodes

### ✅ EP01 — « EVICTED » (publié le 26 août 2026)

- **Fichier** : [randy-ep01-evicted.mp4](https://d2ol7oe51mr4n9.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/d42b64c9-e25a-4bc7-b038-0a62fc9f29e0.mp4) — 22 s, 1080×1920
- **Histoire** : évincé de sa poubelle (couvercle barré) → house hunting (option 1
  occupée, option 2 parfaite : « smells like fried chicken, we're signing ») → première
  nuit → « ...WHY IS MY HOUSE MOVING? » → « Part 2 tomorrow. »
- **Titre** : `I got EVICTED from my trash can 🦝 (pt. 1)`
- **Description** : `Randy is house hunting. It does not go well. Part 2 tomorrow. #trashpanda #raccoon #vlog`
- **Commentaire épinglé** : `Where is the truck taking him? Wrong answers only.`
- Version française de travail (14 s, non publiée) : [lien](https://d2ol7oe51mr4n9.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/06be4485-bf87-42e6-a750-cebf284d94a1.jpg)
- Clips sources : `3a1bb471` (hook 6 s) · `20a93f7e` (visite 8 s) · `4c3c786b` (chute 8 s)
- **Lien YouTube** : _(à coller ici une fois récupéré)_

### 📋 Backlog (chaque fin = le hook du suivant)

- **EP02 — « My house is on the highway »** : Randy vlogue depuis le camion en route,
  entre panique et commentaire touristique. Fin : le camion bascule sa benne → noir.
- **EP03 — « I live at the dump now (house tour) »** : visite de « domaine » à la
  décharge, ton magnat de l'immobilier. Fin : un goéland lui vole son poulet.
- **EP04 — « Breaking back into my old alley »** : le grand retour, mission déjouer le
  couvercle barré. Fin : il réussit... la poubelle est vide.
- **EP05 — « Winter is coming »** : préparation dramatique de l'hiver québécois.

## 5. Checklist de publication (à chaque vidéo)

1. Visibilité : **Publique** (jamais « non répertoriée »)
2. **« Non, pas conçu pour les enfants »** ← LE réglage qui tue les vues si mal coché
3. « Afficher plus » → cocher **« Contenu modifié ou synthétique (IA) »** (obligatoire,
   n'affecte pas la distribution)
4. Titre + description collés AVANT de publier; pas de retouche pendant 24 h
5. Épingler le commentaire d'amorce après publication
6. Vidéo verticale < 3 min = **Short automatiquement** (ordi ou cell, peu importe)

Réglages de chaîne (faits une fois) : profil complet (avatar/bannière/description),
pays + langue, « pas conçue pour les enfants » au niveau chaîne, commentaires ouverts.

## 6. Pipeline de production (reproductible, ~45 crédits/épisode)

1. **Clips** : `generate_video_batch` — modèle **Kling 3.0** (`kling3_0`), mode `std`,
   `sound: on`, 9:16, dialogue anglais lip-sync écrit DANS le prompt,
   `start_image` = référence de Randy. ~10 crédits/5 s. 3 clips de 6-8 s par épisode.
2. **QA/timings** : sandbox → ffprobe + faster-whisper (l'anglais se transcrit
   parfaitement quand la voix est bonne = contrôle qualité gratuit).
3. **Montage** : ffmpeg (gratuit) — scale/crop 1080×1920, concat, sous-titres ASS
   (Montserrat 78, blanc contour noir 6 px, punchlines en jaune `\c&H00D7FF&`,
   MarginV 430, bandeau haut MarginV 240).
4. **Livraison** : `media_upload` → PUT depuis le sandbox → `media_confirm` → lien direct.
5. Optionnel : `virality_predictor` sur le montage avant publication.

**Pièges connus** : 2 clips dans un même batch → faux « Out of credits » (soumettre 1
par 1) · le serveur peut proposer un preset → re-soumettre avec `declined_preset_id` ·
la sortie du sandbox est plafonnée ~20K caractères (chunker les gros fichiers).

## 7. Budget crédits Higgsfield

- Solde au lancement : **~1130 crédits** (plan Plus)
- Coût par épisode : **~45 crédits** → **~24 épisodes d'avance** (= 8 semaines à 3/sem.)
- Dépensé à date : ~80 crédits (EP01 + version FR d'essai + personnage + avatar + analyse)
- Règles d'économie : max 2-3 générations vidéo par épisode; un clip raté se sauve au
  montage avant de regénérer; montage/sous-titres toujours ffmpeg (gratuit).

## 8. Attentes réalistes (à relire quand les vues sont basses)

- Un Short peut rester à 0-10 vues pendant **des heures, voire 2-3 jours** avant que
  l'algorithme le teste — surtout sur une chaîne neuve. **C'est normal.**
- Le déblocage arrive typiquement entre le **5e et le 10e Short** publié à cadence
  régulière — et les anciens remontent à ce moment-là.
- Ne jamais : supprimer/re-uploader, changer le titre dans les 24 h, paniquer à J+1.
- Bilan à **20 Shorts (~6 semaines)** : on garde, on ajuste le personnage, ou on pivote.
- TikTok en double distribution dès que le compte est connecté (publication directe via
  Higgsfield, `is_aigc: true` obligatoire).

## 9. Journal

| Date | Événement |
|---|---|
| 26 août 2026 | Niche choisie (vlog créature IA), personnage Randy créé, EP01 produit (FR puis EN avec arc narratif), chaîne nommée Critter Diaries, avatar généré, **EP01 publié sur YouTube** |
