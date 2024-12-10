
function botonSiguiente() {
  botonSigX = width - 120;
  botonesY = height - 60;
  fill(255, 182, 193);
  rect(botonSigX, botonesY, anchoBotones, altoBotones);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Siguiente", botonSigX, botonesY);
}

function dibujarBotonesDecision() {
  let decisionY = height - 100;
  let botonA_X = width / 2 - 70;
  let botonB_X = width / 2 + 70;
  fill(216, 191, 216);
  rect(botonA_X, decisionY, anchoBotones, altoBotones);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Opción A", botonA_X, decisionY);
  fill(216, 191, 216);
  rect(botonB_X, decisionY, anchoBotones, altoBotones);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Opción B", botonB_X, decisionY);
}

function botonReiniciar(){
  stroke(0);
  fill(255);
  rectMode(CENTER);
  rect(width / 2, height/2 + 150, anchoBotones+20, altoBotones);
  noStroke();
  fill(0);
  textSize(15);
  text("Volver a jugar", width / 2, height / 2 + 145);
}
