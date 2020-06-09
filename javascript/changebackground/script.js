const colorBtn = document.querySelector('.colorBtn');
const body = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#b0f542', '#426cf5', '#1a1d24'];

colorBtn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    let random = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[random];
}