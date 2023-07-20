import {Cell} from './Cell.js';
const cell = new Cell();

export class Field {

     buttonTryAgain = {
        cursorOverbutton: 0,
        set buttonXY(value) {
            [this.buttonX1, this.buttonY1, this.buttonX2, this.buttonY2] = value;
        }
    }

     moveDeltaXY = {
        down: [0, 90],
        up: [0, -90],
        left: [-90, 0],
        right: [90, 0],
    }

     score = 0;
     cellArray = [];
     moveDirection;
     phaseTime = 100;
     winStatus = 0;
     loseStatus = 0;
     moveDetected = 0;
     columnArray = {
        down: [
            [13, 9, 5, 1],
            [14, 10, 6, 2],
            [15, 11, 7, 3],
            [16, 12, 8, 4]
        ],
        up: [
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15],
            [4, 8, 12, 16]
        ],
        left: [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
        ],
        right: [
            [4, 3, 2, 1],
            [8, 7, 6, 5],
            [12, 11, 10, 9],
            [16, 15, 14, 13]
        ],

    }

     turnBlock = 0;
     getCellFromNumber(cellNumber) {
        return Field.cellArray.find(function(item, index) {
            return item.ticket == cellNumber;
        });

    }

     resetData() {
        Field.winStatus = 0;
        Field.loseStatus = 0;
        Field.score = 0;
        Field.buttonTryAgain.visible = 0;
        Field.buttonTryAgain.cursorOverbutton = 0;
        document.body.style.cursor = "default";
        Field.cellArray = [];
        Field.turnBlock = 0;
    }

     make2ActiveCells() {

        let randomNum1 = Math.floor(Math.random() * 16);
        let randomNum2;

        do {
            randomNum2 = Math.floor(Math.random() * 16);
        } while (randomNum2 === randomNum1);

        let newCell = new Cell(randomNum1);
        Field.cellArray.push(newCell);
        newCell = new Cell(randomNum2);
        Field.cellArray.push(newCell);
        Field.cellArray.forEach(function(item) {
            item.value = 2;
            item.valueOfDraw = 2;
        })

    }

     make1ActiveCell() {
        let randomNum;
        function checkCellFunc() {
            let thisCell = Field.cellArray.find(function(item) {
                return item.ticket == randomNum + 1;
            });
            return thisCell;
        }

        do {
            randomNum = Math.floor(Math.random() * 16);
        } while (checkCellFunc());

        let newCell = new Cell(randomNum);
        Field.cellArray.push(newCell);
    }

     deleteExcessCells() {
        Field.cellArray = Field.cellArray.filter(function(item) {
            return item.toDelete != 1;
        })
    }
}