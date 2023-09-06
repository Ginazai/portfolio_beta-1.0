/* global bootstrap: false */
(function () {
  'use strict'
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
})()

var myCarousel = $('#myCarousel');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false,
  ride: false
});

function submenuControl(object) {
  $(object).click(function() {
    setTimeout(function() {
      if (!$('#skills').hasClass('active')) {
      $('#skills-submenu').collapse('hide');
    } else {
      $('#skills-submenu').collapse('show');
    }
    }, 250);
  })
}

submenuControl('.nav-link');
submenuControl('.carousel-indicators');

function resizing(elem) {
  if ($(window).width() <= 1200) {
      $(elem).removeClass('container');
      $(elem).addClass('container-fluid');
    } else if ($(window).width() > 1200) {
      $(elem).removeClass('container-fluid');
      $(elem).addClass('container');
    }
}

$(window).on('resize', function() {
  resizing('#spring-carousel');
  resizing('#py-carousel');
  resizing('#php-carousel');
});

$(window).on('resize', function() {
    if ($(window).height() >= 755) {
      console.log($(window).height());
      $('.carousel-caption').addClass('text-dark');
    } else {$('.carousel-caption').addClass('text-white');} 
  });

  //document ready

$(document).ready(function() {

  // if (!$('.carousel-item').first().hasClass('active')) {
  //   setTimeout(function(){
  //     $('.carousel-item').first().addClass('active');
  //   }, 100);
  // }

  $('.nav-link').click(function() {
    $('.nav-link').removeClass('active');
    $(this).toggleClass('active');
  });

  function synchronize(item1, item2) {
    if ($(item1).hasClass('active')) {
      console.log('active detected');
      $(item2).addClass('active');
    } else {
      $(item2).removeClass('active');
    }
  }

  $('#myCarousel').on('slide.bs.carousel', function() {
      console.log('slide');
      synchronize('#main', '#menu-main');
      synchronize('#projects', '#menu-projects');
      synchronize('#skills', '#menu-skills');
      synchronize('#link', '#menu-link');
    });
  
});
