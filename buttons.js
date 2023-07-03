

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
    cursorOverbutton = 0;
    buttonStatus = 0;
    elementToChange = document.getElementsByTagName("body")[0];
    elementToChange.style.cursor = "default";
    cellArray = [];
    make2ActiveCells();
    turnBlock = 0;
    drawScore();
    drawCells();

}





function mouseMove() {

    if (buttonStatus == 1) {




        if (event.pageX > btnXstart && event.pageX < btnXend && event.pageY > btnYstart && event.pageY < btnYend) {

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

