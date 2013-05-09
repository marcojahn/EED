# Eschborn Essensbestellung Demo

App welche die Möglichkeiten von ExtJS demonstriert.

# Travis Status
[![Build Status](https://secure.travis-ci.org/marcojahn/EED.png)](https://travis-ci.org/marcojahn/EED)

#Run Application

Ein lokaler Webserver für statische Dateien (z. B. Apache) muss verfügbar sein.

## Environment Setup
1. [NodeJS](http://nodejs.org/ "NodeJS") installieren
    1. NPM muss funktionieren
    2. node.exe muss im Path verfügbar sein
2. [MongoDB](http://www.mongodb.org/ "MongoDB") installieren

## Application Setup
1. Github-Projekt in den Webserver auschecken.
2. In das Verzeichnis `server/node/` wechseln und Abhängigkeiten installieren:

        npm install

## Anwendung ausführen
1. MongoDB starten
2. NodeJS starten (Verzeichnis: `server/node/`)

        node eed.js
    "Express app started on port 3000" zeigt, dass der NodeJS Server läuft.
3. Verzeichnis / in einem Webserver einbinden
4. In einem Browser [localhost/client](http://localhost/client) aufrufen.