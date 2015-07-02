# infovis data analysis

## Installation

```
$ npm install
```

## GRIPS-Logs analysieren

```
$ cat data/01.csv | ./logs eval
```

Nimmt Eingabe (GRIPS-Logs) von `stdin` entgegen, schreibt Ergebnisse nach übergebenem Ordner (hier `eval`).

## GRIPS nach Kursinformationen crawlen

```
$ ./crawl-categories-courses | eval/categories-courses.json
```

Ergebnis wird im `json`-format nach `stdout` geschrieben.

## Kurse Fakultäten zuordnen

```
$ cat eval/categories.courses.json | ./faculties-courses > eval/faculties-courses.json
```

Nimmt Eingabe (Ergebnis von `crawl-categories-courses`) von `stdin` entgegen, Ergebnis wird im `json`-format nach `stdout` geschrieben.
