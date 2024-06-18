
let img; 
let sampleX = 60;
let sampleY = 60;

function preload() {
  img = loadImage('https://meteodar.github.io/creative-coding/week2/pixels/pointing_spider.JPG');

}

function setup() {
  createCanvas(850, 850);
  img.loadPixels();
  noLoop();
  textSize(25);
  noStroke();
  
}

function draw() {
  background(250);
  
  translate (35, 200);
  //image(img, 0, 0);

//defining parameters
  for (let x = 0; x <= img.width; x += sampleX){
    for (let y = 0; y <= img.height; y += sampleY){

      let index = (x + y * img.width) *4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];

    //custom pixels
      fill(r,g,b);

     //circle(x,y, sampleY);

    let emoji = "";

       
      if(r > 80 & r < 250){
        emoji = "👆"
       }

      if (b > 10 & b < 200){
        emoji = "👈"
      }


      if (r > 0 & r < 70){
        emoji = "👉"
      }

      
      if(b > 80 & b < 120) {
          emoji = "👇"
        }

      if(r > 105 & r < 180){
        emoji ="🕷"

      }
      
      text(emoji,x,y, sampleX, sampleY);
        
    } 
  }

}