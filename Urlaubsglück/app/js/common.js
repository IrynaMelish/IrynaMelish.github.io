$(function() {

$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    smartSpeed: 700,
    
    transitionStyle:false,
    

   	navText :["<i class='fa fa-angle-left fa-5x'></i>","<i class='fa fa-angle-right fa-5x'></i>"],
   	responsiveClass: true,
   	responsive:{
   		0: {
   			
   		   	items: 1
   		}
   	}
       
});
var grid = $('.holiday__grid');
grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    persentPosition: true
});

window.pixabayCallback = function(){
    return;
};

function search(){
    grid.html('');
    var name = $('.search__input').val()

    $.ajax({
      url: 'https://pixabay.com/api/',
        data: {
            key: '6474713-413cbd10c3bbf97a1ef28d90e',
            q: name,
            callback: pixabayCallback(),
        },
        method: 'GET',
        dataType: 'jsonp',
        error: function(){
            alert('smth go wrong!');
        },
        success: function(data){

            var hits = data.hits;
            if (hits.length == 0){
                grid.html('<figure class="holiday__grid-item--error grid-item"><img class="holiday__grid-img" src="img/404.png" alt="error"></figure>');
                return;
            }   else {

                for (var i = 0; i < 7; i++) {
                    var url = hits[i].webformatURL;
                    var tags = hits[i].tags;
                   if (i == 4 || i == 5){
                    grid.append('<figure class="holiday__grid-item--width2 grid-item--width2"><img class="holiday__grid-img" src="' + url + '"><figcaption class="holiday__grid-text">' + tags + '</figcaption></figure>' );
                    } else
                    grid.append('<figure class="holiday__grid-item grid-item"><img class="holiday__grid-img" src="' + url + '"><figcaption class="holiday__grid-text">' + tags + '</figcaption></figure>' );
                    }
            }

        },
    });
}

search();
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


});