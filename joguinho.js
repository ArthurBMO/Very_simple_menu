//variaveis para guardar imagens
let derp, medium, hard, impossible, ceu1, ceu2, ceu3, fonte;

//variaveis para guardar sons
var boom = 0, wow = 0, oof = 0, pew = 0, slowOof = 0, power = 0, vaderDeath = 0, weWon = 0, menu = 0;

//inimigos
let plane, gib, gub1, gubam, gubama, gubam1;

//é pra aparecer a tela inicial(0), a da escolha(1) e as regras(5)
var telaAtiva = 0;

//serve pras montanhas subirem e pro boss descer
var eliY = 210, finalBoss = -100;

//variaveis para perguntas
var perg = 1, pergH = 1, pergIm = 1, pergEnd = 1;

//para fazer as perguntas aleatorias
var numeros = [];

//os primeiros 3 são pra fase 1, os 4 depois são pro fase 2 e os ultimos sao pra fase 3
var gun = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560];
var gunCounter = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200];

//são as variaveis dos acertos e dos erros
var ponto = 0, pontoH = 0, pontoIm = 0, pontoEnd = 0, inimigo = 0, inimigoH = 0, inimigoIm = 0, inimigoEnd = 0;;

//ship é a posição dos avião, pra eles poder sumir quando a bala chegarships
var ship1 = 150, ship2 = 150, ship3 = 150;

var vida = 3, tempo = 0, tempoD = 0, tempoData, gameMode = '', countdown = 3600;

//do tutorial, qual para chamar as e a matriz de objetos para guardar as falas
var qual = 1, falas =
  [
    { fala: " Ola, Tux. Esta havendo uma invasao aerea \nprecisamos de voce para controlar as armas." },
    { fala: "E o seguinte: vai ter quatro opcoes na tela\n  e voce tem que escolher a unica correta." },
    { fala: "Para escolher as opcoes, e so apertar com o\n         botao esquerdo do mouse\n    (tudo aqui funciona com esse botao)." },
    { fala: "Esses sao os invasores, tu ha de destrui-los!" },
    { fala: "Agora, te vira e escolhe tua dificuldade!" }
  ];
//isso é pra outro momento var musicOn = 'on';

function preload() {
  //derp é o personagem no tutorial
  derp = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/rage_guy_herp_derp_by_rober_raik-d4cwz17.png');

  //foto das fases
  medium = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/maps/level%201.png');
  hard = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/maps/fase%202.png');
  impossible = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/maps/fase%203.png');

  //inimigos
  plane = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/plane.png');
  gib = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/Layer%201_sprite_gib2.png');
  gubam = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/Layer%201_sprite_gubam2.png');
  gubama = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/Layer%201_gubama1.png');

  //fundos
  ceu1 = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/maps/bg%20c%C3%A9u%201.png');
  ceu2 = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/maps/bg%20c%C3%A9u%202.png');
  ceu3 = loadImage('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/maps/bg%20c%C3%A9u%203.png');
  fonte = loadFont('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/Apple2.ttf');
  //sons
  oof = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/slow-oof.m4a');
  slowOof = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/slow-oof.m4a');
  boom = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/BOOOM.mp3');
  wow = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/pewds_wow.mp3');
  pew = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/pew_shot.mp3');
  power = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/power.mp3');
  vaderDeath = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/noooooooooo.mp3');
  weWon = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/champion.mp3');
  //menu = loadSound('https://raw.githubusercontent.com/arthurbttf/Math_Destroyer/master/sounds/menu.mp3');
}

function setup() {
  createCanvas(800, 600);
  tempoData = Date.now();
  randomSeed(tempoData);
  //gerar numeros aleatorios para perguntas
  for (i = 0; i < 16; i++) {
    if (i < 6) {
      numeros[i] = Math.floor(random(2, 10));
    }
    if (i >= 6 && i < 12) {
      numeros[i] = Math.floor(random(6, 15));
    }
    if (i >= 12 && i < 16){
      numeros[i] = Math.floor(random(10, 15));
    }
  }
}

function draw() {
  background('#222');
  textFont(fonte);

  //Texto principal
  fill('#d0efff');
  textSize(30);
  text('Math Destroyer', 185, 150);

  textSize(20);
  fill('#2a9df4');
  text('Novo Jogo', 140, 350);
  text('Tutorial', 440, 350);

  //checar se o mouse esteja na posição correta
  if (mouseX <= 400 && mouseX >= 100 && mouseY >= 290 && mouseY <= 400 && telaAtiva == 0) {
    //se estiver, o nome fica branco
    fill('white');
    text('Novo Jogo', 140, 350);
    //se apertar, ele leva pra outra tela
    if (mouseIsPressed) {
      telaAtiva = 1;
    }
  }
  //o mesmo aqui
  if (mouseX <= 580 && mouseX >= 405 && mouseY >= 290 && mouseY <= 400 && telaAtiva == 0) {
    fill('white');
    text('Tutorial', 440, 350);
    if (mouseIsPressed) {
      telaAtiva = 5;
    }
  }

  fill('white');
  textSize(16);
  text('[selecionar: mouse]', 20, 590);
  /* isso era pra ser a musica do menu
  menu.loop();
  menu.play();
  square(770 , 575, 20);
  if (mouseIsPressed && mouseX >=770 && mouseX <= 790 && mouseY >= 575 && mouseY <= 595 && telaAtiva == 0 && musicOn == 'on'){
    menu.stop();
  }
  else if(mouseIsPressed && mouseX >=770 && mouseX <= 790 && mouseY >= 575 && mouseY <= 595 && telaAtiva == 0 && musicOn == 'on'){
    menu.play();
  }*/

  //para levar para diferentes funções
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
    case 6:
      ending();
      break;
  }
}

//escolhe a dificuldade do jogo
function difficult() {
  background('#222');
  text('[selecionar: mouse]', 20, 590);

  textSize(30);
  fill('#d0efff');
  text('Math Destroyer', 185, 150);

  textSize(15);
  fill('white');
  text('Selecione a dificuldade', 220, 300);
  //imagem dos niveis
  image(medium, 100, 350, 110, 100);
  text('Medio', 115, 500);
  image(hard, 320, 350, 110, 100);
  text('Dificil', 325, 500);
  image(impossible, 550, 350, 110, 100);
  text('O ceu ta caindo', 510, 500);
  //tempoD para impedir o mouse de clicar na tela principal e aqui ao mesmo tempo
  tempoD++;
  if (mouseX >= 100 && mouseX <= 210 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    //como se fosse um highlight em cima do nivel
    noFill();
    stroke('#cc5500');
    strokeWeight(7);
    rect(100, 350, 110, 100);
    noStroke();
    if (mouseIsPressed && tempoD >= 15 && telaAtiva == 1) {
      gameMode = 'medium';
      vida = 3;
      telaAtiva = 2;
      strokeWeight(1);
    }
  }
  if (mouseX >= 320 && mouseX <= 430 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    noFill();
    stroke('#cc5500');
    strokeWeight(7);
    rect(320, 350, 110, 100);
    noStroke();
    if (mouseIsPressed && tempoD >= 15 && telaAtiva == 1) {
      gameMode = 'hard';
      vida = 3;
      telaAtiva = 3;
      strokeWeight(1);
    }
  }
  if (mouseX >= 550 && mouseX <= 660 && mouseY <= 455 && mouseY >= 350 && telaAtiva == 1) {
    noFill();
    stroke('#cc5500');
    strokeWeight(7);
    rect(550, 350, 110, 100);
    noStroke();
    if (mouseIsPressed && tempoD >= 15 && telaAtiva == 1) {
      gameMode = 'impossible';
      vida = 3;
      telaAtiva = 4;
      strokeWeight(1);
    }
  }
}

//para explicar um pouco do jogo
function intro() {
  background('#222');

  fill('white')
  rect(0, 500, 800, 300);
  image(derp, 700, 400, 100, 110);
  fill(0);
  //para as falas aparecerem uma atrás da outra
  switch (qual) {
    case 1:
      text(falas[0].fala, 50, 550);
      //tempo para impedir o player de clicar todas de uma vez só
      tempo++
      if (mouseIsPressed && tempo >= 50) {
        //qual = 2 leva para proxima fala e reseta o tempo
        qual = 2;
        tempo = 0;
      }
      break;
    case 2:
      text(falas[1].fala, 50, 550);
      tempo++;
      if (mouseIsPressed && tempo > 50) {
        qual = 3;
        tempo = 0;
      }
      break;
    case 3:
      text(falas[2].fala, 50, 530);
      tempo++;
      if (mouseIsPressed && tempo > 50) {
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

      //aqui ele chama a função difficult() usando a telaAtiva
      if (mouseIsPressed && tempo > 120 && telaAtiva == 5) {
        qual = 0;
        tempo = 0;
        ship1 = 150;
        telaAtiva = 1;
      }
      break;
  }

}

//isso é para marcação de pontos ou erros
function points() {

  //medium para primeira fase
  if (gameMode == 'medium') {
    //quando o player acerta
    switch (ponto) {
      case 1:
        fill('black');
        //desenha a bala
        rect(240, gun[0], 10, 40);
        //"atira" a bala
        if (gun[0] >= 200) {
          gun[0] -= 5;
        }
        //colisão com avião, toca o som, tira o avião e a bala de vista e chama a prox perg
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
          wow.setVolume(0.1);
          wow.play();
          ship3 = -100;
          gun[2] = -100;
          perg = 4;
        }
        break;
    }

    //aqui é a mesma coisa, só que ao contrario
    switch (inimigo) {
      case 1:
        fill('black');
        //desenha a bala inimiga
        rect(240, gunCounter[0], 10, 40);
        //atira a bala inimiga
        if (gunCounter[0] <= 560) {
          gunCounter[0] += 5;
        }
        //da dano em você, toca o som, perde vida e chama a prox perg
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

    //tela de perdedor ou vencedor
    if (perg == 4 && vida > 0) {
      tempo++
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(15);
      text('Parabens! Voce ganhou!\n     ESC para sair', 242, 385);
      if (tempo == 10)
        wow.play();
    }
    else if (perg == 4 && vida == 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(13);
      text('Melhor chance da proxima vez\n       ESC para sair', 220, 390);
    }
  }
  //para a segunda fase
  //isso tudo aqui funciona exatamente igual a antes
  else if (gameMode == 'hard') {
    switch (pontoH) {
      case 1:
        fill('black');
        rect(240, gun[3], 10, 40);
        if (gun[3] >= 200) {
          gun[3] -= 5;
        }
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
          ship2 = -100;
          gun[4] = -100;
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
          wow.setVolume(0.1);
          wow.play();
          ship3 = -100;
          gun[5] = -100;
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
    //mesma coisa aqui
    if (pergH == 4 && vida > 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(15);
      text('Parabens! Voce ganhou!\n     ESC para sair', 242, 385);
      countdown = 3600;
    }
    else if (pergH == 4 && vida == 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(13);
      text('Melhor chance da proxima vez\n       ESC para sair', 220, 390);
      countdown = 3600;
    }
  }
  //para a primeira parte da ultima fase
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
          ship2 = -100;
          gun[7] = -100;
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
          ship3 = -100;
          gun[8] = -100;
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
    //aqui ele chama a segunda parte ao invés de terminar o jogo
    if (pergIm == 4 && vida > 0) {
      telaAtiva = 6;
    }
    else if (pergIm == 4 && vida == 0) {
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(13);
      text('Melhor chance da proxima vez\n       ESC para sair', 220, 390);
    }
  }
}

//primeira fase
function mediumF() {
  tempo = 0;
  //fundo
  image(ceu1, 0, 0, 800, 600);
  //montanha
  fill(88, 234, 65)
  ellipse(600, eliY + 890, 2000, 1000);
  rect(0, eliY + 585, 800, 20)
  fill('white');
  //isso faz as montanha subirem
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  fill('black');
  textSize(15)
  text('vidas: ' + vida, 650, 50);

  //para os aviões estarem com parkinson
  image(plane, 200, ship1, 100, 50);
  //se ele não for atingido, continuará tremendo, se for, ele para e fica fora da tela
  if (ship1 != -100) {
    if (ship1 >= 130)
      ship1 -= 4;
    if (ship1 <= 170)
      ship1 += 3;
  }

  image(plane, 350, ship2, 100, 50);
  if (ship2 != -100) {
    if (ship2 >= 130)
      ship2 -= 4;
    if (ship2 <= 170)
      ship2 += 3;
  }

  image(plane, 500, ship3, 100, 50);
  if (ship3 != -100) {
    if (ship3 >= 130)
      ship3 -= 4;
    if (ship3 <= 170)
      ship3 += 3;
  }

  //ja expliquei a função
  points();

  //as perguntas
  switch (perg) {
    case 1:
      //fundo das perguntas
      fill('orange');
      rect(200, 300, 400, 200);

      //texto
      fill('black');
      textSize(22);
      text('Resolva a equacao', 220, 330);

      //perguntas
      text(numeros[0] + ' x __ = ' + numeros[0] * numeros[1], 296, 385);
      textSize(12);
      text('Quanto multiplicado por ' + numeros[0] + ', da ' + numeros[0] * numeros[1] + '?', 210, 420);

      //opções
      textSize(25);
      text(numeros[1], 240, 470);
      text(numeros[1] * 5, 320, 470);
      text((numeros[0] + 2), 420, 470);
      text(numeros[0] + 3, 500, 470);

      //se mouse estive no canto certo, a opção fica branca
      if (mouseX >= 208 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[1], 240, 470);
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          //esse ponto vai chamar a função points() e fazer o que tem que fazer, depois chamar a perg 2
          pew.setVolume(0.1);
          pew.play();
          ponto++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[1] * 5, 320, 470);
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
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigo++;
          perg = 0;
        }
      }
      if (mouseX >= 288 && mouseX <= 367 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text(numeros[3] * numeros[2], 320, 470);
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

//segunda fase
function hardF() {
  //fundo
  image(ceu2, 0, 0, 800, 600);
  fill(115, 174, 105);
  ellipse(600, eliY + 890, 2000, 1000);
  fill(110, 164, 105);
  rect(0, eliY + 585, 800, 20)
  //isso faz as montanha subir
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  fill('white');
  textSize(15)
  text('vidas: ' + vida, 650, 50);
  tempo++;
  //texto pro cronometro de 60s pra baixo
  countdown--;
  text('Tempo restante: ' + Math.floor(countdown / 60), 260, 550);

  //esse é os avião kkkk
  image(plane, 200, ship1, 100, 50);
  if (ship1 != -100) {
    if (ship1 >= 130)
      ship1 -= 4;
    if (ship1 <= 170)
      ship1 += 3;
  }

  image(plane, 350, ship2, 100, 50);
  if (ship2 != -100) {
    if (ship2 >= 130)
      ship2 -= 4;
    if (ship2 <= 170)
      ship2 += 3;
  }
  image(plane, 500, ship3, 100, 50);
  if (ship3 != -100) {
    if (ship3 >= 130)
      ship3 -= 4;
    if (ship3 <= 170)
      ship3 += 3;
  }

  points();

  //aqui repete tudo de antes, é um ctrl c + ctrl v, salvo o countdown
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
        text((numeros[0] + 2) + 'x' + numeros[1], 400, 470);
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
          if (mouseIsPressed) {
            pew.setVolume(0.1);
            pew.play();
            pontoH++;
            pergH = 0;
          }
        }
        if (mouseX >= 388 && mouseX <= 460 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
          fill('white');
          text((numeros[0] + 2) + 'x' + numeros[1], 400, 470);
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
        text((numeros[2]) + 'x' + (numeros[3]), 400, 470);
        text((numeros[2] + 1) + 'x' + (numeros[3] + 3), 510, 470);
        if (mouseX >= 200 && mouseX <= 287 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[2] + 2) + 'x' + (numeros[3]), 210, 470);
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
          if (mouseIsPressed) {
            pew.setVolume(0.1);
            pew.play();
            inimigoH++
            pergH = 0;
          }
        }
        if (mouseX >= 388 && mouseX <= 470 && mouseY <= 490 && mouseY >= 410) {
          fill('white');
          text((numeros[2]) + 'x' + (numeros[3]), 400, 470);
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

  //isso aqui é que se o tempo chegar a 0, é game over bb
  if (Math.floor(countdown / 60) <= 0) {
    pergH = 0;
    countdown = 50;
    fill('orange');
    rect(200, 300, 400, 200);
    fill('black');
    textSize(12);
    text('Melhor chance da proxima vez\n       ESC para sair', 220, 390);
  }
}

//fase 3 parte 1
function impossibleF() {
  image(ceu3, 0, 0, 800, 600);
  fill(255, 97, 74);
  ellipse(600, eliY + 890, 2000, 1000);
  rect(0, eliY + 585, 800, 20)
  //isso faz as montanha subir
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  textSize(15)
  text('vidas: ' + vida, 650, 50);

  //esse é os avião kkkk
  image(gib, 200, ship1, 50, 50);
  if (ship1 != -100) {
    if (ship1 >= 130)
      ship1 -= 4;
    if (ship1 <= 170)
      ship1 += 3;
  }

  image(gib, 350, ship2, 50, 50);
  if (ship2 != -100) {
    if (ship2 >= 130)
      ship2 -= 4;
    if (ship2 <= 170)
      ship2 += 3;
  }
  image(gib, 500, ship3, 50, 50);
  if (ship3 != -100) {
    if (ship3 >= 130)
      ship3 -= 4;
    if (ship3 <= 170)
      ship3 += 3;
  }

  points();

  //tudo funciona igual a antes
  switch (pergIm) {
    case 1:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');

      textSize(22);
      text('Resolva a equacao', 220, 330);
      //perguntas
      text('__ x __ = ' + numeros[6] * (numeros[7]), 296, 385);
      textSize(18);
      text((numeros[7]) + 'x' + (numeros[6] + 2), 210, 470);
      text(numeros[6] + 'x' + (numeros[7]), 310, 470);
      text((numeros[7] + 2) + 'x' + numeros[6], 410, 470);
      text((numeros[6] + 1) + 'x' + (numeros[7] + 2), 510, 470);
      tempo++;
      if (mouseX >= 205 && mouseX <= 299 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
        fill('white');
        text((numeros[7]) + 'x' + (numeros[6] + 2), 210, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 310 && mouseX <= 399 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
        fill('white');
        text(numeros[6] + 'x' + numeros[7], 310, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          pontoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 410 && mouseX <= 499 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
        fill('white');
        text((numeros[7] + 2) + 'x' + numeros[6], 410, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 510 && mouseX <= 599 && mouseY <= 490 && mouseY >= 410 && tempo >= 50) {
        fill('white');
        text((numeros[6] + 1) + 'x' + (numeros[7] + 2), 510, 470);
        if (mouseIsPressed) {
          inimigoIm++;
          pew.setVolume(0.1);
          pew.play();
          pergIm = 0;
        }
      }
      break;
    case 2:
      fill('orange');
      rect(200, 300, 400, 200);
      fill('black');
      textSize(22);
      text('Resolva a equacao', 220, 330);
      text('__ x __ = ' + numeros[8] * (numeros[9]), 296, 385);
      textSize(18);
      text((numeros[8] + 2) + 'x' + (numeros[9]), 210, 470);
      text((numeros[8] + 1) + 'x' + (numeros[9] + 1), 310, 470);
      text((numeros[8]) + 'x' + (numeros[9]), 410, 470);
      text((numeros[8] + 1) + 'x' + (numeros[9] + 3), 510, 470);
      if (mouseX >= 205 && mouseX <= 299 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[8] + 2) + 'x' + (numeros[9]), 210, 470);
        if (mouseIsPressed) {
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigoIm++;
          pew.setVolume(0.1);
          pew.play();
          pergIm = 0;
        }
      }
      if (mouseX >= 310 && mouseX <= 399 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[8] + 1) + 'x' + (numeros[9] + 1), 310, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++
          pergIm = 0;
        }
      }
      if (mouseX >= 410 && mouseX <= 499 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[8]) + 'x' + (numeros[9]), 410, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          pontoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 510 && mouseX <= 599 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[8] + 1) + 'x' + (numeros[9] + 3), 510, 470);
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
      text('Resolva a equacao', 220, 330);
      text('__ x __ = ' + numeros[10] * (numeros[11]), 296, 385);
      textSize(18);
      text((numeros[10] + 2) + 'x' + (numeros[11]), 210, 470);
      text((numeros[10] + 3) + 'x' + (numeros[11]), 310, 470);
      text((numeros[10] + 1) + 'x' + (numeros[11] + 4), 410, 470);
      text((numeros[10]) + 'x' + (numeros[11]), 510, 470);
      if (mouseX >= 205 && mouseX <= 299 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[10] + 2) + 'x' + numeros[11], 210, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          //da um ponto e a pergunta vai 0, pra depois proceder
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 310 && mouseX <= 399 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[10] + 3) + 'x' + numeros[11], 310, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 410 && mouseX <= 499 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[10] + 1) + 'x' + (numeros[11] + 4), 410, 470);
        if (mouseIsPressed) {
          pew.setVolume(0.1);
          pew.play();
          inimigoIm++;
          pergIm = 0;
        }
      }
      if (mouseX >= 510 && mouseX <= 599 && mouseY <= 490 && mouseY >= 410) {
        fill('white');
        text((numeros[10]) + 'x' + numeros[11], 510, 470);
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

//fase 3 parte 2
function ending() {
  //fundo
  image(ceu3, 0, 0, 800, 600);
  fill(255, 97, 74);
  ellipse(600, eliY + 890, 2000, 1000);
  rect(0, eliY + 585, 800, 20)
  //isso faz as montanha subir
  if (eliY > 0) {
    eliY -= 1.5;
  }
  //esse é o texto da vida
  textSize(15)
  text('vidas: ' + vida, 650, 50);

  //antes do tiro, gubam esta na nave, depois do tiro gubam esta sem a nave e puto
  if (gun[9] != -100){
    image(gubam, 400, finalBoss, 50, 50);
  }
  else {
      image(gubama, 400, finalBoss, 50, 50);
}

  //pra gubam descer dos seus na nave
  if (finalBoss <= 200) {
    finalBoss += 3;
  }

  //isso seria points(), mas achei melhor deixar aqui
  switch(pontoEnd){
      case 1:
        fill('black');
        rect(420, gun[9], 10, 40);
        //pra bala subir
        if (gun[9] >= 240) {
            gun[9] -= 5;
        }
        //pra ela colidir com gubam e puxar a proxima pergunta
        if (gun[9] == 240) {
            boom.setVolume(0.1);
            boom.play();
            gun[9] = -100;
            //you underestimate my power!
            power.setVolume(0.5);
            power.play();
            pergEnd = 2;
        }
        break;
      case 2:
        fill('black');
        rect(420, gun[10], 10, 40);
        if (gun[10] >= 240) {
            gun[10] -= 5;
        }
        //fim de gubam
        if (gun[10] == 240) {
            boom.play();
            vaderDeath.play();
            gun[10] = -100;
            weWon.setVolume(0.1);
            weWon.play();
            pergEnd = 4;

        }
      break;
  }

  //1 hit kill com gubam
  switch(inimigoEnd){
      case 1:
        fill('black');
        rect(400, gunCounter[9], 10, 40);
        if (gunCounter[9] <= 560) {
          gunCounter[9] += 5;
        }
        if (gunCounter[9] == 560) {
          slowOof.play();
          gunCounter[9] = 900;
          vida = 0;
          pergEnd = 3;
        }
        break;
  }

  //no caso de tu morrer com gubam
  if(pergEnd == 3){
    fill('orange');
    rect(200, 300, 400, 200);
    fill('black');
    textSize(22);
    text('morreu morreu\nESC para sair', 250, 385);

    //para as variaveis voltarem ao que deveriam pro player poder jogar de novo
    if (mouseIsPressed && pergEnd == 3){
        telaAtiva = 0;
        vida = 3, finalBoss = -100, pergEnd = 1, inimigoEnd = 0, inimigoH = 0, pontoH = 0, pergH = 1, ship1 = 150, ship2 = 150, ship3 = 150, countdown = 3600, tempo = 0, gun[9] = 560;
    }
  }

  //no caso de tu ganhar contra gubam
  else if(pergEnd == 4){
    fill('orange');
    rect(200, 300, 400, 200);
    fill('black');
    textSize(22);
    text('CONGRATULATIONS!!\n  ESC pra sair', 226, 385);

    //para as variaveis voltarem ao que deveriam pro player poder jogar de novo
    if (mouseIsPressed && pergEnd == 4){
        telaAtiva = 0;
        vida = 3, finalBoss = -100, pergEnd = 1, inimigoEnd = 0, inimigoH = 0, pontoH = 0, pergH = 1, ship1 = 150, ship2 = 150, ship3 = 150, countdown = 3600, tempo = 0, gun[9] = 560;
    }
}

  //as perguntas pro gubam
  //tudo aqui funciona exatamente como antes, porem com duas perguntas
  if (finalBoss >= 200) {
      switch(pergEnd){
          case 1:
            fill('orange');
            rect(200, 300, 400, 200);
            fill('black');
            textSize(22);
            text('__ x __ = '+numeros[12]*numeros[13], 296, 385);
            textSize(18);
            text(numeros[12]+'x'+numeros[13], 260, 470);
            text((numeros[13]+3)+'x'+(numeros[13]-2), 450, 470);
            if (mouseX >= 240 && mouseX <= 385 && mouseY <= 490 && mouseY >= 410) {
                fill('white');
                text(numeros[12]+'x'+numeros[13], 260, 470);
                if (mouseIsPressed) {
                    pew.setVolume(0.1);
                    pew.play();
                    pontoEnd = 1;
                    pergEnd = 0;
                }
            }

            //errou morreu
            if (mouseX >= 410 && mouseX <= 580 && mouseY <= 490 && mouseY >= 410) {
                fill('white');
                text((numeros[13]+3)+'x'+(numeros[13]-2), 450, 470);
                if (mouseIsPressed) {
                    pew.setVolume(0.1);
                    pew.play();
                    inimigoEnd=1;
                    pergEnd = 0;
                }
            }
            break;
        case 2:
            fill('orange');
            rect(200, 300, 400, 200);
            fill('black');
            textSize(22);
            text(numeros[14]+' x '+numeros[15]+'= ?', 296, 385);
            textSize(18);
            text((numeros[14]+numeros[15]+numeros[14]), 260, 470);
            text((numeros[14]*numeros[15]), 450, 470);
            if (mouseX >= 240 && mouseX <= 385 && mouseY <= 490 && mouseY >= 410) {
                fill('white');
                text((numeros[14]+numeros[15]+numeros[14]), 260, 470);
                if (mouseIsPressed) {
                    pew.setVolume(0.1);
                    pew.play();
                    //da um ponto e a pergunta vai 0, pra depois proceder
                    inimigoEnd = 1;
                    pergEnd = 0;
                }
            }

            //errou morreu
            if (mouseX >= 410 && mouseX <= 580 && mouseY <= 490 && mouseY >= 410) {
                fill('white');
                text((numeros[14]*numeros[15]), 450, 470);
                if (mouseIsPressed) {
                    pew.setVolume(0.1);
                    pew.play();
                    pontoEnd = 2;
                    pergEnd = 0;
                }
            }
            break;
        }
      }
    }

function keyPressed() {

  //aqui é em todos as fases, para tu sair e o jogo todo resetar
  if (keyCode == ESCAPE && (telaAtiva == 5 || telaAtiva == 2 || telaAtiva == 3 ||telaAtiva == 4 || telaAtiva == 6)) {
    telaAtiva = 0;
    eliY = 210, finalBoss = -100;
    perg = 1, pergH = 1, pergIm = 1, pergEnd = 1;
    gun = [560, 560, 560, 560, 560, 560, 560, 560, 560, 560, 560];
    gunCounter = [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200];
    ponto = 0, pontoH = 0, pontoIm = 0, pontoEnd = 0, inimigo = 0, inimigoH = 0, inimigoIm = 0, inimigoEnd = 0;
    ship1 = 150, ship2 = 150, ship3 = 150;
    vida = 3, tempo = 0, tempoD = 0, gameMode = '', countdown = 3600, qual = 1;
  }

  //isso é pra voltar de da telaAtiva 1 para 0
  if (keyCode == ESCAPE && telaAtiva == 1){
      tempoD = 0;
      telaAtiva = 0;
  }
}
