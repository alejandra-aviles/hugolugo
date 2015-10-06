$(document).ready(function(){
  function activateSection(id) {
    var anchor = $('[href="#' + id + '"]');
    $('.active').removeClass('active');
    anchor.addClass('active');
  }

  var sectionId = window.location.hash.match(/#section-(.*)/)[1];
  if(sectionId) {
    setTimeout(function(){
      jQuery("body,html").animate({ scrollTop: $("#" + sectionId).offset().top }, 0, 'swing');
      activateSection(sectionId);
    }, 100);
  }
});

jQuery(".scroll-to").click(function(e){
	e.preventDefault();
	var element = this;
	var targetHref = $(element).attr("href");
	jQuery("body,html").animate({ scrollTop: $(targetHref).offset().top }, 1000, 'swing');
	jQuery(".active").removeClass("active");
	jQuery(element).addClass("active");
});
