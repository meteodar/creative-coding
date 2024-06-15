let speedfactor = 3;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

//Background - https://www.cgtrader.com/gallery/project/ratatouille-kitchen
//Remy - https://www.hiclipart.com/free-transparent-background-png-clipart-hpvxw#google_vignette
function preload() {
  image = loadImage('https://meteodar.github.io/creative-coding/week3/3.2.follower/ratatouille_remy.jpg');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

preload
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

text("width: " + width, 30, 30);
text("height: " + height, 30, 45);
text("mouseX: " + mouseX, 30, 60);
text("mouseY: " + mouseY, 30, 75);

  //The code must use the distance formula so that 
  //once the object collides with the cursor 
  //or the player's graphic, the follower resets to 
  //a new position on the canvas.
// distance formula


}