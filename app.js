



function make1ActiveCell() {
  
  
  function checkCellFunc() {
	  
	thisCell=  cellArray.find(function(item) {
		 return item.ticket==randomNum+1;
		  
		  
		  
	  });
	  
	  
	return thisCell;
	  
	  
  }

do {
  randomNum = Math.floor(Math.random() * 16);
} while (checkCellFunc());

console.log(randomNum);
  
  
  
  
  	 newCell = new Cell(randomNum);

	 cellArray.push(newCell);
	 
 

}
  



 
 

 

 
 
 function getCellFromNumber(cellNumber) {
	 
	return cellArray.find(function(item, index) {
		return item.ticket==cellNumber;
}); 
	 
	 
 }
 
 function mouseMove() {
	
	 if (loseAnimation==1) {
	 
	 

	 
	 if (event.pageX>btnXstart&&event.pageX<btnXend&&event.pageY>btnYstart&&event.pageY<btnYend) {
	 
	 var elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "pointer"; 
 btnOn=1;
	 }
	 
	 else  {
		 
		elementToChange = document.getElementsByTagName("body")[0];
 elementToChange.style.cursor = "default";  
 btnOn=0;	
	
	 }
	 
	 
	 } 
	 
 }
 
 
 function btnClick() {
	 
	 if (btnOn==1) newGame();
	 
 }
 
 
 document.addEventListener('mousemove', mouseMove);
 document.addEventListener('click', btnClick);


 


 











  
