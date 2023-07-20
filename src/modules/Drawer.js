export class Drawer {


    constructor() {
        if (Drawer._instance) {
          return Drawer._instance;
        }
    
        Drawer._instance = this;
      }

    size = 80;
    minMargin = this.size / 8;
    fullSize = 4 * this.size + 5 * this.minMargin;
    stepMargin = this.minMargin + this.size;
    textMarginSize = this.size / 8 * 3;

    drawScore(score) {

        let canvas = (document.getElementById('canvasHead')).getContext('2d');
        canvas.clearRect(0, 0, canvasHead.width, canvasHead.height);
        canvas.font = 'bold ' + this.size * 35 / 80 + 'px sans-serif';
        let [textWidth, textHeight] = this.mathWidthHeight('SCORE:' + score, canvas);
        canvas.fillStyle = '#bbada0';
        let textWithMarginsWidth = textWidth + this.textMarginSize;
        let textScoreMargin = this.size * 25 / 80;
        let buttonScoreMarginTop = this.size / 4;
        let textScoreMarginTop = this.size / 8;

        Drawer.roundRect(canvas, ((this.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, textWidth + ((this.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20);
        canvas.strokeStyle = '#776e65';
        Drawer.roundRectStroke(canvas, ((this.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, textWidth + ((this.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20, 5);
        canvas.fillStyle = "#ebe4da";
        canvas.fillText("SCORE: " + score, ((this.fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop + textHeight + textScoreMarginTop);
    }

     
    runBodyDrawer(drawDuration, cellArray) {
        let timerDrawCells = setInterval(() => {this.drawCells(cellArray)}, 10);
        setTimeout(clearInterval, drawDuration, timerDrawCells);
    }

   drawCells(cellArray) {
 
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.clearRect(0, 0, canvasBody.width, canvasBody.height);
        this.drawBackground();

        cellArray.forEach( (item) =>{
            let cellValue = item.valueOfDraw;

            switch (cellValue) {

                case 2:
                case 4:
                case 8:
                case 16:
                case 32:
                case 64:
                    canvas.font = 'bold 50px sans-serif';
                    break;

                case 128:
                case 256:
                case 512:
                    canvas.font = 'bold 42px sans-serif';
                    break;

                case 1024:
                case 2048:
                    canvas.font = 'bold 35px sans-serif';
                    break;

            }

            switch (cellValue) {

                case 2:
                    canvas.fillStyle = '#eee4da';
                    break;

                case 4:
                    canvas.fillStyle = '#ede0c8';
                    break;

                case 8:
                    canvas.fillStyle = '#f2b179';
                    break;

                case 16:
                    canvas.fillStyle = '#f59563';
                    break;

                case 32:
                    canvas.fillStyle = '#f67c5f';
                    break;

                case 64:
                    canvas.fillStyle = '#f35c3d';
                    break;

                case 128:
                    canvas.fillStyle = '#e7cf73';
                    break;

                case 256:
                    canvas.fillStyle = '#ecca64';
                    break;

                case 512:
                case 1024:
                    canvas.fillStyle = '#eac75c';
                    break;

                case 2048:
                    canvas.fillStyle = '#e6bd4f';
                    break;

                default:
                    canvas.fillStyle = '#f2b179';
                    break;

            }

            Drawer.roundRect(canvas, item.x + item.sizePenalty - item.sizeBonus, item.y + item.sizePenalty - item.sizeBonus, item.x + this.size - item.sizePenalty + item.sizeBonus, item.y + this.size - item.sizePenalty + item.sizeBonus, 3);

            switch (cellValue) {

                case 2:
                case 4:
                    canvas.fillStyle = '#776e65';
                    break;

                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:

                    canvas.fillStyle = '#f9f6f2';
                    break;

                default:
                    canvas.fillStyle = '#776e65';
                    break;

            }

            let [textWidth, textHeight] = this.mathWidthHeight(cellValue, canvas);
            let addWidth = (this.size - textWidth) / 2;
            let addHeight = (this.size - textHeight) / 2;
            canvas.fillText(cellValue, item.x + addWidth, item.y + addHeight + textHeight);
        });
    }

    drawLose() {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = "rgba(255, 255, 255, 0.5)";
        Drawer.roundRect(canvas, 0, 0, this.fullSize, this.fullSize, 10);
        canvas.fillStyle = "#776e65";
        canvas.font = 'bold 50px sans-serif';
        let [textWidth, textHeight] = this.mathWidthHeight('GAME OVER!', canvas);
        let addWidth = (this.fullSize - textWidth) / 2;
        let addHeight = (this.fullSize - textHeight) / 2;
        canvas.fillText("GAME OVER!", addWidth, addHeight + textHeight);

    }

    drawWin() {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = "rgba(255, 215, 0, 0.5)";
        Drawer.roundRect(canvas, 0, 0, this.fullSize, this.fullSize, 10);
        canvas.fillStyle = "#f9f6f2";
        canvas.font = 'bold 50px sans-serif';
        let [textWidth, textHeight] = this.mathWidthHeight('YOU WIN!', canvas);
        let addWidth = (this.fullSize - textWidth) / 2;
        let addHeight = (this.fullSize - textHeight) / 2;
        canvas.fillText("YOU WIN!", addWidth, addHeight + textHeight);
    }

    drawBackground() {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = '#776e65';
        Drawer.roundRect(canvas, 0, 0, this.fullSize, this.fullSize, 10);
        canvas.fillStyle = '#bbada0';

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                let startWidth = this.minMargin + this.stepMargin * x;
                let startHeight = this.minMargin + this.stepMargin * y;
                Drawer.roundRect(canvas, startWidth, startHeight, startWidth + this.size, startHeight + this.size, 3);
            }
        }
    }

     drawButton(button) {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = "#8f7a66";
        canvas.font = 'bold ' + this.size / 4 + 'px sans-serif';
        let [textWidth, textHeight] = this.mathWidthHeight("Try again", canvas);
        let textWithMarginsWidth = textWidth + this.textMarginSize;
        Drawer.roundRect(canvas, (this.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (this.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220, 3);
        canvas.fillStyle = "#f9f6f2";
        canvas.fillText("Try again", ((this.fullSize - textWidth - 10) / 2) + 2, 244);
        return [(this.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (this.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220];
    }

    static roundRect(canvas, x1, y1, x2, y2, radius) {
        radius = Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2);
        canvas.beginPath();
        canvas.moveTo(x1 + radius, y1);
        canvas.lineTo(x2 - radius, y1);
        canvas.arcTo(x2, y1, x2, y1 + radius, radius);
        canvas.lineTo(x2, y2 - radius);
        canvas.arcTo(x2, y2, x2 - radius, y2, radius);
        canvas.lineTo(x1 + radius, y2);
        canvas.arcTo(x1, y2, x1, y2 - radius, radius);
        canvas.lineTo(x1, y1 + radius);
        canvas.arcTo(x1, y1, x1 + radius, y1, radius);
        canvas.fill();
    }

    static roundRectStroke(canvas, x1, y1, x2, y2, radius, lineWidth) {
        canvas.lineWidth = lineWidth;
        radius = Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2);
        canvas.beginPath();
        canvas.moveTo(x1 + radius, y1);
        canvas.lineTo(x2 - radius, y1);
        canvas.arcTo(x2, y1, x2, y1 + radius, radius);
        canvas.lineTo(x2, y2 - radius);
        canvas.arcTo(x2, y2, x2 - radius, y2, radius);
        canvas.lineTo(x1 + radius, y2);
        canvas.arcTo(x1, y2, x1, y2 - radius, radius);
        canvas.lineTo(x1, y1 + radius);
        canvas.arcTo(x1, y1, x1 + radius, y1, radius);
        canvas.stroke();
    }

    mathWidthHeight(text, canvas) {
        let metrics = canvas.measureText(text);
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        return [metrics.width, actualHeight]
    }
}