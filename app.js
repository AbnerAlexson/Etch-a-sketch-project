//variables
let buttonChangeTiles = document.querySelector('#input > button');
let black = document.querySelector('.black');
let eraser = document.querySelector('.eraser');
let random = document.querySelector('.random');
let reset = document.querySelector('.reset');
let sketchMode = document.querySelector('#mode');

 function setTiles(tiles) {
    let board = document.querySelector('.board');
    let tilesDelete = board.querySelectorAll('div');
    tilesDelete.forEach((div) => div.remove())
    board.style.gridTemplateColumns = `repeat(${tiles}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${tiles}, 1fr)`;

    let numTiles = tiles * tiles;
    for (let i = 0; i < numTiles; i++) {
        let sketchTiles = document.createElement("div");
        sketchTiles.style.backgroundColor = '#fff';
        board.insertAdjacentElement('beforeend', sketchTiles);
        sketchTiles.addEventListener('mouseover', (e) => {
            if (click) {
                e.target.style.backgroundColor = color;
            };
        });
    };

};

// function to change the size of tile drawing board
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

// button event listener that changes sketch colour
let color;
black.addEventListener('click', () => {
    color = 'black';
});
eraser.addEventListener('click', () => {
    color = '#fff';
});
random.addEventListener('click', () => {
    let red = Math.floor(Math.random() * 256) + 1;
    let green = Math.floor(Math.random() * 256) + 1;
    let blue = Math.floor(Math.random() * 256) + 1;
    color = `rgb${red}, ${green}, ${blue}`;
});

//Mode that toggles sketch mode
let click = false;
document.querySelector('#content').addEventListener('click', () => {
    click = !click;
    if (click) {
        sketchMode.innerText = "True";
        sketchMode.style.color = "green";
    } else {
        sketchMode.innerText = "False";
        sketchMode.style.color = "red";
    };
});
