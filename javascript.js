let gridNumber = 16

let grids = gridNumber ** 2;


const gridContainer = document.querySelector('.grid-container');

function createGrids(grids) {
    
    console.log(`${(gridNumber)** 2}`)
    for(let i = 0; i < grids; i++) {
        console.log(i);
        const grid = document.createElement('div');
        grid.classList.add("grid"); 
        // grid.textContent = i;
        gridContainer.appendChild(grid);
    }
    
}

createGrids(grids);