// grab out assets

const IMAGE_ONE = document.querySelector('#player-one');
const IMAGE_TWO = document.querySelector('#player-two');
const IMAGE_PROJECTILE = document.querySelector('#projectile');

// initialize our canvas context

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// set our game size variables

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const GAME_MARGIN = 100;

// initialize game objects

new InputHandler();

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

let Player_One = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 1, IMAGE_ONE);

Player_One.draw(ctx); 

let Player_Two = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 2, IMAGE_TWO);

Player_Two.draw(ctx); 

// create empty array to hold any active projectiles

const projectiles = [];


// start our game loop

let lastTime = 0; 

const gameLoop = (timeStamp) => {

    // calculate change in time each frame
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    //clear the canvas
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // redraw players and projectiles
    Player_One.update(deltaTime);
    Player_One.draw(ctx);

    Player_Two.update(deltaTime);
    Player_Two.draw(ctx);

    projectiles.forEach(el => {
        el.update(deltaTime);
        el.draw(ctx);
    });


    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);