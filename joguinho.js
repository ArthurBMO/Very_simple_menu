/*
Equipe:
  Arthur Beserra de Oliveira - 2A(Líder)
  Suellen Medeiros Rodrigues - 2A
  Etapa 4 e 5
*/
//serve pras escolhas das respostas, resposta 1 fica no x=240
// 2 no x=tal e assim vai
var xChoice = 240;
//é pra aparecer a tela inicial(0), a do jogo(1) e as regras(2)
var telaAtiva = 0;
//serve pras montanhas subirem
var eliX = 0, eliY = 210;
//moonY é a posição da lua, sunY do sol e back pra o background sair do preto
// pro branco. Tudo isso durante o jogo
var moonY = 65, back = 0, sunY = 0;
var perg = 1, resp = 0;
//gunshotY é a posição das balas, se for igual buga
var gunshotY = 560, gunshotY2 = 560, gunshotY3 = 560, ponto = 0, inimigo = 0;
//ship é a posição dos avião, pra eles poder sumir quando a bala chegar
var ship1 = 150, ship2 = 150, ship3 = 150;
//se vida = 0, GAME OVER BITHC
var vida = 3, tempo = 0;



//vou guardar isso aqui pra fazer o tempo
/*if(vida == 3){
  tempo++;
  text("Segundos: "+(Math.floor(tempo/30))+" "+tempo, 50, 260);
  if (tempo == 121 ) {
    telaAtiva = 3;
  }
}*/



function preload() {
  //moon = loadImage('https://raw.githubusercontent.com/ArthurBMO/Very_simple_menu/master/star.jpg');
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
  text('ENTER para jogar\nESC para regras', 240, 400);
  //ENTER PRA INICIR O JOGO
  if (keyCode == ENTER && telaAtiva == 0) {
    telaAtiva = 1;
  }
  //AQUI JAZ ESC PRA ENTRAR NAS REGRA
  //if(keyCode == ESCAPE)
  //a parte branca em baixo que acho que vou tirar
  fill('white');
  textSize(16);
  text('[selecionar: enter]', 20, 590);
  text('[mover: setas]', 650, 590);
  //ta faltando as regra ainda
  switch (telaAtiva) {
    case 1:
      play();
      break;
  }
}

function play() {
  //OS BACK AUMENTA PRA COR DO FUNDO FICAR CLARA
  background(back, back, back);
  if (back >= 0 && back <= 232) {
    back += 40;
  }

  //isso é pra lua cair
  ellipse(50, moonY + 5, 50, 50);
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
  //aqui surge o quiz boy
  quiz()
}

function quiz() {
  //aqui a cada ponto, a bala aparece pra explodir um aviao
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
        ship1 = -10;
        gunshotY = -10;
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

  //só pra testar mesmo
  if (perg == 4) {
    telaAtiva = 0;
  }

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
      text('25', 240, 470);
      text('50', 320, 470);
      text('250', 400, 470);
      text('2,5', 500, 470);
      //xChoice percorre as alterativa
      if (xChoice == 240) {
        resp = 1;
        fill('white');
        text('Δ 25', 208, 470);
        //90 e 122 é igual a z e Z, porque se for enter da bug
        if (keyCode == 90 || keyCode == 122) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          ponto++;
          perg = 0;
        }
      }
      if (xChoice == 320) {
        resp = 2;
        fill('white');
        text('Δ 50', 288, 470);
        //é pra perder vida msa ta bugando
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      if (xChoice == 400) {
        resp = 3
        fill('white');
        text('Δ 250', 368, 470);
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      if (xChoice == 480) {
        resp = 4
        fill('white');
        text('Δ 2,5', 468, 470);
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      break;
    case 2:
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
      if (xChoice == 240) {
        resp = 1;
        fill('white');
        text('Δ 25', 208, 470);
      }
      if (xChoice == 320) {
        resp = 2;
        fill('white');
        text('Δ 50', 288, 470);
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      if (xChoice == 400) {
        resp = 3
        fill('white');
        text('Δ 250', 368, 470);
        if (keyCode == 90 || keyCode == 122) {
          ponto++;
          perg = 0;
        }
      }
      if (xChoice == 480) {
        resp = 4
        fill('white');
        text('Δ 2,5', 468, 470);
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      break;
    case 3:
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
      if (xChoice == 240) {
        resp = 1;
        fill('white');
        text('Δ 25', 208, 470);
      }
      if (xChoice == 320) {
        resp = 2;
        fill('white');
        text('Δ 50', 288, 470);
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      if (xChoice == 400) {
        resp = 3
        fill('white');
        text('Δ 250', 368, 470);
        if (keyCode == ENTER) {
          inimigo++;
        }
      }
      if (xChoice == 480) {
        resp = 4
        fill('white');
        text('Δ 2,5', 468, 470);
        if (keyCode == 90 || keyCode == 122) {
          ponto++;
          perg = 0;
        }
      }
      break;
  }
}

function keyPressed() {
  //esses dois é pra percorrer as opções com o xChoice
  if (telaAtiva == 1 && keyCode == RIGHT_ARROW) {
    xChoice += 80;
    if (xChoice > 480) {
      xChoice = 480;
    }
  }
  else if (telaAtiva == 1 && keyCode == LEFT_ARROW) {
    xChoice -= 80;
    if (xChoice < 240) {
      xChoice = 240;
    }
  }

  //ainda vou ajeitar esses dois
  if (keyCode == ESCAPE && telaAtiva == 1) {
    y = 75;
    telaAtiva = 0;
    back = 0;
    moonY = 65;
    draw();
  }
  if (keyCode == ENTER && telaAtiva == 2) {
    telaAtiva = 0;
    draw();
  }
}
