let zon = -100;
let zonOranje = 0;

let wolkNormaalLinks = 840;
let wolkNormaalMidden = 870;
let wolkNormaalRechts = 900;

let wolkSnelLinks = 820;
let wolkSnelMidden = 850;
let wolkSnelRechts = 880;

let wolkLangzaamLinks = 850;
let wolkLangzaamMidden = 880;
let wolkLangzaamRechts = 910;

let autoRood = -100;
let autoBlauw = -400;
let autoVrachtwagen = -900;
let autoSport = 900

let stoplichtkleur = 2;
     function keyPressed() {
          if (key === 'Enter') {
            if (stoplichtkleur === 0) {
              stoplichtkleur = 2;
            } else {
              stoplichtkleur--;
            }
          }
        }



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
 fill(225,176,0, zonOranje);
 zonOranje += 1;
 if (zonOranje === 255) {
  zonOranje += -2;
 }


  zon += 1;
  circle (zon, 80, 100)
  fill(225,225,0);
circle (zon, 80, 70,);

if (zon > width+50) {
  zon = -100;
}


//Wolken normale snelheid
 strokeWeight(0);
 fill(235);
circle (wolkNormaalLinks, 78, 70);
circle (wolkNormaalMidden, 80, 85,);
circle (wolkNormaalRechts, 90, 70);
 fill(255);
 wolkNormaalLinks -= 1;
 wolkNormaalMidden -= 1;
 wolkNormaalRechts -= 1;
circle (wolkNormaalLinks, 78, 50);
circle (wolkNormaalMidden, 80, 65,);
circle (wolkNormaalRechts, 90, 50);

if (wolkNormaalLinks < width-900) {
  wolkNormaalLinks = 840;
  wolkNormaalMidden = 870;
  wolkNormaalRechts = 900;
}


//Wolken langzaam
fill(235);
circle (wolkLangzaamLinks, 133, 90);
circle (wolkLangzaamMidden, 135, 105,);
circle (wolkLangzaamRechts, 140, 90);
 fill(255);
 wolkLangzaamLinks -= 0.55;
 wolkLangzaamMidden -= 0.55;
 wolkLangzaamRechts -= 0.55;
 circle (wolkLangzaamLinks, 133, 70);
fill(255);
circle (wolkLangzaamMidden, 135, 85,);
circle (wolkLangzaamRechts, 140, 70);

if (wolkLangzaamRechts < width-900) {
  wolkLangzaamLinks = 850;
  wolkLangzaamMidden = 880;
  wolkLangzaamRechts = 910;

}


//Wolken snel
fill(235);
circle (wolkSnelLinks, 103, 60);
circle (wolkSnelMidden, 105, 75,);
circle (wolkSnelRechts, 110, 60);
 fill(255);
 wolkSnelLinks -= 1.75;
 wolkSnelMidden -= 1.75;
 wolkSnelRechts -= 1.75;
circle (wolkSnelLinks, 103, 40);
circle (wolkSnelMidden, 105, 55,);
circle (wolkSnelRechts, 110, 40);

if (wolkSnelRechts < width-900) {
  wolkSnelLinks = 820;
  wolkSnelMidden = 850;
  wolkSnelRechts = 880;

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


 //bord 30
 fill(205);
 stroke(0);
 strokeWeight(2);
 rect(277,440,15,60);
 fill('white');
 rect(262,400,45,60, 10)
 strokeWeight(4);
 stroke(255,0,0);
 circle(284,430,35);
 strokeWeight(0);
 fill(0);
 textSize(20);
 text('30',273,437);
 textSize(10);
 text('ZONE',271,410);


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


//Grote Boom

fill(87,54,10);
rect(497,400,15,100);
fill('#3f7625');
circle(503,380,100);
circle(463,360,90);
circle(543,360,90);


//Stoplicht

fill(90);
rect(650,285,50,150);

//Red
if(stoplichtkleur == 0)
  {
    fill(252,0,0);  
  }
  else
    {
      fill(32,0,0);  
    }
    circle(675,310,35);
    
    //Yellow
    if (stoplichtkleur == 1) {
      fill(255,255,0);
    }
    else
      { 
        fill(35,35,0);
      }
      circle(675,360,35);
      
      //Green
      if (stoplichtkleur == 2) {
        fill(0,255,0);
      }
      else
        {
          fill(0,35,0);
        }
        
        circle(675,410,35);
        
        fill(90);
        rect(667,435,15,70);


//auto Sport
autoSport -= 3.6;
fill(248,252,3);
rect(autoSport - 10,490,105,40)
rect(autoSport - 25,510,30,20)
fill(0);
strokeWeight(5);
stroke(252,186,3);
textSize(20);
text('69',autoSport +30,500,105,40);
strokeWeight(0);
fill(82);
circle(autoSport, 527, 35,);
circle(autoSport + 80, 527,35);
if (autoSport < width-900) {
  autoSport = 900;
}

if (stoplichtkleur === 0) {
  autoSport -= -3.6;
}
else if (stoplichtkleur === 1) {
  autoSport -= -2;
}


 //Auto rood
autoRood += 2;
fill(255,0,0);
rect(autoRood - 100,512,100,50)
rect(autoRood - 0,532,30,30)
fill(82);
circle(autoRood, 567, 35,);
circle(autoRood - 80, 567,35);
if (autoRood > width+200) {
  autoRood = -100;
}

if (stoplichtkleur === 0) {
  autoRood += -2;
}
else if (stoplichtkleur === 1) {
  autoRood += -0.8;
}


//Auto blauw
autoBlauw += 2;
fill(0,0,255);
rect(autoBlauw - 100,512,100,50)
rect(autoBlauw - 0,532,30,30)
fill(82);
circle(autoBlauw, 567, 35,);
circle(autoBlauw - 80, 567,35);
if (autoBlauw > width+200) {
  autoBlauw = -100;
}

if (stoplichtkleur === 0) {
  autoBlauw += -2;
}
else if (stoplichtkleur === 1) {
  autoBlauw += -0.8;
}


//Auto vrachtwagen
autoVrachtwagen += 2;
fill(180);
rect(autoVrachtwagen - 100,462,270,100)
rect(autoVrachtwagen - 0,492,190,70)
fill(82);
circle(autoVrachtwagen + 150, 567, 35,);
circle(autoVrachtwagen -80, 567,35);
if (autoVrachtwagen > width+100) {
  autoVrachtwagen = -200;
}

if (stoplichtkleur === 0) {
  autoVrachtwagen += -2;
}
else if (stoplichtkleur === 1) {
  autoVrachtwagen += -0.8;
}


//Bomen Voorkant

fill(87,54,10);
rect(407,520,15,80);
fill('#3f7625');
circle(414,480,90);

fill(87,54,10);
rect(157,520,15,80);
fill('#3f7625');
circle(164,480,90);



}
