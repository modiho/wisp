export default function update(state, event) {
    switch (event) {
        case 'keyLeft':  return moveLeft(state);
        case 'keyUp':    return moveUp(state);
        case 'keyRight': return moveRight(state);
        case 'keyDown':  return moveDown(state);
        default:         return state;
    }
};

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
    return state.update('playerCoordinates', (c) => Immutable.Map(updater(c.get('x'), c.get('y'))));
}