


function makePrewinSituation() {

    Field.cellArray[0].value = 1024;

    Field.cellArray[1].value = 1024;

    Field.cellArray[1].drawValue = 1024;

    Field.cellArray[0].drawValue = 1024;

    Draw.drawCells();

}

function makePreloseSituation() {

    newGame();

    for (i = 0; i < 13; i++) {

        make1ActiveCell();
    }

    for (i = 0; i < 15; i++) {

        Field.cellArray[i].value = i + 32;
        Field.cellArray[i].drawValue = i + 32;
    }

    Draw.drawCells();

}
