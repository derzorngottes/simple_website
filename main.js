$(document).ready(function() {
  $('#expand-jobs a').click(function(e) {
    e.preventDefault();
    $(e.target).next('div .jobs').stop().toggle();
  });
});
