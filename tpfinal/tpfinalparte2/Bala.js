class Bala {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.disparada = true;
  }

  dibujar() {
    if (this.disparada) {
      this.mover();
      fill(0);
      ellipse(this.posX, this.posY, 10, 10);
    }
  }

  mover() {
    if (this.disparada) {
      this.posY -= 5;
      if (this.posY < 0) {
        this.disparada = false;
      }
    }
  }
}
