


	moveXY = {
	down : [0,stepMargin],
	up :[0, -stepMargin],
	left :[ -stepMargin ,0],
	right : [stepMargin,0],
	
	
}








class Cell {

  constructor(i) {

		this.number=i+1;

		this.columnNumber= (((i+1) % 4) != 0) ? (i+1) % 4 :  4;
		this.rowNumber= (Math.floor((i)/4))+1;
		this.x=this.columnNumber*(stepMargin)-size;
		this.y=this.rowNumber*(stepMargin)-size;
		this.random10Percent= Math.floor(Math.random() * 10);
		this.value= 2;
		if (this.random10Percent==9) this.value= 4;
		this.drawValue=this.value;
		this.moveSpeed=0;
		this.ticket=this.number;
		this.toDelete=0;
		this.mergeBlock=0;


		
		
  }




		makeStep() {
						this.x+=(moveXY[moveDirection][0]*this.moveSpeed)/(turnTime/25);
	this.y+=(moveXY[moveDirection][1]*this.moveSpeed)/(turnTime/25);
			
			
		}
			
		afterMove() {
	this.number=this.ticket;
			this.moveSpeed=0;
			this.mergeBlock=0;
				this.drawValue=this.value;

		}			
			
			
}
			
