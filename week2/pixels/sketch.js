let img;
let sampleX = 50;
let sampleY = 50; 

function preload(){
  img = loadImage('https://meteodar.github.io/creative-coding/week2/pixels/spiderman.jpg');
}

function setup() {
  createCanvas(800, 800);
  img.loadPixels()
}

function draw() {
  background(220);

  image(img,10,10,100,100);

for (let x = 0; x <= img.width; x += sampleX){
  for (let y = 0; y <= img.height; y += sampleY){
    var index = (x + y * img.width) * 4;
    var r = img.pixles[index + 0];
    var g = img.pixels[index + 1];
    var b = img.pixels[index + 2];

  }
}
}