


export class Drawer {
	
	
static mathWidthHeight(text, canvas) {
	  let   metrics = canvas.measureText(text);
   let  actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
   return [metrics.width, actualHeight]
   
	
}
	static  ctxBody = (document.getElementById('canvasBody')).getContext('2d');

	
	static size = 80;
	static #scoreFontSize=Drawer.size*35/80;
	
static minMargin = Drawer.size / 8;

static fullSize = 4 * Drawer.size + 5 * Drawer.minMargin;

static stepMargin = Drawer.minMargin + Drawer.size;

static textMarginSize = Drawer.size / 8 * 3;
	
	
	static drawScore(score) {
		

    let canvas = (document.getElementById('canvasHead')).getContext('2d'); 

    canvas.clearRect(0, 0, canvasHead.width, canvasHead.height);
    canvas.font = 'bold '+Drawer.#scoreFontSize+'px sans-serif';


let [textWidth, textHeight] = Drawer.mathWidthHeight('SCORE:' + score, canvas);



    canvas.fillStyle = '#bbada0';
   let textWithMarginsWidth = textWidth + Drawer.textMarginSize;
   let textScoreMargin = Drawer.size * 25 / 80;
   let buttonScoreMarginTop = Drawer.size / 4;
   let textScoreMarginTop = Drawer.size / 8;

  Drawer.roundRect(canvas, ((Drawer.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, textWidth + ((Drawer.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20);

    canvas.strokeStyle = '#776e65';

    Drawer.#roundRectStroke(canvas, ((Drawer.fullSize - textWithMarginsWidth) / 2) - textScoreMargin, buttonScoreMarginTop, textWidth + ((Drawer.fullSize - textWithMarginsWidth) / 2) + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20, 5);

    canvas.fillStyle = "#ebe4da";

    canvas.fillText("SCORE: " + score, ((Drawer.fullSize - textWithMarginsWidth) / 2), buttonScoreMarginTop + textHeight + textScoreMarginTop);

		
	}
	


	
	
 static drawCells(cellArray) {

    Drawer.ctxBody.clearRect(0, 0, canvasBody.width, canvasBody.height);
    Drawer.#drawBackground();

    cellArray.forEach(function (item) {
      let  cellValue = item.valueOfDraw;

        switch (cellValue) {

        case 2:
        case 4:
        case 8:
        case 16:
        case 32:
        case 64:
            Drawer.ctxBody.font = 'bold 50px sans-serif';
            break;

        case 128:
        case 256:
        case 512:
            Drawer.ctxBody.font = 'bold 42px sans-serif';
            break;

        case 1024:
        case 2048:
            Drawer.ctxBody.font = 'bold 35px sans-serif';
            break;

        }

        switch (cellValue) {

        case 2:
            Drawer.ctxBody.fillStyle = '#eee4da';
            break;

        case 4:
            Drawer.ctxBody.fillStyle = '#ede0c8';
            break;

        case 8:
            Drawer.ctxBody.fillStyle = '#f2b179';
            break;

        case 16:
            Drawer.ctxBody.fillStyle = '#f59563';
            break;

        case 32:
            Drawer.ctxBody.fillStyle = '#f67c5f';
            break;

        case 64:
            Drawer.ctxBody.fillStyle = '#f35c3d';
            break;

        case 128:
            Drawer.ctxBody.fillStyle = '#e7cf73';
            break;

        case 256:
            Drawer.ctxBody.fillStyle = '#ecca64';
            break;

        case 512:
        case 1024:
            Drawer.ctxBody.fillStyle = '#eac75c';
            break;

        case 2048:
            Drawer.ctxBody.fillStyle = '#e6bd4f';
            break;

        default:
            Drawer.ctxBody.fillStyle = '#f2b179';
            break;

        }

        Drawer.roundRect(Drawer.ctxBody, item.x + item.sizePenalty - item.sizeBonus, item.y + item.sizePenalty - item.sizeBonus, item.x + Drawer.size - item.sizePenalty + item.sizeBonus, item.y + Drawer.size - item.sizePenalty + item.sizeBonus, 3);

        switch (cellValue) {

        case 2:
        case 4:
            Drawer.ctxBody.fillStyle = '#776e65';
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

            Drawer.ctxBody.fillStyle = '#f9f6f2';
            break;

        default:
            Drawer.ctxBody.fillStyle = '#776e65';
            break;

        }

 
	let [textWidth, textHeight] = Drawer.mathWidthHeight(cellValue, Drawer.ctxBody);




       let addWidth = (Drawer.size - textWidth) / 2;
     let    addHeight = (Drawer.size - textHeight) / 2;

        Drawer.ctxBody.fillText(cellValue, item.x + addWidth, item.y + addHeight + textHeight);

    });

}

	
	
	
	
	static drawLose() {

    Drawer.ctxBody.fillStyle = "rgba(255, 255, 255, 0.5)";

    Drawer.roundRect(Drawer.ctxBody, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);

    Drawer.ctxBody.fillStyle = "#776e65";
    Drawer.ctxBody.font = 'bold 50px sans-serif';

 
	
let [textWidth, textHeight] = Drawer.mathWidthHeight('GAME OVER!', Drawer.ctxBody);


    addWidth = (Drawer.fullSize - textWidth) / 2;
    addHeight = (Drawer.fullSize - textHeight) / 2;
    Drawer.ctxBody.fillText("GAME OVER!", addWidth, addHeight + textHeight);

}
	
	
	static drawWin() {

    Drawer.ctxBody.fillStyle = "rgba(255, 215, 0, 0.5)";

    Drawer.roundRect(Drawer.ctxBody, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);

    Drawer.ctxBody.fillStyle = "#f9f6f2";
    Drawer.ctxBody.font = 'bold 50px sans-serif';

   
	
let [textWidth, textHeight] = Drawer.mathWidthHeight('YOU WIN!', Drawer.ctxBody);


  let  addWidth = (Drawer.fullSize - textWidth) / 2;
  let  addHeight = (Drawer.fullSize - textHeight) / 2;
    Drawer.ctxBody.fillText("YOU WIN!", addWidth, addHeight + textHeight);

}
	
	
	
	
	
	

static #drawBackground() {

    Drawer.ctxBody.fillStyle = '#776e65';
    Drawer.roundRect(Drawer.ctxBody, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);
    Drawer.ctxBody.fillStyle = '#bbada0';

    for (let y = 0; y < 4; y++) {

        for (let x = 0; x < 4; x++) {

           let startWidth = Drawer.minMargin + Drawer.stepMargin * x;
          let  startHeight = Drawer.minMargin +Drawer.stepMargin * y;

            Drawer.roundRect(Drawer.ctxBody, startWidth, startHeight, startWidth + Drawer.size, startHeight + Drawer.size, 3);

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

	
	
	static drawButton(button) {
		
		
		
		
		
		
		
   


		
	



        Drawer.ctxBody.fillStyle = "#8f7a66";
       Drawer.ctxBody.font = 'bold ' + Drawer.size / 4 + 'px sans-serif';
	   
	   	
 
		let [textWidth, textHeight] = Drawer.mathWidthHeight("Try again", Drawer.ctxBody);


		let   textWithMarginsWidth = textWidth + Drawer.textMarginSize;

  


	   
        Drawer.roundRect(Drawer.ctxBody, (Drawer.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (Drawer.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220, 3);

        Drawer.ctxBody.fillStyle = "#f9f6f2";

        Drawer.ctxBody.fillText("Try again",((Drawer.fullSize - textWidth - 10) / 2) + 2, 244);


		
		
		
		return [(Drawer.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (Drawer.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220];
		

	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}













