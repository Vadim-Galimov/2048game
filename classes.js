

class Cell {


static moveXY = {
    down: [0, Draw.stepMargin],
    up: [0, -Draw.stepMargin],
    left: [-Draw.stepMargin, 0],
    right: [Draw.stepMargin, 0],

}

    constructor(i) {
        this.i = i;
        this.number = i + 1;

        this.columnNumber = (((this.i + 1) % 4) != 0) ? (this.i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.i) / 4)) + 1;
        this.x = this.columnNumber * (Draw.stepMargin) - Draw.size;
        this.y = this.rowNumber * (Draw.stepMargin) - Draw.size;
        this.random10Percent = Math.floor(Math.random() * 10);
        this.value = 2;
        if (this.random10Percent == 9)
            this.value = 4;
        this.drawValue = this.value;
        this.moveSpeed = 0;
        this.ticket = this.number;
        this.toDelete = 0;
        this.mergeBlock = 0;
        this.create = 1;
        this.createSize = 0;
        this.merge = 0;
        this.mergeSize = 0;
    }

    makeStep() {
        this.x += (Cell.moveXY[App.moveDirection][0] * this.moveSpeed) / ( App.phaseTime / 20);
        this.y += (Cell.moveXY[App.moveDirection][1] * this.moveSpeed) / (App.phaseTime / 20);

    }

    afterMove() {
        this.number = this.ticket;
        this.moveSpeed = 0;
        this.mergeBlock = 0;
        this.drawValue = this.value;
        this.i = this.ticket - 1;
        this.columnNumber = (((this.i + 1) % 4) != 0) ? (this.i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.i) / 4)) + 1;
        this.x = this.columnNumber * (Draw.stepMargin) - Draw.size;
        this.y = this.rowNumber * (Draw.stepMargin) - Draw.size;
    }
    mergeAnimation(tick) {
        if (this.merge == 0)
            return 0;

        this.mergeSize = 1 * tick;

    }

    createAnimation(tick) {
        if (this.create == 0)
            return 0;

        this.createSize = 2 * tick;

    }

}

class Button {

    constructor() {

        this.textValue = "Try again";
        this.context = Draw.ctxBody;
        this.font = 'bold ' + Draw.size / 4 + 'px sans-serif';

        this.context.font = this.font;

       let metrics = this.context.measureText(this.textValue);

      let  actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

     let   textWithMarginsWidth = metrics.width + Draw.textMargin;

        this.buttonFillStyle = "#8f7a66";
        this.textFillStyle = "#f9f6f2";

        this.buttonX1 = (Draw.fullSize - textWithMarginsWidth) / 2;

        this.buttonY1 = 220;
        this.buttonX2 = metrics.width + 30 + (Draw.fullSize - textWithMarginsWidth) / 2;
        this.buttonY2 = actualHeight + 15 + 220;
        this.buttonRadius = 3;
        this.textX = ((Draw.fullSize - metrics.width - 10) / 2) + 2;
        this.textY = 244;

        this.visible = 0;
		this.cursorOverbutton=0;
    }

    draw() {
        Draw.ctxBody.fillStyle = this.buttonFillStyle;
        Draw.ctxBody.font = this.font;
        Draw.roundRect(this.context, this.buttonX1, this.buttonY1, this.buttonX2, this.buttonY2, this.buttonRadius);

        Draw.ctxBody.fillStyle = this.textFillStyle;

        Draw.ctxBody.fillText(this.textValue, this.textX, this.textY);

    }

}


