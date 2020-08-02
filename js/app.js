// grab out assets

const IMAGE_ONE = document.querySelector('#player-one');
const IMAGE_TWO = document.querySelector('#player-two');
const IMAGE_PROJECTILE = document.querySelector('#projectile');
const IMAGE_GOAL = document.querySelector('#goal');
const IMAGE_BACKGROUND = document.querySelector('#background-image');

// initialize our canvas context

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// set our game screen variables

const GAME_WIDTH = canvas.getAttribute('width');
const GAME_HEIGHT = canvas.getAttribute('height');
const GAME_MARGIN = GAME_WIDTH * 0.05;
const GAME_BG_COLOR = '#333f58';

// initialize game objects

new InputHandler();

let game = new Game(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN);

// create empty array to hold any active projectiles

const projectiles = [];

// start our game loop

let lastTime = 0; 

const gameLoop = (timeStamp) => {

    // calculate change in time each frame
    // this allows us to sync frame rate to users buffer rate
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    //clear the canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // draw the background
    ctx.drawImage(IMAGE_BACKGROUND, 0, 0, GAME_WIDTH, GAME_HEIGHT);

    // draw all game objects
    game.update(deltaTime);
    game.draw(ctx);

    // draw projectiles
    projectiles.forEach((el, index) => {

        // check collision detection, if true remove this projectile
        if (detectCollision(el, game.goal)) {
            projectiles.splice(index, 1);
        };

        // remove from projectiles array once off-screen
        if (el.position.x < 0 || el.position.x > GAME_WIDTH) {
            projectiles.splice(index, 1);
        }

        el.update(deltaTime);
        el.draw(ctx);

    });

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);