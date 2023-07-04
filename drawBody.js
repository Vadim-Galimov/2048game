




	function startAnimation() {
		  timerDrawCells = setInterval(drawCells, 10);
		
		
	}



	function stopAnimation() {
		
		  clearInterval(timerDrawCells);
		
	}













function drawBackground() {

    ctxBody.fillStyle = '#776e65';
    roundRect(ctxBody, 0, 0, fullSize, fullSize, 10);
    ctxBody.fillStyle = '#bbada0';

    for (y = 0; y < 4; y++) {

        for (x = 0; x < 4; x++) {

            startWidth = minMargin + stepMargin * x;
            startHeight = minMargin + stepMargin * y;

            roundRect(ctxBody, startWidth, startHeight, startWidth + size, startHeight + size, 3);

        }

    }

}

function drawCells() {

    ctxBody.clearRect(0, 0, canvasBody.width, canvasBody.height);
    drawBackground();

    cellArray.forEach(function (item) {
        cellValue = item.drawValue;

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

        addWidth = (size - metrics.width) / 2;
        addHeight = (size - actualHeight) / 2;

        ctxBody.fillText(cellValue, item.x + addWidth, item.y + addHeight + actualHeight);

    });

}

function drawLose() {

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

function drawWin() {

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

function roundRect(ctxHB, x1, y1, x2, y2, radius) {

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

function roundRectStroke(ctxHB, x1, y1, x2, y2, radius, lineWidth) {
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
