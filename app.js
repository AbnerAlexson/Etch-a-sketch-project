let sketching = document.querySelectorAll(".sketch");
let reset = document.createElement('div')
reset.classList.add('reset');

sketching.forEach(sketch => {
    sketch.addEventListener('mousedown', (e) => {
        let target = e.target;
        target.classList.add('sketched')
    })
})



