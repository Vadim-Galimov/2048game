


function drawBackground() {




    ctx.fillStyle = '#776e65';
    roundRect(ctx, 0, 0, fullSize, fullSize, 10);
    ctx.fillStyle = '#bbada0';



    for (y = 0; y < 4; y++) {

        for (x = 0; x < 4; x++) {




            startWidth = minMargin + stepMargin * x;
            startHeight = minMargin + stepMargin * y;



            roundRect(ctx, startWidth, startHeight, startWidth + size, startHeight + size, 3);


        }

    }



}




function drawCells() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();




    cellArray.forEach(function(item) {
        cellValue = item.drawValue;



        switch (cellValue) {

            case 2:
            case 4:
            case 8:
            case 16:
            case 32:
            case 64:
                ctx.font = 'bold 50px sans-serif';
                break;

            case 128:
            case 256:
            case 512:
                ctx.font = 'bold 42px sans-serif';
                break;

            case 1024:
            case 2048:
                ctx.font = 'bold 35px sans-serif';
                break;



        }




        switch (cellValue) {

            case 2:
                ctx.fillStyle = '#eee4da';
                break;

            case 4:
                ctx.fillStyle = '#ede0c8';
                break;

            case 8:
                ctx.fillStyle = '#f2b179';
                break;

            case 16:
                ctx.fillStyle = '#f59563';
                break;

            case 32:
                ctx.fillStyle = '#f67c5f';
                break;


            case 64:
                ctx.fillStyle = '#f35c3d';
                break;


            case 128:
                ctx.fillStyle = '#e7cf73';
                break;


            case 256:
                ctx.fillStyle = '#ecca64';
                break;

            case 512:
            case 1024:
                ctx.fillStyle = '#eac75c';
                break;




            case 2048:
                ctx.fillStyle = '#e6bd4f';
                break;




            default:
                ctx.fillStyle = '#f2b179';
                break;

        }




        roundRect(ctx, item.x, item.y, item.x + size, item.y + size, 3);




        switch (cellValue) {

            case 2:
            case 4:
                ctx.fillStyle = '#776e65';
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

                ctx.fillStyle = '#f9f6f2';
                break;



            default:
                ctx.fillStyle = '#776e65';
                break;

        }




        let metrics = ctx.measureText(cellValue);
        let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
        let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


        addWidth = (size - metrics.width) / 2;
        addHeight = (size - actualHeight) / 2;


        ctx.fillText(cellValue, item.x + addWidth, item.y + addHeight + actualHeight);




    });


}




function drawLose() {
	
	    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";

    ctx.fillRect(0, 0, fullSize, fullSize);

    ctx.fillStyle = "#776e65";
    ctx.font = 'bold 50px sans-serif';

    metrics = ctx.measureText('GAME OVER!');
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


    addWidth = (fullSize - metrics.width) / 2;
    addHeight = (fullSize - actualHeight) / 2;
    ctx.fillText("GAME OVER!", addWidth, addHeight + actualHeight);


	
}


function drawWin() {
	
	   ctx.fillStyle = "rgba(255, 215, 0, 0.5)";
    ctx.fillRect(0, 0, fullSize, fullSize);

    ctx.fillStyle = "#f9f6f2";
    ctx.font = 'bold 50px sans-serif';

    metrics = ctx.measureText('YOU WIN!');
    fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;


    addWidth = (fullSize - metrics.width) / 2;
    addHeight = (fullSize - actualHeight) / 2;
    ctx.fillText("YOU WIN!", addWidth, addHeight + actualHeight);

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

