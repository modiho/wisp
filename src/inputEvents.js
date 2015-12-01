import { IMap, ISet } from 'immutable';

export default function inputEvents(keyboard) {
    let pressedKeys = ISet();

    const keyCodeToInputEventMap = IMap()
    .set(37, 'keyLeft')
    .set(38, 'keyUp')
    .set(39, 'keyRight')
    .set(40, 'keyDown');

    keyboard.subscribe((event) => {
        const inputEvent = keyCodeToInputEventMap.get(event.keyCode);
        if (inputEvent === undefined) return;
        if (event.type === 'keydown') {
            pressedKeys = pressedKeys.add(inputEvent);
        } else if (event.type === 'keyup') {
            pressedKeys = pressedKeys.remove(inputEvent);
        }
    });

    return function getPressedKeys() {
        return pressedKeys.toArray();
    };
}