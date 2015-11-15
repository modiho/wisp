export default function draw(context, state) {
    clear(context);
    drawCharacter(context, state.get('playerCoordinates'));
}

function clear(context) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 1200, 1000);
    context.fillStyle = 'black';
}

function drawCharacter(context, coords) {
    context.beginPath();
    context.arc(coords.get('x'), coords.get('y'), 20, 0, 2*Math.PI);
    context.fill();
}