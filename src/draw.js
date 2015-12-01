export default function draw(context, state) {
    clear(context);
    drawCharacter(context, state.get('player'));
    drawLevel(context, state.get('level'));
}

function clear(context) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, 1200, 1000);
    context.fillStyle = 'black';
}

function drawCharacter(context, player) {
    context.beginPath();
    context.arc(player.get('x'), player.get('y'), player.get('radius'), 0, 2*Math.PI);
    context.fill();
}

function drawLevel(context, level) {
    level.forEach((levelObject) => {
        const { x, y, width, height } = levelObject.toJS();
        context.fillRect(x, y, width, height);
    });
}