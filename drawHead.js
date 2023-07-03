function drawScore() {

    ctx.clearRect(0, 0, canvasHead.width, canvasHead.height);
    ctxH.font = 'bold 35px sans-serif';


    metrics = ctxH.measureText('SCORE:' + score);
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


    ctxH.fillStyle = '#bbada0';
    textWithMarginsWidth = metrics.width + textMargin;


    roundRect(ctxH, ((fullSize - textWithMarginsWidth) / 2) - 25, 20, metrics.width + ((fullSize - textWithMarginsWidth + 10) / 2) + 25, actualHeight + 15 + 30, 20);


    ctxH.strokeStyle = '#776e65';

    roundRectStroke(ctxH, ((fullSize - textWithMarginsWidth) / 2) - 25, 20, metrics.width + ((fullSize - textWithMarginsWidth + 10) / 2) + 25, actualHeight + 15 + 30, 20, 5);

    ctxH.fillStyle = "#ebe4da";

    ctxH.fillText("SCORE: " + score, ((fullSize - textWithMarginsWidth) / 2), 55);

}