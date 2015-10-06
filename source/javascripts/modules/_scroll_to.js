jQuery(".scroll-to").click(function(e){
	e.preventDefault();
	var element = this;
	var targetHref = $(element).attr("href");
	jQuery("body,html").animate({ scrollTop: $(targetHref).offset().top }, 1000, 'swing');
	jQuery(".active").removeClass("active");
	jQuery(element).addClass("active");
});
