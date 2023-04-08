const MAX_GRIDS = 100;
let gridNumber = 16;
let grids = gridNumber ** 2;
let gridArea;


const gridContainer = document.querySelector('.grid-container');

function createGrids(grids) {
    
    console.log(`${(gridNumber)** 2}`)
    for(let i = 0; i < grids; i++) {
        console.log(i);
        const grid = document.createElement('div');
        grid.classList.add("grid"); 
        // grid.textContent = i+1;
        gridContainer.appendChild(grid);
    }
    
}
createGrids(grids);

function calculateDivArea() {

}
const changeButton = document.querySelector('#change-grids-button');
changeButton.addEventListener('click', () => {
    let numberOfGrids = prompt("Enter the number of grids");
    // Checking if the values acceptable
    if(numberOfGrids < 0) {
        alert("Cannot be less than 0");
        return;
    }
    if(!Number.isInteger(numberOfGrids)) {
        alert("Number has to be a integer");
        return;
    }
    if(numberOfGrids > MAX_GRIDS) {
        alert("The max value of grid is 100");
        return;
    }
});



