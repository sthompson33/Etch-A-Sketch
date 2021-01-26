const slider = document.getElementById("slider");
const sizeLabel = document.getElementById("size-label");

let grid = document.getElementById("screen");

/*animation for dials*/ 
let oldx = 0;
let oldy = 0;
const leftDial = document.getElementById("left-dial");
const rightDial = document.getElementById("right-dial");
grid.addEventListener('mousemove', (e) => {
    if(e.pageX != oldx) {
        leftDial.classList.toggle("rotate");
    } else {
        rightDial.classList.toggle("rotate");
    }
    oldx = e.pageX;
});

createGrid(slider.min);

slider.addEventListener('input', () => {
    let size = slider.value;
    sizeLabel.textContent = `Choose Size: ${size} x ${size}`;
});

slider.addEventListener('mouseup', () => {
    createGrid(slider.value);
});

const blackBtn = document.getElementById("blackBtn");
blackBtn.addEventListener('click', () => {
    changeColor("black")
});

const randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener('click', () => {
    let cells = document.querySelectorAll(".cell");
    for(let i = cells.length - 1; i >= 0; i--) {
        cells[i].addEventListener('mouseenter', () => {
            cells[i].style.backgroundColor = randomColor();
        });
    }
});

function randomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math.random() * 255)})`;
}

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener('mouseleave', () =>{
    changeColor(colorPicker.value);
});

const eraseBtn = document.getElementById("eraseBtn");
eraseBtn.addEventListener('click', () => {
    changeColor("white");
});

const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener('click', () => {
    clearBtn.blur();
    deleteGrid();
    createGrid(slider.value);
});

function createGrid(size) {
    deleteGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(size *= size; size > 0; size--) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = "black";
        });
        grid.append(cell);
    }
}
    
function deleteGrid() {
    let elements = document.getElementsByClassName("cell");
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function changeColor(color) {
    let cells = document.querySelectorAll(".cell");
    for(let i = cells.length - 1; i >= 0; i--) {
        cells[i].addEventListener('mouseenter', () => {
            cells[i].style.backgroundColor = color;
        });
    }
}