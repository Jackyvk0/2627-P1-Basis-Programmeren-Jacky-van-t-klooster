function setup() {
  createCanvas(380, 350);
}

function draw() {
  background(220);
  fill(0);

  //tekst voor alle plekken nummers
  text('1.',20,15);
  text('2.',20,100);
  text('3.',20,190);
  text('4.',20,250);
  text('5.',120,15);
  text('6.',120,100);
  text('7.',120,190);
  text('8.',120,280);
  text('9.',240,15); 
  
  //Alle kleuren variabel
  let kleuren = ['red','green','blue','purple','yellow']

//1. Kleuren in een array
   for(let Nummer1 = 0; Nummer1 < kleuren.length; Nummer1++){  
      fill(kleuren[Nummer1]);
      textSize(10);
      text(kleuren[Nummer1],30, 15 * Nummer1 +20); 
    }


//2. Pas de array aan met pop
for(let Nummer2 = 0; Nummer2 < kleuren.length; Nummer2++){  
  fill(kleuren[Nummer2]);
  text(kleuren[Nummer2],30, 15 * Nummer2 +110); 
}

kleuren.shift(0);
kleuren.push(0);

//3. Twee kleuren weghalen





//4. Getallen filteren




}
