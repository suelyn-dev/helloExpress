import express from "express";
/* Hier lädst du das Express-Framework in dein Skript. Damit importierst du die Funktionen, die Express bereitstellt, um HTTP-Anfragen zu verarbeiten.*/

import jrpgs from "./data/jrpgs.json" with {type:"json"}
/* jrpgs importiert */

const PORT = 8080
const app = express()
/* Hier wird die Express-Anwendung instanziiert (gestartet) --> über app definieren wir Routen (z. B. was passiert, wenn jemand www.deineseite.de/ueber-uns aufruft).*/

app.use(express.json())
/* express.json() ist die Middleware Funktion, die sich zwischen den Eingang einer Anfrage (Request) und die endgültige Antwort (Response) schaltet.
Jede Anfrage, die an deinen Server geschickt wird, wandert durch eine Kette von  Middlewares, bevor der Server die finale Seite oder Daten ausliefert.*/

app.use(logger) //app.use() schaltet die Middleware für alle Anfragen zwischen, noch bevor diese bei deinen Routen (app.get oder app.post) ankommt. 

app.get("/", (req, res) => {
    res.json({jrpgs})
})

app.post("/", (req, res) => {
    console.log(req.body.name);
    res.end()
})

function logger(req, res, next){
    console.log(`${req.url} ${req.method}`);
    next() //heißt einfach weiter
}
/* logger() --> (custom) Middleware Funktion */

app.listen(PORT, () => console.log(`Superserver lauscht auf ${PORT}`))
/* Das ist der Befehl, der den Server tatsächlich aktiviert und startet:
--> Node.js öffnet den Port 8080 und versetzt das Programm in eine Dauerschleife. Server wird bei jeder gepseicherten Änderung neu gestartet*/