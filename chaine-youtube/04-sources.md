# Où trouver la matière première

Toute la défendabilité de la chaîne repose sur ce document. Une vidéo dont les faits viennent d'un autre YouTuber ou d'un fil Reddit est indéfendable — juridiquement et vis-à-vis de la politique de monétisation. Une vidéo dont les faits viennent d'un mémoire de sentence est inattaquable.

## Les sources primaires

### Department of Justice

Le point d'entrée principal. Chaque bureau de procureur fédéral publie ses communiqués, et ils sont d'une richesse rare : noms, montants, dates, mécanique du stratagème, peine.

- **Communiqués nationaux** : `justice.gov/news`
- **Par bureau** : `justice.gov/usao-XX/pr` où `XX` est le district (`edtx`, `sdny`, `ks`, `ma`, `edmo`, `dc`…)
- **Recherche par thème** : les mots-clés qui rapportent le plus sont `pig butchering`, `elder fraud`, `business email compromise`, `tech support fraud`, `romance scam`, `money mule`, `timeshare`.

Les bureaux les plus productifs sur ces sujets : **SDNY**, **D. Mass**, **EDMO**, **D.C.**, **EDTX**, **CD Cal**.

### Securities and Exchange Commission

Pour tout ce qui est fraude à l'investissement, Ponzi, fraude affinitaire.

- **Communiqués** : `sec.gov/newsroom/press-releases`
- **Litigation releases** : `sec.gov/litigation/litreleases` — plus techniques, plus détaillés
- Les plaintes en PDF sont liées depuis chaque communiqué et contiennent la chronologie complète.

### Federal Trade Commission

Pour les arnaques de masse : fausses offres d'emploi, opportunités d'affaires, pyramides, faux services de récupération.

- **Actions** : `ftc.gov/legal-library/browse/cases-proceedings`
- **Communiqués** : `ftc.gov/news-events/news/press-releases`
- **Alertes consommateurs** : `consumer.ftc.gov/consumer-alerts` — utile pour les tendances et les statistiques, pas pour les récits individuels
- **Données de plaintes** : `ftc.gov/exploredata` — la source des chiffres agrégés

### FBI et IC3

- **Alertes publiques** : `ic3.gov/PSA` — signalent les stratagèmes émergents avant qu'ils arrivent en cour
- **Rapport annuel IC3** : les chiffres de référence sur les pertes par catégorie et par tranche d'âge
- **Communiqués des bureaux locaux** : `fbi.gov/contact-us/field-offices`

### Dossiers judiciaires — PACER

Quand le communiqué ne suffit pas.

- `pacer.uscourts.gov` — payant (0,10 $ la page, plafonné à 3,00 $ par document), facturation trimestrielle annulée sous 30 $
- **Le document à chercher est le mémoire de sentence** (*sentencing memorandum*). C'est là que se trouvent la chronologie détaillée, les échanges cités, et souvent les déclarations de victimes.
- `courtlistener.com` — alternative gratuite, couverture partielle mais très utile, et l'archive RECAP contient beaucoup de documents déjà payés par quelqu'un d'autre.

### Autres

| Source | Ce qu'on y trouve |
|---|---|
| `archive.org/web` | Le site de l'arnaque tel qu'il était en ligne. Souvent la meilleure pièce visuelle. |
| `cftc.gov/PressRoom` | Fraude sur matières premières et crypto, avertissements aux mules financières |
| `fincen.gov` | Alertes sur les typologies de blanchiment |
| Régulateurs d'État | Les procureurs généraux d'État publient des dossiers que le fédéral ne prend pas |
| Registres d'entreprises | Date d'immatriculation et adresse de la société-écran — le décalage est souvent le signal |
| IRS-CI | `irs.gov/compliance/criminal-investigation` — communiqués sur le volet financier |

## Méthode de vérification

**Règle : deux sources indépendantes pour tout fait qui nomme une personne.**

Le communiqué officiel compte pour une. La presse ne compte comme deuxième que si elle ne se contente pas de reprendre le communiqué — un article qui cite le dossier ou interroge une partie prenante, oui ; une dépêche qui paraphrase, non.

Trois vérifications systématiques avant l'écriture :

1. **La peine a-t-elle été confirmée ?** Un acte d'accusation n'est pas une condamnation. Un appel peut avoir renversé le jugement. Chercher le dossier le plus récent, pas le plus visible.
2. **Le montant est-il le bon ?** Les chiffres bougent entre l'accusation, le plaidoyer et la sentence. Retenir celui du document le plus tardif, et dire lequel.
3. **La victime a-t-elle été nommée publiquement ?** Si non, elle ne l'est pas dans la vidéo. Voir `08-conformite.md`.

## Le fichier de recherche

Un fichier par vidéo, structure imposée :

```
CHRONOLOGIE
2023-05-XX  Premier contact             [source: DOJ PR, §4]
2023-05-XX  Premier virement, 5 000 $   [source: sentencing memo p.12]
...

PERSONNES
Nom, âge, rôle, statut judiciaire       [source: ...]

MONTANTS
Total détourné / récupéré / restitution [source: ...]

LE SIGNAL
Quel moment, quel document le montre    [source: ...]

PIÈCES VISUELLES
Fichier, origine, droits
```

Un fait sans crochet de source ne passe pas à l'écriture. Cette règle est la seule chose qui empêche une erreur de devenir publique.
