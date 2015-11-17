$(document).on('submit', '#search-form', function(e) {
  e.preventDefault();
  var options = {
    keywords: $('#search-term').val(),
    container: $('#search-results')
  };
  findImagesOnGoogle(options);
});

$(document).on('click', '#search-results img', function() {
  var url = $(this).data('url');
  $("#workspace img").remove();
  var img = $("<img>").attr('src', url);
  $('#workspace').append(img);
})
