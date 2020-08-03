class Game {
    constructor(gameWidth, gameHeight, gameMargin) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.gamestate = GAMESTATE.MENU;
        this.playerOne = new Player(gameWidth, gameHeight, gameMargin, 1, IMAGE_ONE);
        this.playerTwo = new Player(gameWidth, gameHeight, gameMargin, 2, IMAGE_TWO);
        this.goal = new Goal(gameWidth, gameHeight, gameMargin, IMAGE_GOAL)
        this.turn = 1;
        this.round = 1;
        this.currentPlayer = this.playerOne;
        this.projectiles = [];
    }
    draw(ctx) {
        if (this.gamestate === GAMESTATE.MENU) {
            messageHandler('menu');
        } else if (this.gamestate === GAMESTATE.GAMEOVER) {
            messageHandler('win');
        } else {
            // draw only the current player
            this.currentPlayer.draw(ctx);
            // draw the goal
            this.goal.draw(ctx);
            // draw every active projectile
            this.projectiles.forEach(el => {
                el.draw(ctx);
            });
        }
    }
    update(deltaTime) {
        // check if game state !== RUNNING
        if (this.gamestate === GAMESTATE.PAUSED 
            || this.gamestate === GAMESTATE.GAMEOVER
            || this.gamestate === GAMESTATE.MENU) {
            return;
        }
        // update both player positions so they are at equal heights when swapped
        this.playerOne.update(deltaTime);
        this.playerTwo.update(deltaTime);
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
        this.checkWin(this.playerOne.score, this.playerTwo.score);
    }
    togglePause() {
        if (this.gamestate == GAMESTATE.PAUSED) {
          this.gamestate = GAMESTATE.RUNNING;
        } else {
          this.gamestate = GAMESTATE.PAUSED;
        }
    }
    checkWin(playerOne, playerTwo) {
        // if at the end of a round, and one player has 3 or more points, and players are not tied
        if ( (this.turn === this.round * 2 && this.playerTwo.ammo === 0) 
            && (playerOne >= 3 || playerTwo >= 3) 
            && (playerOne !== playerTwo) ) {
            setTimeout(() => {
                this.gamestate = GAMESTATE.GAMEOVER;
            }, 1000)
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
        // calculate current round 
        this.round = Math.ceil(this.turn / 2);
        // update display board
        updateStats(display_player, this.currentPlayer.playerNumber);
    }
    startGame() {
        this.gamestate = GAMESTATE.RUNNING;
    }
}