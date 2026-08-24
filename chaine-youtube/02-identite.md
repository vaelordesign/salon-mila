# Identité

## Nom de la chaîne

**Proposition principale : `Paper Trail`.**

Trois raisons : ça évoque le document (qui est littéralement l'identité visuelle), l'enquête, et le fait de suivre l'argent. C'est court, prononçable, mémorisable, et ça ne se périme pas si le champ des sujets s'élargit.

Solutions de repli, par ordre de préférence :

| Nom | Ce qu'il apporte | Ce qu'il coûte |
|---|---|---|
| `The Tell` | Colle exactement au format (« le signal ») | Ambigu en anglais — évoque aussi le poker |
| `Too Good To Be True` | Immédiatement compris, très cliquable | Long, générique, difficile à défendre en marque |
| `The Setup` | Sonne bien, court | Trop vague hors contexte |

> **À vérifier par toi avant de renommer quoi que ce soit** : disponibilité de l'identifiant `@` sur YouTube, du `.com`, et absence d'antériorité de marque. Je ne peux pas vérifier ça de façon fiable, et se faire renommer de force après 40 vidéos coûte tout le référencement accumulé.

## L'identité visuelle : le mur d'enquête

**Principe : on ne montre que des documents.**

Pas de banque d'images, pas de plans de villes génériques au ralenti, pas de dramatisations générées par IA. Ces trois choses sont à la fois le signal de « contenu produit à la chaîne » et une exposition réglementaire inutile.

À la place :

| Élément | Source | Usage |
|---|---|---|
| Captures de messages | Reconstitution fidèle du texte cité dans les pièces | Cold open, montée |
| Pièces judiciaires | Actes d'accusation, mémoires de sentence, PACER | Preuve, bascule |
| Relevés bancaires | Reconstitués, montants réels, identité masquée | Montée |
| Captures du site mort | archive.org | La crédibilité fabriquée |
| Street View | L'adresse déclarée par l'entreprise fantôme | Souvent le signal lui-même |
| Profils professionnels | Captures publiques, visages floutés sauf condamnés | La fausse identité |

**Traitement** : effet Ken Burns lent sur les documents, surlignage progressif du passage qui compte, annotations manuscrites, barres de chronologie. Palette sobre — papier, encre, un seul accent rouge réservé au signal.

C'est le rare cas où le style **le moins cher à produire en solo** est **aussi** le plus différenciant **et** la preuve d'originalité exigée par la politique de monétisation. On ne s'en écarte pas pour faire joli.

## La voix : ElevenLabs

La narration est synthétique, et c'est parfaitement viable — à condition de comprendre ce que la règle vise réellement.

**La politique ne vise pas la narration synthétique.** Elle vise les *personas IA qui se présentent comme des experts délivrant des conseils* sur un sujet sensible : le faux « docteur » qui pose un diagnostic, l'animateur de balado qui donne des conseils de placement. YouTube est explicite : l'outil utilisé n'affecte pas l'éligibilité en soi.

Un narrateur documentaire qui rapporte des faits sourcés à des pièces judiciaires n'est pas cette chose-là. Les trois conditions qui garantissent qu'on reste du bon côté sont dans `08-conformite.md`, et elles ne sont pas négociables.

### Réglages

| Paramètre | Réglage | Pourquoi |
|---|---|---|
| Type de voix | Masculine ou féminine grave, débit posé, accent nord-américain neutre | Registre documentaire, pas registre publicitaire |
| Stabilité | 45–55 % | Trop haut = plat et robotique ; trop bas = intonations erratiques |
| Similarité | 75–85 % | Constance d'un épisode à l'autre — c'est ce qui fait la signature sonore |
| Style / exagération | Bas | L'emphase doit venir du texte, jamais de la voix |
| Vitesse | 0,95–1,0× | Légèrement sous la normale : les chiffres et les dates doivent atterrir |

### Écrire pour la synthèse

Les scripts doivent être écrits *pour être prononcés*, pas pour être lus :

- **Phrases courtes.** Une idée par phrase. La synthèse gère mal les subordonnées empilées.
- **Ponctuation de respiration.** Le point force une pause ; la virgule ne suffit pas.
- **Chiffres écrits en toutes lettres** quand la prononciation est ambiguë (`47.1 million` → `forty-seven point one million`).
- **Pauses balisées** avant chaque révélation. Un silence d'une seconde avant le montant fait plus d'effet que n'importe quelle inflexion.
- **Test obligatoire** : réécouter le passage du signal. S'il ne provoque rien à l'oreille, c'est le texte qu'il faut réécrire, pas les réglages.

**Le bénéfice réel** : le goulot d'étranglement redevient la recherche, pas l'enregistrement. Un lot de quatre scripts peut être sonorisé d'un coup, ce qui rend l'avance de publication possible.

## Avatar et bannière

- **Avatar** : un monogramme sur fond papier, très contrasté, lisible à 24 pixels. Pas de visage, pas de photo, pas d'illustration détaillée — l'avatar est vu en miniature 95 % du temps.
- **Bannière** : un fond de document avec une ligne surlignée. Le texte se limite au nom et à une phrase de positionnement — *« Real financial crimes, told from the inside. »*
- **Filigrane** : le monogramme, identique à l'avatar.
- **Bande-annonce de chaîne** : aucune, tant qu'il n'y a pas 10 vidéos. Une bande-annonce sur une chaîne vide coûte plus qu'elle ne rapporte.
