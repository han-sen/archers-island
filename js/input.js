class InputHandler {
    constructor() {
        document.addEventListener('keydown', event => {
            // if spacebar, player 1 shoots
            switch (event.keyCode) {
                case 32:
                    game.currentPlayer.shoot();
                    break;
                case 27:
                    game.togglePause();    
                    break;    
            }
        });
        window.addEventListener('resize', () => {
            
        });

    }
}