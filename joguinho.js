
var x = 120;
var y = 75;
var choice = 1;
var telaAtiva;
var starX;
var starY;
var star = [];
var eliX = 0, eliY = 210;
var cloudx = 100, cloudy = 100;
var moonY=65, back=0, sunY=0;
var moon;

function preload() {
  //moon = loadImage('moon.png');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {

  background(0);

  //this is the moon
  //ellipse(50, 70, 50, 50);
  //this is the fast thinking name
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
  }
  if (y == 175) {
    choice = 2;
    fill('white');
    text('Δ', 310, 400)
    text('Regras', 340, 400);
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

  //planes
  fill('blue');
  rect(150, 150, 50, 50)
}

function rules() {
  background('black');
  fill('white');
  text('[sair: esc]', 20, 390);
  text('Welcome to fight club', 100, 100);
  text('The first rule of fight club is:\n you do not talk about fight club', 50, 200);
  text('Second rule is: \nyou do not talk about fight club', 50, 300);
}

//function quit() { }

function keyPressed() {
  //if enter is pressed, then main screen shows up
  if (keyCode == ENTER) {
    telaAtiva = choice;
  }
  //selecting options
  if (keyCode === DOWN_ARROW) {
    if (y < 200)
      y += 100;
  } else if (keyCode === UP_ARROW) {
    if (y > 75)
      y -= 100;
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
function stars() {
  var howMany=[];
  stroke(255)
  fill('white')
  for(i=0; i<100;i++){
    starX = random(0, width)
    starY = random(0, height)
    howMany[i]=point(starX, starY)
  }
  noStroke();
  noFill();
}
function makeCloud(cloudx, cloudy) {
  fill(255)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
function chuva(){}
