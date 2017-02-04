  var tabContainers = $('div.wrp-text'); // получаем массив контейнеров
  tabContainers.hide(); // прячем все табы
  tabContainers.filter(':first').show(); // покажем первый элемент
  var tab = $('.tab');

  tab.click(function() { // слушаем событие click
     // изменим предыдущей вид
     tabContainers.hide(); // прячем все табы
     tab.removeClass("active"); // удаляем класс active

     // установим новый вид
     $(this).toggleClass("active"); // ставим перключатель
     var i = $(this).index(); // получаем порядковый номер нажатого
     $('#tab' + i).show(); // показываем i-й tab
  });
