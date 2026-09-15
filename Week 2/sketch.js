let x = -100;


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background('#88ceeb');
  //De Weg
  fill(150);
  rect(-10,500,900,605);
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
  //berg 
  strokeWeight(10);
  
  point (436,480);
  strokeWeight(2);
  fill(150);
  triangle (150, 485, 308, 270, 436, 485);
 //zon
 strokeWeight(0);
 fill(225,225,0);
 x += 1;
circle (x, 80, 100,);

if (x > width+50) {
  x = -100;
}


//Stoplicht
fill(90);
rect(650,250,50,150);
fill(255,0,0);
circle(675,275,35);
fill(95,95,0);
circle(675,325,35);
fill(0,95,0);
circle(675,375,35);
fill(90,);
rect(667,400,15,100);

// if (keyIsPressed === true) {
// if (key === 'Enter') {
//   value(0,0,0);

//  }
// }

// fill(255,0,0);
// circle(675,275,35);


}
