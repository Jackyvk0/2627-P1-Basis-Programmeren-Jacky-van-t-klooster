let a = 0
let b = 0

function keyPressed() {
 if (keyCode === 32 ) {
  a = random (200) 
  b = random (200)
}
}

 


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  text('waarde van A = ', 20,70);
  text('waarde van B = ', 20,90);
text('waarde verschil = ', 90,120);
  
  text(a, 120, 70);
  text(b, 120, 90);

 text(a-b, 200,120);
}



