$(function(){
$('.name-container__button, .my-work__button, .do-container__button').magnificPopup({
  items: {
      src: '#popup',
      type: 'inline'
  }
});


//Функция вызова открывающегося меню при режимах 1024 и 320

  
    $('.nav-list').click(function () {
        $('body').css('overflow', 'hidden'); // Просто добавляем стиль для body
        $('.popup-container__menu').fadeIn(400); 
        $('#popup__menu').animate({
            width: '50%',
            height: '30%'
        }, 400);

     })
//Фунция закрытия всплывающегося меню при нажании на кнопку "удалить"
    $('.popup__menu-delete').click(function () {
        
            $('body').css('overflow', 'auto'); // А тут его возвращаем в auto

            $('.popup-container__menu').fadeOut(400); 
            $('#popup__menu').animate({
                width: '0',
                height: '0'
            }, 400);
        
    });

//Функция вызова открывающегося меню при нажатии на кнопку "заказ звонка" планшетной и десктопной версии

    
        $('.header__button_ball , .footer__button').click(function () {
        $('body').css('overflow', 'hidden'); // Просто добавляем стиль для body
        $('.popup-container__ball').fadeIn(400); 

        $('#popup__button_ball').animate({
            width: '600px',
            height: '380px'
        }, 400);

     })
     //Функция вызова открывающегося меню при нажатии на кнопку "заказ звонка" мобильной версии
          $('.header__button_ball-320, .footer__button_320').click(function () {
        $('body').css('overflow', 'hidden'); // Просто добавляем стиль для body
        $('.popup-container__ball').fadeIn(400); 
           if (window.innerWidth < 600) {
        $('#popup__button_ball').animate({
            width: '300px',
            height: '250px'
        }, 400);
    }

     })
//Фунция закрытия всплывающегося меню "заказать звонок" при нажании на кнопку "отмена"
    $('.btn-cancel').click(function () {
        
            $('body').css('overflow', 'auto'); // А тут его возвращаем в auto

            $('.popup-container__ball').fadeOut(800); 
            
            $('#popup__button_ball').animate({
                width: '0',
                height: '0'
            }, 400);
        
    });

function swiper25() {
  var swiper = new Swiper('.swiper-container', {  

      slidesPerView: 3,   
      spaceBetween: 45,
      breakpoints: {
      1300: {
      slidesPerView: 2,
      spaceBetween: 35
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 50
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50
    }},
 
  
      slidesPerGroup: 1,
      speed: 900,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.my-work__img-container_arrow-right',
        nextEl: '.my-work__img-container_arrow-left',
      },
    });
}
swiper25()
});