



function makePrewinSituation() {


cellArray[0].value=1024;

cellArray[1].value=1024;

cellArray[1].drawValue=1024;

cellArray[0].drawValue=1024;

drawCells();	
	
}







function makePreloseSituation() {



newGame();

for(i=0; i<13; i++) {
	
	make1ActiveCell();
}


for(i=0; i<15; i++) {
	
	cellArray[i].value=i+32;
	cellArray[i].drawValue=i+32;
}






drawCells();






}