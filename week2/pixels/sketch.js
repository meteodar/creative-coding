
let img; 
let sampleX = 50;
let sampleY = 50;

function preload() {
  img = loadImage('https://meteodar.github.io/creative-coding/week2/pixels/pointing_spider.JPG');

}

function setup() {
  createCanvas(850, 850);
  img.loadPixels();
  noLoop();
  
}

function draw() {
  background(250);
  
  translate (15, 200);
  //image(img, 0, 0);

//defining parameters
  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){
 
        //custom pixels
        textSize(25);
        text(random(["👉","👈","👆","👇","🕷"]),x,y, sampleX, sampleY);
        
    } 
  }

}