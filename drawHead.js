function drawScore() {

    let canvasHead = document.getElementById('canvasHead');

    let ctxHead = canvasHead.getContext('2d');

    ctxHead.clearRect(0, 0, canvasHead.width, canvasHead.height);
    ctxHead.font = 'bold 35px sans-serif';

    metrics = ctxHead.measureText('SCORE:' + score);
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

    ctxHead.fillStyle = '#bbada0';
    textWithMarginsWidth = metrics.width + textMargin;
    textScoreMargin = size * 25 / 80;
    buttonScoreMarginTop = size / 4;
    textScoreMarginTop = size / 8;

    roundRect(ctxHead, ((fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + actualHeight + 2 * textScoreMarginTop, 20);

    ctxHead.strokeStyle = '#776e65';

    roundRectStroke(ctxHead, ((fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + actualHeight + 2 * textScoreMarginTop, 20, 5);

    ctxHead.fillStyle = "#ebe4da";

    ctxHead.fillText("SCORE: " + score, ((fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop + actualHeight + textScoreMarginTop);

}
