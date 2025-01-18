$(document).ready(function() {
    $(window).scroll(function() {
      var scrollPos = $(this).scrollTop();
      $('#hero').css('background-position', 'center ' + (scrollPos * 0.5) + 'px');
    });
    $('.monument').hover(function() {
      $(this).css('transform', 'scale(1.05)');
      $(this).css('box-shadow', '0 12px 24px rgba(0, 0, 0, 0.3)');
    }, function() {
      $(this).css('transform', 'scale(1)');
      $(this).css('box-shadow', '0 6px 12px rgba(0, 0, 0, 0.1)');
    });
    $('h1').hide().fadeIn(1500);
    $('#hero h2').hide().delay(500).fadeIn(1500);
    $('#hero p').hide().delay(1000).fadeIn(1500);
  });
 