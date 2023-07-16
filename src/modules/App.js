

import {Controller} from './Controller.js';
const controller= new Controller();

import {Drawer} from './Drawer.js';
const drawer = new Drawer();

import {Field} from './Field.js';
const field = new Field();




export class App {
	
	

	static run() {

		Controller.doMove=App.doMove.bind(this);
		Controller.makeLose=App.makeLose.bind(this);
		Controller.makeWin=App.makeWin.bind(this);
		Controller.makePrewinSituation=App.makePrewinSituation.bind(this);
		Controller.makePreloseSituation=App.makePreloseSituation.bind(this);
		Controller.startNewGame=App.startNewGame.bind(this);
		Controller.checkMouseMove=App.checkMouseMove.bind(this);
        Controller.buttonClick=App.buttonClick.bind(this);



		 App.#make2ActiveCells();
		 

	App.#animateResize();
    Drawer.drawScore(Field.score);
    App.#startAnimation();

Controller.init();




		
	}
	

	
	static startNewGame()  {
		
	
		   Field.buttonTryAgain.visible = 0;
		   Controller.enterActiveStatus = 0;
		   
    Field.buttonTryAgain.cursorOverbutton = 0;
    Field.score = 0;

   document.getElementsByTagName("body")[0].style.cursor = "default";
    Field.cellArray = [];
    App.#make2ActiveCells();
	

	App.#animateResize();
   Field.turnBlock = 0;
    Drawer.drawScore(Field.score);
     App.#startAnimation();

    Field.winStatus = 0;
	Field.loseStatus = 0;
		
		
	}
	
	

	static #makeTurn() {

	
	
        App.#doPhase1();

 

        setTimeout(() => {
            App.#doPhase2();

        }, Field.phaseTime);

        setTimeout(() => {
            App.#doPostTurn();

        }, Field.phaseTime * 2);
}
	
	
	
	
	
	
	
	     static #doPhase1() {
			       App.#startAnimation();

App.#setTickets()

        App.#allMove();

    };
	
	
	
	
	
	
	

    static #doPhase2() {

	App.#animateResize();


App.#changeScore();





App.#deleteExcessCells();



 
 App.#checkTurnResult();


    };


	
	
	
	  static #doPostTurn() {
	   if(Field.winStatus == 0&&Field.loseStatus==0) Field.turnBlock = 0
     

    };

	
	
	
	
	
	
	
	

	
	

	
	
	
	static #checkTurnResult() {
	
	           if (Field.moveDetected == 1)
                App.#make1ActiveCell()

                Field.moveDetected = 0;
            App.#checkWin();

        if (Field.winStatus == 1)
            return 0;
        App.#checkLose();

        if (Field.loseStatus == 1)
            return 0;
	
	
}
	
	
	
	
	
	
		static #changeScore() {
	
	
         let   turnScore = 0;
        Field.cellArray.forEach(function (item) {
            if (item.toDelete == 1)
                turnScore += item.valueOfDraw;
        });

        Field.score += turnScore * 2;
        Drawer.drawScore(Field.score);

	
}

	
	static #checkWin() {
  let  valueArray = Field.cellArray.map(function (item) {
        return item.value;

    });

    if (valueArray.includes(2048))
        Field.winStatus = 1;

    if (Field.winStatus == 1)
        setTimeout(App.makeWin, Field.phaseTime); ;

}
	
	
	static #checkLose() {

    Field.loseStatus = 1;

    if (Field.cellArray.length < 16) {
        Field.loseStatus = 0;
        return 0;
    }

    for (let i1 = 0; i1 < 4; i1++) {
        for (let i = 0; i < 3; i++) {

            if (Field.getCellFromNumber(Field.downColumnArr[i1][i])?.value == Field.getCellFromNumber(Field.downColumnArr[i1][i + 1])?.value)
                Field.loseStatus = 0;

        }
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (Field.getCellFromNumber(Field.rightColumnArr[i1][i])?.value == Field.getCellFromNumber(Field.rightColumnArr[i1][i + 1])?.value)
                Field.loseStatus = 0;

        }
    }

    if (Field.loseStatus == 1)
        setTimeout(App.makeLose, Field.phaseTime);

}




static makeLose() {

    Drawer.drawLose();

  buttonXY = Drawer.drawButton(Field.buttonTryAgain);
	Field.buttonXY=buttonXY;
    Field.buttonTryAgain.visible = 1;
Controller.enterActiveStatus=1;
}




static makeWin() {

    Drawer.drawWin();

 let  buttonXY = Drawer.drawButton(Field.buttonTryAgain);
  	Field.buttonTryAgain.buttonXY=buttonXY;

    Field.buttonTryAgain.visible = 1;
	Controller.enterActiveStatus=1;

}








	
static makePrewinSituation() {

    Field.cellArray[0].value = 1024;

    Field.cellArray[1].value = 1024;

    Field.cellArray[1].valueOfDraw = 1024;

    Field.cellArray[0].valueOfDraw = 1024;

    Drawer.drawCells(Field.cellArray);

}

static makePreloseSituation() {

     App.startNewGame();

    for (let i = 0; i < 13; i++) {

        App.#make1ActiveCell();
    }

    for (let i = 0; i < 15; i++) {

        Field.cellArray[i].value = i + 32;
        Field.cellArray[i].valueOfDraw = i + 32;
    }

    Drawer.drawCells(Field.cellArray);

}

	
		static #animateResize() {
		   let i = 0;
   let createInterval = setInterval(() => {
        Field.cellArray.forEach(function (item) {
            item.animateCreating(5 - i);
            item.animateMerge(5 - i);
        });
        i++;
        if (i > 4) {

            clearInterval(createInterval);
            Field.cellArray.forEach(function (item) {
           item.stopAnimating();
            });
        }
    }, 10)
		
	}
	
	
	
	
	
	static #make2ActiveCells() {

   let randomNum1 = Math.floor(Math.random() * 16);
   let randomNum2;

    do {
        randomNum2 = Math.floor(Math.random() * 16);
    } while (randomNum2 === randomNum1);

  let  newCell = Field.makeCell(randomNum1);

    Field.cellArray.push(newCell);

    newCell = Field.makeCell(randomNum2);

    Field.cellArray.push(newCell);

    Field.cellArray.forEach(function (item) {
        item.value = 2;
        item.valueOfDraw = 2;
    })

}
	
	
	
		static #setTickets() {
		        for (let i = 0; i < 4; i++) {
            App.#setTicketAndMoveSpeed(1, i);
            App.#setTicketAndMoveSpeed(2, i);
            App.#setTicketAndMoveSpeed(3, i);
        }
		
	}

	
	
	
	
	
	static #setTicketAndMoveSpeed(choosenNumber, choosenColumn) {
 let  choosenColumnArr = Field.columnArray[Field.moveDirection];

   let choosenCell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

    if (!choosenCell)
        return 0;

  let  maxMove = App.#getMaxMove(choosenColumn, choosenCell);

   let sub1Number = choosenNumber - 1;
   let sub2Number = choosenNumber - 2;
  let  sub3Number = choosenNumber - 3;

  let  sub1Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
   let sub2Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
  let  sub3Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

  let  ticket = choosenCell.number;
   let moveSpeed = 0;
    if (App.#checkMerge(sub1Cell, choosenCell)) {
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
        if (App.#checkMerge(sub2Cell, choosenCell)) {
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
            if (App.#checkMerge(sub3Cell, choosenCell)) {
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





}


	
	
	    static #getMaxMove(choosenColumn, choosenCell) {
 let  choosenColumnArr = Field.columnArray[Field.moveDirection];
       let thisArr = choosenColumnArr[choosenColumn];

        return thisArr.indexOf(choosenCell.number); ;

    }
	
	
	
    static #checkMerge(subCell, choosenCell) {

        if (subCell?.value == choosenCell.value && subCell?.mergeBlock == 0 && choosenCell.mergeBlock == 0)
            return 1;
        else
            return 0;

    }
	
	
	
	
	
	
	
	static #allMove() {
 let   animationCounter = 0;
 let   timerMakeStep = setInterval(() => {
        if (animationCounter > 4) {
            clearInterval(timerMakeStep);
			        Field.cellArray.forEach(function (item) {
            item.afterMove()

        });
		}
        Field.stepMove();
        animationCounter++;
    }, Field.phaseTime / 5);




}
	
	
	
	
	
	
	
	

	
	static #deleteExcessCells() {
	
	
	        Field.cellArray = Field.cellArray.filter(function (item) {

            return item.toDelete != 1;

        })

	
}
	
	
	
static #make1ActiveCell() {
 let  randomNum;
    function checkCellFunc() {

     let   thisCell = Field.cellArray.find(function (item) {
            return item.ticket == randomNum + 1;

        });

        return thisCell;

    }

    do {
     randomNum = Math.floor(Math.random() * 16);
    } while (checkCellFunc());

  let  newCell = new Cell(randomNum);

    Field.cellArray.push(newCell);

}
	
			static #startAnimation() {
		
	 let timerDrawCells = setInterval( () => {Drawer.drawCells(Field.cellArray) }, 10);	
	 
	     setTimeout(() => {
    clearInterval(timerDrawCells);

    }, Field.phaseTime * 2);
	}
	
	
	
	static doMove(direction) {

	   if 	(Field.turnBlock == 1) return 0;
	Field.turnBlock = 1;
	
	
	  Field.moveDirection = direction;
	
		App.#makeTurn()
		
	}
	
	
	static checkMouseMove(cursorX, cursorY) {
		
		
		        if (Field.buttonTryAgain.visible == 1) {

         let   elem = document.getElementById('canvasBody');

            if (
                cursorX > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                cursorX < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                cursorY > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                cursorY < Field.buttonTryAgain.buttonY2 + elem.offsetTop) {

         
                document.getElementsByTagName("body")[0].style.cursor = "pointer";
                Field.buttonTryAgain.cursorOverbutton = 1;
            } else {

            
               document.getElementsByTagName("body")[0].style.cursor = "default";
                Field.buttonTryAgain.cursorOverbutton = 0;

            }

        }
		
			
		
		
		
	}
	




 static buttonClick() {
	
    if (Field.buttonTryAgain.cursorOverbutton == 1&&Field.buttonTryAgain.visible == 1)
   App.startNewGame();  
	  
  }



static  touchButtonClick(x1, y1) {
	

		         elem = document.getElementById('canvasBody');

		
		
		 if (
                x1 > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                x1 < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                y1 > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                y1 < Field.buttonTryAgain.buttonY2 + elem.offsetTop&&
				Field.buttonTryAgain.visible == 1)    App.startNewGame();  
	  
  }



static getButtonXY() {
	
return [1, 2, 3, 4]	
	
}




	
}



