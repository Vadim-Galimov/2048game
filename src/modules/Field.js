export class Field {

    constructor() {
        if (Field._instance) {
          return Field._instance;
        }
    
        Field._instance = this;
      }

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
    cellArray = [];
    moveDirection;
    phaseTime = 100;
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

    getCellFromNumber(cellNumber) {
        return this.cellArray.find(function(item, index) {
            return item.ticket == cellNumber;
        });

    }

   resetData() {
        this.winStatus = 0;
        this.loseStatus = 0;
        this.score = 0;
        this.buttonTryAgain.visible = 0;
        this.buttonTryAgain.cursorOverbutton = 0;
        this.cellArray = [];
        this.turnBlock = 0;
        document.body.style.cursor = "default";
    }

     make2ActiveCells() {

        let randomNum1 = Math.floor(Math.random() * 16);
        let randomNum2;

        do {
            randomNum2 = Math.floor(Math.random() * 16);
        } while (randomNum2 === randomNum1);

        let newCell = new Cell(randomNum1);
        this.cellArray.push(newCell);
        newCell = new Cell(randomNum2);
        this.cellArray.push(newCell);
        this.cellArray.forEach(function(item) {
            item.value = 2;
            item.valueOfDraw = 2;
        })

    }

    make1ActiveCell() {
      
        let randomNum;
        do {
            randomNum = Math.floor(Math.random() * 16);
        } while (checkCellFunc(randomNum, this));

        let newCell = new Cell(randomNum);
        this.cellArray.push(newCell);



       function checkCellFunc(randomNum, fieldContext) {
            let thisCell = fieldContext.cellArray.find(function(item) {
                return item.ticket == randomNum + 1;
            });
            return thisCell;
        }



    }




     deleteExcessCells() {
        this.cellArray = this.cellArray.filter(function(item) {
            return item.toDelete != 1;
        })
    }
    clearCells(fieldContext) {
        fieldContext.cellArray.forEach(function(item){
            item.statusNewlyCreating = 0;
            item.statusEndedMerge = 0;
        })


    }







}



 function Cell(index) {
    let cell ={
  

        // В паре "индекс - номер" индекс служит для математических операций, а номер оставлен для простоты восприятия кода, в частности в паре "номер - билет", где в определённый момент хода, они могут иметь разные значения

  
        value : ((Math.floor(Math.random() * 10)== 9) ? 4 : 2),
      
        toDelete : 0,
        statusNewlyCreating : 1,
        statusEndedMerge : 0,

 

    set number(value) {
        this._number = value;
        this.index = this._number - 1;
        this.columnNumber = (((this.index + 1) % 4) != 0) ? (this.index + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.index) / 4)) + 1;
        this.x = this.columnNumber * (90) - 80;
        this.y = this.rowNumber * (90) - 80;
        this.moveSpeed = 0;
        this.mergeBlock = 0;
        this.valueOfDraw = this.value;
    },

    get number() {
        return this._number;
    },




 

}
cell.number = index + 1;
cell.ticket=cell.number;


return cell;
}

