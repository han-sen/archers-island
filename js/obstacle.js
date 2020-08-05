class Obstacle {
    constructor(gameWidth, gameHeight, gameMargin, image) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.image = image;
        this.width = 48;
        this.height = 48;
        this.speed = 60;
        this.position = { 
            x: this.gameWidth / 2 - this.width, 
            y: this.gameHeight - this.height
        };
        this.active = true;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime) {
        this.position.y += this.speed / deltaTime;
        // check to see if we have hit edge of game area
        if (this.position.y + this.height > this.gameHeight || this.position.y < this.gameMargin * 2) {
            // reverse direction by setting speed to inverse of itself
            this.speed = -this.speed;
        }
    }
}