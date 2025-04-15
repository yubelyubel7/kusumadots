function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
  noStroke();
  frameRate(5);
     background(255, 220, 0);

}


function draw() {
  background(240, 210, 0);
  for (let i=0; i<70; i++) {
   fill (0);
   ellipse(random(width), random(height), random(200));
  }
  //noLoop(50);
}