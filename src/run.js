import draw from 'draw';
import update from 'update';
import InputEvents from 'inputEvents';
import { toImmutable } from 'immutable';

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
let state = toImmutable({
    playerCoordinates: {
        x: center.x,
        y: center.y
    }
});

const getInputEvents = InputEvents(document);

requestAnimationFrame(loop);

function loop() {
    events = getInputEvents();
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