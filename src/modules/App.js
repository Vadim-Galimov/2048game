import {Controller} from './Controller.js';




import {Drawer} from './Drawer.js';


import {Field} from './Field.js';





export class App {

    controller = new Controller();
    drawer = new Drawer();
    field = new Field();
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
        this.field.resetData();
        this.field.make2ActiveCells();
        this.drawer.drawScore(this.field.score);
        this.drawer.runBodyDrawer(this.field.phaseTime * 2, this.field.cellArray);
        setTimeout(this.field.clearCells, this.field.phaseTime, this.field);

    }

    async makeTurn(appContext) {
        await this.turn.runPhaseOne(appContext);
        await this.turn.runPhaseTwo(appContext);
        await this.turn.runPostTurnPhase(appContext);
    }

    turn = {

        async runPhaseOne(appContext) {
            appContext.drawer.runBodyDrawer(appContext.field.phaseTime, appContext.field.cellArray);
            this.setTickets(appContext)
            this.allMove(appContext);
            await this.delay(appContext);
        },

        async runPhaseTwo(appContext) {
            this.changeScore(appContext);
            appContext.field.deleteExcessCells();
            appContext.checkTurnResult();
            appContext.drawer.runBodyDrawer(appContext.field.phaseTime, appContext.field.cellArray);
            await this.delay(appContext);
            
        },

        async runPostTurnPhase(appContext) {
            appContext.field.clearCells(appContext.field);
            if (appContext.field.winStatus == 0 && appContext.field.loseStatus == 0) appContext.field.turnBlock = 0
        },

        delay(appContext) {
            return new Promise((resolve) => setTimeout(resolve, appContext.field.phaseTime));
        },

 

        setTickets(appContext) {
            for (let i = 0; i < 4; i++) {
                setTicketAndMoveSpeed(1, i, appContext);
                setTicketAndMoveSpeed(2, i, appContext);
                setTicketAndMoveSpeed(3, i, appContext);
            }

            function setTicketAndMoveSpeed(choosenNumber, choosenColumn, appContext) {
                let choosenColumnArr = appContext.field.columnArray[appContext.field.moveDirection];
                let choosenCell = appContext.field.getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

                if (!choosenCell)  return 0;
                let maxMove = getMaxMove(choosenColumn, choosenCell);

                let sub1Number = choosenNumber - 1;
                let sub2Number = choosenNumber - 2;
                let sub3Number = choosenNumber - 3;

                let sub1Cell = appContext.field.getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
                let sub2Cell = appContext.field.getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
                let sub3Cell = appContext.field.getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

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
                    appContext.field.moveDetected = 1;
                }

                if (!sub1Cell && maxMove > 0) {
                    moveSpeed = 1;
                    ticket = choosenColumnArr[choosenColumn][sub1Number];
                    appContext.field.moveDetected = 1;
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
                    let choosenColumnArr = appContext.field.columnArray[appContext.field.moveDirection];
                    let thisArr = choosenColumnArr[choosenColumn];
                    return thisArr.indexOf(choosenCell.number);;

                }

                function checkMerge(subCell, choosenCell) {

                    if (subCell?.value == choosenCell.value && subCell?.mergeBlock == 0 && choosenCell.mergeBlock == 0) return 1;
                    else return 0;
                }
            }
        },

        allMove(appContext) {
            let animationCounter = 0;
            let timerMakeStep = setInterval(() => {
                if (animationCounter > 4) {
                    clearInterval(timerMakeStep);
                    appContext.field.cellArray.forEach(function(item) {
                        item.number = item.ticket;

                    });
                }
                stepMove(appContext);
                animationCounter++;
            }, appContext.field.phaseTime / 5);

            function stepMove(appContext) {
                
                appContext.field.cellArray.forEach(function(item) {

                    item.x += (appContext.field.moveDeltaXY[appContext.field.moveDirection][0] * item.moveSpeed) / (appContext.field.phaseTime / 20);
                    item.y += (appContext.field.moveDeltaXY[appContext.field.moveDirection][1] * item.moveSpeed) / (appContext.field.phaseTime / 20);
                })
            }
        },

        changeScore(appContext) {
            let turnScore = 0;
            appContext.field.cellArray.forEach(function(item) {
                if (item.toDelete == 1)
                    turnScore += item.valueOfDraw;
            });
            appContext.field.score += turnScore * 2;
            appContext.drawer.drawScore(appContext.field.score);
        },



    

    }


    adminComands = {
        makePrewinSituation(appContext) {
            appContext.field.cellArray[0].value = 1024;
            appContext.field.cellArray[1].value = 1024;
            appContext.field.cellArray[1].valueOfDraw = 1024;
            appContext.field.cellArray[0].valueOfDraw = 1024;
            appContext.drawer.drawCells(appContext.field.cellArray, 0);
        },

        makePreloseSituation(appContext) {
            appContext.field.cellArray=[];
            for (let i = 0; i < 15; i++) {
                appContext.field.make1ActiveCell();
            }
            for (let i = 0; i < 15; i++) {
                appContext.field.cellArray[i].value = i + 32;
                appContext.field.cellArray[i].valueOfDraw = i + 32;
            }
            appContext.drawer.drawCells(appContext.field.cellArray, 0);
        }
    }

    setupController() {
        this.controller.doMove = this.rebind.doMove.bind(this);
        this.controller.checkMouseMove = this.rebind.checkMouseMove.bind(this);
        this.controller.buttonClick = this.rebind.buttonClick.bind(this);
        this.controller.touchButtonClick = this.rebind.touchButtonClick.bind(this);
        this.controller.pressEnter = this.rebind.pressEnter.bind(this);
        this.controller.openAdminPanel = this.rebind.openAdminPanel.bind(this);
        this.controller.triggerButton = this.rebind.triggerButton.bind(this);

        this.controller.init();
    }



       checkTurnResult() {
            if (this.field.moveDetected == 1) this.field.make1ActiveCell()
            this.field.moveDetected = 0;

           this.checkWin(this);
            if (this.field.winStatus == 1) return 0;

            this.checkLose(this);
            if (this.field.loseStatus == 1) return 0;
        }
		
     checkWin(appContext) {
            let valueArray = this.field.cellArray.map(function(item) {
                return item.value;
            });
            if (valueArray.includes(2048)) this.field.winStatus = 1;
            if (this.field.winStatus == 1) setTimeout(this.makeWin, this.field.phaseTime * 2, appContext);
        }

     checkLose(appContext) {

            this.field.loseStatus = 1;
            if (this.field.cellArray.length < 16) {
                this.field.loseStatus = 0;
                return 0;
            }

            for (let i1 = 0; i1 < 4; i1++) {
                for (let i = 0; i < 3; i++) {
                    if (this.field.getCellFromNumber(this.field.columnArray['down'][i1][i])?.value == this.field.getCellFromNumber(this.field.columnArray['down'][i1][i + 1])?.value) this.field.loseStatus = 0;
                }
            }

            for (let i1 = 0; i1 < 4; i1++) {
                for (let i = 0; i < 3; i++) {
                    if (this.field.getCellFromNumber(this.field.columnArray['right'][i1][i])?.value == this.field.getCellFromNumber(this.field.columnArray['right'][i1][i + 1])?.value) this.field.loseStatus = 0;
                }
            }

            if (this.field.loseStatus == 1)
                setTimeout(this.makeLose, this.field.phaseTime * 2, appContext);
        }

        makeLose(appContext) {
            appContext.drawer.drawLose();
            let buttonXY = appContext.drawer.drawButton(appContext.field.buttonTryAgain);
            appContext.field.buttonTryAgain.buttonXY = buttonXY;
            appContext.field.buttonTryAgain.visible = 1;

        }

     makeWin(appContext) {
        appContext.drawer.drawWin();
            let buttonXY = appContext.drawer.drawButton(appContext.field.buttonTryAgain);
            appContext.field.buttonTryAgain.buttonXY = buttonXY;
            appContext.field.buttonTryAgain.visible = 1;
        }



    rebind = {

        doMove(direction) {
            if (this.field.turnBlock == 1) return 0;
            this.field.turnBlock = 1;
            this.field.moveDirection = direction;
            this.makeTurn(this);
        },

        checkMouseMove(event) {
        
            if (this.field.buttonTryAgain.visible == 1) {
                let elem = document.getElementById('canvasBody');
                if (
                    event.x > this.field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                    event.x < this.field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                    event.y > this.field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                    event.y < this.field.buttonTryAgain.buttonY2 + elem.offsetTop) {

                    document.body.style.cursor = "pointer";
                    this.field.buttonTryAgain.cursorOverbutton = 1;

                } else {
                    document.body.style.cursor = "default";
                    this.field.buttonTryAgain.cursorOverbutton = 0;
                }
            }
        },

        buttonClick() {
            if (this.field.buttonTryAgain.cursorOverbutton == 1 && this.field.buttonTryAgain.visible == 1) this.startNewGame();
        },

        touchButtonClick(x1, y1) {
            elem = document.getElementById('canvasBody');

            if (
                x1 > this.field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                x1 < this.field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                y1 > this.field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                y1 < this.field.buttonTryAgain.buttonY2 + elem.offsetTop &&
                this.field.buttonTryAgain.visible == 1) this.startNewGame();
        },

        pressEnter() {
            if (this.field.winStatus == 1 || this.field.loseStatus == 1) this.startNewGame();
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
                    this.makeLose(this);
                    break;

                case 'makeWin':
                    this.makeWin(this);
                    break;

                case 'makePrewinSituation':
                    this.adminComands.makePrewinSituation(this);
                    break;

                case 'makePreloseSituation':
                    this.adminComands.makePreloseSituation(this);
                    break;
            }
        }
    }



}

