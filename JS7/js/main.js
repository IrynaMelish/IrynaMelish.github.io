  var tabContainers = $('div.wrp-text'); 
  tabContainers.hide(); 
  tabContainers.filter(':first').show(); 
  var tab = $('.tab');

  tab.click(function() { 
     tabContainers.hide();
    tab.removeClass("active"); 
    $(this).toggleClass("active"); 
     var i = $(this).index(); 
     $('#tab' + i).show(); 
  });
