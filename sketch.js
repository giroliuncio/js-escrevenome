//variaveis da bolinha
let xBolinha=300;
let yBolinha=200;
let diametro=15;
let raio=diametro/2;

//velocidade da bolinha
let velocidadexBolinha=4;
let velocidadeyBolinha=4;

//variaveis da raquete
let xRaquete=5;
let yRaquete=150;
let larguraRaquete=10;
let alturaRaquete=85;
let colidiu=false;

//variaveis do oponente
let xRaqueteOponente=585
let yRaqueteOponente=150;
let velocidadeyOponente;

//placar
let meusPontos=0;
let pontosDoOponente=0;

//sons
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha=loadSound("trilha.mp3");
  ponto=loadSound("ponto.mp3");
  raquetada=loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw(){
  background(5);
  mostrarBolinha();
  velocidadeBolinha();
  colisaoBolinha();
  mostrarRaquete(xRaquete,yRaquete);
  mostrarRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentarMinhaRaquete();
  movimentarRaqueteOponente();
  //colisaoRaquete();
  verificaColisaoRaquete(xRaquete,yRaquete);
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostrarBolinha(){
  circle(xBolinha,yBolinha,diametro);
}

function velocidadeBolinha(){
  xBolinha+=velocidadexBolinha
  yBolinha+=velocidadeyBolinha
}

function colisaoBolinha(){
  if(xBolinha+raio > width||xBolinha-raio < 0){
    velocidadexBolinha*=-1;
  }
  if(yBolinha+raio > height||yBolinha-raio < 0){
    velocidadeyBolinha*=-1;
  }
}

function mostrarRaquete(x,y){
    rect(x,y,larguraRaquete,alturaRaquete);
}

function movimentarMinhaRaquete(){
  if(keyIsDown(UP_ARROW)){yRaquete-= 10;}
  if(keyIsDown(DOWN_ARROW)){yRaquete+= 10;}
} 

function colisaoRaquete(){
  if(xBolinha-raio < xRaquete+larguraRaquete && yBolinha-raio < yRaquete+alturaRaquete && yBolinha+raio > yRaquete){velocidadexBolinha*=-1;}
}

function verificaColisaoRaquete(x,y){
  colidiu=  collideRectCircle(x,y,larguraRaquete,alturaRaquete,xBolinha,yBolinha,raio);
 if(colidiu){
   velocidadexBolinha*=-1;
   raquetada.play();
 }
}

function movimentarRaqueteOponente(){
  if(keyIsDown(87)){yRaqueteOponente-= 10;}
  if(keyIsDown(83)){yRaqueteOponente+= 10;}
}

function incluiPlacar(){
  textAlign(CENTER);
  textSize(35);
  rect(120,5,68,40);
  text(meusPontos,153,35);
  rect(415,5,70,40);
  text(pontosDoOponente,449,35);
}

function marcaPonto(){
  if(xBolinha > 592){meusPontos+=1;ponto.play();}
  if(xBolinha < 8){pontosDoOponente+=1;ponto.play();}
}