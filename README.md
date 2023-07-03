# 2048 game


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://vadim-galimov.github.io/2048game/">
    <img src="readme-logo.jpg" alt="Logo" width="80" height="80">
  </a>

</div>




<!-- ABOUT THE PROJECT -->


### Файлы:

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
 -меняю значения клеток в связи с их перемщением
 -обновляю список клеток (удаляется каждый вторая клетка из пары объекдинения)
 -если было зафиксированно движение, ход считается состоявшимся и создаю новую клетку
 -проверка на вин
 -проверка на луз
 -снимаю блок хода
 }


lose-win.js
проверка на победу или поражения и действия связанные с ними





### Дополнительно:

Введите с клавиатуры "admin" для доступа к панели администратора.

