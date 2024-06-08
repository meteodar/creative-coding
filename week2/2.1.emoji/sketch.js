function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);

  rectMode(CENTER);

  //The Letter
  fill("#eee");
  stroke("#888");
  rotateY(frameCount * 0.01);
  rect(0,0,300,200);

  //Top Left Thick Line 
  stroke("#000");
  strokeWeight(5);
  line(-147,-97,0,0);

  //Top Right Thick Line
  line(147,-97,0,0);

  //Bottom Left Thin Line
  stroke("#888");
  strokeWeight(2);
  line(0,0,-147,97);

  //Bottom Right Thin Line
  line(0,0,147,97)

  //Bottom of Heart(triangle)
  stroke("#821002");
  fill("#d61a03");
  triangle(-74,-50,0,55,74,-50);

  //Left-Side of Heart
  //ellipse (-37,-25,-74,20);
  //rotateY(15);

  //Right Side of Heart 
  
}