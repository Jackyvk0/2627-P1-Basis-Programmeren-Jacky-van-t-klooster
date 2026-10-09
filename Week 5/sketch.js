//Wat is de huidige vraag?
let huidigeVraag = 0;

//De score van hoeveel goed gemaakt
let score = 0;

//Welk scherm zien we? "start", "vraag" of "einde"
let scherm = "start";

//Welke knop is aangeklikt? (-1 = nog niks gekozen)
let gekozen = -1;

//Alle knoppen
let keuzeKnoppen = [];
let startKnop;
let volgendeKnop;
let terugKnop;

//Alle vragen 
let alleVragen = [
  {
    vraag: "1. Hoeveel landen bestaan er",
    keuze: ["196", "213", "165", "201"],
    correct: 0
  },
  {
    vraag: "2. Wat is de meest ongezonde chips smaak?",
    keuze: ["Doritos Nacho Cheese", "Herr's Salt & Vinegar", "Pringles Sour Cream 'n Onion", "Doritos Cool American"],
    correct: 1
  },
  {
    vraag: "3. Wat is de grootste gemeenten in Nederland",
    keuze: ["Rotterdam", "Den Haag", "Utrecht", "Amsterdam"],
    correct: 3
  },
  {
    vraag: "4. Hoeveel dagen zitten er in een schrikkeljaar?",
    keuze: ["365", "364", "366", "376"],
    correct: 2
  },
  {
    vraag: "5. Wat is het meest verkocht Videogame",
    keuze: ["Tetris", "Wii Sports", "Grand Theft Auto V", "Minecraft"],
    correct: 3
  },
  {
    vraag: "6. Wat betekent de afkorting: HDMI",
    keuze: ["High-Determination Media Insane", "High-Definition Multimedia Interface", "Height-Description Mojang Intergrade", "Hinder-Debt Medium Interface"],
    correct: 1
  },
  {
    vraag: "7. Is het Verenigd Koninkrijk lid van de europese unie? ",
    keuze: ["Nee, Sinds 2020 niet meer", "Nee nooit geweest", "Ja, Altijd al geweest","Ja"],
    correct: 0
  },
  {
    vraag: "8. Hoe lang bestaat het europese unie al?",
    keuze: ["30 Jaar", "83 Jaar", "32 Jaar", "52 Jaar"],
    correct: 2
  },
  {
    vraag: "9. Hoeveel inwoners het kleinste dorp van Nederland?",
    keuze: ["100", "35", "70", "10"],
    correct: 1
  },
  {
    vraag: "10. Hoeveel liter water moet je per dag drinken?",
    keuze: ["500 mL", "5L", "2L", "3,5L"],
    correct: 3
  }
];

function setup() {
  createCanvas(800, 600);

  //De positie van alle keuze knoppen in een array
  let posX = [180, 380, 180, 380];
  let posY = [300, 300, 400, 400];

  //Alle keuze knoppen maken met een for loop
  for (let i = 0; i < 4; i++) {
    let knop = createButton("keuze");
    knop.position(posX[i], posY[i]);
    knop.size(200, 100);
    knop.mousePressed(function () {
      kiesAntwoord(i);
    });
    keuzeKnoppen.push(knop);
  }

  //Start knop
  startKnop = createButton("Start");
  startKnop.position(300, 300);
  startKnop.size(200, 100);
  startKnop.mousePressed(startQuiz);

  //Volgende knop
  volgendeKnop = createButton("Volgende");
  volgendeKnop.position(680, 540);
  volgendeKnop.size(100, 40);
  volgendeKnop.mousePressed(volgendeVraag);

  //Terug naar start menu knop
  terugKnop = createButton("Terug naar start menu");
  terugKnop.position(300, 400);
  terugKnop.size(200, 60);
  terugKnop.mousePressed(naarStartMenu);

  toonKnoppen();
}

function draw() {
  background("darkgreen");
  fill("white");
  textAlign(CENTER);

  //Start scherm
  if (scherm == "start") {
    textSize(50);
    text("De Grote Algemene Kennis Quiz", 400, 200);
  }

  //vragen
  if (scherm == "vraag") {
    textSize(30);
    text(alleVragen[huidigeVraag].vraag, 400, 200);

    //Goed of fout laten zien
    if (gekozen != -1) {
      textSize(50);
      if (gekozen == alleVragen[huidigeVraag].correct) {
        text("Goed!", 400, 270);
      } else {
        text("Fout!", 400, 270);
      }
    }
  }

  //eind scherm
  if (scherm == "einde") {
    textSize(50);
    text("Klaar!", 400, 150);
    textSize(40);
    text("Goed: " + score, 400, 230);
    text("Fout: " + (10 - score), 400, 290);
  }
}

//Een knop is aangeklikt
function kiesAntwoord(nummer) {
  //Alleen de eerste keer tellen
  if (gekozen != -1) {
    return;
  }

  gekozen = nummer;

  if (nummer == alleVragen[huidigeVraag].correct) {
    score++;
  }

  //Goede knop groen, foute knop rood
  keuzeKnoppen[alleVragen[huidigeVraag].correct].style("background-color", "green");

  if (nummer != alleVragen[huidigeVraag].correct) {
    keuzeKnoppen[nummer].style("background-color", "red");
  }

  volgendeKnop.show();
}

function startQuiz() {
  huidigeVraag = 0;
  score = 0;
  gekozen = -1;
  scherm = "vraag";
  zetKeuzes();
  toonKnoppen();
}

function volgendeVraag() {
  huidigeVraag++;
  gekozen = -1;

  if (huidigeVraag == 10) {
    scherm = "einde";
  } else {
    zetKeuzes();
  }
  toonKnoppen();
}

function naarStartMenu() {
  scherm = "start";
  toonKnoppen();
}

//De tekst van de knoppen aanpassen en de kleur resetten
function zetKeuzes() {
  for (let i = 0; i < 4; i++) {
    keuzeKnoppen[i].html(alleVragen[huidigeVraag].keuze[i]);
    keuzeKnoppen[i].style("background-color", "white");
  }
}

//Alleen de knoppen laten als het moet
function toonKnoppen() {
  startKnop.hide();
  volgendeKnop.hide();
  terugKnop.hide();
  for (let i = 0; i < 4; i++) {
    keuzeKnoppen[i].hide();
  }

  if (scherm == "start") {
    startKnop.show();
  }
  if (scherm == "vraag") {
    for (let i = 0; i < 4; i++) {
      keuzeKnoppen[i].show();
    }
  }
  if (scherm == "einde") {
    terugKnop.show();
  }
}