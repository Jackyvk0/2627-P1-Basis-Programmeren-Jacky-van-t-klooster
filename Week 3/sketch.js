//startknop en spelstatus
let spelGestart = false;
let winnaar = 0; // 0 = geen, 1 = Rood wint, 2 = Blauw wint, 3 = Gelijkspel

//status van de vakjes (0 = leeg, 1 = rood, 2 = blauw)
let stateTopLeft = 0, stateTopMid = 0, stateTopRight = 0;
let stateMidLeft = 0, stateMidMid = 0, stateMidRight = 0;
let stateBottomLeft = 0, stateBottomMid = 0, stateBottomRight = 0;

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

let squareTopMidX = 280;
let squareTopMidY = 180;
let squareTopMidS = 90;
let squareTopMidR = 10;

let squareTopRightX = 380;
let squareTopRightY = 180;
let squareTopRightS = 90;
let squareTopRightR = 10;

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

let squareMidMidX = 280;
let squareMidMidY = 280;
let squareMidMidS = 90;
let squareMidMidR = 10;

let squareMidRightX = 380;
let squareMidRightY = 280;
let squareMidRightS = 90;
let squareMidRightR = 10;

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

let squareBottomMidX = 280;
let squareBottomMidY = 380;
let squareBottomMidS = 90;
let squareBottomMidR = 10;

let squareBottomRightX = 380;
let squareBottomRightY = 380;
let squareBottomRightS = 90;
let squareBottomRightR = 10;


// let player = round(random);
let player = 1


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
  rect(0, 0, 330, 1000);
  fill('blue');
  rect(320, 0, 330, 1000);

  //tekst Boter kaas en eieren
  if (spelGestart == false) {
    strokeWeight(5);
    fill(50, 50, 50, 100);
    rect(130, 50, 400, 80, 100);
    fill(255);
    textStyle(BOLDITALIC);
    text("Boter, Kaas en Eieren", 170, 100);

    // Start Knop
    strokeWeight(3);
    fill('green');
    rect(225, 550, 200, 60, 20); // de knop zelf
    fill('white');
    strokeWeight(0);
    textSize(30);
    text("START", 280, 590); // tekst in de knop
  }

  //rand boter, kaas en eieren
  strokeWeight(0);
  fill('black');
  square(160, 160, 330, 20);


  //3x3 knoppen hover
  //Top Left

  if (
    mouseX > squareTopLeftX && mouseX < squareTopLeftX + squareTopLeftS &&
    mouseY > squareTopLeftY && mouseY < squareTopLeftY + squareTopLeftS
  ) {
    fill(hovercolorSquareTopLeft);
    square(squareTopLeftX, squareTopLeftY, squareTopLeftS, squareTopLeftR);
  } else {
    fill(colorSquareTopLeft);
    square(squareTopLeftX, squareTopLeftY, squareTopLeftS, squareTopLeftR);
  }


  //Top Middle
  if (
    mouseX > squareTopMidX && mouseX < squareTopMidX + squareTopMidS &&
    mouseY > squareTopMidY && mouseY < squareTopMidY + squareTopMidS
  ) {
    fill(hovercolorSquareTopMid);
    square(squareTopMidX, squareTopMidY, squareTopMidS, squareTopMidR);
  } else {
    fill(colorSquareTopMid);
    square(squareTopMidX, squareTopMidY, squareTopMidS, squareTopMidR);
  }


  //Top Right
  if (
    mouseX > squareTopRightX && mouseX < squareTopRightX + squareTopRightS &&
    mouseY > squareTopRightY && mouseY < squareTopRightY + squareTopRightS
  ) {
    fill(hovercolorSquareTopRight);
    square(squareTopRightX, squareTopRightY, squareTopRightS, squareTopRightR);
  } else {
    fill(colorSquareTopRight);
    square(squareTopRightX, squareTopRightY, squareTopRightS, squareTopRightR);
  }


  //Middle Left

  if (
    mouseX > squareMidLeftX && mouseX < squareMidLeftX + squareMidLeftS &&
    mouseY > squareMidLeftY && mouseY < squareMidLeftY + squareMidLeftS
  ) {
    fill(hovercolorSquareMidLeft);
    square(squareMidLeftX, squareMidLeftY, squareMidLeftS, squareMidLeftR);
  } else {
    fill(colorSquareMidLeft);
    square(squareMidLeftX, squareMidLeftY, squareMidLeftS, squareMidLeftR);
  }


  //Middle Mid

  if (
    mouseX > squareMidMidX && mouseX < squareMidMidX + squareMidMidS &&
    mouseY > squareMidMidY && mouseY < squareMidMidY + squareMidMidS
  ) {
    fill(hovercolorSquareMidMid);
    square(squareMidMidX, squareMidMidY, squareMidMidS, squareMidMidR);
  } else {
    fill(colorSquareMidMid);
    square(squareMidMidX, squareMidMidY, squareMidMidS, squareMidMidR);
  }


  //Middle Right
  if (
    mouseX > squareMidRightX && mouseX < squareMidRightX + squareMidRightS &&
    mouseY > squareMidRightY && mouseY < squareMidRightY + squareMidRightS
  ) {
    fill(hovercolorSquareMidRight);
    square(squareMidRightX, squareMidRightY, squareMidMidS, squareMidRightR);
  } else {
    fill(colorSquareMidRight);
    square(squareMidRightX, squareMidRightY, squareMidRightS, squareMidRightR);
  }


  //Bottom Left
  if (
    mouseX > squareBottomLeftX && mouseX < squareBottomLeftX + squareBottomLeftS &&
    mouseY > squareBottomLeftY && mouseY < squareBottomLeftY + squareBottomLeftS
  ) {
    fill(hovercolorSquareBottomLeft);
    square(squareBottomLeftX, squareBottomLeftY, squareBottomLeftS, squareBottomLeftR);
  } else {
    fill(colorSquareBottomLeft);
    square(squareBottomLeftX, squareBottomLeftY, squareBottomLeftS, squareBottomLeftR);
  }


  //Bottom Middle
  if (
    mouseX > squareBottomMidX && mouseX < squareBottomMidX + squareBottomMidS &&
    mouseY > squareBottomMidY && mouseY < squareBottomMidY + squareBottomMidS
  ) {
    fill(hovercolorSquareBottomMid);
    square(squareBottomMidX, squareBottomMidY, squareBottomMidS, squareBottomMidR);
  } else {
    fill(colorSquareBottomMid);
    square(squareBottomMidX, squareBottomMidY, squareBottomMidS, squareBottomMidR);
  }


  //Bottom Right
  if (
    mouseX > squareBottomRightX && mouseX < squareBottomRightX + squareBottomRightS &&
    mouseY > squareBottomRightY && mouseY < squareBottomRightY + squareBottomRightS
  ) {
    fill(hovercolorSquareBottomRight);
    square(squareBottomRightX, squareBottomRightY, squareBottomRightS, squareBottomRightR);
  } else {
    fill(colorSquareBottomRight);
    square(squareBottomRightX, squareBottomRightY, squareBottomRightS, squareBottomRightR);
  }

  //winnaar en restart knop
  if (winnaar > 0) {
    strokeWeight(5);
    fill(50, 50, 50, 200);
    rect(100, 50, 450, 80, 20);
    fill(255);
    textSize(28);
    textStyle(BOLD);

    if (winnaar == 1) {
      text("Rood heeft gewonnen!", 170, 100);
    } else if (winnaar == 2) {
      text("Blauw heeft gewonnen!", 160, 100);
    } else if (winnaar == 3) {
      text("Gelijkspel!", 250, 100);
    }

    // Restart Knop
    strokeWeight(3);
    fill('orange');
    rect(225, 550, 200, 60, 20);
    fill('white');
    strokeWeight(0);
    textSize(26);
    text("Restart", 265, 590);
  }
}


function changeTurn()
{
    checkWinnaar();
    player = player + 1;
    if (player > 2) {
      player = 1
    }
}


function checkWinnaar() {
  //alle 8 winnende plekken
  
  // Rood wint (player 1)
  if (
    (stateTopLeft == 1 && stateTopMid == 1 && stateTopRight == 1) ||
    (stateMidLeft == 1 && stateMidMid == 1 && stateMidRight == 1) ||
    (stateBottomLeft == 1 && stateBottomMid == 1 && stateBottomRight == 1) ||
    (stateTopLeft == 1 && stateMidLeft == 1 && stateBottomLeft == 1) ||
    (stateTopMid == 1 && stateMidMid == 1 && stateBottomMid == 1) ||
    (stateTopRight == 1 && stateMidRight == 1 && stateBottomRight == 1) ||
    (stateTopLeft == 1 && stateMidMid == 1 && stateBottomRight == 1) ||
    (stateTopRight == 1 && stateMidMid == 1 && stateBottomLeft == 1)
  ) {
    winnaar = 1;
  }
  
  // Blauw wint (player 2)
  else if (
    (stateTopLeft == 2 && stateTopMid == 2 && stateTopRight == 2) ||
    (stateMidLeft == 2 && stateMidMid == 2 && stateMidRight == 2) ||
    (stateBottomLeft == 2 && stateBottomMid == 2 && stateBottomRight == 2) ||
    (stateTopLeft == 2 && stateMidLeft == 2 && stateBottomLeft == 2) ||
    (stateTopMid == 2 && stateMidMid == 2 && stateBottomMid == 2) ||
    (stateTopRight == 2 && stateMidRight == 2 && stateBottomRight == 2) ||
    (stateTopLeft == 2 && stateMidMid == 2 && stateBottomRight == 2) ||
    (stateTopRight == 2 && stateMidMid == 2 && stateBottomLeft == 2)
  ) {
    winnaar = 2;
  }
  
  // Gelijkspel
  else if (
    stateTopLeft != 0 && stateTopMid != 0 && stateTopRight != 0 &&
    stateMidLeft != 0 && stateMidMid != 0 && stateMidRight != 0 &&
    stateBottomLeft != 0 && stateBottomMid != 0 && stateBottomRight != 0
  ) {
    winnaar = 3;
  }
}


function restartSpel() {
  //terugzetten naar beginstand
  player = 1;
  winnaar = 0;

  stateTopLeft = 0; stateTopMid = 0; stateTopRight = 0;
  stateMidLeft = 0; stateMidMid = 0; stateMidRight = 0;
  stateBottomLeft = 0; stateBottomMid = 0; stateBottomRight = 0;

  colorSquareTopLeft = 'darkgrey'; hovercolorSquareTopLeft = 'grey';
  colorSquareTopMid = 'darkgrey'; hovercolorSquareTopMid = 'grey';
  colorSquareTopRight = 'darkgrey'; hovercolorSquareTopRight = 'grey';

  colorSquareMidLeft = 'darkgrey'; hovercolorSquareMidLeft = 'grey';
  colorSquareMidMid = 'darkgrey'; hovercolorSquareMidMid = 'grey';
  colorSquareMidRight = 'darkgrey'; hovercolorSquareMidRight = 'grey';

  colorSquareBottomLeft = 'darkgrey'; hovercolorSquareBottomLeft = 'grey';
  colorSquareBottomMid = 'darkgrey'; hovercolorSquareBottomMid = 'grey';
  colorSquareBottomRight = 'darkgrey'; hovercolorSquareBottomRight = 'grey';
}


function mouseClicked() {

  // Kijken of er op start wordt geklikt
  if (spelGestart == false) {
    if (mouseX > 225 && mouseX < 425 && mouseY > 550 && mouseY < 610) {
      spelGestart = true;
    }
  }

  // Kijken of er op restart wordt geklikt
  if (winnaar > 0) {
    if (mouseX > 225 && mouseX < 425 && mouseY > 550 && mouseY < 610) {
      restartSpel();
    }
  }

  // als het spel is gestart en er nog geen winnaar mag je vakjes klikken
  if (spelGestart == true && winnaar == 0) {

    // Top left kleur click
    if (mouseX > squareTopLeftX && mouseX < squareTopLeftX + squareTopLeftS &&
      mouseY > squareTopLeftY && mouseY < squareTopLeftY + squareTopLeftS
    ) {
      if (stateTopLeft == 0) { // Alleen als vakje nog leeg is
        if (player == 1) {
          colorSquareTopLeft = 'red'; hovercolorSquareTopLeft = 'red'; stateTopLeft = 1;
        } else if (player == 2) {
          colorSquareTopLeft = 'blue'; hovercolorSquareTopLeft = 'blue'; stateTopLeft = 2;
        }
        changeTurn();
      }
    }
    // Top mid kleur click
    if (mouseX > squareTopMidX && mouseX < squareTopMidX + squareTopMidS &&
      mouseY > squareTopMidY && mouseY < squareTopMidY + squareTopMidS
    ) {
      if (stateTopMid == 0) {
        if (player == 1) {
          colorSquareTopMid = 'red'; hovercolorSquareTopMid = 'red'; stateTopMid = 1;
        } else if (player == 2) {
          colorSquareTopMid = 'blue'; hovercolorSquareTopMid = 'blue'; stateTopMid = 2;
        }
        changeTurn();
      }
    }

    //Top Right kleur click
    if (mouseX > squareTopRightX && mouseX < squareTopRightX + squareTopRightS &&
      mouseY > squareTopRightY && mouseY < squareTopRightY + squareTopRightS
    ) {
      if (stateTopRight == 0) {
        if (player == 1) {
          colorSquareTopRight = 'red'; hovercolorSquareTopRight = 'red'; stateTopRight = 1;
        } else if (player == 2) {
          colorSquareTopRight = 'blue'; hovercolorSquareTopRight = 'blue'; stateTopRight = 2;
        }
        changeTurn();
      }
    }

    //Mid left kleur click
    if (mouseX > squareMidLeftX && mouseX < squareMidLeftX + squareMidLeftS &&
      mouseY > squareMidLeftY && mouseY < squareMidLeftY + squareMidLeftS
    ) {
      if (stateMidLeft == 0) {
        if (player == 1) {
          colorSquareMidLeft = 'red'; hovercolorSquareMidLeft = 'red'; stateMidLeft = 1;
        } else if (player == 2) {
          colorSquareMidLeft = 'blue'; hovercolorSquareMidLeft = 'blue'; stateMidLeft = 2;
        }
        changeTurn();
      }
    }
    // Mid mid kleur click
    if (mouseX > squareMidMidX && mouseX < squareMidMidX + squareMidMidS &&
      mouseY > squareMidMidY && mouseY < squareMidMidY + squareMidMidS
    ) {
      if (stateMidMid == 0) {
        if (player == 1) {
          colorSquareMidMid = 'red'; hovercolorSquareMidMid = 'red'; stateMidMid = 1;
        } else if (player == 2) {
          colorSquareMidMid = 'blue'; hovercolorSquareMidMid = 'blue'; stateMidMid = 2;
        }
        changeTurn();
      }
    }

    //Mid Right kleur click
    if (mouseX > squareMidRightX && mouseX < squareMidRightX + squareMidRightS &&
      mouseY > squareMidRightY && mouseY < squareMidRightY + squareMidRightS
    ) {
      if (stateMidRight == 0) {
        if (player == 1) {
          colorSquareMidRight = 'red'; hovercolorSquareMidRight = 'red'; stateMidRight = 1;
        } else if (player == 2) {
          colorSquareMidRight = 'blue'; hovercolorSquareMidRight = 'blue'; stateMidRight = 2;
        }
        changeTurn();
      }
    }

    //Bottom left kleur click
    if (mouseX > squareBottomLeftX && mouseX < squareBottomLeftX + squareBottomLeftS &&
      mouseY > squareBottomLeftY && mouseY < squareBottomLeftY + squareBottomLeftS
    ) {
      if (stateBottomLeft == 0) {
        if (player == 1) {
          colorSquareBottomLeft = 'red'; hovercolorSquareBottomLeft = 'red'; stateBottomLeft = 1;
        } else if (player == 2) {
          colorSquareBottomLeft = 'blue'; hovercolorSquareBottomLeft = 'blue'; stateBottomLeft = 2;
        }
        changeTurn();
      }
    }
    //Bottom mid kleur click
    if (mouseX > squareBottomMidX && mouseX < squareBottomMidX + squareBottomMidS &&
      mouseY > squareBottomMidY && mouseY < squareBottomMidY + squareBottomMidS
    ) {
      if (stateBottomMid == 0) {
        if (player == 1) {
          colorSquareBottomMid = 'red'; hovercolorSquareBottomMid = 'red'; stateBottomMid = 1;
        } else if (player == 2) {
          colorSquareBottomMid = 'blue'; hovercolorSquareBottomMid = 'blue'; stateBottomMid = 2;
        }
        changeTurn();
      }
    }

    //Bottom Right kleur click
    if (mouseX > squareBottomRightX && mouseX < squareBottomRightX + squareBottomRightS &&
      mouseY > squareBottomRightY && mouseY < squareBottomRightY + squareBottomRightS
    ) {
      if (stateBottomRight == 0) {
        if (player == 1) {
          colorSquareBottomRight = 'red'; hovercolorSquareBottomRight = 'red'; stateBottomRight = 1;
        } else if (player == 2) {
          colorSquareBottomRight = 'blue'; hovercolorSquareBottomRight = 'blue'; stateBottomRight = 2;
        }
        changeTurn();
      }
    }

  }

}