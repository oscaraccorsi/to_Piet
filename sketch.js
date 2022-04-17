let imgLoad = 'assets/mond.jpg';

let palette = [];
let bubbles = [];

//let bubble1;
//let bubble2;

let img;
let coeff = 8;

let c1;
let fibo = [1,2, 3, 5, 8, 13, 21,34];
let many;
function preload() {
  img = loadImage(imgLoad);
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setInterval(resetSketch, 1000*900);
  img.resize(100, 200);
  img.loadPixels(); 
  
  frameRate(20);
  background(5);
  many = random(fibo);
  
  for (let i=0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i]; 
    let g = img.pixels[i+1]; 
    let b = img.pixels[i+2]; 
    let c = color(r, g, b, random(0,150));
    palette.push(c);    
  }
  
  for (let i = 0; i < many; i++) {
    
    let x = random(windowWidth/4, windowWidth-windowWidth/4 );
    let y = random(windowHeight/4, windowHeight-windowHeight/4);
    let col = random(palette);
    bubbles[i] = new Bubble (x, y, col);  
  }  
}

function draw() {
  //background(0, 0, 0, 5);
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show(); 
    
  }  
}
function resetSketch() {
  save();
  clear();
  background(0);
  bubbles = [];

  many = random(fibo);
  
  for (let i = 0; i < many; i++) {
    let x = random(windowWidth/4, windowWidth-windowWidth/4 );
    let y = random(windowHeight/4, windowHeight-windowHeight/4);
    let col = random(palette);
    bubbles[i] = new Bubble (x, y, col);  
  }  
 
}
