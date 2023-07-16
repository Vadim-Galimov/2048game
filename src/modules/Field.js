


import {Button} from './Button.js';
const button= new Button();


import {Cell} from './Cell.js';
const cell = new Cell();








export class Field {
	
	
	static buttonTryAgain = new Button();
	
	

	
	
	
	static score = 0;

		static cellArray=[];


	static moveDirection;
	  static  phaseTime =  100;

	
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
    down: Field.downColumnArr,
    up: Field.upColumnArr,
    left: Field.leftColumnArr,
    right: Field.rightColumnArr,

}
	

	
		static turnBlock=0;
	













static getCellFromNumber(cellNumber) {

    return Field.cellArray.find(function (item, index) {
        return item.ticket == cellNumber;
    });

}



    static makeCell(number) {
     let newCell = new Cell(number);
            return newCell;
    }

        static stepMove() {}
    Field.cellArray.forEach(function (item) {

        item.x += (Cell.moveXY[Field.moveDirection][0] * item.moveSpeed) / ( Field.phaseTime / 20);
        item.y += (Cell.moveXY[Field.moveDirection][1] * item.moveSpeed) / (Field.phaseTime / 20);


    })
}










    }









