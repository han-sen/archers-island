class Player {
    constructor(gameWidth, gameHeight, gameMargin, playerNumber, image) {
        this.width = 64;
        this.height = 128;
        this.speed = 50;
        this.ammo = 3;
        this.score = 0;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameMargin = gameMargin;
        this.playerNumber = playerNumber;
        this.position = {
            x: gameWidth - this.width - gameMargin * 2,
            y: gameHeight / 2
        }
        this.image = image;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height); 
    }
    update(deltaTime) {
        this.position.y += this.speed / deltaTime;
        // check to see if we have hit edge of game area
        if (this.position.y + this.height > this.gameHeight - this.gameMargin || this.position.y < this.gameMargin) {
            // reverse direction by setting speed to inverse of itself
            this.speed = -this.speed;
        }
    }
    shoot() {
            if (this.ammo <= 0 || game.gamestate !== GAMESTATE.RUNNING) { return };
            // create new projectile and push to array
            let projectile = new Projectile( { x: this.position.x, y: this.position.y + 30}, this.height, IMAGE_PROJECTILE );
            game.projectiles.push(projectile);
            this.ammo -= 1;
            this.checkRound();
            updateAllStats();
    }
    checkRound () {
        if (this.ammo <= 0) {
            // add flash to stats wrap then remove
            display_stats_wrap.classList.add('flash');
            setTimeout(() => {
                display_stats_wrap.classList.remove('flash');
            }, 2000)
            // slight delay to let any active projectiles finish, then pass to next turn
            setTimeout(() => {
                game.turn++;
                game.handleRound();
                updateAllStats();
            }, 1000)
        }
    }
}