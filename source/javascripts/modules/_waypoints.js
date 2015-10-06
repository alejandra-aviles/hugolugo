$(document).ready(function(){
  var active = false;

  function activateSection(id) {
    if(active) {
      var anchor = $('[href="#' + id + '"]');
      $('.active').removeClass('active');
      anchor.addClass('active');
      window.location.hash = "#section-" + id;
    }
  }

  $('.section').waypoint({
    handler: function(direction) {
      if(direction === 'down') {
        var id = this.element.id;
        activateSection(id);
      }
    }
  });

  $('.section-info').waypoint({
    handler: function(direction) {
      if(direction === 'up') {
        var id = $(this.element).parent('.section').attr('id');
        activateSection(id);
      }
    }
  });

  setTimeout(function(){
    active = true;
  }, 1000);

});
