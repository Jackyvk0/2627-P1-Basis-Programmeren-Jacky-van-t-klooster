let x = -100;

let wL = 840;
let w = 870;
let wR = 900;

let eL = 820
let e = 850
let eR = 880

let qL = 850
let q = 880
let qR = 910

let zz = 0

let auto = -100

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('#88ceeb');
  
  //De Weg
  fill(150);
  rect(-10,500,900,605);
  fill(100)
  rect(-10,510,900,80);
  stroke('grey');
  strokeWeight(1);
  line(60,40,); 
 
  //Weg strepen
  stroke('lightgrey');
  strokeWeight(7);
  line(5,550,70,550);
  line(260,550,320,550);
  line(500,550,560,550);
  line(740,550,800,550);
  
  //Gras achtergrond
  strokeWeight(0)
  fill(0,150,0);
  rect (0,485,800,15); 
  
  //Zon
 strokeWeight(0);
 fill(225,176,0, zz);
 zz += 1;
 circle (x, 80, 120)
 if (zz >= 255) {
   zz -= -4;
  }
  
  x += 1;
  fill(225,225,0);
circle (x, 80, 90,);

if (x > width+50) {
  x = -100;
}

//Wolken normale snelheid
 strokeWeight(0);
 fill(235);
circle (wL, 78, 70);
circle (w, 80, 85,);
circle (wR, 90, 70);
 fill(255);
 wL -= 1;
 w -= 1;
 wR -= 1;
circle (wL, 78, 50);
circle (w, 80, 65,);
circle (wR, 90, 50);

if (wL < width-900) {
  wL = 840;
  w = 870;
  wR = 900;
}

//Wolken langzaam
fill(235);
circle (qL, 133, 90);
circle (q, 135, 105,);
circle (qR, 140, 90);
 fill(255);
 qL -= 0.55;
 q -= 0.55;
 qR -= 0.55;
 circle (qL, 133, 70);
fill(255);
circle (q, 135, 85,);
circle (qR, 140, 70);

if (qR < width-900) {
  qL = 850;
  q = 880;
  qR = 910;

}

//Wolken snel
fill(235);
circle (eL, 103, 60);
circle (e, 105, 75,);
circle (eR, 110, 60);
 fill(255);
 eL -= 1.75;
 e -= 1.75;
 eR -= 1.75;
circle (eL, 103, 40);
circle (e, 105, 55,);
circle (eR, 110, 40);

if (eR < width-900) {
  eL = 820;
  e = 850;
  eR = 880;

}

 //Bergen
strokeWeight(0);

fill(125);
triangle(150, 485, 308, 270, 436, 485);
fill(145);
triangle(200, 485, 308, 270, 436, 485);
fill(245);
triangle(282, 305, 308, 270, 329, 305);
fill(255);
triangle(290, 305, 308, 270, 330, 305);

 fill(85);
 triangle(306, 485, 480, 180, 680, 485);
 fill(105);
 triangle(386, 485, 480, 180, 680, 485);
 fill(245);
 triangle(454, 225, 480, 180, 510, 225);
 fill(255);
 triangle(464, 225, 480, 180, 510, 225);

 fill(125);  
 triangle(550, 485, 680, 90, 890, 485);
 fill(155);
 triangle(610, 485, 680, 90, 890, 485);
 fill(245);
 triangle(649, 185, 680, 90, 708, 195); 
 fill(255);
 triangle(662, 186, 680, 90, 768, 255); 

//Bomen

strokeWeight(0);
fill(87,54,10);
rect(67,420,15,80);
fill('#3f7625');
circle(75,400,90);

fill(87,54,10);
rect(207,360,15,140);
fill('#3f7625');
circle(213,320,100);

fill(87,54,10);
rect(343,400,15,100);
fill('#3f7625');
circle(350,380,70);

fill(87,54,10);
rect(407,520,15,80);
fill('#3f7625');
circle(414,480,90);

fill(87,54,10);
rect(497,400,15,100);
fill('#3f7625');
circle(503,380,100);
circle(463,360,90);
circle(543,360,90);

//Stoplicht
fill(90);
rect(650,280,50,150);
fill(252,0,0);
circle(675,305,35);
fill(95,95,0);
circle(675,355,35);
fill(0,95,0);
circle(675,405,35);
fill(90);
rect(667,430,15,70);

// if (keyIsPressed === true) {
// if (key === 'Enter') {
//   value(0,0,0);

//  }
// }

// fill(255,0,0);
// circle(675,305,35);






//Auto
fill(255,0,0);
rect(578,512,120,50);
rect(590,482,90,40);
fill(112);
circle(675,567,35);
circle(600,567,35);
fill(255,0,0);

 auto += 1;
  fill(225,225,0);
circle (auto, 80, 90,);

if (auto > width+50) {
  auto = -100;
}



}
