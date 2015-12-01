import { IMap } from 'immutable';

export function rectanglesCollide(rect1, rect2) {
    return (
        rect1.get('x') < rect2.get('x') + rect2.get('width') &&
        rect2.get('x') < rect1.get('x') + rect1.get('width') &&
        rect1.get('y') < rect2.get('y') + rect2.get('height') &&
        rect2.get('y') < rect1.get('y') + rect1.get('height')
    );
}

export function rectangleAroundCircle(circle) {
    return IMap({
        x: circle.get('x') - circle.get('radius'),
        y: circle.get('y') - circle.get('radius'),
        width: circle.get('radius')*2,
        height: circle.get('radius')*2,
    });
}