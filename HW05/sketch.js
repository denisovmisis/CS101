let box;
function setup() {
  createCanvas(400, 400);
  box = new Box();
}

function keyPressed () {
  if (key == ' ') {
      box.jump();
      }
}

function draw() {
  background(220);
  box.show();
  box.move();
}