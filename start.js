makeStart();

function makeStart() {

    make2ActiveCells();
    drawScore();
    startAnimation();

    setTimeout(() => {
     stopAnimation();

    }, turn.phaseTime * 2);

    setKeyboardController();
    setMouseController();
    setTouchpadController();
    setCursorXYChecker();

    i = 0;
    createInterval = setInterval(() => {
        cellArray.forEach(function (item) {
            item.createAnimation(5 - i);
            item.mergeAnimation(5 - i);
        });
        i++;
        if (i > 4) {

            clearInterval(createInterval);
            cellArray.forEach(function (item) {
                item.create = 0;
                item.createSize = 0;
                item.merge = 0;
                item.mergeSize = 0;
            });
        }
    }, 10)

}

function make2ActiveCells() {

    randomNum1 = Math.floor(Math.random() * 16);
    let randomNum2;

    do {
        randomNum2 = Math.floor(Math.random() * 16);
    } while (randomNum2 === randomNum1);

    newCell = new Cell(randomNum1);

    cellArray.push(newCell);

    newCell = new Cell(randomNum2);

    cellArray.push(newCell);

    cellArray.forEach(function (item) {
        item.value = 2;
        item.drawValue = 2;
    })

}

function setKeyboardController() {
    let passArray = new Array;

    document.getElementsByTagName('body')[0].addEventListener('keydown', function (event) {

        switch (event.code) {

        case 'ArrowUp':
            up();
            break;
        case 'ArrowDown':
            down();
            break;
        case 'ArrowLeft':
            left();
            break;
        case 'ArrowRight':
            right();
            break;

        case 'Enter':
            event.preventDefault()
            enter();
            break;

            break;

        }

        passArray.push(event.code);

        if (passArray.length > 5)
            passArray.shift();
        if (passArray.join() == ['KeyA', 'KeyD', 'KeyM', 'KeyI', 'KeyN'].join()) {
            document.getElementById('adminPanel').style = 'display: block';

        }

    });

}

function setMouseController() {

    function writeMouseStartXY() {

        if (event === null)
            return 0;
        if (event.type == "touchstart")
            return 0;
        startMouseX = event.clientX;
        startMouseY = event.clientY;

    }

    document.addEventListener('mousedown', writeMouseStartXY);
    document.addEventListener('mouseup', mathMouseMove);

    function mathMouseMove() {
        let moveTo;

        if (event === null)
            return 0;
        if (event.type == "touchstart")
            return 0;

        endMouseX = event.clientX;
        endMouseY = event.clientY;
        mouseMove = [endMouseX - startMouseX, endMouseY - startMouseY];
        if (Math.abs(mouseMove[0]) + Math.abs(mouseMove[1]) < 200)
            return 0;
        if (Math.abs(mouseMove[0]) > Math.abs(mouseMove[1]))
            axis = 'x';
        else
            axis = 'y';

        if (axis == 'y') {

            if (mouseMove[1] > 0)
                moveTo = 'down';
            else
                moveTo = 'up';

        }

        if (axis == 'x') {

            if (mouseMove[0] > 0)
                moveTo = 'right';
            else
                moveTo = 'left';

        }

        if (turn.block == 1)
            return 0;

        turn.moveDirection = moveTo;

        makeTurn();

    }

}

function setTouchpadController() {

    let deltaX;

    let deltaY;

    document.addEventListener("touchstart", function (e) {

        event = e;
    });
    document.addEventListener("touchmove", function (e) {
        if (event) {

            deltaX = e.touches[0].pageX - event.touches[0].pageX;
            deltaY = e.touches[0].pageY - event.touches[0].pageY;

        }
    });
    document.addEventListener("touchend", function (e) {
        if (isNaN(Math.abs(deltaX)))
            return 0;

        if (Math.abs(deltaX) + Math.abs(deltaY) < 100)
            return 0;

        if (Math.abs(deltaX) > Math.abs(deltaY))
            axis = 'x';
        else
            axis = 'y'

                if (axis == 'y') {

                    if (deltaY > 0)
                        moveTo = 'down';
                    else
                        moveTo = 'up';

                }

                if (axis == 'x') {

                    if (deltaX > 0)
                        moveTo = 'right';
                    else
                        moveTo = 'left';

                }

                if (turn.block == 1)
                    return 0;

                turn.moveDirection = moveTo;

        makeTurn();

        event = null;

    });

}

function setCursorXYChecker() {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('click', buttonClick);
    document.addEventListener('touchstart', touchClick);

    function mouseMove() {

        if (buttonTryAgain.visible == 1) {

            elem = document.getElementById('canvasBody');

            if (
                event.pageX > buttonTryAgain.buttonX1 + elem.offsetLeft &&
                event.pageX < buttonTryAgain.buttonX2 + elem.offsetLeft &&
                event.pageY > buttonTryAgain.buttonY1 + elem.offsetTop &&
                event.pageY < buttonTryAgain.buttonY2 + elem.offsetTop) {

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

    function touchClick() {

        if (buttonTryAgain.visible == 1) {

            elem = document.getElementById('canvasBody');

            if (

                event.touches[0]?.pageX > buttonTryAgain.buttonX1 + elem.offsetLeft &&
                event.touches[0]?.pageX < buttonTryAgain.buttonX2 + elem.offsetLeft &&
                event.touches[0]?.pageY > buttonTryAgain.buttonY1 + elem.offsetTop &&
                event.touches[0]?.pageY < buttonTryAgain.buttonY2 + elem.offsetTop) {

                touchCheck = 1;

            } else {

                touchCheck = 0;
            }

        }

        document.addEventListener('touchend', touchClickEnd, event);

    }

    function touchClickEnd(e) {

        if (buttonTryAgain.visible == 1) {

            elem = document.getElementById('canvasBody');

            if (
                e?.changedTouches[0]?.pageX > buttonTryAgain.buttonX1 + elem.offsetLeft &&
                e?.changedTouches[0]?.pageX < buttonTryAgain.buttonX2 + elem.offsetLeft &&
                e?.changedTouches[0]?.pageY > buttonTryAgain.buttonY1 + elem.offsetTop &&
                e?.changedTouches[0]?.pageY < buttonTryAgain.buttonY2 + elem.offsetTop) {

                cursorOverbutton = 1;

            } else {

                touchCkeck = 0;
                cursorOverbutton = 0;

            }

        }

        if (cursorOverbutton == 1 && touchCheck == 1) {

            newGame();
        }
    }

}

function buttonClick() {

    if (cursorOverbutton == 1)
        newGame();

}
