


function down() {

    if (turn.block == 1)
        return 0;

    turn.moveDirection = 'down';

    makeTurn();

}

function up() {

    if (turn.block == 1)
        return 0;

    turn.moveDirection = 'up';

    makeTurn();

}

function left() {
    if (turn.block == 1)
        return 0;

    turn.moveDirection = 'left';

    makeTurn();

}

function right() {

    if (turn.block == 1)
        return 0;

    turn.moveDirection = 'right';

    makeTurn();

}

function enter() {

    if (buttonTryAgain.visible == 1) {

        newGame();

    }
}

function newGame() {
    buttonTryAgain.visible = 0;
    cursorOverbutton = 0;
    score = 0;
    elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "default";
    cellArray = [];
    make2ActiveCells();
    turn.block = 0;
    drawScore();
    drawCells();
    winStatus = 0;

}
