

let buttonTryAgain = new Button;

function makeLose() {

    drawLose();

    buttonTryAgain.draw();

    buttonTryAgain.visible = 1;

}

function checkLose() {

    turn.loseStatus = 1;

    if (cellArray.length < 16) {
        turn.loseStatus = 0;
        return 0;
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (getCellFromNumber(downColumnArr[i1][i])?.value == getCellFromNumber(downColumnArr[i1][i + 1])?.value)
                turn.loseStatus = 0;

        }
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (getCellFromNumber(rightColumnArr[i1][i])?.value == getCellFromNumber(rightColumnArr[i1][i + 1])?.value)
                turn.loseStatus = 0;

        }
    }

    if (turn.loseStatus == 1)
        setTimeout(makeLose, turn.phaseTime);

}

function checkWin() {
    valueArray = cellArray.map(function (item) {
        return item.value;

    });

    if (valueArray.includes(2048))
        turn.winStatus = 1;

    if (turn.winStatus == 1)
        setTimeout(makeWin, turn.phaseTime); ;

}

function makeWin() {

    drawWin();

    buttonTryAgain.draw();
    buttonTryAgain.visible = 1;

}
