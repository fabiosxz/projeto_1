function setup() {
  createCanvas(1000, 800); 
  background('blue');
}

function draw() {

  fill('black');
  stroke('lighyelow');
 if (mouseIsPressed) 
  rect(mouseX,mouseY,30,50);
}
