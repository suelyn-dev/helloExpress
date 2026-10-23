import express from "express";
/* Hier lädst du das Express-Framework in dein Skript. Damit importierst du die Funktionen, die Express bereitstellt, um HTTP-Anfragen zu verarbeiten.
(Hinweis: Damit dieser import-Befehl in Node.js funktioniert, muss in deiner package.json die Zeile "type": "module" eingetragen sein, andernfalls nutzt man das ältere const express = require('express')). */

const PORT = 8080
const app = express()
/* Hier wird die Express-Anwendung instanziiert (gestartet). Das Objekt app ist ab jetzt das Herzstück deiner Anwendung. Über app definierst du später Routen (z. B. was passiert, wenn jemand www.deineseite.de/ueber-uns aufruft). */

app.get("/", (req, res) => {
    res.json({model: "MAN"})
})


app.listen(PORT, () => console.log(`Superserver lauscht auf ${PORT}`))
/* Das ist der Befehl, der den Server tatsächlich aktiviert und startet:
• app.listen(PORT, ...): Node.js öffnet den Port 8080 und versetzt das Programm in eine Dauerschleife. Der Server läuft ab jetzt ununterbrochen und "lauscht", ob Anfragen aus dem Internet oder vom eigenen Computer eintreffen.
• () => console.log(...): Das ist eine sogenannte Callback-Funktion (eine Pfeilfunktion). Sie wird genau einmal automatisch ausgeführt, sobald der Server erfolgreich gestartet ist. Sie dient dir als visuelle Bestätigung im Terminal: Superserver lauscht auf 8080. */