let x = 100;
//x = dus 100 waard. Dit is een voorbeeld van een variabele
let greeting = "Hello World!";
//groet met de tekst "Hello World!"
let a = 20;
//a = dus 20 waard
let b = 10;
//b = dus 10 waard
let optellen = a + b;
//laat a+b optellen dus 20+10=30
let aftrekken = a - b;
//laat a+b aftrekken dus 20-10=10
let vermenigvuldigen = a * b;
//laat a+b vermenigvuldigen dus 20*10=200
let delen = a / b;
//laat a+b delen dus 20/10=2
function setup() {
  createCanvas(400, 400);
  //maak een canvas van 400 bij 400
}

function draw() {
  background(220);
  //Teken de achtergrond grijze tint 220
  text(x,20,20);
  //text '100' = dus op x 20 en op y 20.
  let y = 60;
  ///dus laat y 60 zijn
  text(greeting,20,y);
  y += 20;
    // Text= 'Hello World!'. X = 20, Y = y += 20; = 60
  text("Optellen: " + (a + b),20,y);
  y += 20;
    // Text= 'Optellen', a + b = 20 + 10 = 30. X = 20, Y = y += 20; = 80
  text("Aftrekken: " + (a - b),20,y);
  y += 20;
    // Text= 'Aftrekken', a - b = 20 - 10 = 10. X = 20, Y = y += 20; = 100
  text("Vermenigvuldigen: " + a * b,20,y);
  y += 20;
    // Text= 'Vermenigvuldigen', a * b = 20 * 10 = 200. X = 20, Y = y += 20; = 120
  text("Delen: " + a / b,20,y);
  // Text= Delen, a / b = 20 / 10 = 2. X = 20, Y = y += 20; = 140
}