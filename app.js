let sketching = document.querySelectorAll(".sketch");
let reset = document.createElement('div')
reset.classList.add('reset');
sketching.forEach(sketch => {
    sketch.addEventListener('mouseover', (e) => {
        let target = e.target;
        target.classList.add('sketched')
    })
})



