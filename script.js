$(function(){
  $('.container').fadeIn(1000);

  $(window).scroll(function(){
        $('.content-wrapper').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight){
                $(this).addClass('scrollin');
            }
        });
    });

  $('.open-menu').click(function(){
      $('.menu').slideDown(200);
  });

  $('.close-menu').click(function(){
    $('.menu').slideUp(200);
  });

  $('.header-left a').hover(
    function(){
      $(this).animate({
      'font-size':'21px'
    }, 300);
    },
    function(){
      $(this).animate({
      'font-size':'20px'
    }, 300);
  });

  $('.link a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;

    $('html, body').animate({
      'scrollTop': position
      },500);
  });


});
