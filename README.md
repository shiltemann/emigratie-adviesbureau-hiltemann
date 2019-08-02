# Voor vontje

De `master` branch is de live website, maar je kunt zelf andere branches maken
om op te werken, zodra het klaar is kun je je eigen branch **mergen** naar de
master branch door een **pull request** te maken.

Nadat de pull request gemerged is, delete je je branch weer, en begin je volgende
keer weer met een nieuwe branch!

Je kunt zoveel branches hebben als je wilt! Dus als je aan 2 verschillende
updates wilt werken kun je ze in aparte branches doen, dan kun je de ene
makkelijk mergen ook al is de andere nog niet klaar enzo


## Nieuwe branch beginnen

Doe dit altijd als je wilt beginnen aan een nieuwe set veranderingen.

1. Open terminal
2. Ga naar goede directory (`cd` is `change directory`)
   ```bash
   $ cd emigratie-adviesbureau-hiltemann
   ```
3. Updaten de master branch
   ```bash
   $ git checkout master
   $ git pull
   ```
4. Maak een nieuwe branch, die kopie is van de master branch
   ```
   $ git checkout -b een-branch-naam
   ```

Nu kun je je aanpassingen maken, en met `git add`, `git commit`, `git push` eraan
werken totdat je er blij mee bent (zie stukje naar onderen)


## Local website preview

Om te kijken hoe je veranderingen eruit zien, kun je een local preview maken

1. Eerst altijd even zorgen dat je de nieuwste versie van de branch hebt
   ```
   $ git pull
   ```
2. Website preview starten
  ```
  $ jekyll serve
  ```

3. Je kunt nu niet meer andere commandos typen in de terminal, maar met rechtermuisknop
   op je terminal, kun je m splitsen, zodat je weer dingen kunt doen in andere terminal
   window

4. Webstie preview openen
  ```
  $ firefox localhost:4000
  ```
  (of `localhost:4000` in adresbalk van firefox typen)



### Preview stoppen

In terminal window waar je `jekyll serve` hebt gedaan (en dus niet meer kunt typen)
`CONTROL+C` typen om de preview te stoppen.


## Veranderingen bewaren

Zodra je iets gedaan hebt wat je wilt bewaren, moet je het committen. Dingen die je
gecommit hebt kun je niet meer perongeluk deleten, dus doe het vaak!

1. Kijk welke files er allemaal veranderd zijn
   ```
   $ git status
   ```
2. Voeg de files toe die je wilt bewaren (gebruik tab voor autocompletion
   ```
   $ git add <filenaam>
   ```

3. Veranderde files *committen*
   ```
   $ git commit -m "een beschrijving"
   ```
4. Veranderingen naar GitHub pushen
   ```
   $ git push
   ```

## Pull request maken

Als je klaar bent met je aanpassingen en het op de live site wil zetten, moet
je een **pull request** maken:

1. Ga naar https://github.com/shiltemann/emigratie-adviesbureau-hiltemann/compare
2. Bovenaan zie je 2 knopjes, `base: master` en `compare: master`
   - Verander `compare: master` naar je eigen branch naam
3. Klik op Groene knop `Create Pull Request`
4. In volgende scherm kun je een uitleg geven van wat je hebt gedaan enzo

Nu kan ik het zien, eventueel dingen voorstellen, en het *mergen*. Bij mergen
wordt de code uit je branch in de master branch neergezet (de master branch heeft
de live site)


## Pull request bekijken

Heeft iemand anders een pull request gemaakt en wil je kijken hoe het eruit ziet
voordat je merged?

1. Vind de branch naam van de pull request (in GitHub in browser)
   - Kijk bovenaan bij de pull request in github
   - Daar staat zoiets als `JeAwesomeZus wants to merge 42 commits into master from <branchnaam>`
   - Onthoud de `<branchnaam>`
2. Ga naar je terminal
   ```
   git pull
   git checkout <branchnaam van pull request>
   ```
3. Nu kun je met `jekyll serve` de locale preview maken

Je kunt nu ook gewoon weer dingen committen en pushen, en deze komen dan vanzelf bij de
pull request erbij.


Note: Als je hierna weer terug wilt naar een andere branch waar je aan aant werken was:

```
git checkout <branchnaam>
```


## Pull request mergen

Als er een pull request is en je wilt de veranderingen eruit live zetten:

1. Ga naar https://github.com/shiltemann/emigratie-adviesbureau-hiltemann/pulls
2. Kies de goede pull request uit lijst
   - Bij `files` tab in volgende scherm kun je nog eens bekijken wat er allemaal verandert is
3. Klik onderaan op groene knop `Merge Pull Request`
4. Doe een dansje

Nu kan de branch weer gedelete worden (kan in het scherm nadat je gemerged hebt).
De volgende keer dat je iets wilt veranderen maak je weer een helemaal nieuwe branch!



## Tips and Tricks

### Welke branches bestaan er?

`git branch -v`

die met het sterretje ervoor is je actieve branch


### Van branch wisselen

`git checkout <branchnaam>`


### Wat is er veranderd aan een file?

```
$ git diff <filenaam>
```

### File resetten

Wil je je veranderingen toch weggooien? en terug naar file zoals
ie was bij laatste commit?

```
$ git checkout <filenaam>
```

### Alles resetten

Wil je alle veranderingen in alle files resetten?

```
$ git reset --hard
```

### Merge conflicten

Als je een merge conflict hebt

1. Open de file waar het op gaat
2. Zoek naar de `>>>>>>` etc symbolen
   - Dit zijn de stukjes waar git niet weet wat ie moet doen
   - Bijvoorbeeld:
     ```
     blabla en hella quinoa
     <<<<<<< HEAD
     vonnie is lief
     =======
     vonnie is gek
     >>>>>>> branchnaam
     ```
3. Maak de file zoals je hem uiteindelijk wil hebben
   - (dus `vonnie is gek` in dit voorbeeld)
4. Voeg file toe met `git add`

5. Herhaal stap 1-4 op alle files met een conflict
6. Doe een `git commit -m "merged the conflict bitches!"` om het te committen


### Git pull werkt niet

Soms krijg je een bericht als `your changes in <file> would be overwritten by merge`
Dit komt als je uncommitted changes in files lokaal hebt, die in de git pull ook
zijn aangepast.

Nu kun je 2 dingen doen:
- Optie 1: Je lokale veanderingen zijn klaar en je wilt ze bewaren
  - `git add` en `git commit` de files
  - nu weer opnieuw de `git pull` doen
  - je krijgt nu een scherm in editor, dit gewoon opslaan en afsluiten `CTRL+O` en `CTRL+X`
- Optie 2: Je lokale veranderingen zijn not niet klaar en je weet niet zeker of je ze wel wilt houden
  - `git stash` (even je veranderingen opzijn zetten)
  - `git pull` (je branch updaten)
  - `git stash pop` (je veranderingen weer terugzetten)
