
export class App {
	
	static moveDirection;
	  static  phaseTime =  100;
	
	static score = 0;
	
	static winStatus = 0;
	static loseStatus=0;
	
	static moveDetected=0;
	
	
	
	
	
	
	
	static run() {
		
		
		
		 Field.make2ActiveCells();
    Draw.drawScore();
    Draw.startAnimation();

Controller.init();




		
	}
	

	
	
	
	
	
	
	
	static startNewGame()  {
		
		   buttonTryAgain.visible = 0;
    buttonTryAgain.cursorOverbutton = 0;
    App.score = 0;

   document.getElementsByTagName("body")[0].style.cursor = "default";
    Field.cellArray = [];
    Field.make2ActiveCells();
   App.turnBlock = 0;
    Draw.drawScore();
    Draw.drawCells();

    App.winStatus = 0;
	App.loseStatus = 0;
		
		
	}
	
	
	static turnBlock=0;
	
	static makeTurn() {

	App.turnBlock = 1;
        App.#doPhase1();

       Draw.startAnimation();

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

        App.score += turnScore * 2;
        Draw.drawScore();

	
}

	
	static #checkWin() {
  let  valueArray = Field.cellArray.map(function (item) {
        return item.value;

    });

    if (valueArray.includes(2048))
        App.winStatus = 1;

    if (App.winStatus == 1)
        setTimeout(App.#makeWin, App.phaseTime); ;

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
        setTimeout(App.#makeLose, App.phaseTime);

}




static #makeLose() {

    Draw.drawLose();

    buttonTryAgain.draw();

    buttonTryAgain.visible = 1;

}




static #makeWin() {

    Draw.drawWin();

    buttonTryAgain.draw();
    buttonTryAgain.visible = 1;

}








	
	
	
	
	
	
}


App.run();