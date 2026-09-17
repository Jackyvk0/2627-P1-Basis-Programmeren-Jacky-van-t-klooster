let x = 0


let c = 200
let d = 600

let stoplichtkleur = 0

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
  createCanvas(800, 800);
}

function draw() {
  background(220);




  fill(0);
  textSize(15);
  text('1. Houd B in om een blokje te laten verschijnen', 20, 20);
  if (keyIsDown('66') === true) {
    fill(255);
    square(30, 30, 60);
  }

  fill(0);
  textSize(15);
  text('2. Druk op spatie om het getal op 0 te zetten', 20, 120);
  textSize(30);
  text(x, 30, 160)
  x += 1;
  if (x >= 500) {
    x = 0
  }
  else if (keyIsDown('32') === true) {
    x = 0
  }



  textSize(15);


  text('3. Druk op enter om van rood -> groen -> geel te gaan', 20, 240);

  fill(90);
  rect(50, 280, 50, 150);


  function keyPressed() {
    if (key === 'Enter') {
      if (stoplichtkleur === 0) {
        stoplichtkleur = 2;
      } else {
        stoplichtkleur--;
      }
    }
  }

  //red
  if (stoplichtkleur == 0) {
    fill(252, 0, 0);
  }
  else {
    fill(52, 0, 0);
  }
  circle(75, 305, 35);

  //yellow
  if (stoplichtkleur == 1) {
    fill(255, 255, 0);
  }
  else {
    fill(55, 55, 0);
  }
  circle(75, 355, 35);

  //green
  if (stoplichtkleur == 2) {
    fill(0, 255, 0);
  }
  else {
    fill(0, 55, 0);
  }

  circle(75, 405, 35);

  fill(90);
  rect(67, 430, 15, 70);


  fill(0);
  text('4. Beweeg de eightball met WASD of de pijltjestoetsen', 360, 20);
  fill(0);
  circle(d, c, 150);
  fill(255);
  circle(d, c, 105);
  fill(0);
  textSize(35);
  text('8', d - 10, c + 10);

  let speed = 10

  if (keyIsDown(87) === true) {
    c -= speed;
  }
  if (keyIsDown(83) === true) {
    c += speed;
  }
  if (keyIsDown(65) === true) {
    d -= speed;
  }
  if (keyIsDown(68) === true) {
    d += speed;
  }

  if (c < -50) {
    c = height + 50;
  }

  if (c > height + 50) {
    c = -50;
  }


  if (d < -100) {
    d = width;
  }
  if (d > width) {
    d = -100;
  }

}


