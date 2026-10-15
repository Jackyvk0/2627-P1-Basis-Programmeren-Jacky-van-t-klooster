// let rooms = ['Woonkamer', 'Keuken', 'Slaapkamer', 'Badkamer'];

//Begin met max honger, energie, geluk en gezondheid
let honger = 100;
let energie = 100;
let geluk = 100;
let gezondheid = 100;

let tijd = 600;

//Maak de ruimte waarin je begint de livingroom
let currentRoom = 0;

//Maak de eerste dag 0
let dag = 0;

function setup() {
  createCanvas(800, 800);

  //Button om naar links of rechts te gaan
  let buttonleft = createButton('<---')
  let buttonright = createButton('--->')
   buttonleft.position(25, 180);
   buttonleft.size(80,80);
   buttonleft.style(BOLD);
   
    buttonright.position(710, 180);
    buttonright.size(80,80);
    buttonright.style(BOLD);
}

function draw() {
  background(200);
  fill('black')
  textSize(25);
  textStyle(BOLD);
  text('Woonkamer',330, 210)

  //Boven balk
  fill('grey');
  rect(0,0,800,150);

  //Dag + tijd teller en als tijd 23:59 is, tijd = 00:00 en dag +1
  fill(250,0,0,40)
  strokeWeight(5)
  rect(20,65,80,30,2);

  strokeWeight(1);
  fill('white')
  textFont('Arial');
  textStyle(NORMAL);
  text('Dag ' + dag, 20, 40)
  text(round(tijd), 30, 90)

  tijd = tijd + 0.2
  
  if (tijd > 2399) {
    tijd = 0
    dag++
  }

  //Vakken met honger,energie, geluk en gezondheid
  fill('lightblue')
  square(180,25,100,5);
    square(300,25,100,5);
      square(420,25,100,5);
        square(540,25,100,5);

        fill('yellow')
        textSize(21);
        text('honger' + round(honger),180,80);

        textSize(20);
        text('energie' + round(energie),300,80);

        textSize(24);
        text('geluk' + round(geluk),420,80);

        textSize(20);
        text('gezondheid' + round(gezondheid),540,80);


//Honger die vermindert over tijd
  honger = honger - 0.0050

  if (honger <= 0) {
    honger = 0
  }

  //Energie die vermindert over tijd
  energie = energie - 0.00214

  if (energie <= 0) {
    energie = 0
  }

  //Geluk die vermindert over tijd
  geluk = geluk - 0.0040

  if (geluk <= 0) {
    geluk = 0
  }

  //Gezondheid die vermindert over tijd
  gezondheid = gezondheid - 0.0020

  if (gezondheid <= 0) {
    gezondheid = 0
  }


}


