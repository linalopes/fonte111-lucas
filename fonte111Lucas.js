let input, buttonSave, buttonPNG, buttonGIF, greeting, postGreeting;
let images = {};
let lastInput = '';
let drawMode = 'PNG';

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
  input = select('#nameInput');
  buttonSave = select('#buttonSave');
  buttonGIF = select('#buttonGIF');
  buttonPNG = select('#buttonPNG');
  greeting = select('#greeting');
  postGreeting = select('#postGreeting');

  const header = select('#header');
  const myCanvas = createCanvas(windowWidth, windowHeight - header.height);
  myCanvas.parent('htmlCanvas');

  buttonSave.mousePressed(save);
  buttonGIF.mousePressed(doGIF);
  buttonPNG.mousePressed(doPNG);
  buttonSave.hide();
  postGreeting.hide();
  doPNG();
}

function draw() {
  const name = input.value().toUpperCase();

  if(drawMode == 'PNG') drawPNG(name);
  else drawGIF(name);

  if(name !== '') {
    postGreeting.show();
    buttonSave.show();
    buttonSave.style('display', 'inline');
  } else {
    postGreeting.hide();
    buttonSave.hide();
  }
}

function drawGIF(name) {
  name = name.replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, ' ');
  name = name.replace(/ +/g, ' ');
  name = name.replace(/ /g, '-');

  if (name === '') return;

  const iH = 1.1 * height;

  clear();

  const imageIndex = floor((millis() / 400.0) % name.length);
  const mImage = images[name[imageIndex]];
  image(mImage, 0, -96, iH / 1.777778, iH);
}

function drawPNG(name) {
  if(name == lastInput) return;
  lastInput = name;

  name = name.replace(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, ' ');
  name = name.replace(/ +/g, ' ');
  name = name.replace(/ /g, '-');

  const iW = width / name.length;

  clear();

  for (let i = 0; i < name.length; i++) {
    let letter = name[i];
    image(images[letter], iW*i, 0, iW, iW * 1.7778);
  }
}

function save() {
  const name = input.value();
  if(drawMode == 'PNG') save(name + '_' + millis() + '.png');
}

function doGIF() {
  drawMode = 'GIF';
  lastInput = '';
  buttonPNG.style('display', 'inline');
  buttonGIF.hide();
}

function doPNG() {
  drawMode = 'PNG';
  lastInput = '';
  buttonGIF.style('display', 'inline');
  buttonPNG.hide();
}
