var symbol;

function setup () {
  createCanvas(
    window.innerHeight,
    window.innerWidth  
  );
  background(0);
  symbol = newSymbol(
    width / 2,
    height / 2
  );
  symbol.setToRandomSymbol();
}

function draw () {
  symbol.render();
}

function Symbol (x,y) {
  this.x = x;
  this.y = y;
  this.value = value;
  
  this.setToRandomSymbol = function() {
    this.value = String.fromCharCode(
      0x30A0 + round(random(0, 96))
    );
  }
  
  this.render = function() {
    fill(0,255, 70);
    text(this.value, this.x, this.y);
  }
}