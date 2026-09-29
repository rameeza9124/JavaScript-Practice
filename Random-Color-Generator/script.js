let btn = document.querySelector('button');

btn.addEventListener("click", function(){
let heading3 = document.querySelector('h3');

let randomcolor = generateRandomColor();
heading3.innerText = randomcolor;

let div = document.querySelector('div');
div.style.backgroundColor = randomcolor;
console.log("color updated");
});


function generateRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green =  Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = (`rgb(${red},${green},${blue})`);
    return color;
};

//  let btn2 = document.querySelector('#bn');
//  btn2.addEventListener('click', function(){
//     btn2.style.backgroundColor = "green";
//     console.log('button clicked')
//  })
//  btn2.addEventListener('mouseout', function(){
//     alert('mouse is placed out of thr button');
//  })
//  let inp = document.querySelector('input');
//  inp.addEventListener('keypress', function(){
//     console.log("key is pressed");
//  })

//  window.addEventListener("scroll", function(){
//     console.log("page is scrolling");
//  })

//  window.addEventListener("load", function() {
//     console.log("Page has completely loaded!");
// });

// let name = document.querySelector("#name");
// name.addEventListener()

// let box = document.querySelector("#div");

// box.addEventListener("scroll", function() {
//     console.log("Div is scrolling");
// });

