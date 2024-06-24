let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let y_second = 200
let phrases = ["Hi, welcome in!", "What brings you in?", 
               "The pants are this way!", 
               "The fitting room is over there!", "Have a good day!"];
let index = 0;
let debug = false;

function preload(){

 // imsge source --> https://www.timeout.com/los-angeles/shopping/
//best-shops-in-la-best-womens-clothing-boutiques
store = loadImage('https://meteodar.github.io/creative-coding/week3/time/store.jpg')
 
}



function setup() {
  createCanvas(800, 800);

  //added frameRate to slow down seconds
  frameRate(0.5);
  textSize(25);
  
}

function draw() {
  background(store);

//defining parameters for minutes operation
let sales = 500;
let returns = -200;
let s = nfp(sales, 4, 2);
let r = nfp(returns, 4, 2);
let profit = s*minute() + r*minute();


  push();

  //each hour the profit is calculated
  x_hour = map(hour(),0, 59, 50, 750);
  text("profit: " + profit, 100, 760);
  
  //each minute a hypotheetical amount for sales and items returned are calculated
  x_minute = map(minute(), 0, 59, 50, 750);
  text("sales: " + s * minute(), 100, 700)
  text("returns: " + r * minute(), 100, 730);
  noStroke();
  fill("#7a563440");
  rect(80, 650, 200, 150, 80);

  //each second a phrase is "Spoken" to a customer
  x_second = map(second(), 0, 59, 50, 650);
  y_second = map(second(), 0, 59, 50, 650);
  fill("#eee")
  text(phrases[index], x_second, y_second);
  index = int(random(phrases.length));
   
   
  pop();

  if (debug){
  text("hour: " + hour(), 50, 50);
  text("minute: " + minute(), 50, 75);
  text("second:  " + second(), 50, 100);
  }



}