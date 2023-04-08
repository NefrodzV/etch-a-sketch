const MAX_GRIDS = 100;
let gridNumber = 16;
let gridArea;

// Need this value to remove existing nodes
let temp = 0;

const gridContainer = document.querySelector('.grid-container');

function createGrids() {
    
    console.log(`${(gridNumber)** 2}`)
    for(let i = 0; i < gridNumber ** 2; i++) {
        console.log(i);
        const grid = document.createElement('div');
        grid.classList.add("grid"); 
        gridContainer.appendChild(grid);
    }
    
}
// Runs to create a default grid 16 x 16
createGrids(gridNumber);

function removeGrids(number) {
    for(let i = 0; i < number ** 2; i++) {
        const gridToRemove = document.querySelector('.grid')
        gridToRemove.remove();
    }
}
function calculateDivArea() {
    gridArea = (26 * gridNumber) + gridNumber;
}

const changeButton = document.querySelector('#change-grids-button');

changeButton.addEventListener('click', () => {
    temp = gridNumber; // Create a temp value to delete exiting nodest
    gridNumber = Number(prompt("Enter the number of grids"));
    // Checking if the values acceptable
    if(gridNumber < 0) {
        alert("Cannot be less than 0");
        return;
    }
    if(!Number.isInteger(gridNumber)) {
        alert("Number has to be a integer");
        return;
    }
    if(gridNumber > MAX_GRIDS) {
        alert("The max value of grid is 100");
        return;
    }

    removeGrids(temp);
    calculateDivArea();
    
    gridContainer.style.width = gridArea + "px";
    gridContainer.style.height = gridArea + "px";

    createGrids();
});



