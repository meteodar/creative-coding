
let x = 0
let y = 0
let xspeed = 3
let yspeed = 3
//obtained the color profile from https://open.spotify.com/artist/25uiPmTg16RbhZWAqwLBy5 
//and referenced https://www.youtube.com/watch?v=VIQoUghHSxU for array set up

let albumTitle = ["charli", "how i'm feeling now","crash","brat"];
      //text.fill(random(["#000","#c6c6c6","#ed462f","#000"]));



function setup() {
  createCanvas(400, 300);
  textSize(20); 

fill(random(["#000","#c6c6c6","#ed462f","#000"]));




    
}

function draw() {
  background(220);

  text(random(albumTitle), 160, 180);

  square(x,y,80);



  if (x > 320 | x < 0){
    xspeed = -xspeed;
      fill(random(["#8c8680","#fff","#3a9fdb","#8bcf18"]));
      

    }

    if (y > 220 | y < 0){
    yspeed = -yspeed;
       fill(random(["#8c8680","#fff","#3a9fdb","#8bcf18"]));   

   }
  

 x += xspeed
 y += yspeed

}