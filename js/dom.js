// DOM Elements

const display_stats_wrap = document.querySelector('.game_stats_wrap');

const display_player = document.querySelector('#display_player');
const display_ammo = document.querySelector('#display_ammo');
const display_points = document.querySelector('#display_points');
const display_round = document.querySelector('#display_round');

const start_button = document.querySelector('#start_button');
const fire_button = document.querySelector('#fire_button');
const pause_button = document.querySelector('#pause_button');
const reset_button = document.querySelector('#reset_button');

// Page Assets

const IMAGE_ONE = new Image();
IMAGE_ONE.src = './img/archer-1.png';

const IMAGE_TWO = new Image();
IMAGE_TWO.src = './img/archer-2.png';

const IMAGE_PROJECTILE = new Image();
IMAGE_PROJECTILE.src = './img/arrow-white.png';

const IMAGE_OBSTACLE = new Image();
IMAGE_OBSTACLE.src = './img/crab-2.png';

const IMAGE_GOAL = new Image();
IMAGE_GOAL.src = './img/goal.png';

const IMAGE_BACKGROUND = new Image();
IMAGE_BACKGROUND.src = './img/bg-fixed.png';

const IMAGE_TITLE_SCREEN = new Image();
IMAGE_TITLE_SCREEN.src = './img/title-screen.png';

// Utility Functions

const updateStats = (target, value) => {
    target.innerText = value;
}

const updateAllStats = () => {
    updateStats(display_player, game.currentPlayer.playerNumber);
    // updateStats(display_ammo, game.currentPlayer.ammo);
    updateAmmo();
    updateStats(display_points, game.currentPlayer.score);
    updateStats(display_round, game.round);
}

const updateAmmo = () => {
    display_ammo.innerHTML = '';
    for (let i = 0; i < game.currentPlayer.ammo; i++) {
        display_ammo.innerHTML += '↟';
    }
}

// Event Handlers

start_button.onclick = () => {
    if (game.gamestate !== GAMESTATE.GAMEOVER) {
        game.startGame();
    }
}

fire_button.onclick = () => game.currentPlayer.shoot();

pause_button.onclick = () =>  {
    if (game.gamestate !== GAMESTATE.GAMEOVER && game.gamestate !== GAMESTATE.MENU) {
        game.togglePause();
    }
}

reset_button.onclick = () => {
    location.reload();
    return false;
}