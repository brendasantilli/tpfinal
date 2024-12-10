class Juego {
  constructor(cantidadAliens, cantidadPersonajes) {
    this.estado = "inicio";
    this.cantidadAliens = cantidadAliens;
    this.cantidadPersonajes = cantidadPersonajes;
    this.aliens = [];
    this.balas = [];
    this.personajes = [];
    this.principal = new Principal(this, width / 2, height / 2);
    this.configurarJuego();
  }

  configurarJuego() {
    this.aliens = [];
    this.personajes = [];
    this.balas = [];
    this.crearAliens();
    this.crearPersonajes();
    this.crearNave();
  }

  dibujar() {
    if (this.estado === "inicio") {
      this.principal.dibujarInicio();
    } else if (this.estado === "juego") {
      image(imgGranja, 0, 0, width, height);
      this.nave.dibujar();
      this.dibujarAliens();
      this.dibujarBalas();
      this.dibujarPersonajes();
    } else if (this.estado === "perdiste") {
      this.principal.dibujarPerdiste();
    } else if (this.estado === "ganaste") {
      this.principal.dibujarGanaste();
    }
  }

  crearAliens() {
    for (let i = 0; i < this.cantidadAliens; i++) {
      let x = random(width);
      let y = random(-200, 0);
      this.aliens.push(new Alien(x, y));
    }
  }

  crearPersonajes() {
    for (let i = 0; i < this.cantidadPersonajes; i++) {
      let x = random(width - 50);
      let y = random(height - 100, height - 50);
      this.personajes.push(new Personaje(x, y));
    }
  }

  crearNave() {
    this.nave = new Nave(width / 2, height - 180, this);
  }

  actualizar() {
    this.verificarSecuestros();
    this.verificarAliensDisparados();

    if (this.verificarPerdiste()) {
      this.estado = "perdiste";
    } else if (this.verificarGanaste()) {
      this.estado = "ganaste";
    }
  }

  verificarColision(alien, personaje) {
    let distancia = dist(alien.posX, alien.posY, personaje.posX, personaje.posY);
    return distancia < 40;
  }

  verificarSecuestros() {
    for (let i = 0; i < this.aliens.length; i++) {
      if (this.aliens[i].vida) {
        for (let j = 0; j < this.personajes.length; j++) {
          if (!this.personajes[j].rescatado && this.verificarColision(this.aliens[i], this.personajes[j])) {
            this.personajes[j].rescatado = true;
          }
        }
      }
    }
  }

  verificarAliensDisparados() {
    for (let i = 0; i < this.aliens.length; i++) {
      for (let j = 0; j < this.balas.length; j++) {
        if (this.aliens[i].fueDisparado(this.balas[j])) {
          this.aliens[i].vida = false;
          this.balas[j].disparada = false;
        }
      }
    }
  }

  verificarPerdiste() {
    for (let i = 0; i < this.personajes.length; i++) {
      if (!this.personajes[i].rescatado) {
        return false;
      }
    }
    return true;
  }

  verificarGanaste() {
    for (let i = 0; i < this.aliens.length; i++) {
      if (this.aliens[i].vida) {
        return false;
      }
    }
    return true;
  }


  reiniciar() {
    this.estado = "inicio";
    this.configurarJuego();
  }

  dibujarAliens() {
    for (let i = 0; i < this.aliens.length; i++) {
      this.aliens[i].dibujar();
    }
  }

  dibujarBalas() {
    for (let i = 0; i < this.balas.length; i++) {
      this.balas[i].dibujar();
    }
  }

  dibujarPersonajes() {
    for (let i = 0; i < this.personajes.length; i++) {
      if (!this.personajes[i].rescatado) {
        this.personajes[i].dibujar();
      }
    }
  }

  dispararBala(x, y) {
    this.balas.push(new Bala(x, y));
  }

  teclaPresionada(keyCode) {
    this.nave.teclaPresionada(keyCode);
  }

  teclaSoltada(keyCode) {
    this.nave.teclaSoltada(keyCode);
  }
}
