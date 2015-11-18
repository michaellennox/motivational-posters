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
  $(".activeimg").removeClass('activeimg');
  var img = $("<img>").attr('src', url);
  $(this).addClass('activeimg');
  $('#workspace').append(img);
  $('.hide').addClass('animated bounceInUp').removeClass('hide');
})

$(document).on('ready', function() {
  $("#caption").text($('#caption-text').val());
});

$(document).on('input', '#caption-text', function() {
  $("#caption").text($(this).val());
})

$(document).on('change', '#caption-left', function() {
  $("#caption").css("left", $(this).val() + 'px')
})

$(document).on('change', '#caption-top', function() {
  $("#caption").css("top", $(this).val() + 'px');
});

$(document).on('change', '#caption-width', function() {
  $("#caption").css("width", $(this).val() + 'px');
});

$(document).on('change', '#caption-size', function() {
  $("#caption").css("font-size", $(this).val() + 'px');
});

$(document).on('change', '#caption-colour', function() {
  $("#caption").css("color", $(this).val());
});

$(document).on('change', '#caption-align', function() {
  $("#caption").css("text-align", $(this).val());
});

$(document).on('change', '#caption-font', function() {
  $("#caption").css("font-family", $(this).val());
});
