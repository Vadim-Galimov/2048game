

 export class Cell {


static moveXY = {
    down: [0, 90],
    up: [0, -90],
    left: [-90, 0],
    right: [90, 0],

}

    constructor(i) {
        this.i = i;
        this.number = i + 1;

        this.columnNumber = (((this.i + 1) % 4) != 0) ? (this.i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.i) / 4)) + 1;
        this.x = this.columnNumber * (90) - 80;
        this.y = this.rowNumber * (90) - 80;
        this.random10Percent = Math.floor(Math.random() * 10);
        this.value = 2;
        if (this.random10Percent == 9)
            this.value = 4;
        this.valueOfDraw = this.value;
        this.moveSpeed = 0;
        this.ticket = this.number;
        this.toDelete = 0;
        this.mergeBlock = 0;
        this.statusNewlyCreating = 1;
        this.sizePenalty = 0;
        this.statusEndedMerge = 0;
        this.sizeBonus = 0;
    }


    afterMove() {
        this.number = this.ticket;
        this.moveSpeed = 0;
        this.mergeBlock = 0;
        this.valueOfDraw = this.value;
        this.i = this.ticket - 1;
        this.columnNumber = (((this.i + 1) % 4) != 0) ? (this.i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.i) / 4)) + 1;
        this.x = this.columnNumber * (90) - 80;
        this.y = this.rowNumber * (90) - 80;
    }
    animateMerge(tick) {
        if (this.statusEndedMerge == 0)
            return 0;

        this.sizeBonus = 1 * tick;

    }

    animateCreating(tick) {
        if (this.statusNewlyCreating == 0)
            return 0;

        this.sizePenalty = 2 * tick;

    }
	
	stopAnimating() {
		
		     this.statusNewlyCreating = 0;
                this.sizePenalty = 0;
                this.statusEndedMerge = 0;
                this.sizeBonus = 0;
		
	}
	
	
	
	
	
}
	
	
	