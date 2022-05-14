// TAKE ELEMENTS FROM HTML
const boxContainer = document.querySelector('.box-container');
const size = document.getElementById('size');
const clearColorsBtn = document.getElementById('clear-colors');
const eraser = document.getElementById('eraser');
const colorBlack = document.getElementById('color-black');
const colorShade = document.getElementById('color-shade');
const colorRainbow = document.getElementById('color-rainbow');
// slice and '+' are here because getComputedStyle gets size as string with px at the end
// and I only want the converted number without the 'px'
const WIDTH = +getComputedStyle(boxContainer).height.slice(0,-2);
const HEIGHT = +getComputedStyle(boxContainer).width.slice(0,-2);