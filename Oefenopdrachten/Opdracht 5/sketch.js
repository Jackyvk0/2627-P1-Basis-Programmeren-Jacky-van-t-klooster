let kleuren = []
let kleuren2 = [0,60,120,180,255]
let kleuren3 = ['black','darkgreen','green','lightgreen']
function setup() {
  createCanvas(800, 400);
  for (let index = 0; index < 10; index++) {
    kleuren.push('white')    
  }
  kleuren[6
  ]='blue';
}

function draw() {
  background(220);
  fill('black')
  text('6.',625,105);
  text('6.',350,105);
  text('5.',540,20);
  text('4.',80,205);
  text('3.',80,105);
  text('2.',20,105);
  text('1.',20,15);

    for(let Nummer1 = 0; Nummer1 < kleuren.length; Nummer1++){  
      fill(kleuren[Nummer1]);
      rect(Nummer1 * 50 +20,20,50,50);   
    }

    for(let Nummer2 = 0; Nummer2 < 5; Nummer2++){  
      fill(kleuren2[Nummer2]);
      rect(15,50 * Nummer2 +110 ,50,50);   
    }


    let x = 80;
    let width = 30;
      for(let Nummer3 = 0; Nummer3 < 4; Nummer3++){  
      fill(kleuren3[Nummer3])
      rect(x ,110,width,50); 
      x += width;
      width += 22;
      // rect(Nummer3 *80 +80 ,110,Nummer3* 30 + 20,50); 
        

 }

 
}