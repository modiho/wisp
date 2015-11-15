import { prop, propEquals, notNil, get } from 'functional';
import { IMap } from 'immutable';

const isEventType = propEquals('type');
const keyCodeToInputEventMap = IMap({
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
    .map(prop('keyCode'))
    .map(get(keyCodeToInputEventMap))
    .filter(notNil);
}