class InputHandler {
    constructor() {
        document.addEventListener('keydown', event => {
            // if spacebar, player 1 shoots
            if (event.keyCode === 32) {
                this.createProjectile(Player_One);
                // if enter player 2 shoots
            } else if (event.keyCode === 13) {
                this.createProjectile(Player_Two);
            }
        })
    }
    createProjectile(player) {
        let projectile = new Projectile(player.playerNumber, { x: player.position.x, y: player.position.y }, player.size, IMAGE_PROJECTILE);
        projectiles.push(projectile);
        player.ammo--;
    }
} 