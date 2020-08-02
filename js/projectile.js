class Projectile {
    constructor(position, playerOffset, image) {
        this.size = 20;
        this.speed = { x: 300, y: 15};
        this.position = position;
        this.playerOffset = playerOffset;
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }
    update(deltaTime) {
        this.position.x -= this.speed.x / deltaTime;
        // slight downward drag to imitate gravity
        this.position.y += this.speed.y / deltaTime
    }
}