


class Draw {
	

	static  ctxBody = (document.getElementById('canvasBody')).getContext('2d');

	
	static size = 80;
static minMargin = Draw.size / 8;

static fullSize = 4 * Draw.size + 5 * Draw.minMargin;

static stepMargin = Draw.minMargin + Draw.size;

static textMargin = Draw.size / 8 * 3;
	
	
	static drawScore(score) {
		
		   let canvasHead = document.getElementById('canvasHead');

    let ctxHead = canvasHead.getContext('2d');

    ctxHead.clearRect(0, 0, canvasHead.width, canvasHead.height);
    ctxHead.font = 'bold 35px sans-serif';

  let   metrics = ctxHead.measureText('SCORE:' + score);
  let   fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
   let  actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    ctxHead.fillStyle = '#bbada0';
   let textWithMarginsWidth = metrics.width + Draw.textMargin;
   let textScoreMargin = Draw.size * 25 / 80;
   let buttonScoreMarginTop = Draw.size / 4;
   let textScoreMarginTop = Draw.size / 8;

  Draw.roundRect(ctxHead, ((Draw.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((Draw.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + actualHeight + 2 * textScoreMarginTop, 20);

    ctxHead.strokeStyle = '#776e65';

    Draw.#roundRectStroke(ctxHead, ((Draw.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((Draw.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + actualHeight + 2 * textScoreMarginTop, 20, 5);

    ctxHead.fillStyle = "#ebe4da";

    ctxHead.fillText("SCORE: " + score, ((Draw.fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop + actualHeight + textScoreMarginTop);

		
	}
	
	static timerDrawCells;
	
	static startAnimation(cellArray) {
		
	 Draw.timerDrawCells = setInterval(Draw.drawCells, 10, cellArray);	
	 
	     setTimeout(() => {
    clearInterval(Draw.timerDrawCells);

    }, App.phaseTime * 2);
	}
	
	
 static drawCells(cellArray) {

    Draw.ctxBody.clearRect(0, 0, canvasBody.width, canvasBody.height);
    Draw.#drawBackground();

    cellArray.forEach(function (item) {
      let  cellValue = item.drawValue;

        switch (cellValue) {

        case 2:
        case 4:
        case 8:
        case 16:
        case 32:
        case 64:
            Draw.ctxBody.font = 'bold 50px sans-serif';
            break;

        case 128:
        case 256:
        case 512:
            Draw.ctxBody.font = 'bold 42px sans-serif';
            break;

        case 1024:
        case 2048:
            Draw.ctxBody.font = 'bold 35px sans-serif';
            break;

        }

        switch (cellValue) {

        case 2:
            Draw.ctxBody.fillStyle = '#eee4da';
            break;

        case 4:
            Draw.ctxBody.fillStyle = '#ede0c8';
            break;

        case 8:
            Draw.ctxBody.fillStyle = '#f2b179';
            break;

        case 16:
            Draw.ctxBody.fillStyle = '#f59563';
            break;

        case 32:
            Draw.ctxBody.fillStyle = '#f67c5f';
            break;

        case 64:
            Draw.ctxBody.fillStyle = '#f35c3d';
            break;

        case 128:
            Draw.ctxBody.fillStyle = '#e7cf73';
            break;

        case 256:
            Draw.ctxBody.fillStyle = '#ecca64';
            break;

        case 512:
        case 1024:
            Draw.ctxBody.fillStyle = '#eac75c';
            break;

        case 2048:
            Draw.ctxBody.fillStyle = '#e6bd4f';
            break;

        default:
            Draw.ctxBody.fillStyle = '#f2b179';
            break;

        }

        Draw.roundRect(Draw.ctxBody, item.x + item.createSize - item.mergeSize, item.y + item.createSize - item.mergeSize, item.x + Draw.size - item.createSize + item.mergeSize, item.y + Draw.size - item.createSize + item.mergeSize, 3);

        switch (cellValue) {

        case 2:
        case 4:
            Draw.ctxBody.fillStyle = '#776e65';
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

            Draw.ctxBody.fillStyle = '#f9f6f2';
            break;

        default:
            Draw.ctxBody.fillStyle = '#776e65';
            break;

        }

        let metrics = Draw.ctxBody.measureText(cellValue);
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

       let addWidth = (Draw.size - metrics.width) / 2;
     let    addHeight = (Draw.size - actualHeight) / 2;

        Draw.ctxBody.fillText(cellValue, item.x + addWidth, item.y + addHeight + actualHeight);

    });

}

	
	
	
	
	static drawLose() {

    Draw.ctxBody.fillStyle = "rgba(255, 255, 255, 0.5)";

    Draw.roundRect(Draw.ctxBody, 0, 0, Draw.fullSize, Draw.fullSize, 10);

    Draw.ctxBody.fillStyle = "#776e65";
    Draw.ctxBody.font = 'bold 50px sans-serif';

    metrics = Draw.ctxBody.measureText('GAME OVER!');
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    addWidth = (Draw.fullSize - metrics.width) / 2;
    addHeight = (Draw.fullSize - actualHeight) / 2;
    Draw.ctxBody.fillText("GAME OVER!", addWidth, addHeight + actualHeight);

}
	
	
	static drawWin() {

    Draw.ctxBody.fillStyle = "rgba(255, 215, 0, 0.5)";

    Draw.roundRect(Draw.ctxBody, 0, 0, Draw.fullSize, Draw.fullSize, 10);

    Draw.ctxBody.fillStyle = "#f9f6f2";
    Draw.ctxBody.font = 'bold 50px sans-serif';

    metrics = Draw.ctxBody.measureText('YOU WIN!');
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    addWidth = (Draw.fullSize - metrics.width) / 2;
    addHeight = (Draw.fullSize - actualHeight) / 2;
    Draw.ctxBody.fillText("YOU WIN!", addWidth, addHeight + actualHeight);

}
	
	
	
	
	
	

static #drawBackground() {

    Draw.ctxBody.fillStyle = '#776e65';
    Draw.roundRect(Draw.ctxBody, 0, 0, Draw.fullSize, Draw.fullSize, 10);
    Draw.ctxBody.fillStyle = '#bbada0';

    for (let y = 0; y < 4; y++) {

        for (let x = 0; x < 4; x++) {

           let startWidth = Draw.minMargin + Draw.stepMargin * x;
          let  startHeight = Draw.minMargin + Draw.stepMargin * y;

            Draw.roundRect(Draw.ctxBody, startWidth, startHeight, startWidth + Draw.size, startHeight + Draw.size, 3);

        }

    }

}

	
	
	
	
	
	
	




static roundRect(ctxHB, x1, y1, x2, y2, radius) {

    radius = Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2);
    ctxHB.beginPath();

    ctxHB.moveTo(x1 + radius, y1);
    ctxHB.lineTo(x2 - radius, y1);
    ctxHB.arcTo(x2, y1, x2, y1 + radius, radius);
    ctxHB.lineTo(x2, y2 - radius);
    ctxHB.arcTo(x2, y2, x2 - radius, y2, radius);
    ctxHB.lineTo(x1 + radius, y2);
    ctxHB.arcTo(x1, y2, x1, y2 - radius, radius);
    ctxHB.lineTo(x1, y1 + radius);
    ctxHB.arcTo(x1, y1, x1 + radius, y1, radius);
    ctxHB.fill();
}

static #roundRectStroke(ctxHB, x1, y1, x2, y2, radius, lineWidth) {
    ctxHB.lineWidth = lineWidth;
    radius = Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2);
    ctxHB.beginPath();
    ctxHB.moveTo(x1 + radius, y1);
    ctxHB.lineTo(x2 - radius, y1);
    ctxHB.arcTo(x2, y1, x2, y1 + radius, radius);
    ctxHB.lineTo(x2, y2 - radius);
    ctxHB.arcTo(x2, y2, x2 - radius, y2, radius);
    ctxHB.lineTo(x1 + radius, y2);
    ctxHB.arcTo(x1, y2, x1, y2 - radius, radius);
    ctxHB.lineTo(x1, y1 + radius);
    ctxHB.arcTo(x1, y1, x1 + radius, y1, radius);
    ctxHB.stroke();
}

	
	
	
	
	
	
	
}