


function makeTurn(moveDirection) {


			 timerDrawCells = setInterval( drawCells, 10);
			
			setTimeout(() => { clearInterval(timerDrawCells);
			
			
			}, turnTime*2);
				

	
	turnBlock=1;


	
	

	for (i=0; i<4; i++) {	
		setTicketAndMoveSpeed(1, i, moveDirection);
		setTicketAndMoveSpeed(2, i, moveDirection);	
		setTicketAndMoveSpeed(3, i, moveDirection);				
	}


allMove();


		
setTimeout(() => {
	
	turnScore=0;
		cellArray.forEach(function(item) {
			item.afterMove()
			if( item.toDelete==1) turnScore+=item.drawValue;	
		});
	

	

		
		

	
	
	score+=turnScore*2;
		drawScore();
		drawCells();

	
	 cellArray=cellArray.filter(function(item) {
	 
	return item.toDelete!=1;
	 
	 
 }) 
	
	
	

		if (checkTurn==1) make1ActiveCell()
		
	
		checkTurn=0;
		checkWin();
	
		if (winStatus==1) return 0;
		checkLose();
	
		if (loseStatus==1) return 0;	
	
	setTimeout(() => {turnBlock=0}, turnTime);
		
}, turnTime);

	
	
	
	
	
	
	
	
	
	
	
	
}




function setTicketAndMoveSpeed(choosenNumber, choosenColumn, moveDirection) {
		choosenColumnArr=columnArray[moveDirection];

choosenCell=getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);

if (!choosenCell) return 0;




		maxMove=getMaxMove(choosenColumn);
				

	sub1Number=choosenNumber-1;
	sub2Number=choosenNumber-2;
	sub3Number=choosenNumber-3;
	
	sub1Cell=getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);
	sub2Cell=getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);
	sub3Cell=getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);

	

	 
	 ticket=choosenCell.number;
moveSpeed=0;
		if (checkMerge(sub1Cell)) {
				moveSpeed=1;
				 ticket=choosenColumnArr[choosenColumn][sub1Number];
			choosenCell.toDelete=1;
				sub1Cell.value*=2;
				
				
				sub1Cell.mergeBlock=1;
			choosenCell.mergeBlock=1;
			checkTurn=1;
		}
		
	 if (!sub1Cell && maxMove>0 ) {
		 moveSpeed=1;
		 ticket=choosenColumnArr[choosenColumn][sub1Number];
		 checkTurn=1;
		if (checkMerge(sub2Cell)) {
			moveSpeed=2;
			
				sub2Cell.value*=2;
				
						
				choosenCell.toDelete=1;
		ticket=choosenColumnArr[choosenColumn][sub2Number];
				sub2Cell.mergeBlock=1;
			choosenCell.mergeBlock=1;
		
		
	
		}
		 	 if (!sub2Cell&&maxMove>1) {
				 moveSpeed=2;
				 
				 ticket= choosenColumnArr[choosenColumn][sub2Number];
		if (checkMerge(sub3Cell)) { 
		moveSpeed=3;
		ticket=choosenColumnArr[choosenColumn][sub3Number];
	
			sub3Cell.value*=2;
				
			choosenCell.toDelete=1;
			
					sub3Cell.mergeBlock=1;
			choosenCell.mergeBlock=1;
			
		}		 
				  if (!sub3Cell&&maxMove>2) {
					  moveSpeed=3;
					  
				  ticket=choosenColumnArr[choosenColumn][sub3Number];
		
				 
				  }
				 
				 
			 }
		 
		 
		 
		 
		 
	 }
 
 
	 choosenCell.ticket=ticket;
	 choosenCell.moveSpeed=moveSpeed;
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 	 	function getMaxMove(choosenColumn) {

		thisArr=choosenColumnArr[choosenColumn];

		return thisArr.indexOf(choosenCell.number);;
		
	}
 

	 
	 	
	function checkMerge(subCell) {
	
	if (subCell?.value==choosenCell.value&&subCell?.mergeBlock==0&& choosenCell.mergeBlock==0)  return 1;
		
	
		

	
	else return 0;
	
	
}







			
}
	








function allMove() {
	
	
			 timerMakeStep = setInterval( () => {cellArray.forEach(function(item){ item.makeStep() })} , 25);
			
			setTimeout(() => { clearInterval(timerMakeStep);
			
			
			}, turnTime);
				
				
	
	
}
	






