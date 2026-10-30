let rooms = ['Woonkamer', 'Keuken', 'Slaapkamer', 'Badkamer'];
let roomColors = ['rgb(200,200,200)', 'rgb(255,225,180)', 'rgb(180,210,255)', 'rgb(180,255,210)'];
let maanden = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'];

let honger = 100;
let energie = 100;
let geluk = 100;
let gezondheid = 100;

let currentRoom = 0;
let etenTeller = 0;

let btnLeft, btnRight, btnHerstart, btnHelp;
let btnSpelen, btnEten, btnSlapen, btnSchoon;

let sleeping = false;
let wassen = false;

let faceNormal, faceMeh, faceSad, faceSick, faceHungry, faceTired, faceDead, faceSleeping;
let hongerIcoon, energieIcoon, gelukIcoon, gezondheidIcoon;


function setup() {
  createCanvas(800, 800);
  frameRate(30);

  //maak donkeder wanneer je slaapt
  createElement('style', `
    .action-btn {
      opacity: 0.15;
      transition: opacity 0.3s ease;
    }
    .action-btn:hover {
      opacity: 1;
    }
  `);

  faceNormal = loadImage("assets/face normal.png");
  faceMeh = loadImage("assets/face meh.png");
  faceSad = loadImage("assets/face sad.png");
  faceSick = loadImage("assets/face sick.png");
  faceHungry = loadImage("assets/face hungry.png");
  faceTired = loadImage("assets/face tired.png");
  faceDead = loadImage("assets/gameover.gif"); 
  faceSleeping = loadImage("assets/face sleeping.png");

  hongerIcoon = loadImage("assets/hongericoon.png");
  energieIcoon = loadImage("assets/energieicoon.png");
  gelukIcoon = loadImage("assets/gelukicoon.png");
  gezondheidIcoon = loadImage("assets/gezondheidicoon.png");

  //Navigatieknoppen
  btnLeft = createButton('<---').position(25, 180).size(80, 80).style('font-weight', 'bold').mousePressed(vorigeKamer);
  btnRight = createButton('--->').position(710, 180).size(80, 80).style('font-weight', 'bold').mousePressed(volgendeKamer);
  
  //Actieknoppen per kamer
  btnSpelen = createButton('Tv kijken').position(53, 422).size(130, 80).style('font-weight', 'bold').class('action-btn').mousePressed(spelen);
  btnEten = createButton('Eten').position(678, 358).size(100, 220).style('font-weight', 'bold').class('action-btn').mousePressed(eten);
  btnSlapen = createButton('Slapen').position(595, 570).size(150, 60).style('font-weight', 'bold').class('action-btn').mousePressed(slapen);
  btnSchoon = createButton('Wassen').position(39, 517).size(98, 60).style('font-weight', 'bold').class('action-btn').mousePressed(schoonmaken);

  //Help knop
  btnHelp = createButton('?').position(680, 35).size(80, 80).style('font-weight', 'bold').style('font-size', '30px').mousePressed(toonHelp);

  //Herstart knop
  btnHerstart = createButton('Opnieuw spelen').position(300, 650).size(200, 60).style('font-weight', 'bold').mousePressed(resetGame);
  btnHerstart.hide();

  //Local storage
  let savedHonger = getItem("honger");
  let savedEnergie = getItem("energie");
  let savedGeluk = getItem("geluk");
  let savedGezondheid = getItem("gezondheid");

  if (savedHonger !== null && savedHonger !== undefined) { honger = savedHonger; }
  if (savedEnergie !== null && savedEnergie !== undefined) { energie = savedEnergie; }
  if (savedGeluk !== null && savedGeluk !== undefined) { geluk = savedGeluk; }
  if (savedGezondheid !== null && savedGezondheid !== undefined) { gezondheid = savedGezondheid; }
}

function draw() {
  if (honger == 0 || energie == 0 || geluk == 0 || gezondheid == 0) {
    background(200);
    btnLeft.hide();
    btnRight.hide();
    btnHelp.hide();
    verbergActieKnoppen();
    btnHerstart.show();

    if (faceDead) {
      image(faceDead, 225, 210, 350, 350); 
    }

    textSize(100);
    fill('red');
    strokeWeight(4);
    text('GAMEOVER!', 100, 125);
    return;
  }

  //Statistieken dalen of stijgen over tijd
  if (sleeping == false) {
    energie = energie - 0.00814;
    if (energie <= 0) { energie = 0; }
  } else {
    energie = energie + 0.02;
    if (energie > 100) { energie = 100; }
  }

  if (wassen == false) {
    gezondheid = gezondheid - 0.00814;
    if (gezondheid <= 0) { gezondheid = 0; }
  } else {
    gezondheid = gezondheid + 0.02;
    if (gezondheid > 100) { gezondheid = 100; }
  }

  honger = honger - 0.0110;
  if (honger <= 0) { honger = 0; }

  geluk = geluk - 0.0100;
  if (geluk <= 0) { geluk = 0; }

  background(roomColors[currentRoom]);

  tekenKamerObject();

  //Huidige kamer tekst
  fill('black');
  textSize(25);
  textStyle(BOLD);
  strokeWeight(2);
  text(rooms[currentRoom], 330, 210);

  //Boven balk achtergrond
  fill('grey');
  rect(0, 0, 800, 150);

  tekenStatSquare(180, 25, honger, hongerIcoon);
  tekenStatSquare(300, 25, energie, energieIcoon);
  tekenStatSquare(420, 25, geluk, gelukIcoon);
  tekenStatSquare(540, 25, gezondheid, gezondheidIcoon);

  toonJuisteActieKnop();
  btnHelp.show(); 

  //Tijd & Datum
  let nu = new Date();
  fill(250, 0, 0, 40);
  strokeWeight(5);
  rect(30, 55, 110, 30, 2);

  textSize(25);
  fill('white');
  strokeWeight(2);
  text(nu.getDate() + ' ' + maanden[nu.getMonth()], 20, 40);
  text(nf(nu.getHours(), 2), 35, 79);
  text(nf(nu.getMinutes(), 2), 70, 79);
  text(nf(nu.getSeconds(), 2), 105, 79);

  //Huisdier/tamagotchi
  let laagsteStat = min(honger, energie, gezondheid, geluk);

  if (sleeping) {
    if (faceSleeping) {
      image(faceSleeping, 275, 260, 250, 250);
    }
  } else if (laagsteStat < 50) {
    if (laagsteStat === honger && faceHungry) {
      image(faceHungry, 275, 260, 250, 250);
    } else if (laagsteStat === energie && faceTired) {
      image(faceTired, 275, 260, 250, 250);
    } else if (laagsteStat === gezondheid && faceSick) {
      image(faceSick, 275, 260, 250, 250);
    } else if (laagsteStat === geluk && faceSad) {
      image(faceSad, 275, 260, 250, 250);
    }
  } else if ((honger > 50 || energie > 50 || geluk > 50 || gezondheid > 50) && faceNormal) {
    image(faceNormal, 275, 260, 250, 250);
  } else if (faceMeh) {
    image(faceMeh, 275, 260, 250, 250);
  }

  //Scherm donkerder maken als je slaapt
  if (sleeping) {
    noStroke();
    fill(0, 0, 0, 150);
    rect(0, 0, width, height);
  }

  saveStats();
}

//Statistiek balken
function tekenStatSquare(x, y, waarde, icoon) {
  fill(80);
  stroke(0);
  strokeWeight(2);
  square(x, y, 100, 5);
  if (waarde > 50) {
    fill(0, 200, 0);
  } else if (waarde > 20) {
    fill(255, 204, 0);
  } else {
    fill(255, 0, 0);
  }

  let statY = y + (100 - waarde);
  rect(x, statY, 100, waarde, 5);
  if (icoon) {
    image(icoon, x + 25, y + 25, 50, 50);
  }
}

function volgendeKamer() { 
  currentRoom = (currentRoom + 1) % rooms.length; 
  stopActies();
}

function vorigeKamer() { 
  currentRoom = (currentRoom - 1 + rooms.length) % rooms.length; 
  stopActies();
}

function stopActies() {
  sleeping = false;
  wassen = false;
  btnSlapen.html('Slapen');
  btnSchoon.html('Wassen');
}

function tekenKamerObject() {
  stroke(0);
  strokeWeight(2);

  if (currentRoom === 0) {
    //Woonkamer TV 
    fill(80);
    rect(30, 400, 160, 110, 5); 
    fill(80, 220, 255);
    rect(45, 415, 130, 80);    
    fill(50);
    rect(80, 510, 60, 20);     
  } 
  else if (currentRoom === 1) {
    //Keuken Koelkast 
    fill('grey');
    rect(670, 350, 100, 220, 5); 
    line(670, 460, 670, 460);   
    fill('white');
    rect(685, 390, 8, 80, 2);   
  } 
  else if (currentRoom === 2) {
    //Slaapkamer Bed 
    fill(180, 50, 50);
    rect(570, 520, 220, 140, 5); 
    fill('white');
    rect(740, 525, 40, 65, 3);  
    rect(740, 595, 40, 60, 3);  
  } 
  else if (currentRoom === 3) {
    //Badkamer Douche
    fill('white');
    rect(30, 350, 100, 220, 5); 
    fill(200);
    circle(80, 375, 20);        
    stroke(10, 200, 255);
    strokeWeight(3);
    line(75, 390, 65, 430);   
    line(85, 390, 95, 430);
    stroke(0);
    strokeWeight(2);
  }
}

function verbergActieKnoppen() {
  btnSpelen.hide();
  btnEten.hide();
  btnSlapen.hide();
  btnSchoon.hide();
}

function toonJuisteActieKnop() {
  verbergActieKnoppen();
  
  if (currentRoom === 0) { 
    btnSpelen.show(); 
  } else if (currentRoom === 1) { 
    btnEten.show(); 
  } else if (currentRoom === 2) { 
    btnSlapen.show(); 
  } else if (currentRoom === 3) { 
    btnSchoon.show(); 
  }
}

//Acties
function spelen() {
  geluk = geluk + 3.5;
  if (geluk > 100) { geluk = 100; }

  energie = energie - 5;
  if (energie < 0) { energie = 0; }

  etenTeller = 0;
}

function eten() {
  etenTeller++;

  honger = honger + 5;
  if (honger > 100) { 
    honger = 100;
  }

  if (etenTeller >= 4) {
    gezondheid = gezondheid - 3;
    if (gezondheid < 0) { gezondheid = 0; }
    if (honger > 95) {
      gezondheid = gezondheid - 5;
      if (gezondheid < 0) { gezondheid = 0; }
    }
  }
}

function slapen() {
  if (sleeping == false) {
    sleeping = true;
    btnSlapen.html('Wakker worden');
  } else {
    sleeping = false;
    btnSlapen.html('Slapen');
  }

  if (energie > 100) { energie = 100; }
  etenTeller = 0;

  if (sleeping == true) {
    wassen = false;
    btnSchoon.html('Wassen'); 
  }
}

function schoonmaken() {
  if (wassen == false) {
    wassen = true;
    btnSchoon.html('Stop met wassen');
  } else {
    wassen = false;
    btnSchoon.html('Wassen');
  }
  
  if (gezondheid > 100) { gezondheid = 100; }

  if (wassen == true) {
    sleeping = false;
    btnSlapen.html('Slapen');   
  }
}

function toonHelp() {
  alert("WELKOM!\n\n" +
        "- Beweeg met de links en rechts knoppen om te gaan naarverschillende kamers.\n" +
        "- Hover met je muis over de actieknoppen om ze te zien.\n" +
        "- Houd de statistieken (Honger, Energie, Geluk, Gezondheid) goed in de gaten in de bovenbalk!\n" +
        "- Als er één balkje op 0 komt, ben je Game Over.");
}

function resetGame() {
  honger = 100;
  energie = 100;
  geluk = 100;
  gezondheid = 100;
  currentRoom = 0;
  etenTeller = 0;

  sleeping = false;
  btnSlapen.html('Slapen');

  wassen = false;
  btnSchoon.html('Wassen');

  btnLeft.show();
  btnRight.show();
  btnHerstart.hide();
}

function saveStats(){
  storeItem("geluk", geluk);
  storeItem("honger", honger);
  storeItem("energie", energie);
  storeItem("gezondheid", gezondheid);
}