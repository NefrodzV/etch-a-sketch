const MAX_GRIDS = 100;
let gridNumber = 16;
let gridArea;
let flag;
// Need this value to remove existing nodes
let temp = 0;
window.onmouseup = () => {
    flag = false;
};
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.cssText = 
`grid-template-columns : repeat(${gridNumber}, 1fr) ;
 grid-template-rows: repeat(${gridNumber}, 1fr)`;
gridContainer.setAttribute("cursor","default");
function addListener(element) {
    element.addEventListener('mouseover', () => {
      if(flag == true) {
            element.style.cssText = `background-color: rgb(${getRandom()},${getRandom()},${getRandom()})`;
        }
    });
    element.addEventListener('mousedown',()=> {
        flag = true;
        element.style.cssText = `background-color: rgb(${getRandom()},${getRandom()},${getRandom()})`;
    });
    element.addEventListener('mouseup', ()=> {
        flag= false;
    })
}

function createGrids() {
    
    console.log(`${(gridNumber)** 2}`)
    for(let i = 0; i < gridNumber ** 2; i++) {
        console.log(i);
        const grid = document.createElement('div');
        // grid.textContent = i +1;
        grid.classList.add("grid"); 
        grid.setAttribute("draggable",false);
        addListener(grid);
        gridContainer.appendChild(grid);
    }
    
}

// Runs to create a default grid 16 x 16
createGrids(gridNumber);

function getRandom() {
    return Math.floor(Math.random() * 256);
}

function removeGrids(number) {
    for(let i = 0; i < number ** 2; i++) {
        const gridToRemove = document.querySelector('.grid')
        gridToRemove.remove();
    }
}
function updateGrid() {
    gridContainer.style.cssText = 
    `grid-template-columns : repeat(${gridNumber}, 1fr) ;
     grid-template-rows: repeat(${gridNumber}, 1fr)`;    
}

const changeButton = document.querySelector('#change-grids-button');

changeButton.addEventListener('click', () => {
    temp = gridNumber; // Create a temp value to delete exiting nodest
    gridNumber = Number(prompt("Enter the number of grids"));
    // Checking if the values acceptable
    if(gridNumber < 2) {
        alert("Cannot be less than 2");
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
    updateGrid();
    createGrids();
});



