$(document).ready(function () {
    'use strict';
    var currentFloor = 2;
    var floorPath =  $('.home-image path');
    var counterUp = $('.counter-up');
    var counterDown = $('.counter-down');
    var modal = $('.modal');
    var modalCloseButton = $('.modal-close-button');
    var viewFlatsButton = $('.view-flats');
    var flatsPath = $('.modal-image path');
    var flatsLink = $('.flat-link');
    // Функция при наведении мышью на этаж
    
    floorPath.on('mouseover', function () {
        floorPath.removeClass('current-floor'); // Удаляем активный класс у этажей
        currentFloor = $(this).attr('data-floor'); // Получаем значение текущего этажа
        $('.counter').text(currentFloor); // Записываем значение этажа в счётчик справа
    });

    counterUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            var usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor'); // Убираем класс у всех
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor'); // Подсвечиваем нужный этаж
        }
    });

    counterDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            var usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $('.counter').text(usCurrentFloor);
            floorPath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        }
    });

    function deleteClass() {
        flatsPath.removeClass('current-flat');
        flatsLink.removeClass('current-flat');
      }
    
      flatsPath.on('mouseover', function() {
        deleteClass();
        $(`[data-flat-link="${$(this).attr('data-flat')}"]`).toggleClass('current-flat');
      });
    
      flatsLink.on('mouseover', function() {
        deleteClass();
        $(`[data-flat="${$(this).attr('data-flat-link')}"]`).toggleClass('current-flat');
      });

    // Функция открыть-закрыть окно

    function toggleModal() {
        modal.toggleClass('is-open');
    }

    floorPath.on('click', toggleModal);
    modalCloseButton.on('click', toggleModal); 
    viewFlatsButton.on('click', toggleModal);
});