




 turn = {
    block: 0,
    phaseTime: 100,
	moveDirection: '',
}

turn.startTurn= function () {

        turn.doPhase1();

        timerDrawCells = setInterval(drawCells, 10);

        setTimeout(() => {
            turn.doPhase2();

        }, turn.phaseTime);

        setTimeout(() => {
            turn.endTurn();

        }, turn.phaseTime * 2);

        turn.block = 1;

    };



    turn.doPhase1 = function () {

        for (i = 0; i < 4; i++) {
            setTicketAndMoveSpeed(1, i);
            setTicketAndMoveSpeed(2, i);
            setTicketAndMoveSpeed(3, i);
        }

        allMove();

    };





    turn.doPhase2= function () {
        i = 0;
        createInterval = setInterval(() => {
            cellArray.forEach(function (item) {
                item.createAnimation(5 - i);
                item.mergeAnimation(5 - i);
            });
            i++;
            if (i > 4) {

                clearInterval(createInterval);
                cellArray.forEach(function (item) {
                    item.create = 0;
                    item.createSize = 0;
                    item.merge = 0;
                    item.mergeSize = 0;
                });
            }
        }, 10)

            turnScore = 0;
        cellArray.forEach(function (item) {
            item.afterMove()

            item.createAnimation();
            if (item.toDelete == 1)
                turnScore += item.drawValue;
        });

        score += turnScore * 2;
        drawScore();
        drawCells();

        cellArray = cellArray.filter(function (item) {

            return item.toDelete != 1;

        })

            if (checkMove == 1)
                make1ActiveCell()

                checkMove = 0;
            checkWin();

        if (winStatus == 1)
            return 0;
        checkLose();

        if (loseStatus == 1)
            return 0;

        setTimeout(() => {
            turn.block = 0
        }, turn.phaseTime);

    };



   turn.endTurn =function () {
        clearInterval(timerDrawCells);

    };











function makeTurn() {

  turn.startTurn();
 
}




function setTicketAndMoveSpeed(choosenNumber, choosenColumn) {
    choosenColumnArr = columnArray[turn.moveDirection];

    choosenCell = getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

    if (!choosenCell)
        return 0;

    maxMove = getMaxMove(choosenColumn);

    sub1Number = choosenNumber - 1;
    sub2Number = choosenNumber - 2;
    sub3Number = choosenNumber - 3;

    sub1Cell = getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
    sub2Cell = getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
    sub3Cell = getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

    ticket = choosenCell.number;
    moveSpeed = 0;
    if (checkMerge(sub1Cell)) {
        moveSpeed = 1;
        ticket = choosenColumnArr[choosenColumn][sub1Number];
        choosenCell.toDelete = 1;
        sub1Cell.value *= 2;
        sub1Cell.merge = 1;
        sub1Cell.mergeBlock = 1;
        choosenCell.mergeBlock = 1;
        checkMove = 1;
    }

    if (!sub1Cell && maxMove > 0) {
        moveSpeed = 1;
        ticket = choosenColumnArr[choosenColumn][sub1Number];
        checkMove = 1;
        if (checkMerge(sub2Cell)) {
            moveSpeed = 2;

            sub2Cell.value *= 2;
            sub2Cell.merge = 1;
            choosenCell.toDelete = 1;
            ticket = choosenColumnArr[choosenColumn][sub2Number];
            sub2Cell.mergeBlock = 1;
            choosenCell.mergeBlock = 1;

        }
        if (!sub2Cell && maxMove > 1) {
            moveSpeed = 2;

            ticket = choosenColumnArr[choosenColumn][sub2Number];
            if (checkMerge(sub3Cell)) {
                moveSpeed = 3;
                ticket = choosenColumnArr[choosenColumn][sub3Number];

                sub3Cell.value *= 2;
                sub3Cell.merge = 1;
                choosenCell.toDelete = 1;

                sub3Cell.mergeBlock = 1;
                choosenCell.mergeBlock = 1;

            }
            if (!sub3Cell && maxMove > 2) {
                moveSpeed = 3;

                ticket = choosenColumnArr[choosenColumn][sub3Number];

            }

        }

    }

    choosenCell.ticket = ticket;
    choosenCell.moveSpeed = moveSpeed;

    function getMaxMove(choosenColumn) {

        thisArr = choosenColumnArr[choosenColumn];

        return thisArr.indexOf(choosenCell.number); ;

    }

    function checkMerge(subCell) {

        if (subCell?.value == choosenCell.value && subCell?.mergeBlock == 0 && choosenCell.mergeBlock == 0)
            return 1;
        else
            return 0;

    }

}

function allMove() {
    animationCounter = 0;
    timerMakeStep = setInterval(() => {
        if (animationCounter > 4)
            clearInterval(timerMakeStep);

        cellArray.forEach(function (item) {
            item.makeStep()
        })
        animationCounter++;
    }, turn.phaseTime / 5);

}

function make1ActiveCell() {

    function checkCellFunc() {

        thisCell = cellArray.find(function (item) {
            return item.ticket == randomNum + 1;

        });

        return thisCell;

    }

    do {
        randomNum = Math.floor(Math.random() * 16);
    } while (checkCellFunc());

    newCell = new Cell(randomNum);

    cellArray.push(newCell);

}

function getCellFromNumber(cellNumber) {

    return cellArray.find(function (item, index) {
        return item.ticket == cellNumber;
    });

}
