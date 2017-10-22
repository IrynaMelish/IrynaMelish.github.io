$('#seInput').focus();

function getImages() {
    $("#content").empty();
    var request = $("#seInput").val();
   
    var API_KEY = '4859326-757eb69b343b4864a2b067832';

    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + request + "&image_type=photo&orientation=horizontal&per_page=28";

   

    $.getJSON(URL, function (data) {
        console.log(data);
        if (parseInt(data.totalHits) > 0)
            $.each(data.hits, function (i, hit) {
                            var Objimg = $('<img></img>');
                            Objimg.attr("src", hit.previewURL);         
                            Objimg.attr("width", "180");                
                                        
                            $('#content').append(Objimg);

                
            });
        else
            alert('Leider, habe ich kein photo gefunden');
        
    });

    $('#seInput').focus();
};

$("#btnSearch").click(getImages);

$('#seInput').on('keydown', function (e) {
    
    if (e.keyCode === 13) {                 
        getImages();
    }
});




