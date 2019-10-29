
var x = 120;
var y = 75;
var choice = 1;
var telaAtiva;
var starX;
var starY;
var star = [];
var eliX = 650, eliY = 100, rotor = 575, rotory = 54, bombY = 150;
var cloudx = 100, cloudy = 100;
var img;
var font;
function preload(){
  //font = loadFont("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");
  img = loadImage("f.png");
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  //I'm still figuring stuff out
  background('black');
  //textFont(font);
  //this is the moon
  ellipse(50, 70, 50, 50);
  fill('black')
  ellipse(60, 60, 50, 50);
  noStroke();
  //this is the fast thinking name
  fill('#d0efff');
  textSize(50);
  //textFont(font);
  text('Fast Thinking', 35, 90);
  //for the main text
  textSize(25);
  fill('#2a9df4');
  text('Jogar', 170, 160);
  text('Regras', 160, 240);
  text('Sair', 180, 320);
  //to select
  if (y == 75) {
    choice = 1;
    fill('white');
    text('Δ', 140, 160);
    text('Jogar', 170, 160);
  }
  if (y == 175) {
    choice = 2;
    fill('white');
    text('Δ', 130, 240)
    text('Regras', 160, 240);
  }
  if (y == 275) {
    choice = 3;
    fill('white');
    text('Δ', 150, 320)
    text('Sair', 180, 320);
  }
  //some tips
  fill('white');
  textSize(16);
  text('[selecionar: enter]', 20, 390);
  text('[mover: setas]', 250, 390);
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
  background(0);
  //moon
  ellipse(50, 70, 50, 50);
  fill('black')
  ellipse(60, 60, 50, 50);
  //for the plane to move
  eliX -= 1
  rotor -= 1
  //for the plane to move out of frame, upwards
  if (eliX <= 250 && rotor <= 175) {
    eliY -= 10
    rotory -= 10
  }
  noStroke();
  //the plane itself
  //body
  image(img, eliX, eliY, 50, 50);
  fill('white')
  //wing
  //ellipse(eliX, eliY, 150, 50)
  //rotor
  //rect(rotor, rotory, 2, 100)
  text('eiwufhwieufhwiehfeiwuhewiuhfwufweufywuefygiuwgyefuwgyu', 20, 390)

}

function rules() {
  background('black');
  fill('white');
  text('[sair: esc]', 20, 390);
  text('Welcome to fight club', 100, 100);
  text('The first rule of fight club is:\n you do not talk about fight club', 50, 200);
  text('Second rule is: \nyou do not talk about fight club', 50, 300);
  //to leave rules
  if (keyCode == ESCAPE) {
    y = 75;
    telaAtiva = 0;
    draw();
  }
}

function quit() { }

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
}

//functions for future plans(i.e. stars and makeCloud)
function stars() {
  starX = random(0, width)
  starY = random(0, height)
  stroke(255)
  fill('white')
  point(starX, starY)
  noFill();
}
function makeCloud(cloudx, cloudy) {
  fill(255)
  noStroke();
  ellipse(cloudx, cloudy, 70, 50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx - 20, cloudy + 10, 70, 50);
}
