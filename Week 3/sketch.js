
function setup() {
  createCanvas(650, 650);
}

function draw() {
  background(220);
 
  //rode en blauwe gedeeltes
  fill('red');
rect(0,0,330, 1000);
fill('blue');
rect(320,0,330, 1000);
 

 //rand boter, kaas en eieren
fill('black');
  square (160,160, 330, 20);

  //3x3 knoppen
  fill(160);

  //bovenste rij
  square (180,180,90, 10);
  square (280,180,90, 10);
  square (380,180,90, 10);

 //middelste rij
  square (180,280,90, 10);
  square (280,280,90, 10);
  square (380,280,90, 10);

  //onderste rij
  square (180,380,90, 10);
  square (280,380,90, 10);
  square (380,380,90, 10);




}
