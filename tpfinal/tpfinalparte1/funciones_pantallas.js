
function PantallaInicio() {
  background(255, 182, 193);
  fill(0);
  textAlign(CENTER);
  textSize(32);
  text("Kiki's Delivery Service", width / 2, height / 2 - 50);
  fill(255);
  rectMode(CENTER);
  rect(width / 2, height / 2 + 20, 150, 50);
  fill(0);
  textSize(20);
  text("Iniciar", width / 2, height /2 +25);
}

function dibujarPantallas() {
  image(imagenes[pantallaActual], 0, 0, width, height);
  let padding = 30;
  let texto = textos[pantallaActual];
  let anchoTextoMaximo = 580;
  let rectX = width / 2;
  let rectY = height - 200;
  fill(0, 0, 0, 150);
  noStroke();
  rectMode(CENTER, CENTER);
  rect(rectX, rectY, anchoTextoMaximo + padding, 80 + padding);
  fill(255);
  textSize(20);
  textAlign(CENTER, TOP);
  textWrap(WORD);
  text(texto, rectX, rectY - padding, anchoTextoMaximo);
}

function PantallaCreditos() {
  background(216, 191, 216);
  fill(255, 50, 100);
  textAlign(CENTER, TOP);
  textSize(45);
  text("Kiki's Delivery Service", width / 2, 100);
  fill(255);
  textSize(35);
  text("de Hayao Miyazaki", width / 2, 160);
  textSize(20);
  text("Una aventura gráfica de", width / 2, 230 );
  fill(50);
  textSize(30);
  text("Alexia Roberts", width / 2, 270 );
  text("Brenda Santilli", width / 2, 300);
}

function irPantallaSiguiente() {
  if (pantallaActual === 17) {
    pantallaActual = 7;
  } else  if (pantallaActual === 7 || Pantallas[pantallaActual] === 10 || Pantallas[pantallaActual] === 14) {
    pantallaActual = 18;
  } else if (pantallaActual < 18) {
    pantallaActual++;
  }
}
