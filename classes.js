let moveXY = {
    down: [0, stepMargin],
    up: [0, -stepMargin],
    left: [-stepMargin, 0],
    right: [stepMargin, 0],

}

class Cell {

    constructor(i) {
        this.i = i;
        this.number = i + 1;

        this.columnNumber = (((this.i + 1) % 4) != 0) ? (this.i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.i) / 4)) + 1;
        this.x = this.columnNumber * (stepMargin) - size;
        this.y = this.rowNumber * (stepMargin) - size;
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
        this.x += (moveXY[turn.moveDirection][0] * this.moveSpeed) / ( turn.phaseTime / 20);
        this.y += (moveXY[turn.moveDirection][1] * this.moveSpeed) / (turn.phaseTime / 20);

    }

    afterMove() {
        this.number = this.ticket;
        this.moveSpeed = 0;
        this.mergeBlock = 0;
        this.drawValue = this.value;
        this.i = this.ticket - 1;
        this.columnNumber = (((this.i + 1) % 4) != 0) ? (this.i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((this.i) / 4)) + 1;
        this.x = this.columnNumber * (stepMargin) - size;
        this.y = this.rowNumber * (stepMargin) - size;
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
        this.context = ctxBody;
        this.font = 'bold ' + size / 4 + 'px sans-serif';

        this.context.font = this.font;

        metrics = this.context.measureText(this.textValue);

        actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

        textWithMarginsWidth = metrics.width + textMargin;

        this.buttonFillStyle = "#8f7a66";
        this.textFillStyle = "#f9f6f2";

        this.buttonX1 = (fullSize - textWithMarginsWidth) / 2;

        this.buttonY1 = 220;
        this.buttonX2 = metrics.width + 30 + (fullSize - textWithMarginsWidth) / 2;
        this.buttonY2 = actualHeight + 15 + 220;
        this.buttonRadius = 3;
        this.textX = ((fullSize - metrics.width - 10) / 2) + 2;
        this.textY = 244;

        this.visible = 0;

    }

    draw() {
        ctxBody.fillStyle = this.buttonFillStyle;
        ctxBody.font = this.font;
        roundRect(this.context, this.buttonX1, this.buttonY1, this.buttonX2, this.buttonY2, this.buttonRadius);

        ctxBody.fillStyle = this.textFillStyle;

        ctxBody.fillText(this.textValue, this.textX, this.textY);

    }

}
