$(function() {

	var url = document.location.href;

	$(".main-menu__link").each(function() {

		if(this.href==url){

			$(this).addClass('main-menu__link_active');
		};
	});

	$(".slider__item").each(function () {

		$(".slider__nav").append("<span class='slider__nav-item' rel='"+$(this).index()+"'></span>");
		$(this).addClass("slider"+$(this).index());
	});

	$(".slider__nav").find("span").first().addClass("slider__nav-item_checked");

	$(".slider__nav span").click(function() {

		$(".slider").find("span").removeClass("slider__nav-item_checked");
		$(this).addClass("slider__nav-item_checked");
		var item = $(this).attr("rel");
		$(".slider__block").animate({marginLeft: "-"+$(".slider__item").width()*item}, 400);
	});

	$('.accordion-item__header:first').addClass('accordion-item__header_open').next().css('display', 'block');

	$('.accordion-item__header').click(function() {

		if( $(this).hasClass('accordion-item__header_open') ) {

			$(this).removeClass('accordion-item__header_open').next().slideUp('fast');
		}
		else {
			$('.accordion-item__text').slideUp('fast');
			$('.accordion-item__header').removeClass('accordion-item__header_open');
			$(this).addClass('accordion-item__header_open');
			$(this).next().slideDown('fast');
		}
	});
});