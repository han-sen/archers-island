class Projectile {
    constructor(owner, position, playerOffset, image) {
        this.size = 20;
        this.speed = { x: 240, y: 5};
        this.owner = owner;
        this.position = position;
        this.playerOffset = playerOffset;
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
    update(deltaTime) {
        // if projectile is owned by player 1, shoot towards the right
        if (this.owner === 1) {
            this.position.x += this.speed.x / deltaTime;
        // if owned by player 2, shoot left to right
        } else {
            this.position.x -= this.speed.x / deltaTime;
        }
        // slight downward drag to imitate gravity
        this.position.y += this.speed.y / deltaTime
    }
}