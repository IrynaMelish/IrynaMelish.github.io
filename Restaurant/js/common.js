$(function() {
	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fade();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
	// Menu-toggle button
	$(".menu-icon").on("click", function() {
 		  $("nav ul").toggleClass("showing");
		});
	$(".nav-item a").on("click", function() {
			$("nav ul").removeClass("showing");
	 });	

	// Scrolling Effect

	$(window).on("scroll", function() {
		if($(window).scrollTop()) {
			  $('nav').addClass('black');
		}

		else {
			  $('nav').removeClass('black');
		}
  });
  $(function(){
	$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
			return false;
	});
});
	//Preloading
	$(function(){
		setTimeout(function(){
			$('body').addClass('loaded');
			
		}, 3000);
	});
});

