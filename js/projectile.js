class Projectile {
    constructor(direction, position, image) {
        this.size = 20;
        this.speed = 150;
        // 1 = go right, -1 = go left
        this.direction = direction;
        this.position = position;
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size); 
    }
    update(deltaTime) {
        if (this.direction === 1) {
            this.position.x += this.speed / deltaTime;
        } else {
            this.position.x -= this.speed / deltaTime;
        }
    }
}