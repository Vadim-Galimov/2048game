





export class Controller {
	

 static  #startMouseX;
  static #startMouseY;
static #axis;

 static enterActiveStatus=0;




static touchCheck;


	static init() {
		
		    Controller.#setKeyboardController();
    Controller.#setMouseController();
    Controller.#setTouchpadController();
    Controller.#setCursorXYChecker();
		
        document.getElementById('startNewGame').addEventListener('click', App.startNewGame );
        document.getElementById('makeLose').addEventListener('click', App.makeLose);
        document.getElementById('makeWin').addEventListener('click', App.makeWin);
        document.getElementById('makePrewinSituation').addEventListener('click', App.makePrewinSituation);
        document.getElementById('makePreloseSituation').addEventListener('click', App.makePreloseSituation);



	}
	
	




	static #setKeyboardController() {
    let passArray = new Array;

    document.getElementsByTagName('body')[0].addEventListener('keydown', function (event) {

        switch (event.code) {

        case 'ArrowUp':
           Controller.doMove('up');
            break;
        case 'ArrowDown':
           Controller.doMove('down');
            break;
        case 'ArrowLeft':
           Controller.doMove('left');
            break;
        case 'ArrowRight':
           Controller.doMove('right');
            break;

        case 'Enter':
            event.preventDefault()
             if (Controller.enterActiveStatus == 1)  Controller.startNewGame();
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



    document.addEventListener('mousedown', Controller.#writeMouseStartXY);
    document.addEventListener('mouseup', Controller.#mathMouseMove);



}








    static #writeMouseStartXY() {

        if (event === null)
            return 0;
        if (event.type == "touchstart")
            return 0;
        Controller.#startMouseX = event.clientX;
     Controller.#startMouseY = event.clientY;

    }
	
	
	    static #mathMouseMove() {
        let moveTo;

        if (event === null)
            return 0;
        if (event.type == "touchstart")
            return 0;

    let    endMouseX = event.clientX;
      let  endMouseY = event.clientY;
     let   mouseMove = [endMouseX - Controller.#startMouseX, endMouseY - Controller.#startMouseY];
        if (Math.abs(mouseMove[0]) + Math.abs(mouseMove[1]) < 200)
            return 0;
        if (Math.abs(mouseMove[0]) > Math.abs(mouseMove[1]))
            Controller.#axis = 'x';
        else
            Controller.#axis = 'y';

        if (Controller.#axis == 'y') {

            if (mouseMove[1] > 0)
                moveTo = 'down';
            else
                moveTo = 'up';

        }

        if (Controller.#axis == 'x') {

            if (mouseMove[0] > 0)
                moveTo = 'right';
            else
                moveTo = 'left';

        }
	Controller.doMove(moveTo);
    


    }
	
	
	
	
	
	
	


 static #setTouchpadController() {

    let deltaX;

    let deltaY;
	let touchStartEvent;
    document.addEventListener("touchstart", function (e) {

      touchStartEvent = e;
    });
    document.addEventListener("touchmove", function (e) {
        if (touchStartEvent) {

            deltaX = e.touches[0].pageX - touchStartEvent.touches[0].pageX;
            deltaY = e.touches[0].pageY - touchStartEvent.touches[0].pageY;

        }
    });
    document.addEventListener("touchend", function (e) {
		
		
        if (isNaN(Math.abs(deltaX)))
            return 0;

        if (Math.abs(deltaX) + Math.abs(deltaY) < 100)
            return 0;

        if (Math.abs(deltaX) > Math.abs(deltaY))
            Controller.#axis = 'x';
        else
            Controller.#axis = 'y'

                if (Controller.#axis == 'y') {

                    if (deltaY > 0)
                        moveTo = 'down';
                    else
                        moveTo = 'up';

                }

                if (Controller.#axis == 'x') {

                    if (deltaX > 0)
                        moveTo = 'right';
                    else
                        moveTo = 'left';

                }



				Controller.doMove(moveTo);
    

        touchStartEvent = null;

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
				
			
			Controller.buttonClick();





			}
			
		}
		
		
		
		
		
		
	}
	
	
	


    document.addEventListener('touchstart', touchClick);

    function mouseMove() {
		Controller.checkMouseMove(event.pageX, event.pageY);
		

    }

    function touchClick() {

            elem = document.getElementById('canvasBody');
		let x1= event.touches[0]?.pageX;
		let y1=event.touches[0]?.pageY 
     

  

        document.addEventListener('touchend', touchClickEnd, x1, y1);

    }

    function touchClickEnd(e) {


  



	let x2=e.x
			let y2=e.y
			
			if (Math.abs(x1-x2) + Math.abs(y1-y2)<5) {
				
				Controller.touchButtonClick(x1, y1); 

			}



}




	






	
}


static doMove() {

 


}


static startNewGame() {



}


static checkMouseMove() {


}
static buttonClick() {

    
}


}
