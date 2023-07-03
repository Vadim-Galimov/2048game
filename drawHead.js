function drawScore() {

    ctx.clearRect(0, 0, canvasHead.width, canvasHead.height);
    ctxH.font = 'bold 35px sans-serif';


    metrics = ctxH.measureText('SCORE:' + score);
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


    ctxH.fillStyle = '#bbada0';
    textWithMarginsWidth = metrics.width + textMargin;
	textScoreMargin=size*25/80;
	buttonScoreMarginTop=size/4;
	textScoreMarginTop=size/8;



    roundRect(ctxH, ((fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop+actualHeight+2*textScoreMarginTop, 20);


    ctxH.strokeStyle = '#776e65';

    roundRectStroke(ctxH, ((fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, metrics.width + ((fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop+actualHeight+2*textScoreMarginTop, 20, 5);

    ctxH.fillStyle = "#ebe4da";

    ctxH.fillText("SCORE: " + score, ((fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop+actualHeight+textScoreMarginTop);

}