# Eschborn Essensbestellung Demo

App welche die Möglichkeiten von ExtJS demonstriert.

# Travis Status
[![Build Status](https://secure.travis-ci.org/marcojahn/EED.png)](https://travis-ci.org/marcojahn/EED)

# Dependency Status
[![Dependency Status](https://gemnasium.com/marcojahn/EED.png)](https://gemnasium.com/marcojahn/EED)

=======
# Run Application

Ein lokaler Webserver für statische Dateien (z. B. Apache) muss verfügbar sein.

## Environment Setup
1. [NodeJS](http://nodejs.org/ "NodeJS") installieren
    1. [NPM](https://npmjs.org/ "NPM") muss funktionieren
    2. node.exe muss im Path verfügbar sein
2. [MongoDB](http://www.mongodb.org/ "MongoDB") installieren
3. [GruntJS](http://gruntjs.com/ "GruntJS") CLI installieren:

        npm install -g grunt-cli
4. [WebStorm](http://www.jetbrains.com/webstorm/ "WebStorm") installieren

## Application Setup
1. Github-Projekt auschecken

        clone https://github.com/marcojahn/EED.git
1. Abhängigkeiten installieren:

        npm install
2. In das Verzeichnis `server/node/` wechseln und Abhängigkeiten installieren:

        npm install

## Anwendung ausführen
1. MongoDB starten
2. NodeJS starten (Verzeichnis: `server/node/`)

        node eed.js
    "Express app started on port 3000" zeigt, dass der NodeJS Server läuft.
3. Verzeichnis / in einem Webserver einbinden
4. In einem Browser [localhost/client](http://localhost/client) aufrufen.

## Dialog starten
1. In das Verzeichnis / wechseln und Skeleton-Anwendung entpacken:

        grunt dialog
1. Den Workspace initialisieren:

        grunt createworkspace
2. Die generierte `workspace.json` anpassen und anschließend die vorbereiteten Templates in WebStorm importieren:

        grunt loadtemplates
3. In einem Browser [localhost/dialog](http://localhost/dialog) aufrufen.

