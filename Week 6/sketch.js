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

  frameRate(30);
  //Button om van kamer te verwisselen
  let buttonleft = createButton('<---')
  let buttonright = createButton('--->')

   buttonleft.position(25, 180);
   buttonleft.size(80,80);
   buttonleft.style(BOLD);
  //  buttonleft.mousePressed()
   
    buttonright.position(710, 180);
    buttonright.size(80,80);
    buttonright.style(BOLD);
    //  buttonright.mousePressed()
}

function draw() {
  background(200);
  fill('black')
  textSize(25);
  textStyle(BOLD);
  text('Woonkamer',330, 210)
  strokeWeight(2);

  //Boven balk
  fill('grey');
  rect(0,0,800,150);

  //Vakken met honger,energie, geluk en gezondheid
  fill('lightblue')
  square(180,25,100,5);
    square(300,25,100,5);
      square(420,25,100,5);
        square(540,25,100,5);

        fill('yellow')
        textSize(21);
        text('honger ' + round(honger),180,80);

        textSize(20);
        text('energie ' + round(energie),300,80);

        textSize(24);
        text('geluk ' + round(geluk),420,80);

        textSize(20);
        text('gezondheid ' + round(gezondheid),540,80);


//Honger die vermindert over tijd

honger = honger - 0.0110

if (honger <= 0) {
  honger = 0
}

  //Energie die vermindert over tijd
  energie = energie - 0.00814
  
  if (energie <= 0) {
    energie = 0
  }
  
  
  //Geluk die vermindert over tijd
  geluk = geluk - 0.0100
  
  if (geluk <= 0) {
    geluk = 0
  }
  
  //Gezondheid die vermindert over tijd
  gezondheid = gezondheid - 0.0080
  
  if (gezondheid <= 0) {
    gezondheid = 0
  }

  //Als een van de waardes 0 is dan game over
  if (honger == 0 || energie == 0 || geluk == 0 || gezondheid == 0) {
  textSize(100);
  fill('red');
  strokeWeight(4);
  text('GAMEOVER!', 100, 400);

}

//"Personage"

// if (honger > 60 || energie > 60 || geluk > 60 || gezondheid > 60) {
//   text("Blij",200,500)
// } else if (honger > 31 && honger < 59 || energie > 31 && honger < 59 || geluk > 31 && geluk < 59 || gezondheid > 31 && geluk < 59) {
//   text("Meh",200,500)
// } else if (honger < 30 && honger > 1 || energie < 30 && energie > 1 || geluk < 30 && geluk > 1|| geluk < 30 && geluk > 1) {
//   text("sip",200,500)
// }


//Dag + tijd teller
let nu = new Date();
let tijdDate = nu.getDate();
let tijdUren = nf(nu.getHours(), 2);
let tijdMinuten = nf(nu.getMinutes(), 2);
let tijdSeconden = nf(nu.getSeconds(), 2);

fill(250,0,0,40)
strokeWeight(5)
rect(30,55,110,30,2);

 textSize(25);
 fill('white');
 text(tijdUren, 35, 79)
  text(tijdMinuten, 70, 79);
    text(tijdSeconden, 105, 79);

 text(tijdDate + ' Oktober', 20, 40)
 
}



