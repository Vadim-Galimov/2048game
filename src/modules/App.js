import {Controller} from './Controller.js';




import {Drawer} from './Drawer.js';


import {Field} from './Field.js';





export class App {

    static controller = new Controller();
    static drawer = new Drawer();
    static field = new Field();
        constructor() {
          if (App._instance) {
            return App._instance;
          }
      
          App._instance = this;
        }



       




    run() {
        this.setupController();
        this.startNewGame();
    }

    startNewGame() {
        App.field.resetData();
        App.field.make2ActiveCells();
        App.mathCellResize();
        App.drawer.drawScore(App.field.score);
        App.drawer.runBodyDrawer(App.field.phaseTime * 2, App.field.cellArray);
    }

    async makeTurn() {
        await this.turn.runPhaseOne();
        await this.turn.runPhaseTwo();
        await this.turn.runPostTurnPhase();
    }

    turn = {

        async runPhaseOne() {
            App.drawer.runBodyDrawer(App.field.phaseTime, App.field.cellArray);
            this.setTickets()
            this.allMove();
            await this.delay();
        },

        async runPhaseTwo() {
       
            App.mathCellResize();
            this.changeScore();
            App.field.deleteExcessCells();
            App.gameStatus.checkTurnResult();
            App.drawer.runBodyDrawer(App.field.phaseTime, App.field.cellArray);
            await this.delay();
        },

        async runPostTurnPhase() {
            if (App.field.winStatus == 0 && App.field.loseStatus == 0) App.field.turnBlock = 0
        },

        delay() {
            return new Promise((resolve) => setTimeout(resolve, App.field.phaseTime));
        },

 

        setTickets() {
            for (let i = 0; i < 4; i++) {
                setTicketAndMoveSpeed(1, i);
                setTicketAndMoveSpeed(2, i);
                setTicketAndMoveSpeed(3, i);
            }

            function setTicketAndMoveSpeed(choosenNumber, choosenColumn) {
                let choosenColumnArr = App.field.columnArray[App.field.moveDirection];
                let choosenCell = App.field.getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

                if (!choosenCell)  return 0;
                let maxMove = getMaxMove(choosenColumn, choosenCell);

                let sub1Number = choosenNumber - 1;
                let sub2Number = choosenNumber - 2;
                let sub3Number = choosenNumber - 3;

                let sub1Cell = App.field.getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
                let sub2Cell = App.field.getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
                let sub3Cell = App.field.getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

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
                    App.field.moveDetected = 1;
                }

                if (!sub1Cell && maxMove > 0) {
                    moveSpeed = 1;
                    ticket = choosenColumnArr[choosenColumn][sub1Number];
                    App.field.moveDetected = 1;
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
                    let choosenColumnArr = App.field.columnArray[App.field.moveDirection];
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
                    App.field.cellArray.forEach(function(item) {
                        item.number = item.ticket;

                    });
                }
                stepMove();
                animationCounter++;
            }, App.field.phaseTime / 5);

            function stepMove() {
                App.field.cellArray.forEach(function(item) {
                    item.x += (App.field.moveDeltaXY[App.field.moveDirection][0] * item.moveSpeed) / (App.field.phaseTime / 20);
                    item.y += (App.field.moveDeltaXY[App.field.moveDirection][1] * item.moveSpeed) / (App.field.phaseTime / 20);
                })
            }
        },

        changeScore() {
            let turnScore = 0;
            App.field.cellArray.forEach(function(item) {
                if (item.toDelete == 1)
                    turnScore += item.valueOfDraw;
            });
            App.field.score += turnScore * 2;
            App.drawer.drawScore(App.field.score);
        },

   
    

    }


    static adminComands = {
        makePrewinSituation() {
            App.field.cellArray[0].value = 1024;
            App.field.cellArray[1].value = 1024;
            App.field.cellArray[1].valueOfDraw = 1024;
            App.field.cellArray[0].valueOfDraw = 1024;
            App.drawer.drawCells(App.field.cellArray);
        },

        makePreloseSituation() {
            App.field.cellArray=[];
            for (let i = 0; i < 15; i++) {
                App.field.make1ActiveCell();
            }
            console.log(App.field.cellArray);
            for (let i = 0; i < 15; i++) {
                App.field.cellArray[i].value = i + 32;
                App.field.cellArray[i].valueOfDraw = i + 32;
            }
            App.drawer.drawCells(App.field.cellArray);
        }
    }

    setupController() {
        Controller.doMove = this.rebind.doMove.bind(this);
        Controller.checkMouseMove = this.rebind.checkMouseMove.bind(this);
        Controller.buttonClick = this.rebind.buttonClick.bind(this);
        Controller.touchButtonClick = this.rebind.touchButtonClick.bind(this);
        Controller.pressEnter = this.rebind.pressEnter.bind(this);
        Controller.openAdminPanel = this.rebind.openAdminPanel.bind(this);
        Controller.triggerButton = this.rebind.triggerButton.bind(this);

        App.controller.init();
    }

   static gameStatus = {

        checkTurnResult() {
            if (App.field.moveDetected == 1) App.field.make1ActiveCell()
            App.field.moveDetected = 0;

            App.gameStatus.checkWin();
            if (App.field.winStatus == 1) return 0;

            App.gameStatus.checkLose();
            if (App.field.loseStatus == 1) return 0;
        },

        checkWin() {
            let valueArray = App.field.cellArray.map(function(item) {
                return item.value;
            });
            if (valueArray.includes(2048)) App.field.winStatus = 1;
            if (App.field.winStatus == 1) setTimeout(App.gameStatus.makeWin, App.field.phaseTime * 2);;
        },

        checkLose() {

            App.field.loseStatus = 1;
            if (App.field.cellArray.length < 16) {
                App.field.loseStatus = 0;
                return 0;
            }

            for (let i1 = 0; i1 < 4; i1++) {
                for (let i = 0; i < 3; i++) {
                    if (App.field.getCellFromNumber(App.field.columnArray['down'][i1][i])?.value == App.field.getCellFromNumber(App.field.columnArray['down'][i1][i + 1])?.value) App.field.loseStatus = 0;
                }
            }

            for (let i1 = 0; i1 < 4; i1++) {
                for (let i = 0; i < 3; i++) {
                    if (App.field.getCellFromNumber(App.field.columnArray['right'][i1][i])?.value == App.field.getCellFromNumber(App.field.columnArray['right'][i1][i + 1])?.value) App.field.loseStatus = 0;
                }
            }

            if (App.field.loseStatus == 1)
                setTimeout(App.gameStatus.makeLose, App.field.phaseTime * 2);
        },

        makeLose() {
            App.drawer.drawLose();
            let buttonXY = App.drawer.drawButton(App.field.buttonTryAgain);
            App.field.buttonTryAgain.buttonXY = buttonXY;
            App.field.buttonTryAgain.visible = 1;

        },

        makeWin() {
            App.drawer.drawWin();
            let buttonXY = App.drawer.drawButton(App.field.buttonTryAgain);
            App.field.buttonTryAgain.buttonXY = buttonXY;
            App.field.buttonTryAgain.visible = 1;
        },

    }

    rebind = {

        doMove(direction) {
            if (App.field.turnBlock == 1) return 0;
            App.field.turnBlock = 1;
            App.field.moveDirection = direction;
            this.makeTurn();
        },

        checkMouseMove(event) {
            if (App.field.buttonTryAgain.visible == 1) {
                let elem = document.getElementById('canvasBody');
                if (
                    event.x > App.field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                    event.x < App.field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                    event.y > App.field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                    event.y < App.field.buttonTryAgain.buttonY2 + elem.offsetTop) {

                    document.body.style.cursor = "pointer";
                    App.field.buttonTryAgain.cursorOverbutton = 1;

                } else {
                    document.body.style.cursor = "default";
                    App.field.buttonTryAgain.cursorOverbutton = 0;
                }
            }
        },

        buttonClick() {
            if (App.field.buttonTryAgain.cursorOverbutton == 1 && App.field.buttonTryAgain.visible == 1) this.startNewGame();
        },

        touchButtonClick(x1, y1) {
            elem = document.getElementById('canvasBody');

            if (
                x1 > App.field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                x1 < App.field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                y1 > App.field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                y1 < App.field.buttonTryAgain.buttonY2 + elem.offsetTop &&
                App.field.buttonTryAgain.visible == 1) this.startNewGame();
        },

        pressEnter() {
            if (App.field.winStatus == 1 || App.field.loseStatus == 1) this.startNewGame();
        },

        openAdminPanel() {
            document.getElementById('adminPanel').style = 'display: block';
        },

        triggerButton(event) {
            switch (event.target.id) {
                case 'startNewGame':
                    this.startNewGame();
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
    static mathCellResize() {
        let i = 0;
        let createInterval = setInterval(() => {
            App.field.cellArray.forEach(function(item) {
                item.animateCreating(5 - i);
                item.animateMerge(5 - i);
            });
            i++;
            if (i > 4) {
                clearInterval(createInterval);
                App.field.cellArray.forEach(function(item) {
                    item.stopAnimating();
                });
            }
        }, 10)

    }



}

