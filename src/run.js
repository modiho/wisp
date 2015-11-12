const canvas = document.getElementById('game');
const width = 1200;
const height = width/16*9;
const center = {
    x: width / 2,
    y: height / 2,
};
const context = canvas.getContext('2d');

setCanvasProportions();
drawCharacter();

function drawCharacter() {
    context.beginPath();
    context.arc(center.x, center.y, 20, 0, Math.PI);
    context.fill();
}

function setCanvasProportions() {
    canvas.width = width;
    canvas.height = height;
}