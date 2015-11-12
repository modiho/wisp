import draw from 'draw';

const canvas = document.getElementById('game');
const width = 1200;
const height = width/16*9;
const center = {
    x: width / 2,
    y: height / 2,
};

const context = canvas.getContext('2d');
const state = Immutable.fromJS({
   playerCoordinates: {
       x: center.x,
       y: center.y
   }
});

setCanvasProportions();
draw(context, state);


function setCanvasProportions() {
    canvas.width = width;
    canvas.height = height;
}