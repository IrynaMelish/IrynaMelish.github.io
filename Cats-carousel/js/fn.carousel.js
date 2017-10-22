(function($) {

	$.fn.myCarousel = function() {

		var currentLeftValue = 0;
		var elementsCount = $('.carousel-list').find('li').length;
		var pixelsOffset = 325;
		var minimumOffset = - ((elementsCount - 5) * pixelsOffset);


		$('.carousel-arrow-left').click(function() {

			if (currentLeftValue != 0) {

				currentLeftValue += 325; 

				$('.carousel-list').animate({ left : currentLeftValue + "px"}, 300);
			}
		});

		$('.carousel-arrow-right').click(function() {

			if (currentLeftValue != minimumOffset) {

				currentLeftValue -= 325;

				$('.carousel-list').animate({ left : currentLeftValue + "px"}, 300);
			}
		});
	};
}(jQuery));