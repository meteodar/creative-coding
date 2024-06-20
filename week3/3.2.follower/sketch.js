let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let debug = true;

//Background - https://www.cgtrader.com/gallery/project/ratatouille-kitchen
//Remy - https://www.hiclipart.com/free-transparent-background-png-clipart-hpvxw#google_vignette

function preload() {
  //image source - https://www.hiclipart.com/search?clipart=ratatouille
  remy = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/Remy.png');
  //image source - https://www.cgtrader.com/gallery/project/ratatouille-kitchen
  kitchen = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/kitchen.png');
  //image source - https://stock.adobe.com/search?k=tomato+cartoon
  tomato = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/tomato.png');
}

function setup() {
  createCanvas(1400, 986);

  x = random(width);
  y = random(height);

}

function draw() {
background(kitchen);
cursor('https://meteodar.github.io/creative-coding/week3/3.2.follower/tomato.png');

//distance formula
let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

//movement
x += xspeed;
y += yspeed;

//tomato
image(remy, x - 49, y - 108);



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

 if (d < 80 ){
  score += 1;
  x = random(width);
  y = random(height);

 }

if (debug){
textSize(30);
fill("#ffedcc");
text("x: " + x, 30, 50);
text("y: " + y, 30, 80);
text("mouseX: " + mouseX, 30, 120);
text("mouseY: " + mouseY, 30, 150);
text("d:" + d, 30, 180);
text("score:" + score, 1250, 50);
 
}

  //The code must use the distance formula so that 
  //once the object collides with the cursor 
  //or the player's graphic, the follower resets to 
  //a new position on the canvas.
// distance formula


}