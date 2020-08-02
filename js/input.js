class InputHandler {
    constructor(playerOne, playerTwo) {
        document.addEventListener('keydown', event => {
            // if spacebar, player 1 shoots
            if (event.keyCode === 32 && Player_One.ammo > 0) {
                let projectile = new Projectile(1, { x: Player_One.position.x, y: Player_One.position.y }, IMAGE_PROJECTILE);
                projectiles.push(projectile);
                Player_One.ammo--;
                // if enter player 2 shoots
            } else if (event.keyCode === 13 && Player_Two.ammo > 0) {
                let projectile = new Projectile(-1, { x: Player_Two.position.x, y: Player_Two.position.y }, IMAGE_PROJECTILE);
                projectiles.push(projectile);
                Player_Two.ammo--;
            }
        })
    }
} 