const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
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
        this.gameObjects = [];
        this.round = 1;
        this.currentPlayer = 1;
    }
    draw(ctx) {
        if (this.currentPlayer === 1) {
            game.playerOne.draw(ctx);
        }
        game.goal.draw(ctx);
    }
    update(deltaTime) {
        if (this.currentPlayer === 1) {
            game.playerOne.update(deltaTime);
        }
        game.goal.update(deltaTime);
    }
    startGame() {

    }
}