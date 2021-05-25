let x = 100;
let y = 100;
let width = 300;
let height = 200;
let color = 'red';
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawSquare(x, y, width, height, color) {
    ctx.fillStyle = 'blues';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

drawSquare(x, y, width, height, color);