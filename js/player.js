class Player {
    constructor(gameWidth, gameHeight, gameMargin, playerNumber, image) {
        this.size = 50;
        this.speed = 60;
        this.ammo = 3;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.playerNumber = playerNumber;
        // if player 1, set origin to top left, if player 2 set origin to bottom right
        if (this.playerNumber === 1) {
            this.position = {
                x: gameMargin,
                y: gameMargin
            }
        } else {
            this.position = {
                x: gameWidth - this.size - gameMargin,
                y: gameHeight - this.size - gameMargin
            }
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
    // shoot(ctx) {
    //     // create a new Projectile
    //     // pass it a position based on current y value
    //     // pass it a direction to go
    //     let projectile = new Projectile(1, { x: this.position.x, y: this.position.y }, IMAGE_PROJECTILE);
    //     ctx.drawImage(projectile.image, projectile.position.x, projectile.position.y, projectile.size, projectile.size);
    // }
}