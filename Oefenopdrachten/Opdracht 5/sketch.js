let kleuren = []
let kleuren2 = [0,60,120,180,255]
let kleuren3 = ['black','darkgreen','green','lime']
let kleuren4 = ['cyan','blue', 'darkblue', 'black']
let kleuren6 = ['red','white','red','white','red','white','red','white','red', 'white','red','white']
let kleuren7 = ['white','grey','white','grey','white','grey','white','grey','white','grey','white','grey','white','grey','white','grey','white','grey','white','grey','white','grey']

function setup() {
  createCanvas(800, 400);
  for (let index = 0; index < 10; index++) {
    kleuren.push('white')    
  }
  kleuren[6
  ]='blue';
}

function draw() {
  strokeWeight(1);
  background(220);
  fill('black')
  text('7.',625,105);
  text('6.',350,105);
  text('5.',540,20);
  text('4.',80,205);
  text('3.',80,105);
  text('2.',20,105);
  text('1.',20,15);

//1. 10 blokjes op een rij

    for(let Nummer1 = 0; Nummer1 < kleuren.length; Nummer1++){  
      fill(kleuren[Nummer1]);
      rect(Nummer1 * 50 +20,20,50,50);   
    }

//2. 5 blokjes onder elkaar

    for(let Nummer2 = 0; Nummer2 < 5; Nummer2++){  
      fill(kleuren2[Nummer2]);
      rect(15,50 * Nummer2 +110 ,50,50);   
    }

//3. 4 blokjes naast elkaar

    let x3 = 80;
    let width3 = 30;
      for(let Nummer3 = 0; Nummer3 < 4; Nummer3++){  
      fill(kleuren3[Nummer3])
      rect(x3 ,110,width3,50); 
      x3 += width3;
      width3 += 25;
      }

 //4. 4 blauwe blokjes naast elkaar
 
   let x4= 80;
    let width4 = 30;
    let height4 = 50;
      for(let Nummer4 = 0; Nummer4 < 4; Nummer4++){  
      fill(kleuren4[Nummer4])
      rect(x4,210,width4,height4); 
      x4 += width4;
      height4 + width4;
      width4 += 25;
      height4 += 25;

    }
  
//5. 6 cirkels naast elkaar

    for(let Nummer5 = 0; Nummer5 < 5; Nummer5++){  
      fill('white');
      strokeWeight(Nummer5 *3);
      circle((Nummer5 * 50) +560,45,35);   
    }

//6. Bullseye

 for(let Nummer6 = 11; Nummer6 > 0; Nummer6--){  
   fill(kleuren6[Nummer6 -1]);
   strokeWeight(1);
   circle(500,215,(Nummer6 * 25));   
 }


//7. Accordeon
let x7 = 650;
let width7 = 25;
for(let Nummer7 = 21; Nummer7 > 9; Nummer7--){  
   fill(kleuren7[Nummer7]);
   strokeWeight(1);
   rect(650,110,width7,(Nummer7 * 10));   
   x7 += width7;
   width7 += 5;
 }



  }


