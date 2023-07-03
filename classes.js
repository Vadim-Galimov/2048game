let moveXY = {
    down: [0, stepMargin],
    up: [0, -stepMargin],
    left: [-stepMargin, 0],
    right: [stepMargin, 0],


}




class Cell {

    constructor(i) {

        this.number = i + 1;

        this.columnNumber = (((i + 1) % 4) != 0) ? (i + 1) % 4 : 4;
        this.rowNumber = (Math.floor((i) / 4)) + 1;
        this.x = this.columnNumber * (stepMargin) - size;
        this.y = this.rowNumber * (stepMargin) - size;
        this.random10Percent = Math.floor(Math.random() * 10);
        this.value = 2;
        if (this.random10Percent == 9) this.value = 4;
        this.drawValue = this.value;
        this.moveSpeed = 0;
        this.ticket = this.number;
        this.toDelete = 0;
        this.mergeBlock = 0;




    }




    makeStep() {
        this.x += (moveXY[moveDirection][0] * this.moveSpeed) / (phaseTime / 25);
        this.y += (moveXY[moveDirection][1] * this.moveSpeed) / (phaseTime / 25);


    }

    afterMove() {
        this.number = this.ticket;
        this.moveSpeed = 0;
        this.mergeBlock = 0;
        this.drawValue = this.value;

    }


}



class Button {
	
	constructor () {
	
	
	 this.textValue="Try again";
	   this.context= ctx;
     this.font= 'bold ' + size / 4 + 'px sans-serif';
	 
	 
	 	this.context.font=this.font;
	
	
	 
    metrics = this.context.measureText(this.textValue);
	
    actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;

textWithMarginsWidth = metrics.width + textMargin;

  this.buttonFillStyle = "#8f7a66";
    this.textFillStyle = "#f9f6f2";

  this.buttonX1=(fullSize - textWithMarginsWidth) / 2;

 this.buttonY1= 220;
  this.buttonX2=metrics.width + 30 + (fullSize - textWithMarginsWidth) / 2;
  this.buttonY2=actualHeight + 15 + 220;
  this.buttonRadius=3;
	this.textX=((fullSize - metrics.width - 10) / 2) + 2;
this.textY=244;

	this.visible=0;


	
	
		
	}
	
	
	
	
	

	
	
	
	  draw() {
	  ctx.fillStyle=this.buttonFillStyle;
	    ctx.font=this.font;
	      roundRect(this.context, this.buttonX1, this.buttonY1, this.buttonX2, this.buttonY2, this.buttonRadius);
		
 ctx.fillStyle=this.textFillStyle;
	  
	      ctx.fillText(this.textValue, this.textX, this.textY);


  }


	
	
	
	
	
	
	
	
	
}

