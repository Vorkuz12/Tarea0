$(function() {
  $('#image-wrap a').click(function() {
    var description = $('img', this).attr('alt'); 
    $('#overlay-text').text(description).fadeIn();
    return false;
  });

  $('#overlay-text').click(function() {
    $(this).fadeOut(); 
  });
});