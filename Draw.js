


class Draw {
	
	static drawScore() {
		
		   let canvasHead = document.getElementById('canvasHead');

    let ctxHead = canvasHead.getContext('2d');

    ctxHead.clearRect(0, 0, canvasHead.width, canvasHead.height);
    ctxHead.font = 'bold 35px sans-serif';

  let   metrics = ctxHead.measureText('SCORE:' + App.score);
  let   fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
   let  actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    ctxHead.fillStyle = '#bbada0';
   let textWithMarginsWidth = metrics.width + textMargin;
   let textScoreMargin = size * 25 / 80;
   let buttonScoreMarginTop = size / 4;
   let textScoreMarginTop = size / 8;

  roundRect(ctxHead, ((fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + actualHeight + 2 * textScoreMarginTop, 20);

    ctxHead.strokeStyle = '#776e65';

    roundRectStroke(ctxHead, ((fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + actualHeight + 2 * textScoreMarginTop, 20, 5);

    ctxHead.fillStyle = "#ebe4da";

    ctxHead.fillText("SCORE: " + App.score, ((fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop + actualHeight + textScoreMarginTop);

		
	}
	
	static timerDrawCells;
	
	static startAnimation() {
		
	 Draw.timerDrawCells = setInterval(Draw.drawCells, 10);	
	 
	     setTimeout(() => {
    clearInterval(Draw.timerDrawCells);

    }, App.phaseTime * 2);
	}
	
	
 static drawCells() {

    ctxBody.clearRect(0, 0, canvasBody.width, canvasBody.height);
    drawBackground();

    Field.cellArray.forEach(function (item) {
      let  cellValue = item.drawValue;

        switch (cellValue) {

        case 2:
        case 4:
        case 8:
        case 16:
        case 32:
        case 64:
            ctxBody.font = 'bold 50px sans-serif';
            break;

        case 128:
        case 256:
        case 512:
            ctxBody.font = 'bold 42px sans-serif';
            break;

        case 1024:
        case 2048:
            ctxBody.font = 'bold 35px sans-serif';
            break;

        }

        switch (cellValue) {

        case 2:
            ctxBody.fillStyle = '#eee4da';
            break;

        case 4:
            ctxBody.fillStyle = '#ede0c8';
            break;

        case 8:
            ctxBody.fillStyle = '#f2b179';
            break;

        case 16:
            ctxBody.fillStyle = '#f59563';
            break;

        case 32:
            ctxBody.fillStyle = '#f67c5f';
            break;

        case 64:
            ctxBody.fillStyle = '#f35c3d';
            break;

        case 128:
            ctxBody.fillStyle = '#e7cf73';
            break;

        case 256:
            ctxBody.fillStyle = '#ecca64';
            break;

        case 512:
        case 1024:
            ctxBody.fillStyle = '#eac75c';
            break;

        case 2048:
            ctxBody.fillStyle = '#e6bd4f';
            break;

        default:
            ctxBody.fillStyle = '#f2b179';
            break;

        }

        roundRect(ctxBody, item.x + item.createSize - item.mergeSize, item.y + item.createSize - item.mergeSize, item.x + size - item.createSize + item.mergeSize, item.y + size - item.createSize + item.mergeSize, 3);

        switch (cellValue) {

        case 2:
        case 4:
            ctxBody.fillStyle = '#776e65';
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

            ctxBody.fillStyle = '#f9f6f2';
            break;

        default:
            ctxBody.fillStyle = '#776e65';
            break;

        }

        let metrics = ctxBody.measureText(cellValue);
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

       let addWidth = (size - metrics.width) / 2;
     let    addHeight = (size - actualHeight) / 2;

        ctxBody.fillText(cellValue, item.x + addWidth, item.y + addHeight + actualHeight);

    });

}

	
	
	
	
	static drawLose() {

    ctxBody.fillStyle = "rgba(255, 255, 255, 0.5)";

    roundRect(ctxBody, 0, 0, fullSize, fullSize, 10);

    ctxBody.fillStyle = "#776e65";
    ctxBody.font = 'bold 50px sans-serif';

    metrics = ctxBody.measureText('GAME OVER!');
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    addWidth = (fullSize - metrics.width) / 2;
    addHeight = (fullSize - actualHeight) / 2;
    ctxBody.fillText("GAME OVER!", addWidth, addHeight + actualHeight);

}
	
	
	static drawWin() {

    ctxBody.fillStyle = "rgba(255, 215, 0, 0.5)";

    roundRect(ctxBody, 0, 0, fullSize, fullSize, 10);

    ctxBody.fillStyle = "#f9f6f2";
    ctxBody.font = 'bold 50px sans-serif';

    metrics = ctxBody.measureText('YOU WIN!');
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    addWidth = (fullSize - metrics.width) / 2;
    addHeight = (fullSize - actualHeight) / 2;
    ctxBody.fillText("YOU WIN!", addWidth, addHeight + actualHeight);

}
	
	
	
	
}