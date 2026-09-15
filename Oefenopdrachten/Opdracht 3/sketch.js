let score = 89;

function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(220);
   fill(0);
  let s = 'En the resultaten zijn.....';
text(s, 150, 50);


if (score > 89) {
  fill(0,255,0);
  text("Uitstekend!", 150, 100,);
}

else if (score > 69 && score <= 89) {
  fill(255,155,52);
  text("Goed gedaan!", 150, 100,);
  
}

else if (score > 49 && score <= 69) {
  fill(255,255,0);
  text("Voldoende!", 150, 100);
}

else if (score < 49) {
  fill(240,0,0);
  text("Onvoldoende!", 150, 100);
}

}