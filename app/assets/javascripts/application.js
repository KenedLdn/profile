// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require turbolinks
//= require_tree .

$(function(){
  function smooth_scroll_to(elem){
    var offset = 0;
    offset = $(elem).offset().top - 50;
    $('html, body').animate({
        scrollTop: offset
    }, 1200, 'easeInOutQuad');
  }

  // Initiate smooth scroll to area based on navigation item title attr
  $(document).on("click", "#aboutlink, #projectslink, #contactlink", function(e){
      e.preventDefault();
      var elem = $(this).attr('href');
      smooth_scroll_to(elem);
    });
})
