class Player {
    constructor(gameWidth, gameHeight, gameMargin, playerNumber, image) {
        // can be condensed to this.size if sprite remains square
        this.width = 50;
        this.height = 50;
        this.speed = 50;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.playerNumber = playerNumber;
        if (this.playerNumber === 1) {
            this.position = {
                x: gameMargin,
                y: gameMargin
            }
        } else {
            this.position = {
                x: gameWidth - this.width - gameMargin,
                y: gameHeight - this.height - gameMargin
            }
        }
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); 
    }
    update(deltaTime) {
        this.position.y += this.speed / deltaTime;
        console.log(this.position.y);
        if (this.position.y > this.gameHeight - this.gameMargin - this.height
            || this.position.y < this.gameMargin) {
            this.speed = -this.speed;
        } 
    }
}    