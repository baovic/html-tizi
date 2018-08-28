// fix top header in mobile
$(window).scroll(function(){
  if ($(this).scrollTop() > 0) {
      $('.tizi-header').addClass('tizi-fixed');
  } else {
      $('.tizi-header').removeClass('tizi-fixed');
  }
});