// fix top header in mobile
$(window).scroll(function(){
  if ($(this).scrollTop() > 0) {
      $('.tizi-header').addClass('tizi-fixed');
      $('.toppage').fadeIn( "slow" );
  } else {
      $('.tizi-header').removeClass('tizi-fixed');
      $('.toppage').fadeOut( "slow" );
  }
});
// scroll top
var topBtn = $('.toppage');
topBtn.click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});