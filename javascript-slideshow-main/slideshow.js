
let current = 0;
let total = 4;

let next = document.getElementById("next");

next.addEventListener("click", function () {
    current++;

    if (current >= total)
        current = 0
    console.log(current)

    let images = document.getElementsByClassName("slide");

    for(let i = 0; i < total; i ++){
    
        images[i].style.display = 'none';

    }
    
    images[current].style.display = "block";


});

let previous = document.getElementById("previous");


previous.addEventListener("click", function() {
    current--

    if (current < 0)
        current = total - 1
    console.log(current) 

    let images = document.getElementsByClassName("slide");

    for(let i = 0; i < total; i ++){
    
        images[i].style.display = 'none';

    }
    
    images[current].style.display = "block";


})


