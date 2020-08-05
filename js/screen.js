const screenHandler = (screen) => {

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

            // add player image
            if (game.playerOne.score > game.playerTwo.score) {
                ctx.drawImage(IMAGE_ONE, game.gameWidth / 2 - game.playerOne.width / 2, game.gameMargin, game.playerOne.width, game.playerOne.height);
            } else {
                ctx.drawImage(IMAGE_TWO, game.gameWidth / 2 - game.playerTwo.width / 2, game.gameMargin, game.playerTwo.width, game.playerTwo.height);               
            }

            // align all text o center
            ctx.textAlign = "center";

            // display results
            let finalScore = `Player 1: ${game.playerOne.score}   |   Player 2: ${game.playerTwo.score}`;
            ctx.font = "20px Signika";
            ctx.fillStyle = GAME_TEXT_COLOR;
            ctx.fillText(finalScore, game.gameWidth / 2, game.gameHeight / 2 - 50);

            // pick winner & color
            ctx.font = "25px Signika";
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
    }

}