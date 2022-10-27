let winW = $(window).width();

if(winW >= 1023) {
   $('.header_menu > li').hover(function () {
      $(this).find('.sub_menu_wrap').stop().slideDown();
   }, function () {
      $(this).find('.sub_menu_wrap').stop().slideUp();
   });
   $('.header_menu > li > a').unbind('click');
}else if(winW <= 1023){
   $('.header_menu > li').unbind('mouseenter mouseleave');

   $('.header_menu > li > a').click(function(e){
      $('.header_menu > li > a').siblings('.sub_menu_wrap').stop().slideUp();
      $(this).siblings('.sub_menu_wrap').stop().slideDown();
      e.preventDefault();
   })
}

$('.menu_btn').click(function () {
   $('.menu_btn').toggleClass('on');
   if ($(this).hasClass('on')) {
      $('.gnb').fadeIn();
      $('body').css({ 'overflow': 'hidden' });
   } else {
      $('nav').fadeOut();
      $('body').css({ 'overflow': 'auto' });
   }
})

$(window).resize(function () {
   let winW = $(window).width();
   $('.sub_menu_wrap').removeAttr('style');
   if(winW >= 1023) {
      $('.header_menu > li').hover(function () {
         $(this).find('.sub_menu_wrap').stop().slideDown();
      }, function () {
         $(this).find('.sub_menu_wrap').stop().slideUp();
      })
      $('.header_menu > li > a').unbind('click');

   }else if(winW <= 1023){
      $('.header_menu > li').unbind('mouseenter mouseleave');

      $('.header_menu > li > a').click(function(e){
         $('.header_menu > li > a').siblings('.sub_menu_wrap').stop().slideUp();
         $(this).siblings('.sub_menu_wrap').stop().slideDown();
         e.preventDefault();
      })
   }

   if (winW >= 1023 && $('.gnb').is(':hidden')) {
      $('.gnb').removeAttr('style');
      $('.menu_btn').removeClass('on');
   }

   if ($('.menu_btn').hasClass('on')) {
      $('body').css({ 'overflow': 'hidden' });
   } else {
      $('body').css({ 'overflow': 'auto' });
   }
   
})

const swiper = new Swiper('.main_visual_wrap', {
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});
let $slides = document.querySelectorAll('.swiper-slide');
for (let i of $slides) {
   i.addEventListener('mouseover', function () {
      swiper.autoplay.stop();
   });
   i.addEventListener('mouseout', function () {
      swiper.autoplay.start();
   });
}

