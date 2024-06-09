function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  rectMode(CENTER);
  ellipseMode(CORNER);

  //The Letter
  fill("#eee");
  stroke("#888");
  translate (200,200);
  rect(0,0,300,200);

  //Top Left Thick Line 
  stroke("#000");
  strokeWeight(5);
  line(-148,-97,0,0);

  //Top Right Thick Line
  line(148,-97,0,0);

  //Bottom Left Thin Line
  stroke("#888");
  strokeWeight(2);
  line(0,0,-148,97);

  //Bottom Right Thin Line
  line(0,0,148,97)

  //Bottom of Heart(triangle)
  fill("#d61a03");
  stroke("#d61a03");
  triangle(-69,-50,0,50,69,-50);

  //Heart Side 1
  ellipse (-70,-80,74,47);
  
  //Heart Side 2 
  ellipse (0,-80,70,47);
}