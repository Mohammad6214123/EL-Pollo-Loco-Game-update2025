let canvas;
let world;                                         // these are two global variables


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);                           // Local variables
    console.log('My character is ', world.character);
}




