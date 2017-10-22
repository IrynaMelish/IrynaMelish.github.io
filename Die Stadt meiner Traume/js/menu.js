$(function(){
	$("nav").mouseenter(
	  function () {

    $(this).animate({ backgroundColor:"red",}, 500 );

});
$("nav").mouseleave(function() {

    $(this).animate({backgroundColor:"grey",}, 500 );
});
});

$(function() {
        $( '.dropdown' ).hover(
            function(){
                $(this).children('.sub-menu').slideDown(200);
            },
            function(){
                $(this).children('.sub-menu').slideUp(200);
            }
        );
    });


