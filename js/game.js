const GAMESTATE = {
    MENU: 0,
    RUNNING: 1,
    PAUSED: 2,
    GAMEOVER: 3
};

class Game {
    constructor(gameWidth, gameHeight, gameMargin) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.gamestate = GAMESTATE.RUNNING;
        this.playerOne = new Player(gameWidth, gameHeight, gameMargin, 1, IMAGE_ONE);
        this.playerTwo = new Player(gameWidth, gameHeight, gameMargin, 2, IMAGE_TWO);
        this.goal = new Goal(gameWidth, gameHeight, gameMargin, IMAGE_GOAL)
        this.turn = 1;
        this.round = 1;
        this.currentPlayer = this.playerOne;
        this.projectiles = [];
    }
    draw(ctx) {
        // draw only the current player
        if (this.currentPlayer === this.playerOne) {
            this.playerOne.draw(ctx);
        } else if (this.currentPlayer === this.playerTwo) {
            this.playerTwo.draw(ctx);
        }
        // draw the goal
        this.goal.draw(ctx);
        // draw every active projectile
        this.projectiles.forEach(el => {
            el.draw(ctx);
        });
    }
    update(deltaTime) {
        // check for game state conditions
        if (this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.GAMEOVER) {
            return;
        }
        // update only the current player
        if (this.currentPlayer === this.playerOne) {
            this.playerOne.update(deltaTime);
        } else if (this.currentPlayer === this.playerTwo) {
            this.playerTwo.update(deltaTime);
        }
        // update the goal
        this.goal.update(deltaTime);
        // update projectiles & check collisions
        this.projectiles.forEach((el, index) => {
            // check collision detection, if true remove this projectile
            if (detectCollision(el, this.goal)) {
                this.projectiles.splice(index, 1);
                this.currentPlayer.score += 1;
                updateStats(display_points, this.currentPlayer.score);
            };
            // remove from projectiles array once off-screen
            if (el.position.x < 0) {
                this.projectiles.splice(index, 1);
            }
            el.update(deltaTime);
            el.draw(ctx);
        });
        // check win
        this.checkWin();
    }
    togglePause() {
        if (this.gamestate == GAMESTATE.PAUSED) {
          this.gamestate = GAMESTATE.RUNNING;
        } else {
          this.gamestate = GAMESTATE.PAUSED;
        }
    }
    startGame() {

    }
    checkWin() {
        if (this.currentPlayer.score === 3) {
            alert(`Player ${this.currentPlayer.playerNumber} has won the island after ${this.round} rounds!`)
            this.gamestate = GAMESTATE.GAMEOVER;
        }
    }
    handleRound() {
        // if turn # is odd, assign player 1, and vice versa
        if (this.turn % 2 !== 0) {
            this.currentPlayer = this.playerOne;
        } else {
            this.currentPlayer = this.playerTwo;
        }
        // refill ammo
        this.currentPlayer.ammo = 3;
        // calculate round 
        this.round = Math.ceil(this.turn / 2);
        // update display board
        updateStats(display_player, this.currentPlayer.playerNumber);
    }
}