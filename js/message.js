const messageHandler = (screen) => {
    switch (screen) {
        case 'menu':
            ctx.rect(0, 0, game.gameWidth, game.gameHeight);
            ctx.fillStyle = GAME_BG_COLOR;
            ctx.fill();
      
            ctx.font = "30px Signika";
            ctx.fillStyle = GAME_TEXT_COLOR;
            ctx.textAlign = "center";
            ctx.fillText(
              "Press START or hit ENTER to begin the game",
              game.gameWidth / 2,
              game.gameHeight / 2
            );
            break;
        case 'win':
            ctx.rect(0, 0, game.gameWidth, game.gameHeight);
            ctx.fillStyle = GAME_BG_COLOR;
            ctx.fill();
            let message = '';
            ctx.font = "30px Signika";
            ctx.fillStyle = GAME_TEXT_COLOR;
            ctx.textAlign = "center";
            game.playerOne.score > game.playerTwo.score ? 
                message = `Player ${game.playerOne.playerNumber} has won the island!` : 
                message = `Player ${game.playerTwo.playerNumber} has won the island!`; 
            ctx.fillText(message, game.gameWidth / 2, game.gameHeight / 2);
            break;
    }
}