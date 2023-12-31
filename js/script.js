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
  ride: false,
  keyboard: true
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



  //document ready

$(document).ready(function() {

  if ($(window).width() <= 1300) {
    $('#spring-center').addClass('position-absolute top-50 start-50 translate-middle');
  } else {$('#spring-center').removeClass('position-absolute top-50 start-50 translate-middle');}

  if ($(window).width() <= 980) {
    $('#home-slide').addClass('h-50');
    $('#main-caption').addClass('position-aboluste bottom-0 start-50 translate-middle');
  } else {
      $('#home-slide').removeClass('h-50');
      $('#main-caption').removeClass('position-aboluste bottom-0 start-50 translate-middle');
    }

  src_list = ['images/buttons/bt_button.png',
    'images/buttons/html_button.png',
    'images/buttons/java_button.png',
    'images/buttons/jquery_button.png',
    'images/buttons/mysql_button.png',
    'images/buttons/spring_button.png',
    'images/buttons/postgres_button.png',
    'images/buttons/php_button.png',
    'images/buttons/python_button.png'];

  skill_counter = 0;
  $('#skill-image').click(function() {
    $(this).attr('src', src_list[skill_counter]);
    if (skill_counter == 8) {
      skill_counter = 0;
    } else {skill_counter += 1;}
  });

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
      setTimeout(function() {
        synchronize('#main', '#menu-main');
        synchronize('#projects', '#menu-projects');
        synchronize('#skill', '#menu-skills');
        synchronize('#link', '#menu-link');

        //mobile-nav
        synchronize('#main', '#nav-menu-main');
        synchronize('#projects', '#nav-menu-projects');
        synchronize('#skill', '#nav-menu-skills');
        synchronize('#link', '#nav-menu-link');

      }, 250);
      
    });

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

// $(window).on('resize', function() {
//     if ($(window).height() >= 755) {
//       console.log($(window).height());
//       $('.carousel-caption').addClass('text-dark');
//     } else {$('.carousel-caption').addClass('text-white');} 
//   });

$(window).on('resize', function() {
  if ($(window).width() <= 1300) {
    $('#spring-center').addClass('position-absolute top-50 start-50 translate-middle');
  } else {$('#spring-center').removeClass('position-absolute top-50 start-50 translate-middle');}
  
});

$(window).on('resize', function() {
  if ($(window).width() <= 980) {
    $('#home-slide').addClass('h-50');
    $('#main-caption').addClass('position-aboluste bottom-0 start-50 translate-middle');
  } else {
      $('#home-slide').removeClass('h-50');
      $('#main-caption').removeClass('position-aboluste bottom-0 start-50 translate-middle');
    }
});
  
});
