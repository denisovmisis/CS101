let of;
let uImg;
let tImg;
let bImg;
let dfs = [];


function preload() {
  const options = {
    probabilityThreshold: 0.95
  };
  uImg = loadImage('of.png');
  tImg = loadImage('df.png');
  bImg = loadImage('background.jpg');
}

function setup() {
  createCanvas(800, 450);
  of = new Of();
  }

function keyPressed() {
  if (key == ' ') {
    of.jump();
  }
}

function draw() {
  if (random(1) < 0.005) {
    dfs.push(new Df());
  }
  
  background(bImg);
  for (let d of dfs) {
    d.move();
    d.show();
    if (of.hits(d)) {
      console.log('game over');
      noLoop();
    }
  }
  of.show();
  of.move();
}