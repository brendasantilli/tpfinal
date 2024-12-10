class Principal {
  constructor(juego, x, y) {
    this.juego = juego;
    this.x = x;
    this.y = y;
    this.bienvenida = "¡Bienvenido a Aliens vs Vacas!";
    this.conflicto = "Los aliens están invadiendo nuestro campo y necesitamos tu ayuda.";
    this.instrucciones = "Tienes que eliminar a los aliens y\nevitar que se lleven a todas las vaquitas.\nMovete con las flechas de derecha a izquierda\ny apretá la barra espaciadora para disparar.";
    this.perdiste = "¡Perdiste! Los aliens secuestraron a todas las vaquitas.";
    this.ganaste = "¡Ganaste! Salvaste a las vaquitas del ataque alienígena.";
    this.reiniciar = "¿Querés volver a jugar?";
    this.creditos = "Un juego hecho: Santilli Brenda y Roberts Alexia";
    this.botonX = this.x - 100;
    this.botonY = this.y + 100;
    this.botonAncho = 200;
    this.botonAlto = 50;
  }

  dibujarInicio() {
    background(120, 40, 140);
    textSize(36);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.bienvenida, this.x, this.y - 150);
    textSize(20);
    text(this.conflicto, this.x, this.y - 100);

    fill(50, 50, 50, 150);
    rect(this.x - 200, this.y - 60, this.botonAncho + 200, this.botonAlto + 80, 20);

    let padding = 20;
    let margenX = this.x - 200 + padding;
    let margenY = this.y - 60 + padding;
    let anchoTexto = this.botonAncho + 200 - 2 * padding;
    let altoTexto = this.botonAlto + 80 - 2 * padding;

    textSize(18);
    fill(255);
    textAlign(CENTER, TOP);
    textWrap(WORD);
    text(this.instrucciones, margenX, margenY, anchoTexto, altoTexto);

    this.dibujarBoton();
  }


  dibujarPerdiste() {
    background(255, 102, 102);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.perdiste, this.x, this.y - 50);
    textSize(28);
    text(this.reiniciar, this.x, this.y + 30);
    this.dibujarBoton();
    text(this.creditos, this.x, this.y + 200);

    if (!sonidoPerdiste.isPlaying()) {
      sonidoPerdiste.play();
    }
  }

  dibujarGanaste() {
    background(141, 182, 0);
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    text(this.ganaste, this.x, this.y - 50);
    textSize(28);
    text(this.reiniciar, this.x, this.y + 30);
    this.dibujarBoton();
    text(this.creditos, this.x, this.y + 200);

    if (!sonidoGanaste.isPlaying()) {
      sonidoGanaste.play();
    }
  }

  dibujarBoton() {
    fill(0);
    rect(this.botonX, this.botonY, this.botonAncho, this.botonAlto, 20);
    fill(255);
    textSize(18);
    textAlign(CENTER, CENTER);
    text("Jugar", this.botonX + this.botonAncho / 2, this.botonY + this.botonAlto / 2);
  }
  
  mousePressed() {
    if (mouseX > this.botonX &&
      mouseX < this.botonX + this.botonAncho &&
      mouseY > this.botonY &&
      mouseY < this.botonY + this.botonAlto) {
      console.log("Botón presionado");
      this.juego.reiniciar();
      this.juego.estado = "juego";
    }
  }
}
