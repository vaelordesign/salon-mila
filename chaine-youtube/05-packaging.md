# Packaging : titres, miniatures, 30 premières secondes

Le packaging décide de qui clique. Le format décide de qui reste. Les deux sont séparés, et celui-ci est le plus rentable à travailler : une miniature refaite peut doubler les vues d'une vidéo déjà tournée.

## Titres

### Les cinq formules

| Formule | Gabarit | Exemple |
|---|---|---|
| **Le montant + l'absurdité** | `He Sent $47 Million to a Stranger. He Ran the Bank.` | Le chiffre choque, la deuxième phrase retourne la situation |
| **Le compte à rebours** | `She Had 90 Minutes to Stop the Wire. Nobody Called Back.` | Structure de tension immédiate |
| **Le détail minuscule** | `One Wrong Letter in an Email Cost Facebook $98 Million.` | Promet le signal dès le titre |
| **L'identité retournée** | `The Lawyer Recovering Her Stolen Crypto Was the Thief.` | Double révélation |
| **La question fermée** | `Why Did 400 Retirees Hand Gold Bars to a Stranger?` | Ouvre une boucle sans la refermer |

### Règles

- **Moins de 60 caractères** — au-delà, c'est tronqué sur mobile, qui est la majorité du trafic.
- **Le chiffre au début** quand il y en a un.
- **Aucune majuscule intégrale**, aucun point d'exclamation, aucune emoji. Le registre est documentaire ; le clickbait visible détruit la crédibilité qui *est* le produit.
- **Jamais de promesse que la vidéo ne tient pas.** Un titre qui sur-promet coûte plus en rétention qu'il ne rapporte en clics, et l'algorithme mesure les deux.
- **Ne pas nommer une personne non condamnée dans le titre.** Voir `08-conformite.md`.

## Miniatures

### Le système

Une grammaire unique, déclinée à chaque vidéo. L'objectif est qu'une miniature soit reconnaissable comme venant de la chaîne **avant** d'être lue.

**Structure fixe :**

- **Fond** : un document réel, désaturé, légèrement incliné.
- **L'élément rouge** : un seul par miniature — un cercle, un soulignement ou une flèche, tracé à la main, qui pointe le détail. **C'est la signature de la chaîne.** Rien d'autre n'est rouge.
- **Texte** : 3 à 5 mots maximum, en capitales, blanc sur bande sombre, en bas à gauche.
- **Jamais de visage.** Ni photo de personne, ni visage réagissant. Ça tranche avec tout l'environnement concurrentiel et ça évite les problèmes de droit à l'image.

**Test obligatoire** : réduire la miniature à 20 % et la regarder à un mètre. Si l'élément rouge ne saute pas aux yeux, elle est refaite.

### Ce qu'on ne fait pas

Pas de flèches multiples, pas de bordure fluo, pas de compteur « 47 000 000 $ » en 3D, pas de tête de mort. Ces codes fonctionnent ailleurs et détruiraient le registre documentaire, qui est le seul actif défendable de la chaîne.

## Les 30 premières secondes

C'est la partie de la vidéo qui mérite le plus de réécritures. La courbe de rétention se joue là.

**Gabarit :**

| Temps | Contenu | Interdit |
|---|---|---|
| 0:00–0:03 | Un document à l'écran. Pas de voix encore. | Logo, intro, musique montante |
| 0:03–0:15 | Le moment de la perte maximale, avec une date et un chiffre. | Contexte, présentation, « salut à tous » |
| 0:15–0:25 | Ce que la personne a perdu, concrètement. | Adjectifs. Les faits suffisent. |
| 0:25–0:40 | Le contrat : le signal, et à quelle minute il arrive. | Promettre plus que ce que la vidéo tient |

**Trois règles :**

1. **La première phrase contient un chiffre et une date.** Elle situe et elle choque en même temps.
2. **Aucune présentation de la chaîne.** Le spectateur qui reste 8 minutes ira voir qui parle. Celui qui part à 15 secondes n'en avait rien à faire.
3. **Le contrat est tenu.** Si le signal annoncé à la neuvième minute n'y est pas, la rétention de la *vidéo suivante* s'effondre. C'est cumulatif.

## Description et chapitres

**Description :**

```
[2 phrases : le résumé factuel, avec le montant et l'issue judiciaire]

Sources:
- [Communiqué / dossier, lien direct]
- [Deuxième source]

Chapitres:
0:00 [titre]
...

[Mention de conformité — voir 08-conformite.md]
```

Les sources en clair dans la description ne sont pas une formalité : c'est la preuve visible du travail de recherche, c'est ce qui fait la différence en cas de contestation, et c'est ce qui distingue la chaîne d'un compte de récits recyclés.

**Chapitres** : un par bloc de la structure. Le dernier s'appelle toujours `The Tell` — la constance d'un épisode à l'autre installe le format.

## Ce qu'on mesure

| Indicateur | Seuil | Ce qu'on corrige si c'est sous le seuil |
|---|---|---|
| CTR de la miniature | > 4 % | La miniature d'abord, le titre ensuite |
| Rétention à 30 s | > 70 % | Le cold open |
| Durée de visionnement moyenne | > 50 % | La montée — trop lente, ou boucles mal étagées |
| Rétention au signal | Pas de chute | Le contrat a sur-promis |

**On ne change qu'une variable à la fois**, sinon on n'apprend rien. Et on ne juge pas une vidéo avant 14 jours.
