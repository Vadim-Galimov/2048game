




	














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
