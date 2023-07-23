


export class Controller {

    constructor() {
        if (Controller._instance) {
          return Controller._instance;
        }
    
        Controller._instance = this;
      }

   
     init() {
       
       this.setKeyboardController(this);
        this.setMouseController(this);
        this.setTouchpadController(this);
        this.setButtonsController(this);
    }

    setKeyboardController(controllerContext) {   
        let passArray = new Array;
        

        document.addEventListener('keydown', function() {

            switch (event.code) {

                case 'ArrowUp':
                    controllerContext.doMove('up');
                    break;

                case 'ArrowDown':
                    controllerContext.doMove('down');
                    break;

                case 'ArrowLeft':
                    controllerContext.doMove('left');
                    break;

                case 'ArrowRight':
                    controllerContext.doMove('right');
                    break;

                case 'Enter':
                    event.preventDefault()
                    controllerContext.pressEnter();
                    break;
            }

            passArray.push(event.code);
            if (passArray.length > 5)
                passArray.shift();
            if (passArray.join() == ['KeyA', 'KeyD', 'KeyM', 'KeyI', 'KeyN'].join()) {
                controllerContext.openAdminPanel();
            }
        });
    }

    setMouseController(controllerContext) {
        let x1, x2, y1, y2;
        document.addEventListener('mousedown', mouseButtonDown, event);
        function mouseButtonDown(buttonDownEvent) {

            if (event === null) return 0;
            if (event.type == "touchstart") return 0;
         
            x1 = buttonDownEvent.x;
            y1 = buttonDownEvent.y;
            document.addEventListener('mouseup', buttonUp, event);
        }

        function buttonUp(ButtonUpEvent) {

            if (event === null) return 0;
            if (event.type == "touchstart") return 0;

            x2 = ButtonUpEvent.x
            y2 = ButtonUpEvent.y
            checkMove();
            checkClick();

            function checkMove() {

                let axis;
                let moveTo;
                let mouseMove = [x2 - x1, y2 - y1];
                if (Math.abs(mouseMove[0]) + Math.abs(mouseMove[1]) < 200) return 0;
                if (Math.abs(mouseMove[0]) > Math.abs(mouseMove[1])) Controller.axis = 'x';
                else Controller.axis = 'y';

                if (Controller.axis == 'y') {

                    if (mouseMove[1] > 0) moveTo = 'down';
                    else  moveTo = 'up';
                }

                if (Controller.axis == 'x') {
                    if (mouseMove[0] > 0) moveTo = 'right';
                    else moveTo = 'left';
                }
                controllerContext.doMove(moveTo);
            }

            function checkClick() {
                if (Math.abs(x2 - x1) + Math.abs(y2 - y1) < 5)  controllerContext.buttonClick();
            }
        }
        document.addEventListener('mousemove', controllerContext.checkMouseMove);
    }

    setTouchpadController(controllerContext) {
        let deltaX;
        let deltaY;
        let touchStartEvent;
        document.addEventListener("touchstart", touchStart, event);
        function touchStart(touchStartEvent) {

            function touchMove(touchMoveEvent) {
                if (touchStartEvent) {
                    deltaX = touchMoveEvent.touches[0].pageX - touchStartEvent.touches[0].pageX;
                    deltaY = touchMoveEvent.touches[0].pageY - touchStartEvent.touches[0].pageY;
                }
            }

            document.addEventListener("touchmove", touchMove, event);
            document.addEventListener("touchend", touchEnd);

            function touchEnd() {
                let axis;
                if (isNaN(Math.abs(deltaX))) return 0;
                if (Math.abs(deltaX) + Math.abs(deltaY) < 100)  return 0;

                if (Math.abs(deltaX) > Math.abs(deltaY))  Controller.axis = 'x';
                else Controller.axis = 'y'

                if (Controller.axis == 'y') {
                    if (deltaY > 0) moveTo = 'down';
                    else moveTo = 'up';
                }

                if (Controller.axis == 'x') {
                    if (deltaX > 0) moveTo = 'right';
                    else  moveTo = 'left';
                }

                controllerContext.doMove(moveTo);
                touchStartEvent = null;
            }
        }

        document.addEventListener('touchstart', touchClick);

        function touchClick() {

          elem = document.getElementById('canvasBody');
            let x1 = event.touches[0]?.pageX;
            let y1 = event.touches[0]?.pageY
            document.addEventListener('touchend', touchClickEnd, event, x1, y1);

        }

        function touchClickEnd(e, x1, y1) {

            let x2 = e.x
            let y2 = e.y

            if (Math.abs(x1 - x2) + Math.abs(y1 - y2) < 5) {
                controllerContext.touchButtonClick(x1, y1);
            }
        }
    }

    setButtonsController(controllerContext) {

        document.getElementById('startNewGame').addEventListener('click', controllerContext.triggerButton);
        document.getElementById('makeLose').addEventListener('click', controllerContext.triggerButton);
        document.getElementById('makeWin').addEventListener('click', controllerContext.triggerButton);
        document.getElementById('makePrewinSituation').addEventListener('click',controllerContext.triggerButton);
        document.getElementById('makePreloseSituation').addEventListener('click', controllerContext.triggerButton);

    }

   
     doMove;	 
     checkMouseMove;
     buttonClick;
     touchButtonClick;
     pressEnter;
     openAdminPanel;
	 triggerButton;

}