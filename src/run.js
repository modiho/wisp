import draw from 'draw';
import update from 'update';
import inputEvents from 'inputEvents';

const canvas = document.getElementById('game');
const context = canvas.getContext('2d');
const width = 1200;
const height = width/16*9;
const center = {
    x: width / 2,
    y: height / 2,
};

setCanvasProportions();

let events = [];
let state = Immutable.fromJS({
    playerCoordinates: {
        x: center.x,
        y: center.y
    }
});

inputEvents(keyDownEvents(document))
.subscribe(
    (event) => events.push(event),
    (error) => console.error(error)
);
requestAnimationFrame(loop);

function loop() {
    if (events.length > 0) {
        console.log('handling events', events);
        state = events.reduce(update, state);
        events = [];
        console.log('new state', state.toJS());
    }
    draw(context, state);
    requestAnimationFrame(loop);
}

function setCanvasProportions() {
    canvas.width = width;
    canvas.height = height;
}

function keyDownEvents(root) {
    return Rx.Observable.fromEvent(root, 'keydown');
}