
 let  startMouseX;
  let  startMouseY;
let axis;
class Controller {

	static setKeyboardController() {
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



static setMouseController() {

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

    let    endMouseX = event.clientX;
      let  endMouseY = event.clientY;
     let   mouseMove = [endMouseX - startMouseX, endMouseY - startMouseY];
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

        if (App.turnBlock == 1)
            return 0;

        App.moveDirection = moveTo;

        App.makeTurn();

    }

}
 static setTouchpadController() {

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

                if (App.turnBlock == 1)
                    return 0;

                App.moveDirection = moveTo;

        App.makeTurn();

        event = null;

    });

}

static  setCursorXYChecker() {
    document.addEventListener('mousemove', mouseMove);
	 document.addEventListener('mousedown', buttonDown, event);
	
		function buttonDown(e) {
	
		
	let x1=e.x
	let y1=e.y
		
		 document.addEventListener('mouseup', buttonUp, event);
		
		
		
		function buttonUp(e) {
			let x2=e.x
			let y2=e.y
			
			if (Math.abs(x1-x2) + Math.abs(y1-y2)<5) {
				
			

    if (buttonTryAgain.cursorOverbutton == 1)
        newGame();


			}
			
		}
		
		
		
		
		
		
	}
	
	
	


    document.addEventListener('touchstart', touchClick);

    function mouseMove() {

        if (buttonTryAgain.visible == 1) {

         let   elem = document.getElementById('canvasBody');

            if (
                event.pageX > buttonTryAgain.buttonX1 + elem.offsetLeft &&
                event.pageX < buttonTryAgain.buttonX2 + elem.offsetLeft &&
                event.pageY > buttonTryAgain.buttonY1 + elem.offsetTop &&
                event.pageY < buttonTryAgain.buttonY2 + elem.offsetTop) {

         
                document.getElementsByTagName("body")[0].style.cursor = "pointer";
                buttonTryAgain.cursorOverbutton = 1;
            } else {

            
               document.getElementsByTagName("body")[0].style.cursor = "default";
                buttonTryAgain.cursorOverbutton = 0;

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

                buttonTryAgain.cursorOverbutton = 1;

            } else {

                touchCkeck = 0;
                buttonTryAgain.cursorOverbutton = 0;

            }

        }

        if (buttonTryAgain.cursorOverbutton == 1 && touchCheck == 1) {

            newGame();
        }
    }

}


	
}

