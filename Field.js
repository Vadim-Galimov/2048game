class Field {

		static cellArray=[];


	static animateResize() {
		   let i = 0;
   let createInterval = setInterval(() => {
        Field.cellArray.forEach(function (item) {
            item.createAnimation(5 - i);
            item.mergeAnimation(5 - i);
        });
        i++;
        if (i > 4) {

            clearInterval(createInterval);
            Field.cellArray.forEach(function (item) {
                item.create = 0;
                item.createSize = 0;
                item.merge = 0;
                item.mergeSize = 0;
            });
        }
    }, 10)
		
	}


	static make2ActiveCells() {

   let randomNum1 = Math.floor(Math.random() * 16);
    let randomNum2;

    do {
        randomNum2 = Math.floor(Math.random() * 16);
    } while (randomNum2 === randomNum1);

  let  newCell = new Cell(randomNum1);

    Field.cellArray.push(newCell);

    newCell = new Cell(randomNum2);

    Field.cellArray.push(newCell);

    Field.cellArray.forEach(function (item) {
        item.value = 2;
        item.drawValue = 2;
    })


	Field.animateResize();
}





static make1ActiveCell() {
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







	static setTickets() {
		        for (let i = 0; i < 4; i++) {
            Field.#setTicketAndMoveSpeed(1, i);
            Field.#setTicketAndMoveSpeed(2, i);
            Field.#setTicketAndMoveSpeed(3, i);
        }
		
	}





	static #setTicketAndMoveSpeed(choosenNumber, choosenColumn) {
 let  choosenColumnArr = columnArray[App.moveDirection];

   let choosenCell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

    if (!choosenCell)
        return 0;

  let  maxMove = Field.#getMaxMove(choosenColumn, choosenCell);

   let sub1Number = choosenNumber - 1;
   let sub2Number = choosenNumber - 2;
  let  sub3Number = choosenNumber - 3;

  let  sub1Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
   let sub2Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
  let  sub3Cell = Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

  let  ticket = choosenCell.number;
   let moveSpeed = 0;
    if (Field.#checkMerge(sub1Cell, choosenCell)) {
        moveSpeed = 1;
        ticket = choosenColumnArr[choosenColumn][sub1Number];
        choosenCell.toDelete = 1;
        sub1Cell.value *= 2;
        sub1Cell.merge = 1;
        sub1Cell.mergeBlock = 1;
        choosenCell.mergeBlock = 1;
        App.moveDetected = 1;
    }

    if (!sub1Cell && maxMove > 0) {
        moveSpeed = 1;
        ticket = choosenColumnArr[choosenColumn][sub1Number];
        App.moveDetected = 1;
        if (Field.#checkMerge(sub2Cell, choosenCell)) {
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
            if (Field.#checkMerge(sub3Cell, choosenCell)) {
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





}



    static #getMaxMove(choosenColumn, choosenCell) {
 let  choosenColumnArr = columnArray[App.moveDirection];
       let thisArr = choosenColumnArr[choosenColumn];

        return thisArr.indexOf(choosenCell.number); ;

    }

    static #checkMerge(subCell, choosenCell) {

        if (subCell?.value == choosenCell.value && subCell?.mergeBlock == 0 && choosenCell.mergeBlock == 0)
            return 1;
        else
            return 0;

    }

	static allMove() {
 let   animationCounter = 0;
 let   timerMakeStep = setInterval(() => {
        if (animationCounter > 4) {
            clearInterval(timerMakeStep);
			        Field.cellArray.forEach(function (item) {
            item.afterMove()

        });
		}
        Field.cellArray.forEach(function (item) {
            item.makeStep()
        })
        animationCounter++;
    }, App.phaseTime / 5);




}




	



	
	static deleteExcessCells() {
	
	
	        Field.cellArray = Field.cellArray.filter(function (item) {

            return item.toDelete != 1;

        })

	
}
	









static getCellFromNumber(cellNumber) {

    return Field.cellArray.find(function (item, index) {
        return item.ticket == cellNumber;
    });

}











}