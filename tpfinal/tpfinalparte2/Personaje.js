class Personaje {
  constructor(x, y) {
    this.posX = x;
    this.posY = y;
    this.rescatado = false;
  }

  dibujar() {
    if (!this.rescatado) {
      image(imgVaca, this.posX - 10, this.posY - 10, 80, 80);
    }
  }
}
