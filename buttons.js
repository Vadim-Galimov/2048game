


function down() {

    if (turn.block == 1)
        return 0;

    moveDirection = 'down';

    makeTurn('down');

}

function up() {

    if (turn.block == 1)
        return 0;

    moveDirection = 'up';

    makeTurn('up');

}

function left() {
    if (turn.block == 1)
        return 0;

    moveDirection = 'left';

    makeTurn('left');

}

function right() {

    if (turn.block == 1)
        return 0;

    moveDirection = 'right';

    makeTurn('right');

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
