class Df {

  constructor() {
    this.r = 150;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 14;
  }

  show() {
    image(tImg, this.x, this.y, this.r, this.r);

    
  }

}