import draw from 'draw';
import update from 'update';
import inputEvents from 'inputEvents';
import { observeEvent } from 'observable';
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
    player: {
        x: center.x,
        y: center.y,
        radius: 20,
    },
    level: [{
        x: 40,
        y: 55,
        width: 100,
        height: 38,
    }, {
        x: 12,
        y: 130,
        width: 190,
        height: 15,
    }]
});

const getInputEvents = inputEvents(getKeyboardInput());

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

function getKeyboardInput() {
    return observeEvent(document, 'keydown')
    .merge(observeEvent(document, 'keyup'));
}