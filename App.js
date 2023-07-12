
 class App {
	
	static moveDirection;
	  static  phaseTime =  100;
	
	static #score = 0;
	
	static winStatus = 0;
	static loseStatus=0;
	
	static moveDetected=0;
	
	
	
	static downColumnArr = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
];
static upColumnArr = [
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16]
];
static rightColumnArr = [
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9],
    [16, 15, 14, 13]
];
static leftColumnArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
static columnArray = {
    down: App.downColumnArr,
    up: App.upColumnArr,
    left: App.leftColumnArr,
    right: App.rightColumnArr,

}
	
	
	
	static run() {
		


		
		 Field.make2ActiveCells();
    Draw.drawScore(App.#score);
    Draw.startAnimation(Field.cellArray);

Controller.init();




		
	}
	

	
	
	
	
	
	
	
	static startNewGame()  {
		
		   Field.buttonTryAgain.visible = 0;
		   Field.buttonTryAgain.visible = 0;
    Field.buttonTryAgain.cursorOverbutton = 0;
    App.#score = 0;

   document.getElementsByTagName("body")[0].style.cursor = "default";
    Field.cellArray = [];
    Field.make2ActiveCells();
   App.turnBlock = 0;
    Draw.drawScore(App.#score);
    Draw.drawCells();

    App.winStatus = 0;
	App.loseStatus = 0;
		
		
	}
	
	
	static turnBlock=0;
	
	static makeTurn() {

	App.turnBlock = 1;
        App.#doPhase1();

       Draw.startAnimation(Field.cellArray);

        setTimeout(() => {
            App.#doPhase2();

        }, App.phaseTime);

        setTimeout(() => {
            App.#doPostTurn();

        }, App.phaseTime * 2);
}
	
	
	
	
	
	
	
	     static #doPhase1() {

Field.setTickets()

        Field.allMove();

    };
	
	
	
	
	
	
	

    static #doPhase2() {

	Field.animateResize();


App.#changeScore();





Field.deleteExcessCells();



 
 App.#checkTurnResult();
 

    };


	
	
	
	  static #doPostTurn() {
	   if(App.winStatus == 0&&App.loseStatus==0) App.turnBlock = 0
     

    };

	
	
	
	
	
	
	
	

	
	

	
	
	
	static #checkTurnResult() {
	
	           if (App.moveDetected == 1)
                Field.make1ActiveCell()

                App.moveDetected = 0;
            App.#checkWin();

        if (App.winStatus == 1)
            return 0;
        App.#checkLose();

        if (App.loseStatus == 1)
            return 0;
	
	
}
	
	
	
	
	
	
		static #changeScore() {
	
	
         let   turnScore = 0;
        Field.cellArray.forEach(function (item) {
            if (item.toDelete == 1)
                turnScore += item.drawValue;
        });

        App.#score += turnScore * 2;
        Draw.drawScore(App.#score);

	
}

	
	static #checkWin() {
  let  valueArray = Field.cellArray.map(function (item) {
        return item.value;

    });

    if (valueArray.includes(2048))
        App.winStatus = 1;

    if (App.winStatus == 1)
        setTimeout(App.makeWin, App.phaseTime); ;

}
	
	
	static #checkLose() {

    App.loseStatus = 1;

    if (Field.cellArray.length < 16) {
        App.loseStatus = 0;
        return 0;
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (Field.getCellFromNumber(downColumnArr[i1][i])?.value == Field.getCellFromNumber(downColumnArr[i1][i + 1])?.value)
                App.loseStatus = 0;

        }
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (Field.getCellFromNumber(rightColumnArr[i1][i])?.value == Field.getCellFromNumber(rightColumnArr[i1][i + 1])?.value)
                App.loseStatus = 0;

        }
    }

    if (App.loseStatus == 1)
        setTimeout(App.makeLose, App.phaseTime);

}




static makeLose() {

    Draw.drawLose();

    Field.buttonTryAgain.draw();

    Field.buttonTryAgain.visible = 1;

}




static makeWin() {

    Draw.drawWin();

    Field.buttonTryAgain.draw();
    Field.buttonTryAgain.visible = 1;

}








	
static makePrewinSituation() {

    Field.cellArray[0].value = 1024;

    Field.cellArray[1].value = 1024;

    Field.cellArray[1].drawValue = 1024;

    Field.cellArray[0].drawValue = 1024;

    Draw.drawCells();

}

static makePreloseSituation() {

    Controller.newGame();

    for (let i = 0; i < 13; i++) {

        Field.make1ActiveCell();
    }

    for (let i = 0; i < 15; i++) {

        Field.cellArray[i].value = i + 32;
        Field.cellArray[i].drawValue = i + 32;
    }

    Draw.drawCells();

}

	
	
	
	
	
}


App.run();