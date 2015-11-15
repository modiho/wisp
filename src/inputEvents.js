const isEventType = R.propEq('type');
const notNil = (v) => !R.isNil(v);
const get = R.curry((sequence, key) => sequence.get(key.toString()));

const keyCodeToInputEventMap = Immutable.Map({
    37: 'keyLeft',
    38: 'keyUp',
    39: 'keyRight',
    40: 'keyDown'
});

/**
 * Observes dom events and outputs game input events.
 * @param {Observable} domEvents the native dom events that are observed to create input events
 * @returns {Observable} game input events
 */
export default function inputEvents(domEvents) {
    return domEvents
    .filter(isEventType('keydown'))
    .map(R.prop('keyCode'))
    .map(get(keyCodeToInputEventMap))
    .filter(notNil);
}