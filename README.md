
1. Node Package Manager initialisieren
npm init -y

--> Damit dieser import-Befehl in Node.js funktioniert, muss im package.json die Zeile "type": in "module" geändert werden, andernfalls nutzt man das ältere const express = require('express'). 

2. npm install express
package.json (enthält jetzt Versions-Bereiche) wurde erweitert und eine neue Datei package-lock.json (enthält die exakte Versionsnummer, die auf unserem System läuft) wurde erstellt --> beide Dateien gehören ins Repository und die node_modules 

Der Ordner node_modules wird über die Datei .gitignore vom Git-Repository ausgeschlossen, da er riesig werden kann. 
npm install (oder kurz npm i) schaut in die dependenciesstellt alles lokal wieder her.


# hello Express 

## Semantic Versioning --> wenn wir eine Libary installieren, müssen wir schauen: Versionierung der Abhängigkeiten

  "dependencies": {
    "express": "^5.3.0"
  }

Versionsangabe mit drei Stellen xx.xx.xx --> Major.Minor.Patch
--> Major-Stelle wird bei inkompatiblen Änderungen der API (Breaking Changes) erhöht //mit API ist Funktionalität gemeint, nicht REST-API
--> Minor Stelle wird erhöht, wenn wir neue Funktionen einbauen, die abwärtskompatibel sind
--> Patch-Stelle wird erhöht bei abwärtskompatiblen Bug-Fixes

1.10.0 vs 1.9.0 => 1.10.0 ist die neuere Version, da es sich um Zahlenwerte und nicht um Dezimalbrüche handelt, ist die 10 größer als die 9.

Wenn wir etwas installieren, schreibt npm erstmal automatisch ein "^" vor die Version
--> ^5.3.0 => Minor und Patch können sich ändern, aber Major-Versionssprünge werden nicht automatisch installiert. Bei ^5.3.0 erlaubt npm Updates auf Versionen wie 5.4.0 oder 5.3.1, blockiert aber das Update auf 6.0.0, um Breaking Changes zu verhindern.

--> ~5.3.0. => nur Patch-Versionen dürfen sich ändern
--> < oder > 5.3.0. => Versionen jünger oder aläter als 5.3.0 
--> 5.3.* oder 5.* => Wildcards, eine beliebige Version innerhalb des Zahlenraums

3. .gitignore erstellen, node_modules einfügen
4. git init -> leeres GIT-repository erstellen
5. git add .
6. git commit -m "first commit"
7. git branch -M main
8. git remote add origin https://github.com/suelyn-dev/helloExpress.git
9. git push -u origin main

================================================

Damit wir nicht immer Server starten und beenden müssen, installieren wir ein weiteres package nodemon

1. npm install --save-dev nodemon

2. Das muss dann ins Skript eingetragen werden:

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js" <-- Das einfügen
  },

3. npm run dev --> damit wird der Server bei jeder gespeicherten Änderung neu gestartet