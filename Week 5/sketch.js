

let huidigeVraag = 0;
let alleVragen =[
{
  vraag: "1. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

  {
  vraag: "2. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

 {
  vraag: "3. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

{
  vraag: "4. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

 {
  vraag: "5. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

 {
  vraag: "6. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

{
  vraag: "7. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},

{
  vraag: "8. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},
{
  vraag: "9.Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
},
{
  vraag: "10. Is het donerdag?",
  keuzes: ["Ja","Nee","Misschien","Weet niet"],
  correct: 0
}

]
function setup() {
  createCanvas(800, 600);
  let button1 = createButton('keuze');
  let button2 = createButton('keuze2');
  let button3 = createButton('keuze3');
  let button4 = createButton('keuze4');

  button1.position(150,300);
  button1.size(200,100);

  button2.position(150,420);
  button2.size(200,100);

  button3.position(380,420);
  button3.size(200,100);

  button4.position(380,300);
  button4.size(200,100);

}

function draw() {
  background('darkgreen');
text(alleVragen,90,200);
textSize(50);








  
}
