const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3
};

class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gamestate = GAMESTATE.RUNNING;
        this.playerOne = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 1, IMAGE_ONE);
        this.playerTwo = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 2, IMAGE_TWO);
        this.gameObjects = [];
        this.round = 1;
        this.currentPlayer = 1;
    }
    draw(ctx) {

    }
    update(deltaTime) {

    }
    startGame() {

    }
}