





class Controller {
	
	
 static  startMouseX;
  static startMouseY;
static axis;






static touchCheck;


	
	static #onMove(direction) {
		
		
    if (App.turnBlock == 1)
        return 0;

    App.moveDirection = direction;

    App.makeTurn();
		
	}
	
	static init() {
		
		    Controller.#setKeyboardController();
    Controller.#setMouseController();
    Controller.#setTouchpadController();
    Controller.#setCursorXYChecker();
		
	}
	
	
	
	
	
	

	static #setKeyboardController() {
    let passArray = new Array;

    document.getElementsByTagName('body')[0].addEventListener('keydown', function (event) {

        switch (event.code) {

        case 'ArrowUp':
            Controller.up();
            break;
        case 'ArrowDown':
            Controller.down();
            break;
        case 'ArrowLeft':
            Controller.left();
            break;
        case 'ArrowRight':
            Controller.right();
            break;

        case 'Enter':
            event.preventDefault()
            Controller.enter();
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



static #setMouseController() {

    function writeMouseStartXY() {

        if (event === null)
            return 0;
        if (event.type == "touchstart")
            return 0;
        Controller.startMouseX = event.clientX;
     Controller.startMouseY = event.clientY;

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
     let   mouseMove = [endMouseX - Controller.startMouseX, endMouseY - Controller.startMouseY];
        if (Math.abs(mouseMove[0]) + Math.abs(mouseMove[1]) < 200)
            return 0;
        if (Math.abs(mouseMove[0]) > Math.abs(mouseMove[1]))
            Controller.axis = 'x';
        else
            Controller.axis = 'y';

        if (Controller.axis == 'y') {

            if (mouseMove[1] > 0)
                moveTo = 'down';
            else
                moveTo = 'up';

        }

        if (Controller.axis == 'x') {

            if (mouseMove[0] > 0)
                moveTo = 'right';
            else
                moveTo = 'left';

        }
	Controller.#onMove(moveTo);
    


    }

}
 static #setTouchpadController() {

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
            Controller.axis = 'x';
        else
            Controller.axis = 'y'

                if (Controller.axis == 'y') {

                    if (deltaY > 0)
                        moveTo = 'down';
                    else
                        moveTo = 'up';

                }

                if (Controller.axis == 'x') {

                    if (deltaX > 0)
                        moveTo = 'right';
                    else
                        moveTo = 'left';

                }



				Controller.#onMove(moveTo);
    

        event = null;

    });

}

static  #setCursorXYChecker() {
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
				
			

    if (Field.buttonTryAgain.cursorOverbutton == 1)
        Controller.newGame();


			}
			
		}
		
		
		
		
		
		
	}
	
	
	


    document.addEventListener('touchstart', touchClick);

    function mouseMove() {

        if (Field.buttonTryAgain.visible == 1) {

         let   elem = document.getElementById('canvasBody');

            if (
                event.pageX > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                event.pageX < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                event.pageY > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                event.pageY < Field.buttonTryAgain.buttonY2 + elem.offsetTop) {

         
                document.getElementsByTagName("body")[0].style.cursor = "pointer";
                Field.buttonTryAgain.cursorOverbutton = 1;
            } else {

            
               document.getElementsByTagName("body")[0].style.cursor = "default";
                Field.buttonTryAgain.cursorOverbutton = 0;

            }

        }

    }

    function touchClick() {

        if (Field.buttonTryAgain.visible == 1) {

            elem = document.getElementById('canvasBody');

            if (

                event.touches[0]?.pageX > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                event.touches[0]?.pageX < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                event.touches[0]?.pageY > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                event.touches[0]?.pageY < Field.buttonTryAgain.buttonY2 + elem.offsetTop) {

                Controller.touchCheck = 1;

            } else {

                Controller.touchCheck = 0;
            }

        }

        document.addEventListener('touchend', touchClickEnd, event);

    }

    function touchClickEnd(e) {

        if (Field.buttonTryAgain.visible == 1) {

            elem = document.getElementById('canvasBody');

            if (
                e?.changedTouches[0]?.pageX > Field.buttonTryAgain.buttonX1 + elem.offsetLeft &&
                e?.changedTouches[0]?.pageX < Field.buttonTryAgain.buttonX2 + elem.offsetLeft &&
                e?.changedTouches[0]?.pageY > Field.buttonTryAgain.buttonY1 + elem.offsetTop &&
                e?.changedTouches[0]?.pageY < Field.buttonTryAgain.buttonY2 + elem.offsetTop) {

                Field.buttonTryAgain.cursorOverbutton = 1;

            } else {

                touchCkeck = 0;
                Field.buttonTryAgain.cursorOverbutton = 0;

            }

        }

        if (Field.buttonTryAgain.cursorOverbutton == 1 && Controller.touchCheck == 1) {

            Controller.newGame();
        }
    }

}










static down() {

Controller.#onMove('down');

}







static up() {

Controller.#onMove('up');

}

static left() {
Controller.#onMove('left');
}

static right() {

Controller.#onMove('right');

}

static enter() {

    if (Field.buttonTryAgain.visible == 1) {

        Controller.newGame();

    }
}

static newGame() {
 App.startNewGame();
}





	
}

