let input, buttonSave, greeting;
let images = {};
let lastInput = '';

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
  images['-'] = loadImage('data/-.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput();
  input.position(20, 100);

  buttonSave = createButton('salvar');
  buttonSave.position(input.x + input.width, 100);
  buttonSave.mousePressed(save);
  buttonSave.hide();

  greeting = createElement('h4', 'Qual seu nome?');
  greeting.position(20, 5);
}

function draw() {
  const name = input.value().toUpperCase();
  if(name == lastInput) return;
  lastInput = name;
  greet(name);
}

function greet(name) {
  name = name.replace(/ /g, '-');
  const iY = input.y + input.height;
  const iW = width / name.length;

  clear();

  for (let i=0; i<name.length; i++) {
    let letter = name[i];
    image(images[letter], iW*i, iY, iW, iW * 1.7778);
  }

  if(name !== '') {
    greeting.html('Olá ' + lastInput + '! Sua coreografia da Pablo é assim:');
    buttonSave.show();
  }
  else {
    greeting.html('Qual seu nome?');
    buttonSave.hide();
  }
}

function save() {
  const name = input.value();
  save(name + '_' + millis() + '.png');
}
