# 2048 game


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://vadim-galimov.github.io/2048game/">
    <img src="readme-logo.jpg" alt="Logo" width="80" height="80">
  </a>
  
 <p  align="center"> &#8657; попробовать &#8657; </p>

</div>




<!-- ABOUT THE PROJECT -->


## Правила игры:

### Старт уровня:

• игрок запускается сразу на пустом уровне, где есть 2 плитки с
цифрой «2». Счёт изначально равен 0.


### Определение хода:

• Игрок может пролистнуть (нажать, сдвинуть курсор/палец,
отпустить) в одну из сторон: влево, вправо, вверх, вниз. Должно
быть минимальное расстояние, на которое игрок должен
сдвинуть курсор, чтобы это посчиталось за ход. Если игрок
сдвигает курсор/палец по диагонали, но ход делается
относительно той оси, по которой он сделал большее движение.
Например, если игрок сдвинул курсор на 200px вверх и 180px
вправо, то совершается ход вверх. Также доступно управление клавиатурой.


### Какие плитки можно соединить?

• Плитки можно соединить, если они имеют одинаковое значение
и находятся рядом (имеют 1 общее ребро).
После хода игрока:

• Все плитки сдвигаются в требуемом направлении

o Если 2 плитки находятся рядом и сдвигаются «друг к
другу», то они соединяются в 1 плитку со значением, в 2
раза больше. Значения старых плиток прибавляются в
счёт.

• После хода на поле в случайном месте появляется новая плитка.


### Новый ход:
С вероятностью 90% это плитка со значением «2», с
вероятностью 10% - со значением «4».

### Условия победы и проигрыша:
• Если после хода на поле появляется плитка со значением
«2048», то появляется надпись с текстом "YOU WIN!".
После нажатия «Try again» игра начинается заново.
• Если после хода и добавления новой плитки возникает ситуация,
что не существует плиток, которые можно соединить, 
появляется надпись с текстом "GAME OVER!". После
нажатия «Try again» игра начинается заново.
:



## Файлы:

globalVariables.js

Глобальные переменные

buttons.js

Кнопки (из меню управления)

drawHead.js

Отрисовка хэдера

drawBody.js

Отрисовка тела

classes.js

Классы

start.js

Старт:

-создаю две ячейки

-рисую счёт

-рисую тело

-устанавливаю управление клавиатурой

-устанавилваю управление мышкой

-устанавливаю управление тачпадом

-устанавливаю отслеживание координат курсора


turn.js

Ход:

-проверка на блок

-записываю направление движения

-включаю отрисовку анимации тела

-блокирую ход

-раздаю билеты каждой ячейке

-включаю пошаговое движение ячеек

-откладываю таймер длинной в единицу хода(turnTime):

 {
 
 -считаю, записываю и отрисовываю счёт
 
 -меняю значения клеток в связи с их перемещением
 
 -обновляю список клеток (удаляется каждый вторая клетка из пары объекдинения)
 
 -если было зафиксированно движение, ход считается состоявшимся и создаю новую клетку
 
 -проверка на вин
 
 -проверка на луз
 
 -снимаю блок хода
 
 }


lose-win.js

проверка на победу или поражения и действия связанные с ними

adminPanel.js

две команды:
-создание ситуации за 1 ход до победы
-создание ситуации за 1 ход до поражения


## Тайминги:

	Пошёл ход:
  
	0s
  
	запусается интервальный  drawCells() в течении 2 phaseTime
	
	запусакется timerMakeStep() - ячейки начинают двигаться в течении 1 phaseTime

	1 phaseTime
	
	Заканчивается timerMakeStep()
	
	Смена данных ячеек
		
	выбор действия, которое сработает через 1 phaseTime:
	
	{
	
		Если луз или вин, через 1 phaseTime сработает  одно из этих событий
	
		Если оба не сработали - через 1 phaseTime снимается блок хода
	
	}

	2 phaseTime
	
	Срабатывает одно из событий в скобках
	
	Заканчивается прорисовка



## Дополнительно:

Введите с клавиатуры "admin" для доступа к панели администратора.



