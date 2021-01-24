const slider = document.getElementById("slider");
const sizeLabel = document.getElementById("size-label");
let grid = document.getElementById("screen");

createGrid(slider.min);

slider.addEventListener('input', () => {
    let size = slider.value;
    sizeLabel.textContent = `Choose Size: ${size} x ${size}`;
});

slider.addEventListener('mouseup', () => {
    createGrid(slider.value);
});

function createGrid(size) {
    deleteGrid();
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for(size *= size; size > 0; size--) {
        let cell = document.createElement("div");
        cell.classList = "cell";
        grid.append(cell);
    }
}

function deleteGrid() {
    let elements = document.getElementsByClassName("cell");
    while(elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

