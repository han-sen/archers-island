class InputHandler {
    constructor(playerOne, playerTwo) {
        document.addEventListener('keydown', event => {
            if (event.keyCode === 32) {
                alert('shoot!');
            }
        })
    }
} 