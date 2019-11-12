/*
Equipe:
  Arthur Beserra de Oliveira - 2A(Líder)
  Suellen Medeiros Rodrigues - 2A
  Etapa 4 e 5
*/
var y = 75;
var xChoice = 240;
var choice = 1;
var telaAtiva;
var eliX = 0, eliY = 210;
var moonY=65, back=0, sunY=0;
var perg = 1, resp=0;
var gunshotY=560, ponto=0, inimigo=0;
var ship1=150, ship2=150, ship3=150;
var vida = 3;
//let milliseconds = millis();

function preload() {
  //moon = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/star.jpg');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  menu();
}

function menu(){
  background(5,5,5);
  //fo the name
  fill('#d0efff');
  textSize(50);
  text('Fast Thinking', 228.5, 90);
  //for the main text
  textSize(25);
  fill('#2a9df4');
  text('Jogar', 350, 260);
  text('Regras', 340, 400);
  //to select
  if (y == 75) {
    choice = 1;
    fill('white');
    text('Δ', 320, 260);
    text('Jogar', 350, 260);
    if(keyCode == ENTER)
      play();
  }
  if (y == 175) {
    choice = 2;
    fill('white');
    text('Δ', 310, 400)
    text('Regras', 340, 400);
    if(keyCode == ENTER)
      telaAtiva=2;
  }
  //some tips
  fill('white');
  textSize(16);
  text('[selecionar: enter]', 20, 590);
  text('[mover: setas]', 650, 590);
  //when the player presses enter
  switch (telaAtiva) {
    case 1:
      play();
      break;
    case 2:
      rules();
      break;
  }
}

function play() {
  background(back,back,back);
  if(back>=0&&back<=232){
    back+=40;
  }

  //moon
    ellipse(50, moonY+5, 50, 50);
  if(moonY>0&&sunY>=40){
    moonY+=20;
  }
  //sun
  fill('white')
  stroke(0);
  ellipse(47.5, sunY, 50, 55);
  fill(255,140,0)
  ellipse(55, sunY, 50, 55);
  noStroke();
  fill(255,215,0)
  ellipse(50, sunY, 50, 55);

  if(sunY>=0&&sunY<=70){
    sunY+=20;
  }

  fill(19,69,0)
  ellipse(600, eliY+890, 2000, 1000);
  fill(49,99,0)
  rect(0, eliY+585, 800, 20)
  fill('white');
  if(eliY>0){
    eliY -= 1.5;
  }

  fill('black');
  textSize(20)
  text('vidas: '+vida, 700, 50);

  //enemies
  fill('white');
  rect(200, ship1, 50, 50)
  fill('black');
  text('plane', 200, 170);

  fill('white');
  rect(300, ship2, 50, 50)
  fill('black');
  text('plane', 300, 170);

  fill('white');
  rect(400, ship3, 50, 50)
  fill('black');
  text('plane', 400, 170);

  quiz()
}

function rules() {
  background('black');
  fill('white');
  text('[sair: esc]', 20, 390);
  text('Welcome to fight club', 100, 100);
  text('The first rule of fight club is:\n you do not talk about fight club', 50, 200);
  text('Second rule is: \nyou do not talk about fight club', 50, 300);
}

function quiz() {
    switch (ponto) {
      case 1:
        fill('black');
        rect(200, gunshotY, 10, 40);
        if(gunshotY >=200){
            gunshotY-=5;
        }
        if(gunshotY == 200){
            ship1=0;
        }
        break;
      case 2:
        gunshotY=560;
        fill('black');
        rect(300, gunshotY, 10, 40);
        if(gunshotY >=200){
            gunshotY-=5;
        }
        if(gunshotY == 200){
            ship2=0;
        }
        break;
      case 3:
        break;
      default:

    }

    switch(inimigo){
      case 1:
        vida--;
        break;
    }


    switch(perg){
        case 1:
            fill('orange');
            rect(200, 300, 400, 200);
            fill('black');
            textSize(32);
            text('Resolva a equação', 250, 330);
            text('10 x __ = 250', 296, 385);
            textSize(20);
            text('Quanto multiplicado por 10, dá 250?', 222, 420);
            textSize(32);
            text('25', 240, 470);
            text('50', 320, 470);
            text('250', 400, 470);
            text('2,5', 500, 470);
            if(xChoice==240){
                resp=1;
                fill('white');
                text('Δ 25', 208, 470);
                if(keyCode == ENTER){
                    ponto++;
                    perg=0;
                }
            }
            if(xChoice==320){
                resp=2;
                fill('white');
                text('Δ 50', 288, 470);
                if(keyCode == ENTER){
                  inimigo++;
                }
            }
            if(xChoice==400){
                resp=3
                fill('white');
                text('Δ 250', 368, 470);
                if(keyCode == ENTER){
                  inimigo=1;
                }
            }
            if(xChoice==480){
                resp=4
                fill('white');
                text('Δ 2,5', 468, 470);
                if(keyCode == ENTER){
                  inimigo=1;
                }
            }
            break;
    }
}

function keyPressed() {
  //selecting options
  if (keyCode === DOWN_ARROW) {
    if (y < 200)
      y += 100;
  } else if (keyCode === UP_ARROW) {
    if (y > 75)
      y -= 100;
  }
  if(telaAtiva == 1 && keyCode == RIGHT_ARROW){
      xChoice+=80;
      if(xChoice > 480){
          xChoice = 480;
      }
  }
  else if(telaAtiva == 1 && keyCode == LEFT_ARROW){
      xChoice-=80;
      if(xChoice < 240){
          xChoice = 240;
      }
  }
  if(keyCode == ESCAPE && telaAtiva == 1){
      y = 75;
      telaAtiva=0;
      back=0;
      moonY=65;
      draw();
  }
  if (keyCode == ESCAPE && telaAtiva == 2) {
    y = 75;
    telaAtiva = 0;
    draw();
  }
}

//functions for future plans(i.e. stars and makeCloud)
function chuva(){}
