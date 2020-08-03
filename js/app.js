// initialize our canvas context

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// set our game screen variables

const GAME_WIDTH = canvas.getAttribute('width');
const GAME_HEIGHT = canvas.getAttribute('height');
const GAME_MARGIN = GAME_WIDTH * 0.05;
const GAME_BG_COLOR = '#333f58';

// initialize game object

let game = new Game(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN);

updateAllStats();

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

    // draw all game objects & projectiles
    game.update(deltaTime);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);

}

requestAnimationFrame(gameLoop);