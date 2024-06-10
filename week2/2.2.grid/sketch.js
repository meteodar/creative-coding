function setup() {
  createCanvas(1200, 1200);
  noLoop();
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  // repositioning grid
  translate(180,180);

  //random();

  for (let x = 0; x < 8; x++){
    for (let y = 0; y < 8; y++){
      push();

      // space between circles
      translate(x * 120, y * 120);

      // inner circle color 
      fill ("#f0d31f");

      stroke(1);

      // inner circle "sun"
      ellipse(0,0,60,60);

      // outer circle color 
      fill("#003bc9");


      // outer circle "moon"
      arc(0,0,100,100,random ([0,45,90,135,180]),random ([0,45,90,135,180]));

      pop();
    }
  }
}