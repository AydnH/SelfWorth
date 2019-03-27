//triggers the jWriteDimensions function when the window resizes

$(window).resize(function() {
    jWriteDimensions();
});

//triggers the jWriteDimensions function when the document loads

$(document).ready(function() {
    jWriteDimensions();
});


function jWriteDimensions(){

    //gets the width and height of the window

    jW = $(window).width();
    jH = $(window).height();

    //updates the text in the spans with id's #jWidth and #jHeight

    $("#jWidth").text(jW);
    $("#jHeight").text(jH);
}    
