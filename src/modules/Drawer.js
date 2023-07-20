export class Drawer {

     size = 80;
     minMargin = Drawer.size / 8;
     fullSize = 4 * Drawer.size + 5 * Drawer.minMargin;
     stepMargin = Drawer.minMargin + Drawer.size;
     textMarginSize = Drawer.size / 8 * 3;

     drawScore(score) {

        let canvas = (document.getElementById('canvasHead')).getContext('2d');
        canvas.clearRect(0, 0, canvasHead.width, canvasHead.height);
        canvas.font = 'bold ' + Drawer.size * 35 / 80 + 'px sans-serif';
        let [textWidth, textHeight] = Drawer.mathWidthHeight('SCORE:' + score, canvas);
        canvas.fillStyle = 'bbada0';
        let textWithMarginsWidth = textWidth + Drawer.textMarginSize;
        let textScoreMargin = Drawer.size * 25 / 80;
        let buttonScoreMarginTop = Drawer.size / 4;
        let textScoreMarginTop = Drawer.size / 8;

        Drawer.roundRect(canvas, ((Drawer.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, textWidth + ((Drawer.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20);
        canvas.strokeStyle = '776e65';
        Drawer.roundRectStroke(canvas, ((Drawer.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, textWidth + ((Drawer.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20, 5);
        canvas.fillStyle = "ebe4da";
        canvas.fillText("SCORE: " + score, ((Drawer.fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop + textHeight + textScoreMarginTop);
    }

     runBodyDrawer(drawDuration, cellArray) {
        let timerDrawCells = setInterval(Drawer.drawCells, 10, cellArray);
        setTimeout(clearInterval, drawDuration, timerDrawCells);
    }

     drawCells(cellArray) {

        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.clearRect(0, 0, canvasBody.width, canvasBody.height);
        Drawer.drawBackground();

        cellArray.forEach(function(item) {
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
                    canvas.fillStyle = 'eee4da';
                    break;

                case 4:
                    canvas.fillStyle = 'ede0c8';
                    break;

                case 8:
                    canvas.fillStyle = 'f2b179';
                    break;

                case 16:
                    canvas.fillStyle = 'f59563';
                    break;

                case 32:
                    canvas.fillStyle = 'f67c5f';
                    break;

                case 64:
                    canvas.fillStyle = 'f35c3d';
                    break;

                case 128:
                    canvas.fillStyle = 'e7cf73';
                    break;

                case 256:
                    canvas.fillStyle = 'ecca64';
                    break;

                case 512:
                case 1024:
                    canvas.fillStyle = 'eac75c';
                    break;

                case 2048:
                    canvas.fillStyle = 'e6bd4f';
                    break;

                default:
                    canvas.fillStyle = 'f2b179';
                    break;

            }

            Drawer.roundRect(canvas, item.x + item.sizePenalty - item.sizeBonus, item.y + item.sizePenalty - item.sizeBonus, item.x + Drawer.size - item.sizePenalty + item.sizeBonus, item.y + Drawer.size - item.sizePenalty + item.sizeBonus, 3);

            switch (cellValue) {

                case 2:
                case 4:
                    canvas.fillStyle = '776e65';
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

                    canvas.fillStyle = 'f9f6f2';
                    break;

                default:
                    canvas.fillStyle = '776e65';
                    break;

            }

            let [textWidth, textHeight] = Drawer.mathWidthHeight(cellValue, canvas);
            let addWidth = (Drawer.size - textWidth) / 2;
            let addHeight = (Drawer.size - textHeight) / 2;
            canvas.fillText(cellValue, item.x + addWidth, item.y + addHeight + textHeight);
        });
    }

     drawLose() {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = "rgba(255, 255, 255, 0.5)";
        Drawer.roundRect(canvas, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);
        canvas.fillStyle = "776e65";
        canvas.font = 'bold 50px sans-serif';
        let [textWidth, textHeight] = Drawer.mathWidthHeight('GAME OVER!', canvas);
        let addWidth = (Drawer.fullSize - textWidth) / 2;
        let addHeight = (Drawer.fullSize - textHeight) / 2;
        canvas.fillText("GAME OVER!", addWidth, addHeight + textHeight);

    }

     drawWin() {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = "rgba(255, 215, 0, 0.5)";
        Drawer.roundRect(canvas, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);
        canvas.fillStyle = "f9f6f2";
        canvas.font = 'bold 50px sans-serif';
        let [textWidth, textHeight] = Drawer.mathWidthHeight('YOU WIN!', canvas);
        let addWidth = (Drawer.fullSize - textWidth) / 2;
        let addHeight = (Drawer.fullSize - textHeight) / 2;
        canvas.fillText("YOU WIN!", addWidth, addHeight + textHeight);
    }

     drawBackground() {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = '776e65';
        Drawer.roundRect(canvas, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);
        canvas.fillStyle = 'bbada0';

        for (let y = 0; y < 4; y++) {
            for (let x = 0; x < 4; x++) {
                let startWidth = Drawer.minMargin + Drawer.stepMargin * x;
                let startHeight = Drawer.minMargin + Drawer.stepMargin * y;
                Drawer.roundRect(canvas, startWidth, startHeight, startWidth + Drawer.size, startHeight + Drawer.size, 3);
            }
        }
    }

     drawButton(button) {
        let canvas = (document.getElementById('canvasBody')).getContext('2d');
        canvas.fillStyle = "8f7a66";
        canvas.font = 'bold ' + Drawer.size / 4 + 'px sans-serif';
        let [textWidth, textHeight] = Drawer.mathWidthHeight("Try again", canvas);
        let textWithMarginsWidth = textWidth + Drawer.textMarginSize;
        Drawer.roundRect(canvas, (Drawer.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (Drawer.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220, 3);
        canvas.fillStyle = "f9f6f2";
        canvas.fillText("Try again", ((Drawer.fullSize - textWidth - 10) / 2) + 2, 244);
        return [(Drawer.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (Drawer.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220];
    }

     roundRect(canvas, x1, y1, x2, y2, radius) {
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

     roundRectStroke(canvas, x1, y1, x2, y2, radius, lineWidth) {
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