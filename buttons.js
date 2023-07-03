

document.addEventListener('mousemove', mouseMove);
document.addEventListener('click', btnClick);


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



        if (event.pageX > buttonTryAgain.buttonX1+elem.offsetLeft && event.pageX < buttonTryAgain.buttonX2+elem.offsetLeft && event.pageY > buttonTryAgain.buttonY1+elem.offsetTop && event.pageY < buttonTryAgain.buttonY2+elem.offsetTop) {

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


function btnClick() {

    if (cursorOverbutton == 1) newGame();

}



function makePrewinSituation() {


cellArray[0].value=1024;

cellArray[1].value=1024;

cellArray[1].drawValue=1024;

cellArray[0].drawValue=1024;

drawCells();	
	
}




function makePreloseSituation() {



newGame();

make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();
make1ActiveCell();


cellArray[0].value=1;

cellArray[0].drawValue=1;

cellArray[1].value=3;

cellArray[1].drawValue=3;

cellArray[2].value=5;

cellArray[2].drawValue=5;

cellArray[3].value=6;

cellArray[3].drawValue=6;

cellArray[4].value=7;

cellArray[4].drawValue=7;

cellArray[5].value=8;

cellArray[5].drawValue=8;

cellArray[6].value=9;

cellArray[6].drawValue=9;

cellArray[7].value=10;

cellArray[7].drawValue=10;

cellArray[8].value=11;

cellArray[8].drawValue=11;

cellArray[9].value=12;

cellArray[9].drawValue=12;

cellArray[10].value=13;

cellArray[10].drawValue=13;

cellArray[11].value=14;

cellArray[11].drawValue=14;

cellArray[12].value=15;

cellArray[12].drawValue=15;

cellArray[13].value=16;

cellArray[13].drawValue=16;

cellArray[14].value=17;

cellArray[14].drawValue=17;


drawCells();




}