import {Controller} from './Controller.js';
const controller = new Controller();

import {Drawer} from './Drawer.js';
const drawer = new Drawer();

import {Field} from './Field.js';
const field = new Field();


export class App {

    static run() {
        App.#setupController();
        App.startNewGame();
    }

    static startNewGame() {
        Field.resetData();
        Field.make2ActiveCells();
        App.#mathCellResize();
        Drawer.drawScore(Field.score);
        Drawer.runBodyDrawer(Field.phaseTime * 2, Field.cellArray);
    }

    static async makeTurn() {
        await App.turn.runPhaseOne();
        await App.turn.runPhaseTwo();
        await App.turn.runPostTurnPhase();
    }

    static turn = {

        async runPhaseOne() {
            Drawer.runBodyDrawer(Field.phaseTime, Field.cellArray);
            App.turn.setTickets()
            App.turn.allMove();
            await App.turn.delay();
        },

        async runPhaseTwo() {
            App.#mathCellResize();
            App.turn.changeScore();
            Field.deleteExcessCells();
            App.turn.checkTurnResult();
            Drawer.runBodyDrawer(Field.phaseTime, Field.cellArray);
            await App.turn.delay();
        },

        async runPostTurnPhase() {
            if (Field.winStatus == 0 && Field.loseStatus == 0) Field.turnBlock = 0
        },

        delay() {
            return new Promise((resolve) => setTimeout(resolve, Field.phaseTime));
        },

        checkTurnResult() {
            if (Field.moveDetected == 1) Field.make1ActiveCell()
            Field.moveDetected = 0;

            App.gameStatus.checkWin();
            if (Field.winStatus == 1) return 0;

            App.gameStatus.checkLose();
            if (Field.loseStatus == 1) return 0;
        },

        setTickets() {
            for (let i = 0; i < 4; i++) {
                setTicketAndMoveSpeed(1, i);
                setTicketAndMoveSpeed(2, i);
                setTicketAndMoveSpeed(3, i);
            }

            function setTicketAndMoveSpeed(choosenNumber, choosenColumn) {
                let choosenColumnArr = Field.columnArray[Field.moveDirection];
                let choosenCell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

                if (!choosenCell)  return 0;
                let maxMove = getMaxMove(choosenColumn, choosenCell);

                let sub1Number = choosenNumber - 1;
                let sub2Number = choosenNumber - 2;
                let sub3Number = choosenNumber - 3;

                let sub1Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
                let sub2Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
                let sub3Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

                let ticket = choosenCell.number;
                let moveSpeed = 0;
                if (checkMerge(sub1Cell, choosenCell)) {
                    moveSpeed = 1;
                    ticket = choosenColumnArr[choosenColumn][sub1Number];
                    choosenCell.toDelete = 1;
                    sub1Cell.value *= 2;
                    sub1Cell.statusEndedMerge = 1;
                    sub1Cell.mergeBlock = 1;
                    choosenCell.mergeBlock = 1;
                    Field.moveDetected = 1;
                }

                if (!sub1Cell && maxMove > 0) {
                    moveSpeed = 1;
                    ticket = choosenColumnArr[choosenColumn][sub1Number];
                    Field.moveDetected = 1;
                    if (checkMerge(sub2Cell, choosenCell)) {
                        moveSpeed = 2;
                        sub2Cell.value *= 2;
                        sub2Cell.statusEndedMerge = 1;
                        choosenCell.toDelete = 1;
                        ticket = choosenColumnArr[choosenColumn][sub2Number];
                        sub2Cell.mergeBlock = 1;
                        choosenCell.mergeBlock = 1;

                    }
                    if (!sub2Cell && maxMove > 1) {
                        moveSpeed = 2;
                        ticket = choosenColumnArr[choosenColumn][sub2Number];
                        if (checkMerge(sub3Cell, choosenCell)) {
                            moveSpeed = 3;
                            ticket = choosenColumnArr[choosenColumn][sub3Number];
                            sub3Cell.value *= 2;
                            sub3Cell.statusEndedMerge = 1;
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

                function getMaxMove(choosenColumn, choosenCell) {
                    let choosenColumnArr = Field.columnArray[Field.moveDirection];
                    let thisArr = choosenColumnArr[choosenColumn];
                    return thisArr.indexOf(choosenCell.number);;

                }

                function checkMerge(subCell, choosenCell) {

                    if (subCell?.value == choosenCell.value && subCell?.mergeBlock == 0 && choosenCell.mergeBlock == 0) return 1;
                    else return 0;
                }
            }
        },

        allMove() {
            let animationCounter = 0;
            let timerMakeStep = setInterval(() => {
                if (animationCounter > 4) {
                    clearInterval(timerMakeStep);
                    Field.cellArray.forEach(function(item) {
                        item.number = item.ticket;

                    });
                }
                stepMove();
                animationCounter++;
            }, Field.phaseTime / 5);

            function stepMove() {
                Field.cellArray.forEach(function(item) {
                    item.x += (Field.moveDeltaXY[Field.moveDirection][0] * item.moveSpeed) / (Field.phaseTime / 20);
                    item.y += (Field.moveDeltaXY[Field.moveDirection][1] * item.moveSpeed) / (Field.phaseTime / 20);
                })
            }
        },

        changeScore() {
            let turnScore = 0;
            Field.cellArray.forEach(function(item) {
                if (item.toDelete == 1)
                    turnScore += item.valueOfDraw;
            });
            Field.score += turnScore * 2;
            Drawer.drawScore(Field.score);
        },

    }

    static #mathCellResize() {
        let i = 0;
        let createInterval = setInterval(() => {
            Field.cellArray.forEach(function(item) {
                item.animateCreating(5 - i);
                item.animateMerge(5 - i);
            });
            i++;
            if (i > 4) {
                clearInterval(createInterval);
                Field.cellArray.forEach(function(item) {
                    item.stopAnimating();
                });
            }
        }, 10)

    }

    static adminComands = {
        makePrewinSituation() {
            Field.cellArray[0].value = 1024;
            Field.cellArray[1].value = 1024;
            Field.cellArray[1].valueOfDraw = 1024;
            Field.cellArray[0].valueOfDraw = 1024;
            Drawer.drawCells(Field.cellArray);
        },

        makePreloseSituation() {
            App.startNewGame();
            for (let i = 0; i < 13; i++) {
                Field.make1ActiveCell();
            }
            for (let i = 0; i < 15; i++) {
                Field.cellArray[i].value = i + 32;
                Field.cellArray[i].valueOfDraw = i + 32;
            }
            Drawer.drawCells(Field.cellArray);
        }
    }

    static #setupController() {
        Controller.doMove = App.rebind.doMove.bind(this);
        Controller.checkMouseMove = App.rebind.checkMouseMove.bind(this);
        Controller.buttonClick = App.rebind.buttonClick.bind(this);
        Controller.touchButtonClick = App.rebind.touchButtonClick.bind(this);
        Controller.pressEnter = App.rebind.pressEnter.bind(this);
        Controller.openAdminPanel = App.rebind.openAdminPanel.bind(this);
        Controller.triggerButton = App.rebind.triggerButton.bind(this);

        Controller.init();
    }

    static gameStatus = {

        checkWin() {
            let valueArray = Field.cellArray.map(function(item) {
                return item.value;
            });
            if (valueArray.includes(2048)) Field.winStatus = 1;
            if (Field.winStatus == 1) setTimeout(App.gameStatus.makeWin, Field.phaseTime * 2);;
        },

        checkLose() {

            Field.loseStatus = 1;
            if (Field.cellArray.length < 16) {
                Field.loseStatus = 0;
                return 0;
            }

            for (let i1 = 0; i1 < 4; i1++) {
                for (let i = 0; i < 3; i++) {
                    if (Field.getCellFromNumber(Field.columnArray['down'][i1][i])?.value == Field.getCellFromNumber(Field.columnArray['down'][i1][i + 1])?.value) Field.loseStatus = 0;
                }
            }

            for (let i1 = 0; i1 < 4; i1++) {
                for (let i = 0; i < 3; i++) {
                    if (Field.getCellFromNumber(Field.columnArray['right'][i1][i])?.value == Field.getCellFromNumber(Field.columnArray['right'][i1][i + 1])?.value) Field.loseStatus = 0;
                }
            }

            if (Field.loseStatus == 1)
                setTimeout(App.gameStatus.makeLose, Field.phaseTime * 2);
        },

        makeLose() {
            Drawer.drawLose();
            let buttonXY = Drawer.drawButton(Field.buttonTryAgain);
            Field.buttonTryAgain.buttonXY = buttonXY;
            Field.buttonTryAgain.visible = 1;

        },

        makeWin() {
            Drawer.drawWin();
            let buttonXY = Drawer.drawButton(Field.buttonTryAgain);
            Field.buttonTryAgain.buttonXY = buttonXY;
            Field.buttonTryAgain.visible = 1;
        },

    }

    static rebind = {

        doMove(direction) {
            if (Field.turnBlock == 1) return 0;
            Field.turnBlock = 1;
            Field.moveDirection = direction;
            App.makeTurn();
        },

        checkMouseMove(event) {
            if (Field.buttonTryAgain.visible == 1) {
                let elem = document.getElementById('canvasBody');
                if (
                    event.x > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                    event.x < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                    event.y > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                    event.y < Field.buttonTryAgain.buttonY2 + elem.offsetTop) {

                    document.body.style.cursor = "pointer";
                    Field.buttonTryAgain.cursorOverbutton = 1;

                } else {
                    document.body.style.cursor = "default";
                    Field.buttonTryAgain.cursorOverbutton = 0;
                }
            }
        },

        buttonClick() {
            if (Field.buttonTryAgain.cursorOverbutton == 1 && Field.buttonTryAgain.visible == 1) App.startNewGame();
        },

        touchButtonClick(x1, y1) {
            elem = document.getElementById('canvasBody');

            if (
                x1 > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                x1 < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                y1 > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                y1 < Field.buttonTryAgain.buttonY2 + elem.offsetTop &&
                Field.buttonTryAgain.visible == 1) App.startNewGame();
        },

        pressEnter() {
            if (winStatus == 1 || loseStatus == 1) App.startNewGame();
        },

        openAdminPanel() {
            document.getElementById('adminPanel').style = 'display: block';
        },

        triggerButton(event) {
            switch (event.target.id) {
                case 'startNewGame':
                    App.startNewGame();
                    break;

                case 'makeLose':
                    App.gameStatus.makeLose();
                    break;

                case 'makeWin':
                    App.gameStatus.makeWin();
                    break;

                case 'makePrewinSituation':
                    App.adminComands.makePrewinSituation();
                    break;

                case 'makePreloseSituation':
                    App.adminComands.makePreloseSituation();
                    break;
            }
        }
    }
}