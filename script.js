let clicks = 0;
const button = document.querySelector('button');
const body = document.querySelector('body');
const color = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57', '#33FFBD'];

function count() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
function reset(){
    clicks = 0;
    document.getElementById("clicks").innerHTML = clicks;
    body.style.backgroundColor = "#E6E6FA";
};

body.style.backgroundColor = "#E6E6FA"
button.addEventListener('click', changeBackground)

function changeBackground(){
    const colorIndex= parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
};

