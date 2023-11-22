let sketching = document.querySelectorAll(".sketch");
let sketchContainer = document.querySelector('#sketch-container');
let reset = document.querySelector('#reset')

sketching.forEach(sketch => {
    sketch.addEventListener('mouseover', (e) => {
        let target = e.target;
        target.classList.add('sketched');
    });
});

//event listeners that reset the application
reset.addEventListener('click', () => {
    location.reload();
});
