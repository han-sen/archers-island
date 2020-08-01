// initialize our canvas context & size

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const GAME_MARGIN = 20;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

class Player {
    constructor(gameWidth, gameHeight, gameMargin, side) {
        this.width = 50;
        this.height = 50;
        this.gameMargin = gameMargin;
        this.side = side;
        if (this.side === 'left') {
            this.position = {
                x: gameMargin,
                y: gameMargin
            }
        } else if (this.side === 'right') {
            this.position = {
                x: gameWidth - this.width - gameMargin,
                y: gameHeight - this.height - gameMargin
            }
        }
    }
    draw(ctx) {
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 
    }
}

let player_one = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 'left');

player_one.draw(ctx); 

let player_two = new Player(GAME_WIDTH, GAME_HEIGHT, GAME_MARGIN, 'right');

player_two.draw(ctx); 