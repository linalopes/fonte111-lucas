let input, button, greeting;
let images = {};

function preload() {
  images['A'] = loadImage('data/A.png');
  images['B'] = loadImage('data/B.png');
  images['C'] = loadImage('data/C.png');
  images['D'] = loadImage('data/D.png');
  images['E'] = loadImage('data/E.png');
  images['F'] = loadImage('data/F.png');
  images['G'] = loadImage('data/G.png');
  images['H'] = loadImage('data/H.png');
  images['I'] = loadImage('data/I.png');
  images['J'] = loadImage('data/J.png');
  images['K'] = loadImage('data/K.png');
  images['L'] = loadImage('data/L.png');
  images['M'] = loadImage('data/M.png');
  images['N'] = loadImage('data/N.png');
  images['O'] = loadImage('data/O.png');
  images['P'] = loadImage('data/P.png');
  images['Q'] = loadImage('data/Q.png');
  images['R'] = loadImage('data/R.png');
  images['S'] = loadImage('data/S.png');
  images['T'] = loadImage('data/T.png');
  images['U'] = loadImage('data/U.png');
  images['V'] = loadImage('data/V.png');
  images['W'] = loadImage('data/W.png');
  images['X'] = loadImage('data/X.png');
  images['Y'] = loadImage('data/Y.png');
  images['Z'] = loadImage('data/Z.png');
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
  const name = input.value().toUpperCase();
  greeting.html('Olá ' + name + '! Sua coreografia da Pablo é assim:');
  input.value('');
  const iY = input.y + input.height;
  clear();

  for (let i=0; i<name.length; i++) {
    let letter = name[i];
    image(images[letter], 100*i, iY, 100, 177.7778);
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
