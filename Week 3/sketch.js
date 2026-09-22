// //SpelersKleur
// let playerRood = 1;
// let playerBlauw = 2;
// let round = 1;

//Bovenste rij kleur
let colorSquareTopLeft = 'darkgrey'
let hovercolorSquareTopLeft = 'grey'

let colorSquareTopMid = 'darkgrey'
let hovercolorSquareTopMid = 'grey'

let colorSquareTopRight = 'darkgrey'
let hovercolorSquareTopRight = 'grey'


//Bovenste rij positie
let squareTopLeftX = 180;
let squareTopLeftY = 180;
let squareTopLeftS = 90;
let squareTopLeftR = 10;
let squareTopLeftC = 0;

let squareTopMidX = 280;
let squareTopMidY = 180;
let squareTopMidS = 90;
let squareTopMidR = 10;
let squareTopMidC = 0;

let squareTopRightX = 380;
let squareTopRightY = 180;
let squareTopRightS = 90;
let squareTopRightR = 10;
let squareTopRightC = 0;

//Middelste rij kleur

let colorSquareMidLeft = 'darkgrey'
let hovercolorSquareMidLeft = 'grey'

let colorSquareMidMid = 'darkgrey'
let hovercolorSquareMidMid = 'grey'

let colorSquareMidRight = 'darkgrey'
let hovercolorSquareMidRight = 'grey'

//Middelste rij positie
let squareMidLeftX = 180;
let squareMidLeftY = 280;
let squareMidLeftS = 90;
let squareMidLeftR = 10;
let squareMidLeftC = 0;

let squareMidMidX = 280;
let squareMidMidY = 280;
let squareMidMidS = 90;
let squareMidMidR = 10;
let squareMidMidC = 0;

let squareMidRightX = 380;
let squareMidRightY = 280;
let squareMidRightS = 90;
let squareMidRightR = 10;
let squareMidRightC = 0;

//Onderste rij kleur

let colorSquareBottomLeft = 'darkgrey'
let hovercolorSquareBottomLeft = 'grey'

let colorSquareBottomMid = 'darkgrey'
let hovercolorSquareBottomMid = 'grey'

let colorSquareBottomRight = 'darkgrey'
let hovercolorSquareBottomRight = 'grey'

//Onderste rij positie
let squareBottomLeftX = 180;
let squareBottomLeftY = 380;
let squareBottomLeftS = 90;
let squareBottomLeftR = 10;
let squareBottomLeftC = 0;

let squareBottomMidX = 280;
let squareBottomMidY = 380;
let squareBottomMidS = 90;
let squareBottomMidR = 10;
let squareBottomMidC = 0;

let squareBottomRightX = 380;
let squareBottomRightY = 380;
let squareBottomRightS = 90;
let squareBottomRightR = 10;
let squareBottomRightC = 0;


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

 //start text
// fill(50,50,50,100);
// rect(210,520,200,80,100,);
//  fill(255);
//   textStyle(BOLD);
//    text("Start", 280, 570,);


//rand boter, kaas en eieren
strokeWeight(0);
fill('black');
  square (160,160, 330, 20);
  
  
  //3x3 knoppen hover
  //Top Left

  if (
    mouseX > squareTopLeftX && mouseX < squareTopLeftX + squareTopLeftS && 
    mouseY > squareTopLeftY && mouseY < squareTopLeftY + squareTopLeftS
  ) {
    fill(hovercolorSquareTopLeft);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  } else {
    fill (colorSquareTopLeft);
    square (squareTopLeftX,squareTopLeftY,squareTopLeftS,squareTopLeftR);
  }



  //Top Middle
   if (
    mouseX > squareTopMidX && mouseX < squareTopMidX + squareTopMidS && 
    mouseY > squareTopMidY && mouseY < squareTopMidY + squareTopMidS
  ) {
    fill(hovercolorSquareTopMid);
    square (squareTopMidX,squareTopMidY,squareTopMidS,squareTopMidR);
  } else {
    fill (colorSquareTopMid);
    square (squareTopMidX,squareTopMidY,squareTopMidS,squareTopMidR);
  }


  //Top Right
  if (
    mouseX > squareTopRightX && mouseX < squareTopRightX + squareTopRightS && 
    mouseY > squareTopRightY && mouseY < squareTopRightY + squareTopRightS
  ) {
    fill(hovercolorSquareTopRight);
    square (squareTopRightX,squareTopRightY,squareTopRightS,squareTopRightR);
  } else {
    fill (colorSquareTopRight);
    square (squareTopRightX,squareTopRightY,squareTopRightS,squareTopRightR);
  }

  
//Middle Left

 if (
    mouseX > squareMidLeftX && mouseX < squareMidLeftX + squareMidLeftS && 
    mouseY > squareMidLeftY && mouseY < squareMidLeftY + squareMidLeftS
  ) {
    fill(hovercolorSquareMidLeft);
    square (squareMidLeftX,squareMidLeftY,squareMidLeftS,squareMidLeftR);
  } else {
    fill (colorSquareMidLeft);
    square (squareMidLeftX,squareMidLeftY,squareMidLeftS,squareMidLeftR);
  }
  

//Middle Mid

 if (
    mouseX > squareMidMidX && mouseX < squareMidMidX + squareMidMidS && 
    mouseY > squareMidMidY && mouseY < squareMidMidY + squareMidMidS
  ) {
    fill(hovercolorSquareMidMid);
    square (squareMidMidX,squareMidMidY,squareMidMidS,squareMidMidR);
  } else {
    fill (colorSquareMidMid);
    square (squareMidMidX,squareMidMidY,squareMidMidS,squareMidMidR);
  }


  //Middle Right
  if (
    mouseX > squareMidRightX && mouseX < squareMidRightX + squareMidRightS && 
    mouseY > squareMidRightY && mouseY < squareMidRightY + squareMidRightS
  ) {
    fill(hovercolorSquareMidRight);
    square (squareMidRightX,squareMidRightY,squareMidMidS,squareMidRightR);
  } else {
    fill (colorSquareMidRight);
    square (squareMidRightX,squareMidRightY,squareMidRightS,squareMidRightR);
  }


  //Bottom left
  if (
    mouseX > squareBottomLeftX && mouseX < squareBottomLeftX + squareBottomLeftS && 
    mouseY > squareBottomLeftY && mouseY < squareBottomLeftY + squareBottomLeftS
  ) {
    fill(hovercolorSquareBottomLeft);
    square (squareBottomLeftX,squareBottomLeftY,squareBottomLeftS,squareBottomLeftR);
  } else {
    fill (colorSquareBottomLeft);
    square (squareBottomLeftX,squareBottomLeftY,squareBottomLeftS,squareBottomLeftR);
  }


  //Bottom middle
  if (
    mouseX > squareBottomMidX && mouseX < squareBottomMidX + squareBottomMidS && 
    mouseY > squareBottomMidY && mouseY < squareBottomMidY + squareBottomMidS
  ) {
    fill(hovercolorSquareBottomMid);
    square (squareBottomMidX,squareBottomMidY,squareBottomMidS,squareBottomMidR);
  } else {
    fill (colorSquareBottomMid);
    square (squareBottomMidX,squareBottomMidY,squareBottomMidS,squareBottomMidR);
  }


  //Bottom right
   if (
    mouseX > squareBottomRightX && mouseX < squareBottomRightX + squareBottomRightS && 
    mouseY > squareBottomRightY && mouseY < squareBottomRightY + squareBottomRightS
  ) {
    fill(hovercolorSquareBottomRight);
    square (squareBottomRightX,squareBottomRightY,squareBottomRightS,squareBottomRightR);
  } else {
    fill (colorSquareBottomRight);
    square (squareBottomRightX,squareBottomRightY,squareBottomRightS,squareBottomRightR);
  }
      
        }
        
        function mouseClicked(){
          if (mouseX > squareTopLeftX && mouseX < squareTopLeftX + squareTopLeftS &&
            mouseY > squareTopLeftY && mouseY < squareTopLeftY + squareTopLeftS
          ) {
            console.log("red");
           colorSquareTopLeft = 'red'
           hovercolorSquareTopLeft = 'darkred'
          }
        }

