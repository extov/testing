$(function() {
  // Инициализация слайдера

  $('.jcarousel').jcarousel({
    // Базовые настройки скрипта пишутся здесь

  });

  $('.jcarousel-prev').jcarouselControl({
      target: '-=1'
  });

  $('.jcarousel-next').jcarouselControl({
      target: '+=1'
  });


// select box
$(document).ready(function() {
  $('select').niceSelect();
});

 
});

