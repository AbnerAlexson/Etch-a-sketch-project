//variables
let buttonChangeTiles = document.querySelector('#input > button');

 function setTiles(tiles) {
    let board = document.querySelector('.board');
    let tilesDelete = board.querySelectorAll('div');
    tilesDelete.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${tiles}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${tiles}, 1fr)`;

    let numTiles = tiles * tiles;
    for (let i = 0; i < numTiles; i++) {
        let sketchTiles = document.createElement("div");
        sketchTiles.style.backgroundColor = 'yellow';
        board.insertAdjacentElement('beforeend', sketchTiles);
    }
};

function modifyTiles(input) {
    if (input < 1 || input > 100) {
        alert('Size are only between 1 and 100.');
    } else {
        setTiles(input)
    };
};

buttonChangeTiles.addEventListener('click', () => {
    let inputTiles = document.querySelector('#input > input').value;
    modifyTiles(inputTiles);
})

