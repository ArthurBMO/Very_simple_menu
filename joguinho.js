//images or background
let moonImage, derp, medium, hard, impossible, hardBackground, fonte;
var explosion;
//sounds
var boom = 0, wow = 0, death = 0, oof = 0, pew = 0, slowOof = 0;
//sprites
let plane, gub, gub1, gubam, gubam1, gubam2;
//é pra aparecer a tela inicial(0), a do jogo(1) e as regras(2)
var telaAtiva = 0;
//serve pras montanhas subirem
var eliX = 0, eliY = 210;
//moonY é a posição da lua, sunY do sol e back pra o background sair do preto
// pro branco. Tudo isso durante o jogo
var moonY = 65, back = 0, sunY = 0;
//variaveis para cara dificuldade
var perg = 1, pergH = 1, pergIm = 1;
var numeros = [];
//first 3 are first level, the 4 after is hard the 3 after are impossible
var gun = [560, 560, 560, 560, 560, 560, 560, 560, 560];
//still left to add gunCounter
var gunCounter = [200, 200, 200, 200, 200, 200, 200, 200, 200];
var ponto = 0, pontoH = 0, pontoIm = 0, inimigo = 0, inimigoH = 0, inimigoIm = 0;
//ship é a posição dos avião, pra eles poder sumir quando a bala chegar
//add ships
var ship1 = 150, ship2 = 150, ship3 = 150;
//se vida = 0, GAME OVER BITHC
var vida = 3, tempo = 0, gameMode, countdown = 3600;
var qual = 1, falas =
  [
    { fala: " Ola, Tux. Esta havendo uma invasao aerea \nprecisamos de voce para controlar as armas." },
    { fala: "E o seguinte: vai ter quatro opcoes na tela\n  e voce tem que escolher a unica correta." },
    { fala: "Para escolher as opcoes, e so apertar com o\n         botao esquerdo do mouse\n    (tudo aqui funciona com esse botao)." },
    { fala: "Esses sao os invasores, tu ha de destrui-los!" },
    { fala: "Agora, te vira e escolhe tua dificuldade!" }
  ];

function preload() {
  plane = loadImage('./plane.png');
  derp = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/rage_guy_herp_derp_by_rober_raik-d4cwz17.png');
  medium = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/level%201.png');
  moonImage = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/moon.png')
  hardBackground = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/maxresdefault(4).jpg');
  fonte = loadFont('Apple2.ttf');
  oof = loadSound('./sounds/oof.m4a');
  slowOof = loadSound('./sounds/slow-oof.m4a');
  boom = loadSound('./sounds/BOOOM.mp3');
  wow = loadSound('./sounds/pewds_wow.mp3');
  pew = loadSound('./sounds/pew_shot.mp3');
}

function setup() {
  createCanvas(800, 600);
  var tempo = Date.now();
  randomSeed(tempo);
  for (i = 0; i < 12; i++) {
    if (i < 6) {
      numeros[i] = Math.floor(random(2, 10));
    }
    if (i >= 6 && i < 12) {
      numeros[i] = Math.floor(random(6, 15));
    }
  }
}

function draw() {
  background('#222');
  //É o nome
  textFont(fonte)
  fill('#d0efff');
  textSize(30);
  text('Fast Thinking', 225, 90);
  //Texto principal
  textSize(20);
  fill('#2a9df4');
  text('Novo Jogo', 140, 300);
  text('Tutorial', 440, 300);
  //ENTER PRA INICIR O JOGO
  if (mouseX <= 400 && mouseX >= 100 && mouseY >= 240 && mouseY <= 350 && telaAtiva == 0) {
    fill('white');
    text('Novo Jogo', 140, 300);
    if (mouseIsPressed) {
      telaAtiva = 1;
    }
  }
  if (mouseX <= 580 && mouseX >= 405 && mouseY >= 240 && mouseY <= 350 && telaAtiva == 0) {
    fill('white');
    text('Tutorial', 440, 300);
    if (mouseIsPressed) {
      telaAtiva = 5;
    }
  }
  fill('white');
  textSize(16);
  text('[selecionar: mouse]', 20, 590);
  //ta faltando as regra ainda
  switch (telaAtiva) {
    case 1:
      difficult();
      break;
    case 2:
      mediumF();
      break;
    case 3:
      hardF();
      break;
    case 4:
      impossibleF();
      break;
    case 5:
      intro();
      break;
  }
}

function difficult() {
  background('#222');
  text('[selecionar: mouse]', 20, 590);
  textSize(15);
  fill('white');
  text('Selecione a dificuldade', 220, 300);
  image(medium, 100, 350, 110, 100);
  text('Medio', 115, 500);
  rect(320, 350, 110, 100);
  text('Dificil', 325, 500);
  rect(550, 350, 110, 100);
  text('O ceu ta caindo', 510, 500);
  if (mouseX >= 100 && mouseX <= 210 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    noFill();
    stroke('green');
    strokeWeight(10);
    rect(100, 350, 110, 100);
    noStroke();
    if (mouseIsPressed && telaAtiva == 1) {
      gameMode = 'medium';
      vida = 3;
      telaAtiva = 2;
      strokeWeight(1);
    }
  }
  if (mouseX >= 320 && mouseX <= 430 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    noFill();
    stroke('green');
    strokeWeight(10);
    rect(320, 350, 110, 100);
    noStroke();
    if (mouseIsPressed && telaAtiva == 1) {
      gameMode = 'hard';
      vida = 3;
      telaAtiva = 3;
      strokeWeight(1);
    }
  }
  if (mouseX >= 550 && mouseX <= 660 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    noFill();
    stroke('green');
    strokeWeight(10);
    rect(550, 350, 110, 100);
    noStroke();
    if (mouseIsPressed && telaAtiva == 1) {
      gameMode = 'impossible';
      vida = 3;
      telaAtiva = 4;
      strokeWeight(1);
    }
  }
}

function intro() {
  background('#222');
  fill('white')
  rect(0, 500, 800, 300);
  image(derp, 700, 400, 100, 110);
  fill(0);
  switch (qual) {
    case 1:
      text(falas[0].fala, 50, 550);
      tempo++
      if (mouseIsPressed && tempo > 120) {
        qual = 2;
        tempo = 0;
      }
      break;
    case 2:
      text(falas[1].fala, 50, 550);
      tempo++;
      if (mouseIsPressed && tempo > 120) {
        qual = 3;
        tempo = 0;
      }
      break;
    case 3:
      text(falas[2].fala, 50, 530);
      tempo++;
      if (mouseIsPressed && tempo > 120) {
        qual = 4;
        tempo = 0;
      }
      break;
    case 4:
      text(falas[3].fala, 50, 550);
      fill('white');
      image(plane, 200, ship1, 100, 50);
      if (ship1 >= 130)
        ship1 -= 4;
      if (ship1 <= 170)
        ship1 += 3;
      tempo++;
      if (mouseIsPressed && tempo > 120 && telaAtiva == 5) {
        qual = 0;
        tempo = 0;
        ship1 = 150;
        telaAtiva = 1;
      }
      break;
  }

}

function points() {
  if (gameMode == 'medium') {
    switch (ponto) {
      case 1:
        fill('black');
        rect(240, gun[0], 10, 40);
        //pra bala subir
        if (gun[0] >= 200) {
          gun[0] -= 5;
        }
        //pra ela colidir com o aviao e puxar a proxima pergunta
        if (gun[0] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship1 = -100;
          gun[0] = -100;
          perg = 2;
        }
        break;
      case 2:
        fill('black');
        rect(400, gun[1], 10, 40);
        if (gun[1] >= 200) {
          gun[1] -= 5;
        }
        if (gun[1] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship2 = -100;
          gun[1] = -100;
          perg = 3;
        }
        break;
      case 3:
        fill('black');
        rect(540, gun[2], 10, 40);
        if (gun[2] >= 200) {
          gun[2] -= 5;
        }
        if (gun[2] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship3 = -100;
          gun[2] = -100;
          perg = 4;
        }
        break;
    }

    switch (inimigo) {
      case 1:
        fill('black');
        rect(240, gunCounter[0], 10, 40);
        if (gunCounter[0] <= 560) {
          gunCounter[0] += 5;
        }
        if (gunCounter[0] == 560) {
          oof.setVolume(0.5);
          oof.play();
          gunCounter[0] = 900;
          vida = vida - 1;
          perg = 2;
        }
        break;
      case 2:
        fill('black');
        rect(400, gunCounter[1], 10, 40);
        if (gunCounter[1] <= 560) {
          gunCounter[1] += 5;
        }
        if (gunCounter[1] == 560) {
          oof.setVolume(0.5);
          oof.play();
          gunCounter[1] = 900;
          vida = vida - 1;
          perg = 3;
        }
        break;
      case 3:
        fill('black');
        rect(540, gunCounter[2], 10, 40);
        if (gunCounter[2] <= 560) {
          gunCounter[2] += 5;
        }
        if (gunCounter[2] == 560) {
          slowOof.setVolume(0.5);
          slowOof.play();
          gunCounter[2] = 900;
          vida = vida - 1;
          perg = 4;
        }
        break;
    }
    //só pra testar mesmo
    if (perg == 4 && vida > 0) {
      tempo++
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(12);
      text('Félicitations, vous avez gagne!\n ESC para sair', 250, 330);
      if(tempo == 10)
        wow.play();
    }
    else if (perg == 4 && vida == 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(12);
      text('mieux de chance la prochaine fois\nESC para sair', 250, 330);
    }
  }
  else if (gameMode == 'hard') {
    switch (pontoH) {
      case 1:
        fill('black');
        rect(240, gun[3], 10, 40);
        //pra bala subir
        if (gun[3] >= 200) {
          gun[3] -= 5;
        }
        //pra ela colidir com o aviao e puxar a proxima pergunta
        if (gun[3] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship1 = -100;
          gun[3] = -100;
          pergH = 2;
        }
        break;
      case 2:
        fill('black');
        rect(400, gun[4], 10, 40);
        if (gun[4] >= 200) {
          gun[4] -= 5;
        }
        if (gun[4] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship2 = -10;
          gun[4] = -10;
          pergH = 3;
        }
        break;
      case 3:
        fill('black');
        rect(540, gun[5], 10, 40);
        if (gun[5] >= 200) {
          gun[5] -= 5;
        }
        if (gun[5] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship3 = -10;
          gun[5] = -10;
          pergH = 4;
        }
        break;
    }

    switch (inimigoH) {
      case 1:
        fill('black');
        rect(240, gunCounter[3], 10, 40);
        if (gunCounter[3] <= 560) {
          gunCounter[3] += 5;
        }
        if (gunCounter[3] == 560) {
          oof.setVolume(0.5);
          oof.play();
          gunCounter[3] = 900;
          vida = vida - 1;
          pergH = 2;
        }
        break;
      case 2:
        fill('black');
        rect(400, gunCounter[4], 10, 40);
        if (gunCounter[4] <= 560) {
          gunCounter[4] += 5;
        }
        if (gunCounter[4] == 560) {
          oof.setVolume(0.5);
          oof.play();
          gunCounter[4] = 900;
          vida = vida - 1;
          pergH = 3;
        }
        break;
      case 3:
        fill('black');
        rect(540, gunCounter[5], 10, 40);
        if (gunCounter[5] <= 560) {
          gunCounter[5] += 5;
        }
        if (gunCounter[5] == 560) {
          slowOof.setVolume(0.5);
          slowOof.play();
          gunCounter[5] = 900;
          vida = vida - 1;
          pergH = 4;
        }
        break;
    }
    if (pergH == 4 && vida > 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(12);
      text('Félicitations, vous avez gagne!\n ESC para sair', 250, 330);
      countdown = 3600;
    }
    else if (pergH == 4 && vida == 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(12);
      text('mieux de chance la prochaine fois\nESC para sair', 250, 330);
      countdown = 3600;
    }
  }
  if (gameMode == 'impossible') {
    switch (pontoIm) {
      case 1:
        fill('black');
        rect(240, gun[6], 10, 40);
        //pra bala subir
        if (gun[6] >= 200) {
          gun[6] -= 5;
        }
        //pra ela colidir com o aviao e puxar a proxima pergunta
        if (gun[6] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship1 = -100;
          gun[6] = -100;
          pergIm = 2;
        }
        break;
      case 2:
        fill('black');
        rect(400, gun[7], 10, 40);
        if (gun[7] >= 200) {
          gun[7] -= 5;
        }
        if (gun[7] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship2 = -10;
          gun[7] = -10;
          pergIm = 3;
        }
        break;
      case 3:
        fill('black');
        rect(540, gun[8], 10, 40);
        if (gun[8] >= 200) {
          gun[8] -= 5;
        }
        if (gun[8] == 200) {
          boom.setVolume(0.1);
          boom.play();
          ship3 = -10;
          gun[8] = -10;
          pergIm = 4;
        }
        break;
    }

    switch (inimigoIm) {
      case 1:
        fill('black');
        rect(210, gunCounter[6], 10, 40);
        if (gunCounter[6] <= 560) {
          gunCounter[6] += 5;
        }
        if (gunCounter[6] == 560) {
          oof.setVolume(0.5);
          oof.play();
          gunCounter[6] = 900;
          vida = vida - 1;
          pergIm = 2;
        }
        break;
      case 2:
        fill('black');
        rect(400, gunCounter[7], 10, 40);
        if (gunCounter[7] <= 560) {
          gunCounter[7] += 5;
        }
        if (gunCounter[7] == 560) {
          oof.setVolume(0.5);
          oof.play();
          gunCounter[7] = 900;
          vida = vida - 1;
          pergIm = 3;
        }
        break;
      case 3:
        fill('black');
        rect(540, gunCounter[8], 10, 40);
        if (gunCounter[8] <= 560) {
          gunCounter[8] += 5;
        }
        if (gunCounter[8] == 560) {
          slowOof.setVolume(0.5);
          slowOof.play();
          gunCounter[8] = 900;
          vida = vida - 1;
          pergIm = 4;
        }
        break;
    }
    if (pergIm == 4 && vida > 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(12);
      text('Félicitations, vous avez gagne!\n ESC para sair', 250, 330);
    }
    else if (pergIm == 4 && vida == 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(12);
      text('mieux de chance la prochaine fois\nESC para sair', 250, 330);
    }
  }
}

function mediumF() {
  //OS BACK AUMENTA PRA COR DO FUNDO FICAR CLARA
  tempo = 0;
  background(back, back, back);
  if (back >= 0 && back <= 232) {
    back += 40;
  }

  //isso é pra lua cair
  image(moonImage, 25, moonY + 5, 50, 50);
  if (moonY > 0 && sunY >= 40) {
    moonY += 20;
  }
  //esse é o sol, sim tem 3 ellipse pra ficar bonito
  fill('white')
  stroke(0);
  ellipse(47.5, sunY, 50, 55);
  fill(255, 140, 0)
  ellipse(55, sunY, 50, 55);
  noStroke();
  fill(255, 215, 0)
  ellipse(50, sunY, 50, 55);

  //pro sol bater na lua e ela cair
  if (sunY >= 0 && sunY <= 70) {
    sunY += 20;
  }
  //isso é a montanha
  fill(19, 69, 0)
  ellipse(600, eliY + 890, 2000, 1000);
  fill(49, 99, 0)
  rect(0, eliY + 585, 800, 20)
  fill('white');
  //isso faz as montanha subir
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  fill('black');
  textSize(15)
  text('vidas: ' + vida, 650, 50);

  //esse é os avião kkkk
  image(plane, 200, ship1, 100, 50);
  if (ship1 >= 130)
    ship1 -= 4;
  if (ship1 <= 170)
    ship1 += 3;

  image(plane, 350, ship2, 100, 50);
  if (ship2 >= 130)
    ship2 -= 4;
  if (ship2 <= 170)
    ship2 += 3;

  image(plane, 500, ship3, 100, 50);
  if (ship3 >= 130)
    ship3 -= 4;
  if (ship3 <= 170)
    ship3 += 3;

  //what happens when questions happen
  points();
  //the actual questions
  switch (perg) {
    case 1:
      //fundo das perguntas
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 220, 330);
      //perguntas
      text(numeros[0] + ' x __ = ' + numeros[0] * numeros[1], 296, 385);
      textSize(12);
      text('Quanto multiplicado por ' + numeros[0] + ', da ' + numeros[0] * numeros[1] + '?', 210, 420);
      textSize(25);
      //opções
      text(numeros[1], 240, 470);
      text(numeros[1] * 5, 320, 470);
      text((numeros[0] + 2), 420, 470);
      text(numeros[0] + 3, 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[1], 240, 470);
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          pew.setVolume(0.1);
          pew.play();
          ponto++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[1] * 5, 320, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[0] + 2), 420, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[0] + 3), 500, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      break;
    case 2:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 220, 330);
      text(numeros[2] + ' x ' + numeros[3] + ' = __', 296, 385);
      textSize(15);
      text(numeros[2] + ' multiplicado por ' + numeros[3] + ', da ?', 210, 420);
      textSize(25);
      text(numeros[2] * numeros[3] * numeros[2], 240, 470);
      text(numeros[3] * numeros[2], 320, 470);
      text((numeros[2] + 4), 420, 470);
      text((numeros[3] + 2), 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[2] * numeros[3] * numeros[2], 240, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[3] * numeros[2], 320, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          ponto++
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[2] + 4), 420, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[3] + 2), 500, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      break;
    case 3:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 220, 330);
      text(numeros[4] + ' x ' + numeros[5] + ' = __', 296, 385);
      textSize(15);
      text(numeros[4] + ' multiplicado por ' + numeros[5] + ', da ?', 210, 420);
      textSize(25);
      text(numeros[5], 240, 470);
      text((numeros[4] * 3), 320, 470);
      text(Math.round((numeros[4] * 3.5)), 420, 470);
      text(numeros[4] * numeros[5], 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[5], 240, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[4] * 3), 320, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(Math.round((numeros[4] * 3.5)), 420, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[4] * numeros[5], 500, 470);
        if (mouseIsPressed) {
          ponto++;
          pew.setVolume(0.1);
          pew.play();
          perg = 0;
        }
      }
      break;
  }
}

function hardF() {
  image(hardBackground, 0, 0, 800, 600);
  fill(0, 49, 20)
  ellipse(600, eliY + 890, 2000, 1000);
  fill(29, 79, 20)
  rect(0, eliY + 585, 800, 20)
  fill('white');
  //isso faz as montanha subir
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  fill('white');
  textSize(15)
  text('vidas: ' + vida, 650, 50);
  tempo++;
  countdown--;
  text('Tempo restante: ' + Math.floor(countdown / 60), 260, 550);

  //esse é os avião kkkk
    image(plane, 200, ship1, 100, 50);
  if (ship1 >= 130)
    ship1 -= 4;
  if (ship1 <= 170)
    ship1 += 3;

  image(plane, 350, ship2, 100, 50);
  if (ship2 >= 130)
    ship2 -= 4;
  if (ship2 <= 170)
    ship2 += 3;

  image(plane, 500, ship3, 100, 50);
  if (ship3 >= 130)
    ship3 -= 4;
  if (ship3 <= 170)
    ship3 += 3;

  points();

  if (Math.floor(countdown / 60) > 0) {
    switch (pergH) {
      case 1:
        //fundo das perguntas
        fill('orange');
        rect(200, 300, 400, 200);
        fill('black');
        textSize(22);
        text('Resolva a equacao', 220, 330);
        //perguntas
        text('__ x __ = ' + numeros[0] * (numeros[1]), 296, 385);
        textSize(18);
        text((numeros[0]) + 'x' + (numeros[1] + 2), 210, 470);
        text(numeros[0] + 'x' + (numeros[1]), 310, 470);
        text((numeros[0] + 2) + 'x' + numeros[1], 410, 470);
        text((numeros[0] + 1) + 'x' + (numeros[1] + 2), 510, 470);
        if (mouseX >= 200 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
          fill('white');
          text((numeros[0]) + 'x' + (numeros[1] + 2), 210, 470);
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            //da um ponto e a pergunta vai 0, pra depois proceder
            inimigoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
          fill('white');
          text(numeros[0] + 'x' + numeros[1], 310, 470);
          //é pra perder vida msa ta bugando
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            pontoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
          fill('white');
          text((numeros[0] + 2) + 'x' + numeros[1], 410, 470);
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            inimigoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
          fill('white');
          text((numeros[0] + 1) + 'x' + (numeros[1] + 2), 510, 470);
          if (mouseIsPressed) {
            inimigoH++;
            pew.setVolume(0.1);
          pew.play();
            pergH = 0;
          }
        }
        break;
      case 2:
        fill('orange');
        rect(200, 300, 400, 200);
        fill('black');
        textSize(22);
        text('Resolva a equacao', 220, 330);
        text('__ x __ = ' + numeros[2] * (numeros[3]), 296, 385);
        textSize(18);
        text((numeros[2] + 2) + 'x' + (numeros[3]), 210, 470);
        text((numeros[2] + 1) + 'x' + (numeros[3] + 1), 310, 470);
        text((numeros[2]) + 'x' + (numeros[3]), 410, 470);
        text((numeros[2] + 1) + 'x' + (numeros[3] + 3), 510, 470);
        if (mouseX >= 200 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[2] + 2) + 'x' + (numeros[3]), 210, 470);
          //90 e 122 é igual a z e Z, porque se for enter da bug
          if (mouseIsPressed) {
            //da um ponto e a pergunta vai 0, pra depois proceder
            inimigoH++;
            pew.setVolume(0.1);
          pew.play();
            pergH = 0;
          }
        }
        if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[2] + 1) + 'x' + (numeros[3] + 1), 310, 470);
          //é pra perder vida msa ta bugando
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            inimigoH++
            pergH = 0;
          }
        }
        if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[2]) + 'x' + (numeros[3]), 410, 470);
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            pontoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[2] + 1) + 'x' + (numeros[3] + 3), 510, 470);
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            inimigoH++;
            pergH = 0;
          }
        }
        break;
      case 3:
        fill('orange');
        rect(200, 300, 400, 200);
        fill('black');
        textSize(22);
        text('Resolva a equacao', 220, 330);
        text('__ x __ = ' + numeros[4] * (numeros[5]), 296, 385);
        textSize(18);
        text((numeros[4] + 2) + 'x' + (numeros[5]), 210, 470);
        text((numeros[4] + 3) + 'x' + (numeros[5]), 310, 470);
        text((numeros[4] + 1) + 'x' + (numeros[5] + 4), 410, 470);
        text((numeros[4]) + 'x' + (numeros[5]), 510, 470);
        if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[4] + 2) + 'x' + numeros[5], 210, 470);
          //90 e 122 é igual a z e Z, porque se for enter da bug
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            //da um ponto e a pergunta vai 0, pra depois proceder
            inimigoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[4] + 3) + 'x' + numeros[5], 310, 470);
          //é pra perder vida msa ta bugando
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            inimigoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[4] + 1) + 'x' + (numeros[5] + 4), 410, 470);
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            inimigoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[4]) + 'x' + numeros[5], 510, 470);
          if (mouseIsPressed) {
            pew.setVolume(0.1);
          pew.play();
            pontoH++;
            pergH = 0;
          }
        }
        break;
    }
  }
  if (Math.floor(countdown / 60) <= 0) {
    pergH = 0;
    countdown = 50;
    fill('orange');
    rect(200, 300, 400, 200);
    fill('black');
    textSize(12);
    text('mieux de chance la prochaine fois\nESC para sair', 250, 330);
  }
}

function impossibleF() {

  image(hardBackground, 0, 0, 800, 600);
  fill(0, 49, 20)
  ellipse(600, eliY + 890, 2000, 1000);
  fill(29, 79, 20)
  rect(0, eliY + 585, 800, 20)
  fill('white');
  //isso faz as montanha subir
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  fill('white');
  textSize(15)
  text('vidas: ' + vida, 650, 50);

  //esse é os avião kkkk
  image(plane, 200, ship1, 100, 50);
  if (ship1 >= 130)
    ship1 -= 4;
  if (ship1 <= 170)
    ship1 += 3;

  image(plane, 350, ship2, 100, 50);
  if (ship2 >= 130)
    ship2 -= 4;
  if (ship2 <= 170)
    ship2 += 3;

  image(plane, 500, ship3, 100, 50);
  if (ship3 >= 130)
    ship3 -= 4;
  if (ship3 <= 170)
    ship3 += 3;

  points();

  switch (pergIm) {
    case 1:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 220, 330);
      //perguntas
      text(numeros[12] + ' x ' + numeros[13] + ' = __', 296, 385);
      textSize(18);
      //opções
      text((numeros[12] * numeros[13] + 1), 240, 470);
      text(numeros[12] * numeros[13], 320, 470);
      text((numeros[13] + 1), 420, 470);
      text(numeros[13] + numeros[12], 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[12] * numeros[13] + 1), 240, 470);
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[12] * numeros[13], 320, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          pontoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[13] + 1), 420, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[13] + numeros[12]), 500, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      break;
    case 2:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 250, 330);
      text('20 x 20 = __', 296, 385);
      textSize(18);
      text('200', 240, 470);
      text('420', 320, 470);
      text('400', 400, 470);
      text('240', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 200', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 420', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++
          pergIm = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 400', 368, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          pontoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 240', 468, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      break;
    case 3:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 250, 330);
      text('12 x 4 = __', 296, 385);
      textSize(18);
      text('48', 240, 470);
      text('36', 320, 470);
      text('49', 400, 470);
      text('40', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 48', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          //da um ponto e a pergunta vai 0, pra depois proceder
          pontoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 36', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 49', 368, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text('Δ 40', 468, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          pontoIm++;
          pergIm = 0;
        }
      }
      break;
  }
}

function keyPressed() {

  if (keyCode == ESCAPE && telaAtiva == 2 || telaAtiva == 3) {
    telaAtiva = 0;
    moonY = 65, back = 0, sunY = 0;
    perg = 1, pergH = 1, pergIm = 1;
    gun = [560, 560, 560, 560, 560, 560, 560, 560, 560];
    gunCounter = [200, 200, 200, 200, 200, 200, 200, 200, 200];
    ponto = 0, pontoH = 0, pontoIm = 0;
    ship1 = 150, ship2 = 150, ship3 = 150;
    vida = 3, inimigo = 0, inimigoH = 0, inimigoIm = 0, tempo = 0;
    countdown = 3600;
  }
  if (keyCode == ESCAPE && telaAtiva == 1) {
    telaAtiva = 0;
  }
  /*for when the tutorial exists
  if (keyCode == ESCAPE && telaAtiva == 1) {
  telaAtiva = 0;
  }*/
}
