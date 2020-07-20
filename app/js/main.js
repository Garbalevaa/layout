$(function(){

//Функция вызова открывающегося меню при режимах 1024 и 320
$('.nav-list').magnificPopup({
   items: {
      src: '#popup__menu',
      type: 'inline'
  }
});  
   
// Функция плавного перехода по ссылкам к якорям из меню и футера
 $(document).ready(function(){
    $(".header__list, .footer__ul_work").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
// Функция плавного перехода по ссылкам к якорям из выпадающего

 $('.popup__menu_a a').click(function () {
  $.magnificPopup.close();
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
         $('body').css('overflow', 'auto');
    });
//Функция вызова открывающегося меню при нажатии на кнопку "заказ звонка" планшетной и десктопной версии
$('.header__button_ball,.name-container__button, .my-work__button, .do-container__button, .footer__button, .header__button_ball-320, .footer__button_320').magnificPopup({
   items: {
      src: '#popup-container__ball',
      type: 'inline'
  }
});
function swiper() {
  var swiper = new Swiper('.swiper-container', {  

      slidesPerView: 3,   
      spaceBetween: 45,
      slidesPerColumn: 1,
      breakpoints: {
      1300: {
      slidesPerView: 2,
      spaceBetween: 45,
    },
    720: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 50,
    }},
    effect: 'slide',    
    loopedSlides: 3,  
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
swiper()
});