$("span").hide();
 $("input").on({
        mouseenter: function(){
            $("span").hide();
            $(this).next("span").show();
        },  
        
        mouseleave: function(){
            $("span").hide();
        },
 });       


$('input[type="button"]').click( function() {
   $("span").show();
});

(function $() {
  
});
