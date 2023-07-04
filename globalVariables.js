


let cellArray = new Array;

let turnBlock = 0;

let score = 0;

let cursorOverbutton;

let phaseTime = 100;

let turnTime = phaseTime * 2;

let checkMove = 1;

let winStatus;

let loseStatus;

let canvasBody = document.getElementById('canvasBody');

let ctxBody = canvasBody.getContext('2d');

let size = 80;
let minMargin = size / 8;

let fullSize = 4 * size + 5 * minMargin;

let stepMargin = minMargin + size;

let textMargin = size / 8 * 3;

let downColumnArr = [
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4]
];
let upColumnArr = [
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16]
];

let rightColumnArr = [
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9],
    [16, 15, 14, 13]
];
let leftColumnArr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

let columnArray = {
    down: downColumnArr,
    up: upColumnArr,
    left: leftColumnArr,
    right: rightColumnArr,

}

let touchCheck;
