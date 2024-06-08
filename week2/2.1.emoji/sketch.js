function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  rectMode(CENTER);
  ellipseMode(CORNER);

  //The Letter
  fill("#eee");
  stroke("#888");
  rotateY(frameCount * 0.01);
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
  triangle(-74,-50,0,55,74,-50);

  //Heart Side 1
  ellipse (-70,-74,74,50);
  
  //Heart Side 2 
  ellipse (0,-74,70,50);
}