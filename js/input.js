class InputHandler {
    constructor() {
        document.addEventListener('keydown', event => {
            // if spacebar, player 1 shoots
            switch (event.keyCode) {
                case 32:
                    this.createProjectile(game.playerOne);
                    break;
                case 27:
                    this.togglePause();    
                    break;    
            }
        })
    }
    createProjectile(player) {
        // add a slight delay before fire to simulate cannon fuse burning
        setTimeout(() => {
            let projectile = new Projectile( { x: player.position.x, y: player.position.y }, player.size, IMAGE_PROJECTILE );
            projectiles.push(projectile);
            player.ammo--;
        }, 250);

    }
    togglePause() {
        if (GAME_RUNNING === false) {
            GAME_RUNNING = true;
        } else {
            GAME_RUNNING = false;
        }
    }
}