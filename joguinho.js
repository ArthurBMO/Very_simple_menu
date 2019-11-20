
let moonImage, derp, medium, hard, impossible, hardBackground;
//é pra aparecer a tela inicial(0), a do jogo(1) e as regras(2)
var telaAtiva = 0;
//serve pras montanhas subirem
var eliX = 0, eliY = 210;
//moonY é a posição da lua, sunY do sol e back pra o background sair do preto
// pro branco. Tudo isso durante o jogo
var moonY = 65, back = 0, sunY = 0;
//variaveis para cara dificuldade
var perg = 1, resp = 0, pergH = 1, respH = 0, pergIm = 1, respIm = 0;
//gunshotY é a posição das balas, se for igual buga
var gunshotY = 560, gunshotY2 = 560, gunshotY3 = 560, ponto = 0, inimigo = 0;
var countershotY = 200, countershotY2 = 200, countershotY3 = 200;
//ship é a posição dos avião, pra eles poder sumir quando a bala chegar
var ship1 = 150, ship2 = 150, ship3 = 150, ship4 = 150;
//se vida = 0, GAME OVER BITHC
var vida = 3, tempo = 0, gameMode;

var qual = 1, falas =
  [
    { fala: "Olá, Tux. Está havendo uma invasão aérea \nprecisamos de você para controlar as armas." },
    { fala: "É o seguinte: vai ter quatro opções na tela\n e você tem que escolher a única correta." },
    { fala: "Para escolher as opções, é só apertar\n com o botão esquerdo do mouse(tudo aqui funciona com esse botão)." },
    { fala: "Esses são os invasores, tu ha de destruí-los!" },
    { fala: "Agora, te vira e escolhe tua dificuldade!" }
  ];

function preload() {
  derp = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/rage_guy_herp_derp_by_rober_raik-d4cwz17.png');
  medium = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/level%201.png');
  moonImage = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/moon.png')
  hardBackground = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/maxresdefault(4).jpg');
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(5, 5, 5);
  //É o nome
  fill('#d0efff');
  textSize(50);
  text('Fast Thinking', 228.5, 90);
  //Texto principal
  textSize(25);
  fill('#2a9df4');
  text('Novo Jogo', 240, 300);
  text('Tutorial', 440, 300);
  //ENTER PRA INICIR O JOGO
  if (mouseX <= 400 && mouseX >= 200 && mouseY >= 240 && mouseY <= 350 && telaAtiva == 0) {
    fill('white');
    text('Novo Jogo', 240, 300);
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
  background(0);
  text('[selecionar: mouse]', 20, 590);
  textSize(25);
  fill('white');
  text('Selecione a dificuldade', 220, 300);
  image(medium, 100, 350, 110, 100);
  text('Médio', 115, 500);
  rect(320, 350, 110, 100);
  text('Difícil', 340, 500);
  rect(550, 350, 110, 100);
  text('O céu ta caindo', 510, 500);
  if (mouseX >= 100 && mouseX <= 210 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    noFill();
    stroke('green');
    strokeWeight(10);
    rect(100, 350, 110, 100);
    noStroke();
    if (mouseIsPressed) {
      gameMode = 'medium';
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
    if (mouseIsPressed) {
      gameMode = 'hard';
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
    if (mouseIsPressed) {
      gameMode = 'impossible';
      telaAtiva = 4;
      strokeWeight(1);
    }
  }
}

function intro() {
  background(0);
  fill('white')
  rect(0, 500, 800, 300);
  image(derp, 700, 400, 100, 110);
  fill(0);
  switch (qual) {
    case 1:
      text(falas[0].fala, 150, 550);
      tempo++
      if (mouseIsPressed && tempo > 120) {
        qual = 2;
        tempo = 0;
      }
      break;
    case 2:
      text(falas[1].fala, 150, 550);
      tempo++;
      if (mouseIsPressed && tempo > 120) {
        qual = 3;
        tempo = 0;
      }
      break;
    case 3:
      text(falas[2].fala, 150, 550);
      tempo++;
      if (mouseIsPressed && tempo > 120) {
        qual = 4;
        tempo = 0;
      }
      break;
    case 4:
      text(falas[3].fala, 150, 550);
      fill('white');
      rect(200, ship1, 50, 50);
      if (ship1 >= 130)
        ship1 -= 4;
      if (ship1 <= 170)
        ship1 += 3;
      tempo++
      if (mouseIsPressed && tempo > 120) {
        qual = 0;
        tempo = 0;
        ship1 = 150;
        telaAtiva = 0;
      }
      break;
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
  textSize(20)
  text('vidas: ' + vida, 700, 50);

  //esse é os avião kkkk
  fill('white');
  rect(200, ship1, 50, 50);
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

  //what happens when questions happen
  switch (ponto) {
    case 1:
      fill('black');
      rect(200, gunshotY, 10, 40);
      //pra bala subir
      if (gunshotY >= 200) {
        gunshotY -= 5;
      }
      //pra ela colidir com o aviao e puxar a proxima pergunta
      if (gunshotY == 200) {
        ship1 = -100;
        gunshotY = -100;
        perg = 2;
      }
      break;
    case 2:
      fill('black');
      rect(300, gunshotY2, 10, 40);
      if (gunshotY2 >= 200) {
        gunshotY2 -= 5;
      }
      if (gunshotY2 == 200) {
        ship2 = -10;
        gunshotY2 = -10;
        perg = 3;
      }
      break;
    case 3:
      fill('black');
      rect(400, gunshotY3, 10, 40);
      if (gunshotY3 >= 200) {
        gunshotY3 -= 5;
      }
      if (gunshotY3 == 200) {
        ship3 = -10;
        gunshotY3 = -10;
        perg = 4;
      }
      break;
  }

  switch (inimigo) {
    case 1:
      fill('black');
      rect(200, countershotY, 10, 40);
      if (countershotY <= 560) {
        countershotY += 5;
      }
      if (countershotY == 560) {
        countershotY = 900;
        vida = vida - 1;
        perg = 2;
      }
      break;
    case 2:
      fill('black');
      rect(300, countershotY2, 10, 40);
      if (countershotY2 <= 560) {
        countershotY2 += 5;
      }
      if (countershotY2 == 560) {
        countershotY2 = 900;
        vida = vida - 1;
        perg = 3;
      }
      break;
    case 3:
      fill('black');
      rect(400, countershotY3, 10, 40);
      if (countershotY3 <= 560) {
        countershotY3 += 5;
      }
      if (countershotY3 == 560) {
        countershotY3 = 900;
        vida = vida - 1;
        perg = 4;
      }
      break;
  }
  //só pra testar mesmo
  if (perg == 4 && vida > 0) {
    fill('orange');
    rect(200, 300, 400, 200);
    fill('black');
    textSize(32);
    text('Félicitations, vous avez gagné!\n ESC para sair', 250, 330);
  }
  else if (perg == 4 && vida == 0) {
    fill('orange');
    rect(200, 300, 400, 200);
    fill('black');
    textSize(32);
    text('mieux de chance la prochaine fois\nESC para sair', 250, 330);
  }
  //the actual questions
  switch (perg) {
    case 1:
      //fundo das perguntas
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(32);
      text('Resolva a equação', 250, 330);
      //perguntas
      text('10 x __ = 250', 296, 385);
      textSize(20);
      text('Quanto multiplicado por 10, dá 250?', 222, 420);
      textSize(32);
      //opções
      text('25--', 240, 470);
      text('50', 320, 470);
      text('250', 400, 470);
      text('2,5', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        resp = 1;
        fill('white');
        text('Δ 25', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          ponto++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        resp = 2;
        fill('white');
        text('Δ 50', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        resp = 3
        fill('white');
        text('Δ 250', 368, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        resp = 4
        fill('white');
        text('Δ 2,5', 468, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      break;
    case 2:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(32);
      text('Resolva a equação', 250, 330);
      text('6 x 6 = __', 296, 385);
      textSize(20);
      text('Quanto multiplicado por 10, dá 250?', 222, 420);
      textSize(32);
      text('50', 240, 470);
      text('36', 320, 470);
      text('35', 400, 470);
      text('12', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        resp = 1;
        fill('white');
        text('Δ 50', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        resp = 2;
        fill('white');
        text('Δ 36', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          ponto++
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        resp = 3
        fill('white');
        text('Δ 35', 368, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        resp = 4
        fill('white');
        text('Δ 12', 468, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      break;
    case 3:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(32);
      text('Resolva a equação', 250, 330);
      text('6 x 4 = __', 296, 385);
      textSize(20);
      text('Quanto multiplicado por 10, dá 250?', 222, 420);
      textSize(32);
      text('25', 240, 470);
      text('36', 320, 470);
      text('28', 400, 470);
      text('24', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        resp = 1;
        fill('white');
        text('Δ 25', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        resp = 2;
        fill('white');
        text('Δ 36', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        resp = 3
        fill('white');
        text('Δ 28', 368, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        resp = 4
        fill('white');
        text('Δ 24', 468, 470);
        if (mouseIsPressed) {
          ponto++;
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
  textSize(20)
  text('vidas: ' + vida, 700, 50);

  //esse é os avião kkkk
  fill('white');
  rect(200, ship1, 50, 50);
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

  fill('white');
  rect(600, ship4, 50, 50)
  fill('black');
  text('plane', 400, 170);

  switch (pergH) {
    case 1:
      //fundo das perguntas
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(32);
      text('Resolva a equação', 250, 330);
      //perguntas
      text('12 x 12 = __', 296, 385);
      textSize(32);
      //opções
      text('121', 240, 470);
      text('144', 320, 470);
      text('225', 400, 470);
      text('169', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        resp = 1;
        fill('white');
        text('Δ 121', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        resp = 2;
        fill('white');
        text('Δ 144', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          ponto++;
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        resp = 3
        fill('white');
        text('Δ 225', 368, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        resp = 4
        fill('white');
        text('Δ 169', 468, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      break;
    case 2:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(32);
      text('Resolva a equação', 250, 330);
      text('20 x 20 = __', 296, 385);
      textSize(32);
      text('200', 240, 470);
      text('420', 320, 470);
      text('400', 400, 470);
      text('240', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        resp = 1;
        fill('white');
        text('Δ 200', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        resp = 2;
        fill('white');
        text('Δ 420', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          inimigo++
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        resp = 3
        fill('white');
        text('Δ 400', 368, 470);
        if (mouseIsPressed) {
          ponto++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        resp = 4
        fill('white');
        text('Δ 240', 468, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      break;
    case 3:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(32);
      text('Resolva a equação', 250, 330);
      text('12 x 4 = __', 296, 385);
      textSize(32);
      text('48', 240, 470);
      text('36', 320, 470);
      text('49', 400, 470);
      text('40', 500, 470);
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        resp = 1;
        fill('white');
        text('Δ 48', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          ponto++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        resp = 2;
        fill('white');
        text('Δ 36', 288, 470);
        //é pra perder vida msa ta bugando
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 368 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410) {
        resp = 3
        fill('white');
        text('Δ 49', 368, 470);
        if (mouseIsPressed) {
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 470 && mouseX <= 560 && mouseY <= 490 && mouseY >= 410) {
        resp = 4
        fill('white');
        text('Δ 40', 468, 470);
        if (mouseIsPressed) {
          ponto++;
          perg = 0;
        }
      }
      break;
  }
}

function impossibleF() {
  quiz();
}
function quiz() {
  //aqui a cada ponto, a bala aparece pra explodir um aviao

}


function keyPressed() {

  if (keyCode == ESCAPE && telaAtiva == 2) {
    telaAtiva = 0;
    moonY = 65, back = 0, sunY = 0;
    perg = 1, resp = 0;
    gunshotY = 560, gunshotY2 = 560, gunshotY3 = 560, ponto = 0;
    countershotY = 200, countershotY2 = 200, countershotY3 = 200;
    ship1 = 150, ship2 = 150, ship3 = 150;
    vida = 3, inimigo = 0; tempo = 0;
  }
  /*for when the tutorial exists
  if (keyCode == ESCAPE && telaAtiva == 1) {
    telaAtiva = 0;
  }*/
}
