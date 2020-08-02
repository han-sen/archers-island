// grab out assets

const IMAGE_ONE = document.querySelector('#player-one');
const IMAGE_TWO = document.querySelector('#player-two');
const IMAGE_PROJECTILE = document.querySelector('#projectile');
const IMAGE_GOAL = document.querySelector('#goal');


// initialize our canvas context

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

// set our game size variables

const GAME_WIDTH = canvas.getAttribute('width');
const GAME_HEIGHT = canvas.getAttribute('height');
const GAME_MARGIN = GAME_WIDTH * 0.05;

// initialize game objects

new InputHandler();

let Player_One = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 1, IMAGE_ONE);

// Player_One.draw(ctx); 

let Player_Two = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 2, IMAGE_TWO);

// Player_Two.draw(ctx); 

let Game_Goal = new Goal(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, IMAGE_GOAL);

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
    ctx.fillStyle = "#5ab9a8";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // redraw players and projectiles
    // Player_One.update(deltaTime);
    // Player_One.draw(ctx);

    Game_Goal.update(deltaTime);
    Game_Goal.draw(ctx);

    Player_Two.update(deltaTime);
    Player_Two.draw(ctx);

    projectiles.forEach((el, index) => {

        // check collision detection, if true remove this projectile
        if (detectCollision(el, Game_Goal)) {
            projectiles.splice(index, 1);
        };

        // remove from projectiles array once off-screen
        if (el.position.x < 0 || el.position.x > GAME_WIDTH) {
            projectiles.splice(index, 1);
        }

        el.update(deltaTime);
        el.draw(ctx);
    });

    // console.log(projectiles);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);