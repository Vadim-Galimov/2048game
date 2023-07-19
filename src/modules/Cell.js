export class Cell {

    constructor(index) {

        // В паре "индекс - номер" индекс служит для математических операций, а номер оставлен для простоты восприятия кода, в частности в паре "номер - билет", где в определённый момент хода, они могут иметь разные значения

        this.random10Percent = Math.floor(Math.random() * 10);
        this.value = 2;
        if (this.random10Percent == 9)
            this.value = 4;

        this.number = index + 1;
        this.ticket = this._number;
        this.toDelete = 0;

        this.statusNewlyCreating = 1;
        this.sizePenalty = 0;
        this.statusEndedMerge = 0;
        this.sizeBonus = 0;
    }

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

    }

    get number() {

        return this._number;
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