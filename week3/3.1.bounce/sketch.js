
let x = 0;
let y = 0;
let z = 360;
let r = 20;
let xspeed = 3;
let yspeed = 3;
let zspeed = 3;
let rspeed = 3;

//obtained the color profile from https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5 
//and referenced https://www.youtube.com/watch?v=VIQoUghHSxU for array set up

let albumTitle = ["charli", "how i'm feeling now", "crash", "brat"];
let index = 0



function setup() {
  createCanvas(400, 300);
  textSize(20); 
    
}

function draw() {
  background(220);

  text(albumTitle[index], z, r);

  
  square(x,y,80);


  //square movement & chang
  if (x > 320 | x < 0){
    xspeed = -xspeed;
      fill(random(["#8c8680","#fff","#3a9fdb","#8bcf18"]));  

    }

    if (y > 220 | y < 0){
    yspeed = -yspeed;
       fill(random(["#8c8680","#fff","#3a9fdb","#8bcf18"]));

   }

  //text movement & change
    if (z > 360 | z < 0){
    zspeed = -zspeed
      fill(random(["#000","#c6c6c6","#ed462f"]));
  } 
    //attempt at changing text
  /* else if(z > 360 | z < 2) {
        text([index], z, r);
     } else if(z > 360 | z < 3) {
      text(albumTitle[3], z, r);

     }else if(z > 360 | z < 4) {
      text(albumTitle[2], z, r);

     }else if(z > 360 | z < 5) {
      text(albumTitle[1], z, r);

     }else if(z > 360 | z < 6) {
      text(albumTitle[0], z, r);

     }*/


    if (r > 300 | r < 10){
    rspeed = -rspeed
      fill(random(["#000","#c6c6c6","#ed462f"]));
   } /*else if(r > 300 | r < 11) {
        text([index], z, r);
     } else if(r > 300 | r < 12) {
      text(albumTitle[3], z, r);

     }else if(r > 300 | r < 13) {
      text(albumTitle[2], z, r);

     }else if(r > 300 | r < 14) {
      text(albumTitle[1], z, r);

     }else if(r > 300 | r < 15) {
      text(albumTitle[0], z, r);

     }

 if (index > 3){
  index = 0;
}*/

     
  

 x += xspeed
 y += yspeed
 z += zspeed
 r += rspeed

}