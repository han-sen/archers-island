class InputHandler {
    constructor() {
        document.addEventListener('keydown', event => {
            // if spacebar, player 1 shoots
            switch (event.keyCode) {
                case 32:
                    game.playerOne.shoot();
                    break;
                case 27:
                    this.togglePause();    
                    break;    
            }
        })
    }
    togglePause() {
        if (GAME_RUNNING === false) {
            GAME_RUNNING = true;
        } else {
            GAME_RUNNING = false;
        }
    }
}