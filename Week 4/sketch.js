let cirkelX = [];
let cirkelY = [];
let cirkelMaten = [];
let cirkelKleuren = [];

let maxAantalCirkels = 50; 
let achtergrondKleur;

function setup() {
  createCanvas(800, 600);
  noFill();
  frameRate(30);

  // Kies een eerste achtergrondkleur
  achtergrondKleur = color(random(100, 200), random(100, 200), random(100, 200));
  background(achtergrondKleur);
}

function draw() {
  // Elke 3 seconden een nieuwe achtergrondkleur
  if (frameCount % 90 === 0) {
    achtergrondKleur = color(random(0, 255), random(0, 255), random(0, 255));
    background(achtergrondKleur);
  }

  //Voeg nieuve cirkel toe aan lijsten
  cirkelX.push(random(width));
  cirkelY.push(random(height));
  cirkelMaten.push(random(10, 100));
  cirkelKleuren.push(color(random(255), random(255), random(255)));

  //Haal cirkels weg alsze over de limiet zijn
  if (cirkelX.length > maxAantalCirkels) {
    cirkelX.shift();
    cirkelY.shift();
    cirkelMaten.shift();
    cirkelKleuren.shift();
  }

  //Teken de cirkels
  for (let index = 0; index < cirkelX.length; index++) {
    let xPositie = cirkelX[index];
    let yPositie = cirkelY[index];
    let grootte = cirkelMaten[index];
    let randKleur = cirkelKleuren[index];

    stroke(randKleur);
    ellipse(xPositie, yPositie, grootte);
  }
}
