class Goal {
    constructor(gameWidth, gameHeight, gameMargin, image) {
        this.size = 50;
        this.speed = { x: 20, y: 50 };
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.position = {
            x: gameMargin,
            y: gameMargin
        }
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size); 
    }
    update(deltaTime) {
        this.position.y += this.speed.y / deltaTime;
        this.position.x += this.speed.x / deltaTime;
        // check to see if we have hit edge of game screen Y-AXIS
        if (this.position.y + this.size > this.gameHeight - this.gameMargin || this.position.y < this.gameMargin) {
            // reverse direction by setting speed to inverse of itself
            this.speed.y = -this.speed.y;
        }
        // check to see if we have hit edge of defined X-AXIS range (game margin * 3)
        if (this.position.x + this.size > this.gameMargin * 6 || this.position.x < this.gameMargin) {
            // reverse direction by setting speed to inverse of itself
            this.speed.x = -this.speed.x;
        }
    }
}