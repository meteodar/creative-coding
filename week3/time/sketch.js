let x_hour = 50;
let x_minute = 50;
let x_second = 50;
let y_second = 200
let phrases = ["Hi, welcome in!", "What brings you in?", 
               "The pants are this way!", 
               "The fitting room is over there!", "Have a good day!"];
let index = 0;


//https://www.timeout.com/los-angeles/shopping/
//best-shops-in-la-best-womens-clothing-boutiques


function setup() {
  createCanvas(800, 800);
  frameRate(0.5);
  textSize(25);

}

function draw() {
  background(220);

let sales = 500;
let returns = -200;
let s = nfp(sales, 4, 2);
let r = nfp(returns, 4, 2);
let profit = s*minute() + r*minute();

  if (debug){
  text("hour: " + hour(), 50, 50);
  text("minute: " + minute(), 50, 75);
  text("second:  " + second(), 50, 100);
  }

  push();

  x_hour = map(hour(),0, 59, 50, 750);
  text("profit: " + profit, 600, 100);

  x_minute = map(minute(), 0, 59, 50, 750);
  text("sales: " + s * minute(), 600, 50)
  text("returns: " + r * minute(), 600, 75);

  
  x_second = map(second(), 0, 59, 50, 650);
  y_second = map(second(), 0, 59, 50, 650);
  text(phrases[index], x_second, y_second);
  index = int(random(phrases.length));

   
  pop();


}