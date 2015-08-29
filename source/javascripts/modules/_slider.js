$(document).ready(function(){
	$('.slider').each(function(index, sliderEl){
		var sliderEl = $(sliderEl);
		var sliderId = sliderEl.attr("id");
		var sliderControlsEl = $(".slider-controls[data-slider='" + sliderId + "']");

		var slides = sliderEl.children().map(function(index, element){
			return $(element);
		});

		var sliderIndexesEl = $("[data-slider-index][data-slider='" + sliderId + "']");

		var sliderIndex = 0;
		var isTransitioning = false;

		sliderControlsEl.find("[data-slider-action='next']").click(function(e){ 
			e.preventDefault();			
			next(); 
		});
		sliderControlsEl.find("[data-slider-action='previous']").click(function(e){ 
			e.preventDefault();			
			previous(); 
		});

		sliderEl.click(function(){ next(); });

		function increaseIndex(){
			sliderIndex = sliderIndex == slides.length-1 ? 0 : sliderIndex+1;
			notifyIndexChanged();
		}

		function decreaseIndex(){
			sliderIndex--;
			notifyIndexChanged();	
		}

		function notifyIndexChanged(){
			sliderIndexesEl.text(sliderIndex+1)
		}

		function next(e){
			if(!isTransitioning) {
				var previous = sliderIndex;
				increaseIndex();
				transition(previous, sliderIndex);
			}
		}

		function previous(e){
			if(!isTransitioning && 0 < sliderIndex) {
				var previous = sliderIndex;
				decreaseIndex();
				transition(previous, sliderIndex);
			}
		}

		function transition(currentIndex, nextIndex){
			sliderEl.css("min-height", sliderEl.height());
			isTransitioning = true;
			return hide(currentIndex, function(){
				return show(nextIndex, function(){
					isTransitioning = false;
				});
			});
		}

		function hide(index, callback){
			return slides[index].fadeOut(200, callback);
		}

		function show(index, callback){
			return slides[index].fadeIn(200, callback);
		}

		slides[0].show();
		notifyIndexChanged();		
	});
});
