import { partial } from 'functional';
import { rectanglesCollide, rectangleAroundCircle } from 'geometry';

export default function update(state, event) {
    const newState = move(state, event);
    if (!playerCollidesWithLevel(newState)) {
        return newState;
    }
    return state;
};

function move(state, event) {
    switch (event) {
        case 'keyLeft':  return moveLeft(state);
        case 'keyUp':    return moveUp(state);
        case 'keyRight': return moveRight(state);
        case 'keyDown':  return moveDown(state);
        default:         return state;
    }
}
function moveLeft(state) {
    return updatePlayerCoordinates(state, (x, y) => ({ x: x - 5, y }));
}

function moveRight(state) {
    return updatePlayerCoordinates(state, (x, y) => ({ x: x + 5, y }));
}

function moveUp(state) {
    return updatePlayerCoordinates(state, (x, y) => ({ x, y: y - 5 }));
}

function moveDown(state) {
    return updatePlayerCoordinates(state, (x, y) => ({ x, y: y + 5 }));
}

function updatePlayerCoordinates(state, updater) {
    return state.update('player', (c) => {
        const { x, y } = updater(c.get('x'), c.get('y'));
        return c.set('x', x).set('y', y);
    });
}

function playerCollidesWithLevel(state) {
    const playerRect = rectangleAroundCircle(state.get('player'));
    const collidesWithPlayer = partial(rectanglesCollide, [playerRect]);
    return state.get('level').some(collidesWithPlayer);
}