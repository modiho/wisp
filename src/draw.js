export default function draw(context, state) {
    drawCharacter(context, state.get('playerCoordinates'));
}

function drawCharacter(context, coords) {
    context.beginPath();
    context.arc(coords.get('x'), coords.get('y'), 20, 0, 2*Math.PI);
    context.fill();
}