function setup() {
  createCanvas(1200, 1200);
  noLoop();
  noFill();

}

function draw() {
  let c = color(random(["#d05098","#d77e35","#d74941"]));

  background("#ede8e6");

  translate (175, 175);

  for (let x = 0; x < 17; x++){
    for (let y = 0; y < 17; y++){
     push();
     
     //distance between squares
     translate (x * 50, y * 50);

    //backgroud squares qualities
     stroke("#8fc6ae");
     strokeWeight(3);


     //background squares
     square(0,0,30);


     //distance between squares
     translate(x * random(-25,-65), y * random(-25,-65));

     //foreground squares qualities
     stroke(random([c,"#d05098","#d77e35","#d74941"]));
     c.setAlpha(random(20,200));
     

     //foreground squares
     square (300,280,30)


     pop();

    }

  }  

}