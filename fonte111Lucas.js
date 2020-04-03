let input, button, greeting;
let A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, Y, W, Z;

function preload() {
  A = loadImage('data/A.png');
  B = loadImage('data/B.png');
  C = loadImage('data/C.png');
  D = loadImage('data/D.png');
  E = loadImage('data/E.png');
  F = loadImage('data/F.png');
  G = loadImage('data/G.png');
  H = loadImage('data/H.png');
  I = loadImage('data/I.png');
  J = loadImage('data/J.png');
  K = loadImage('data/K.png');
  L = loadImage('data/L.png');
  M = loadImage('data/M.png');
  N = loadImage('data/N.png');
  O = loadImage('data/O.png');
  P = loadImage('data/P.png');
  Q = loadImage('data/Q.png');
  R = loadImage('data/R.png');
  S = loadImage('data/S.png');
  T = loadImage('data/T.png');
  U = loadImage('data/U.png');
  V = loadImage('data/V.png');
  W = loadImage('data/W.png');
  X = loadImage('data/X.png');
  Y = loadImage('data/Y.png');
  Z = loadImage('data/Z.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(20, 100);

  button = createButton('ok');
  button.position(input.x + input.width, 100);
  button.mousePressed(greet);
  
  greeting = createElement('h2', 'Qual seu nome?');
  greeting.position(20, 5);
}

function greet() {
  const name = input.value();
  greeting.html('Olá ' + name + '! Sua coreografia da Pablo é assim:');
  input.value('');
  clear();
  for (let i=0; i<name.length; i++) {
    //text(name[i],width/2+4*i, height/4);
    switch (name[i]) {
    case 'a':
      image(A, 100*i, height/2, 100, 100);
      break;
    case 'b':
      image(B, 100*i, height/2, 100, 100);
      break;
    case 'c':
      image(C, 100*i, height/2, 100, 100);
      break;
    case 'd':
      image(D, 100*i, height/2, 100, 100);
      break;
    case 'e':
      image(E, 100*i, height/2, 100, 100);
      break;
    case 'f':
      image(F, 100*i, height/2, 100, 100);
      break;
    case 'g':
      image(G, 100*i, height/2, 100, 100);
      break;
    case 'h':
      image(H, 100*i, height/2, 100, 100);
      break;
    case 'i':
      image(I, 100*i, height/2, 100, 100);
      break;
    case 'j':
      image(J, 100*i, height/2, 100, 100);
      break;
    case 'k':
      image(K, 100*i, height/2, 100, 100);
      break;
    case 'l':
      image(L, 100*i, height/2, 100, 100);
      break;
    case 'm':
      image(M, 100*i, height/2, 100, 100);
      break;
    case 'n':
      image(N, 100*i, height/2, 100, 100);
      break;
    case 'o':
      image(O, 100*i, height/2, 100, 100);
      break;
    case 'p':
      image(P, 100*i, height/2, 100, 100);
      break;
    case 'q':
      image(Q, 100*i, height/2, 100, 100);
      break;
    case 'r':
      image(R, 100*i, height/2, 100, 100);
      break;
    case 's':
      image(S, 100*i, height/2, 100, 100);
      break;
    case 't':
      image(T, 100*i, height/2, 100, 100);
      break;
    case 'u':
      image(U, 100*i, height/2, 100, 100);
      break;
    case 'v':
      image(V, 100*i, height/2, 100, 100);
      break;
    case 'w':
      image(W, 100*i, height/2, 100, 100);
      break;
    case 'x':
      image(x, 100*i, height/2, 100, 100);
      break;
    case 'y':
      image(Y, 100*i, height/2, 100, 100);
      break;
    case 'z':
      image(Z, 100*i, height/2, 100, 100);
      break;
    }
  }


  //for (let i = 0; i < 200; i++) {
  //  push();
  //  fill(random(255), 255, 255);
  //  translate(random(width), random(height));
  //  rotate(random(2 * PI));
  //  text(name, 0, 0);
  //  pop();
  //}
}

function alphabet(letter) {
  
}

function keyPressed() {
  if (key == 'S') {
    save('msg'+millis()+'.png');
  }
}
