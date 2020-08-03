const messageHandler = (screen) => {

    let message = '';

    switch (screen) {
        case 'menu':
            ctx.drawImage(IMAGE_TITLE_SCREEN, 0, 0, GAME_WIDTH, GAME_HEIGHT);
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
                message = `Player ${game.playerOne.playerNumber} has won the island!` : 
                message = `Player ${game.playerTwo.playerNumber} has won the island!`;
            ctx.fillText(finalScore, game.gameWidth / 2, game.gameHeight / 2 - 50);
            ctx.font = "30px Signika";
            ctx.fillText(message, game.gameWidth / 2, game.gameHeight / 2);
            break;

    }

}