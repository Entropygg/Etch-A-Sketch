let gridSize = 16;
let gridWidth = 4;

createGrid(gridWidth);
createEventListeners();

document.querySelector('#resetButton').addEventListener('click', ()=>{
    reset();
    createGrid(gridWidth);
    createEventListeners();
})

document.querySelector('#gridButton').addEventListener('click', ()=>{
    reset();
    gridSize = prompt("Please enter the new grid size");
    gridWidth = Math.round(Math.sqrt(gridSize));
    createGrid(gridWidth);
    createEventListeners();
})

function reset(){
    let colList = document.querySelectorAll('#gridColumn');
    if (colList == null){
        return;
    }
    colList.forEach( (value) => {
        let squareList = document.querySelectorAll(value > '#gridElement');
        squareList.forEach( (square) => {
            value.removeChild(square);
        })
        document.querySelector('#gridContainer').removeChild(value);
    })
}


function createGrid(width){
    for (let i = 0; i <= width -1; i++){
        createColumn(width);
    }
}

function createColumn(width){
    let gridContainer = document.querySelector('#gridContainer');
    let column = document.createElement('div');
    column.id = "gridColumn";
    gridContainer.style.display = 'flex';
    gridContainer.style.flexDirection = 'row';
    column.style.display = 'flex';
    column.style.flexDirection = 'column';
    column.style.width = screen.width / gridWidth + 'px';
    for (let i = 0; i <= width -1; i++){
        let square = createSquare();
        column.appendChild(square);
    }
 
    gridContainer.appendChild(column);
}

function applyStyles(box){
    let height = screen.height / 4;
    box.style.height = screen.width / gridWidth + 'px';
    box.className = 'gridElement'
}

function createSquare(){
    let square = document.createElement('div');
    applyStyles(square);
    return square;
}

function createEventListeners(){
    let gridList = document.querySelectorAll('.gridElement');
    gridList.forEach( (value)=> {
        value.addEventListener('mouseover', ()=>{
            value.style.backgroundColor = 'black';
        })
    })
}