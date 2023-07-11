


function down() {

    if (App.turnBlock == 1)
        return 0;

    App.moveDirection = 'down';

    App.makeTurn();

}

function up() {

    if (App.turnBlock == 1)
        return 0;

    App.moveDirection = 'up';

    App.makeTurn();

}

function left() {
    if (App.turnBlock == 1)
        return 0;

    App.moveDirection = 'left';

    App.makeTurn();

}

function right() {

    if (App.turnBlock == 1)
        return 0;

    App.moveDirection = 'right';

    App.makeTurn();

}

function enter() {

    if (buttonTryAgain.visible == 1) {

        newGame();

    }
}

function newGame() {
 App.startNewGame();
}
