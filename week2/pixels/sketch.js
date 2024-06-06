let img;
function preload(){
  img = loadImage('https://meteodar.github.io/creative-coding/week2/pixels/Spiderman.jpg');
}

function setup() {
  createCanvas(800, 800);
  img.loadPixels()
}

function draw() {
  background(220);
image(img,10,10,100,100);
}