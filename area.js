const sides = document.querySelectorAll('.side-input');
const checkAreaBtn = document.querySelector('#check-area-btn');
const outputEl = document.querySelector('#output');

function calculateAreaOfTriangle(a, b){
const areaOfTriangle = (a*b)/2;
return areaOfTriangle;
}

function calculateArea(){
    const areaOfTriangle = calculateAreaOfTriangle(Number(sides[0].value), Number(sides[1].value));
    const lengthOfTriangle = areaOfTriangle;
    outputEl.innerText = "The area of triangle is " + lengthOfTriangle;
}

checkAreaBtn.addEventListener("click", calculateArea);