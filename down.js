//not using ES6 for browser dependencies
$(document).ready(function() {
  $('.down').click(function() {
    $('html, body').animate({
      scrollTop: $(window).innerHeight()
    }, 750);
  });
});
