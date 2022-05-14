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
const CONTAINER_WIDTH = +getComputedStyle(boxContainer).height.slice(0,-2);
const CONTAINER_HEIGHT = +getComputedStyle(boxContainer).width.slice(0,-2);

// INITIAL SETUP
setGridSize(size.value);
setColor('colorBlack');

// EVENT LISTENERS
size.addEventListener('input', () => {
    clearGrid();
    setGridSize(size.value);
})  
clearColorsBtn.addEventListener('click', resetColors);
colorBlack.addEventListener('click', () => setColor(colorBlack.value));
colorRainbow.addEventListener('click', () => setColor(colorRainbow.value));
colorShade.addEventListener('click', () => setColor(colorShade.value));
eraser.addEventListener('click', () => setColor(eraser.value));

// FUNCTIONS
function setGridSize(size) {
    const width = CONTAINER_WIDTH/size;
    const height = CONTAINER_HEIGHT/size;
    for (let i = 0; i < size*size; i++) {
        let box = document.createElement('div');
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        box.classList.add('box');
        boxContainer.appendChild(box);
    }
}

function setColor(color) {
    let opacity = 0.1;
    boxContainer.addEventListener('mouseover', (e) => {
        if (e.target.matches('.box')) {
            // this shade thing doesn't really work
            if (color === 'colorShade') {
                opacity += 0.1
                // console.log(opacity);
                if (opacity > 1) opacity = 0;
                e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
            }
            if (color === 'colorBlack') e.target.style.backgroundColor = 'black';
            if (color === 'colorRainbow') e.target.style.backgroundColor = getRandomColor();
            if (color === 'eraser') e.target.style.backgroundColor = '#fff';
        }
    })
}

function clearGrid() {
    const elements = document.querySelectorAll('.box');
    elements.forEach(el => el.remove());
}

function resetColors() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor = '#fff');
}

function getRandomColor() {
    let color = '#';
    const letters = 'adbcdef0123456789';
    for (let i = 0; i < 6; i++) {
        color += letters.charAt(Math.floor(Math.random()*letters.length));
    }
    return color;
}