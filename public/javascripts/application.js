$(document).on('submit', '#search-form', function(e) {
  e.preventDefault();
  var options = {
    keywords: $('#search-term').val(),
    container: $('#search-results')
  };
  findImagesOnGoogle(options);
});
