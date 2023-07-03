let cellArray = new Array;


turnBlock = 0;




let score = 0;


let cursorOverbutton;

turnTime = 150;



downColumnArr = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
];
upColumnArr = [
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16]
];

rightColumnArr = [
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9],
    [16, 15, 14, 13]
];
leftColumnArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];




columnArray = {
    down: downColumnArr,
    up: upColumnArr,
    left: leftColumnArr,
    right: rightColumnArr,


}




let checkMove = 1;







let winStatus;
let loseStatus;




let canvas = document.getElementById('canvasBody');

let ctx = canvas.getContext('2d');


let cellValue;




size = 80;
minMargin = size / 8;

fullSize = 4 * size + 5 * minMargin;

stepMargin = minMargin + size;




let canvasHead = document.getElementById('canvasHead');

let ctxH = canvasHead.getContext('2d');


let deltaX;

let deltaY;


textMargin = size / 8 * 3;