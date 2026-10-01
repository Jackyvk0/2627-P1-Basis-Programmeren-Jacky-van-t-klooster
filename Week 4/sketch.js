//Cirkels
let cirkelX = [];
let cirkelY = [];
let cirkelMaten = [];
let cirkelKleuren = [];

//Squares
let squareX = [];
let squareY = [];
let squareMaten = [];
let squareKleuren = [];

//Triangles
let triangleX = [];
let triangleY = [];
let triangleMaten = [];
let triangleKleuren = [];

//maximum aantal cirkels
let maxAantalCirkels = 10;
let maxAantalSquares = 10;
let maxAantalTriangles = 10;
let achtergrondKleur;

function setup() {
  createCanvas(800, 600);
  noFill();
  frameRate(20);
  

  //Kies de achtergrondkleur
  achtergrondKleur = color(random(100, 200), random(100, 200), random(100, 200));
  background(achtergrondKleur);
}

function draw() {

//Elke 3 seconden nieuwe achtergrondkleur
  if (frameCount % 60 === 0) {
    achtergrondKleur = color(random(0, 255), random(0, 255), random(0, 255));
    background(achtergrondKleur);
  }


//Voeg nieuwe cirkel toe aan lijst
  cirkelX.push(random(width));
  cirkelY.push(random(height));
  cirkelMaten.push(random(10, 100));
  cirkelKleuren.push(color(random(255), random(255), random(255)));


//Voeg nieuwe square toe aan lijst
  squareX.push(random(width));
  squareY.push(random(height));
  squareMaten.push(random(10, 100));
  squareKleuren.push(color(random(255), random(255), random(255)));


//Voeg nieuwe triangle toe aan lijst
  triangleX.push(random(width));
  triangleY.push(random(height));
  triangleMaten.push(random(10, 100));
  triangleKleuren.push(color(random(255), random(255), random(255)));


//Haal cirkels weg als 10 of meer zijn na de nieuwe achtergrondkleur
  if (cirkelX.length > maxAantalCirkels) {
    cirkelX.shift();
    cirkelY.shift();
    cirkelMaten.shift();
    cirkelKleuren.shift();
  }


//Haal squares weg als 10 of meer zijn na de nieuwe achtergrondkleur
  if (squareX.length > maxAantalSquares) {
    squareX.shift();
    squareY.shift();
    squareMaten.shift();
    squareKleuren.shift();
  }


//Haal triangles weg als 10 of meer zijn met de nieuwe achtergrondkleur
  if (triangleX.length > maxAantalTriangles) {
    triangleX.shift();
    triangleY.shift();
    triangleMaten.shift();
    triangleKleuren.shift();
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


//Teken de squares
  for (let index = 0; index < squareX.length; index++) {
    let xPositie = squareX[index];
    let yPositie = squareY[index];
    let grootte = squareMaten[index];
    let randKleur = squareKleuren[index];
    stroke(randKleur);
    rect(xPositie, yPositie, grootte, grootte);
}


//Teken de triangles
  for (let index = 0; index < triangleX.length; index++) {
    let xPositie = triangleX[index];
    let yPositie = triangleY[index];
    let grootte = triangleMaten[index];
    let randKleur = triangleKleuren[index];
    stroke(randKleur);
    triangle(xPositie, yPositie, xPositie + grootte, yPositie, xPositie + grootte / 2, yPositie - grootte);
  }


//Klik op backspace om de achtergrond te randomizen en de cirkels, squares en triangles te resetten
  if (keyIsDown(BACKSPACE)) {
    achtergrondKleur = color(random(0, 255), random(0, 255), random(0, 255));
    background(achtergrondKleur);
  }


//Klik op de 's' toets om een screenshot te maken van het canvas
  if (keyIsDown(83)) {
    saveCanvas('GeneratieveKunst', 'png');
  }

  //Als capslock ingedrukt is,stop de sketch en laat een bericht zien
    if (keyIsDown(20)) {
      noLoop();
      fill(0);
      textSize(32);
      textAlign(CENTER, CENTER);
      text('Capslock is actief. De Sketch is gepauseerd.', width / 2, height / 2);
    } else{
      loop();
    }

// Klik op 'g' om als gif van 5 seconden op te slaan

//  if (keyIsPressed(71)) {
//    saveGif('mySketch', 5);
//   }

}
