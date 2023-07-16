/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/App.js */ \"./src/modules/App.js\");\n\nconst app = new _modules_App_js__WEBPACK_IMPORTED_MODULE_0__.App();\n_modules_App_js__WEBPACK_IMPORTED_MODULE_0__.App.run();\n\n//# sourceURL=webpack://2048game/./src/index.js?");

/***/ }),

/***/ "./src/modules/App.js":
/*!****************************!*\
  !*** ./src/modules/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller.js */ \"./src/modules/Controller.js\");\n/* harmony import */ var _Drawer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawer.js */ \"./src/modules/Drawer.js\");\n/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field.js */ \"./src/modules/Field.js\");\n/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cell.js */ \"./src/modules/Cell.js\");\n\nconst controller = new _Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller();\n\nconst drawer = new _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer();\n\nconst field = new _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field();\n\nconst cell = new _Cell_js__WEBPACK_IMPORTED_MODULE_3__.Cell();\nclass App {\n  static run() {\n    _Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.doMove = App.doMove.bind(this);\n    App.#make2ActiveCells();\n    App.#animateResize();\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawScore(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.score);\n    App.#startAnimation();\n    _Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.init();\n  }\n  static startNewGame() {\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.visible = 0;\n    _Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.enterActiveStatus = 0;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.cursorOverbutton = 0;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.score = 0;\n    document.getElementsByTagName(\"body\")[0].style.cursor = \"default\";\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray = [];\n    App.#make2ActiveCells();\n    App.#animateResize();\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.turnBlock = 0;\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawScore(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.score);\n    App.#startAnimation();\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.winStatus = 0;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus = 0;\n  }\n  static #makeTurn() {\n    App.#doPhase1();\n    setTimeout(() => {\n      App.#doPhase2();\n    }, _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime);\n    setTimeout(() => {\n      App.#doPostTurn();\n    }, _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime * 2);\n  }\n  static #doPhase1() {\n    App.#startAnimation();\n    App.#setTickets();\n    App.#allMove();\n  }\n  static #doPhase2() {\n    App.#animateResize();\n    App.#changeScore();\n    App.#deleteExcessCells();\n    App.#checkTurnResult();\n  }\n  static #doPostTurn() {\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.winStatus == 0 && _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus == 0) _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.turnBlock = 0;\n  }\n  static #checkTurnResult() {\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDetected == 1) App.#make1ActiveCell();\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDetected = 0;\n    App.#checkWin();\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.winStatus == 1) return 0;\n    App.#checkLose();\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus == 1) return 0;\n  }\n  static #changeScore() {\n    let turnScore = 0;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.forEach(function (item) {\n      if (item.toDelete == 1) turnScore += item.valueOfDraw;\n    });\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.score += turnScore * 2;\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawScore(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.score);\n  }\n  static #checkWin() {\n    let valueArray = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.map(function (item) {\n      return item.value;\n    });\n    if (valueArray.includes(2048)) _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.winStatus = 1;\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.winStatus == 1) setTimeout(App.makeWin, _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime);\n    ;\n  }\n  static #checkLose() {\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus = 1;\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.length < 16) {\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus = 0;\n      return 0;\n    }\n    for (let i1 = 0; i1 < 4; i1++) {\n      for (let i = 0; i < 3; i++) {\n        if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.downColumnArr[i1][i])?.value == _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.downColumnArr[i1][i + 1])?.value) _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus = 0;\n      }\n    }\n    for (i1 = 0; i1 < 4; i1++) {\n      for (i = 0; i < 3; i++) {\n        if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.rightColumnArr[i1][i])?.value == _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.rightColumnArr[i1][i + 1])?.value) _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus = 0;\n      }\n    }\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.loseStatus == 1) setTimeout(App.makeLose, _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime);\n  }\n  static makeLose() {\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawLose();\n    buttonXY = _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawButton(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain);\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonXY = buttonXY;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.visible = 1;\n    _Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.enterActiveStatus = 1;\n  }\n  static makeWin() {\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawWin();\n    let buttonXY = _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawButton(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain);\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonXY = buttonXY;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.visible = 1;\n    _Controller_js__WEBPACK_IMPORTED_MODULE_0__.Controller.enterActiveStatus = 1;\n  }\n  static makePrewinSituation() {\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray[0].value = 1024;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray[1].value = 1024;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray[1].valueOfDraw = 1024;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray[0].valueOfDraw = 1024;\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawCells(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray);\n  }\n  static makePreloseSituation() {\n    App.startNewGame();\n    for (let i = 0; i < 13; i++) {\n      App.#make1ActiveCell();\n    }\n    for (let i = 0; i < 15; i++) {\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray[i].value = i + 32;\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray[i].valueOfDraw = i + 32;\n    }\n    _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawCells(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray);\n  }\n  static #animateResize() {\n    let i = 0;\n    let createInterval = setInterval(() => {\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.forEach(function (item) {\n        item.animateCreating(5 - i);\n        item.animateMerge(5 - i);\n      });\n      i++;\n      if (i > 4) {\n        clearInterval(createInterval);\n        _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.forEach(function (item) {\n          item.stopAnimating();\n        });\n      }\n    }, 10);\n  }\n  static #make2ActiveCells() {\n    let randomNum1 = Math.floor(Math.random() * 16);\n    let randomNum2;\n    do {\n      randomNum2 = Math.floor(Math.random() * 16);\n    } while (randomNum2 === randomNum1);\n    let newCell = new _Cell_js__WEBPACK_IMPORTED_MODULE_3__.Cell(randomNum1);\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.push(newCell);\n    newCell = new _Cell_js__WEBPACK_IMPORTED_MODULE_3__.Cell(randomNum2);\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.push(newCell);\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.forEach(function (item) {\n      item.value = 2;\n      item.valueOfDraw = 2;\n    });\n  }\n  static #setTickets() {\n    for (let i = 0; i < 4; i++) {\n      App.#setTicketAndMoveSpeed(1, i);\n      App.#setTicketAndMoveSpeed(2, i);\n      App.#setTicketAndMoveSpeed(3, i);\n    }\n  }\n  static #setTicketAndMoveSpeed(choosenNumber, choosenColumn) {\n    let choosenColumnArr = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.columnArray[_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDirection];\n    let choosenCell = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(choosenColumnArr[choosenColumn][choosenNumber]);\n    if (!choosenCell) return 0;\n    let maxMove = App.#getMaxMove(choosenColumn, choosenCell);\n    let sub1Number = choosenNumber - 1;\n    let sub2Number = choosenNumber - 2;\n    let sub3Number = choosenNumber - 3;\n    let sub1Cell = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub1Number]);\n    let sub2Cell = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub2Number]);\n    let sub3Cell = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.getCellFromNumber(choosenColumnArr[choosenColumn][sub3Number]);\n    let ticket = choosenCell.number;\n    let moveSpeed = 0;\n    if (App.#checkMerge(sub1Cell, choosenCell)) {\n      moveSpeed = 1;\n      ticket = choosenColumnArr[choosenColumn][sub1Number];\n      choosenCell.toDelete = 1;\n      sub1Cell.value *= 2;\n      sub1Cell.statusEndedMerge = 1;\n      sub1Cell.mergeBlock = 1;\n      choosenCell.mergeBlock = 1;\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDetected = 1;\n    }\n    if (!sub1Cell && maxMove > 0) {\n      moveSpeed = 1;\n      ticket = choosenColumnArr[choosenColumn][sub1Number];\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDetected = 1;\n      if (App.#checkMerge(sub2Cell, choosenCell)) {\n        moveSpeed = 2;\n        sub2Cell.value *= 2;\n        sub2Cell.statusEndedMerge = 1;\n        choosenCell.toDelete = 1;\n        ticket = choosenColumnArr[choosenColumn][sub2Number];\n        sub2Cell.mergeBlock = 1;\n        choosenCell.mergeBlock = 1;\n      }\n      if (!sub2Cell && maxMove > 1) {\n        moveSpeed = 2;\n        ticket = choosenColumnArr[choosenColumn][sub2Number];\n        if (App.#checkMerge(sub3Cell, choosenCell)) {\n          moveSpeed = 3;\n          ticket = choosenColumnArr[choosenColumn][sub3Number];\n          sub3Cell.value *= 2;\n          sub3Cell.statusEndedMerge = 1;\n          choosenCell.toDelete = 1;\n          sub3Cell.mergeBlock = 1;\n          choosenCell.mergeBlock = 1;\n        }\n        if (!sub3Cell && maxMove > 2) {\n          moveSpeed = 3;\n          ticket = choosenColumnArr[choosenColumn][sub3Number];\n        }\n      }\n    }\n    choosenCell.ticket = ticket;\n    choosenCell.moveSpeed = moveSpeed;\n  }\n  static #getMaxMove(choosenColumn, choosenCell) {\n    let choosenColumnArr = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.columnArray[_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDirection];\n    let thisArr = choosenColumnArr[choosenColumn];\n    return thisArr.indexOf(choosenCell.number);\n    ;\n  }\n  static #checkMerge(subCell, choosenCell) {\n    if (subCell?.value == choosenCell.value && subCell?.mergeBlock == 0 && choosenCell.mergeBlock == 0) return 1;else return 0;\n  }\n  static #allMove() {\n    let animationCounter = 0;\n    let timerMakeStep = setInterval(() => {\n      if (animationCounter > 4) {\n        clearInterval(timerMakeStep);\n        _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.forEach(function (item) {\n          item.afterMove();\n        });\n      }\n      _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.forEach(function (item) {\n        item.x += _Cell_js__WEBPACK_IMPORTED_MODULE_3__.Cell.moveXY[_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDirection][0] * item.moveSpeed / (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime / 20);\n        item.y += _Cell_js__WEBPACK_IMPORTED_MODULE_3__.Cell.moveXY[_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDirection][1] * item.moveSpeed / (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime / 20);\n      });\n      animationCounter++;\n    }, _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime / 5);\n  }\n  static #deleteExcessCells() {\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.filter(function (item) {\n      return item.toDelete != 1;\n    });\n  }\n  static #make1ActiveCell() {\n    let randomNum;\n    function checkCellFunc() {\n      let thisCell = _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.find(function (item) {\n        return item.ticket == randomNum + 1;\n      });\n      return thisCell;\n    }\n    do {\n      randomNum = Math.floor(Math.random() * 16);\n    } while (checkCellFunc());\n    let newCell = new _Cell_js__WEBPACK_IMPORTED_MODULE_3__.Cell(randomNum);\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray.push(newCell);\n  }\n  static #startAnimation() {\n    let timerDrawCells = setInterval(() => {\n      _Drawer_js__WEBPACK_IMPORTED_MODULE_1__.Drawer.drawCells(_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.cellArray);\n    }, 10);\n    setTimeout(() => {\n      clearInterval(timerDrawCells);\n    }, _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.phaseTime * 2);\n  }\n  static doMove(direction) {\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.turnBlock == 1) return 0;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.turnBlock = 1;\n    _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.moveDirection = direction;\n    App.#makeTurn();\n  }\n  static checkMouseMove(cursorX, cursorY) {\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.visible == 1) {\n      let elem = document.getElementById('canvasBody');\n      if (cursorX > _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonX1 + elem.offsetLeft && cursorX < _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonX2 + elem.offsetLeft && cursorY > _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonY1 + elem.offsetTop && cursorY < _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonY2 + elem.offsetTop) {\n        document.getElementsByTagName(\"body\")[0].style.cursor = \"pointer\";\n        _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.cursorOverbutton = 1;\n      } else {\n        document.getElementsByTagName(\"body\")[0].style.cursor = \"default\";\n        _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.cursorOverbutton = 0;\n      }\n    }\n  }\n  static buttonClick() {\n    if (_Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.cursorOverbutton == 1 && _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.visible == 1) App.startNewGame();\n  }\n  static touchButtonClick(x1, y1) {\n    elem = document.getElementById('canvasBody');\n    if (x1 > _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonX1 + elem.offsetLeft && x1 < _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonX2 + elem.offsetLeft && y1 > _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonY1 + elem.offsetTop && y1 < _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.buttonY2 + elem.offsetTop && _Field_js__WEBPACK_IMPORTED_MODULE_2__.Field.buttonTryAgain.visible == 1) App.startNewGame();\n  }\n  static getButtonXY() {\n    return [1, 2, 3, 4];\n  }\n}\n\n//# sourceURL=webpack://2048game/./src/modules/App.js?");

/***/ }),

/***/ "./src/modules/Button.js":
/*!*******************************!*\
  !*** ./src/modules/Button.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: () => (/* binding */ Button)\n/* harmony export */ });\nclass Button {\n  constructor() {\n    this.cursorOverbutton = 0;\n    this.cursorOverbutton = 0;\n  }\n  set buttonXY(value) {\n    [this.buttonX1, this.buttonY1, this.buttonX2, this.buttonY2] = value;\n  }\n}\n\n//# sourceURL=webpack://2048game/./src/modules/Button.js?");

/***/ }),

/***/ "./src/modules/Cell.js":
/*!*****************************!*\
  !*** ./src/modules/Cell.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Cell: () => (/* binding */ Cell)\n/* harmony export */ });\nclass Cell {\n  static moveXY = {\n    down: [0, 90],\n    up: [0, -90],\n    left: [-90, 0],\n    right: [90, 0]\n  };\n  constructor(i) {\n    this.i = i;\n    this.number = i + 1;\n    this.columnNumber = (this.i + 1) % 4 != 0 ? (this.i + 1) % 4 : 4;\n    this.rowNumber = Math.floor(this.i / 4) + 1;\n    this.x = this.columnNumber * 90 - 80;\n    this.y = this.rowNumber * 90 - 80;\n    this.random10Percent = Math.floor(Math.random() * 10);\n    this.value = 2;\n    if (this.random10Percent == 9) this.value = 4;\n    this.valueOfDraw = this.value;\n    this.moveSpeed = 0;\n    this.ticket = this.number;\n    this.toDelete = 0;\n    this.mergeBlock = 0;\n    this.statusNewlyCreating = 1;\n    this.sizePenalty = 0;\n    this.statusEndedMerge = 0;\n    this.sizeBonus = 0;\n  }\n  afterMove() {\n    this.number = this.ticket;\n    this.moveSpeed = 0;\n    this.mergeBlock = 0;\n    this.valueOfDraw = this.value;\n    this.i = this.ticket - 1;\n    this.columnNumber = (this.i + 1) % 4 != 0 ? (this.i + 1) % 4 : 4;\n    this.rowNumber = Math.floor(this.i / 4) + 1;\n    this.x = this.columnNumber * 90 - 80;\n    this.y = this.rowNumber * 90 - 80;\n  }\n  animateMerge(tick) {\n    if (this.statusEndedMerge == 0) return 0;\n    this.sizeBonus = 1 * tick;\n  }\n  animateCreating(tick) {\n    if (this.statusNewlyCreating == 0) return 0;\n    this.sizePenalty = 2 * tick;\n  }\n  stopAnimating() {\n    this.statusNewlyCreating = 0;\n    this.sizePenalty = 0;\n    this.statusEndedMerge = 0;\n    this.sizeBonus = 0;\n  }\n}\n\n//# sourceURL=webpack://2048game/./src/modules/Cell.js?");

/***/ }),

/***/ "./src/modules/Controller.js":
/*!***********************************!*\
  !*** ./src/modules/Controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Controller: () => (/* binding */ Controller)\n/* harmony export */ });\nclass Controller {\n  static #startMouseX;\n  static #startMouseY;\n  static #axis;\n  static enterActiveStatus = 0;\n  static touchCheck;\n  static init() {\n    Controller.#setKeyboardController();\n    Controller.#setMouseController();\n    Controller.#setTouchpadController();\n    Controller.#setCursorXYChecker();\n  }\n  static #setKeyboardController() {\n    let passArray = new Array();\n    document.getElementsByTagName('body')[0].addEventListener('keydown', function (event) {\n      switch (event.code) {\n        case 'ArrowUp':\n          Controller.doMove('up');\n          break;\n        case 'ArrowDown':\n          Controller.doMove('down');\n          break;\n        case 'ArrowLeft':\n          Controller.doMove('left');\n          break;\n        case 'ArrowRight':\n          Controller.doMove('right');\n          break;\n        case 'Enter':\n          event.preventDefault();\n          if (Controller.enterActiveStatus == 1) Controller.startNewGame();\n          break;\n      }\n      passArray.push(event.code);\n      if (passArray.length > 5) passArray.shift();\n      if (passArray.join() == ['KeyA', 'KeyD', 'KeyM', 'KeyI', 'KeyN'].join()) {\n        document.getElementById('adminPanel').style = 'display: block';\n      }\n    });\n  }\n  static #setMouseController() {\n    document.addEventListener('mousedown', Controller.#writeMouseStartXY);\n    document.addEventListener('mouseup', Controller.#mathMouseMove);\n  }\n  static #writeMouseStartXY() {\n    if (event === null) return 0;\n    if (event.type == \"touchstart\") return 0;\n    Controller.#startMouseX = event.clientX;\n    Controller.#startMouseY = event.clientY;\n  }\n  static #mathMouseMove() {\n    let moveTo;\n    if (event === null) return 0;\n    if (event.type == \"touchstart\") return 0;\n    let endMouseX = event.clientX;\n    let endMouseY = event.clientY;\n    let mouseMove = [endMouseX - Controller.#startMouseX, endMouseY - Controller.#startMouseY];\n    if (Math.abs(mouseMove[0]) + Math.abs(mouseMove[1]) < 200) return 0;\n    if (Math.abs(mouseMove[0]) > Math.abs(mouseMove[1])) Controller.#axis = 'x';else Controller.#axis = 'y';\n    if (Controller.#axis == 'y') {\n      if (mouseMove[1] > 0) moveTo = 'down';else moveTo = 'up';\n    }\n    if (Controller.#axis == 'x') {\n      if (mouseMove[0] > 0) moveTo = 'right';else moveTo = 'left';\n    }\n    Controller.doMove(moveTo);\n  }\n  static #setTouchpadController() {\n    let deltaX;\n    let deltaY;\n    let touchStartEvent;\n    document.addEventListener(\"touchstart\", function (e) {\n      touchStartEvent = e;\n    });\n    document.addEventListener(\"touchmove\", function (e) {\n      if (touchStartEvent) {\n        deltaX = e.touches[0].pageX - touchStartEvent.touches[0].pageX;\n        deltaY = e.touches[0].pageY - touchStartEvent.touches[0].pageY;\n      }\n    });\n    document.addEventListener(\"touchend\", function (e) {\n      if (isNaN(Math.abs(deltaX))) return 0;\n      if (Math.abs(deltaX) + Math.abs(deltaY) < 100) return 0;\n      if (Math.abs(deltaX) > Math.abs(deltaY)) Controller.#axis = 'x';else Controller.#axis = 'y';\n      if (Controller.#axis == 'y') {\n        if (deltaY > 0) moveTo = 'down';else moveTo = 'up';\n      }\n      if (Controller.#axis == 'x') {\n        if (deltaX > 0) moveTo = 'right';else moveTo = 'left';\n      }\n      Controller.doMove(moveTo);\n      touchStartEvent = null;\n    });\n  }\n  static #setCursorXYChecker() {\n    document.addEventListener('mousemove', mouseMove);\n    document.addEventListener('mousedown', buttonDown, event);\n    function buttonDown(e) {\n      let x1 = e.x;\n      let y1 = e.y;\n      document.addEventListener('mouseup', buttonUp, event);\n      function buttonUp(e) {\n        let x2 = e.x;\n        let y2 = e.y;\n        if (Math.abs(x1 - x2) + Math.abs(y1 - y2) < 5) {\n          Controller.buttonClick();\n        }\n      }\n    }\n    document.addEventListener('touchstart', touchClick);\n    function mouseMove() {\n      Controller.checkMouseMove(event.pageX, event.pageY);\n    }\n    function touchClick() {\n      elem = document.getElementById('canvasBody');\n      let x1 = event.touches[0]?.pageX;\n      let y1 = event.touches[0]?.pageY;\n      document.addEventListener('touchend', touchClickEnd, x1, y1);\n    }\n    function touchClickEnd(e) {\n      let x2 = e.x;\n      let y2 = e.y;\n      if (Math.abs(x1 - x2) + Math.abs(y1 - y2) < 5) {\n        Controller.touchButtonClick(x1, y1);\n      }\n    }\n  }\n  static doMove() {}\n  static startNewGame() {}\n  static checkMouseMove() {}\n  static buttonClick() {}\n}\n\n//# sourceURL=webpack://2048game/./src/modules/Controller.js?");

/***/ }),

/***/ "./src/modules/Drawer.js":
/*!*******************************!*\
  !*** ./src/modules/Drawer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Drawer: () => (/* binding */ Drawer)\n/* harmony export */ });\nclass Drawer {\n  static mathWidthHeight(text, canvas) {\n    let metrics = canvas.measureText(text);\n    let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;\n    return [metrics.width, actualHeight];\n  }\n  static ctxBody = document.getElementById('canvasBody').getContext('2d');\n  static size = 80;\n  static #scoreFontSize = Drawer.size * 35 / 80;\n  static minMargin = Drawer.size / 8;\n  static fullSize = 4 * Drawer.size + 5 * Drawer.minMargin;\n  static stepMargin = Drawer.minMargin + Drawer.size;\n  static textMarginSize = Drawer.size / 8 * 3;\n  static drawScore(score) {\n    let canvas = document.getElementById('canvasHead').getContext('2d');\n    canvas.clearRect(0, 0, canvasHead.width, canvasHead.height);\n    canvas.font = 'bold ' + Drawer.#scoreFontSize + 'px sans-serif';\n    let [textWidth, textHeight] = Drawer.mathWidthHeight('SCORE:' + score, canvas);\n    canvas.fillStyle = '#bbada0';\n    let textWithMarginsWidth = textWidth + Drawer.textMarginSize;\n    let textScoreMargin = Drawer.size * 25 / 80;\n    let buttonScoreMarginTop = Drawer.size / 4;\n    let textScoreMarginTop = Drawer.size / 8;\n    Drawer.roundRect(canvas, (Drawer.fullSize - textWithMarginsWidth) / 2 - textScoreMargin, buttonScoreMarginTop, textWidth + (Drawer.fullSize - textWithMarginsWidth) / 2 + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20);\n    canvas.strokeStyle = '#776e65';\n    Drawer.#roundRectStroke(canvas, (Drawer.fullSize - textWithMarginsWidth) / 2 - textScoreMargin, buttonScoreMarginTop, textWidth + (Drawer.fullSize - textWithMarginsWidth) / 2 + textScoreMargin, buttonScoreMarginTop + textHeight + 2 * textScoreMarginTop, 20, 5);\n    canvas.fillStyle = \"#ebe4da\";\n    canvas.fillText(\"SCORE: \" + score, (Drawer.fullSize - textWithMarginsWidth) / 2, buttonScoreMarginTop + textHeight + textScoreMarginTop);\n  }\n  static drawCells(cellArray) {\n    Drawer.ctxBody.clearRect(0, 0, canvasBody.width, canvasBody.height);\n    Drawer.#drawBackground();\n    cellArray.forEach(function (item) {\n      let cellValue = item.valueOfDraw;\n      switch (cellValue) {\n        case 2:\n        case 4:\n        case 8:\n        case 16:\n        case 32:\n        case 64:\n          Drawer.ctxBody.font = 'bold 50px sans-serif';\n          break;\n        case 128:\n        case 256:\n        case 512:\n          Drawer.ctxBody.font = 'bold 42px sans-serif';\n          break;\n        case 1024:\n        case 2048:\n          Drawer.ctxBody.font = 'bold 35px sans-serif';\n          break;\n      }\n      switch (cellValue) {\n        case 2:\n          Drawer.ctxBody.fillStyle = '#eee4da';\n          break;\n        case 4:\n          Drawer.ctxBody.fillStyle = '#ede0c8';\n          break;\n        case 8:\n          Drawer.ctxBody.fillStyle = '#f2b179';\n          break;\n        case 16:\n          Drawer.ctxBody.fillStyle = '#f59563';\n          break;\n        case 32:\n          Drawer.ctxBody.fillStyle = '#f67c5f';\n          break;\n        case 64:\n          Drawer.ctxBody.fillStyle = '#f35c3d';\n          break;\n        case 128:\n          Drawer.ctxBody.fillStyle = '#e7cf73';\n          break;\n        case 256:\n          Drawer.ctxBody.fillStyle = '#ecca64';\n          break;\n        case 512:\n        case 1024:\n          Drawer.ctxBody.fillStyle = '#eac75c';\n          break;\n        case 2048:\n          Drawer.ctxBody.fillStyle = '#e6bd4f';\n          break;\n        default:\n          Drawer.ctxBody.fillStyle = '#f2b179';\n          break;\n      }\n      Drawer.roundRect(Drawer.ctxBody, item.x + item.sizePenalty - item.sizeBonus, item.y + item.sizePenalty - item.sizeBonus, item.x + Drawer.size - item.sizePenalty + item.sizeBonus, item.y + Drawer.size - item.sizePenalty + item.sizeBonus, 3);\n      switch (cellValue) {\n        case 2:\n        case 4:\n          Drawer.ctxBody.fillStyle = '#776e65';\n          break;\n        case 8:\n        case 16:\n        case 32:\n        case 64:\n        case 128:\n        case 256:\n        case 512:\n        case 1024:\n        case 2048:\n          Drawer.ctxBody.fillStyle = '#f9f6f2';\n          break;\n        default:\n          Drawer.ctxBody.fillStyle = '#776e65';\n          break;\n      }\n      let [textWidth, textHeight] = Drawer.mathWidthHeight(cellValue, Drawer.ctxBody);\n      let addWidth = (Drawer.size - textWidth) / 2;\n      let addHeight = (Drawer.size - textHeight) / 2;\n      Drawer.ctxBody.fillText(cellValue, item.x + addWidth, item.y + addHeight + textHeight);\n    });\n  }\n  static drawLose() {\n    Drawer.ctxBody.fillStyle = \"rgba(255, 255, 255, 0.5)\";\n    Drawer.roundRect(Drawer.ctxBody, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);\n    Drawer.ctxBody.fillStyle = \"#776e65\";\n    Drawer.ctxBody.font = 'bold 50px sans-serif';\n    let [textWidth, textHeight] = Drawer.mathWidthHeight('GAME OVER!', Drawer.ctxBody);\n    addWidth = (Drawer.fullSize - textWidth) / 2;\n    addHeight = (Drawer.fullSize - textHeight) / 2;\n    Drawer.ctxBody.fillText(\"GAME OVER!\", addWidth, addHeight + textHeight);\n  }\n  static drawWin() {\n    Drawer.ctxBody.fillStyle = \"rgba(255, 215, 0, 0.5)\";\n    Drawer.roundRect(Drawer.ctxBody, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);\n    Drawer.ctxBody.fillStyle = \"#f9f6f2\";\n    Drawer.ctxBody.font = 'bold 50px sans-serif';\n    let [textWidth, textHeight] = Drawer.mathWidthHeight('YOU WIN!', Drawer.ctxBody);\n    let addWidth = (Drawer.fullSize - textWidth) / 2;\n    let addHeight = (Drawer.fullSize - textHeight) / 2;\n    Drawer.ctxBody.fillText(\"YOU WIN!\", addWidth, addHeight + textHeight);\n  }\n  static #drawBackground() {\n    Drawer.ctxBody.fillStyle = '#776e65';\n    Drawer.roundRect(Drawer.ctxBody, 0, 0, Drawer.fullSize, Drawer.fullSize, 10);\n    Drawer.ctxBody.fillStyle = '#bbada0';\n    for (let y = 0; y < 4; y++) {\n      for (let x = 0; x < 4; x++) {\n        let startWidth = Drawer.minMargin + Drawer.stepMargin * x;\n        let startHeight = Drawer.minMargin + Drawer.stepMargin * y;\n        Drawer.roundRect(Drawer.ctxBody, startWidth, startHeight, startWidth + Drawer.size, startHeight + Drawer.size, 3);\n      }\n    }\n  }\n  static roundRect(ctxHB, x1, y1, x2, y2, radius) {\n    radius = Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2);\n    ctxHB.beginPath();\n    ctxHB.moveTo(x1 + radius, y1);\n    ctxHB.lineTo(x2 - radius, y1);\n    ctxHB.arcTo(x2, y1, x2, y1 + radius, radius);\n    ctxHB.lineTo(x2, y2 - radius);\n    ctxHB.arcTo(x2, y2, x2 - radius, y2, radius);\n    ctxHB.lineTo(x1 + radius, y2);\n    ctxHB.arcTo(x1, y2, x1, y2 - radius, radius);\n    ctxHB.lineTo(x1, y1 + radius);\n    ctxHB.arcTo(x1, y1, x1 + radius, y1, radius);\n    ctxHB.fill();\n  }\n  static #roundRectStroke(ctxHB, x1, y1, x2, y2, radius, lineWidth) {\n    ctxHB.lineWidth = lineWidth;\n    radius = Math.min(radius, (x2 - x1) / 2, (y2 - y1) / 2);\n    ctxHB.beginPath();\n    ctxHB.moveTo(x1 + radius, y1);\n    ctxHB.lineTo(x2 - radius, y1);\n    ctxHB.arcTo(x2, y1, x2, y1 + radius, radius);\n    ctxHB.lineTo(x2, y2 - radius);\n    ctxHB.arcTo(x2, y2, x2 - radius, y2, radius);\n    ctxHB.lineTo(x1 + radius, y2);\n    ctxHB.arcTo(x1, y2, x1, y2 - radius, radius);\n    ctxHB.lineTo(x1, y1 + radius);\n    ctxHB.arcTo(x1, y1, x1 + radius, y1, radius);\n    ctxHB.stroke();\n  }\n  static drawButton(button) {\n    Drawer.ctxBody.fillStyle = \"#8f7a66\";\n    Drawer.ctxBody.font = 'bold ' + Drawer.size / 4 + 'px sans-serif';\n    let [textWidth, textHeight] = Drawer.mathWidthHeight(\"Try again\", Drawer.ctxBody);\n    let textWithMarginsWidth = textWidth + Drawer.textMarginSize;\n    Drawer.roundRect(Drawer.ctxBody, (Drawer.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (Drawer.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220, 3);\n    Drawer.ctxBody.fillStyle = \"#f9f6f2\";\n    Drawer.ctxBody.fillText(\"Try again\", (Drawer.fullSize - textWidth - 10) / 2 + 2, 244);\n    return [(Drawer.fullSize - textWithMarginsWidth) / 2, 220, textWidth + 30 + (Drawer.fullSize - textWithMarginsWidth) / 2, textHeight + 15 + 220];\n  }\n}\n\n//# sourceURL=webpack://2048game/./src/modules/Drawer.js?");

/***/ }),

/***/ "./src/modules/Field.js":
/*!******************************!*\
  !*** ./src/modules/Field.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Field: () => (/* binding */ Field)\n/* harmony export */ });\n/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.js */ \"./src/modules/Button.js\");\n\nconst button = new _Button_js__WEBPACK_IMPORTED_MODULE_0__.Button();\nclass Field {\n  static buttonTryAgain = new _Button_js__WEBPACK_IMPORTED_MODULE_0__.Button();\n  static score = 0;\n  static cellArray = [];\n  static moveDirection;\n  static phaseTime = 100;\n  static winStatus = 0;\n  static loseStatus = 0;\n  static moveDetected = 0;\n  static downColumnArr = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]];\n  static upColumnArr = [[1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15], [4, 8, 12, 16]];\n  static rightColumnArr = [[4, 3, 2, 1], [8, 7, 6, 5], [12, 11, 10, 9], [16, 15, 14, 13]];\n  static leftColumnArr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];\n  static columnArray = {\n    down: Field.downColumnArr,\n    up: Field.upColumnArr,\n    left: Field.leftColumnArr,\n    right: Field.rightColumnArr\n  };\n  static turnBlock = 0;\n  static getCellFromNumber(cellNumber) {\n    return Field.cellArray.find(function (item, index) {\n      return item.ticket == cellNumber;\n    });\n  }\n}\n\n//# sourceURL=webpack://2048game/./src/modules/Field.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;