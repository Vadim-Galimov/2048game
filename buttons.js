




function down() {

    if (turnBlock == 1) return 0;




    moveDirection = 'down';

    makeTurn('down');

}




function up() {

    if (turnBlock == 1) return 0;

    moveDirection = 'up';

    makeTurn('up');



}



function left() {
    if (turnBlock == 1) return 0;


    moveDirection = 'left';

    makeTurn('left');



}


function right() {

    if (turnBlock == 1) return 0;

    moveDirection = 'right';

    makeTurn('right');



}




function newGame() {
	buttonTryAgain.visible=0;
    cursorOverbutton = 0;
	score=0;
    elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "default";
    cellArray = [];
    make2ActiveCells();
    turnBlock = 0;
    drawScore();
    drawCells();
	winStatus=0;

}




function mouseMove() {

    if (buttonTryAgain.visible == 1) {


  elem = document.getElementById('canvasBody');



        if (
		event.pageX > buttonTryAgain.buttonX1+elem.offsetLeft && 
		event.pageX < buttonTryAgain.buttonX2+elem.offsetLeft && 
		event.pageY > buttonTryAgain.buttonY1+elem.offsetTop && 
		event.pageY < buttonTryAgain.buttonY2+elem.offsetTop) {

            var elementToChange = document.getElementsByTagName("body")[0];
            elementToChange.style.cursor = "pointer";
            cursorOverbutton = 1;
        } else {

            elementToChange = document.getElementsByTagName("body")[0];
            elementToChange.style.cursor = "default";
            cursorOverbutton = 0;

        }


    }

}


function buttonClick() {

    if (cursorOverbutton == 1)
        newGame();

}



