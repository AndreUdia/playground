const colorBtn = document.querySelector('.colorBtn');
const body = document.querySelector('body');
const hexValue = document.querySelector('.hexColor');

const hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

colorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const color = getRandomHex();
    body.style.backgroundColor = color;
    hexValue.innerHTML = color;
    hexValue.style.color = color;
}

function getRandomHex() {
    let hexText = '#';
    for(let i=0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexColors.length);
        hexText += hexColors[random];
    }
    return hexText;
}