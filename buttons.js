












function down() {
	
	if (turnBlock==1) return 0;
	
	
	
	
	
	
moveDirection='down';
	
makeTurn('down');

}
 
 
 
 
 
 
 
 


function up() {
	
		if (turnBlock==1) return 0;
	
moveDirection='up';
	
makeTurn('up');


	
}
 
 

function left() {
			if (turnBlock==1) return 0;
	
	
moveDirection='left';
	
makeTurn('left');



}
 
 
function right() {
	
		if (turnBlock==1) return 0;
	
moveDirection='right';
	
makeTurn('right');


	
}
 
 
 
 function newGame() {
	 cursorOverbutton=0;
	 loseAnimation=0;
	elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "default";  
	 cellArray=[];
	 make2ActiveCells();
	 turnBlock=0;
	 	 drawScore();
	 drawCells();

 }
 
