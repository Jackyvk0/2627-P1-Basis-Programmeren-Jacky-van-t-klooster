//Wat is de hudige vraag?
let huidigeVraag = 0;

//De score van hoeveel goed gemaakt
let score = 0;

//Alle vragen in een array
let alleVragen =[

{
  vraag: "1. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

  {
  vraag: "2. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

 {
  vraag: "3. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

{
  vraag: "4. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

 {
  vraag: "5. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

 {
  vraag: "6. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

{
  vraag: "7. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

{
  vraag: "8. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},
{
  vraag: "9.Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},
{
  vraag: "10. Is het donerdag?",
  keuze: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
 }

]
function setup() {
  createCanvas(800, 600);

  //Alle keuzen knoppen maken
  let button1 = createButton('keuze');
  let button2 = createButton('keuze2');
  let button3 = createButton('keuze3');
  let button4 = createButton('keuze4');

  // let button5 = createButton('Volgende');


//De positie en grootte van alle knoppen
  button1.position(180,300);
  button1.size(200,100);

  button2.position(180,400);
  button2.size(200,100);

  button3.position(380,400);
  button3.size(200,100);

  button4.position(380,300);
  button4.size(200,100);

  //Volgende knop
  // button5.position(700,540);
  // button5.size(70,30);
}

function draw() {
  background('darkgreen');
text(alleVragen.vraag,90,200);
textSize(50);








  
}
