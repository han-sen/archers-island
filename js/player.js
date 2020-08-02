class Player {
    constructor(gameWidth, gameHeight, gameMargin, playerNumber, image) {
        this.size = 50;
        this.speed = 50;
        this.ammo = 3;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.playerNumber = playerNumber;
        this.position = {
            x: gameWidth - this.size - gameMargin * 2,
            y: gameHeight / 2
        }
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size); 
    }
    update(deltaTime) {
        this.position.y += this.speed / deltaTime;
        // check to see if we have hit edge of game screen
        if (this.position.y + this.size > this.gameHeight - this.gameMargin || this.position.y < this.gameMargin) {
            // reverse direction by setting speed to inverse of itself
            this.speed = -this.speed;
        } 
    }
}