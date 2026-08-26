# FiliDerma — Refonte visuelle Higgsfield (26 août 2026)

Travail fait dans cette session : remplacement des deux photos génériques (libres de droits,
hors palette) par des images générées avec Higgsfield, calibrées sur la palette du site
(crème #f7f1ea / beige #e5d2bf / terracotta #b9805f), puis injection sur le site de test.

## Ce qui a changé

| Section Elementor | Avant | Après |
|---|---|---|
| Héros (`edd2345`) | `hero-clinique.jpg` — intérieur sombre gris/noir, style barbier, à contre-emploi | Salle de soin crème, fauteuil de traitement ivoire, lumière dorée, rideaux de lin (Recraft V4.1, palette de marque imposée) |
| Bande d'ambiance (`afe3c0d`) | `ambiance-soin.jpg` — flat-lay bleu-gris froid | Serviettes terracotta pliées, ombres de feuilles sur mur crème, sujet à droite (le texte de la citation reste lisible à gauche) (Soul Location, 21:9) |

Rien d'autre n'a été touché : textes, structure, animations, shortcodes du plugin,
photo de Dominique et avant/après restent identiques. Diff exact : 2 URLs.

## Les images

Hébergées sur le stockage permanent Higgsfield (JPEG optimisés pour le web) :

- Héros (1344×768, 159 Ko) :
  `https://d2ol7oe51mr4n9.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/85aeea92-be40-4744-9116-265a0b3e4c24.jpg`
- Ambiance (1920×810, 97 Ko) :
  `https://d2ol7oe51mr4n9.cloudfront.net/user_3HvsoWV0e9qS9iBycvCkMD45MSZ/751be240-8bbf-4407-beb4-0fc0b6977d1d.jpg`

`apercu-4-candidates-higgsfield.jpg` : planche des 4 candidates générées (2 héros, 2 ambiances).
Retenues : héros A (haut-gauche) et ambiance B (bas-droite). Les 2 autres restent
disponibles dans l'historique de générations Higgsfield si tu veux changer.

Coût total : ~4,5 crédits sur 1210 (2 × Recraft 1K à 1,25 + 2 × Soul Location à ~1).

Recommandé à terme : télécharger ces 2 JPEG et les committer dans
`filiderma-website/images/` (hero-clinique-v2.jpg, ambiance-soin-v2.jpg) pour que tout
vive au même endroit que les autres photos, puis re-pointer le JSON dessus.
(Impossible depuis cette session : le proxy réseau bloque les téléchargements.)

## Fichiers

- `filiderma-elementor-v2.json` — **le JSON canonique à jour** (compact, prêt pour
  `Templates > Saved Templates > Import` chez un client — l'import via l'interface
  rapatrie les images dans la médiathèque automatiquement).
- `sauvegarde-page577-avant-refonte-visuelle-26aout.json` — l'état exact de
  `_elementor_data` de la page 577 AVANT cette injection (pour revenir en arrière :
  ré-injecter ce fichier).

## État du site de test

Injecté le 26 août 2026 via l'API REST (`pages.update` sur la méta `_elementor_data`,
page 577 de https://charlesmartel2506-pyftz.wpcomstaging.com/). Vérifié en base :
les 2 nouvelles URLs présentes, aucune ancienne, JSON valide (16 sections).

⚠️ Rappel des leçons du 24 août (voir `filiderma-contenu.md` du dépôt filiderma-website) :
le cache de rendu ne se purge pas sur une écriture REST — le site public peut montrer
l'ancienne version pendant un moment (observé ~1 h, max théorique 24 h). Purge immédiate :
« Mettre à jour » dans l'éditeur Elementor, ou Elementor → Outils → Regenerate CSS & flush cache.

## Le couple JSON + zip (livrable client)

- **JSON** : `filiderma-elementor-v2.json` (ce dossier) — remplace la version précédente.
- **zip** : le plugin `filiderma-wordpress-plugin` **v1.1.1 inchangé** (sur le poste de
  Julien : `C:\Users\charl\OneDrive\Bureau\Typing\filiderma-wordpress-plugin\`). Cette
  refonte ne touche pas aux shortcodes, donc pas de nouvelle version du plugin.
