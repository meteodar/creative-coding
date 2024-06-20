let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let xsafezone = 0;
let ysafezone = 0;
let cheese_size = 120;
let debug = false;

//Background - https://www.cgtrader.com/gallery/project/ratatouille-kitchen
//Remy - https://www.hiclipart.com/free-transparent-background-png-clipart-hpvxw#google_vignette

function preload() {
  //image source - https://www.hiclipart.com/search?clipart=ratatouille
  remy = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/Remy.png');
  //image source - https://www.cgtrader.com/gallery/project/ratatouille-kitchen
  kitchen = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/kitchen.png');
  //image source - https://stock.adobe.com/search?k=tomato+cartoon
  tomato = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/tomato.png');
  //image source - https://stock.adobe.com/images/
  //cheese-cheeses-piece-pieces-cube-cubes-png-alpha-channel-cutout-cut-path-clip-pathway-isolated-white-isolate-background-block-cheddar-chunk-
  //closeup-cubical-culinary-dutch-edam/577819307?asset_id=577819307
  cheese = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/cheese.png')
}

function setup() {
  createCanvas(1400, 986);

  x = random(width);
  y = random(height);

  xsafezone = random(10,1300);
  ysafezone = random(10,850);

}

function draw() {
background(kitchen);

textSize(30);
fill("#ffedcc");
text("score: " + score, 1250, 50);

cursor('https://meteodar.github.io/creative-coding/week3/3.2.follower/Remy.png');

//distance formula
let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

//movement
x += xspeed;
y += yspeed;

//tomato - follower
image(tomato, x - 57, y - 57);

//cheese - safe zone
image(cheese, xsafezone, ysafezone, cheese_size, cheese_size);

//follower component
if (mouseX > x){
   xspeed = speedfactor;
 }else{
   xspeed = -speedfactor;
 }

 if (mouseY > y){
   yspeed = speedfactor;
 }else{
   yspeed = -speedfactor;
 }

//tomato reset - catching Remy
 if (d < 80 ){
  score -= 1;
  x = random(width);
  y = random(height);

 }

  //tomato reset - safe zone
 if ( mouseX > xsafezone & mouseX < xsafezone + cheese_size &
  mouseY > ysafezone & mouseY < ysafezone + cheese_size){
  
  score += 1;
  //follower affect - slow down
 x -= xspeed;
 y -= yspeed 
  //reset safe zone
  xsafezone = random(10,1300);
  ysafezone = random(10,850);

 }


if (debug){
text("x: " + x, 30, 50);
text("y: " + y, 30, 80);
text("mouseX: " + mouseX, 30, 120);
text("mjouseY: " + mouseY, 30, 150);
text("d:" + d, 30, 180);
 
}

  //The code must use the distance formula so that 
  //once the object collides with the cursor 
  //or the player's graphic, the follower resets to 
  //a new position on the canvas.
// distance formula


}