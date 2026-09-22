//SpelersKleur
let playerRood = 1;
let playerBlauw = 2;
let round = 1;

//Bovenste rij
let squareTopLeftX = 180;
let squareTopLeftY = 180;
let squareTopLeftS = 90;
let squareTopLeftR = 10;
let squareTopLeftC = 0;

let squareTopMidX = 280;
let squareTopMidY = 180;
let squareTopMidS = 90;
let squareTopMidR = 10;

let squareTopRightX = 380;
let squareTopRightY = 180;
let squareTopRightS = 90;
let squareTopRightR = 10;

//Middelste rij
let squareMidLeftX = 180;
let squareMidLeftY = 280;
let squareMidLeftS = 90;
let squareMidLeftR = 10;

let squareMidMidX = 280;
let squareMidMidY = 280;
let squareMidMidS = 90;
let squareMidMidR = 10;

let squareMidRightX = 380;
let squareMidRightY = 280;
let squareMidRightS = 90;
let squareMidRightR = 10;

//Onderste rij
let squareBottomLeftX = 180;
let squareBottomLeftY = 380;
let squareBottomLeftS = 90;
let squareBottomLeftR = 10;

let squareBottomMidX = 280;
let squareBottomMidY = 380;
let squareBottomMidS = 90;
let squareBottomMidR = 10;

let squareBottomRightX = 380;
let squareBottomRightY = 380;
let squareBottomRightS = 90;
let squareBottomRightR = 10;


function setup() {
  createCanvas(650, 650);
}

function draw() {
  background(220);
  fill('white');
  textSize(32);
  strokeWeight(0);
 
  //rode en blauwe gedeeltes
  fill('red');
rect(0,0,330, 1000);
fill('blue');
rect(320,0,330, 1000);
 
//tekst Boter kaas en eieren
strokeWeight(5);
fill(50,50,50,100);
rect(130,50,400,80,100,);
 fill(255);
  textStyle(BOLDITALIC);
   text("Boter, Kaas en Eieren", 170, 100,);

// //Start Knop + tekst
// fill(0,0,0, 100);
//  rect(210,530,200,80,40,);
// fill(255);
// textStyle(BOLD);
// text ('Start', 280, 580);
// if (mouseIsPressed === true &&  mouseX > 210 && mouseX < 210 + 200 - 10 && 
//     mouseY > 530 && mouseY < 530 + 80 - 20) {
  
// }


//rand boter, kaas en eieren
strokeWeight(0);
fill('black');
  square (160,160, 330, 20);
  
  
  //3x3 knoppen hover
  //Top Left

  
  if (
    mouseX > squareTopLeftX && mouseX < squareTopLeftX + squareTopLeftS && 
    mouseY > squareTopLeftY && mouseY < squareTopLeftY + squareTopLeftS
  ) { if (
    squareTopLeftC === 0
  ) {
    fill(100);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  } else if (squareTopLeftC == 1) {
    fill (255, 0, 0);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  } else if (squareTopLeftC == 2) {
    fill (0, 0, 255);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  } else {
    fill (160);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  }
  }


  //Top Middle
   if (
    mouseX > squareTopMidX && mouseX < squareTopMidX + squareTopMidS && 
    mouseY > squareTopMidY && mouseY < squareTopMidY + squareTopMidS
  ) {
    fill(100);
    square (squareTopMidX,squareTopMidY,squareTopMidS,squareTopMidR);
  } else {
    fill (160);
    square (squareTopMidX,squareTopMidY,squareTopMidS,squareTopMidR);
  }


  //Top Right
  if (
    mouseX > squareTopRightX && mouseX < squareTopRightX + squareTopRightS && 
    mouseY > squareTopRightY && mouseY < squareTopRightY + squareTopRightS
  ) {
    fill(100);
    square (squareTopRightX,squareTopRightY,squareTopRightS,squareTopRightR);
  } else {
    fill (160);
    square (squareTopRightX,squareTopRightY,squareTopRightS,squareTopRightR);
  }

  
//Middle Left

 if (
    mouseX > squareMidLeftX && mouseX < squareMidLeftX + squareMidLeftS && 
    mouseY > squareMidLeftY && mouseY < squareMidLeftY + squareMidLeftS
  ) {
    fill(100);
    square (squareMidLeftX,squareMidLeftY,squareMidLeftS,squareMidLeftR);
  } else {
    fill (160);
    square (squareMidLeftX,squareMidLeftY,squareMidLeftS,squareMidLeftR);
  }
  

//Middle Mid

 if (
    mouseX > squareMidMidX && mouseX < squareMidMidX + squareMidMidS && 
    mouseY > squareMidMidY && mouseY < squareMidMidY + squareMidMidS
  ) {
    fill(100);
    square (squareMidMidX,squareMidMidY,squareMidMidS,squareMidMidR);
  } else {
    fill (160);
    square (squareMidMidX,squareMidMidY,squareMidMidS,squareMidMidR);
  }


  //Middle Right
  if (
    mouseX > squareMidRightX && mouseX < squareMidRightX + squareMidRightS && 
    mouseY > squareMidRightY && mouseY < squareMidRightY + squareMidRightS
  ) {
    fill(100);
    square (squareMidRightX,squareMidRightY,squareMidMidS,squareMidRightR);
  } else {
    fill (160);
    square (squareMidRightX,squareMidRightY,squareMidRightS,squareMidRightR);
  }


  //Bottom left
  if (
    mouseX > squareBottomLeftX && mouseX < squareBottomLeftX + squareBottomLeftS && 
    mouseY > squareBottomLeftY && mouseY < squareBottomLeftY + squareBottomLeftS
  ) {
    fill(100);
    square (squareBottomLeftX,squareBottomLeftY,squareBottomLeftS,squareBottomLeftR);
  } else {
    fill (160);
    square (squareBottomLeftX,squareBottomLeftY,squareBottomLeftS,squareBottomLeftR);
  }


  //Bottom middle
  if (
    mouseX > squareBottomMidX && mouseX < squareBottomMidX + squareBottomMidS && 
    mouseY > squareBottomMidY && mouseY < squareBottomMidY + squareBottomMidS
  ) {
    fill(100);
    square (squareBottomMidX,squareBottomMidY,squareBottomMidS,squareBottomMidR);
  } else {
    fill (160);
    square (squareBottomMidX,squareBottomMidY,squareBottomMidS,squareBottomMidR);
  }


  //Bottom right
   if (
    mouseX > squareBottomRightX && mouseX < squareBottomRightX + squareBottomRightS && 
    mouseY > squareBottomRightY && mouseY < squareBottomRightY + squareBottomRightS
  ) {
    fill(100);
    square (squareBottomRightX,squareBottomRightY,squareBottomRightS,squareBottomRightR);
  } else {
    fill (160);
    square (squareBottomRightX,squareBottomRightY,squareBottomRightS,squareBottomRightR);
  }



}

 
function mouseClicked() {

if (
    mouseX > squareTopLeftX && mouseX < squareTopLeftX + squareTopLeftS && 
    mouseY > squareTopLeftY && mouseY < squareTopLeftY + squareTopLeftS
  && squareTopLeftC === 0) {
    if (
      round === 1
    ) {
      squareTopLeftC = 1;
    }
    else
    {
      squareTopLeftC = 2;
    }
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  } else {
    fill (160);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  }

}