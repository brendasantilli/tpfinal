class Nave {
  constructor(x, y, juego) {
    this.posX = x;
    this.posY = y;
    this.juego = juego;
    this.movIzquierda = false;
    this.movDerecha = false;
  }

  dibujar() {
    image(imgNave, this.posX - 25, this.posY - 10, 80, 50);
    this.actualizarMovimiento();
  }

  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.movIzquierda = true;
    } else if (keyCode === RIGHT_ARROW) {
      this.movDerecha = true;
    } else if (keyCode === 32) {
      this.disparar();
    }
  }

  teclaSoltada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.movIzquierda = false;
    } else if (keyCode === RIGHT_ARROW) {
      this.movDerecha = false;
    }
  }

  actualizarMovimiento() {
    if (this.movIzquierda) {
      this.posX -= 5;
    }
    if (this.movDerecha) {
      this.posX += 5;
    }
  }

  disparar() {
    this.juego.dispararBala(this.posX + 25, this.posY);
    if (sonidoBala.isLoaded()) {
      sonidoBala.play();
    }
  }
}
