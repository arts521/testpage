
$(function() {
  $('.heading').hover(function(){
    $('#fade-in').fadeIn();
  },
  (function(){
    $('#fade-in').hide();
  }));
  
  $('#button-bomb').prop("disabled", true);
});
