const screenHandler = (screen) => {

<<<<<<< HEAD
    let text = '';

    switch (screen) {
        case 'menu':
            ctx.drawImage(IMAGE_TITLE_SCREEN, 0, 0, GAME_WIDTH - GAME_MARGIN, GAME_HEIGHT - GAME_MARGIN);
            break;

        case 'win':
            ctx.rect(0, 0, game.gameWidth, game.gameHeight);
            ctx.fillStyle = GAME_BG_COLOR;
            ctx.fill();
            ctx.font = "20px Signika";
            ctx.fillStyle = GAME_TEXT_COLOR;
            ctx.textAlign = "center";
            let finalScore = `Player 1: ${game.playerOne.score}   |   Player 2: ${game.playerTwo.score}`;
            game.playerOne.score > game.playerTwo.score ? 
                text = `Player ${game.playerOne.playerNumber} has won the island!` : 
                text = `Player ${game.playerTwo.playerNumber} has won the island!`;
            ctx.fillText(finalScore, game.gameWidth / 2, game.gameHeight / 2 - 50);
            ctx.font = "30px Signika";
            ctx.fillText(text, game.gameWidth / 2, game.gameHeight / 2);
            ctx.fillText('Press "Reset" to play again.', game.gameWidth /2, game.gameHeight / 2 + 200);
            break;

=======
    switch (screen) {

        // show the intro screen
        case 'menu':
            ctx.drawImage(IMAGE_TITLE_SCREEN, 0, 0, GAME_WIDTH, GAME_HEIGHT);
            break;

        // show the game results screen
        case 'win':
            // draw bg color
            ctx.rect(0, 0, game.gameWidth, game.gameHeight);
            ctx.fillStyle = GAME_BG_COLOR;
            ctx.fill();

            // align all text o center
            ctx.textAlign = "center";

            // display results
            let finalScore = `Player 1: ${game.playerOne.score}   |   Player 2: ${game.playerTwo.score}`;
            ctx.font = "20px Signika";
            ctx.fillStyle = GAME_TEXT_COLOR;
            ctx.fillText(finalScore, game.gameWidth / 2, game.gameHeight / 2 - 50);
            console.log(finalScore);

            // pick winner color
            if (game.playerOne.score > game.playerTwo.score) {
                ctx.fillStyle = GAME_PLAYER_ONE_COLOR;
                text = `Player ${game.playerOne.playerNumber} has won the island!`; 
            } else {
                ctx.fillStyle = GAME_PLAYER_TWO_COLOR;
                text = `Player ${game.playerTwo.playerNumber} has won the island!`;
            }
            ctx.fillText(text, game.gameWidth / 2, game.gameHeight / 2);

            // display reset message
            ctx.font = "30px Signika";
            ctx.fillStyle = GAME_TEXT_COLOR;
            ctx.fillText('Press the power button to play again.', game.gameWidth /2, game.gameHeight / 2 + 200);
            break;

        // update any player HUD values
        case 'playing':
            let ammo = ''
            for (let i = 0; i < game.currentPlayer.ammo; i++) {
                ammo += '↟';
            };
            if (game.currentPlayer.playerNumber === 'One') {
                ctx.fillStyle = GAME_PLAYER_ONE_COLOR;
            } else {
                ctx.fillStyle = GAME_PLAYER_TWO_COLOR;
            }
            ctx.font = "60px Signika";
            ctx.fillText(ammo, game.gameWidth / 2 - 60, game.gameMargin * 1.5);
>>>>>>> master
    }

}