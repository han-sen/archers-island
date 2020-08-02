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
        this.round = 1;
        this.currentPlayer = this.playerOne;
        this.projectiles = [];
    }
    draw(ctx) {
        if (this.currentPlayer === this.playerOne) {
            game.playerOne.draw(ctx);
        } else if (this.currentPlayer === this.playerTwo) {
            game.playerTwo.draw(ctx);
        }

        game.goal.draw(ctx);

        game.projectiles.forEach(el => {
            el.draw(ctx);
        });
    }
    update(deltaTime) {
        if (this.gamestate === GAMESTATE.PAUSED) {
            return;
        }
        if (this.currentPlayer === this.playerOne) {
            game.playerOne.update(deltaTime);
        } else if (this.currentPlayer === this.playerTwo) {
            game.playerTwo.update(deltaTime);
        }

        game.goal.update(deltaTime);

        // update projectiles & check collisions
        game.projectiles.forEach((el, index) => {
            // check collision detection, if true remove this projectile
            if (detectCollision(el, game.goal)) {
                game.projectiles.splice(index, 1);
            };
            // remove from projectiles array once off-screen
            if (el.position.x < 0) {
                game.projectiles.splice(index, 1);
            }
            el.update(deltaTime);
            el.draw(ctx);
        });
    }
    togglePause() {
        if (this.gamestate == GAMESTATE.PAUSED) {
          this.gamestate = GAMESTATE.RUNNING;
        } else {
          this.gamestate = GAMESTATE.PAUSED;
        }
        console.log(this.gamestate)
    }
    startGame() {

    }
}