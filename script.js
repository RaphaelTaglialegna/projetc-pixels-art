const paletteColorClass = document.querySelector('#color-palette');
const pixelBoardClass = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');

function clearPixel() {
  const pixelElement = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelElement.length; index += 1) {
    pixelElement[index].style.background = 'rgb(255,255,255)';
  }
}

buttonClear.addEventListener('click', clearPixel);

function selectedClass(event) {
  const classElement = document.querySelector('.selected');
  classElement.classList.remove('selected');
  event.target.classList.add('selected');
}

paletteColorClass.addEventListener('click', selectedClass);

function selectedColor(event) {
  const styleElement = document.querySelector('.selected');
  const style = getComputedStyle(styleElement);
  event.target.style.background = style.backgroundColor;
}

pixelBoardClass.addEventListener('click', selectedColor);

function className() {
  const nameClassBlack = document.querySelector('.color');
  nameClassBlack.classList.add('selected');
}

function createPixel() {
  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    for (let index = 0; index < 5; index += 1) {
      const divPixelLine = document.querySelectorAll('.line');
      const divPixel = document.createElement('div');
      divPixel.style.background = 'rgb(255,255,255)';
      divPixel.className = 'pixel';
      divPixelLine[indexLine].appendChild(divPixel);
    }
  }
  className();
}
function createLinePixel() {
  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    const divPixelBoard = document.querySelector('#pixel-board');
    const divLine = document.createElement('div');
    divLine.className = 'line';
    divPixelBoard.appendChild(divLine);
  }
  createPixel();
}

// Base da Função utilizada do site https://stackoverflow.com/questions/11162664/generate-color-palette-using-javascript.

// Para atender o Requisito 02 foram usadas duas funções, a createDiv fica responsável para criar divs onde serão armazenasdas as paletas de cores.
function createDiv(r, g, b) {
  const divPallete = document.querySelector('#color-palette');
  const divColors = document.createElement('div');
  divColors.style.background = `rgb(${r},${g},${b})`;
  divColors.className = 'color';
  divPallete.appendChild(divColors);
}
// A função creatColorPalette vai criar de forma randomica as cores da minha paleta tendo como condição 1 que a primeira cor seja preta.

function createColorPalette() {
  const numbOfDivs = 4;
  let r = 0;
  let g = 0;
  let b = 0;
  for (let index = 1; index < numbOfDivs; index += 1) {
    if (r === 0 && g === 0 && b === 0) {
      createDiv(r, g, b);
      b = Math.floor(Math.random() * 255);
      g = Math.floor(Math.random() * 255);
      r = Math.floor(Math.random() * 255);
    }
    createDiv(r, g, b);

    b = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    r = Math.floor(Math.random() * 255);
  }
  createLinePixel();
}
createColorPalette();
