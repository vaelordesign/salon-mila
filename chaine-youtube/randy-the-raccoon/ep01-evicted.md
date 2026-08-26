# Randy the Raccoon — EP01 « EVICTED » (26 août 2026)

Premier Short de la chaîne **Randy the Raccoon** (`@RandyTheRaccoon`).
Décisions de Julien ce jour-là : niche vlog de créature IA ✓, en ANGLAIS (bassin de vues
~15× le français), avec un vrai ARC NARRATIF (« il faut que la personne aille jusqu'au
bout ») et un très bon hook.

## Le Short final (22 s, 1080×1920, sous-titres incrustés, voix anglaise lip-sync)

**MP4 final** :
https://d2ol7oe51mr4n9.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/d42b64c9-e25a-4bc7-b038-0a62fc9f29e0.mp4

Structure narrative (problème → quête → payoff à la DERNIÈRE seconde) :
1. **Hook 0–6 s** — « I got EVICTED this morning. From MY trash can! Dude put a LOCK
   on the lid. » + bandeau haut « wait for the ending... » (boucle ouverte).
2. **Quête 6–14 s** — house hunting avec obstacle : « Option one: occupied. Option
   two... oh. OH. Open concept. Smells like fried chicken. We're SIGNING. »
3. **Payoff 14–22 s** — première nuit, tout va bien... le camion démarre :
   « ...WHY IS MY HOUSE MOVING? » + « Part 2 tomorrow. » (cliffhanger sérialisé).

Version française de travail (même hook, 2 actes, 14 s) :
https://d2ol7oe51mr4n9.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/06be4485-bf87-42e6-a750-cebf284d94a1.mp4
Analyse Virality Predictor (tableau de bord interactif) :
https://d8j0ntlcm91z4.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/hf_20260826_163619_e12895c5-e539-4d68-9563-d1da7f39f42b.html

## Kit de publication YouTube (prêt à coller)

- **Titre** : I got EVICTED from my trash can 🦝 (pt. 1)
- **Description** : Randy is house hunting. It does not go well. Part 2 tomorrow.
  #trashpanda #raccoon #vlog
- **Épingler en commentaire** : « Part 2 tomorrow. Where is the truck taking him? Wrong
  answers only. » (amorce les commentaires = signal d'engagement)

### ⚠️ Réglages à activer AVANT de publier (demande explicite de Julien : « pas 0 vue »)

À la chaîne (une fois) :
1. **YouTube Studio → Paramètres → Chaîne → Infos de base** : pays + langue anglais.
2. **Paramètres → Chaîne → Paramètres avancés** : « Non, cette chaîne n'est pas
   conçue pour les enfants » (le mode enfants TUE la distribution : pas de reco,
   pas d'abonnements visibles, pas de commentaires).
3. Profil complet : avatar (l'image de référence de Randy), bannière, description —
   une chaîne vide inspire zéro clic sur « s'abonner ».
4. **Paramètres → Communauté** : commentaires « Autoriser tous » (modération de base) —
   les commentaires sont un signal majeur pour les Shorts.

À chaque vidéo :
5. **Visibilité : Publique** (jamais « non répertoriée » — zéro feed).
6. **Public : « Non, pas conçu pour les enfants »** (le réglage n°1 qui bloque les vues).
7. **Contenu modifié / IA : OUI, cocher « contenu modifié ou synthétique »** — obligatoire
   pour du contenu généré par IA. Ça n'affecte PAS la distribution; se faire prendre à
   ne pas le déclarer, oui.
8. Pas de restriction d'âge, pas de « première » (premiere), pas de date planifiée pour
   le premier — publier direct à une heure de fort trafic (17 h-21 h heure de l'Est).
9. Titre + description AVANT publication (pas de retouche dans les 24 premières heures).
10. Langue de la vidéo : anglais. Sous-titres : déjà incrustés, rien à téléverser.
11. Ne PAS mettre #shorts partout — le format 9:16 < 3 min suffit à classer en Short.

Diagnostic « 0 vue » : 99 % du temps c'est le réglage « conçu pour les enfants » ou une
chaîne toute neuve qui n'a publié qu'UNE vidéo. L'algorithme teste chaque Short sur un
petit échantillon — il faut 5-10 Shorts publiés à cadence régulière avant de juger.

TikTok : publication directe possible depuis Higgsfield (`tiktok_publish`) dès que le
compte est connecté — divulgation IA (`is_aigc: true`) obligatoire là aussi.

## Le personnage (canon)

- **Nom** : Randy. Espèce : trash panda. Ton : indigné mais attachant, drama immobilier.
- Image de référence canonique (rôle `start_image` de TOUS les clips) :
  job Higgsfield `39c6aaa5-13eb-44b9-9308-5fa9bd8efcb6` (réserve : `3676b0ca`).

## Pipeline reproductible (coût réel de cet épisode)

1. Référence personnage : Recraft V4.1, 9:16 — 1,25 crédit (une fois, réutilisée)
2. Clips : Kling 3.0 (`kling3_0`) std, `sound: on`, dialogue anglais lip-sync dans le
   prompt, `start_image` = référence. 6 s + 8 s + 8 s ≈ 44 crédits.
   (Piège : soumettre 2 clips dans un même batch peut déclencher un faux « Out of
   credits » — soumettre 1 par 1. Piège 2 : le serveur peut proposer un preset à la
   place — re-soumettre avec `declined_preset_id`.)
3. QA/timings : sandbox → faster-whisper (l'anglais se transcrit parfaitement = preuve
   que la voix est claire; le français IA se transcrivait mal)
4. Montage : ffmpeg — 1080×1920, concat 3 clips, sous-titres ASS Montserrat 78 blanc
   contour 6 px + accents jaunes + bandeau haut, x264 crf 19
5. Upload : `media_upload` → PUT → `media_confirm`

**Coût total EP01 : ~77 crédits** (dont ~14 pour la version FR de travail et ~10
d'analyse). Épisodes suivants : **~45 crédits** (personnage déjà payé, pas de doublon FR).
Solde après production : 1132,76 crédits ≈ **24 épisodes d'avance**.

## Backlog (chaque fin = le hook du suivant)

- EP02 « My house is on the highway » — il vlogue depuis le camion en route
- EP03 « I live at the dump now (tour) » — visite « domaine » de la décharge
- EP04 « Breaking back into my old alley » — le retour, couvercle barré à déjouer
- EP05 « Winter is coming » — préparation dramatique
