export default function InputEvents(root) {
    let pressedKeys = Immutable.Set();

    const keyCodeToInputEventMap = Immutable.Map()
    .set(37, 'keyLeft')
    .set(38, 'keyUp')
    .set(39, 'keyRight')
    .set(40, 'keyDown');

    root.addEventListener('keydown', (event) => {
        const inputEvent = keyCodeToInputEventMap.get(event.keyCode);
        if (inputEvent !== undefined) {
            pressedKeys = pressedKeys.add(inputEvent);
        }
    });

    root.addEventListener('keyup', (event) => {
        const inputEvent = keyCodeToInputEventMap.get(event.keyCode);
        if (inputEvent !== undefined) {
            pressedKeys = pressedKeys.remove(inputEvent);
        }
    });

    return function getInputEvents() {
        return pressedKeys.toArray();
    };
}