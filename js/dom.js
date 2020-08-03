// dom elements

const display_stats_wrap = document.querySelector('.game_stats_wrap');

const display_player = document.querySelector('#display_player');
const display_ammo = document.querySelector('#display_ammo');
const display_points = document.querySelector('#display_points');
const display_round = document.querySelector('#display_round');


// page assets

const IMAGE_ONE = document.querySelector('#player-one');
const IMAGE_TWO = document.querySelector('#player-two');
const IMAGE_PROJECTILE = document.querySelector('#projectile');
const IMAGE_GOAL = document.querySelector('#goal');
const IMAGE_BACKGROUND = document.querySelector('#background-image');

// utility functions

const updateStats = (target, value) => {
    target.innerText = value;
}

const updateAllStats = () => {
    updateStats(display_player, game.currentPlayer.playerNumber);
    updateStats(display_ammo, game.currentPlayer.ammo);
    updateStats(display_points, game.currentPlayer.score);
    updateStats(display_round, game.round);
}

// event handlers

document.addEventListener('keydown', event => {
    switch (event.keyCode) {
        // spacebar to shoot
        case 32:
            game.currentPlayer.shoot();
            break;
        // esc to pause
        case 27:
            game.togglePause();    
            break;    
        // enter to start game
        case 13:
            game.startGame();
            break;
    }
});