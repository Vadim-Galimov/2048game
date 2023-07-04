

let turn = {
	active: 0,
	block: 0,
	phaseTime : 100,
	
	startTurn: function() {
		
		
		  timerDrawCells = setInterval(drawCells, 10);
		  
		     setTimeout(() => {
    turn.endTurn();

    }, turn.phaseTime * 2);
	
	    turn.block = 1;
	
	  for (i = 0; i < 4; i++) {
        setTicketAndMoveSpeed(1, i, moveDirection);
        setTicketAndMoveSpeed(2, i, moveDirection);
        setTicketAndMoveSpeed(3, i, moveDirection);
    }
	
	   allMove();

    setTimeout(() => {

        i = 0;
        createInterval = setInterval(() => {
            cellArray.forEach(function (item) {
                item.createAnimation(5 - i);
                item.mergeAnimation(5 - i);
            });
            i++;
            if (i > 4) {

                clearInterval(createInterval);
                cellArray.forEach(function (item) {
                    item.create = 0;
                    item.createSize = 0;
                    item.merge = 0;
                    item.mergeSize = 0;
                });
            }
        }, 10)

            turnScore = 0;
        cellArray.forEach(function (item) {
            item.afterMove()

            item.createAnimation();
            if (item.toDelete == 1)
                turnScore += item.drawValue;
        });

        score += turnScore * 2;
        drawScore();
        drawCells();

        cellArray = cellArray.filter(function (item) {

            return item.toDelete != 1;

        })

            if (checkMove == 1)
                make1ActiveCell()

                checkMove = 0;
            checkWin();

        if (winStatus == 1)
            return 0;
        checkLose();

        if (loseStatus == 1)
            return 0;

        setTimeout(() => {
            turn.block = 0
        }, turn.phaseTime);

    }, turn.phaseTime);

	
		
	},
	
	
	
	
	
	
	
	
	endTurn: function(){
		    clearInterval(timerDrawCells);
		
	},
	
}



let cellArray = new Array;


let score = 0;

let cursorOverbutton;



let turnTime = turn.phaseTime * 2;

let checkMove = 1;

let winStatus;

let loseStatus;

let canvasBody = document.getElementById('canvasBody');

let ctxBody = canvasBody.getContext('2d');

let size = 80;
let minMargin = size / 8;

let fullSize = 4 * size + 5 * minMargin;

let stepMargin = minMargin + size;

let textMargin = size / 8 * 3;

let downColumnArr = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
];
let upColumnArr = [
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16]
];

let rightColumnArr = [
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9],
    [16, 15, 14, 13]
];
let leftColumnArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let columnArray = {
    down: downColumnArr,
    up: upColumnArr,
    left: leftColumnArr,
    right: rightColumnArr,

}

let touchCheck;
