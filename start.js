makeStart();

function makeStart() {

    make2ActiveCells();
    drawScore();
    drawCells();

    setKeyboardController();
    setMouseController();
    setTouchpadController();
    setCursorXYChecker();

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

        if (turnBlock == 1)
            return 0;

        moveDirection = moveTo;

        makeTurn(moveTo);

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
        console.log('3')
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

                if (turnBlock == 1)
                    return 0;

                moveDirection = moveTo;

        makeTurn(moveTo);

        event = null;

    });

}

function setCursorXYChecker() {
    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('click', buttonClick);

}
