

let buttonTryAgain = new Button;





function makeLose() {



drawLose();

buttonTryAgain.draw();

  
buttonTryAgain.visible=1;
  

}



function checkLose() {

    loseStatus = 1;

    if (cellArray.length < 16) {
        loseStatus = 0;
        return 0;
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (getCellFromNumber(downColumnArr[i1][i])?.value == getCellFromNumber(downColumnArr[i1][i + 1])?.value) loseStatus = 0;

        }
    }

    for (i1 = 0; i1 < 4; i1++) {
        for (i = 0; i < 3; i++) {

            if (getCellFromNumber(rightColumnArr[i1][i])?.value == getCellFromNumber(rightColumnArr[i1][i + 1])?.value) loseStatus = 0;

        }
    }


    if (loseStatus == 1) setTimeout(makeLose, turnTime/2);




}


function checkWin() {
    valueArray = cellArray.map(function(item) {
        return item.value;

    });


    if (valueArray.includes(2048)) winStatus = 1;

    if (winStatus == 1) setTimeout(makeWin, turnTime/2);;


}


function makeWin() {




drawWin();


 




buttonTryAgain.draw();
buttonTryAgain.visible=1;
  

}
